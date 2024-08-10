import { defineField, defineType } from 'sanity'

const showcaseSchema = defineType({
  name: 'showcase',
  title: 'Showcase',
  type: 'document',
  fields: [
    defineField({
      name: 'baselink',
      title: 'Base Link',
      type: 'url',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'baselink',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
  ],
})

export default showcaseSchema