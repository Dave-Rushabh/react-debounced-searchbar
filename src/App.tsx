import "./App.css";
import DebouncedSearchBar from "./components/DebouncedSearchBar";

function App() {
  return (
    <>
      <DebouncedSearchBar
        callback={(val: string) => {
          console.log(val);
        }}
      />
    </>
  );
}

export default App;
