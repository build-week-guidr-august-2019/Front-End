import React, { useEffect, useState } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import careerPic from "../../img/careers.jpg";

const CareerForm = ({ errors, touched, values, status }) => {
  return (
    <div className="career-form">
      <img className="career-image" src={careerPic}></img>
      <h1>Work For Us!</h1>
      <Form className="work-for-guidr">
        <Field
          component="input"
          type="text"
          name="firstname"
          placeholder="First Name"
          className="name-field"
        />
        {touched.firstname && errors.firstname && (
          <p className="error">{errors.firstname}</p>
        )}
        <Field
          component="input"
          type="text"
          name="lastname"
          placeholder="Last Name"
          className="name-field"
        />
        {touched.lastname && errors.lastname && (
          <p className="error">{errors.lastname}</p>
        )}
        <Field
          component="textarea"
          type="text"
          name="whywork"
          placeholder="Why Do You Want To Work For Guidr?"
          className="why-work-here"
        />
        {touched.whywork && errors.whywork && (
          <p className="error">{errors.whywork}</p>
        )}
        <Field
          country="US"
          placeholder="Phone Number"
          name="phone"
          className="enter-phone"
        />
        {touched.phone && errors.phone && (
          <p className="error">{errors.phone}</p>
        )}
        <Field
          component="input"
          placeholder="Street"
          name="street"
          className="address-info"
        />
        {touched.street && errors.street && (
          <p className="error">{errors.street}</p>
        )}
        <Field
          component="input"
          placeholder="City"
          name="city"
          className="address-info"
        />
        {touched.city && errors.city && <p className="error">{errors.city}</p>}
        <Field component="select" className="state-select" name="state">
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="District Of Columbia">District Of Columbia</option>
          <option value="Federated States Of Micronesia">
            Federated States Of Micronesia
          </option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Guam">Guam</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Northern Mariana Islands">
            Northern Mariana Islands
          </option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Palau">Palau</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Puerto Rico">Puerto Rico</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virgin Islands">Virgin Islands</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </Field>
        {touched.state && errors.state && (
          <p className="error">{errors.state}</p>
        )}
        <button className="submit-button">Save</button>
      </Form>
    </div>
  );
};

const newTripSubmission = withFormik({
  mapPropsToValues({
    firstname,
    lastname,
    whywork,
    phone,
    street,
    city,
    state
  }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      whywork: whywork || "",
      phone: phone || "",
      street: street || "",
      city: city || "",
      state: state || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required("Please enter a name"),
    lastname: Yup.string().required("Please enter a name"),
    phone: Yup.string().required("Please enter a phone number"),
    street: Yup.string().required("Please enter a phone street"),
    city: Yup.string().required("Please enter a phone city"),
    state: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    alert(
      "Your application has been accepted",
      JSON.stringify(values, null, 2)
    );
    resetForm();
  }
});

const careerApplyWithFormik = newTripSubmission(CareerForm);

export default careerApplyWithFormik;
