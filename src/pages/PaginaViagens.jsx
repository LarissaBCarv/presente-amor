import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const destinos = [
  {
    nome: "Campos do Jordão",
    descricao: "Clima europeu, lareira, fondue e charme.",
    imagem: "campos.png",
    paginaDestino: "/Campos",
    preco: "R$ 3.300,00",
  },
  {
    nome: "Gonçalves",
    descricao: "Trilhas, cachoeiras e chalés rústicos.",
    imagem: "goncalves.png",
    paginaDestino: "/Goncalves",
    preco: "R$ 2.500,00",
  },
  {
    nome: "St. Antônio do Pinhal",
    descricao: "Pequena, charmosa e cercada por montanhas.",
    imagem: "sto-antonio.png",
    paginaDestino: "/StoAntonio",
    preco: "R$ 3.600,00",
  },
  {
    nome: "Igaratá",
    descricao: "Ideal para dias calmos, natureza e conexão.",
    imagem: "igarata.png",
    paginaDestino: "/Igarata",
    preco: "R$ 2.600,00",
  },
  {
    nome: "Jacareí",
    descricao: "Cenário tranquilo e opções acolhedoras.",
    imagem: "jacarei.png",
    paginaDestino: "/Jacarei",
    preco: "R$ 3.500,00",
  },
  {
    nome: "Monte Verde",
    descricao: "Chalés, lareiras e clima romântico.",
    imagem: "monte-verde.png",
    paginaDestino: "/MonteVerde",
    preco: "R$ 3.200,00",
  },
  {
    nome: "São Paulo",
    descricao: "Mil vozes ao redor, mas só a sua importa.",
    imagem: "saopaulo.png",
    paginaDestino: "/SaoPaulo",
    preco: "R$ 2.800,00",
  },
  {
    nome: "São Bento do Sapucaí",
    descricao: "Paisagens incríveis e clima de aventura.",
    imagem: "sao-bento.png",
    paginaDestino: "/SaoBento",
    preco: "R$ 2.600,00",
  },
  {
    nome: "Santa Isabel",
    descricao: "Sossego e charme perto de SP.",
    imagem: "sta-isabel.png",
    paginaDestino: "/StaIsabel",
    preco: "R$ 3.300,00",
  },
];

const precoStringParaNumero = (precoStr) => {
  return Number(
    precoStr.replace("R$ ", "").replace(/\./g, "").replace(",", ".")
  );
};

const ITEMS_PER_PAGE = 5;
const LIMITE_TOTAL = 3600;

const PaginaViagens = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [itensSelecionados, setItensSelecionados] = useState(() => {
    const itens = localStorage.getItem("itensSelecionados");
    return itens ? JSON.parse(itens) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    const atualizarSelecionados = () => {
      const itens = JSON.parse(localStorage.getItem("itensSelecionados")) || [];
      setItensSelecionados(itens);
    };
    window.addEventListener("atualizarTotal", atualizarSelecionados);
    return () =>
      window.removeEventListener("atualizarTotal", atualizarSelecionados);
  }, []);

  const adicionarOuRemoverDestino = (nome, precoStr) => {
    const preco = precoStringParaNumero(precoStr);
    const jaSelecionado = itensSelecionados.some((item) => item.nome === nome);
    let novosItens;

    const totalAtual = itensSelecionados.reduce(
      (acc, item) => acc + item.preco,
      0
    );

    if (jaSelecionado) {
      novosItens = itensSelecionados.filter((item) => item.nome !== nome);
    } else {
      if (totalAtual + preco > LIMITE_TOTAL) {
        alert("Você não pode ultrapassar o limite de R$ 3.600,00.");
        return;
      }
      novosItens = [...itensSelecionados, { nome, preco }];
    }

    setItensSelecionados(novosItens);
    localStorage.setItem("itensSelecionados", JSON.stringify(novosItens));
    localStorage.setItem(
      "totalCompra",
      novosItens.reduce((acc, item) => acc + item.preco, 0)
    );
    window.dispatchEvent(new Event("atualizarTotal"));
  };

  const destinosVisiveis = destinos.slice(
    paginaAtual * ITEMS_PER_PAGE,
    (paginaAtual + 1) * ITEMS_PER_PAGE
  );

  const totalPaginas = Math.ceil(destinos.length / ITEMS_PER_PAGE);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Share Tech', sans-serif",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/paginas.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "100px", color: "#333" }}>
          Vamos escolher o nosso próximo destino?
        </h1>
        <p style={{ fontSize: "45px", color: "#555" }}>
          Viajar é mais do que mudar de lugar, é criar lembranças, viver
          histórias e sentir o tempo parar quando estamos juntas.
        </p>
      </header>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "30px",
        }}
      >
        {destinosVisiveis.map((destino, index) => {
          const selecionado = itensSelecionados.some(
            (item) => item.nome === destino.nome
          );
          return (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() =>
                adicionarOuRemoverDestino(destino.nome, destino.preco)
              }
              style={{
                textAlign: "center",
                padding: "30px",
                border: "5px solid #396d7c",
                borderRadius: "5px",
                width: "300px",
                background: selecionado
                  ? "#a2d2df"
                  : "linear-gradient(to bottom right, #cdffd8, #94b9ff)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: hoverIndex === index ? 1 : 0.9,
                transform: hoverIndex === index ? "scale(1.02)" : "scale(1)",
              }}
            >
              <img
                src={"/" + destino.imagem}
                alt={destino.nome}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h3 style={{ fontSize: "40px", color: "#333" }}>
                {destino.nome}
              </h3>
              <p style={{ fontSize: "30px", color: "#555" }}>
                {destino.descricao}
              </p>
              <p
                style={{ fontSize: "30px", fontWeight: "bold", color: "#333" }}
              >
                {destino.preco}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(destino.paginaDestino);
                }}
                style={{
                  marginTop: "10px",
                  padding: "8px 20px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: "#396d7c",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2f5563")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#396d7c")
                }
              >
                Ver mais
              </button>
            </div>
          );
        })}
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <button
          onClick={() => setPaginaAtual((p) => Math.max(p - 1, 0))}
          disabled={paginaAtual === 0}
          style={{
            padding: "10px 25px",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: paginaAtual === 0 ? "#a2d2df" : "#396d7c",
            border: "none",
            borderRadius: "12px",
            cursor: paginaAtual === 0 ? "not-allowed" : "pointer",
            boxShadow:
              paginaAtual === 0 ? "none" : "0 4px 8px rgba(57, 109, 124, 0.4)",
          }}
        >
          ⬅️ Anterior
        </button>

        <button
          onClick={() =>
            setPaginaAtual((p) => Math.min(p + 1, totalPaginas - 1))
          }
          disabled={paginaAtual >= totalPaginas - 1}
          style={{
            padding: "10px 25px",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor:
              paginaAtual >= totalPaginas - 1 ? "#a2d2df" : "#396d7c",
            border: "none",
            borderRadius: "12px",
            cursor: paginaAtual >= totalPaginas - 1 ? "not-allowed" : "pointer",
            boxShadow:
              paginaAtual >= totalPaginas - 1
                ? "none"
                : "0 4px 8px rgba(57, 109, 124, 0.4)",
          }}
        >
          Próxima ➡️
        </button>
      </div>
    </div>
  );
};

export default PaginaViagens;
