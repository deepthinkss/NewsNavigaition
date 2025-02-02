import { StyleSheet, Text, View, Pressable, Linking, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Image source={require('../assets/gi.jpg')} style={styles.profiles} /> */}
        {/* <Image source={{ uri: 'https://avatars.githubusercontent.com/u/77118609?v=4' }} style={styles.profiles} /> */}
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/115718057?s=400&u=94a1f36fd0edd1fb994bb2502c045498d4f059e7&v=4' }} style={styles.profiles} />

        <Text style={styles.title}>User Profile</Text>
        <Text style={styles.text}>Name: Deep Thakur</Text>
        <Text style={styles.text}>Email: Deep@example.com</Text>
        <Text style={styles.text}>
          Github: 
          <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/deepthinkss')}>
            https://github.com/deepthinkss
          </Text>
        </Text>
        <Text style={styles.text}>
          StackoverFlow: 
          <Text style={styles.link} onPress={() => Linking.openURL('https://stackoverflow.com/users/25169559/deep-thakur')}>
          https://stackoverflow.com/users/25169559/deep-thakur
          </Text>
        </Text>
      
      </View>

      <Pressable
        style={[styles.button, styles.backButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#666',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  text :{
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  profiles: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default ProfileScreen;