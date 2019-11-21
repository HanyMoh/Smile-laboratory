import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Prompt } from "react-router-dom";

const Users = (props) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required()
  });
  return (

    <div class="row">
      <div class="col-3">
        <table class="table table-hover">
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
      <div class="col-9">
        <div className="app5">


          <Formik
            enableReinitialize={true}
            initialValues={props.values}
            onSubmit={props.onSubmit}
            validationSchema={schema}
            render={props => {
              return <Form>
                <Prompt when={props.dirty} message={'sure?'} />

                <label>Name : </label>
                <Field name="name" />
                <ErrorMessage name="name" /><br />

                <label>Email : </label>
                <Field name="email" />
                <ErrorMessage name="email" /><br />

                <button type="submit">Send</button>
              </Form>
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Users;