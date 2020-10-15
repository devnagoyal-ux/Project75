import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet,ToastAndroid,KeyboardAvoidingView,Alert } from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';

export default class writeStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      title : '',
      author : '',
      story : '',
    }
  }

  submitStory = async()=>{
    db.collection("Title").add({
      'title' : this.state.title,
    });
    db.collection("Author").add({
      'author' : this.state.author,
    });
    db.collection("Story").add({
      'story' : this.state.story,
    });
    transactionMessage = "Your story is submiited";
    ToastAndroid.show(transactionMessage,ToastAndroid.SHORT)
  }
    
render() {
      return(
        <KeyboardAvoidingView style={styles.container} behavior = "padding" enabled>
        <View style={styles.container}>
          <Text style ={{ 
          backgroundColor:'#9c8210'
          }}>
            News Letter
        </Text >
        <View style={styles.inputView}>
        <TextInput 
          style={styles.inputBox}
          placeholder="Story Title"
          value={this.state.title }/>
          <TextInput 
          style={styles.inputBox}
          placeholder="Story Author"
          value={this.state.author }/>
          <TextInput 
          style={styles.inputBox}
          placeholder=" Write your own Story "
          value={this.state.story}/>
        <TouchableOpacity 
          style={styles.submitButton}
          onPress={async()=>{
             this.submitStory()}}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        </View>
        </KeyboardAvoidingView>  
         
        );
      }
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton:{
       backgroundColor: '#FBC02D',
       width: 100,
      height:50 
        },
     submitButtonText:{
       padding: 10, 
       textAlign: 'center', 
       fontSize: 20, 
       fontWeight:"bold",
        color: 'white'
       }
  });
