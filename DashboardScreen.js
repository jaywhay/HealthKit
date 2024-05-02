import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';

const Dashboard = () => {
  const [high, setHigh] = useState('Loading...');
  const [avg, setAvg] = useState('Loading...');
  const [low, setLow] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://yourapi.com/data');
        setHigh(response.data.high);
        setAvg(response.data.avg);
        setLow(response.data.low);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setHigh('Error');
        setAvg('Error');
        setLow('Error');
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <View style={styles.labelValueContainer}>
            <Text style={styles.label}>HIGH  </Text>
            <Text style={styles.value}>{high}</Text>
          </View>
          <View style={styles.labelValueContainer}>
            <Text style={styles.label}>AVG  </Text>
            <Text style={styles.value}>{avg}</Text>
          </View>
          <View style={styles.labelValueContainer}>
            <Text style={styles.label}>LOW  </Text>
            <Text style={styles.value}>{low}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.imageHere}>image here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  circleContainer: {
    width: '90%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
  },
  imageHere: {
    position: 'absolute',
    top: '10%',
    fontSize: 16,
  },
});

export default Dashboard;