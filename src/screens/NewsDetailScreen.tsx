import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type NewsDetailScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

interface NewsDetailScreenProps {
  route: NewsDetailScreenRouteProp;
}

const NewsDetailScreen = ({ route }: NewsDetailScreenProps) => {
  const { newsItem } = route.params;

  return (
    <ScrollView style={styles.container}>
      {newsItem.urlToImage && (
        <Image source={{ uri: newsItem.urlToImage }} style={styles.newsImage} />
      )}
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{newsItem.title}</Text>
        <Text style={styles.newsDescription}>{newsItem.description}</Text>
        <Text style={styles.newsDate}>{new Date(newsItem.publishedAt).toDateString()}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  newsImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  newsContent: {
    padding: 16,
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  newsDescription: {
    fontSize: 16,
    marginBottom: 12,
    color: '#555',
  },
  newsDate: {
    fontSize: 14,
    color: '#888',
  },
});

export default NewsDetailScreen; // Ensure this is present