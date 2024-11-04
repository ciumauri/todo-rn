import { View, Text, Image } from "react-native";

export default function SemTarefa() {
    return (
        <View className="flex-1 justify-center items-center">
            <Image
                source={require('../assets/images/empty.png')}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
            <Text className="text-lg text-gray-500">Nenhuma tarefa adicionada</Text>
        </View>
    );
}
