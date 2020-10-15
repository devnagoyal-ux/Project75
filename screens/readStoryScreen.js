import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import db from '../config'

var text = this.state.search;

export default class readStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      search : '',
      allStories : [],
    }
  }

  fetchMoreTransactions = async ()=>{
    var text = this.state.search
    const Story =  await db.collection("Story").where('story','==',text).get()
    Story.docs.map((doc)=>{
      this.setState({
        allStories : [...this.state.allStories,doc.data()]
      })
    })
    }


  searchTransactions= async(text) =>{
    const Story =  await db.collection("Story").where('story','==',text).get()
      Story.docs.map((doc)=>{
        this.setState({
          allStories : [...this.state.allStories,doc.data()]
        })
      })
  }
  componentDidMount = async ()=>{
    const query = await db.collection("Story").get()
    query.docs.map((doc)=>{
      this.setState({
        allStories : [...this.state.allStories,doc.data()]
      })
    })
  }
 
   render() {
    var text = this.state.search;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.searchBar}>
        <TextInput 
          style ={styles.bar}
          placeholder = "Enter name of story "
          onChangeText={()=>{this.setState({search:text})}}/>
          <TouchableOpacity
            style = {styles.searchButton}
            onPress={()=>{this.searchTransactions(this.state.search)}}>
            <Text>Search</Text>
          </TouchableOpacity>
        <View>
        <FlatList
          data={this.state.allStories}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>{"Story: " + item.story}</Text>
              </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
        /> 
        </View>
        </View> 
        </View>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })
