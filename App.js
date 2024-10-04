import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Running Assignment 8 in CMPS 460</Text>
      <View style = {{
        backgroundColor: 'green', 
        margin: 10, 
        marginTop: 10, 
        marginLeft: 100, 
        marginRight: 100, 
        marginBottom: 100,
        padding: 10,
        paddingTop: 1000,
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 100,
        paddingHorizontal: 50,
        paddingVertical: 50}}>
        <Text>Welcome Dude</Text>
      </View>
      <View style={{backgroundColor: 'green'}}>
        <Text>Welcome Back Bro</Text>
      </View>

        <Text style={{color: '#ff000', fontFamily: 'Arial', fontStyle: 'italic', fontWeight: '203', letterSpacing: 12, lineHeight: 12,
        }}>Hey Dude</Text>


    </SafeAreaView>
  );
};


export default App;
