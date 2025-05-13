import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, } from "react-native";
import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
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
						backgroundColor: "#D9D9D9",
						paddingVertical: 16,
						marginBottom: 9,
						marginHorizontal: 1,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: 13,
							marginHorizontal: 15,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/zdie07f0_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 48,
								height: 48,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/bl8pf2g2_expires_30_days.png"}} 
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
						colors={["#27391C", "#255F38"]}
						style={{
							alignItems: "flex-start",
							borderColor: "#255F38",
							borderRadius: 20,
							borderWidth: 1,
							paddingVertical: 15,
							marginHorizontal: 19,
						}}>
						<View 
							style={{
								flexDirection: "row",
								marginBottom: 71,
								marginLeft: 15,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 18,
									fontWeight: "bold",
									marginRight: 139,
								}}>
								{"Point balance"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/sz86yb80_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 46,
									height: 39,
									marginTop: 11,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 40,
								fontWeight: "bold",
								marginLeft: 107,
							}}>
							{"500 Points"}
						</Text>
					</LinearGradient>
				</View>
				<View 
					style={{
						marginBottom: 15,
						marginHorizontal: 16,
					}}>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#255F38", "#1F7D53"]}
						style={{
							flexDirection: "row",
							alignItems: "center",
							borderRadius: 15,
							paddingVertical: 19,
							paddingHorizontal: 50,
							marginBottom: 14,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/6bxb6t41_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 49,
								height: 45,
								marginRight: 17,
							}}
						/>
						<View 
							style={{
								flex: 1,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
									marginBottom: 4,
								}}>
								{"Deposit yang dikembalikan"}
							</Text>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 16,
									fontWeight: "bold",
								}}>
								{"$150,000"}
							</Text>
						</View>
					</LinearGradient>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#255F38", "#1F7D53"]}
						style={{
							flexDirection: "row",
							alignItems: "center",
							borderRadius: 15,
							paddingVertical: 16,
							paddingHorizontal: 50,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/ad5h7nxy_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 45,
								height: 45,
								marginRight: 21,
							}}
						/>
						<View 
							style={{
								flex: 1,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
									marginBottom: 4,
								}}>
								{"Total Sampah Dibuang"}
							</Text>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 16,
									fontWeight: "bold",
								}}>
								{"1,250"}
							</Text>
						</View>
					</LinearGradient>
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
						paddingHorizontal: 49,
						marginBottom: 15,
						marginHorizontal: 17,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/ljtmgwro_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 45,
							height: 45,
							marginRight: 22,
						}}
					/>
					<TextInput
						placeholder={"Scan Code QR"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							fontWeight: "bold",
							flex: 1,
							paddingVertical: 15,
						}}
					/>
				</LinearGradient>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 15,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 18,
							fontWeight: "bold",
						}}>
						{"Grafik Aktivitas Mingguan"}
					</Text>
				</View>
				<View 
					style={{
						marginBottom: 103,
						marginHorizontal: 12,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/v9okaqi1_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							height: 181,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/5ai0q66n_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: -24,
							right: -12,
							left: -12,
							height: 82,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}