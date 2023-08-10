export default [{
  type: 'Registration',
  blocks: [{
    type: 'Header1',
    attributes: {
      title: 'Este é um título',
    },
  }, {
    type: 'Container',
    attributes: {
      fluid: true,
    },
    blocks: [{
      type: 'Row',
      blocks: [{
        type: 'Col',
        attributes: {
          xs: 6,
        },
        blocks: [{
          type: 'ListGroup',
          attributes: {
            color: 'primary',
          },
          blocks: [{
            type: 'ListGroupItem',
            attributes: {
              action: true,
              active: true,
            },
            blocks: ['Este é o item 1'],
          }, {
            type: 'ListGroupItem',
            attributes: {
              action: true,
            },
            blocks: ['Este é o item 2'],
          }],
        }],
      }],
    }],
  }],
}]
