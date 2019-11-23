import React from 'react';
const PeopleSearch = (props) => {
  return (
    <form className='search-box'>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Name:</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Search by name .." />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Phone:</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Search by phone .." />
      </div>
    </form>
  );
}

export default PeopleSearch;