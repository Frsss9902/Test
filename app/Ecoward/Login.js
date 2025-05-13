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
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/2jmvywnv_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						width: 289,
						height: 282,
						marginTop: 88,
						marginBottom: 30,
						marginLeft: 56,
					}}
				/>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 6,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 30,
							fontWeight: "bold",
						}}>
						{"Ecoward"}
					</Text>
				</View>
				<View 
					style={{
						marginBottom: 56,
						marginHorizontal: 11,
					}}>
					<View 
						style={{
							alignItems: "center",
							marginBottom: 14,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 13,
							}}>
							{"Join Ecowards and start earning points"}
						</Text>
					</View>
					<View 
						style={{
							alignItems: "center",
							marginBottom: 21,
						}}>
						<Text 
							style={{
								color: "#050506",
								fontSize: 16,
								fontWeight: "bold",
								marginBottom: 1,
							}}>
							{"Login"}
						</Text>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							marginBottom: 11,
						}}>
						{"Username:"}
					</Text>
					<View 
						style={{
							alignItems: "flex-end",
							borderColor: "#000000",
							borderRadius: 50,
							borderWidth: 2,
							paddingVertical: 6,
							marginBottom: 12,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/d4f1m2lf_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 13,
							}}
						/>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							marginBottom: 11,
							marginLeft: 2,
						}}>
						{"Password:"}
					</Text>
					<View 
						style={{
							alignItems: "flex-end",
							borderColor: "#000000",
							borderRadius: 50,
							borderWidth: 2,
							paddingVertical: 4,
							marginBottom: 44,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/6hdxsn18_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 13,
							}}
						/>
					</View>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#255F38", "#1F7D53"]}
						style={{
							height: 32,
							borderRadius: 15,
							marginBottom: 54,
						}}>
					</LinearGradient>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							marginLeft: 66,
						}}>
						{"Dont  have and account? Register"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}