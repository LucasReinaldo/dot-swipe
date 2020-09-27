import React, { useRef, useState } from "react";
import { StatusBar, Animated, View, StyleSheet } from "react-native";

import { Circle } from "../../components/Circle";

import { quotes } from "../../../quotes";

import { width, colors, DURATION, TEXT_DURATION } from "../../global.styles";

import { Container, ContainerQuote, Quote, Author } from "./styles";

export default Home = () => {
  const screenAnimationValue = useRef(new Animated.Value(0)).current;
  const buttonAnimationValue = useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(quotes.length).keys()]; //create a list from 0 to last.
  const [index, setIndex] = useState(0);

  const animate = (i) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: true, //avoid freeze the animation (js thread)
      }),
      Animated.timing(screenAnimationValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnimationValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false, //backgroundColor is not supported by reactnative animated
      }),
    ]);

  const onPress = () => {
    screenAnimationValue.setValue(0);
    buttonAnimationValue.setValue(0);
    animate((index + 1) % colors.length).start();
    setIndex((index + 1) % colors.length);
  };

  const animatedQuotes = {
    flexDirection: "row", //it's a slider, all the quotes are in a "fake list", change to column to see the changes.
    transform: [
      {
        translateX: sliderAnimatedValue.interpolate({
          inputRange,
          outputRange: quotes?.map((_, i) => -i * width * 2),  //change the -i to i to see the changes.
        }),
      },
    ],
    opacity: sliderAnimatedValue.interpolate({
      inputRange: [...Array(quotes.length * 2 + 1).keys()].map((i) => i / 2), //int-> middle, half-> out of focus.
      outputRange: [...Array(quotes.length * 2 + 1).keys()].map((i) =>
        i % 2 === 0 ? 1 : 0
      ),
    }), //1 is on focus, 0 is not.
  };

  //style={StyleSheet.absoluteFillObject} =>> to fill all the background on iphones < X.
  return (
    <Container style={StyleSheet.absoluteFillObject}>
      <StatusBar hidden />
      <Circle
        index={index}
        onPress={onPress}
        screenAnimationValue={screenAnimationValue}
        buttonAnimationValue={buttonAnimationValue}
      />
      <ContainerQuote style={animatedQuotes}>
        {quotes.map(({ quote, author }, i, colors) => {
          return (
            <View style={{ paddingRight: width, width: width * 2 }} key={i}>
              <Quote style={{ color: colors[i].nextBgColor }}>{`"${quote}"`}</Quote>
              <Author
                style={{
                  color: colors[i].nextBgColor,
                  fontSize: 16,
                  fontWeight: "normal",
                  textAlign: "right",
                  opacity: 0.8,
                }}
              >
                - {author}
              </Author>
            </View>
          );
        })}
      </ContainerQuote>
    </Container>
  );
};
