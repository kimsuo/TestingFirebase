//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import firebase from 'react-native-firebase'
import {observer,action,inject, Provider} from 'mobx-react';
import stores from './model/index'
 
// import { PushtoArray } from './services/mapping-service';

// function getService (){
//   return firebase.firestore().collection ('getData')
// }
@inject('thisData')
@observer

class MyClass extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   Firstname:'',
    // }
  }
  componentDidMount() {
  //   thisData.onSnapshot(doc=>{
  //     const {Firstname} = doc.data();
  //   this.setState({Firstname})  
  //   });
  //   this.fullname('ratanak','rung');
  // }
  // fullname(lastname,firstname) {
  //   return console.log(`${lastname} ${firstname} is a man`);
  this.unsubscriibe = this.props.thisData.fetchPackage();
  }

  componentWillUnmount() {
    this.unsubscribe;
  }
  renderItem = item =>{
    return (
      <Text>{item.Firstname}</Text>
    )
  }

  // processImg() {
  //   uploadImg.then(recieveUrl()).catch(err=>err);
  // }
  render(){
    const {packages, isLoading} = this.props.thisData;
    return (
     
      <Provider {...stores}>
        <FlatList 
        data ={packages}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor = {item => item.id}
        initialNumToRender={3}
        contentContainerStyle={{ paddingBottom: 25 }}
        />
        <Text>{this.state.Firstname}</Text>
        </Provider>
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
export default MyClass;
