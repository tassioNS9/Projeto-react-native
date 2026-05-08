import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    gap: 14,
  },
  inputContainer: {
    marginVertical: 43,
    gap: 43,
  },
  input: {
    height: 38,
    marginHorizontal: 15,
    borderBottomColor: '#8B8787',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
