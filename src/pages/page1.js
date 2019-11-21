import React, { Component } from 'react';
import Component2 from '../components/component2';
import Component4 from '../components/component4';

class Page1 extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="app1">
        Page1 component
        <Component2/>
        <Component4/>
      </div>
     );
  }
}
 
export default Page1;