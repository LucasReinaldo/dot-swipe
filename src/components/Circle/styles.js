import styled from "styled-components/native";
import { Animated } from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { CIRCLE_SIZE, height } from "../../global.styles";

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  height: ${height}px;
  align-items: center;
  padding: ${Constants.statusBarHeight}px 8px ${16 + getBottomSpace()}px;
  background-color: gold;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CircleContainer = styled.View`
  background-color: #444;
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE / 2}px;
`;

export const CircleAnimatedContainer = Animated.createAnimatedComponent(
  CircleContainer
);

export const Button = styled(TouchableOpacity)`
  background-color: transparent;
  align-items: center;
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE / 2}px;
`;

const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const IconAnimatedContainer = Animated.createAnimatedComponent(
  IconContainer
);

export const Icon = styled(MaterialCommunityIcons)`
  color: white;
`;
