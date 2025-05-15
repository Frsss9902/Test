import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import CustomHeader from "@/components/topbar";

export default function Redeem() {
  const redeemItems = [
    {
      id: 1,
      title: "Botol Minum\n500 points",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/gd39vc5u_expires_30_days.png"
    },
    {
      id: 2,
      title: "Botol Minum\n500 points",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/vm93r218_expires_30_days.png"
    },
    {
      id: 3,
      title: "Botol Minum\n500 points",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/q1e8khlo_expires_30_days.png"
    },
    {
      id: 4,
      title: "Botol Minum\n500 points",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/q1e8khlo_expires_30_days.png"
    },
    {
      id: 5,
      title: "Botol Minum\n500 points",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/l8pvqx5c_expires_30_days.png"
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader title="Penukaran Point" />
      <ScrollView style={{ flex: 1, backgroundColor: "#D9DFC6" , paddingTop:20}}>
       

        {/* Redeem Items */}
        {redeemItems.map((item) => (
          <LinearGradient
            key={item.id}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#255F38", "#1F7D53"]}
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 25,
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginBottom: 15,
              marginHorizontal: 18,
            }}>
            <Image
              source={{ uri: item.image }}
              resizeMode={"stretch"}
              style={{ width: 70, height: 70, marginRight: 16 }}
            />
            <View style={{ alignItems: "flex-start" }}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  marginBottom: 10,
                  marginHorizontal: 4,
                }}>
                {item.title}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: 15,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
                onPress={() => alert('Pressed!')}>
                <Text
                  style={{
                    color: "#255F38",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}>
                  {"Redeem"}
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}

       
      </ScrollView>
    </SafeAreaView>
  );
}