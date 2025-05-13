import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
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
				<Text 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginTop: 75,
						marginBottom: 26,
						marginLeft: 142,
					}}>
					{"My Profile"}
				</Text>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 8,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/2p04v1wv_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 171,
							height: 175,
						}}
					/>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 3,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 22,
							fontWeight: "bold",
						}}>
						{"Alex Marshall"}
					</Text>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 32,
					}}>
					<TouchableOpacity onPress={()=>alert('Pressed!')}>
						<LinearGradient 
							start={{x:0, y:0}}
							end={{x:0, y:1}}
							colors={["#255F38", "#1F7D53"]}
							style={{
								borderRadius: 20,
								paddingVertical: 13,
								paddingHorizontal: 46,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 16,
									fontWeight: "bold",
								}}>
								{"Edit Profile\n"}
							</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
				<View 
					style={{
						alignItems: "flex-start",
						marginBottom: 35,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							height: 2,
							backgroundColor: "#E6E6E6",
							marginBottom: 16,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 32,
							marginLeft: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/zdyph2be_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 24,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"Setting"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 32,
							marginLeft: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/o6ol303m_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 24,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"Friend"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 32,
							marginLeft: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/c1dadpxh_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 24,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"New Group"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 32,
							marginLeft: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/borvigw4_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 24,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"Support"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 32,
							marginLeft: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/10n446u4_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 24,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"share"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginLeft: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/vs432tbi_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
								marginRight: 24,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"About us"}
						</Text>
					</View>
				</View>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/g4ae0yyn_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						height: 79,
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}