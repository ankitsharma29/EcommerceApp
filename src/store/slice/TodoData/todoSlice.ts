import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  name: string;
}

interface TodoState {
  name: any;
  tasks: Task[];
}

const initialState: TodoState = { tasks: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ id: Date.now().toString(), name: action.payload });
    },
    editTask: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) task.name = action.payload.name;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
