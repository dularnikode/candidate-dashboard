import React from 'react';
import {Table,TableBody,TableCell,TableHead,TableRow,Grid} from '@mui/material';
function CandidateTable({candidateData}) {
    return (
        <Grid container maxWidth={'lg'} justifyContent={'center'}>
            <Grid item xs={12} style={{margin:"auto"}}>
                <Table>
                    <TableHead className='tabel-heading'>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {candidateData.map((row,index) => (
                            <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.first_name}</TableCell>
                            <TableCell align="right">{row.last_name}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
}

export default CandidateTable;