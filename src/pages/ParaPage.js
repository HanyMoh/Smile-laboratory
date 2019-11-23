import React, { Component } from 'react';
import Para from '../components/Para'

class ParaPage extends Component {
  state = { }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h3 className=""><b>Parameters Page</b></h3>
          <hr className="my-4" />

          <div className="row">

            <div className="col-9">
              Tree view
            </div>

            <div className="col-3">
              Form here
              <Para />
            </div>


          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ParaPage;