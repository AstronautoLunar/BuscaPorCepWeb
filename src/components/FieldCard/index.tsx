// Core
import { memo } from "react";

// Components
import { 
  Area, 
  Label, 
  Value,
  AreaProps
} from "./styles";

type FieldCardProps = AreaProps & {
  children: string;
  label: string;
}

function FieldCard({ 
  children, 
  label, 
  align 
}: FieldCardProps) {
  return (
    <Area align={align}>
      <Label>{ label }</Label>
      <Value>{ children }</Value>
    </Area>
  )
}

export default memo(FieldCard);