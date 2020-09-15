import React from 'react';
import { styles } from './styles';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logo from '../../../assets/logo.png';
import { Ionicons } from '@expo/vector-icons';

export const LandingPage = () => {
    const { navigate } = useNavigation();

    function handlePodcastListNavigation() {
        navigate('PodcastList')
    }

    return (
        <View style={styles.container}>
                <Ionicons name="ios-mic" size={32} color="#94d3ac" />
                <Text style={styles.text}>
                    Flow
                </Text>
                <Image source={logo} style={styles.logo} />
            <RectButton 
                style={styles.button}
                onPress={handlePodcastListNavigation}
            >
                <Text style={styles.buttonText}>
                    Ver Podcasts
                </Text>
            </RectButton>
        </View>
    );
}

