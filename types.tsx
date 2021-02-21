export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string;
  username: string;
  name: string;
  image?: string;
};

export type Tweet = {
  id: string;
  createdAt: string;
  content: string;
  image?: string;
  numberOfComments?: number;
  numberOfLikes?: number;
  numberOfRetweets?: number;
  user: User;
};
