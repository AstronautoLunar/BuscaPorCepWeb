// Core
import { useState } from "react"; 

// Components
import Page from "./components/Page";
import FieldSearch from "./components/FieldSearch";
import Title from "./components/Title";

// Context
import { useData } from "./contexts/DataContext";

function App() {
  const { valueCep, setValueCep } = useData();

  return (
    <Page>
      {
        !valueCep.length
        &&
        <Title>Digite seu CEP</Title>
      }
      <br/>
      <FieldSearch
        type="cep"
        value={valueCep}
        onChangeText={setValueCep}
        loading={false}
      />
    </Page>
  );
}

export default App;
