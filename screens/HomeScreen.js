import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <h1> Welcome to My Course </h1>
        </Text>
        <Button
          title="Go to Manage Course"
          onPress={() => this.props.navigation.navigate('Manage Course')}
        />
      </View>
    )
  }
}

export default HomeScreen
