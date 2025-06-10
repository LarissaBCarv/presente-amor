import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const passeios = [
  {
    nome: "Spa Day",
    preco: "R$ 1.200,00",
    descricao: "Um dia inteiro de relaxamento...",
    imagem: "spaday.png",
  },
  {
    nome: "Sampa Sky",
    preco: "R$ 350,00",
    descricao: "A vista mais impressionante de São Paulo...",
    imagem: "sampasky.png",
  },
  {
    nome: "Observar o Céu",
    preco: "R$ 300,00",
    descricao: "Olhar as estrelas e conversar sobre a vida...",
    imagem: "ceu.png",
  },
  {
    nome: "Noite romântica em casa",
    preco: "R$ 400,00",
    descricao: "Luzes baixas, comida gostosa e a melhor companhia...",
    imagem: "noiteemcasa.png",
  },
  {
    nome: "Zoológico de SP",
    preco: "R$ 350,00",
    descricao: "Um passeio leve e divertido...",
    imagem: "zoo.png",
  },
  {
    nome: "Ir ao Cinema",
    preco: "R$ 200,00",
    descricao: "Filme, pipoca e mãos entrelaçadas...",
    imagem: "cinema.png",
  },
  {
    nome: "Aquário de SP",
    preco: "R$ 450,00",
    descricao: "Cenário encantado com peixes, tubarões...",
    imagem: "aquario.png",
  },
  {
    nome: "Tarundu",
    preco: "R$ 620,00",
    descricao: "Parque Tarundu: aventura e natureza...",
    imagem: "Tarundu.png",
  },
];

const ITEMS_PER_PAGE = 4;
const LIMITE_TOTAL = 3600;

const precoStringParaNumero = (precoStr) => {
  return Number(
    precoStr.replace("R$ ", "").replace(/\./g, "").replace(",", ".")
  );
};

const PaginaPasseios = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selecionados, setSelecionados] = useState(() => {
    const itens = localStorage.getItem("passeiosSelecionados");
    return itens ? JSON.parse(itens) : [];
  });
  const navigate = useNavigate();

  const totalAtual = selecionados.reduce((acc, nome) => {
    const passeio = passeios.find((p) => p.nome === nome);
    return passeio ? acc + precoStringParaNumero(passeio.preco) : acc;
  }, 0);

  const toggleSelecionado = (nome, precoStr) => {
    const preco = precoStringParaNumero(precoStr);
    let novosSelecionados;

    if (selecionados.includes(nome)) {
      novosSelecionados = selecionados.filter((item) => item !== nome);
    } else {
      if (totalAtual + preco > LIMITE_TOTAL) {
        alert(
          `Você não pode ultrapassar o limite de R$ ${LIMITE_TOTAL.toLocaleString(
            "pt-BR",
            {
              minimumFractionDigits: 2,
            }
          )}.`
        );
        return;
      }
      novosSelecionados = [...selecionados, nome];
    }

    setSelecionados(novosSelecionados);
    localStorage.setItem(
      "passeiosSelecionados",
      JSON.stringify(novosSelecionados)
    );
    const novoTotal = novosSelecionados.reduce((acc, nome) => {
      const p = passeios.find((item) => item.nome === nome);
      return p ? acc + precoStringParaNumero(p.preco) : acc;
    }, 0);
    localStorage.setItem("totalPasseios", novoTotal);
    window.dispatchEvent(new Event("atualizarTotal"));
  };

  const passeiosVisiveis = passeios.slice(
    paginaAtual * ITEMS_PER_PAGE,
    (paginaAtual + 1) * ITEMS_PER_PAGE
  );

  const botaoEstilo = {
    padding: "10px 25px",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#396d7c",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(57, 109, 124, 0.4)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    userSelect: "none",
  };

  const botaoDesabilitado = {
    ...botaoEstilo,
    backgroundColor: "#a2d2df",
    color: "#666",
    cursor: "not-allowed",
    boxShadow: "none",
    transform: "none",
  };

  const totalPaginas = Math.ceil(passeios.length / ITEMS_PER_PAGE);

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

      <header style={{ textAlign: "center", padding: "10px" }}>
        <h1 style={{ fontSize: "100px", color: "#333" }}>
          Qual será o nosso próximo passeio?
        </h1>
        <p style={{ fontSize: "45px", color: "#555" }}>
          Cada passeio é uma chance de criar mais uma memória juntinhas.
          <br />
          Escolha aquele que combina com a nossa vibe e deixa o coração leve.
        </p>
      </header>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {passeiosVisiveis.map((passeio, index) => {
          const selecionado = selecionados.includes(passeio.nome);
          return (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => toggleSelecionado(passeio.nome, passeio.preco)}
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
                src={`/${passeio.imagem}`}
                alt={passeio.nome}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h3 style={{ fontSize: "40px", color: "#333" }}>
                {passeio.nome}
              </h3>
              <p style={{ fontSize: "30px", color: "#555" }}>
                {passeio.descricao}
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {passeio.preco}
              </p>
            </div>
          );
        })}
      </section>

      <div style={{ textAlign: "center", margin: "60px 0" }}>
        <button
          onClick={() => setPaginaAtual(paginaAtual - 1)}
          disabled={paginaAtual === 0}
          style={paginaAtual === 0 ? botaoDesabilitado : botaoEstilo}
        >
          ⬅️ Anterior
        </button>

        <button
          onClick={() => setPaginaAtual(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas - 1}
          style={{
            ...(paginaAtual === totalPaginas - 1
              ? botaoDesabilitado
              : botaoEstilo),
            marginLeft: "20px",
          }}
        >
          Próxima ➡️
        </button>
      </div>
    </div>
  );
};

export default PaginaPasseios;
