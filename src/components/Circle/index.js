import React from "react";
import { StyleSheet } from "react-native";

import { colors } from "../../global.styles";

import {
  AnimatedContainer,
  CircleAnimatedContainer,
  Button,
  IconAnimatedContainer,
  Icon,
} from "./styles";

export const Circle = ({ onPress, index, screenAnimationValue, buttonAnimationValue }) => {
  const { initialBgColor, nextBgColor, bgColor } = colors[index];
  const inputRange = [0, 0.001, 0.5, 0.501, 1]; //start at 0, change start right after 0, in the middle start to change the bg at 0.501 'til 1.
  const backgroundColor = buttonAnimationValue.interpolate({
    inputRange,
    outputRange: [
      initialBgColor,
      initialBgColor,
      initialBgColor,
      bgColor,
      bgColor,
    ],
  });
  const dotBgColor = buttonAnimationValue.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 0.9, 1],
    outputRange: [
      bgColor,
      bgColor,
      bgColor,
      initialBgColor,
      initialBgColor,
      nextBgColor,
    ],
  });

  // PLAY AROUD =>
  const circleAnimated = {
    backgroundColor: dotBgColor,
    transform: [
      { perspective: 250 },
      {
        rotateY: buttonAnimationValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ["0deg", "-90deg", "-180deg"],
        }),
      },

      {
        scale: buttonAnimationValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 7, 1],
        }),
      },

      {
        translateX: buttonAnimationValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ["0%", "50%", "0%"],
        }),
      },
    ],
  };

  const animation = {
    transform: [
      {
        scale: screenAnimationValue.interpolate({
          inputRange: [0, 0.05, 0.5, 1],
          outputRange: [1, 0, 0, 1],
          // extrapolate: "clamp"
        }),
      },
      {
        rotateY: screenAnimationValue.interpolate({
          inputRange: [0, 0.5, 0.9, 1],
          outputRange: ["0deg", "180deg", "180deg", "180deg"],
        }),
      },
    ],
    opacity: screenAnimationValue.interpolate({
      inputRange: [0, 0.05, 0.9, 1],
      outputRange: [1, 0, 0, 1],
    }),
  };

  return (
    <AnimatedContainer
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    >
      <CircleAnimatedContainer style={circleAnimated}>
        <Button onPress={onPress}>
          <IconAnimatedContainer style={animation}>
            <Icon name="chevron-double-right" size={24} />
          </IconAnimatedContainer>
        </Button>
      </CircleAnimatedContainer>
    </AnimatedContainer>
  );
};
