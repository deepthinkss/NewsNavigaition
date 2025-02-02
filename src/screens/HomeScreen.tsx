import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Sample news data
  const news = [
    {
      id: '1',
      title: 'New Feature Released!',
      description: 'We are excited to announce the release of our new feature that allows you to explore planets in detail.',
    },
    {
      id: '2',
      title: 'App Update Available',
      description: 'A new update is available for download. Update now to enjoy improved performance and new content.',
    },
    {
      id: '3',
      title: 'User Feedback Welcome',
      description: 'We value your feedback! Share your thoughts and help us improve the app.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Home Screen!</Text>

        <Text style={styles.introText}>
          This app is designed to help you explore the wonders of our solar system. Navigate through different screens to learn more about planets, read the latest news, and manage your profile.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('News')}
        >
          <Text style={styles.buttonText}>Go to News</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Details', { itemId: '123' })}
        >
          <Text style={styles.buttonText}>Go to Details</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Go to Profile</Text>
        </Pressable>

        <Text style={styles.newsTitle}>Latest News</Text>
        <FlatList
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Text style={styles.newsItemTitle}>{item.title}</Text>
              <Text style={styles.newsItemDescription}>{item.description}</Text>
            </View>
          )}
          scrollEnabled={false} // Disable scrolling for FlatList since it's inside a ScrollView
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  newsItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  newsItemDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;