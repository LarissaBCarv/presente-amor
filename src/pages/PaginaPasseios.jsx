import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const passeios = [
  {
    nome: "Spa Day",
    preco: "R$ 1.200,00",
    descricao: "Um dia inteiro de relaxamento...",
    imagem: "spaday.png",
    link: "https://lissage.com.br/product/relaxant-pour-deux/",
  },
  {
    nome: "Sampa Sky",
    preco: "R$ 350,00",
    descricao: "A vista mais impressionante de São Paulo.",
    imagem: "sampasky.png",
    link: "https://www.instagram.com/sampasky/?hl=pt-br",
  },
  {
    nome: "Observar o Céu",
    preco: "R$ 300,00",
    descricao: "Olhar as estrelas e conversar sobre a vida.",
    imagem: "ceu.png",
    link: "/ObservarCeu",
  },
  {
    nome: "Noite romântica em casa",
    preco: "R$ 400,00",
    descricao: "Luzes baixas, comida gostosa e a melhor companhia.",
    imagem: "noiteemcasa.png",
    link: "/NoiteCasa",
  },
  {
    nome: "Zoológico de SP",
    preco: "R$ 350,00",
    descricao: "Um passeio leve e divertido.",
    imagem: "zoo.png",
    link: "https://www.instagram.com/zoosaopaulo/",
  },
  {
    nome: "Ir ao Cinema",
    preco: "R$ 200,00",
    descricao: "Filme, pipoca e mãos entrelaçadas.",
    imagem: "cinema.png",
    link: "https://www.instagram.com/diamantevalesul/",
  },
  {
    nome: "Aquário de SP",
    preco: "R$ 450,00",
    descricao: "Cenário encantado com peixes, tubarões.",
    imagem: "aquario.png",
    link: "https://www.instagram.com/aquariosp/?hl=pt-br",
  },
  {
    nome: "Tarundu",
    preco: "R$ 620,00",
    descricao: "Parque Tarundu: aventura e natureza.",
    imagem: "Tarundu.png",
    link: "https://tarundu.com.br/",
  },
  {
    nome: "Parque Maeda",
    preco: "R$ 350,00",
    descricao: "Natureza, flores e mãos dadas entre árvores encantadas.",
    imagem: "parqueMaeda.png",
    link: "https://parquemaeda.com.br/",
  },
  {
    nome: "Dopamine Land",
    preco: "R$ 200,00",
    descricao:
      "Luzes, risadas e sentidos despertos num mundo de pura diversão.",
    imagem: "dopamine.png",
    link: "https://feverup.com/m/304411?utm_source=instagram&utm_medium=bio&utm_campaign=304411_gru&utm_content=dopamineland.experience&fbclid=PAZXh0bgNhZW0CMTEAAacS2klzUd66twR4B_23p9Z8HKOecU_GvEXPW0U-rT870jITHukTGO5EEi9Zgw_aem_0_Deb1b4tv1UGmi1kF7agAp/?hl=pt-br",
  },
];

const ITEMS_PER_PAGE = 5;
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
    const salvos = JSON.parse(localStorage.getItem("itensSelecionados")) || [];
    return salvos.map((item) => item.nome);
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
            { minimumFractionDigits: 2 }
          )}.`
        );
        return;
      }
      novosSelecionados = [...selecionados, nome];
    }

    setSelecionados(novosSelecionados);

    // Atualizar localStorage no formato esperado
    const dadosParaSalvar = novosSelecionados.map((nome) => {
      const p = passeios.find((item) => item.nome === nome);
      return { nome: p.nome, preco: precoStringParaNumero(p.preco) };
    });

    localStorage.setItem("itensSelecionados", JSON.stringify(dadosParaSalvar));
    const novoTotal = dadosParaSalvar.reduce(
      (acc, item) => acc + item.preco,
      0
    );
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
                <a
                  href={passeio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ color: "#333", textDecoration: "underline" }}
                >
                  {passeio.nome}
                </a>
              </h3>
              <p style={{ fontSize: "30px", color: "#555" }}>
                {passeio.descricao}
              </p>
              <p
                style={{ fontSize: "30px", fontWeight: "bold", color: "#333" }}
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
