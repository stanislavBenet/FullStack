import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [{ id: Date.now(), body: "test", isDone: false }],
    mode: "all",
  },
  reducers: {
    addTask(state, action) {
      const {value} = action.payload;
      state.tasks.push({ id: Date.now(), body: value, isDone: false })
    },
    deleteTask(state, action) {
      const {id} = action.payload;
      state.tasks = state.tasks.filter((task)=>id!==task.id)
    },
    isDoneTask(state, action) {
      const {id} = action.payload;
      state.tasks = state.tasks.map((task)=>id===task.id?({...task,isDone:!task.isDone}):task)
    },
    setMode(state, action) {
      const {value} = action.payload;
      state.mode = value;
    },
  },
});

export const { addTask, deleteTask, isDoneTask, setMode } = todoSlice.actions;
export default todoSlice.reducer;
