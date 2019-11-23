import React, { Component } from 'react';
import Para from '../components/Para'
import ParaTree from '../components/ParaTree'

class ParaPage extends Component {
  state = {
    para: {
      parent: 0,
      itemName: '',
      position: 0
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h3 className=""><b>Parameters Page</b></h3>
          <hr className="my-4" />

          <div className="row">
            <div className="col-7 app-aria">
              <b>Parameters tree</b>
              <ParaTree />
            </div>

            <div className="col-5">
              <Para values={this.state.para} />
            </div>


          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ParaPage;