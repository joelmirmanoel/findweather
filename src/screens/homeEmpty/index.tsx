import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../welcome/styles.ts';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export function HomeEmpty() {
  const navigation = useNavigation();

  function handleNavigateClick() {
    navigation.goBack();
  }

  return (
    <View>
      <Text>FindWeather</Text>

      <TouchableOpacity onPress={handleNavigateClick} style={styles.Button}>
        <Text style={styles.contentButton}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
