import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaginaApresentacao = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", // ocupa toda a altura da tela
        overflow: "hidden",
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

      <div
        style={{
          display: "flex",
          alignItems: "center", // centraliza verticalmente
          gap: "40px", // espaço entre texto e imagem
          marginLeft: "150px", // pra alinhar com seu estilo atual
          marginTop: "300px",
        }}
      >
        <header style={{}}>
          <h1
            style={{
              fontSize: "100px",
              color: "#333",
              fontFamily: "'Share Tech', sans-serif",
              marginLeft: 250,
            }}
          >
            Bem-vinda, meu amor!
          </h1>
          <p
            style={{
              fontSize: "50px",
              color: "#555",
              lineHeight: "1.2",
              fontFamily: "'Share Tech', sans-serif",
              marginBottom: "180px",
              marginLeft: "170px",
            }}
          >
            Preparei esse espacinho com todo carinho pra você montar <br />
            do jeitinho que quiser o nosso aniversário de namoro.
            <br /> Aqui, você vai poder escolher o tipo de comemoração, <br />
            passeios que mais combinam com a gente,
            <br /> e montar um dia só nosso — tudo dentro de um orçamento de{" "}
            <b>R$ 2.000! (exceto viagens) </b>
            <br /> Você escolhe, eu realizo.
            <br /> E o mais importante: vamos celebrar o nosso amor do jeito{" "}
            <br />
            mais especial possível. Vamos começar?
          </p>
        </header>

        <img
          src="/desenho.png"
          alt="Nossa foto"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            marginBottom: "100px",
            marginLeft: "100px",
          }}
        />
        <div>
          <button
            onClick={() => navigate("/decisao")}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              position: "fixed",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "15px 30px",
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "'Share Tech', sans-serif",
              color: "#fff",
              backgroundColor: hover ? "#4c91a3" : "#396d7c", // Azul escuro e hover
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(57, 109, 124, 0.4)",
              width: "500px",
              height: "120px",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              zIndex: 2,
            }}
          >
            Vamos Planejar!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginaApresentacao;
