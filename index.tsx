import { auth } from "@/lib/firebase";
import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function Logar() {
    if (!email) {
      alert("Insira seu email!");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/one");
      alert("Logado com sucesso")
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <View className="flex-1 bg-black justify-center items-center px-6">
      <Text className="text-white text-2xl font-bold mb-8">LOGIN</Text>

      <TextInput
        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-4"
        placeholder="Digite seu email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg mb-6"
        placeholder="Digite sua senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        onPress={Logar}
        className="w-full bg-blue-600 py-3 rounded-lg mb-4"
      >
        <Text className="text-white text-center font-semibold">
          Entrar
        </Text>
      </TouchableOpacity>

      <Link href="/register" className="text-blue-400 underline">
        Não tem conta? Registre-se aqui
      </Link>
    </View>
  );
}
