// Core
import { memo } from "react";

// Components
import { Text } from "./styles";

// Types
import Component from "../../types/Component";

function Title({ children }: Component) {
  return (
    <Text>
      { children }
    </Text>
  )
}

export default memo(Title);