import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Prompt } from "react-router-dom";

const Users = (props) => {
  const schema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  });
  return (

    <div className="wide-aria">
      <Formik
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render={props => {
          return <Form>
            <Prompt when={props.dirty} message={'sure?'} />

            <div className="form-group">
              <label htmlFor="exampleInputName">User Name:</label>
              <Field name="username" className="form-control" id="exampleInputName" aria-describedby="usernameHelp" placeholder="Enter Username" />
              <small id="usernameHelp" className="form-text text-danger">
                <ErrorMessage name="username" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password:</label>
              <Field name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
              <small id="passwordHelp" className="form-text text-danger">
                <ErrorMessage name="password" />
              </small>
            </div>


            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="Second group">
                <button type="submit" className="btn btn-outline-primary">Save</button>
                <button type="button" className="btn btn-outline-info">Clear</button>
              </div>
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-outline-danger">Delete</button>
              </div>
            </div>

          </Form>
        }}
      />
    </div>
  )
}

export default Users;