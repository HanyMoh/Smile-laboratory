import React from 'react';
const UserData = () => {

  return (
    <div className="row app-aria">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserData;