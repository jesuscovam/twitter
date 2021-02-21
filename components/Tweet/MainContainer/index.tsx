import { Entypo } from "@expo/vector-icons";
import * as React from "react";
import { Image, Text, View } from "react-native";
import { Tweet } from "../../../types";
import Footer from "./Footer";
import styles from "./styles";

const MainContainer: React.FC<MainContainerProps> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderText}>
          <Text style={styles.name}>{tweet?.user?.name}</Text>
          <Text style={styles.username}>@{tweet?.user?.username}</Text>
          <Text style={styles.createdAt}>15s</Text>
        </View>
        <Entypo name="dots-three-horizontal" size={15} color="gray" />
      </View>
      <View>
        <Text style={styles.content}>{tweet?.content}</Text>
        {tweet?.image && (
          <Image source={{ uri: tweet?.image }} style={styles.image} />
        )}
      </View>
      <Footer
        numberOfComments={tweet?.numberOfComments}
        numberOfLikes={tweet?.numberOfLikes}
        numberOfRetweets={tweet?.numberOfRetweets}
      />
    </View>
  );
};

export type MainContainerProps = {
  tweet: Tweet;
};

export default MainContainer;
