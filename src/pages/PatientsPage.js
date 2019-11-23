import React, { Component } from 'react';
import Patients from '../components/Patients'
import UserData from '../components/UserData'
import PeopleSearch from '../components/PeopleSearch'

class PatientsPage extends Component {
  state = { 
    person: {
      code: 0,
      name:'',
      phone:'',
      age: 0,
      birthdate:'',
      isFemale: false,
      note:''
    }
  }

  render() { 
    return ( 
      <React.Fragment>
        <div className="jumbotron">
          <h3 className=""><b>Patients Page</b></h3>
          <hr className="my-4" />

          <div className="row">

            <div className="col-3">
              <PeopleSearch />
              <UserData />
            </div>

            <div className="col-9">
              <Patients values={this.state.person} />
            </div>

          </div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default PatientsPage;