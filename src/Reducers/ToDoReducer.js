import { createReducer, createAction } from "@reduxjs/toolkit";

export const SetTodoModify = createAction("SetTodoModify");
export const SetDay = createAction("SetDay");
export const OpenTodo = createAction("OpenTodo");
export const OpenTodoInsult = createAction("OpenTodoInsult");
export const OpenTodoRemove = createAction("OpenTodoRemove");

export const actionsToDo = {
  SetTodoModify: SetTodoModify,
  SetDay: SetDay,
  OpenTodo: OpenTodo,
  OpenTodoInsult: OpenTodoInsult,
  OpenTodoRemove: OpenTodoRemove,
};
const date = new Date();
const today =
  date.getFullYear() +
  "-" +
  (date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()) +
  "-" +
  (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
export const ToDoReducer = createReducer(
  {
    insult: false,
    modify: false,
    today: today,
  },
  {
    [SetTodoModify]: (state, action) =>
      (state = action.payload.modify
        ? { ...state, modify: false }
        : { ...state, modify: true }),
    [OpenTodo]: (state, action) =>
      (state = { ...state, insult: false, modify: false, remove: false }),
    [OpenTodoRemove]: (state, action) =>
      (state = { ...state, insult: false, modify: false, remove: true }),
    [OpenTodoInsult]: (state, action) =>
      (state = { ...state, insult: true, modify: false, remove: false }),
    [SetDay]: (state, action) =>
      (state = {
        ...state,
        today: action.payload.date,
      }),
  }
);
