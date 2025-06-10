import { createContext, useContext, useState } from "react";

const SelecaoContext = createContext();

export function SelecaoProvider({ children }) {
  const [itensSelecionados, setItensSelecionados] = useState([]);

  const toggleItem = (item) => {
    const existe = itensSelecionados.find((i) => i.id === item.id);
    if (existe) {
      setItensSelecionados((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setItensSelecionados((prev) => [...prev, item]);
    }
  };

  const limparSelecao = () => {
    setItensSelecionados([]);
  };

  return (
    <SelecaoContext.Provider
      value={{ itensSelecionados, toggleItem, limparSelecao }}
    >
      {children}
    </SelecaoContext.Provider>
  );
}

export function useSelecao() {
  return useContext(SelecaoContext);
}
