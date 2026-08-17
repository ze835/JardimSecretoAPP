import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Entre na sua{"\n"}conta
      </Text>

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tabs")}
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