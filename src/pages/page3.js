import React, { Component } from 'react';
import Component2 from '../components/component2';
import Component3 from '../components/component3';
import Component4 from '../components/component4';

class Page3 extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="app3">
        Page3 component
        <Component2 />
        <Component3 />
        <Component4 />
      </div>
     );
  }
}
 
export default Page3;