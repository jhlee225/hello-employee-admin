import { createReducer, createAction } from "@reduxjs/toolkit";

export const SetTodoModify = createAction("SetTodoModify");
export const OpenTodo = createAction("OpenTodo");
export const OpenTodoInsult = createAction("OpenTodoInsult");
export const OpenTodoRemove = createAction("OpenTodoRemove");

export const actionsToDo = {
  SetTodoModify: SetTodoModify,
  OpenTodo: OpenTodo,
  OpenTodoInsult: OpenTodoInsult,
  OpenTodoRemove: OpenTodoRemove,
};
export const ToDoReducer = createReducer(
  { insult: false, modify: false, remove: false },
  {
    [SetTodoModify]: (state, action) =>
      (state = action.payload.modify
        ? { ...state, modify: false }
        : { ...state, modify: true }),
    [OpenTodo]: (state, action) =>
      (state = {
        insult: false,
        modify: false,
        remove: false,
      }),
    [OpenTodoRemove]: (state, action) =>
      (state = {
        insult: false,
        modify: false,
        remove: true,
      }),
    [OpenTodoInsult]: (state, action) =>
      (state = {
        insult: true,
        modify: false,
        remove: false,
      }),
  }
);
