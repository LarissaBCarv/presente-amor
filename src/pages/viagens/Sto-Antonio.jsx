import React from "react";

const PaginaStoAntonio = () => {
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
          Santo Antônio do Pinhal: Nosso abrigo entre o verde e o céu.
        </h1>
        <p style={{ fontSize: "40px", color: "#555", lineHeight: 1.5 }}>
          No coração das montanhas, Santo Antônio do Pinhal nos convida a viver
          um amor tranquilo, rodeado por bosques, ar puro e dias de serenidade.
          Cada trilha e cada pôr do sol são convite para sorrisos
          compartilhados, conversas profundas e sonhos entrelaçados. É o lugar
          onde o tempo desacelera, a alma encontra calma e o amor cresce na
          beleza simples de estarmos só nós duas.
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
            src="/sto-antonio.png"
            alt="Paisagem de Campos do Jordão"
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
            Encanto e aconchego para duas
          </h2>
          <p style={{ fontSize: "43px", lineHeight: 1.5 }}>
            Santo Antônio do Pinhal: um refúgio tranquilo entre montanhas e
            jardins floridos. É o lugar perfeito para desacelerar, renovar
            energias e celebrar o amor com momentos simples e inesquecíveis.
          </p>
          <p style={{ fontSize: "40px", lineHeight: 1.5 }}>
            A estadia será em um cantinho especial, rodeado pelas montanhas
            serenas de Santo Antônio do Pinhal. Entre jardins floridos e vistas
            de tirar o fôlego,{" "}
            <a
              href="https://www.airbnb.com.br/rooms/999211871639873242?adults=2&check_in=2025-07-04&check_out=2025-07-06&children=0&infants=0&pets=0&wishlist_item_id=11005003646893&source_impression_id=p3_1749416463_P34WsaauMI2dD4J0&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#396d7c", textDecoration: "underline" }}
            >
              Chalé Sto. Antônio
            </a>
            , é o lugar ideal para relaxar e se reconectar. Para a noite, um
            jantar de R$ 500 foi reservado, garantindo uma experiência
            gastronômica acolhedora e deliciosa. Também há R$ 500 destinados a
            passeios, para explorar as maravilhas locais e curtir momentos
            únicos. Para a alimentação durante a viagem, R$ 200 em compras no
            mercado garantem praticidade e conforto durante a estadia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaStoAntonio;
