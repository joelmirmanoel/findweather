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

  iconBusca: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  icon: {
    fontSize: 40,
    paddingRight: 40,
    color: Theme.colors.gray600,
  },

  iconMaps: {
    color: Theme.colors.white,
    fontSize: 40,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  inputContent: {
    width: '85%',
    height: 49,
    alignItems: 'center',
    backgroundColor: Theme.colors.dark400,
    borderColor: Theme.colors.white,
    borderWidth: 0,
    borderRadius: 11,
    left: 0,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
  },

  iconSearch1: {
    fontSize: 19,
    justifyContent: 'center',
    alignItems: 'center',
    color: Theme.colors.white,
  },

  input: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.white,
  },

  iconButton: {
    width: 49,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.dark400,
    borderRadius: 11,
  },

  image: {
    marginTop: 50,
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,
    alignItems: 'center',
    color: Theme.colors.white,
    paddingHorizontal: 80,
  },

  textBold: {
    fontFamily: Theme.fonts.bold,
    fontSize: 16,
    alignItems: 'center',
    color: Theme.colors.gray100,
    textAlign: 'center',
    paddingBottom: 10,
  },
});
