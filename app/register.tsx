import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import Logo from "@/components/logo";
import apiClient from "@/api/apiClient";
import { useRouter } from "expo-router";

const RegisterScreen: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await apiClient.post("register/", { name, email, password });
      ToastAndroid.show("Registro realizado com sucesso!", ToastAndroid.SHORT);
      router.push("/");
    } catch (error: any) {
      // console.error("Erro no login:", error.response?.data || error.message);
      ToastAndroid.showWithGravity(
        "Erro ao registrar. Verifique dados informados.",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <View className="flex-1 bg-gray-900 justify-center px-6">
      <View className="flex items-center mb-12">
        <Logo />
      </View>
      <TextInput
        placeholder="Nome"
        placeholderTextColor="#A1A1AA"
        className="bg-gray-800 text-white px-4 py-3 rounded-md mb-4"
        onChangeText={setName}
      />
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
      <TouchableOpacity className="bg-primary-500 py-3 rounded-md"
        onPress={handleLogin}
      >
        <Text className="text-center text-white font-bold">Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
