import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, ImageBackground, } from "react-native";
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
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#8EB486",
						padding: 18,
						marginBottom: 33,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/gcmz0g7l_expires_30_days.png"}} 
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
						{"Penukaran Point"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/ab7zpcpl_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 48,
							height: 48,
						}}
					/>
				</View>
				<LinearGradient 
					start={{x:0, y:0}}
					end={{x:0, y:1}}
					colors={["#255F38", "#1F7D53"]}
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderRadius: 25,
						paddingVertical: 10,
						paddingHorizontal: 20,
						marginBottom: 15,
						marginHorizontal: 18,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/gd39vc5u_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style={{
							alignItems: "flex-start",
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontWeight: "bold",
								marginBottom: 15,
								marginHorizontal: 4,
							}}>
							{"Botol Minum\n500 points"}
						</Text>
						<TouchableOpacity 
							style={{
								backgroundColor: "#D9D9D9",
								borderRadius: 15,
								paddingVertical: 5,
								paddingHorizontal: 15,
							}} onPress={()=>alert('Pressed!')}>
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
				<LinearGradient 
					start={{x:0, y:0}}
					end={{x:0, y:1}}
					colors={["#255F38", "#1F7D53"]}
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderRadius: 25,
						paddingVertical: 9,
						paddingHorizontal: 20,
						marginBottom: 15,
						marginHorizontal: 18,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/vm93r218_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style={{
							alignItems: "flex-start",
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontWeight: "bold",
								marginBottom: 14,
								marginHorizontal: 4,
							}}>
							{"Botol Minum\n500 points"}
						</Text>
						<TouchableOpacity 
							style={{
								backgroundColor: "#D9D9D9",
								borderRadius: 15,
								paddingVertical: 5,
								paddingHorizontal: 15,
							}} onPress={()=>alert('Pressed!')}>
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
				<LinearGradient 
					start={{x:0, y:0}}
					end={{x:0, y:1}}
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/q1e8khlo_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style={{
							alignItems: "flex-start",
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontWeight: "bold",
								marginBottom: 13,
								marginHorizontal: 4,
							}}>
							{"Botol Minum\n500 points"}
						</Text>
						<TouchableOpacity 
							style={{
								backgroundColor: "#D9D9D9",
								borderRadius: 15,
								paddingVertical: 5,
								paddingHorizontal: 15,
							}} onPress={()=>alert('Pressed!')}>
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
				<ImageBackground 
					source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/7a2y3v8q_expires_30_days.png"}} 
					resizeMode = {'stretch'}
					style={{
						paddingTop: 16,
						paddingBottom: 55,
						marginBottom: 15,
						marginHorizontal: 18,
					}}
					>
					<Text 
						style={{
							color: "#FFFFFF",
							fontWeight: "bold",
							marginLeft: 110,
						}}>
						{"Botol Minum\n500 points"}
					</Text>
				</ImageBackground>
				<LinearGradient 
					start={{x:0, y:0}}
					end={{x:0, y:1}}
					colors={["#255F38", "#1F7D53"]}
					style={{
						flexDirection: "row",
						alignItems: "center",
						borderRadius: 25,
						paddingVertical: 16,
						paddingHorizontal: 20,
						marginBottom: 30,
						marginHorizontal: 18,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/l8pvqx5c_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 70,
							height: 70,
							marginRight: 16,
						}}
					/>
					<View 
						style={{
							alignItems: "flex-start",
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontWeight: "bold",
								marginBottom: 7,
								marginHorizontal: 4,
							}}>
							{"Botol Minum\n500 points"}
						</Text>
						<TouchableOpacity 
							style={{
								backgroundColor: "#D9D9D9",
								borderRadius: 15,
								paddingVertical: 5,
								paddingHorizontal: 15,
							}} onPress={()=>alert('Pressed!')}>
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
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/sxv109eo_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						height: 81,
						marginHorizontal: 1,
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}