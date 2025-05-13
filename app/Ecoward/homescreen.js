// Ecoward/HomeScreen.js
import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#D9DFC6" }}>
        <View style={{ alignItems: "center", marginTop: 202, marginHorizontal: 4 }}>
          <Text style={{ color: "#000000", fontSize: 30, fontWeight: "bold" }}>
            {"Ecoward"}
          </Text>
          <Image
            source={require('../../assets/images/react-logo.png')}
            resizeMode="stretch"
            style={{ height: 150, width: 150, marginBottom:250 }}
          />
        </View>
        <View style={{ alignItems: "center", marginBottom: 135 }}>
          <Text style={{ color: "#000000", fontSize: 18, width: 285 }}>
            {"Earn Rewards for recyling waste.\nExplore enviromental challenges"}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end", marginBottom: 19 }}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/feltt75f_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={{ width: 32, height: 32, marginRight: 24 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}