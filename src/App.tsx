// Components
import Page from "./components/Page";
import FieldSearch from "./components/FieldSearch";
import Title from "./components/Title";
import Card from "./components/Card";

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
      <br/>
      <br/>
      <Card/>
    </Page>
  );
}

export default App;
