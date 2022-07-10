import React, { useState } from 'react';
import { 
  TextField,
  Grid,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Box
} from '@mui/material';
import { getSortedData } from '../utils';

function AddCandidate({setGlobalCandidateData}) {
    const [candidate,setCandidate] = useState({
      first_name:'',
      last_name:'',
      email:'',
      gender:''
    });
    const [candidateformValidation,setCandidateformValidation] = useState({
      first_name:{error:false,message:''},
      last_name:{error:false,message:''},
      email:{error:false,message:''},
      gender:{error:false,message:''}
    });
    const validate = (name,value)=>{
      const validations = {...candidateformValidation};
      if(value){
        validations[name].error = false;
        validations[name].message = "";
      }else{
        validations[name].error = true;
        validations[name].message = "This field is required";
      }
      setCandidateformValidation({...validations});
    }
    const handleDataOnChange = (event) =>{
      const newCandidateData = {...candidate};
      if(event.target.value){
        newCandidateData[event.target.name] = event.target.value;
      }else{
        newCandidateData[event.target.name] = '';
      }
      validate(event.target.name,event.target.value);
      setCandidate({...newCandidateData});
    }
    const handleReset = () => {
      setCandidate({
          first_name:'',
          last_name:'',
          email:'',
          gender:''
        });
      setCandidateformValidation({
        first_name:{error:false,message:''},
        last_name:{error:false,message:''},
        email:{error:false,message:''},
        gender:{error:false,message:''}
      });
    }
    const handleAddNewCandidate = () => {
      Object.keys(candidateformValidation).forEach((item)=>validate(item,candidate[item]));
      const isValidated = Object.keys(candidateformValidation).every((item)=>candidateformValidation[item].error === false);
      if(isValidated){
        setGlobalCandidateData((prevState)=>{
          const newData = [...prevState];
          newData.push({...candidate,id:newData.length + 1});
          const sortedData = getSortedData(newData);
          return sortedData;
        });
        alert(`New Candidate [${candidate.first_name}] Added SuccessFully !`);
        handleReset();
      }
    }
    return (
      <Grid container spacing={2} maxWidth={'lg'} className="add-candidate-container">
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
              error={candidateformValidation.first_name.error}
              helperText={candidateformValidation.first_name.message}
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
              error={candidateformValidation.last_name.error}
              helperText={candidateformValidation.last_name.message}
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
            error={candidateformValidation.email.error}
            helperText={candidateformValidation.email.message}
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
            <Box justifyContent={'center'} display={'flex'}>
              <FormHelperText error={candidateformValidation.gender.error}>
                {candidateformValidation.gender.message}
              </FormHelperText>
            </Box>
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