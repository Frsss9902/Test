import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, TextInput, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from "@react-navigation/elements";
import { TouchableOpacity } from "react-native";
import CustomHeader from "@/components/topbar";

export default function Maps() {
	return (
		<SafeAreaView	 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<CustomHeader
				title="Lokasi Tempat Sampah">
			</CustomHeader>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#D9DFC6",
				}}>
				<View >				
					<View 
						style={{
							marginBottom: 25,
							marginHorizontal: 1,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/7racffk9_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 379,
							}}
						/>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FAFAFAED",
								borderRadius: 10,
								paddingVertical: 4,
								paddingHorizontal: 8,
								marginTop: 28,
								marginBottom: 32,
								marginHorizontal: 15,
							}}>
  
								<Image
									source={{ uri: "https://cdn-icons-png.flaticon.com/512/751/751463.png" }} // Ganti dengan URL PNG Search Icon
									style={{
									width: 24,
									height: 24,
									marginRight: 12,
									}}
								/>
								
								<TextInput
									placeholder="Cari lokasi tempat sampah..."
									placeholderTextColor="#3C3C43"
									style={{
									flex: 1,
									fontSize: 17,
									color: "#3C3C43",
									}}
								/>
								</View>


							<TouchableOpacity
							onPress={() => {
								// Tambahkan logika yang diinginkan di sini, seperti navigasi atau aksi lainnya
								console.log("Lokasi Ecoward Terdekat button pressed");
							}}
							>
							<LinearGradient
								start={{ x: 0, y: 0 }}
								end={{ x: 0, y: 1 }}
								colors={["#255F38", "#1F7D53"]}
								style={{
								flexDirection: "row",
								alignItems: "center",
								borderRadius: 15,
								paddingVertical: 20,
								paddingHorizontal: 21,
								marginBottom: 26,
								marginHorizontal: 17,
								}}
							>
								<Image
								source={{
									uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/pwhcczzg_expires_30_days.png",
								}}
								resizeMode={"stretch"}
								style={{
									width: 48,
									height: 48,
									marginRight: 32,
								}}
								/>
								<Text
								style={{
									color: "#FFFFFF",
									fontSize: 16,
									fontWeight: "bold",
									flex: 1,
									
								}}
								>
								Lokasi Ecoward Terdekat
								</Text>
							</LinearGradient>
							</TouchableOpacity>
						<TouchableOpacity
						onPress={() => {
							// Tambahkan logika yang diinginkan di sini, seperti navigasi atau aksi lainnya
							console.log("Redeem Award button pressed");
						}}
						>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							colors={["#255F38", "#1F7D53"]}
							style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							borderRadius: 15,
							paddingVertical: 15,
							paddingLeft: 21,
							paddingRight: 68,
							marginBottom: 29,
							marginHorizontal: 15,
							}}
						>
							<Image
							source={{
								uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/bmc4lhtb_expires_30_days.png",
							}}
							resizeMode={"stretch"}
							style={{
								width: 48,
								height: 48,
							}}
							/>
							<Text
							style={{
								color: "#FFFFFF",
								fontSize: 20,
								fontWeight: "bold",
								flex: 1,
								textAlign: "center",
							}}
							>
							Redeem Award
							</Text>
						</LinearGradient>
						</TouchableOpacity>	
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}