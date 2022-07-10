import AddCandidate from "./Component/AddCandidate";
import CandidateTable from "./Component/CandidateTable";
import SearchFilter from "./Component/SearchFilter";
import data from './data.json';
import { useEffect, useState } from "react";
import {Grid} from '@mui/material';
import './assets/app.css';
function App() {
  const [globalCandidateData,setGlobalCandidateData] = useState([...data]);
  const [candidateData,setCandidateData] = useState([...data]);
  useEffect(()=>{
    setCandidateData([...globalCandidateData]);
  },[globalCandidateData]);
  return (
    <Grid container justifyContent={'center'}>
      <header>
        <h1>Candidate Dashboard</h1>
      </header>
      <SearchFilter candidateData={globalCandidateData} setCandidateData={setCandidateData} />
      <CandidateTable candidateData={candidateData}/>
      <AddCandidate setGlobalCandidateData={setGlobalCandidateData} />
    </Grid>
  );
}

export default App;
