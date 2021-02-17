import React from 'react'
import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Browser from '../screens/Browser'
//I put Home and Browser in a folder within the main project directory called screens because they are different screens the user accesses so if you have a different file layout, make sure to change their location in the two lines of code directly above this comment

const HomeStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => ({
			title: 'Location: Home',
			headerTintColor: '#c90a0d'
		})
	},
	Browser: {
		screen: Browser,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.title,
			headerTintColor: '#c90a0d'
		})
	}
})

const AppContainer = createAppContainer(HomeStack)

export default AppContainer
