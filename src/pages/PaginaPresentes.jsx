import React, { useState } from "react";

const PaginaPresentes = () => {
  const precoStringParaNumero = (precoStr) => {
    return Number(
      precoStr.replace("R$ ", "").replace(/\./g, "").replace(",", ".")
    );
  };

  const [itensSelecionados, setItensSelecionados] = useState(() => {
    const itens = localStorage.getItem("itensSelecionados");
    return itens ? JSON.parse(itens) : [];
  });

  const [hoverIndex, setHoverIndex] = useState(null);

  const adicionarOuRemoverPresente = (nome, precoStr) => {
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
      if (totalAtual + preco > 3600) {
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

  const presentes = [
    {
      nome: "Presente Themed",
      preco: "R$ 500,00",
      descricao:
        'Defina um tema para os presentes, como "presentes para a cozinha", "presentes para relaxar" ou "presentes para o amor".',
      imagem: "tema.png",
    },
    {
      nome: "Presente em Segredo",
      preco: "R$ 500,00",
      descricao:
        "Cada um compra um presente para o outro, sem saber o que o outro vai comprar. A surpresa é a chave!",
      imagem: "segredo.png",
    },
    {
      nome: "Presente DIY",
      preco: "R$ 500,00",
      descricao:
        "O casal cria um presente juntos, como um quadro pintado, uma cesta de doces ou um vídeo de homenagem.",
      imagem: "diy.png",
    },
    {
      nome: "Presente Ideal",
      preco: "R$ 500,00",
      descricao:
        "Cada um faz uma lista de desejos de presentes, e o outro escolhe um dos itens da lista para comprar.",
      imagem: "lista.png",
    },
    {
      nome: "Presente Compartilhado",
      preco: "R$ 500,00",
      descricao:
        "O casal compra um presente em conjunto, que seja útil para ambos, como um jogo de tabuleiro ou um eletrodoméstico.",
      imagem: "compartilhado.png",
    },
  ];

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
          Escolha um presente especial!
        </h1>
        <p style={{ fontSize: "50px", color: "#555" }}>
          Cada presente carrega um significado único. Escolha aquele que mais
          representa o nosso momento. 🎁
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
        {presentes.map((presente, index) => {
          const selecionado = itensSelecionados.some(
            (item) => item.nome === presente.nome
          );
          return (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() =>
                adicionarOuRemoverPresente(presente.nome, presente.preco)
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
                src={presente.imagem}
                alt={presente.nome}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h3 style={{ fontSize: "40px", color: "#333" }}>
                {presente.nome}
              </h3>
              <p style={{ fontSize: "30px", color: "#555" }}>
                {presente.descricao}
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {presente.preco}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PaginaPresentes;
