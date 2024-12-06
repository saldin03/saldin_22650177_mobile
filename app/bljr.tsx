import { useState } from "react";
import { Text, View} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Index = () => {
    const [nama, setNama] = useState("");


    return (
        <View>
            <Text>selamat datang.</Text>
            <Text>mhs</Text>
            <Text>{nama}</Text>
            <TextInput value={nama} 
            onChangeText={(value) => {
                setNama(value)
            }}
            placeholder="Masukkan Nama"
            />
            
        </View>
    );
}

export default Index;

