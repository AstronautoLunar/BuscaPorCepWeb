// Core
import DataContext from "./context";

// Types
import Component from "../../types/Component";

function DataProvider({ children }: Component) {
  return (
    <DataContext.Provider value={{}}>
      { children }
    </DataContext.Provider>
  )
}

export default DataProvider;