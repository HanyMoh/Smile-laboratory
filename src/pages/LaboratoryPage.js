import React, { Component } from 'react';
import Laboratory from '../components/Laboratory'

class LaboratoryPage extends Component {
  state = { }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h3 className=""><b>Doctors Page</b></h3>
          <hr className="my-4" />

          <div className="row">

            <div className="col-3">
              tree here
              <Laboratory />
            </div>

            <div className="col-9">
              header and footer here
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LaboratoryPage;