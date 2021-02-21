import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tweetHeaderText: {
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    marginRight: 5,
  },
  username: {
    color: "gray",
    marginRight: 5,
  },
  createdAt: {
    color: "gray",
    marginRight: 5,
  },
  content: {
    marginTop: 5,
    lineHeight: 18,
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 10,
    borderRadius: 20,
    resizeMode: "cover",
    overflow: "hidden",
  },
});

export default styles;
