import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Status = () => {
  const [bloodPressureAdvice, setBloodPressureAdvice] = useState('');
  const [bloodPressurePercentage, setBloodPressurePercentage] = useState(0);
  const [cardiovascularAdvice, setCardiovascularAdvice] = useState('');
  const [cardiovascularPercentage, setCardiovascularPercentage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [bloodPressureResponse, cardiovascularResponse] = await Promise.all([
        fetch('https://yourapi.com/bloodPressureStatus'),
        fetch('https://yourapi.com/cardiovascularStatus')
      ]);

      if (!bloodPressureResponse.ok || !cardiovascularResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const [bloodPressureData, cardiovascularData] = await Promise.all([
        bloodPressureResponse.json(),
        cardiovascularResponse.json()
      ]);

      setBloodPressureAdvice(bloodPressureData.advice);
      setBloodPressurePercentage(bloodPressureData.percentage);
      setCardiovascularAdvice(cardiovascularData.advice);
      setCardiovascularPercentage(cardiovascularData.percentage);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const getColor = (percentage) => {
    if (percentage <= 25) {
      return '#7FFF00'; // 연두색
    } else if (percentage <= 50) {
      return '#87CEEB'; // 하늘색
    } else if (percentage <= 75) {
      return '#FFFF00'; // 연노랑색
    } else {
      return '#FF0000'; // 연빨강색
    }
  };

  const Advice = ({ title, advice }) => (
    <View style={styles.adviceContainer}>
      <Text style={styles.adviceTitle}>{title}</Text>
      <Text style={styles.adviceText}>{advice}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={[styles.circle, { backgroundColor: getColor(bloodPressurePercentage) }]}>
          <Text style={styles.percentageText}>{bloodPressurePercentage}%</Text>
        </View>
        <Text style={styles.title}>Blood Pressure</Text>
        <View style={[styles.circle, { backgroundColor: getColor(cardiovascularPercentage) }]}>
          <Text style={styles.percentageText}>{cardiovascularPercentage}%</Text>
        </View>
        <Text style={styles.title}>Cardiovascular</Text>
      </View>
      <Advice title="Blood Pressure Advice" advice={bloodPressureAdvice} />
      <Advice title="Cardiovascular Advice" advice={cardiovascularAdvice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 16,
    marginTop: 5,
  },
  adviceContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  adviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  adviceText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Status;
