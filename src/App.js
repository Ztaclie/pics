import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
  const handleSubmit = (term) => {
    console.log(searchImages(term));
  };

  return (
    <div className="App">
      <h1>Image Search</h1>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
