import React, { Component } from 'react';
import Component1 from '../components/component1';
import Component3 from '../components/component3';
import Users from '../components/Users';

class Page2 extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="app2">
        Page2 component
        <Component1 />
        <Component3 />
        <Users />
      </div>
     );
  }
}
 
export default Page2;