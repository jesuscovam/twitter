import * as React from "react";
import { Image } from "react-native";

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  image,
  size = 50,
}) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: size,
        height: size,
        borderRadius: size,
      }}
    />
  );
};

export type ProfilePictureProps = {
  image?: string;
  size?: number;
};

export default ProfilePicture;
