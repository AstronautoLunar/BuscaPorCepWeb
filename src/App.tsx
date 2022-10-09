// Core
import { useEffect, useCallback, useState } from "react";

// Components
import Page from "./components/Page";
import FieldSearch from "./components/FieldSearch";
import Title from "./components/Title";
import Card from "./components/Card";
import Message from "./components/Message";
import Logo from "./components/Logo";

// Context
import { useData } from "./contexts/DataContext";

// Services
import { cepService } from "./services/cep.service";

function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [hiddenCard, setHiddenCard] = useState(true);
  const { 
    valueCep, 
    setValueCep, 
    data, 
    setData 
  } = useData();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      
      const response = await cepService.getByCep(valueCep);

      if (!response.data.erro) {
        setData(response.data);
        setMessageError("");
        setHiddenCard(false);
      } else {
        setMessageError("CEP não encontrado");
        setHiddenCard(true);
      }
    } catch (error) {
      console.log(error);
      setMessageError("Error ao encontrar dados deste CEP");
      setHiddenCard(true);

    } finally {
      setLoading(false);
    }
  }, [valueCep]);

  useEffect(() => {
    if (valueCep.replace("-", "").length === 8) {
      fetchData();
    }
  }, [valueCep]);

  useEffect(() => {
    setIsLoadingPage(false);
  }, []);

  if (isLoadingPage) {
    return (
      <Page>
        <Logo/>
      </Page>
    )
  }

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
        loading={loading}
      />
      <br/>
      <br/>
      {
        messageError
        ?
        <Message>
          {messageError}
        </Message>
        :
        hiddenCard || <Card 
          items={
            Object
              .entries(data)
              .map(([ key, value ]) => {
                const keyFormatted = key.toUpperCase();
                
                return ({
                  label: keyFormatted,
                  value: String(value)
                })
              })
          }
        />
      }
    </Page>
  );
}

export default App;
