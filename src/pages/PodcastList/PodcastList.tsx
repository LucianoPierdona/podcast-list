import React from 'react';
import { FlatList, Text, View } from 'react-native';
import PodcastCard from '../../components/PodcastCard/PodcastCard';
import { data } from '../../data';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export const PodcastList = () => {
    const { podcasts } = data;
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>
                    Episódios de Podcast
                </Text>
                <Ionicons name="ios-mic" size={32} color="#655c56" />
            </View>
            <View style={{ marginBottom: 150}}>
                <FlatList
                    data={podcasts}
                    keyExtractor={(podcast) => podcast.title}
                    renderItem={({ item }) => {
                        console.log(item)
                        return (
                                <PodcastCard
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    url={item.url}
                                />
                        );
                    }}
                />
            </View>
        </View>
    )
}
