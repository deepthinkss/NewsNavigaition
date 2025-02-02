import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type NewsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'News'>;

const NewsScreen = () => {
  const navigation = useNavigation<NewsScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('NewsList')}
      >
        <Text style={styles.buttonText}>View Latest News</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default NewsScreen; // Ensure this is present