import React from "react";

const PaginaNoiteCasa = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
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
        <source src="/NoiteEmCasa.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
};

export default PaginaNoiteCasa;
