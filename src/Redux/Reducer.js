import { ADD_Data, Del, EDIT, CHECKED } from "./Action";
const initialState = {
  todo_List: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_Data:
      let tempData = state.todo_List;
      tempData.push(action.payload);
      return {
        ...state,
        todo_List: (state.todo_List = [...tempData]),
      };

    case Del:
      let temp = state.todo_List;
      temp.splice(action.payload, 1);
      return {
        ...state,
        todo_List: (state.todo_List = [...temp]),
      };

    case EDIT:
      debugger;
      let temp_Data = state.todo_List;
      temp_Data[action.payload.index].data = action.payload.data;
      return {
        ...state,
        todo_List: (state.todo_List = [...temp_Data]),
      };

    case CHECKED:
      let checked_Data = state.todo_List;
      checked_Data[action.payload.index].state = action.payload.status;
      return {
        ...state,
        todo_List: (state.todo_List = [...checked_Data]),
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
