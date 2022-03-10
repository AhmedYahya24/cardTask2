import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/fetchingAPI/axios";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addUser({ title, description }, dispatch);
    },
    [title, description]
  );

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
