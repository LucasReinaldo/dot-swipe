import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: 100px;
`;

const QuoteBox = styled.View``;

export const ContainerQuote = Animated.createAnimatedComponent(QuoteBox);

export const Quote = styled.Text`
  margin: 12px;
  font-size: 24px;
  text-align: center;
  font-family: "Menlo";
  color: white;
`;

export const Author = styled.Text`
  margin: 12px;
  font-size: 24px;
  text-align: center;
  font-family: "Menlo";
  color: white;
`;
