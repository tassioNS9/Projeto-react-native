import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const iconEdit = require('../../../../assets/icons/Pencil.png');
const iconRemove = require('../../../../assets/icons/Trash.png');
const iconComplete = require('../../../../assets/icons/CheckCircle.png');

function ActionButton({ onPress, source }) {
  return (
    // O resizeMode é uma propriedade da Image do React Native que controla
    // como a imagem é redimensionada para se ajustar ao espaço disponível.
    //  O valor "contain" faz com que a
    // imagem seja redimensionada para caber dentro do espaço disponível,
    // mantendo suas proporções originais. Isso significa que a imagem será
    // redimensionada para se ajustar ao espaço, mas não será cortada ou distorcida,
    // garantindo que toda a imagem seja visível.
    <Pressable onPress={onPress}>
      <Image source={source} style={{ width: 24, height: 24 }} resizeMode="contain" />
    </Pressable>
  );
}

function ItemList({ item, handleRemove, handleComplete }) {
  const navigation = useNavigation();

  const handleClickEdit = () => {
    navigation.navigate('Edit', { item });
  };

  const handleClickRemove = () => {
    handleRemove(item.id);
  };

  const handleClickComplete = () => {
    handleComplete(item.id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ fontWeight: 'bold', color: 'blue' }}>• :{item.name}</Text>
        <Text>{item.description || 'Sem Descrição'}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <ActionButton source={iconEdit} title={'Editar'} onPress={handleClickEdit} />
        <ActionButton source={iconRemove} title={'Excluir'} onPress={handleClickRemove} />
        {!item.done ? (
          <ActionButton source={iconComplete} title={'Concluir'} onPress={handleClickComplete} />
        ) : (
          <View style={{ width: 24, height: 24 }} />
        )}
      </View>
    </View>
  );
}
export default ItemList;
