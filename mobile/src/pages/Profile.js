import React from "react";
import { WebView } from "react-native-webview";
// import { Container } from './styles';

export default function Profile({ navigation }) {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{
        uri: `https://github.com/${navigation.getParam("github_username")}`
      }}
    />
  );
}
