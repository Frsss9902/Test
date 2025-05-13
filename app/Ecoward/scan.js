import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
export default (props) => {
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
				<View 
					style={{
						flexDirection: "row",
						marginTop: 19,
						marginBottom: 64,
						marginLeft: 34,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/boewsk0z_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 48,
							height: 48,
							marginRight: 241,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/76inqgza_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 48,
							height: 48,
							marginVertical: 4,
						}}
					/>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 56,
					}}>
					<Text 
						style={{
							color: "#121212",
							fontSize: 30,
							fontWeight: "bold",
						}}>
						{"Scan QR Code"}
					</Text>
				</View>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/hskn4ytv_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						height: 372,
						marginBottom: 34,
						marginHorizontal: 22,
					}}
				/>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 55,
					}}>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#255F38", "#1F7D53"]}
						style={{
							flexDirection: "row",
							alignItems: "center",
							borderRadius: 20,
							paddingVertical: 19,
							paddingLeft: 40,
							paddingRight: 43,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/mpq4l4fg_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 35,
								height: 33,
								marginRight: 5,
							}}
						/>
						<Text 
							style={{
								color: "#FDF7F7",
								fontSize: 26,
							}}>
							{"Scan QR Code"}
						</Text>
					</LinearGradient>
				</View>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/7ayd9njx_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						height: 82,
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}