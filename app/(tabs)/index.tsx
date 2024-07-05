import React, { useState, useRef } from "react";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const webViewRef = useRef(null);

  return (
    <SafeAreaView style={styles.containerStyle}>
      <WebView
        ref={webViewRef}
        source={{ uri: "https://yakeey.com/fr-ma/achat/biens/maroc" }}
        style={styles.webview}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        mixedContentMode="compatibility"
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={true}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Image
            source={require("@/assets/images/test.gif")}
            style={styles.loadingImage}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loadingImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
