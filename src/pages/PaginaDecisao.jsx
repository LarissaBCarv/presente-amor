import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaginaDecisao() {
  const navigate = useNavigate();
  const [hoverIndex, setHoverIndex] = useState(null);

  const opcoes = [
    {
      src: "/presentes.png",
      titulo: "PRESENTES",
      texto:
        'Um mimo escolhido com carinho, que diz "pensei em você" sem precisar de palavras.',
      link: "/presentes",
    },
    {
      src: "/viagens.png",
      titulo: "VIAGENS",
      texto:
        "Fugir da rotina e viver dias incríveis só nós duas, em um cantinho especial.",
      link: "/viagens",
    },
    {
      src: "/jantar.png",
      titulo: "JANTAR",
      texto:
        "Um jantar delicioso, sorrisos trocados e aquele clima que só a gente entende. Um brinde ao nosso amor.",
      link: "/jantar",
    },
    {
      src: "/passeios.png",
      titulo: "PASSEIOS",
      texto:
        "Vamos explorar o mundo juntos, mesmo que seja só a cidade. Cada cantinho vira especial com você ao meu lado.",
      link: "/passeios",
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
      {/* Fundo em vídeo */}
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
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* Conteúdo */}
      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "100px", color: "#333" }}>
          Hora de escolher os detalhes do nosso dia!
        </h1>
        <p style={{ fontSize: "50px", color: "#555" }}>
          Cada escolha é um pedacinho da nossa história. Escolha o que mais
          combina com a gente e <br />
          vamos transformar esse dia em uma lembrança inesquecível.
        </p>
      </header>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "30px",
        }}
      >
        {opcoes.map((item, index) => (
          <button
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => navigate(item.link)}
            style={{
              textAlign: "center",
              padding: "40px",
              border: "5px solid #396d7c",
              borderRadius: "5px",
              width: "450px",
              background: "linear-gradient(to bottom right, #cdffd8, #94b9ff)",
              cursor: "pointer",
              outline: "none",
              fontFamily: "inherit",
              transition: "all 0.3s ease",
              opacity: hoverIndex === index ? 1 : 0.9,
              transform: hoverIndex === index ? "scale(1.02)" : "scale(1)",
            }}
          >
            <img
              src={item.src}
              alt={item.titulo}
              style={{
                width: "100%",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            />
            <h3 style={{ fontSize: "40px", color: "#333" }}>{item.titulo}</h3>
            <p style={{ fontSize: "30px", color: "#555" }}>{item.texto}</p>
          </button>
        ))}
      </section>
    </div>
  );
}

export default PaginaDecisao;
