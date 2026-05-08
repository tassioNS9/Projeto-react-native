import React from 'react';

import { View, Text, Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAtomValue } from 'jotai';
import atoms from '../../atoms';
import useTodoList from '../../hooks/useTodoList';
import styles from './styles';
import { useState } from 'react';
function Edit({ navigation, route }) {
  // Po padrao do React Navigation,
  // a tela de destino (neste caso, a tela de edição)
  // pode acessar os parâmetros passados pela tela de origem
  // (neste caso, a tela inicial) por meio do objeto route.params.
  //  Esses parâmetros podem incluir informações como o item a ser editado,
  // permitindo que a tela de edição exiba os detalhes do item e permita que o usuário
  // faça as alterações necessárias.
  const { params } = route;
  const { item } = params;
  console.log(item.id);
  const itemToComplete = useAtomValue(atoms.items);
  const { editItem } = useTodoList();
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const handleEditItem = () => {
    if (!name || !description) {
      alert('Preencha os campos para adicionar uma tarefa');
      return;
    }
    editItem(item.id, {
      name: name,
      description: description,
    });
    navigation.goBack();
    console.log('Editar item:', item);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Editar item</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <TextInput style={styles.input} value={description} onChangeText={setDescription} />
        <Text>{`Item para completar:${itemToComplete.length}`}</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Editar Item" onPress={handleEditItem} />
          <Button title="Cancelar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Edit;
