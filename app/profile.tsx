import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const ProfileScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-gray-900 px-6">
      <View className="items-center mt-8">
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          className="w-24 h-24 rounded-full mb-4"
        />
      </View>
      <TextInput
        placeholder="Nome"
        placeholderTextColor="#A1A1AA"
        defaultValue="Eduardo Rezes"
        className="bg-gray-800 text-white px-4 py-3 rounded-md mb-4"
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#A1A1AA"
        editable={false}
        defaultValue="eduardo.rezes@gmail.com"
        className="bg-gray-700 text-gray-400 px-4 py-3 rounded-md mb-4"
      />
      <TextInput
        placeholder="Nova Senha"
        placeholderTextColor="#A1A1AA"
        secureTextEntry
        className="bg-gray-800 text-white px-4 py-3 rounded-md mb-4"
      />
      <TouchableOpacity className="bg-red-500 py-3 rounded-md mb-4">
        <Text className="text-center text-white font-bold">Excluir Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-purple-500 py-3 rounded-md">
        <Text className="text-center text-white font-bold">Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
