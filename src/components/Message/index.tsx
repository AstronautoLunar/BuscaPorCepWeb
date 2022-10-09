// Core
import { memo } from "react";

// Components
import { Text, TextProps } from "./styles";

type MessageProps = TextProps & {
  children: string;
}

function Message({ children, isError }: MessageProps) {
  return (
    <Text isError={isError}>
      { children }
    </Text>
  )
}

export default memo(Message);