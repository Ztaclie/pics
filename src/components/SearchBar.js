function SearchBar({ onSubmit }) {
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

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSubmit(e.target.value);
    }
  };

  return (
    <div className="SearchBar">
      <input type="text" style={searchEdtStyle} onKeyUp={handleKeyUp} />
    </div>
  );
}

export default SearchBar;
