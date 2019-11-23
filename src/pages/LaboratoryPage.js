import React, { Component } from 'react';
import Laboratory from '../components/Laboratory'
import ParaTree from '../components/ParaTree'

class LaboratoryPage extends Component {
  state = { }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h3 className=""><b>Laboratory Page</b></h3>
          <hr className="my-4" />

          <div className="row">

            <div className="col-3">
              <ParaTree />
            </div>

            <div className="col-9">
              <Laboratory />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LaboratoryPage;