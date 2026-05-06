import { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import ItemList from './components/ItemList';
import EmptyList from './components/EmptyList';
import styles from './styles';

/* O componente SafeAreaViewBase é usado
// para garantir que o conteúdo da tela seja
// exibido dentro das áreas seguras do dispositivo,
// evitando sobreposições com elementos do sistema,
// como a barra de status ou a barra de navegação.
// Ele é especialmente útil em dispositivos com
// telas curvas ou entalhes, onde as áreas seguras podem variar.
// Ao usar o SafeAreaViewBase, você pode garantir que seu aplicativo
 tenha uma aparência consistente e seja fácil de usar em uma variedade de dispositivos.*/

function HomeScreen() {
  const initialItems = [
    { id: '1', name: 'Item 1', done: false },
    { id: '2', name: 'Item 2', done: false },
    { id: '3', name: 'Item 3', done: false },
  ];
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const addItem = () => {
    setItems((items) => {
      const newItem = {
        id: String(items.length + 1),
        name: 'Item' + (items.length + 1),
        description: 'Descrição do Item' + (items.length + 1),
        done: false,
      };
      const oldState = [...items];
      const newState = [...oldState, newItem];

      return newState;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Button title="Adicionar Item" onPress={addItem} />
        <FlatList
          style={styles.flatListContent}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          data={items}
          renderItem={({ item }) => <ItemList item={item} />}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={EmptyList}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
