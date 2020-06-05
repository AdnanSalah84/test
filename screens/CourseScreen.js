import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as courseActions from '../redux/actions/courseActions'
import * as authorActions from '../redux/actions/authorActions'
import { connect } from 'react-redux'
import CourseList from './CourseList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class CourseScreen extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert('Loading courses failed ' + error)
      })
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert('Loading authors failed ' + error)
      })
    }
  }

  handleEditCourse = (course) => {
    this.props.navigation.navigate('Manage Course', { id: course.id })
  }

  handleDeleteCourse = (course) => {
    this.props.actions.deleteCourse(course).catch((error) => {
      //toast.error('Delete failed. ' + error.message, { autoClose: false })
    })
  }

  render() {
    return (
      <View>
        <CourseList
          onEditClick={this.handleEditCourse}
          onDeleteClick={this.handleDeleteCourse}
          courses={this.props.courses}
        />
        {/* {this.props.courses.map((course) => (
          <Text key={course.title}>{course.title}</Text>
        ))}
        <Text> Course!</Text> */}
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    //courses: state.courses,
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            }
          }),
    authors: state.authors,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseScreen)
