const showcaseSchema = {
  name: 'showcase',
  title: 'Showcase',
  type: 'document',
  fields: [
    {
      name: 'baselink',
      title: 'Base Link',
      type: 'url',
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
  ],
}

export default showcaseSchema;