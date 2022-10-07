// Components
import { Container } from "./styles";

// Types
import Component from "../../types/Component";

export default function Page({ children }: Component) {
  return (
    <Container>
      { children }
    </Container>
  )
}