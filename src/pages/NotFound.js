import React from 'react';
const NotFound = (props) => {
  return <div>
        <h1>404, Not Found</h1>
        <p>No Match for {props.location.pathname}</p>
    </div>
}
 
export default NotFound;