import AddCandidate from "./Component/AddCandidate";
import CandidateTable from "./Component/CandidateTable";
import SearchFilter from "./Component/SearchFilter";
import data from './data.json';
import { useEffect, useState } from "react";
import {Grid , Typography ,Box} from '@mui/material';
import { getSortedData } from "./utils";
import './assets/app.css';
function App() {
  const sortedData = getSortedData(data);
  const [globalCandidateData,setGlobalCandidateData] = useState([...sortedData]);
  const [candidateData,setCandidateData] = useState([...sortedData]);
  useEffect(()=>{
    setCandidateData([...globalCandidateData]);
  },[globalCandidateData]);
  return (
    <Grid container justifyContent={'center'}>
      <Grid conatiner maxWidth={'lg'}>
        <Box sx={{width:'100%'}}>
          <Typography variant="h4" component={'p'} textAlign='left'>Candidates</Typography>
        </Box>
      </Grid>
      <SearchFilter candidateData={globalCandidateData} setCandidateData={setCandidateData} />
      <CandidateTable candidateData={candidateData}/>
      <AddCandidate setGlobalCandidateData={setGlobalCandidateData} />
    </Grid>
  );
}

export default App;
