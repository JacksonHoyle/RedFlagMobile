import React, { Component } from 'react'
import { WebView } from 'react-native-webview'
import { ActivityIndicator, StyleSheet } from 'react-native'

class Browser extends Component {
	LoadingIndicatorView() {
		return <ActivityIndicator color='#c90a0d' size='large' style={styles.ActivityIndicatorStyle} />
	}

	render() {
		const { params } = this.props.navigation.state

		return (
			<WebView
				source={{ uri: params.link }}
				renderLoading={this.LoadingIndicatorView}
				startInLoadingState={true}
			/>
		)
	}
}

const styles = StyleSheet.create({
	ActivityIndicatorStyle: {
		flex: 1,
		justifyContent: 'center'
	}
})

export default Browser
