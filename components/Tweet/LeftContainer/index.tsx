import * as React from "react";
import { View } from "react-native";
import { User } from "../../../types";
import ProfilePicture from "../../ProfilePicture";

const LeftContainer: React.FC<LeftContainerProps> = ({ user }) => {
  return (
    <View>
      <ProfilePicture image={user?.image} size={75} />
    </View>
  );
};

export type LeftContainerProps = {
  user: User;
};

export default LeftContainer;
