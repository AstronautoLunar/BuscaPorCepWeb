// Core
import { useMemo, useEffect, useRef, useState } from "react";

// Components
import { Container, Input } from "./styles";
import { Search } from "@styled-icons/evaicons-solid/Search";

// Styles
import colors from "../../styles/colors";

export default function FieldSearch() {
  const [color, setColor] = useState(colors.secondary);
  const inputRef = useRef(null as (HTMLInputElement | null));

  return (
    <Container 
      color={color}
      onClick={() => inputRef.current?.focus()}
    >
      <Search
        color={colors.emphasis}
        size={32}
        title="Icon search"
      />
      <Input
        colorText={color}
        ref={inputRef}
        onFocus={() => setColor(colors.emphasis)}
        onBlur={() => setColor(colors.secondary)}
      />
    </Container>
  );
}