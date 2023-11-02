// schemas/book.js
export default {
    name: 'movie',
    type: 'document',
    title: 'Movie Baisc Info',
    fields: [
      {
        name: 'banner',
        type: 'image',
        title: 'Movie Banner'
      },
      {
        name: 'movieName',
        type: 'string',
        title: 'Movie Name'
      },
      {
        name: 'cast',
        title: 'Cast',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'shortDesc',
        title: 'Short Desc',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{type: 'category' }]
      },
      {
        name: 'director_producer',
        title:'Director and Producer',
        type: "array",
        of: [
            {
                type: "reference",
                to: [
                    {
                        type: "poweredBy"
                    }
                ]
            }
        ]


      }
      
      
      
    ]
  }