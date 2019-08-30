import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

import newTrip from "../../img/trip-pic-1.jpg";

const TripEdit = ({ errors, touched, values, status, match }) => {
  const id = match.params.id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    Axios.get(`/trip/${id}`).then(res => {
      console.log(res);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setDate(res.data.date);
      setDuration(res.data.duration);
    });
  }, [id]);

  return (
    <div className="trip-create-form-container">
      <img src={newTrip} alt="Edit Trip"></img>
      <h1>Edit Your Trip</h1>
      <Form className="submit-a-trip-fields">
        <Field
          component="input"
          type="text"
          name="title"
          placeholder="Title"
          className="title-field"
          value={title}
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
          value={description}
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
              value={date}
            />
          </label>
          <label className="form-label">
            How Many Days Did Your Trip Last?
            <Field
              component="select"
              className="bottom-row-fields"
              name="days"
              selected={date}
            >
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

const tripEdit = withFormik({
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
  handleSubmit(values, { setStatus, resetForm, props }) {
    const trip = {
      user_id: window.localStorage.getItem("guidr_id"),
      title: values.title,
      shortDescription: values.description.substring(0, 50) + "...",
      description: values.description,
      isProfessional: true,
      type: 1,
      duration: values.days,
      distance: 500,
      date: values.date
    };

    const id = props.match.params.id;

    Axios.put(`/trip/${id}`, trip).then(res => {
      console.log(res);
    });
    resetForm();
  }
});

const newTripWithFormik = tripEdit(TripEdit);

export default newTripWithFormik;
