import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [openPlanets, setOpenPlanets] = useState<string[]>([]); // Track open planets

  const planets = [
    {
      id: '1',
      name: 'Earth',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg',
      description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
    },
    {
      id: '2',
      name: 'Moon',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg',
      description: 'The Moon is Earth\'s only natural satellite, orbiting at an average distance of 384,400 km.',
    },
    {
      id: '3',
      name: 'Sun',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/1200px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg',
      description: 'The Sun is the star at the center of the Solar System, providing energy for life on Earth.',
    },
    {
      id: '4',
      name: 'Jupiter',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/1200px-Jupiter_by_Cassini-Huygens.jpg',
      description: 'Jupiter is the largest planet in the Solar System, known for its Great Red Spot.',
    },
    {
      id: '5',
      name: 'Mars',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg',
      description: 'Mars is the fourth planet from the Sun, often called the "Red Planet" due to its reddish appearance.',
    },
    {
      id: '6',
      name: 'Neptune',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/1200px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
      description: 'Neptune is the eighth and farthest-known planet from the Sun, known for its deep blue color.',
    },
    {
      id: '7',
      name: 'Uranus',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg',
      description: 'Uranus is the seventh planet from the Sun, known for its unique sideways rotation.',
    },
    {
      id: '8',
      name: 'Mercury',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/1200px-Mercury_in_true_color.jpg',
      description: 'Mercury is the smallest and innermost planet in the Solar System, orbiting closest to the Sun.',
    },
  ];

  const handlePlanetPress = (planetId: string) => {
    if (openPlanets.includes(planetId)) {
      // If the planet is already open, close it
      setOpenPlanets(openPlanets.filter((id) => id !== planetId));
    } else {
      // Otherwise, open the planet card
      setOpenPlanets([...openPlanets, planetId]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg' }}
            style={styles.image}
          />
          <Text style={styles.title}>Welcome to Solar System </Text>
          <Text style={styles.text}>Explore the beauty of our planet and beyond.</Text>
        </View>

        <View style={styles.buttonContainer}>
          {planets.map((planet) => (
            <Pressable
              key={planet.id}
              style={[
                styles.planetButton,
                openPlanets.includes(planet.id) && styles.selectedPlanetButton, // Highlight selected button
              ]}
              onPress={() => handlePlanetPress(planet.id)}
            >
              <Text style={styles.planetButtonText}>{planet.name}</Text>
            </Pressable>
          ))}
        </View>

        {openPlanets.map((planetId) => {
          const planetData = planets.find((planet) => planet.id === planetId);
          return (
            planetData && (
              <View key={planetData.id} style={styles.planetCard}>
                <Image source={{ uri: planetData.imageUrl }} style={styles.planetImage} />
                <Text style={styles.planetTitle}>{planetData.name}</Text>
                <Text style={styles.planetDescription}>{planetData.description}</Text>
              </View>
            )
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  planetButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '48%', // Two buttons per row
  },
  selectedPlanetButton: {
    backgroundColor: '#ff5722', // Highlight color for selected button
  },
  planetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  planetCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  planetImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  planetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  planetDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;