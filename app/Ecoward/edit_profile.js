
import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { Link } from "expo-router";

export default function Edit() {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const router = useRouter();
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
						textAlign: "center",
					}}>
					{"Edit Profile"}
				</Text>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/x0opu6j9_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						alignSelf: "center",
						width: 171,
						height: 175,
						marginBottom: 27,
					}}
				/>
				<View 
					style={{
						alignSelf: "stretch",
						marginBottom: 26,
						marginHorizontal: 25,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 11,
						}}>
						{"Name"}
					</Text>
					<TextInput
						placeholder={"Melissa Peters"}
						value={textInput1}
						onChangeText={onChangeTextInput1}
						style={{
							color: "#534C4C",
							fontSize: 14,
							fontWeight: "bold",
							borderColor: "#534C4C24",
							borderRadius: 6,
							borderWidth: 1,
							paddingVertical: 16,
							paddingLeft: 15,
							paddingRight: 30,
						}}
					/>
				</View>
				<View 
					style={{
						alignSelf: "stretch",
						marginBottom: 26,
						marginHorizontal: 25,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 11,
						}}>
						{"Email"}
					</Text>
					<TextInput
						placeholder={"melpeters@gmail.com"}
						value={textInput2}
						onChangeText={onChangeTextInput2}
						style={{
							color: "#534C4C",
							fontSize: 14,
							fontWeight: "bold",
							borderColor: "#534C4C24",
							borderRadius: 6,
							borderWidth: 1,
							paddingVertical: 16,
							paddingLeft: 15,
							paddingRight: 30,
						}}
					/>
				</View>
				<View 
					style={{
						alignSelf: "stretch",
						marginBottom: 83,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							fontWeight: "bold",
							marginBottom: 11,
						}}>
						{"Password"}
					</Text>
					<TextInput
						placeholder={"************"}
						value={textInput3}
						onChangeText={onChangeTextInput3}
						style={{
							color: "#000000",
							fontSize: 14,
							fontWeight: "bold",
							borderColor: "#534C4C24",
							borderRadius: 6,
							borderWidth: 1,
							paddingVertical: 16,
							paddingLeft: 15,
							paddingRight: 30,
						}}
					/>
				</View>
				<TouchableOpacity onPress={()=>router.back('/Ecoward/profile')}>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#255F38", "#1F7D53"]}
						style={{
							alignSelf: "center",
							width: 250,
							borderRadius: 20,
							paddingVertical: 14,
							paddingHorizontal: 46,
							marginBottom: 57,
						}}>
						<Text 
							style={{
								textAlign: "center",
								color: "#FFFFFF",
								fontSize: 20,
								fontWeight: "bold",
							}}>
							{"Save changes"}
						</Text>
					</LinearGradient>
				</TouchableOpacity>
				
			</ScrollView>
			
		</SafeAreaView>
		
	)
	
}
