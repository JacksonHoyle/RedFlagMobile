import React from 'react'
import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Browser from '../screens/Browser'

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
