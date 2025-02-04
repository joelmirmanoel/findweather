import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {calculateDimension} from '../../utils';
import {useNavigator} from '../../router';
import {styles} from './styles.ts';
import Brand from '../../assets/images/climateHomeEmpty.svg';

export function HomeEmpty() {
  const navigation = useNavigator();

  function handleNavigateClick() {
    navigation.navigate('search');
  }

  const {width, height} = calculateDimension({
    percentHeight: 0.32,
    percentWidth: 0.67,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text400}>
        Find<Text style={styles.text600}>Weather</Text>
      </Text>

      <Brand style={styles.image} width={width} height={height} />
      <TouchableOpacity onPress={handleNavigateClick}>
        <Text style={styles.contentHome}>
          {'Selecione aqui um local e \n encontre o clima em tempo real'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
