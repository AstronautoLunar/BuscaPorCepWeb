// Core
import { 
  createContext, 
  Dispatch, 
  SetStateAction 
} from "react";

// Types
import Data from "../../types/Data";

type DataContextProps = {
  valueCep: string;
  setValueCep: Dispatch<SetStateAction<string>>;
  data: Data;
  setData: Dispatch<SetStateAction<Data>>;
  hiddenCard: boolean;
  setHiddenCard: Dispatch<SetStateAction<boolean>>
}

const DataContext = createContext({} as DataContextProps);

export default DataContext;