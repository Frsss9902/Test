import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";
import { BarChart } from "react-native-chart-kit";
import CustomHeader from "@/components/topbar";
import { useRouter } from "expo-router";
import { Route } from "expo-router/build/Route";

// Gunakan fallback: View saat di web, LinearGradient di mobile
const GradientWrapper = Platform.OS === "web" ? View : LinearGradient;
const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {
  const [textInput1, setTextInput1] = useState("");
  const onChangeTextInput1 = (text) => setTextInput1(text);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomHeader title=" Dashboard" />
      <ScrollView style={{ flex: 1, backgroundColor: "#D9DFC6" }}>
        <View
          style={{
            backgroundColor: "#D9D9D9",
            paddingVertical: 16,
            marginBottom: 9,
            marginHorizontal: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 13,
              marginHorizontal: 15,
            }}
          >
            
          </View>

          <GradientWrapper
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#27391C", "#255F38"]}
            style={{
              alignItems: "flex-start",
              borderColor: "#255F38",
              borderRadius: 20,
              borderWidth: 1,
              paddingVertical: 15,
              marginHorizontal: 19,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: 20,
                marginLeft: 15,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginRight: 139,
                }}
              >
                {"Point balance"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/sz86yb80_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{ width: 46, height: 39, marginTop: 11 }}
              />
            </View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 40,
                fontWeight: "bold",
                marginLeft: 107,
              }}
            >
              {"500 Points"}
            </Text>
          </GradientWrapper>
        </View>

        <View style={{ marginBottom: 15, marginHorizontal: 16 }}>
          <GradientWrapper
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#255F38", "#1F7D53"]}
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 15,
              paddingVertical: 19,
              paddingHorizontal: 50,
              marginBottom: 14,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/6bxb6t41_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{ width: 49, height: 45, marginRight: 17 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#FFFFFF", fontSize: 12, marginBottom: 4 }}>
                {"Deposit yang dikembalikan"}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
                {"$150,000"}
              </Text>
            </View>
          </GradientWrapper>

          <GradientWrapper
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#255F38", "#1F7D53"]}
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 15,
              paddingVertical: 16,
              paddingHorizontal: 50,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/ad5h7nxy_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{ width: 45, height: 45, marginRight: 21 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#FFFFFF", fontSize: 12, marginBottom: 4 }}>
                {"Total Sampah Dibuang"}
              </Text>
              <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
                {"1,250"}
              </Text>
            </View>
          </GradientWrapper>
        </View>

        <TouchableOpacity onPress={() => router.push('/Ecoward/scan')}>
        <GradientWrapper
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#255F38", "#1F7D53"]}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 15,
            paddingVertical: 20,
            paddingHorizontal: 49,
            marginBottom: 15,
            marginHorizontal: 17,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/ljtmgwro_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{ width: 45, height: 45, marginRight: 22 }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Scan Code QR
          </Text>
        </GradientWrapper>
      </TouchableOpacity>


        <View style={{ alignItems: "center", marginBottom: 15 }}>
          <Text style={{ color: "#000000", fontSize: 18, fontWeight: "bold" }}>
            {"Grafik Aktivitas Mingguan"}
          </Text>
        </View>

        <View style={{ marginBottom: 15, marginHorizontal: 12 }}>
          <BarChart
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99],
                },
              ],
            }}
            width={screenWidth - 27}
            height={250}
            showValuesOnTopOfBars={true}
            fromZero
            chartConfig={{
              backgroundColor: "#e6f4ea", // hijau pastel muda
              backgroundGradientFrom: "#e6f4ea", // awal gradasi hijau sangat muda
              backgroundGradientTo: "#c8e6c9", // akhir gradasi hijau muda
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // Hijau daun
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              barPercentage: 0.6,
              fillShadowGradient: "#32CD32", // LimeGreen
              fillShadowGradientOpacity: 1,
              propsForBackgroundLines: {
                stroke: "#e0f2e9", // hijau muda untuk garis background
                strokeDasharray: "",
              },
              propsForLabels: {
                fontSize: 12,
                fontWeight: "600",
              },
            }}

            style={{
              marginVertical: 8,
              borderRadius: 12,
            }}
          />


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
