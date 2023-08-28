import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.contenedor}>
      
      <Text style={styles.titulo}> Lista de compras </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Escriba aquí..." style={styles.input} />
        </View>

        <Pressable
          style={styles.button}
          onPress={() => alert('Producto Agregado!')}
        >
          <Ionicons name="add-circle-outline" size={40} color="green" />
        </Pressable>
      </View>
      <View>
        <Text style={styles.list}>PS5</Text>

        <Text style={styles.list}>TV 55 8k</Text>

        <Text style={styles.list}>PC Xeon x12 </Text>

        <Text style={styles.list}>Internet Buenisimo </Text>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    margin: 30,
    justifyContent: "left",
  },
  titulo: {
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 5,
  },
  input: {
    padding: 5,
    fontSize: 18,
    width: 300,
  },
  inputContainer: {
    marginTop: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    marginLeft: 15,
  },
  list: {
    fontSize: 20,
    marginVertical: 5,
    fontSize:20,
    color: "brown",
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "orange"
  },
});