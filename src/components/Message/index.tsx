// Core
import { memo } from "react";

// Components
import { Text } from "./styles";

type MessageProps = {
  children: string;
}

function Message({ children }: MessageProps) {
  return (
    <Text>
      { children }
    </Text>
  )
}

export default memo(Message);