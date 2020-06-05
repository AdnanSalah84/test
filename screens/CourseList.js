import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Button,
} from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const Item = ({ item, onDeleteClick, onEditClick }) => {
  return (
    <View style={styles.item}>
      <Text>
        <strong> Tite: </strong> {item.title}
      </Text>
      <Text>
        <strong> Author: </strong> {item.authorName}
      </Text>
      <Text>
        <strong> Category:</strong> {item.category}
      </Text>
      <br />
      <View style={styles.fixToText}>
        <Button title="Edit" color="green" onPress={() => onEditClick(item)} />
        <Button
          title="Delete"
          color="red"
          onPress={() => onDeleteClick(item)}
        />
      </View>
    </View>
  )
}

const CourseList = ({ courses, onDeleteClick, onEditClick }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {courses.map((item) => {
          return (
            <View key={item.id}>
              <Item
                item={item}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
              />
            </View>
          )
        })}
      </ScrollView>
      {/* <FlatList
        data={courses}
        renderItem={({ item }) => (
          <Item item={item} onDeleteClick={onDeleteClick} />
        )}
        keyExtractor={(item) => item.id.toString()}
      /> */}
    </SafeAreaView>
  )
}

//   courses.map((course) => {
//     return (
//       <View key={course.id}>
//         <Text>{course.title}</Text>
//       </View>
//     )
//   })

export default CourseList
