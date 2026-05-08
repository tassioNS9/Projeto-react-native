import { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import ItemList from './components/ItemList';
import EmptyList from './components/EmptyList';
import styles from './styles';
import useTodoList from '../../hooks/useTodoList';

/* O componente SafeAreaViewBase é usado
// para garantir que o conteúdo da tela seja
// exibido dentro das áreas seguras do dispositivo,
// evitando sobreposições com elementos do sistema,
// como a barra de status ou a barra de navegação.
// Ele é especialmente útil em dispositivos com
// telas curvas ou entalhes, onde as áreas seguras podem variar.
// Ao usar o SafeAreaViewBase, você pode garantir que seu aplicativo
 tenha uma aparência consistente e seja fácil de usar em uma variedade de dispositivos.*/

function HomeScreen({ navigation }) {
  const initialItems = [
    { id: '1', name: 'Item 1', done: false },
    { id: '2', name: 'Item 2', done: true },
    { id: '3', name: 'Item 3', done: false },
  ];
  const { items, completedItems, setCompletedItems, onDeleteTask, onCompleteTask } = useTodoList();
  const [showCompletedItems, setShowCompletedItems] = useState(false);

  useEffect(() => {
    console.log(items);
  }, [items]);

  //     // Toda vez que adicionar um item,
  //     // a FlatList irá rolar para o final da lista,
  //     // mostrando o item recém-adicionado.
  //     // O método scrollToEnd é usado para rolar a lista até o final,
  //     // e a opção animated: true garante que a rolagem seja suave.
  //     flatListRef.current.scrollToEnd({ animated: true });

  const handleShowCompletedItems = () => {
    setCompletedItems(items.filter((item) => item.done === true));
    setShowCompletedItems((state) => !state);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <Button title="Adicionar Item" onPress={() => navigation.navigate('Add')} />
        <FlatList
          // o showsVerticalScrollIndicator é uma propriedade do FlatList
          // que controla a exibição do indicador de rolagem vertical.
          // Quando definido como false, o indicador de rolagem não será exibido, mesmo que o conteúdo seja rolável. Isso pode ser útil para criar uma aparência mais limpa ou personalizada para a lista, especialmente se você estiver usando um design que não requer um indicador de rolagem visível.
          showsVerticalScrollIndicator={false}
          style={styles.flatListContent}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          data={showCompletedItems ? completedItems : items}
          renderItem={({ item }) => (
            <ItemList
              handleRemove={() => onDeleteTask(item.id)}
              handleComplete={() => onCompleteTask(item.id)}
              item={item}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={EmptyList}
        />
        <Button
          style={{ marginBottom: 20 }}
          title={showCompletedItems ? 'Mostrar Itens Pendentes' : 'Mostrar Itens Concluídos'}
          onPress={handleShowCompletedItems}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
