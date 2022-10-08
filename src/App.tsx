// Core
import { useState } from "react"; 

// Components
import Page from "./components/Page";
import FieldSearch from "./components/FieldSearch";

function App() {
  const [valueCep, setValueCep] = useState("");

  return (
    <Page>
      <FieldSearch
        value={valueCep}
        onChangeText={setValueCep}
        loading={true}
      />
    </Page>
  );
}

export default App;
