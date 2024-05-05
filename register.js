import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 import

const RegisterScreen = () => {
  const navigation = useNavigation(); // 네비게이션 객체 사용
  const [ID, setID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('0');
  const [phone, setPhone] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [smoking, setSmoking] = useState('0');
  const [drinkingFrequency, setDrinkingFrequency] = useState('1');
  const [hypertensionInFamily, setHypertensionInFamily] = useState('3');

  const handleRegister = async () => {
    if (!ID || !email || !password || !fullName || !gender || !phone || !height || !weight || !smoking || !drinkingFrequency || !hypertensionInFamily) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      const response = await fetch('https://yourapi.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ID,
          email,
          password,
          fullName,
          gender,
          phone,
          height,
          weight,
          smoking,
          drinkingFrequency,
          hypertensionInFamily
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      Alert.alert('Success', 'You have registered successfully');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to register');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput
        style={styles.input}
        onChangeText={setID}
        value={ID}
        placeholder="Enter your ID"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter a password"
        secureTextEntry
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setFullName}
        value={fullName}
        placeholder="Enter your Full Name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="Enter your Phone Numeber"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setHeight}
        placeholder="키(cm)"
        value={height}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        placeholder="몸무게(kg)"
        value={weight}
        keyboardType="numeric"
      />
      <View style={styles.questionContainer}>
        <Text style={styles.question}>성별</Text>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          style={styles.picker}>
          <Picker.Item label="남자" value="0" />
          <Picker.Item label="여자" value="1" />
        </Picker>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>흡연자이십니까?</Text>
        <Picker
          selectedValue={smoking}
          onValueChange={(itemValue, itemIndex) => setSmoking(itemValue)}
          style={styles.picker}>
          <Picker.Item label="아니오" value="0" />
          <Picker.Item label="예" value="1" />
        </Picker>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>최근 1년간 음주 빈도가 어떻게 되십니까?</Text>
        <Picker
          selectedValue={drinkingFrequency}
          onValueChange={(itemValue, itemIndex) => setDrinkingFrequency(itemValue)}
          style={styles.picker}>
          <Picker.Item label="최근 1년간 전혀 마시지 않았다." value="0" />
          <Picker.Item label="한달에 1번 미만" value="1" />
          <Picker.Item label="한달에 1번 정도" value="2" />
          <Picker.Item label="한달에 3~4번 정도" value="3" />
          <Picker.Item label="일주일에 2~3번 정도" value="4" />
          <Picker.Item label="일주일에 4번 이상" value="5" />
        </Picker>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>귀 부모 중에서 의사로부터 고혈압을 진단 받은 적이 있으십니까?</Text>
        <Picker
          selectedValue={hypertensionInFamily}
          onValueChange={(itemValue, itemIndex) => setHypertensionInFamily(itemValue)}
          style={styles.picker}>
          <Picker.Item label="아버지" value="0" />
          <Picker.Item label="어머니" value="1" />
          <Picker.Item label="두 분 모두" value="2" />
          <Picker.Item label="없음" value="3" />
        </Picker>
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default RegisterScreen;