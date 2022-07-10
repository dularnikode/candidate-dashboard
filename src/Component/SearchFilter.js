import React,{useState} from "react";
import {Grid , TextField , Checkbox ,FormControlLabel} from '@mui/material';

function SearchFilter ({candidateData,setCandidateData}){
    const [searchFilterParam,setSearchFilterParam] = useState({
        male:false,
        female:false,
        searchQuery:''
      });
    const constainsText = (option,searchText,property) =>{
        const value = option[property]?.toLowerCase()?.indexOf(searchText.toLowerCase());
        return value > -1;
    }
    const handleChangeSearchParam = (event) =>{
        const newSearchParam = {...searchFilterParam};
        if(event.target.name === 'male' || event.target.name === 'female'){
            newSearchParam[event.target.name] = event.target.checked;
        }else{
            newSearchParam[event.target.name] = event.target.value;
        }
        setSearchFilterParam({...newSearchParam});
        if(newSearchParam.male || newSearchParam.female || newSearchParam.searchQuery){
            let data = [...candidateData];
            if(newSearchParam.male || newSearchParam.female){
                data = data.filter((item)=> item.gender === (newSearchParam.male ? 'Male':'') || item.gender === (newSearchParam.female ? 'Female' : ''));
                if( newSearchParam.searchQuery){
                    // const newSearchQuery = newSearchParam.searchQuery.toLowerCase(); 
                    // data = data.filter((item)=>(item.last_name.toLowerCase() === newSearchQuery || item.first_name.toLowerCase() === newSearchQuery || item.email.toLowerCase() === newSearchQuery ) );
                    data = data.filter((item)=>(constainsText(item,newSearchParam.searchQuery,'last_name') || constainsText(item,newSearchParam.searchQuery,'first_name') || constainsText(item,newSearchParam.searchQuery,'email')));
                }
            }else if(newSearchParam.searchQuery){
                // const newSearchQuery = newSearchParam.searchQuery.toLowerCase(); 
                // data = data.filter((item)=>(item.last_name.toLowerCase()  || item.first_name.toLowerCase() === newSearchQuery || item.email.toLowerCase() === newSearchQuery ) );
                data = data.filter((item)=>(constainsText(item,newSearchParam.searchQuery,'last_name') || constainsText(item,newSearchParam.searchQuery,'first_name') || constainsText(item,newSearchParam.searchQuery,'email')));
            }
            setCandidateData([...data]);
        }else{
            setCandidateData([...candidateData]);
        }
    }  
    /**
     * || (item.last_name.toLowerCase() === newSearchParam.searchQuery.toLowerCase() || item.first_name.toLowerCase() === newSearchParam.searchQuery.toLowerCase() || item.email.toLowerCase() === newSearchParam.searchQuery.toLowerCase())
     *|| item.gender === newSearchParam.female ? 'Female' : ''
    */
    return(
        <Grid container>
            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControlLabel
                            label="Male"
                            name="male"
                            control={
                                <Checkbox
                                    checked={searchFilterParam.male}
                                    onChange={handleChangeSearchParam}
                                    />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            label="Female"
                            name="female"
                            control={
                                <Checkbox
                                    checked={searchFilterParam.female}
                                    onChange={handleChangeSearchParam}
                                    />}
                        />
                    </Grid>
                </Grid>
               
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    fullWidth 
                    name="searchQuery"
                    placeholder="Whom are you looking for ?" 
                    value={searchFilterParam.searchQuery} 
                    onChange={handleChangeSearchParam}
                    variant="standard" />
            </Grid>
        </Grid>
    );
}
export default SearchFilter;