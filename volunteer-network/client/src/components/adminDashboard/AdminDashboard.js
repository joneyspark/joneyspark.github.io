import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { API_URL } from '../../App';
import AddIcon from '@material-ui/icons/Add';
import PeopleIcon from '@material-ui/icons/People';
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const AdminDashboard = () => {
    const classes = useStyles();
    const [volunteers, setVolunteers] = useState([]);

    useEffect(()=>{
      fetch(API_URL + '/admin/getVolunteer')
      .then(res => res.json())
      .then(result => {
        setVolunteers(result);
      })
    },[])

    console.log(volunteers);
    
    return (
      <Container>
        <Grid container>
            <Grid item xs={3}>
              <Box component='div'>
                <Button><PeopleIcon></PeopleIcon> Volunteer register List</Button>
                <Button><AddIcon></AddIcon>Add Event</Button>
              </Box>
            </Grid>
            <Grid item xs={9}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Email ID</StyledTableCell>
                        <StyledTableCell>Registration Date</StyledTableCell>
                        <StyledTableCell>Volunteer List</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {volunteers.map((volunteer) => (
                        <StyledTableRow key={volunteer._id}>
                        <StyledTableCell component="th" scope="row">
                            {volunteer.name}
                        </StyledTableCell>
                        <StyledTableCell>{volunteer.email}</StyledTableCell>
                        <StyledTableCell>{volunteer.date}</StyledTableCell>
                        <StyledTableCell>{volunteer.event}</StyledTableCell>
                        <StyledTableCell>{volunteer.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
        </Grid>
      </Container>
    );
};

export default AdminDashboard;