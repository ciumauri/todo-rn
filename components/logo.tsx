import { Image } from "react-native";

export default function Logo() {
    return (
        <Image
            source={require('../assets/images/logo.png')}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
        />
    );
}
