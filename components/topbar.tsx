import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';

// Judul berdasarkan nama file/halaman
const routeTitles: { [key: string]: string } = {
  index: 'Beranda',
  explore: 'Jelajahi',
  coba: 'Coba Fitur',
  oke: 'Halaman Oke',
  redeem: 'Penukaran Poin',
  maps: 'Lokasi Tempat Sampah',
};

const CustomHeader = ({ title }: { title?: string }) => {
  const router = useRouter();
  const segments = useSegments();
  const currentRoute = segments[segments.length - 1]; // ambil nama file halaman sekarang
  const defaultTitle = routeTitles[currentRoute ?? ''] ?? 'Aplikasi Saya';

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle-outline" size={40} color="green" />
      </TouchableOpacity>

      <Text style={styles.title}>{title || defaultTitle}</Text>

      <TouchableOpacity onPress={() => console.log('Notifikasi')} style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={35} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d0e8c9', // hijau muda
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingTop: 40, // untuk menghindari status bar
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
});