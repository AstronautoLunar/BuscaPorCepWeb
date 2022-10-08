// Core
import { 
  createContext, 
  Dispatch, 
  SetStateAction 
} from "react";

type DataContextProps = {
  valueCep: string;
  setValueCep: Dispatch<SetStateAction<string>>;
}

const DataContext = createContext({} as DataContextProps);

export default DataContext;