import * as React from "react";
import { View } from "react-native";
import { Tweet as TweetType } from "../../types";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import styles from "./styles";

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <LeftContainer user={tweet?.user} />
      <MainContainer tweet={tweet} />
    </View>
  );
};

export type TweetProps = {
  tweet: TweetType;
};

export default Tweet;
