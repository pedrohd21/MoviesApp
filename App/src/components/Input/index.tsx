import { TextInputProps } from "react-native";
import { Container } from "./styles";

export function Input({...rest}: TextInputProps){
  return (
    <Container
    placeholderTextColor={"#007A55"}
      {...rest}
    />
  );
}