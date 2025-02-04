import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import Brand from '../../assets/images/cloudAndThunder.svg';
import {useNavigator} from '../../router';
import {calculateDimension} from '../../utils';

export function WelcomeScreen() {
  const navigation = useNavigator();

  function handleNavigateClick() {
    navigation.navigate('tabs');
  }

  const {width, height} = calculateDimension({
    percentHeight: 0.26,
    percentWidth: 0.61,
  });

  return (
    <View style={styles.container}>
      <Brand style={styles.image} width={width} height={height} />
      <Text style={styles.title}>Descubra o Clima na sua Cidade </Text>
      <Text style={styles.content}>
        Com o <Text style={styles.contentBold}>FindWeather</Text> nunca ficou
        tão fácil ter a previsão do tempo na palma da sua mão
      </Text>

      <TouchableOpacity onPress={handleNavigateClick} style={styles.button}>
        <Text style={styles.contentButton}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
