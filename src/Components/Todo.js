import React, { useState } from "react";
import { connect } from "react-redux";
import { Checked_Action, del_Data, Edit_Data, todo } from "../Redux/Action";
import "./Todo.css";
const Todo = (props) => {
  const [data, setData] = useState("");
  const [status, setStatus] = useState(false);
  const [idx, setIdx] = useState();
  const [disabled, setDisabled] = useState(false);

  //   ADD FUNCTIONALITY
  const add = () => {
    if (data !== "") {
      if (!status) {
        let tempData = {
          data: data,
          state: "incomplete",
        };
        props.todo(tempData);
      } else {
        props.Edit_Data(idx, data);
        setStatus(false);
      }
      setData("");
    }
  };

  //   REMOVE FUNCTION
  const remove = (idx) => {
    props.del_Data(idx);
  };

  //   EDIT FUNCTION
  const edit = (idx) => {
    props.todoList.filter((item, index) => {
      if (idx === index) {
        setData(item.data);
      }
    });
    setStatus(true);
    setIdx(idx);
  };

  // CHECKED FUNCTIONALITY
  const checked = (event, idx) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      props.Checked_Action(idx, "complete");
    } else {
      props.Checked_Action(idx, "incomplete");
    }
  };

  return (
    <>
      <div className="todo">
        {/* ADD  */}
        <div className="add">
          <input
            type="text"
            placeholder="Add a Task"
            className="txt"
            id="inputText"
            onChange={(event) => setData(event.target.value)}
            value={data}
          />
          <button onClick={add}>
            <i className="fas fa-plus"></i>
          </button>
        </div>

        {/* INCOMPLETE TASKS  */}
        <div className="incomplete">
          <h3>To Do</h3>
          {props.todoList.length > 0
            ? props.todoList.map((item, index) => {
                return (
                  <div className="task" key={index}>
                    <input
                      className="check"
                      type="checkbox"
                      onClick={(e) => checked(e, index)}
                    />
                    {item.state === "complete" ? (
                      <>
                        <del>{item.data}</del>
                        <button
                          className="btn"
                          disabled
                          id={index}
                          onClick={() => remove(index)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                        <button
                          className="btn"
                          disabled
                          id={index}
                          onClick={() => edit(index)}
                        >
                          <i className="fas fa-pencil"></i>
                        </button>
                      </>
                    ) : (
                      <>
                        {item.data}
                        <button
                          className="btn"
                          id={index}
                          onClick={() => remove(index)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                        <button
                          className="btn"
                          id={index}
                          onClick={() => edit(index)}
                        >
                          <i className="fas fa-pencil"></i>
                        </button>
                      </>
                    )}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state.todo_List);
  return {
    todoList: state.todo_List,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    todo: (data) => dispatch(todo(data)),
    del_Data: (idx) => dispatch(del_Data(idx)),
    Edit_Data: (idx, val) => dispatch(Edit_Data(idx, val)),
    Checked_Action: (idx,state) => dispatch(Checked_Action(idx,state)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
