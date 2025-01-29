import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/styles.ts';

export const stylesEmpty = StyleSheet.create({
  containerHomeEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.dark,
    paddingHorizontal: 20,
  },
  textHomeEmpty: {
    fontSize: 33,
    color: Theme.colors.white,
    fontFamily: 'Overpass Regular',
  },
  textHomeBold: {
    fontSize: 33,
    color: Theme.colors.white,
    fontFamily: 'Overpass Bold',
  },
  ContentHome: {
    color: Theme.colors.gray100,
    fontSize: 22,
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 80,
    textAlign: 'center',
    fontFamily: 'Overpass Regular',
    textDecorationLine: 'underline',
  },
});
