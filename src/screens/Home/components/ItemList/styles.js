import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 19,
    minHeight: 80,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textContainer: {
    flex: 6,
    gap: 5,
  },
  actionsContainer: {
    flex: 4,
    gap: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default styles;
