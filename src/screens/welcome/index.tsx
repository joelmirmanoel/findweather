import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import Brand from '../../assets/images/cloudAndThunder.svg';

const {width, height} = Dimensions.get('window');

export function WelcomeScreen() {
  const navigation = useNavigation();

  function handleNavigateClick() {
    navigation.navigate('homeEmpty');
  }

  const percentageWidth = 0.61 * width;
  const percentageHeight = 0.26 * height;

  return (
    <View style={styles.Container}>
      <Brand
        style={styles.image}
        width={percentageWidth}
        height={percentageHeight}
      />
      <Text style={styles.Title}>Descubra o Clima na sua Cidade </Text>
      <Text style={styles.Content}>
        Com o <Text style={styles.contentBold}>FindWeather</Text> nunca ficou
        tão fácil ter a previsão do tempo na palma da sua mão
      </Text>

      <TouchableOpacity onPress={handleNavigateClick} style={styles.Button}>
        <Text style={styles.contentButton}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
