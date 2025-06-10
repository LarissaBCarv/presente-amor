import React from "react";

const PaginaGoncalves = () => {
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
          Gonçalves: Nosso refúgio entre montanhas e paz.
        </h1>
        <p style={{ fontSize: "40px", color: "#555", lineHeight: 1.5 }}>
          Em meio aos verdes vales e ao perfume das matas, Gonçalves nos convida
          a viver um amor tranquilo, cercado por trilhas, risadas compartilhadas
          e noites sob o céu estrelado. Cada canto desse paraíso guarda momentos
          para abraços apertados, conversas sinceras e sonhos entrelaçados. É o
          lugar onde o tempo desacelera, a alma se renova e o amor cresce no
          silêncio acolhedor de estarmos só nós duas.
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
            src="/goncalves.png"
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
            Paraíso íntimo entre montanhas
          </h2>
          <p style={{ fontSize: "43px", lineHeight: 1.5 }}>
            Gonçalves convida a desacelerar, curtir a natureza e saborear
            momentos simples. Entre trilhas, fogueiras e sabores caseiros, é o
            lugar ideal para fortalecer o amor e criar memórias inesquecíveis.
          </p>
          <p style={{ fontSize: "40px", lineHeight: 1.5 }}>
            Durante a viagem, a estadia será no aconchegante{" "}
            <a
              href="https://www.airbnb.com.br/rooms/1265302663788667907?adults=2&check_in=2025-07-04&check_out=2025-07-06&children=0&infants=0&pets=0&wishlist_item_id=11005003613470&source_impression_id=p3_1749416463_P3SDJl_8j2OarAPq&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#396d7c", textDecoration: "underline" }}
            >
              Chalé Portal Lazer
            </a>
            , um verdadeiro refúgio cercado pela natureza exuberante da Serra da
            Mantiqueira. Entre trilhas, cachoeiras e o ar puro da montanha, é o
            lugar ideal para desacelerar e renovar as energias. Para a noite,
            está reservado um jantar especial no valor de R$ 500, proporcionando
            uma experiência gastronômica autêntica e acolhedora. Além disso, há
            uma reserva de R$ 500 para passeios, para explorar as belezas locais
            e se aventurar por paisagens inesquecíveis. Para a alimentação
            durante a viagem, serão destinados R$ 200 em compras no mercado,
            garantindo tudo o que for necessário para os dias de estadia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaGoncalves;
