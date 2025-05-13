import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, TextInput, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function Maps() {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#D9DFC6",
				}}>
				<View >
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#8EB486",
							padding: 18,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/yve7b1q5_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 48,
								height: 48,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"Lokasi Tempat Sampah"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/z7aqvcu4_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 48,
								height: 48,
							}}
						/>
					</View>
					<View 
						style={{
							marginBottom: 302,
							marginHorizontal: 1,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/7racffk9_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 379,
							}}
						/>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/zrsvzqxu_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								position: "absolute",
								bottom: -304,
								right: -1,
								left: -1,
							}}
							>
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
								<Text 
									style={{
										color: "#3C3C43",
										fontSize: 18,
										fontWeight: "bold",
										marginBottom: 1,
										marginRight: 38,
									}}>
									{"􀊫"}
								</Text>
								<Text 
									style={{
										color: "#3C3C43",
										fontSize: 17,
									}}>
									{"Search"}
								</Text>
							</View>
							<LinearGradient 
								start={{x:0, y:0}}
								end={{x:0, y:1}}
								colors={["#255F38", "#1F7D53"]}
								style={{
									flexDirection: "row",
									alignItems: "center",
									borderRadius: 15,
									paddingVertical: 20,
									paddingHorizontal: 21,
									marginBottom: 26,
									marginHorizontal: 17,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/pwhcczzg_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 48,
										height: 48,
										marginRight: 32,
									}}
								/>
								<TextInput
									placeholder={"Lokasi Ecoward Terdekat"}
									value={textInput1}
									onChangeText={onChangeTextInput1}
									style={{
										color: "#FFFFFF",
										fontSize: 20,
										fontWeight: "bold",
										flex: 1,
										paddingVertical: -1,
									}}
								/>
							</LinearGradient>
							<LinearGradient 
								start={{x:0, y:0}}
								end={{x:0, y:1}}
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
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/bmc4lhtb_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 48,
										height: 48,
									}}
								/>
								<TextInput
									placeholder={"Redeem Rewards"}
									value={textInput2}
									onChangeText={onChangeTextInput2}
									style={{
										color: "#FFFFFF",
										fontSize: 20,
										fontWeight: "bold",
										flex: 1,
										paddingVertical: 16,
									}}
								/>
							</LinearGradient>
						</ImageBackground>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/r2p6zfmz_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							height: 79,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}