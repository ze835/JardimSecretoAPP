import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import api from "../services/api";

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {

      console.log("Botão de cadastro clicado");
      
      console.log("Email:", email);
      console.log("Password:", password);
      
      // Verifica se todos os campos foram preenchidos
      if ( !email || !password ) {
        console.log("ERRO: Existem campos vazios.");
        return;
      }
  
      console.log("Todos os campos foram preenchidos");
  
      
     
  
      try {
        // Faz a requisição POST para a API
        const response = await api.post(
          "/users/login",
          {
            email: email,
            password: password,
          }
        );
        console.log("Cadastro realizado com sucesso!");
        navigation.navigate("Tabs");
  
      } catch (error) {
  
        console.log("Erro no cadastro:", error);
  
        console.log(
          "Mensagem da API:",
          error.response?.data?.message ||
          "Não foi possível realizar o cadastro."
        );
      }
    }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Entre na sua{"\n"}conta
      </Text>

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Não tem conta?{" "}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate("Register")}
        >
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 50,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 20,
  },

  input: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  button: {
    alignSelf: "center",
    marginTop: 40,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  registerText: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 16,
  },

  registerLink: {
    fontWeight: "bold",
  },
});