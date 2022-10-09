// Core
import DataContext from "./context";
import { useState } from "react";

// Types
import Component from "../../types/Component";
import Data from "../../types/Data";

function DataProvider({ children }: Component) {
  const [ valueCep, setValueCep ] = useState("");
  const [ data, setData ] = useState({} as Data);

  return (
    <DataContext.Provider 
      value={{ 
        valueCep,
        setValueCep,
        data, 
        setData,
      }}
    >
      { children }
    </DataContext.Provider>
  )
}

export default DataProvider;