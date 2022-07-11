import AddCandidate from "./Component/AddCandidate";
import CandidateTable from "./Component/CandidateTable";
import SearchFilter from "./Component/SearchFilter";
import data from './data.json';
import { useEffect, useState } from "react";
import {Grid , Typography ,Box} from '@mui/material';
import { getSortedData } from "./utils";
import './assets/app.css';
function App() {
  const [globalCandidateData,setGlobalCandidateData] = useState([]);
  const [candidateData,setCandidateData] = useState([]);
  useEffect(()=>{
    setCandidateData([...globalCandidateData]);
  },[globalCandidateData]);

  window.onbeforeunload = () => {
    localStorage.setItem('candidate-data',JSON.stringify(globalCandidateData));
  };
  useEffect(()=>{
    const sortedData = getSortedData(data);
    const stuData = JSON.parse(localStorage.getItem('candidate-data'));
    if(stuData && stuData?.length > 0){
      setGlobalCandidateData([...stuData]);
      setCandidateData([...stuData]);
    }else{
      localStorage.setItem('candidate-data',JSON.stringify(sortedData));
      setGlobalCandidateData([...sortedData]);
      setCandidateData([...sortedData]);
    }
  },[]);
  return (
    <Grid container justifyContent={'center'}>
      <Grid container maxWidth={'lg'}>
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
