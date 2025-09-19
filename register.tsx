import { auth } from "@/lib/firebase";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function Registrar() {
    if (!email) {
      alert("Insira seu email!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      router.push("/");
      alert("Registrado com sucesso")
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <View className="flex-1 bg-black justify-center items-center px-6">
      <Text className="text-white text-2xl font-bold mb-8">REGISTRO</Text>

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
        onPress={Registrar}
        className="w-full bg-green-600 py-3 rounded-lg mb-4"
      >
        <Text className="text-white text-center font-semibold">
          Registrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/")}>
        <Text className="text-blue-400 underline">
          Já tem conta? Faça login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
