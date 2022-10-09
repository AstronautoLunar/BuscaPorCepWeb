// Core
import { memo } from "react";

// Components
import { 
  Area, 
  Label, 
  Value,
  Align
} from "./styles";

type FieldCardProps = Align & {
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
      <Label align={align}>{ label }</Label>
      <Value align={align}>{ children || "Não foi encontrado" }</Value>
    </Area>
  )
}

export default memo(FieldCard);