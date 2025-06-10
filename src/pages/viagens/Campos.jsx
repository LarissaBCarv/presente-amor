import React from "react";

const PaginaCampos = () => {
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
          Campos do Jordão: Nosso destino entre nuvens e suspiros
        </h1>
        <p style={{ fontSize: "40px", color: "#555", lineHeight: 1.5 }}>
          Em meio às montanhas frias e ao aroma dos pinheiros, Campos do Jordão
          nos convida a viver um amor sereno, envolto em lareiras, passeios de
          mãos dadas e beijos sob o céu nublado. Cada ruazinha charmosa guarda o
          cenário perfeito para sorrisos sinceros, fotos abraçadas e promessas
          sussurradas. É o lugar onde o tempo desacelera, o coração aquece e o
          amor floresce no silêncio gostoso de estarmos apenas nós duas.
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
            src="/campos.png"
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
            Um refúgio para apaixonadas
          </h2>
          <p style={{ fontSize: "45px", lineHeight: 1.5 }}>
            Imagine dias tranquilos ao meu lado, explorando, saboreando
            chocolates artesanais e aquecendo o coração <br />
            com lareiras aconchegantes. Campos do Jordão oferece o cenário
            perfeito para fortalecer o amor e criar memórias inesquecíveis.
          </p>
          <p style={{ fontSize: "40px", lineHeight: 1.5 }}>
            Durante a viagem, a estadia será no aconchegante{" "}
            <a
              href="https://www.airbnb.com.br/rooms/1333974210752298490?adults=2&check_in=2025-07-04&check_out=2025-07-06&guests=2&search_mode=regular_search&amenities%5B%5D=25&source_impression_id=p3_1749415656_P3zIkUqEamL5-45O&previous_page_section_name=1000&federated_search_id=d563291d-b183-4d3b-b7f1-eab8fe046511"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#396d7c", textDecoration: "underline" }}
            >
              Chalé Manacá
            </a>
            , um lugar perfeito para relaxar e aproveitar momentos
            inesquecíveis. Para a noite, está reservado um jantar especial no
            valor de R$ 500, garantindo uma experiência gastronômica deliciosa.
            Além disso, há uma reserva de R$ 500 para passeios, para explorar as
            belezas locais e se divertir. Para a alimentação durante a viagem,
            serão destinados R$ 200 em compras no mercado, garantindo tudo o que
            for necessário para os dias de estadia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaginaCampos;
