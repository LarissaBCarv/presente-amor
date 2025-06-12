import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaginaInicial = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/nosso-aniversario.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Share Tech', sans-serif",
          fontSize: "200px",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
        }}
      >
        <p
          style={{
            marginTop: "700px",
            marginRight: "1000px",
          }}
        >
          NOSSO <br /> ANIVERSÁRIO
        </p>

        <button
          onClick={() => navigate("/apresentacao")}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: "15px 50px",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "'Share Tech', sans-serif",
            color: "#fff",
            backgroundColor: hover ? "#4c91a3" : "#396d7c",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(57, 109, 124, 0.4)",
            marginBottom: "90px",
            marginLeft: "500px",
            width: "900px",
            height: "100px",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          Clique para começar essa jornada ♡
        </button>
      </div>
    </div>
  );
};

export default PaginaInicial;
