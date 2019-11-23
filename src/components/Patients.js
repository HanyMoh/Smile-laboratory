import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Prompt } from "react-router-dom";

const Patients = (props) => {
  const schema = Yup.object().shape({
    code: Yup.number(),
    name: Yup.string().required(),
    phone: Yup.string().required(),
    age: Yup
      .number()
      .notRequired()
      .positive()
      .integer(),
    birthdate: Yup
      .date()
      .nullable()
      .notRequired()
      .min(new Date(1900, 0, 1)),
    is_female: Yup.boolean(),
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
              <Field name="code" type="number" className="form-control" id="exampleInputCode" aria-describedby="codeHelp" placeholder="Enter Code" />
              <small id="codeHelp" className="form-text text-danger">
                <ErrorMessage name="code" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputName">Patient Name:</label>
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
              <label htmlFor="exampleInputAge">Age:</label>
              <Field name="age" type="number" className="form-control" id="exampleInputAge" aria-describedby="ageHelp" placeholder="Enter Age" />
              <small id="ageHelp" className="form-text text-danger">
                <ErrorMessage name="age" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputBirthdate">Birth Date:</label>
              <Field name="birthdate" className="form-control" id="exampleInputBirthdate" aria-describedby="birthdateHelp" placeholder="Enter Birthdate" />
              <small id="birthdateHelp" className="form-text text-danger">
                <ErrorMessage name="birthdate" />
              </small>
            </div>

            <div className="form-check">
              <Field name="isFemale" className=" form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Is female
              </label>


              <small id="isFemaleHelp" className="form-text text-danger">
                <ErrorMessage name="isFemale" />
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputNote">Note:</label>
              <Field component="textarea" name="note" className="form-control" id="exampleInputNote" aria-describedby="noteHelp" placeholder="Enter Note" rows="5" />
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

export default Patients;