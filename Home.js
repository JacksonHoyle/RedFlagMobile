import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class Home extends Component {
	state = {
		links: [
			{ title: 'Access Live Camera Feed', link: 'http://192.168.1.245:5000/' /*This is the IP address of the livestream feed*/ },
			//{ title: 'Do Another Thing IDK', link: 'https://cat-bounce.com/' /*This is just an example of where we could easily enter another button with a link*/ }
		]
	}

	handleButtonPress(item) {
		const { title, link } = item
		this.props.navigation.navigate('Browser', { title, link })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.list}>
				<Text style={styles.baseText} >*Welcome to The Red Flag Security System*</Text>
				<Image source={require('../assets/my-icon.png')} style={styles.logo}></Image>
					{this.state.links.map((item, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => this.handleButtonPress(item)}
							style={styles.button}
						>
							<Text style={styles.text}>{item.title}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},

	logo: {
		justifyContent: 'center',
		borderRadius: 5,
		padding: 20,
		margin: 10,
		alignItems: 'center'
	},

	baseText: {
		fontSize: 15,
		fontWeight: "bold",
		textAlign: 'center'
	  },

	buttonList: {
		flex: 1,
		justifyContent: 'center'
	},
	button: {
		margin: 10,
		backgroundColor: '#c90a0d',
		borderRadius: 5,
		padding: 20
	},
	text: {
		color: '#fff',
		textAlign: 'center'
	}
})

export default Home
