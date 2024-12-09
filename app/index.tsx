import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import apiClient from "../api/apiClient";
import { useRouter } from "expo-router";
import Logo from "@/components/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Burnt from "burnt";

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await apiClient.post("login/", { email, password });
      console.log("Token recebido:", response.data.access);
      await AsyncStorage.setItem("token", response.data.access);
      Burnt.toast({
        title: "Login realizado com sucesso.",
      });
      router.push("/profile");
    } catch (error: any) {
      Burnt.toast({
        title: "Erro ao logar. Verifique dados informados.",
      });
    }
  };

  return (
    <View className="flex-1 bg-gray-900 justify-center px-6">
      <View className="flex items-center mb-12">
        <Logo />
      </View>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#A1A1AA"
        className="bg-gray-800 text-white px-4 py-3 rounded-md mb-4"
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#A1A1AA"
        secureTextEntry
        className="bg-gray-800 text-white px-4 py-3 rounded-md mb-2"
        onChangeText={setPassword}
      />
      <Text className="text-gray-400 text-xs mb-4">Sua senha deve conter entre 4 e 12 caracteres</Text>
      <TouchableOpacity
        className="bg-primary-500 py-3 rounded-md"
        onPress={handleLogin}
      >
        <Text className="text-center text-white font-bold">Login</Text>
      </TouchableOpacity>
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity onPress={() => router.push("/reset-password")}>
          <Text className="text-gray-400 text-sm">Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text className="text-gray-400 text-sm">Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
