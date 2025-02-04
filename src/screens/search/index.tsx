import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {styles} from './styles.ts';
import Brand from '../../assets/images/not-found-destination@3x.svg';
import React, {useState} from 'react';
import {calculateDimension} from '../../utils';
import {useNavigator} from '../../router';
import {Theme} from '../../theme/styles.ts';
import {useForm, Controller} from 'react-hook-form';

export function SearchScreen() {
  const [search, setSearch] = useState<string>('');
  const {control, handleSubmit} = useForm({
    defaultValues: {search: ''},
  });

  const {width, height} = calculateDimension({
    percentHeight: 0.32,
    percentWidth: 0.73,
  });

  const onSubmit = date => console.log(date);

  return (
    <View style={styles.container}>
      <View style={styles.iconBusca}>
        <Icons name="leftcircleo" style={styles.icon} />
        <Text style={styles.text}>Busca</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContent}>
          <Icons name="search1" style={styles.iconSearch1} />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                placeholder={'Digite o nome de uma cidade'}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholderTextColor={Theme.colors.gray200}
              />
            )}
            name="search"
          />
        </View>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={handleSubmit(onSubmit)}>
          <Icons name="enviroment" style={styles.iconMaps} />
        </TouchableOpacity>
      </View>
      <Brand style={styles.image} width={width} height={height} />
      <View style={styles.textBold}>
        <Text style={styles.textBold}>OPS!</Text>
        <Text style={styles.textBold}>
          {'Não foi possível encontrar o local \n desejado!'}
        </Text>
      </View>
    </View>
  );
}
