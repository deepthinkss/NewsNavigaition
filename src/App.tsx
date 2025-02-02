import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen'; // Ensure this import is correct
import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: string };
  Profile: undefined;
  News: undefined;
  NewsList: undefined;
  NewsDetail: { newsItem: any };
  ImageScreen: { imageUrl: string; name: string };
};


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Item Details' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'User Profile' }}
        />
        <Stack.Screen 
          name="News" 
          component={NewsScreen} 
          options={{ title: 'News' }}
        />
        <Stack.Screen 
          name="NewsList" 
          component={NewsListScreen} 
          options={{ title: 'Latest News' }}
        />
        <Stack.Screen 
          name="NewsDetail" 
          component={NewsDetailScreen} 
          options={{ title: 'News Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}