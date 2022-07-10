import AddCandidate from "./Component/AddCandidate";
import CandidateTable from "./Component/CandidateTable";
import SearchFilter from "./Component/SearchFilter";
import data from './data.json';
import { useState } from "react";
import {Grid} from '@mui/material';
import './assets/common.css';
function App() {
  const [candidateData,setCandidateData] = useState([...data]);
  
  return (
    <Grid container>
      <header className="App-header">
        <h1>Candidate Dashboard</h1>
      </header>
      <SearchFilter candidateData={data} setCandidateData={setCandidateData} />
      <CandidateTable candidateData={candidateData}/>
      <AddCandidate />
    </Grid>
  );
}

export default App;
