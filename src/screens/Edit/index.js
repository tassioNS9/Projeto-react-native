import React from 'react';

import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAtomValue } from 'jotai';
import atoms from '../../atoms';
import useTodoList from '../../hooks/useTodoList';

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

  const handleEditItem = () => {
    editItem(item.id, {
      name: 'Item Editado',
      description: `${new Date().toISOString()} - ${item.description}`,
    });
    navigation.goBack();
    console.log('Editar item:', item);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#eee',
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Editar item</Text>
        <Text style={{ fontWeight: 'bold', color: 'blue' }}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{`Item para completar:${itemToComplete.length}`}</Text>
        <Button title="Editar Item" onPress={handleEditItem} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

export default Edit;
