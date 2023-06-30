import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './componentes/Logo';
import Card from './componentes/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text>Probá nuestro café.</Text>
      <Card/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
