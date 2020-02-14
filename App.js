import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button} from'native-base';
import Tabs from './Components/Tabs';

export default class App extends Component{
  render(){
    return(
        <View>
          <TextInput style={styles.textBox} placeholder="Enter Pickup Loaction"/>
          <TextInput style={styles.textBox} placeholder="Enter Destination Loaction"/>
          <Button rounded danger style={styles.buttonStyle}>
            <Text>Home</Text>
          </Button>
          <Tabs/>
        </View>
    );
  }
}

const styles=StyleSheet.create({
  textBox:{
    borderColor:'black',
    width:'90%',
    borderWidth:1,
    alignSelf:'center',
    margin: '3%',
    borderRadius: 6,
  },
  buttonStyle:{
    borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:'15%',
       height:'20%',
       backgroundColor:'#fff',
       borderRadius:50,
  }
})

