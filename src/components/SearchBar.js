import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const searchEdtStyle = {
    width: "100%",
    height: "30px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px",
    marginBottom: "10px",
    fontSize: "16px",
    outline: "none",
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(term);
  };

  const handleChange = (e) => {
    //  setTerm(e.target.value.replace(/[a-z]/, ""));   //with this users cant type lower letters
    setTerm(e.target.value);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          style={searchEdtStyle}
          onChange={handleChange}
          value={term}
        />
      </form>
    </div>
  );
}

export default SearchBar;
