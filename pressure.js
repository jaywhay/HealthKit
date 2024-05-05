import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BloodPressureInput = () => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [systolic, setSystolic] = useState('');
    const [diastolic, setDiastolic] = useState('');
    const [average, setAverage] = useState('');
    const [bmi, setbmi] = useState('');
    const [estimatedWeight, setestimatedWeight] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleConfirmDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleConfirmTime = (event, selectedTime) => {
        const currentTime = selectedTime || date;
        setShowTimePicker(false);
        setDate(currentTime);
    };
    const handleSubmit = () => {
        sendDataToServer();

        // 입력창 초기화
        setSystolic('');
        setDiastolic('');
        setAverage('');
        setbmi('');
        setestimatedWeight('');

        setIsSubmitted(true)
    }

    const sendDataToServer = () => {
        const data = {
            systolic,
            diastolic,
            average,
            bmi,
            estimatedWeight,
            date: date.toISOString() // 날짜를 ISO 형식으로 변환
        };
    
        fetch('https://example.com/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Data sent successfully');
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setSystolic}
                    value={systolic}
                    placeholder="SystolicBP"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setDiastolic}
                    value={diastolic}
                    placeholder="DiastolicBP"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setAverage}
                    value={average}
                    placeholder="AverageBP"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setbmi}
                    value={bmi}
                    placeholder="BMI"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setestimatedWeight}
                    value={estimatedWeight}
                    placeholder="Weight"
                    keyboardType="numeric"
                />
            </View>
            
            <View style={styles.dateContainer}>
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.iconButton}>
                    <Image style={styles.icon} source={require('./assets/calendar.png')} />
                    <Text>{date.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleConfirmDate}
                    />
                )}

                <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.iconButton}>
                    <Image style={styles.icon} source={require('./assets/clock.png')} />
                    <Text>{date.toLocaleTimeString()}</Text>
                </TouchableOpacity>
                {showTimePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleConfirmTime}
                    />
                )}

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Image style={styles.submitIcon} source={require('./assets/Check_fill.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>분류</Text>
                <Text style={styles.tableHeader}>수축기(mmHg)</Text>
                <Text style={styles.tableHeader}>이완기(mmHg)</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableData}>고혈압</Text>
                <Text style={styles.tableData}>&ge; 140mmHg</Text>
                <Text style={styles.tableData}>&ge; 90mmHg</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableData}>고혈압 전단계</Text>
                <Text style={styles.tableData}>130-139mmHg</Text>
                <Text style={styles.tableData}>80-89mmHg</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableData}>정상혈압</Text>
                <Text style={styles.tableData}>120-129mmHg</Text>
                <Text style={styles.tableData}>{'<'}80mmHg</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableData}>저혈압</Text>
                <Text style={styles.tableData}>{'<'}120mmHg</Text>
                <Text style={styles.tableData}>{'<'}80mmHg</Text>
            </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '30%',
        textAlign: 'center',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    submitButton: {
        padding: 10,
    },
    submitIcon: {
        width: 30,
        height: 30,
    },
    tableContainer: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },
    tableData: {
        fontSize: 14,
        flex: 1,
        textAlign: 'center',
    },
});

export default BloodPressureInput;
