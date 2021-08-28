import React, { useState, useRef } from "react";

function App() {
  // const [user, setUser] = useState("");
  // const [checked, setChecked] = useState(false);
  //const form = useRef(null);

  const formSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }
    fetch("http://localhost:8000/formDemo", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: data,
    })
      .then((res) => console.log(res.statusText))
      .catch((e) => console.error(e));
  };
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <label htmlFor="test">
          name:
          <input type="text" name="name" id="test" />
        </label>
        <input type="checkbox" name="isCheck" />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default App;
