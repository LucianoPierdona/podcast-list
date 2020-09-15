import React from 'react';
import { Image, Text, View, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

interface CardProps {
    url: String,
    image: String,
    title: String,
    description: String,
}

const PodcastCard: React.FC<CardProps> = ({ url, image, title, description }) => {
    return (
        <View>
            <RectButton style={styles.cardContainer} onPress={() =>  Linking.openURL(`${url}`)}>
                <Image source={{ uri: `${image}` }} style={styles.imageCard} />
                <View style={styles.cardRight}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </RectButton>
        </View>
    );
}

export default PodcastCard;