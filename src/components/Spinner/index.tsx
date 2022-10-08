// Core
import { SpinnerIos } from "@styled-icons/fluentui-system-filled/SpinnerIos";

// Components
import { Container } from "./styles";

// Styles
import colors from "../../styles/colors";

type SpinnerProps = {
  size?: number;
  color?: string;
}

export default function Spinner({ size = 32, color = colors.emphasis }: SpinnerProps) {
  return (
    <Container>
      <SpinnerIos
        size={size}
        color={color}
      />
    </Container>
  )
}