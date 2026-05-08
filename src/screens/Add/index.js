import React from 'react';

import { View, Text, Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTodoList from '../../hooks/useTodoList';
import styles from './styles';
import { useState } from 'react';
function Add({ navigation }) {
  const { addItem } = useTodoList();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const handleAddItem = () => {
    if (!name || !description) {
      alert('Preencha os campos para adicionar uma tarefa');
      return;
    }
    addItem({
      name: name,
      description: description,
    });
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Adicionar item</Text>
        <TextInput
          placeholder="Nome Tarefa"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Descrição"
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Adicionar Item" onPress={handleAddItem} />
          <Button title="Cancelar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Add;
