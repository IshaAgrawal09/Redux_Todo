export const ADD_Data = "ADD_Data";
export const Del = "Del";
export const EDIT = "EDIT";
export const CHECKED = "CHECKED";

export const todo = (data) => {
  return {
    type: ADD_Data,
    payload: data,
  };
};

export const del_Data = (idx) => {
  return {
    type: Del,
    payload: idx,
  };
};

export const Edit_Data = (idx, val) => {
  return {
    type: EDIT,
    payload: {
      index: idx,
      data: val,
    },
  };
};

export const Checked_Action = (idx, val) => {
  return {
    type: CHECKED,
    payload: {
      index: idx,
      status: val,
    },
  };
};
