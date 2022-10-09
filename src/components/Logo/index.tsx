// Components
import { Image } from "./styles";
import Spinner from "../Spinner";

export default function Logo() {
  return (
    <>
      <Image
        src={require("../../assets/logo.png")}
        alt="Logo do app"
      />
      <br/>
      <Spinner/>
    </>
  )
}