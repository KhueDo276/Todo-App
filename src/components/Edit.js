import React, { useState } from "react";

function Edit(props) {
  const [change, setChange] = useState("");

  const handleChange = (e) => {
    setChange(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: change,
    });
    setChange("");
  };
  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Edit your plan..."
        name="text"
        value={change}
        onChange={handleChange}
      />
      <button> Edit </button>
    </form>
  );
}

export default Edit;
