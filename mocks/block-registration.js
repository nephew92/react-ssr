export default [{
  component: 'Root',
  children: [{
    component: 'Registration',
    children: [{
      component: 'Header1',
      props: {
        title: 'Este é um título',
      },
    }, {
      component: 'Container',
      props: {
        fluid: true,
      },
      children: [{
        component: 'Row',
        children: [{
          component: 'Col',
          context: ['form'],
          props: {
            xs: 6,
          },
          children: [{
            component: 'ListGroup',
            props: {
              color: 'primary',
            },
            children: [{
              component: 'ListGroupItem',
              props: {
                action: true,
                active: true,
              },
              children: ['Este é o item 1'],
            }, {
              component: 'ListGroupItem',
              props: {
                action: true,
              },
              children: ['Este é o item 2'],
            }],
          }],
        }],
      }],
    }],
  }],
}]
