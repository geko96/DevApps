import {  StyleSheet,  Text,  View, Pressable,} from "react-native";



export default function Boton ({nombre}) {

    return (
        <View style={styles.container}>
            <Text style={styles.botoncito}>
                {nombre}
            </Text>
        </View>
    )

}


const styles = StyleSheet.create({
    botoncito: {
        backgroundColor: "green",
        fontSize: 22,
        borderWidth: 1,
        borderColor: "red"
    },
    container: {
        backgroundColor: "blue",
        margin: 5,
    }
})