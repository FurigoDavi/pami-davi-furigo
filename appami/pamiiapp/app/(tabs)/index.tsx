import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [transformado, setTransformado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🟢 BEN 10 🟢</Text>

      <Text style={styles.subtitulo}>Digite seu nome, herói:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Ben Tennyson"
        placeholderTextColor="#9BEF8C"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setTransformado(!transformado)}
      >
        <Text style={styles.textoBotao}>
          {transformado ? '🔄 Desativar Omnitrix' : '⚡ Ativar Omnitrix'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.mensagem}>
        {transformado
          ? `💥 ${nome || 'Herói'}, você se transformou em um alien poderoso!`
          : 'Pronto para se transformar?'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0C0B', // Fundo escuro estilo Omnitrix
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00FF66',
    marginBottom: 30,
  },
  subtitulo: {
    fontSize: 18,
    color: '#9BEF8C',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 2,
    borderColor: '#00FF66',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    backgroundColor: '#1A1F1A',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#00CC44',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mensagem: {
    color: '#ADFFB2',
    fontSize: 18,
    textAlign: 'center',
  },
});
