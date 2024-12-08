import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const RegisterScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-gray-900 justify-center px-6">
      <Text className="text-center text-3xl text-purple-400 font-bold mb-8">AlvoCoin</Text>
      <TextInput
        placeholder="Nome"
        placeholderTextColor="#A1A1AA"
        className="bg-gray-800 text-white px-4 py-3 rounded-md mb-4"
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#A1A1AA"
        className="bg-gray-800 text-white px-4 py-3 rounded-md mb-4"
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#A1A1AA"
        secureTextEntry
        className="bg-gray-800 text-white px-4 py-3 rounded-md mb-2"
      />
      <Text className="text-gray-400 text-xs mb-4">Sua senha deve conter entre 4 e 12 caracteres</Text>
      <TouchableOpacity className="bg-purple-500 py-3 rounded-md">
        <Text className="text-center text-white font-bold">Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
