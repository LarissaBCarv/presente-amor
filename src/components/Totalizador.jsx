import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LIMITE = 3600;

const Totalizador = () => {
  const [itensSelecionados, setItensSelecionados] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const atualizarItens = () => {
      const itens = JSON.parse(localStorage.getItem("itensSelecionados")) || [];
      setItensSelecionados(itens);

      const novoTotal = itens.reduce((acc, item) => {
        const preco = typeof item.preco === "number" ? item.preco : 0;
        return acc + preco;
      }, 0);
      setTotal(novoTotal);
    };

    atualizarItens();
    window.addEventListener("atualizarTotal", atualizarItens);
    return () => {
      window.removeEventListener("atualizarTotal", atualizarItens);
    };
  }, []);

  const finalizado = () => {
    if (total > LIMITE) {
      alert("O valor total ultrapassa o limite de R$ 3.600,00!");
      return;
    }
    navigate("/resumo");
  };

  const limparTudo = () => {
    localStorage.clear();
    setItensSelecionados([]);
    setTotal(0);
    window.dispatchEvent(new Event("atualizarTotal"));
  };

  const estaNoResumo = location.pathname === "/resumo";
  if (estaNoResumo) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: "linear-gradient(to bottom right, #cdffd8, #94b9ff)",
        border: "8px solid #396d7c",
        padding: "10px 40px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        fontFamily: "'Share Tech', sans-serif",
        zIndex: 1000,
        maxWidth: "350px",
      }}
    >
      <div
        style={{ fontWeight: "bold", fontSize: "36px", marginBottom: "8px" }}
      >
        💙 Itens Escolhidos
      </div>

      {itensSelecionados.length > 0 ? (
        <>
          <ul
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              paddingLeft: "20px",
              marginBottom: "10px",
              fontSize: "22px",
              color: "#333",
            }}
          >
            {itensSelecionados.map((item, idx) => (
              <li key={idx}>
                {item.nome} — R${" "}
                {typeof item.preco === "number"
                  ? item.preco.toFixed(2).replace(".", ",")
                  : "0,00"}
              </li>
            ))}
          </ul>

          <div
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Total: R$ {total.toFixed(2).replace(".", ",")}
          </div>

          {total > LIMITE && (
            <div
              style={{ color: "red", fontSize: "18px", marginBottom: "10px" }}
            >
              ⚠️ Limite de R$ 3.600,00 excedido!
            </div>
          )}
        </>
      ) : (
        <p style={{ fontSize: "20px", color: "#666", marginBottom: "10px" }}>
          Nenhum item selecionado
        </p>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={finalizado}
          style={{
            cursor: "pointer",
            backgroundColor: total > LIMITE ? "#999" : "#396d7c",
            color: "white",
            border: "none",
            padding: "12px 14px",
            borderRadius: "3px",
            fontFamily: "'Share Tech', sans-serif",
            fontWeight: "bold",
            fontSize: "30px",
          }}
          disabled={total > LIMITE}
        >
          Finalizado!
        </button>

        <button
          onClick={limparTudo}
          style={{
            cursor: "pointer",
            backgroundColor: "#a33c3c",
            color: "white",
            border: "none",
            padding: "10px 14px",
            borderRadius: "3px",
            fontFamily: "'Share Tech', sans-serif",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Limpar Tudo 🗑️
        </button>
      </div>
    </div>
  );
};

export default Totalizador;
