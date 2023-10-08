import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ScreenTong2So() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState(0);

  const Tong = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setTotal(num1 + num2);
    } else {
      setTotal(0);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập số thứ 1"
        onChangeText={(text) => setNumber1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập số thứ 2"
        onChangeText={(text) => setNumber2(text)}
      />
      <Button title="Tính tổng" onPress={Tong} />
      <h3>Tổng bằng: {total}</h3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 20,
    paddingLeft: 10,
  },
});