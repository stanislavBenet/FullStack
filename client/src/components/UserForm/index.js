import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createUser } from "./../../store/usersSlice";
import styles from "./userForm.module.scss";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthday: "",
  isMale: true,
};
const UserForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    console.log(values);
    dispatch(createUser(values));
    //formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          margin: "auto",
        }}
      >
        <Field
          className={styles.margin}
          type="text"
          name="firstName"
          placeholder="firstName"
        />
        <Field
          className={styles.margin}
          type="text"
          name="lastName"
          placeholder="lastName"
        />
        <Field
          className={styles.margin}
          type="email"
          name="email"
          placeholder="email"
        />
        <Field
          className={styles.margin}
          type="password"
          name="password"
          placeholder="password"
        />
        <Field
          className={styles.margin}
          type="date"
          name="birthday"
          placeholder="birthday"
        />
        <label className={styles.margin}>
          Are you male? <Field type="checkbox" name="isMale" />
        </label>
        <button className={styles.margin} type="submit">
          add new user
        </button>
      </Form>
    </Formik>
  );
};

export default UserForm;
