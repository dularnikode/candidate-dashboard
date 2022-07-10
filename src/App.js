import AddCandidate from "./Component/AddCandidate";
import CandidateTable from "./Component/CandidateTable";
import SearchFilter from "./Component/SearchFilter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Candidate Dashboard</h1>
      </header>
      <SearchFilter />
      <CandidateTable />
      <AddCandidate />
    </div>
  );
}

export default App;
