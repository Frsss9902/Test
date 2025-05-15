import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Ecoward/homescreen"; // pastikan huruf besar-kecil sesuai dengan nama file
import Dashboard from "../Ecoward/dashboard"; // pastikan huruf besar-kecil sesuai dengan nama file
import Maps from "../Ecoward/maps"; // pastikan huruf besar-kecil sesuai dengan nama file
import Redeem from "../Ecoward/redeem"; // pastikan huruf besar-kecil sesuai dengan nama file
import Profile from "../Ecoward/profile"; // pastikan huruf besar-kecil sesuai dengan nama file
import Login from "../Ecoward/Login"; // pastikan huruf besar-kecil sesuai dengan nama file
import { IconSymbol } from "@/components/ui/IconSymbol"; // pastikan huruf besar-kecil sesuai dengan nama file
import App from '../navigation/buttom_tabs'; // pastikan huruf besar-kecil sesuai dengan nama file
import Scan from "../Ecoward/scan"
import Edit from "../Ecoward/edit_profile"; // pastikan huruf besar-kecil sesuai dengan nama file


export default function Index() {
  return <Profile/>
  ;
}