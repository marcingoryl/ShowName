import React, { useState } from "react";
import { StyleSheet, Text, View , Button, TouchableOpacity} from "react-native";

const App = () => {
  const [show, setShow] = useState('');
  const [buttonText, setButtonText] = useState('Pokaz');

  const onPress = () => {
    
    if(show != '') {
      setButtonText('Pokaz');
      setShow('');
    }
    else {
      setShow(generateMyName());
      setButtonText('Ukryj');
    }
  };
  
  const generateMyName = () => {
    return (<Text style={styles.centerText}>Nazywam się: <Text style={styles.boldStyle}>Marcin Goryl</Text></Text>);
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Zadanie 2
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress = {onPress}
      >
        <Text style={styles.button}>{buttonText}</Text>
      
      </TouchableOpacity>
      <Text style={styles.centerText}>{show}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boldStyle: {
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  centerText: {
    margin:24,
    textAlign: 'center'
  }
});

export default App;
