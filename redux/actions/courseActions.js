import * as types from './actionTypes'
import * as courseApi from '../../api/courseApi'

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSE_SUCCESS, courses }
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course }
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course }
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course }
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses))
      })
      .catch((error) => {
        throw error
      })
  }
}

export function saveCourse(course) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse))
      })
      .catch((error) => {
        throw error
      })
  }
}

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course))
    return courseApi.deleteCourse(course.id)
  }
}
