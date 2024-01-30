import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Group from './src/pages/group';
import Discover from './src/pages/discover';
import Saved from './src/pages/saved';
import { DataProvider } from './src/hooks/hooks';
import Chat from './src/pages/chat';
export type RootStackPramList = {
  Home: undefined;
  Group : undefined;
  Discover : undefined;
  Saved : undefined;
  Chat : undefined;
}
const Stack = createNativeStackNavigator<RootStackPramList>()


export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Group" component={Group} options={{ headerShown: false }} />
          <Stack.Screen name="Discover" component={Discover} options={{ headerShown: false }} />
          <Stack.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
          <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}