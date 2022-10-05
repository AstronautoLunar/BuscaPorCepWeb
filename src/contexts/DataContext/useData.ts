// Core
import { useContext } from "react";

// Context
import DataContext from "./context";

export default function useData() {
  return useContext(DataContext);
}