// Core
import DataContext from "./context";
import { useState, useCallback } from "react";

// Types
import Component from "../../types/Component";

function DataProvider({ children }: Component) {
  const [ valueCep, setValueCep ] = useState("");

  return (
    <DataContext.Provider 
      value={{ 
        valueCep,
        setValueCep
      }}
    >
      { children }
    </DataContext.Provider>
  )
}

export default DataProvider;