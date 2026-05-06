import { View, Text } from 'react-native';

function EmptyList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No items to display</Text>
    </View>
  );
}

export default EmptyList;
