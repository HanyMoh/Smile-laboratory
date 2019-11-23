import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Prompt } from "react-router-dom";

const Para = (props) => {

  const schema = Yup.object().shape({
    parent: Yup
      .number()
      .notRequired()
      .positive()
      .integer(),
    itemName: Yup.string().required(),
    position: Yup
      .number()
      .notRequired()
      .positive()
      .integer()
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
              <label htmlFor="exampleInputParent">Parent:</label>
              <Field name="parent" type="number" className="form-control" id="exampleInputParent" aria-describedby="parentHelp" placeholder="Enter Parent" disabled="disabled" />
              <small id="parentHelp" className="form-text text-danger">
                <ErrorMessage name="parent" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputName">Item Name:</label>
              <Field name="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name" />
              <small id="nameHelp" className="form-text text-danger">
                <ErrorMessage name="name" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPosition">Position:</label>
              <Field name="position" type="number" className="form-control" id="exampleInputPosition" aria-describedby="positionHelp" placeholder="Enter Position" />
              <small id="positionHelp" className="form-text text-danger">
                <ErrorMessage name="position" />
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

export default Para;