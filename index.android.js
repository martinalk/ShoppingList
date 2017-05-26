import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const onAddItemPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class ShoppingList extends Component {
  render() {
    return (
      <View style={styles.container}>
 		<View style={styles.header}>
 			<Text style={styles.headFont}>
 			ITEMS
 			</Text>
 		</View>

 		<View style={styles.fullBody}>
 			<View style={styles.entry}>
 				<View style={styles.itemEntryName}>
 				<Text>Item name</Text>
 				</View>
 				<View style={styles.itemEntryAmount}>
 				<Text>112</Text>
 				</View>
 				<View style={styles.itemEntryDelete}>
 				<Text>D</Text>
 				</View>
 			</View>
 		</View>

 		<View style={styles.addItemButton}>
 			{this.addItem()}
 		</View>
      </View>
      )
  }
  addItem() {
  	return <Button
  		onPress={onAddItemPress}
  		title="Add item"
  		color="#4bc18a"
  		accessibilityLabel="Click to add an item"
  	/>
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch',
  },
  header: {
  	flex: 1,
  	backgroundColor: '#4bc18a',
  	justifyContent: 'center',
  	alignItems: 'center',
  },
    headFont: {
  	fontSize: 25,
  	color: '#ffffff',
  },
  fullBody: {
  	flex: 10,
  	padding: '2%',
  },
  addItemButton: {
  	flex: 1,
  	paddingLeft: '5%',
  	paddingRight: '5%',
  },
  entry: {
  	flexDirection: 'row',
  	borderWidth: 1,
  	borderColor: '#ededed',
  },
  itemEntryName: {
  	padding: '2%',
  	flex: 12,
  },
  itemEntryAmount: {
  	padding: '2%',
  	flex: 2,
  },
  itemEntryDelete: {
  	padding: '2%',
  	flex: 1,
  },
  itemEntryFont: {
  	fontSize: 20,
  }
});

AppRegistry.registerComponent('ShoppingList', () => ShoppingList);