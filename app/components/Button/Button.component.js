import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View , Button} from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const AppButton = props => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={() => history.push('/')}>
      <MaterialIcons style={styles.itemicons} name="home" size={32} color="white" />
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  
  homeButton: { // home button will be used to redirect back to home
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'black'
  },
  regular: { 
    width: 'flex',
    height: 'flex',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#000000',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    backgroundColor: 'transparent',
  },
})

export default AppButton


