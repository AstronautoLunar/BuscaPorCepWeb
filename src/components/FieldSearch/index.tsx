// Core
import { useCallback, useRef, useState } from "react";

// Components
import { Container, Input } from "./styles";
import { Search } from "@styled-icons/evaicons-solid/Search";
import Spinner from "../Spinner";

// Styles
import colors from "../../styles/colors";

type FieldSearchProps = {
  type?: "cep";
  value: string;
  onChangeText: (value: string) => void;
  loading?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function FieldSearch({ 
  type, 
  value, 
  onChangeText,
  loading,
  onFocus,
  onBlur
}: FieldSearchProps) {
  const [color, setColor] = useState(colors.secondary);
  const inputRef = useRef(null as (HTMLInputElement | null));
  const applyConversionPerType = useCallback((value: string) => {
    switch (type) {
      case "cep":
        return value
          .replace(/\D/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{3})\d+?$/, '$1');
        
      default:
        return value;
    }
  }, [type]);

  return (
    <Container 
      color={color}
      onClick={() => inputRef.current?.focus()}
    >
      <label htmlFor="input-search">
        {
          loading
          ?
            <Spinner/>
          :
          <Search
            color={colors.emphasis}
            size={32}
            title="Icon search"
          />
        }
      </label>
      <Input
        id="input-search"
        value={value}
        onChange={event => {
          onChangeText(applyConversionPerType(event.target.value));
        }}
        colorText={color}
        ref={inputRef}
        onFocus={() => {
          setColor(colors.emphasis)
          
          if (!!onFocus) {
            onFocus();
          } 
        }}
        onBlur={() => {
          setColor(colors.secondary)
          
          if (!!onBlur) {
            onBlur();
          }
        }}
      />
    </Container>
  );
}