import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadCourses, saveCourse } from '../redux/actions/courseActions'
import { loadAuthors } from '../redux/actions/authorActions'
import { newCourse } from '~/../../tools/mockData'
import CourseForm from './CourseForm'

function ManageCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  navigation,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course }) // Goal: When our props change, we need to update our component's state
  const [errors, setErrors] = useState({})
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert('Loading courses failed ' + error)
      })
    } else {
      setCourse({ ...props.course })
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert('Loading authors failed ' + error)
      })
    }
  }, [props.course])

  function handleChange(event) {
    const { name, value } = event.target
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }))
  }

  function handleSave(event) {
    event.preventDefault()
    if (!formIsValid()) return
    setSaving(true)
    saveCourse(course)
      .then(() => {
        navigation.navigate('Course')
        setCourse(newCourse)
        setSaving(false)
      })
      .catch((error) => {
        setSaving(false)
        setErrors({ onSave: error.message })
      })
  }

  function formIsValid() {
    const { title, authorId, category } = course
    const errors = {}

    if (!title) errors.title = 'Title is required.'
    if (!authorId) errors.author = 'Author is required'
    if (!category) errors.category = 'Category is required'

    setErrors(errors)
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0
  }

  return (
    <CourseForm
      course={course}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  )
}

export function getCourseBySlug(courses, id) {
  return courses.find((x) => x.id === id) || null
}

function mapStateToProps(state, ownProps) {
  let id = 0
  if (ownProps.params !== undefined) {
    id = ownProps.params.id
  }
  //const slug = ownProps.location.pathname.split('/').reverse()[0]
  const course =
    id && state.courses.length > 0
      ? getCourseBySlug(state.courses, id)
      : newCourse

  // const course =
  //   state.courses.length > 0 ? state.courses.find((x) => x.id == 1) : newCourse
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  }
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
