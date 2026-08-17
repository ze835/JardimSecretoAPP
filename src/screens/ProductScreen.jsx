import React, { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function Produto() {
  const [adicionado, setAdicionado] = useState(false);

  function adicionar() {
    setAdicionado(true);
    Alert.alert("Sucesso", "Produto adicionado ao carrinho!");
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      <Text style={styles.logo}>🌿 SDCE - Horta Escolar</Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
          }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>Manjericão</Text>
        <Text style={styles.preco}>R$ 12,90</Text>

        <Text style={styles.descricao}>
          Planta aromática fácil de cultivar, ideal para temperos,
          molhos e saladas.
        </Text>

        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={styles.textoBotao}>
            {adicionado ? "✓ Adicionado" : "🛒 Adicionar ao carrinho"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEF5E9"
      },
      
      conteudo: {
        flexGrow: 1,
        padding: 25,
        justifyContent: "center"
      },

  logo: {
    color: "#285638",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    elevation: 5
  },

  imagem: {
    width: "100%",
    height: 280,
    borderRadius: 15
  },

  nome: {
    color: "#285638",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 18
  },

  preco: {
    color: "#418057",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10
  },

  descricao: {
    color: "#555555",
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 20
  },

  botao: {
    backgroundColor: "#285638",
    padding: 16,
    borderRadius: 10,
    alignItems: "center"
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});