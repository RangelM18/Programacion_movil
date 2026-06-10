import {Button,Image,Text, View} from "react-native";

export const Saludo2 =()=>{
    return(
        
        <View>

        <Image source={require('../assets/wave.png')}></Image>
        <Text>Soy un componente compueto</Text>
        <Button title="Hola 203"></Button>

        </View>

    )
}