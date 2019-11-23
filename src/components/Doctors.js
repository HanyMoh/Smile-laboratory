import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Prompt } from "react-router-dom";

const Doctors = (props) => {
  const schema = Yup.object().shape({
    code: Yup.number(),
    name: Yup.string().required(),
    phone: Yup.string().required(),
    note: Yup.string()
  });
  return (

    <div className="wide-aria">
      <Formik
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        personType={props.personType}
        render={props => {
          return <Form>
            <Prompt when={props.dirty} message={'sure?'} />

            <div className="form-group">
              <label htmlFor="exampleInputCode">Code:</label>
              <Field name="code" className="form-control" id="exampleInputCode" aria-describedby="codeHelp" placeholder="Enter Code" />
              <small id="codeHelp" className="form-text text-danger">
                <ErrorMessage name="code" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputName">Doctor Name:</label>
              <Field name="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" />
              <small id="nameHelp" className="form-text text-danger">
                <ErrorMessage name="name" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPhone">Phone</label>
              <Field name="phone" className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="Enter Phone" />
              <small id="phoneHelp" className="form-text text-danger">
                <ErrorMessage name="phone" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputNote">Note:</label>
              <Field name="note" className="form-control" id="exampleInputNote" aria-describedby="noteHelp" placeholder="Enter Note" />
              <small id="noteHelp" className="form-text text-danger">
                <ErrorMessage name="note" />
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
  );
}

export default Doctors;