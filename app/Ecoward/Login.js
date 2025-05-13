import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function Login() {
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
					
					<Text
						style={{
							color: "#000000",
							fontSize: 16,
							marginBottom: 11,
						}}>
						{"Username:"}
					</Text>
					<View style={{ position: 'relative', marginBottom: 12 }}>
					<Image
						source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/6hdxsn18_expires_30_days.png" }}
						resizeMode={"stretch"}
						style={{
							width: 24,
							height: 24,
							position: 'absolute',
							right: 15,
							top: '50%',
							transform: [{ translateY: -12 }], // Untuk menempatkan gambar di tengah secara vertikal
						}}
					/>
					<TextInput
						placeholder={"Masukan Username"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#534C4C",
							fontSize: 14,
							fontWeight: "bold",
							borderColor: "#000000",
							borderRadius: 50,
							borderWidth: 2,
							paddingVertical: 9,
							paddingLeft: 30, // Tambahkan padding kiri agar teks tidak menimpa gambar
							paddingRight: 30,
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
					<View style={{ position: 'relative', marginBottom: 12 }}>
					<Image
						source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/6hdxsn18_expires_30_days.png" }}
						resizeMode={"stretch"}
						style={{
							width: 24,
							height: 24,
							position: 'absolute',
							right: 15,
							top: '50%',
							transform: [{ translateY: -12 }], // Untuk menempatkan gambar di tengah secara vertikal
						}}
					/>
					<TextInput
						placeholder={"*********"}
						value={textInput2}
						onChangeText={onChangeTextInput2}
						style={{
							color: "#534C4C",
							fontSize: 14,
							fontWeight: "bold",
							borderColor: "#000000",
							borderRadius: 50,
							borderWidth: 2,
							paddingVertical: 9,
							paddingLeft: 30, // Tambahkan padding kiri agar teks tidak menimpa gambar
							paddingRight: 30,
						}}
						/>
					</View>
					
					<LinearGradient 
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
						colors={["#255F38", "#1F7D53"]}
						style={{
							height: 40,
							borderRadius: 15,
							marginBottom: 54,
							marginTop: 30,
							justifyContent: "center", // Untuk menempatkan teks di tengah secara vertikal
							alignItems: "center", // Untuk menempatkan teks di tengah secara horizontal
						}}
					>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 16,
								fontWeight: "bold",
							}}
						>
							{"Login"}
						</Text>
					</LinearGradient>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							marginLeft: 50,
							teksalign: "center",
						}}>
						{"Dont  have and account? Register"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}