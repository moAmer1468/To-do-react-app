import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "../../style.css";

export const AddItem = ({ todos, addTodo }) => {
  //first we need to create initial object to modify it Then we will pass This object
  // to addTodo Function
  const [inputValue, setInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const handleSubmit = (e) => {
    // This line is used to prevent the browser From refreshing when submit
    e.preventDefault();
    console.log("Submitted values are :", inputValue, secondInputValue);
    //so This line Will be used to send the object uaAemr
    addTodo({
      id: Math.round(Math.random() * 100),
      name: inputValue,
      age: secondInputValue,
    });
    // Then we need to clear After Submitting the values
    setInputValue("");
    setSecondInputValue("");
  };
  const handleInputOneChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputTwoChange = (e) => {
    setSecondInputValue(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="input-name"
          onChange={(e) => {
            handleInputOneChange(e);
          }}
          type="text"
          value={inputValue}
          placeholder="Enter Your name...."
          id="name"
        />
        <input
          className="input-age "
          onChange={(e) => {
            handleInputTwoChange(e);
          }}
          type="number"
          value={secondInputValue}
          placeholder="Enter Your Age...."
          id="age"
        />
        <input className="input-add special" type="submit" value="Add" />
      </form>
    </div>
  );
};
