import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.dark,
    paddingHorizontal: 20,
  },

  image: {
    marginTop: 40,
    marginBottom: 60,
  },

  title: {
    fontSize: 33,
    color: Theme.colors.white,
    fontFamily: 'Overpass Bold',
    textAlign: 'center',
  },

  content: {
    color: Theme.colors.gray100,
    fontSize: 22,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 80,
    textAlign: 'center',
    fontFamily: 'Overpass Regular',
  },

  contentBold: {
    fontFamily: 'Overpass Bold',
    borderLeftColor: Theme.colors.white,
  },

  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.dark300,
    borderColor: Theme.colors.gray300,
    borderWidth: 1,
    borderRadius: 18,
    padding: 12,
  },

  contentButton: {
    color: Theme.colors.white,
    fontSize: 22,
    fontFamily: 'Overpass Regular',
    alignItems: 'center',
  },
});
