import React from 'react'
import PropTypes from 'prop-types'
import TextInputField from './common/TextInputField'
import SelectInput from './common/SelectInput'
import { StyleSheet, View, Button, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <View style={styles.container}>
      <form onSubmit={onSave}>
        <Text>
          <h3>{course.id ? 'Edit' : 'Add'} Course</h3>
        </Text>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        <TextInputField
          name="title"
          label="Title"
          value={course.title}
          onChange={onChange}
          error={errors.title}
          placeholder="Title"
        />

        <br />
        <hr />
        <SelectInput
          name="authorId"
          label="Author"
          value={course.authorId || ''}
          defaultOption="Select Author"
          options={authors.map((author) => ({
            value: author.id,
            text: author.name,
          }))}
          onChange={onChange}
          error={errors.author}
        />

        <br />
        <hr />

        <TextInputField
          name="category"
          label="Category"
          value={course.category}
          onChange={onChange}
          error={errors.category}
          placeholder="Category"
        />

        <br />

        <Button
          type="submit"
          disabled={saving}
          title={saving ? 'Saving...' : 'Save'}
          onPress={onSave}
        ></Button>
      </form>
    </View>
  )
}

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
}

export default CourseForm
