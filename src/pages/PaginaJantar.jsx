import React, { useState, useEffect } from "react";

const PaginaJantar = () => {
  const precoStringParaNumero = (precoStr) => {
    return Number(
      precoStr.replace("R$ ", "").replace(/\./g, "").replace(",", ".")
    );
  };

  const [itensSelecionados, setItensSelecionados] = useState(() => {
    const itens = localStorage.getItem("itensSelecionados");
    return itens ? JSON.parse(itens) : [];
  });

  useEffect(() => {
    const atualizarItens = () => {
      const itens = JSON.parse(localStorage.getItem("itensSelecionados")) || [];
      setItensSelecionados(itens);
    };

    window.addEventListener("atualizarTotal", atualizarItens);

    return () => {
      window.removeEventListener("atualizarTotal", atualizarItens);
    };
  }, []);

  const [hoverIndex, setHoverIndex] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(0);

  const ITEMS_PER_PAGE = 4;
  const jantarOptions = [
    {
      nome: "Vasto",
      descricao:
        "Ambiente sofisticado e pratos refinados que transformam qualquer noite em uma experiência inesquecível.",
      imagem: "vasto.png",
      preco: "R$ 400,00",
    },
    {
      nome: "Coco Bambu",
      descricao:
        "Sabores marcantes do mar em um ambiente elegante. Ideal para quem ama frutos do mar e uma boa taça de vinho.",
      imagem: "coco-bambu.png",
      preco: "R$ 400,00",
    },
    {
      nome: "Di Paolo",
      descricao:
        "Clássico italiano com comida farta e acolhimento típico da serra. Uma viagem à Itália sem sair da mesa.",
      imagem: "dipaolo.png",
      preco: "R$ 400,00",
    },
    {
      nome: "Hangar 13",
      descricao:
        "Clima descolado e cardápio cheio de personalidade. Uma escolha leve e divertida para curtir juntos.",
      imagem: "hangar13.png",
      preco: "R$ 400,00",
    },
    {
      nome: "Risoteria Villa Lobos",
      descricao:
        "Especializada em risotos criativos e saborosos, é o lugar perfeito para um jantar aconchegante, com boa música e um toque de elegância.",
      imagem: "villalobos.png",
      preco: "R$ 400,00",
    },
    {
      nome: "No Barko",
      descricao:
        "Um mergulho nos sabores do Japão com um toque moderno. Sushi fresco, ambiente elegante e perfeito para um jantar a dois que sai do comum.",
      imagem: "nobarko.png",
      preco: "R$ 400,00",
    },
    {
      nome: "Amicci Anchieta",
      descricao:
        "Ambiente intimista, gastronomia italiana sofisticada e clima perfeito para uma noite especial a dois, com sabor e carinho em cada detalhe.",
      imagem: "amicci.png",
      preco: "R$ 400,00",
    },
  ];

  const totalPaginas = Math.ceil(jantarOptions.length / ITEMS_PER_PAGE);

  const handleProxima = () => {
    if (paginaAtual < totalPaginas - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const handleAnterior = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const jantarVisiveis = jantarOptions.slice(
    paginaAtual * ITEMS_PER_PAGE,
    (paginaAtual + 1) * ITEMS_PER_PAGE
  );

  const botaoEstilo = {
    padding: "10px 25px",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#396d7c",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(57, 109, 124, 0.4)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    userSelect: "none",
  };

  const botaoDesabilitado = {
    ...botaoEstilo,
    backgroundColor: "#a2d2df",
    color: "#666",
    cursor: "not-allowed",
    boxShadow: "none",
    transform: "none",
  };

  const adicionarOuRemoverItem = (nome, precoStr) => {
    const preco = precoStringParaNumero(precoStr);
    let novosItens = [...itensSelecionados];

    const itemIndex = itensSelecionados.findIndex((item) => item.nome === nome);

    let totalAtual = itensSelecionados.reduce(
      (acc, item) => acc + item.preco,
      0
    );

    if (itemIndex !== -1) {
      totalAtual -= itensSelecionados[itemIndex].preco;
      novosItens.splice(itemIndex, 1);
    } else {
      if (totalAtual + preco > 3600) {
        alert("Você não pode ultrapassar o limite de R$ 3.600,00.");
        return;
      }
      novosItens.push({ nome, preco });
    }

    setItensSelecionados(novosItens);
    localStorage.setItem("itensSelecionados", JSON.stringify(novosItens));
    localStorage.setItem(
      "totalCompra",
      totalAtual + (itemIndex === -1 ? preco : 0)
    );
    window.dispatchEvent(new Event("atualizarTotal"));
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Share Tech', sans-serif",
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
        <source src="/paginas.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <header style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "100px", color: "#333" }}>
          Um jantar para celebrar o nosso amor
        </h1>
        <p style={{ fontSize: "45px", color: "#555" }}>
          Nada como uma boa comida, luz baixinha e olhares trocados entre um
          brinde e outro. <br />
          Escolha o tipo de jantar que combina com a gente — seja algo simples,
          chique ou totalmente fora do comum. <br />O importante é estarmos
          juntas, saboreando mais um capítulo da nossa história. 🍷✨
        </p>
      </header>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {jantarVisiveis.map((restaurante, index) => {
          const selecionado = itensSelecionados.some(
            (item) => item.nome === restaurante.nome
          );
          return (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() =>
                adicionarOuRemoverItem(restaurante.nome, restaurante.preco)
              }
              style={{
                textAlign: "center",
                padding: "10px",
                border: "5px solid #396d7c",
                borderRadius: "5px",
                width: "320px",
                background: selecionado
                  ? "#a2d2df"
                  : "linear-gradient(to bottom right, #cdffd8, #94b9ff)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: hoverIndex === index ? 1 : 0.9,
                transform: hoverIndex === index ? "scale(1.02)" : "scale(1)",
              }}
            >
              <img
                src={restaurante.imagem}
                alt={restaurante.nome}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h3 style={{ fontSize: "40px", color: "#333" }}>
                {restaurante.nome}
              </h3>
              <p style={{ fontSize: "30px", color: "#555" }}>
                {restaurante.descricao}
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {restaurante.preco}
              </p>
            </div>
          );
        })}
      </section>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handleAnterior}
          disabled={paginaAtual === 0}
          style={paginaAtual === 0 ? botaoDesabilitado : botaoEstilo}
          onMouseEnter={(e) => {
            if (paginaAtual !== 0)
              e.currentTarget.style.backgroundColor = "#2f5563";
          }}
          onMouseLeave={(e) => {
            if (paginaAtual !== 0)
              e.currentTarget.style.backgroundColor = "#396d7c";
          }}
        >
          ⬅️ Anterior
        </button>

        <button
          onClick={handleProxima}
          disabled={paginaAtual >= totalPaginas - 1}
          style={
            paginaAtual >= totalPaginas - 1 ? botaoDesabilitado : botaoEstilo
          }
          onMouseEnter={(e) => {
            if (paginaAtual < totalPaginas - 1)
              e.currentTarget.style.backgroundColor = "#2f5563";
          }}
          onMouseLeave={(e) => {
            if (paginaAtual < totalPaginas - 1)
              e.currentTarget.style.backgroundColor = "#396d7c";
          }}
        >
          Próxima ➡️
        </button>
      </div>
    </div>
  );
};

export default PaginaJantar;
