import React, { Component } from 'react';
import Users from '../components/Users';

class Page2 extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <h3>Users Data</h3>
          <hr/>
          <Users />
        </div>
     );
  }
}
 
export default Page2;