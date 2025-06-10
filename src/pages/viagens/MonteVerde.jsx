import React from "react";

const PaginaMonteVerde = () => {
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
          Monte Verde: Romance nas montanhas e brisas geladas.
        </h1>
        <p style={{ fontSize: "40px", color: "#555", lineHeight: 1.5 }}>
          Entre pinheiros que tocam o céu e trilhas que levam a mirantes
          deslumbrantes, Monte Verde nos convida a viver um amor intenso e
          acolhedor, com lareiras acesas, vinhos compartilhados e passeios de
          mãos dadas sob o frio da serra. Cada canto do vilarejo guarda
          histórias doces, risadas sinceras e momentos únicos que aquecem a
          alma. É o destino onde o tempo desacelera e o amor floresce entre as
          nuvens e o aconchego da montanha.
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
            Refúgio romântico
          </h2>
          <p style={{ fontSize: "43px", lineHeight: 1.5 }}>
            Monte Verde é um recanto charmoso onde o frio da serra se mistura
            com o calor do amor. É um lugar acolhedor, cercado pela natureza e
            ideal para casais que buscam se reconectar, desacelerar e viver
            momentos únicos em meio à beleza das montanhas.
          </p>
          <p style={{ fontSize: "40px", lineHeight: 1.5 }}>
            Durante a viagem, a estadia será em uma{" "}
            <a
              href="https://www.airbnb.com.br/rooms/51944342?adults=2&check_in=2025-07-04&check_out=2025-07-06&children=0&infants=0&pets=0&wishlist_item_id=11005003644943&source_impression_id=p3_1749508400_P3-OPI8lddDIjleB&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#396d7c", textDecoration: "underline" }}
            >
              Cabana
            </a>
            , encantadora com hidromassagem e oferecendo o cenário perfeito para
            noites aconchegantes. Para um jantar especial, será reservado um
            valor de R$ 500, proporcionando uma experiência gastronômica
            memorável em um dos restaurantes da vila. Também está incluída uma
            reserva de R$ 400 para passeios e atividades como trilhas,
            cavalgadas ou piqueniques. Para maior conforto, serão destinados R$
            200 em compras no mercado local, garantindo tudo o que é necessário
            para dias de puro descanso e romance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaMonteVerde;
