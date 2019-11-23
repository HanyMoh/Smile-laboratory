import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SuperTreeview from 'react-super-treeview';
import 'react-super-treeview/dist/style.css'

class ParaTree extends Component {
  constructor() {
    super();
    // SET YOUR DATA
    this.state = {
      data: [
        {
          id: 1,
          name: 'Parent A'
        },
        {
          id: 2,
          name: 'Parent B',
          isExpanded: true,
          isChecked: true,
          children: [
            {
              id: 1,
              name: 'Child 1'
            },
            {
              id: 2,
              name: 'Child 2'
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      // RENDER THE COMPONENT
      <SuperTreeview
        data={this.state.data}
        onUpdateCb={(updatedData) => {
          this.setState({ data: updatedData })
        }}
      />
    );
  }
}

export default ParaTree;