import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
function ItemList({ item }) {
  return (
    <View style={styles.container}>
      <View style={{ gap: 5 }}>
        <Text style={{ fontWeight: 'bold', color: 'blue' }}>• :{item.name}</Text>
        {item.done ? '✓' : '✗'}
        <Text>{item.description || 'Sem Descrição'}</Text>
      </View>
    </View>
  );
}
export default ItemList;
