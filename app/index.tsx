import Tarefa from "@/models/Tarefa";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SemTarefa from "@/components/SemTarefa";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    // Carrega as tarefas do AsyncStorage quando o app é iniciado
    const loadTarefas = async () => {
      const storedTarefas = await AsyncStorage.getItem("tarefas");
      if (storedTarefas) {
        setTarefas(JSON.parse(storedTarefas));
      } else {
        setTarefas(tarefas);
      }
    };
    loadTarefas();
  }, []);

  useEffect(() => {
    // Salva as tarefas no AsyncStorage sempre que a lista de tarefas for alterada
    const saveTarefas = async () => {
      await AsyncStorage.setItem("tarefas", JSON.stringify(tarefas));
    };
    saveTarefas();
  }, [tarefas]);

  function adicionarTarefa() {
    if (descricao.trim() === "") {
      return;
    }
    const novaTarefa: Tarefa = {
      id: Math.random(),
      descricao: descricao,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
    setDescricao("");
  }

  function alternarConclusaoTarefa(id: number) {
    setTarefas(
      tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          return { ...tarefa, concluida: !tarefa.concluida };
        }
        return tarefa;
      })
    );
  }

  function excluirTarefa(id: number) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start", alignItems: "center" }}>
          <Text className="text-4xl font-bold m-10">Lista de Tarefas</Text>
          <View className="flex-row gap-x-2 items-center w-9/10 mb-10">
            <TextInput
              className="flex-1 px-4 py-2 rounded-md border-2 border-blue-500 "
              value={descricao}
              onChangeText={setDescricao}
            />
            <Pressable
              className="text-blue-500 bg-blue-500 rounded-md p-2"
              onPress={adicionarTarefa}
            >
              <AntDesign name="plus" size={16} color={"white"}></AntDesign>
            </Pressable>
          </View>
          {tarefas.length === 0 ? (
            <View className="flex-1">
              <SemTarefa />
            </View>
          ) : (
            <View className="w-9/10 gap-y-2">
              {tarefas.map((tarefa) => (
                <View key={(tarefa.id)} className="flex-row gap-x-2 items-center">
                  <View className="flex-1">
                    <Text className={`text-lg ${tarefa.concluida ? "text-zinc-500 line-through" : ""}`}>
                      {tarefa.descricao}
                    </Text>
                  </View>
                  <Pressable
                    className="text-blue-500 bg-yellow-500 rounded-md p-2"
                    onPress={() => alternarConclusaoTarefa(tarefa.id)}
                  >
                    <AntDesign name={tarefa.concluida ? "eyeo" : "eye"} size={16} color={"white"}></AntDesign>
                  </Pressable>

                  <Pressable
                    className="text-blue-500 bg-red-500 rounded-md p-2"
                    onPress={() => excluirTarefa(tarefa.id)}
                  >
                    <AntDesign name="delete" size={16} color={"white"}></AntDesign>
                  </Pressable>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
