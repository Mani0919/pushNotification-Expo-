import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { NotificationProvider } from "../context/notification";
import * as Notifications from "expo-notifications";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Root() {
  return (
    <>
      <NotificationProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="browsers" />
        </Stack>
      </NotificationProvider>
    </>
  );
}
