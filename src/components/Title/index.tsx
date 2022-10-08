// Components
import { Text } from "./styles";

// Types
import Component from "../../types/Component";

export default function Title({ children }: Component) {
  return (
    <Text>
      { children }
    </Text>
  )
}