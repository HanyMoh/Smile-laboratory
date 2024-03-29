import React, { Component } from 'react';
import Users from '../components/Users';
import UserData from '../components/UserData'

class Page2 extends Component {
  state = {
    user: {
      userame: '',
      password: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h3 className=""><b>Users Page</b></h3>
          <hr className="my-4" />

          <div className="row">

            <div className="col-3">
              <UserData />
            </div>

            <div className="col-9">
              <Users values={this.state.user} />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Page2;