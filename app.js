import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import firebaseConfig from "./firebaseConfig";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  })
});

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission for notifications not granted!");
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Expo push token:", token);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Expo FCM Demo App</Text>
      <Button title="Check Notifications" onPress={() => alert("Ready!")} />
    </View>
  );
}
