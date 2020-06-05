import React from 'react'
import { Text, View, Button } from 'react-native'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import CourseScreen from './screens/CourseScreen'
import ManageCoursePage from './screens/ManageCourseScreen'
import { createStackNavigator } from '@react-navigation/stack'

const store = configureStore()

const HomeStack = createStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

const CourseStack = createStackNavigator()
function CourseStackScreen() {
  return (
    <CourseStack.Navigator>
      <CourseStack.Screen name="Course" component={CourseScreen} />
    </CourseStack.Navigator>
  )
}

// const CourseMangeStack = createStackNavigator()
// function ManageCoureStackScreen() {
//   return (
//     <CourseMangeStack.Navigator>
//       <CourseMangeStack.Screen
//         name="Manage Course"
//         component={ManageCoursePage}
//       />
//     </CourseMangeStack.Navigator>
//   )
// }

const CourseMangeStack = createStackNavigator()
function ManageCoureStackScreen({ route }) {
  // console.log(route);
  return (
    <CourseMangeStack.Navigator>
      <CourseMangeStack.Screen name="Manage Course">
        {(props) => <ManageCoursePage {...props} params={route.params} />}
      </CourseMangeStack.Screen>
    </CourseMangeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Course" component={CourseStackScreen} />
          <Tab.Screen name="Manage Course" component={ManageCoureStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

// const Tab = createBottomTabNavigator()

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Course" component={CourseScreen} />
//           <Tab.Screen name="ManageCourse" component={ManageCoursePage} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }
