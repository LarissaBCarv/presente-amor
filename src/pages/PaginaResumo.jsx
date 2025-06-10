import React, { useEffect, useState } from "react";

const PaginaResumo = () => {
  const [itensSelecionados, setItensSelecionados] = useState([]);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("itensSelecionados")) || [];
    setItensSelecionados(itens);
  }, []);

  const total = itensSelecionados.reduce((acc, item) => acc + item.preco, 0);

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
        <source src="/resumo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "100px", color: "#333" }}>Nosso Dia Especial</h1>
        <p style={{ fontSize: "50px", color: "#555" }}>
          Que delícia planejar esse momento juntas! Mal posso esperar para viver
          cada segundo com você. 💖
        </p>
      </header>

      <section style={{ textAlign: "center", padding: "20px" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "rgb(71, 128, 148)",
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{ fontSize: "90px", color: "white", marginBottom: "20px" }}
          >
            O que você escolheu:
          </h2>

          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              fontSize: "50px",
              color: "white",
              margin: 0,
            }}
          >
            {itensSelecionados.length > 0 ? (
              itensSelecionados.map((item, index) => (
                <li key={index}>
                  💖 {item.nome} — R$ {item.preco.toFixed(2).replace(".", ",")}
                </li>
              ))
            ) : (
              <li>Nenhum item selecionado ainda!</li>
            )}
          </ul>

          {itensSelecionados.length > 0 && (
            <p
              style={{
                fontSize: "48px",
                marginTop: "40px",
                color: "#fff",
              }}
            >
              Total: R$ {total.toFixed(2).replace(".", ",")}
            </p>
          )}
        </div>
      </section>

      <div>
        <section style={{ textAlign: "center", padding: "50px" }}>
          <h3 style={{ fontSize: "50px", color: "#333" }}>
            Agora é só esperar o dia chegar — e aproveitar muito!
          </h3>
          <p style={{ fontSize: "38px", color: "#555" }}>
            <strong>
              Deixa comigo que vou preparar tudo pra nós. <br />
              Prepare-se para momentos inesquecíveis! ✨
            </strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PaginaResumo;
