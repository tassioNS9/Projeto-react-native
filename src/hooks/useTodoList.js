import { useAtom } from 'jotai';
import atoms from '../atoms';
import { useRef } from 'react';

const useTodoList = () => {
  const [items, setItems] = useAtom(atoms.items);
  const [completedItems, setCompletedItems] = useAtom(atoms.completedItems);
  const flatListRef = useRef(null);

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

      // Toda vez que adicionar um item,
      // a FlatList irá rolar para o final da lista,
      // mostrando o item recém-adicionado.
      // O método scrollToEnd é usado para rolar a lista até o final,
      // e a opção animated: true garante que a rolagem seja suave.
      flatListRef.current.scrollToEnd({ animated: true });
      console.log('adicionoou!!!');

      return newState;
    });
  };

  const onDeleteTask = (taskId) => {
    const newTasks = items.filter((task) => task.id !== taskId);
    setItems(newTasks);
  };

  const onCompleteTask = (taskId) => {
    const newTasks = items.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: true };
      }
      return task;
    });
    setItems(newTasks);
  };

  const editItem = (taskId, newContent) => {
    const newTasks = items.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...newContent };
      }
      return task;
    });
    setItems(newTasks);
  };

  return {
    items,
    completedItems,
    setCompletedItems,
    addItem,
    onDeleteTask,
    onCompleteTask,
    editItem,
    flatListRef,
  };
};

export default useTodoList;
