import React, { useEffect, useState } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import Header from "../page/Header";

// Include TripForm and any trip creation specific logic.

const TripCreate = ({ errors, touched, values, status }) => {
  return (
    <>
      <Header />
      <div className="trip-create-form-container">
        <h1>Create A Trip</h1>
        <Form>
          <Field
            component="input"
            type="text"
            name="title"
            placeholder="Title"
          />
          {touched.title && errors.title && (
            <p className="error">{errors.title}</p>
          )}
          <Field
            component="input"
            type="textArea"
            name="description"
            placeholder="Describe The Trip"
          />
          {touched.description && errors.description && (
            <p className="error">{errors.description}</p>
          )}
          <Field component="input" type="date" name="date" placeholder="date" />
          <Field component="select" className="days-select" name="days">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10+">10+</option>
          </Field>
          <Field
            component="select"
            className="difficulty-select"
            name="difficulty"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    </>
  );
};

const newTripSubmission = withFormik({
  mapPropsToValues({ title, description, date, days, difficulty }) {
    return {
      title: title || "",
      description: description || "",
      date: date || "",
      days: days || "",
      difficulty: difficulty || ""
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required("Please enter a title"),
    description: Yup.string()
      .required("Please enter a description")
      .min(200, "200 characters required")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    alert("Your trip has been accepted", JSON.stringify(values, null, 2));
    resetForm();
  }
});

const newTripWithFormik = newTripSubmission(TripCreate);

export default newTripWithFormik;
