import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Resultado'>;

export default function ResultScreen({ route, navigation }: Props) {
  const { dados } = route.params;

  return (
    <View style={styles.container}>
      <Text>CEP: {dados.cep}</Text>
      <Text>Logradouro: {dados.logradouro}</Text>
      <Text>Complemento: {dados.complemento}</Text>
      <Text>Bairro: {dados.bairro}</Text>
      <Text>Localidade: {dados.localidade}</Text>
      <Text>UF: {dados.uf}</Text>
      <Button title="Retornar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
});
