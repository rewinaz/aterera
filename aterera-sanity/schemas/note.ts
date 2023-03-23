export default {
  name: 'note',
  type: 'document',
  title: 'Note',
  fields: [
    {
      name: 'owner',
      type: 'reference',
      title: 'Owner',
      to: [{type: 'user'}],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
  ],
}
