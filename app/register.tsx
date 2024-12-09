import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Logo from "@/components/logo";
import apiClient from "@/api/apiClient";
import { useRouter } from "expo-router";
import * as Burnt from "burnt";

const RegisterScreen: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await apiClient.post("register/", { name, email, password });
      Burnt.toast({
        title: "Registro realizado com sucesso.",
      });
      router.push("/");
    }
    catch (error: any) {
      Burnt.toast({
        title: "Erro ao registrar. Verifique dados informados.",
      });
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
        onPress={handleRegister}
      >
        <Text className="text-center text-white font-bold">Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
