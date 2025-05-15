import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Topbar() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/gcmz0g7l_expires_30_days.png' }}
        style={styles.icon}
      />
      <Text style={styles.title}>Lokasi Tempat Sampah</Text>
      <Image
        source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aPyjIxfH0Q/z7aqvcu4_expires_30_days.png' }}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8EB486',
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
