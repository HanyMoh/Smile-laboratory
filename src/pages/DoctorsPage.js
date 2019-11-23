import React, { Component } from 'react';
import Doctors from '../components/Doctors'
import UserData from '../components/UserData'
import PeopleSearch from '../components/PeopleSearch'

class DoctorsPage extends Component {
  state = {
    person: {
      code: '',
      name: '',
      phone: '',
      note: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h3 className=""><b>Doctors Page</b></h3>
          <hr className="my-4" />

          <div className="row">

            <div className="col-3">
              <PeopleSearch />
              <UserData />
            </div>

            <div className="col-9">
              <Doctors values={this.state.person} />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DoctorsPage;