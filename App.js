import {  StyleSheet,  Text,  View,  TextInput,  Pressable,  Image, FlatList,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

import Boton from "./src/boton";

export default function App() {

  const [texto, setTexto] = React.useState('');

  const [products, setProducts] = useState([])


  function productAdd (product) {

    let theProduct = {
      "name": product,
      "id": products.length
    }

    products.push(theProduct)

    setProducts(products)

    console.log(products)
    setTexto("")

  }


  function deleteProduct (productId) {
    setProducts([])
    return;
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);

  };

  return (
    <View style={styles.contenedor}>
      
      <Text style={styles.titulo}> Lista de compras </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(e)=>{
              setTexto(e)
              console.log(texto)

            }}
            value={texto}
          />
        </View>

        <Pressable
          style={styles.button}
          onPress={() => productAdd(texto)}
        >
          <Ionicons name="add-circle-outline" size={40} color="green" />
        </Pressable>
      </View>
      <View>
        <Boton nombre={"Eliminar"} /> 

        <Boton nombre={"agregar producto"} />
        <FlatList
          data={products}
          renderItem={({item}) => <Text style={styles.list} >{item.name}</Text>}
          // <Campanitas data={producto}>
          // Titulo
          // Foto o mensaje
          // Elemnto de edicion
          //</Campanitas>
          keyExtractor={item => item.id}
        />
        


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
  button2: {
    marginTop: 15,
    marginLeft: 125,

  }
});