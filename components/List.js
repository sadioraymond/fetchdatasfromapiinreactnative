import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     TouchableOpacity,
     FlatList,
     Image,

} from 'react-native';

export default class Tache extends React.Component {
  render() {
    return (
 <View key={this.props.keyval} style={styles.tache}>
                <Text style={styles.tacheText}>{this.props.val.title}</Text>
                <Image
                style={styles.Imageurl}
                source={{uri: this.props.val.url}}
              />
            </View>
    );
  }
}

const styles = StyleSheet.create({
    tache: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    tacheText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    Imageurl:{
        width: 50, 
        height: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    tacheDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D50000',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    tacheUpdate: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 20,
        top: 10,
        bottom: 10,
        right: 50
    },
    tacheDeleteText: {
        color: 'white'
    }
});


