// schemas/category.js
export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'category',
        type: 'string',
        title: 'Movie Category'
      },
      {
        name: 'catImage',
        type: 'image',
        title: 'Category Image'
      }
    ]
  }