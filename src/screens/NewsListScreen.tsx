import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type NewsListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewsList'>;

interface NewsItem {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
  url: string; // Use 'url' as a unique key
}

const NewsListScreen = () => {
  const navigation = useNavigation<NewsListScreenNavigationProp>();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const apiKey = '87fdcb000be14fbba3f550a1842b5fdd'; // Replace with your actual API key
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use a proxy server if needed
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      const response = await fetch(proxyUrl + apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data); // Debugging: Log the API response

      if (data.status === 'ok') {
        setNews(data.articles);
      } else {
        setError(data.message || 'Failed to fetch news');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      if (error instanceof Error) {
        setError(`An error occurred: ${error.message}`);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <Pressable
      style={styles.newsCard}
      onPress={() => navigation.navigate('NewsDetail', { newsItem: item })}
    >
      {item.urlToImage && (
        <Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
      )}
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
        <Text style={styles.newsDate}>{new Date(item.publishedAt).toDateString()}</Text>
      </View>
    </Pressable>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <Pressable
          style={styles.retryButton}
          onPress={() => {
            setError(null);
            setLoading(true);
            fetchNews();
          }}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.url} // Use 'url' as the unique key
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  newsCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  newsContent: {
    padding: 16,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  newsDescription: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  newsDate: {
    fontSize: 12,
    color: '#888',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  retryButton: {
    marginTop: 10,
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default NewsListScreen;