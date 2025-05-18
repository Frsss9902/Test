import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import CustomHeader from "@/components/topbar";

export default function Scan() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) return <View />;
  
  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader title=" " />
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>We need your permission to access the camera</Text>
          <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
            <Text style={styles.permissionButtonText}>Grant Permission</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const handleScan = ({ data, type }) => {
    if (!scanned) {
      setScanned(true);
      Alert.alert("Scanned Data", `${data}`);
      setTimeout(() => setScanned(false), 3000);
    }
  };

  const toggleCameraFacing = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title=" " />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Scan QR Code</Text>
      </View>

      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "ean13", "ean8", "upc_a", "upc_e", "code39", "code128"],
        }}
        onBarcodeScanned={handleScan}
      >
        <View style={styles.overlay}>
          <View style={styles.scanArea} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <Text style={styles.flipButtonText}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9DFC6",
  },
  headerTextContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  headerText: {
    color: "#121212",
    fontSize: 30,
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
  flipButton: {
    backgroundColor: "#255F38",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  flipButtonText: {
    color: "white",
    fontSize: 16,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  permissionText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },
  permissionButton: {
    backgroundColor: "#1F7D53",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  permissionButtonText: {
    color: "white",
    fontSize: 16,
  },
});
