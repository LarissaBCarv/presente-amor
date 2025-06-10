import React from "react";

const PaginaSaoPaulo = () => {
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
          São Paulo: Amor em meio ao caos que encanta.
        </h1>
        <p style={{ fontSize: "40px", color: "#555", lineHeight: 1.5 }}>
          Entre arranha-céus imponentes e ruas que nunca dormem, São Paulo
          guarda segredos para quem sabe enxergar além da pressa. É onde o
          concreto revela poesia, onde histórias se cruzam a cada esquina e onde
          o amor floresce no inesperado — num café de bairro, num museu vazio,
          num pôr do sol sobre o Minhocão. Aqui, o tempo não para, mas com a
          pessoa certa... ele desacelera.
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
            src="/saopaulo.png"
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
            No coração da cidade, um tempo só nosso.
          </h2>
          <p style={{ fontSize: "43px", lineHeight: 1.5 }}>
            Paraibuna é aquele canto escondido no mapa onde a simplicidade
            revela sua beleza mais pura. Cercado por fazendas antigas, trilhas
            de terra batida e horizontes largos, o refúgio romântico aqui é
            sobre reconexão — com o outro, com a natureza, com o que realmente
            importa.
          </p>
          <p style={{ fontSize: "40px", lineHeight: 1.5 }}>
            Durante a estadia, nós nos hospedaremos em um apartamento charmoso
            com vista para a cidade, o{" "}
            <a
              href="https://www.airbnb.com.br/rooms/1334341085137576868?adults=2&check_in=2025-07-04&check_out=2025-07-06&children=0&infants=0&pets=0&wishlist_item_id=11005011606272&source_impression_id=p3_1749508931_P3WxrYS_pqbczjVr&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#396d7c", textDecoration: "underline" }}
            >
              Mirante Loft Straw
            </a>
            , com jacuzzi e decoração moderna. Para uma noite inesquecível, será
            reservado um jantar no valor de R$ 600 em um dos restaurantes
            premiados da capital — onde gastronomia e amor se encontram. Também
            está incluída uma reserva de R$ 400 para experiências urbanas: uma
            sessão de spa a dois, um tour artístico por galerias escondidas ou
            ingressos para uma peça cult. E para completar a vivência, R$ 200
            serão destinados a compras em uma delicatessen ou mercado gourmet,
            com delícias para aproveitar sem sair do quarto.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaSaoPaulo;
