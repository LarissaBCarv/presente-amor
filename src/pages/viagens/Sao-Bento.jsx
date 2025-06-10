import React from "react";

const PaginaSaoBento = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Share Tech', sans-serif",
        padding: "40px 60px",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
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

      {/* HEADER - full width dentro do padding */}
      <header
        style={{
          position: "relative",
          zIndex: 1,
          marginBottom: "80px",
          textAlign: "left",
          width: "100%", // 100% da largura do container
          // REMOVI maxWidth para expandir 100%
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            color: "#333",
            marginBottom: "20px",
            width: "100%", // opcional para garantir ocupar full width do header
          }}
        >
          Encanto e Natureza em São Bento do Sapucaí
        </h1>
        <p style={{ fontSize: "40px", color: "#555", lineHeight: 1.5 }}>
          Imagine um refúgio onde as montanhas abraçam o céu e cada pôr do sol
          parece pintado à mão. Em São Bento do Sapucaí, cada instante se
          transforma em poesia. Esse destino é perfeito para casais que buscam
          tranquilidade, natureza e momentos únicos a dois. Caminhadas entre
          araucárias, trilhas até a famosa Pedra do Baú, tardes frias com
          lareira e chocolate quente, e aquela paz que só o interior oferece.
        </p>
      </header>

      {/* SEGUNDA SEÇÃO alinhada à direita, com imagem + texto lado a lado */}
      <section
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        {/* Imagem lateral */}
        <div style={{ flex: "1 1 300px", maxWidth: "800px" }}>
          <img
            src="/monte-verde.png"
            alt="Paisagem de Jacareí"
            style={{
              width: "100%",
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        {/* Conteúdo do lado esquerdo dentro da seção */}
        <div
          style={{
            flex: "1 1 300px",
            color: "#333",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "70px", marginBottom: "20px" }}>
            Momentos a Dois em São Bento
          </h2>
          <p style={{ fontSize: "43px", lineHeight: 1.5 }}>
            Aqui, o tempo desacelera. Cada olhar, cada toque e cada silêncio
            compartilham significados. É um convite para renovar o amor na
            simplicidade do campo, com charme, conforto e paisagens de tirar o
            fôlego.
          </p>
          <p style={{ fontSize: "40px", lineHeight: 1.5 }}>
            A hospedagem será em uma casa cercada pela mata, o{" "}
            <a
              href="https://www.airbnb.com.br/rooms/51944342?adults=2&check_in=2025-07-04&check_out=2025-07-06&children=0&infants=0&pets=0&wishlist_item_id=11005003644943&source_impression_id=p3_1749508400_P3-OPI8lddDIjleB&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#396d7c", textDecoration: "underline" }}
            >
              Lar dos Sonhos
            </a>
            , conta com jacuzzi aquecida e o som suave dos pássaros como trilha
            sonora. Ao anoitecer, um jantar especial no valor de R$ 500. Para
            viver experiências além do óbvio, R$ 500 serão destinados a momentos
            únicos. Para tornar a lembrança ainda mais saborosa, R$ 200
            completam a viagem com a compra de delícias da região, sem pressa de
            voltar.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaSaoBento;
