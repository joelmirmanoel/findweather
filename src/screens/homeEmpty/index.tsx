import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../welcome/styles.ts';
import {stylesEmpty} from './styles.ts';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Brand from '../../assets/images/climateHomeEmpty.svg';

const {width, height} = Dimensions.get('window');

export function HomeEmpty() {
  const navigation = useNavigation();

  function handleNavigateClick() {
    navigation.goBack();
  }

  const percentageWidth = 0.71 * width;
  const percentageHeight = 0.36 * height;

  return (
    <View style={styles.Container}>
      <Text style={stylesEmpty.textHomeEmpty}>
        Find<Text style={stylesEmpty.textHomeBold}>Weather</Text>
      </Text>

      <Brand
        style={styles.image}
        width={percentageWidth}
        height={percentageHeight}
      />

      <Text style={stylesEmpty.ContentHome}>
        Selecione aqui um local e encontre o clima em tempo real
      </Text>

      <TouchableOpacity onPress={handleNavigateClick} style={styles.Button}>
        <Text style={styles.contentButton}>Retornar</Text>
      </TouchableOpacity>
    </View>
  );
}
