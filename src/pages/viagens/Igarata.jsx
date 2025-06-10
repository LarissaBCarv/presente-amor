import React from "react";

const PaginaIgarata = () => {
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
          Igaratá: Nosso refúgio entre rios e serenidade.
        </h1>
        <p style={{ fontSize: "40px", color: "#555", lineHeight: 1.5 }}>
          Nas margens tranquilas do rio e sob o céu aberto, Igaratá nos convida
          a um amor calmo, feito de passeios de barco, sorrisos ao entardecer e
          abraços que aquecem a alma. Cada paisagem guarda a magia perfeita para
          momentos de paz, cumplicidade e sonhos compartilhados. É o lugar onde
          o tempo desacelera, o coração se acalma e o amor floresce no silêncio
          gostoso de estarmos só nós duas.
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
            src="/igarata.png"
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
            Refúgio de amor e serenidade
          </h2>
          <p style={{ fontSize: "43px", lineHeight: 1.5 }}>
            Desfrute comigo dias serenos, rodeadas pela natureza exuberante de
            Igaratá. Entre passeios à beira do rio e momentos doces
            compartilhados, o aconchego e a tranquilidade se unem para criar
            memórias que aquecem a alma e fortalecem nosso amor.
          </p>
          <p style={{ fontSize: "40px", lineHeight: 1.5 }}>
            A estadia será em um refúgio tranquilo,{" "}
            <a
              href="https://www.airbnb.com.br/rooms/1099450258619777942?adults=2&check_in=2025-07-04&check_out=2025-07-06&children=0&infants=0&pets=0&wishlist_item_id=11005003651299&source_impression_id=p3_1749416463_P3D-wnNfGbvfR3H9&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#396d7c", textDecoration: "underline" }}
            >
              Casa do Descanso
            </a>
            , imerso na natureza vibrante da Serra da Mantiqueira. Rodeado por
            trilhas, cachoeiras e ar puro, é o cenário perfeito para desacelerar
            e recarregar as energias. À noite, um jantar especial de R$ 500
            promete sabores acolhedores e memoráveis. Também reservamos R$ 500
            para passeios, para explorar cada canto encantador da região. Para a
            alimentação durante a viagem, R$ 200 estarão destinados às compras
            no mercado, garantindo conforto e praticidade durante a estadia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaIgarata;
