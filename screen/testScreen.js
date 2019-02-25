//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase'
import {observer,action,inject} from 'mobx-react';
 
// import { PushtoArray } from './services/mapping-service';

// function getService (){
//   return firebase.firestore().collection ('getData')
// }

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname:'',
      
    }
  }
  componentDidMount() {
    thisData.onSnapshot(doc=>{
      const {Firstname} = doc.data();
    this.setState({Firstname})  
    });
    this.fullname('ratanak','rung');
  }
  fullname(lastname,firstname) {
    return console.log(`${lastname} ${firstname} is a man`);
  }

  // processImg() {
  //   uploadImg.then(recieveUrl()).catch(err=>err);
  // }
  render() {
    console.log(this.state.Firstname)
    return (
      <View style={styles.container}>
        <Text>{this.state.Firstname}</Text>
 

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

const uploadImg = new Promise(function() {
  const getUrl = ''
})

function recieveUrl() {
  const recieveUrl=getUrl
}
//make this component available to the app
export default TestScreen;
