import * as React from 'react';
import { Button, View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Hadainvierno from './cuentos/Hadainvierno';
import Terror from './cuentos/Terror';
import Dragon from './cuentos/Dragon';
import Lago from './cuentos/Lago';
import Guisante from './cuentos/Guisante';

import { StyleSheet, StatusBar, Image } from 'react-native';

function HomeScreen({ navigation }) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

    <Image style={{ width: '50%', height: '30%', marginVertical: 5, }}
          source={{
            uri: 'https://i.ibb.co/xSMJGyz/nubes-rosas.jpg',
          }}
    />


      <Text style={styles.Titulos}>
        Antología de cuentos: </Text>

        <Text style={styles.text}>
        En ésta sección de la antología, podrás encontrar distintos tipos de cuentos de hadas y de terror,
        selecciona el botón con el cuento que desees leer.
      </Text>

      <Text style={styles.Titulos}>
        Cuentos de fantasia:
        </Text>

      <Button
        title="El hada de invierno"
        onPress={() => navigation.navigate('El hada de invierno')}
      />

<Button
        title="La princesa y el guisante"
        onPress={() => navigation.navigate('La princesa y el guisante')}
      />


      <Text style={styles.Titulos}>
        Cuentos de terror:
        </Text>

      <Button
        title="El gato negro"
        onPress={() => navigation.navigate('cuentos de terror')}
      />

<Button
        title="El dragón de Wawel"
        onPress={() => navigation.navigate('El dragón de Wawel')}
      />

<Button
        title="El monstruo del lago"
        onPress={() => navigation.navigate('El monstruo del lago')}
      />

    

    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Antología">
        <Stack.Screen name="Antología" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="El hada de invierno" component={Hinviernoscreen} />
        <Stack.Screen name="cuentos de terror" component={Terrorcreen} />
        <Stack.Screen name="El dragón de Wawel" component={Dragcreen} />
        <Stack.Screen name="El monstruo del lago" component={Lagocreen} />
        <Stack.Screen name="La princesa y el guisante" component={gscreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Hinviernoscreen(){
  return(
    <Hadainvierno/>
  );
}

function Terrorcreen(){
  return(
    <Terror/>
  );
}

  
  function Dragcreen(){
    return(
      <Dragon/>
    );
}

function Lagocreen(){
  return(
    <Lago/>
  );
}

function gscreen(){
  return(
    <Guisante/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  text: {
    fontSize: 25,
    color: '#8D62A8',
    marginVertical: 10,
    
  },

  Titulos:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F02D92',
    textAlign: 'center',

  },

});

export default App;
