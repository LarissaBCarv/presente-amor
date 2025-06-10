import React from "react";

const PaginaJacarei = () => {
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
          Jacareí: Nosso encontro entre história e natureza.
        </h1>
        <p style={{ fontSize: "40px", color: "#555", lineHeight: 1.5 }}>
          Entre as ruas que guardam memórias e os verdes parques que refrescam a
          alma, Jacareí nos convida a viver um amor sereno, cheio de
          descobertas, passeios tranquilos e momentos acolhedores. Cada canto da
          cidade traz a magia dos encontros sinceros, risadas compartilhadas e
          sonhos construídos a dois. É o lugar onde o tempo desacelera, o
          coração se aquece e o amor floresce na simplicidade do nosso estar
          juntas.
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
            src="/jacarei.png"
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
            Jacareí é um refúgio acolhedor onde a beleza das paisagens naturais
            se mistura com o charme da história local. Aqui, desaceleramos o
            ritmo, respiramos ar puro e celebramos o amor em passeios
            tranquilos, encontros especiais e momentos que ficam guardados no
            coração.
          </p>
          <p style={{ fontSize: "40px", lineHeight: 1.5 }}>
            Durante a viagem, a estadia será na charmosa{" "}
            <a
              href="https://www.airbnb.com.br/rooms/1312580366220227562?adults=2&check_in=2025-07-04&check_out=2025-07-06&children=0&infants=0&pets=0&wishlist_item_id=11005003643320&source_impression_id=p3_1749416463_P3GwwgA5__VTp8q9&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#396d7c", textDecoration: "underline" }}
            >
              Cabana A Frame
            </a>
            , um refúgio perfeito para relaxar e se conectar com a natureza.
            Para a noite, está reservado um jantar especial no valor de R$ 500,
            garantindo uma experiência gastronômica inesquecível. Além disso, há
            uma reserva de R$ 500 para passeios, para explorar os arredores e
            curtir aventuras. Para a alimentação durante a viagem, serão
            destinados R$ 200 em compras no mercado, assegurando tudo o que for
            necessário para os dias de descanso.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaJacarei;
