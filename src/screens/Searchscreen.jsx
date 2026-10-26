
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import api from "../services/api";

export default function SearchScreen() {
  const [nome, setNome] = useState("");
  const [plantas, setPlantas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [pesquisou, setPesquisou] = useState(false);

  async function pesquisarPlantas(valor) {
    setNome(valor);
    setPesquisou(true);

    if (!valor.trim()) {
      setPlantas([]);
      return;
    }

    try {
      setCarregando(true);

      
const response = await api.get(
    `/plants/pesquisa?busca=${encodeURIComponent(valor)}`
  );
  

      setPlantas(
        Array.isArray(response.data) ? response.data : []
      );
    } catch (error) {
      console.error("Erro ao pesquisar plantas:", error);
      setPlantas([]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Pesquisar plantas..."
          placeholderTextColor="#666"
          style={styles.input}
          value={nome}
          onChangeText={pesquisarPlantas}
        />

        <Ionicons
          name="search"
          size={20}
          color="#000"
          style={styles.icon}
        />
      </View>

      {carregando && <ActivityIndicator style={styles.loading} />}

      {!carregando && pesquisou && plantas.length === 0 && (
        <Text style={styles.mensagem}>
          Nenhuma planta encontrada.
        </Text>
      )}

      <FlatList
        data={plantas}
        keyExtractor={(item, index) =>
          String(item.id_planta ?? item.id ?? index)
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomePlanta}>
              {item.nome}
            </Text>

            {item.preco != null && (
              <Text>Preço: R$ {item.preco}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9e2d5",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
  },
  loading: {
    marginTop: 20,
  },
  mensagem: {
    marginTop: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f1f5ef",
    padding: 15,
    marginTop: 12,
    borderRadius: 10,
  },
  nomePlanta: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
