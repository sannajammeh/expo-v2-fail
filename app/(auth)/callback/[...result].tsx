import { View, Text } from "react-native";
import React from "react";
import * as Linking from "expo-linking";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";

Linking.addEventListener("url", (e) => {
  console.log("From Event Linking", e.url);
});

type Props = {};

const Result = (props: Props) => {
  const local = useLocalSearchParams();
  const global = useGlobalSearchParams();
  console.log({
    local,
    global,
  });
  return (
    <View>
      <Text>Result</Text>
    </View>
  );
};

export default Result;
