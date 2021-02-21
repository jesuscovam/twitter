import { EvilIcons, Feather } from "@expo/vector-icons";
import * as React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Footer: React.FC<FooterProps> = ({
  numberOfLikes,
  numberOfRetweets,
  numberOfComments,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconGroup}>
        <EvilIcons name="comment" size={20} color="gray" />
        <Text style={styles.iconText}>{numberOfComments}</Text>
      </View>
      <View style={styles.iconGroup}>
        <EvilIcons name="retweet" size={20} color="gray" />
        <Text style={styles.iconText}>{numberOfRetweets}</Text>
      </View>
      <View style={styles.iconGroup}>
        <EvilIcons name="heart" size={20} color="gray" />
        <Text style={styles.iconText}>{numberOfLikes}</Text>
      </View>
      <View style={styles.iconGroup}>
        <Feather name="share" size={15} color="gray" />
      </View>
    </View>
  );
};

interface FooterProps {
  numberOfLikes?: number;
  numberOfRetweets?: number;
  numberOfComments?: number;
}

export default Footer;
