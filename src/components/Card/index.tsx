// Core
import { memo } from "react";

// Components
import FieldCard from "../FieldCard";

// Styles
import { Container } from "./styles";

function Card() {
  return (
    <Container>
      <FieldCard align="left" label="teste label">
        Teste valor
      </FieldCard>
      <FieldCard align="right" label="teste label">
        Teste valor
      </FieldCard>
      <FieldCard align="left" label="teste label">
        Teste valor
      </FieldCard>
      <FieldCard align="right" label="teste label">
        Teste valor
      </FieldCard>
      <FieldCard align="left" label="teste label">
        Teste valor
      </FieldCard>
      <FieldCard align="right" label="teste label">
        Teste valor
      </FieldCard>
      <FieldCard align="left" label="teste label">
        Teste valor
      </FieldCard>
      <FieldCard align="right" label="teste label">
        Teste valor
      </FieldCard>
    </Container>
  )
}

export default memo(Card);