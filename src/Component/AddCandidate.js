import React, { useState } from 'react';
import { 
  TextField,
  Grid,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

function AddCandidate({setGlobalCandidateData}) {
    const [candidate,setCandidate] = useState({
      first_name:'',
      last_name:'',
      email:'',
      gender:''
    });
    const handleDataOnChange = (event) =>{
      const newCandidateData = {...candidate};
      if(event.target.value){
        newCandidateData[event.target.name] = event.target.value;
      }else{
        newCandidateData[event.target.name] = '';
      }
      setCandidate({...newCandidateData});
    }
    const handleReset = () => {
      setCandidate({
          first_name:'',
          last_name:'',
          email:'',
          gender:''
        });
    }
    const handleAddNewCandidate = () => {
      setGlobalCandidateData((prevState)=>{
        const newData = [...prevState];
        newData.push({...candidate,id:newData.length + 1});
        return newData;
      });
    }
    return (
      <Grid container spacing={2} maxWidth={'lg'}>
        <Grid item xs={12} >
          <Typography variant="h4" component={'p'}>
            Add New Candidate
          </Typography>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={6}>
            <TextField 
              fullWidth
              value={candidate.first_name}
              onChange={handleDataOnChange}
              label="First Name"
              type="text"
              name="first_name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={candidate.last_name}
              onChange={handleDataOnChange}
              type="text"
              name="last_name"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={candidate.email}
            onChange={handleDataOnChange}
            label="Email"
            type="email"
            name="email" 
            variant="standard"
          />
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
              <RadioGroup
                value={candidate.gender}
                name='gender'
                onChange={handleDataOnChange} 
                sx={{display:'flex',justifyContent:'space-evenly',flexDirection:'row'}}>
                <FormControlLabel 
                  label="Male"
                  control={<Radio />}
                  value={'Male'}
                />
                <FormControlLabel 
                  label="Female"
                  control={<Radio />}
                  value={'Female'}
                />
              </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleAddNewCandidate} className="primary-button">Add</Button>
            <Button onClick={handleReset} className="secondary-button">Reset</Button>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default AddCandidate;