import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 40,
    backgroundColor: '#fff',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // gap: 10,
    width: '100%',
    marginVertical: 10,
  },
});
