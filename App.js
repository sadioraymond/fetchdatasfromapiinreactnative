/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  NetInfo,
} from 'react-native';
import List from './components/List';
import {insertNewTodoList,queryAllTodoLists,erasedatabase} from './databases/schema';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
  }; 
  this.setState({ data: queryAllTodoLists});
  }
  componentWillMount() {
    this.setState({ data: queryAllTodoLists});
    const dispatchConnected = isConnected => this.props.dispatch(setIsConnected(isConnected));
    NetInfo.isConnected.fetch().then().done(() => {
      NetInfo.isConnected.addEventListener('change', dispatchConnected);
      this.fetchData();
    }); 
  }
  
fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
      const json = await response.json();
      this.setState({ data: json});
      erasedatabase();
      this.state.data.forEach(element => {
        insertNewTodoList(element);
      });
};

  render() {
    let listes = this.state.data.map((val, key)=>{
      return <List key={key} keyval={key} val={val}/>
  });
    return (
      <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
      {listes}
      </ScrollView>
</View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
},
tacheText: {
  paddingLeft: 20,
  borderLeftWidth: 10,
  borderLeftColor: '#E91E63'
},
});
