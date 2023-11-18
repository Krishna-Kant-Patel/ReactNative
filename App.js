import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View >
      <Text style={{fontSize:30}}>hello krishna this is my first App</Text>
      <Button title='Press here'></Button>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
       defaultValue='type here' />
      <StatusBar style="auto" />
    </View>
  );
}


