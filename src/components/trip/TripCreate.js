import React, { useEffect, useState } from "react";
import { Form, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

import newTrip from "../../img/trip-pic-1.jpg";

// Include TripForm and any trip creation specific logic.

const TripCreate = ({ errors, touched, values, status }) => {
  return (
    <div className="trip-create-form-container">
      <img src={newTrip}></img>
      <h1>Create A Trip</h1>
      <Form className="submit-a-trip-fields">
        <Field
          component="input"
          type="text"
          name="title"
          placeholder="Title"
          className="title-field"
        />
        {touched.title && errors.title && (
          <p className="error">{errors.title}</p>
        )}
        <Field
          component="textarea"
          type="text"
          name="description"
          placeholder="Describe The Trip"
          className="description-field"
        />
        {touched.description && errors.description && (
          <p className="error">{errors.description}</p>
        )}
        <div className="bottom-form-row">
          <label className="form-label">
            What Day Did You Start Your Trip?
            <Field
              component="input"
              type="date"
              name="date"
              placeholder="date"
              className="bottom-row-fields"
            />
          </label>
          <label className="form-label">
            How Many Days Did Your Trip Last?
            <Field component="select" className="bottom-row-fields" name="days">
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
          </label>
          <label className="form-label">
            How Would You Rate Your Trip?
            <Field
              component="select"
              className="bottom-row-fields"
              name="difficulty"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Field>
          </label>
        </div>
        <button className="submit-button">Save</button>
      </Form>
    </div>
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
    const trip = {
      user_id: window.localStorage.getItem("guidr_id"),
      title: values.title,
      shortDescription: values.description.substring(0, 50) + "...",
      description: values.description,
      isProfessional: true,
      type: 1,
      duration: values.days,
      distance: 500,
      date: values.date,
      image:
        "https://images.unsplash.com/photo-1566996694954-90b052c413c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    };

    Axios.post("/trip/", trip).then(res => {
      console.log(res);
    });
    alert("Your trip has been accepted", JSON.stringify(values, null, 2));
    resetForm();
  }
});

const newTripWithFormik = newTripSubmission(TripCreate);

export default newTripWithFormik;
