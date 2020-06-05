const courses = [
  {
    id: 1,
    title: 'Angular',
    slug: 'angular-web-framework',
    authorId: 2,
    category: 'Typescript',
  },
  {
    id: 2,
    title: 'Ionic',
    slug: 'ionic-mobile-framework',
    authorId: 2,
    category: 'Typescript',
  },
  {
    id: 3,
    title: 'React',
    slug: 'react-web-framework',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 4,
    title: 'React Native',
    slug: 'react-native-mobile-framework',
    authorId: 1,
    category: 'JavaScript',
  },
  {
    id: 5,
    title: 'C#',
    slug: 'c-programming-language',
    authorId: 3,
    category: 'C Sharp',
  },
  {
    id: 6,
    title: 'C++',
    slug: 'c-programming-language',
    authorId: 3,
    category: 'C Plus Plus',
  },
  {
    id: 7,
    title: 'Vue',
    slug: 'vue-web-framework',
    authorId: 2,
    category: 'Javascript',
  },
  {
    id: 8,
    title: 'Architecting Applications for the Real World',
    slug: 'architecting-applications-dotnet',
    authorId: 3,
    category: 'Software Architecture',
  },
]

const authors = [
  { id: 1, name: 'Jordan Hayashi' },
  { id: 2, name: 'John Papa' },
  { id: 3, name: 'Dan Wahlin' },
]

const newCourse = {
  id: null,
  title: '',
  authorId: null,
  category: '',
}

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
}
