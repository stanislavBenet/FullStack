import React from "react";
import { Field, Form, Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  isDoneTask,
  setMode,
} from "../../store/todoSlice";
import Task from "./Task";
const MODE_TYPE = ["all", "do", "done"];

const Todo = () => {
  const { tasks, mode } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(addTask({ value: values.body }));
    formikBag.resetForm();
  };
  const handleIsDone = (id) => dispatch(isDoneTask({ id }));
  const handleDelete = (id) => dispatch(deleteTask({ id }));
  const handleMode = ({ target: { value } }) => dispatch(setMode({ value }));
  const mapTask = (task) => {
    if (mode === "done" && task.isDone) {
      return (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleIsDone={handleIsDone}
        />
      );
    }else if (mode === "do" && task.isDone===false) {
      return (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleIsDone={handleIsDone}
        />
      );
    }else if (mode === "all") {
      return (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleIsDone={handleIsDone}
        />
      );
    }
  };
  return (
    <>
      <section>
        <h2>Tasks form</h2>
        <Formik onSubmit={onSubmit} initialValues={{ body: "" }}>
          <Form>
            <Field name="body" />
            <input type="submit" value="Add task" />
          </Form>
        </Formik>
        <select value={mode} onChange={handleMode}>
          {MODE_TYPE.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>
      </section>
      <section>
        <h2>Tasks list</h2>
        <ol>{tasks.map(mapTask)}</ol>
      </section>
    </>
  );
};

export default Todo;
