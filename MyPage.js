import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const MyPage = () => {
    const [image, setImage] = useState(null);
    const [userLevel, setUserLevel] = useState(1);  // 예시로 1로 설정
    const [userStatus, setUserStatus] = useState(250);  // 예시로 250로 설정, api에서 받아올 값

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const calculateStatusWidth = () => {
        const maxStatus = userLevel * 1000;
        const currentStatus = userStatus % 1000;
        return (currentStatus / maxStatus) * 100;  // Return percentage width
    };
    
    const getImageStyle = (levelRequirement) => ({
        width: 50,
        height: 50,
        resizeMode: 'contain',
        tintColor: userLevel >= levelRequirement ? null : 'gray',
        opacity: userLevel >= levelRequirement ? 1 : 0.5
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
                {image ? 
                    <Image source={{ uri: image }} style={styles.profileImage} /> :
                    <Image source={require('./assets/placeholder.png')} style={styles.profileImage} />
                }
            </TouchableOpacity>
            <Text style={styles.levelText}>Lv.{userLevel}</Text>
            <Button title="Logout" onPress={() => console.log('Logout Pressed')} />
            <View style={styles.statusBarContainer}>
                <View style={[styles.statusBar, { width: `${calculateStatusWidth()}%` }]} />
            </View>
            <View style={styles.container}>
            <Text style={styles.header}>My Characters</Text>
            <View style={styles.imagesContainer}> 
                <Image
                    source={require('./assets/character1.png')}
                    style={getImageStyle(10)}
                />
                <Image
                    source={require('./assets/character2.png')}
                    style={getImageStyle(30)}
                />
                <Image
                    source={require('./assets/character3.png')}
                    style={getImageStyle(50)}
                />
                <Image
                    source={require('./assets/character4.png')}
                    style={getImageStyle(100)}
                />
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageContainer: {
        marginBottom: 10,
    },
    levelText: {
        fontSize: 18,
        marginVertical: 10,
    },
    statusBarContainer: {
        width: '100%',
        height: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
    },
    statusBar: {
        height: '100%',
        backgroundColor: 'green',
    },
});

export default MyPage;
