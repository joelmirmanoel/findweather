import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/styles.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.dark,
    paddingHorizontal: 20,
  },

  text400: {
    fontSize: 33,
    color: Theme.colors.white,
    fontFamily: Theme.fonts.regular,
  },

  text600: {
    fontSize: 33,
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
  },

  image: {
    marginTop: 40,
    marginBottom: 60,
  },

  contentHome: {
    color: Theme.colors.gray100,
    fontSize: 22,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 80,
    textAlign: 'center',
    fontFamily: Theme.fonts.regular,
    textDecorationLine: 'underline',
  },
});
