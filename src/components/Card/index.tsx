// Core
import { memo } from "react";

// Components
import FieldCard from "../FieldCard";

// Styles
import { Container } from "./styles";

type Items = {
  label: string;
  value: string;
}

type CardProps = {
  items?: Items[];
}

function Card({ items }: CardProps) {
  return (
    <Container>
      {
        items?.map(({ label, value }, index) => {
          const align = (index % 2 === 0) ? "left" : "right";

          return (
            <FieldCard 
              key={index} 
              label={label} 
              align={align}
            >
              { value }
            </FieldCard>
          )
        })
      }
    </Container>
  )
}

export default memo(Card);