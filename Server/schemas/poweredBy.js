// schemas/category.js
export default {
    name: 'poweredBy',
    type: 'document',
    title: 'Powered By',
    fields: [
      {
        name: 'director',
        type: 'text',
        title: 'Director'
      },
      {
        name: 'producer',
        type: 'text',
        title: 'Producer'
      },
    ]
  }