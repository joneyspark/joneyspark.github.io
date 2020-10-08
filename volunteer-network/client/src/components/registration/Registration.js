import { Box, Button, FormHelperText, Grid, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { API_URL, UserContext } from '../../App';
import volunteerFakeData from '../volunteerFakeData';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input__Fields: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    error: {
        color: 'red',
        fontWeight: 'bold'
    },
    success: {
        color: 'green',
        fontWeight: 'bold'
    },

  }));
const Registration = () => {
    const classes = useStyles();
    const [loggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        regDate: new Date()
    });
    let { eventsId } = useParams();
    const handleDateChange = (date) => {
        const newDate = {...selectedDate}
        newDate.regDate = date;
        setSelectedDate(date);
      };
    
    const fakeDate =  volunteerFakeData.filter(events => events.id === Number(eventsId));
    console.log(fakeDate[0]);

    const [handleFields, setHandleFields] = useState({
        errors: {
            name:'',
            email:'',
            date:'',
            description:'',
            event:''
        }
    });

    const [afterRegSetup, setAfterRegSetup] = useState({registerSuccess: false});

    const handleInputField = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const errors = handleFields.errors;

        switch (fieldName) {
            case "name":
                errors.name = fieldValue.length < 5 ? "Name at least 5 character": "";
                break;
            
            case "email":/* 
                const re = /\S+@\S+\.\S+/;
                errors.email = re.test(fieldValue) ? "": "Email Not Valid"; */
                errors.email = fieldValue.length < 5 ? "Email at least 5 character": "";
                break;
            case "description":
                errors.description = fieldValue.length < 5 ? "description at least 5 character": "";
                break;
            
            case "eventName":
                errors.description = fieldValue.length < 5 ? "eventName at least 5 character": "";
                break;
            
            default:
                break;
        }
        setHandleFields({errors, [fieldName]:fieldValue});
        console.log(handleFields);
    }
    
    const { errors } = handleFields;

    let history = useHistory();

    const backToHome = () => {
        history.push('/');
    }
    
    const goUserPanel = () => {
        history.push('/userPanel');
    }


    const handleSubmitReg = (e) => {
        e.preventDefault();
            const fullName = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const regDate = document.getElementById('date-picker-inline').value;
            const description = document.getElementById('description').value;
            const eventName = document.getElementById('eventName').value;

            if(fullName && email && eventName ){
                if(handleFields.errors.name.length === 0 && handleFields.errors.email.length === 0 && handleFields.errors.description.length === 0){
                    const registrationInformation = {
                        name: fullName,
                        email: email,
                        date: regDate,
                        des: description,
                        event: eventName,
                        id: fakeDate[0].id,
                        image: fakeDate[0].image
                    }
            
                    console.log(registrationInformation);
            
                    fetch(API_URL + '/registrationEvent', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json'},
                        body: JSON.stringify(registrationInformation)
                    })
                    .then(res => res.json())
                    .then(result => {
                        if(result === true){
                            toast.success("Registration Successfully Done !", {
                                position: toast.POSITION.TOP_LEFT
                            });
                            setAfterRegSetup({registerSuccess: true})
                        }
                    })
                }
                else{
                    toast.error("Fields are Invalid !", {
                        position: toast.POSITION.TOP_LEFT
                      });
                }
            }else{
                toast.error("Fields are Required !", {
                    position: toast.POSITION.TOP_LEFT
                  });
            }

    }


    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
            {
                afterRegSetup.registerSuccess ?
                    <Box component='div'>
                        <Typography variant="h4" className={classes.success} style={{textAlign: 'center'}}>
                            Register Successfully as a Volunteer in {fakeDate[0].name}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={goUserPanel}>Go Your Panel</Button>
                        <Button variant="contained" color="primary" onClick={backToHome}>Back to Home</Button>
                    </Box>
                :
                    <Box component='div'>
                    <Typography variant="h4">
                    <Button variant="contained" color="primary" onClick={goUserPanel}>Go Your Panel</Button> 
                        Or | Register as a Volunteer
                    </Typography>
                        <form className={classes.root} onSubmit={handleSubmitReg}>
                            <Input placeholder="Full Name" onBlur={handleInputField} id="fullname" type="text" className={classes.input__Fields} name="name" onBlur={handleInputField} value={loggedInUser.name} />
                            <p className={classes.error}>{errors.name}</p>
                            <Input placeholder="Email or username" type="email" onBlur={handleInputField} id="email" className={classes.input__Fields} value={loggedInUser.email} name="email" />
                            <p className={classes.error}>{errors.email}</p>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.input__Fields}>
                                <KeyboardDatePicker
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={selectedDate.regDate}
                                    onChange={handleDateChange}
                                    name="date"
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <Input placeholder="Description" name="description" onBlur={handleInputField} id="description" className={classes.input__Fields} type="text" />
                            <p className={classes.error}>{errors.description}</p>
                            <Input placeholder="Events Name" name="eventName" onBlur={handleInputField} id="eventName" value={fakeDate[0].name} className={classes.input__Fields} type="text" inputProps={{ 'aria-label': 'events name' }} />
                                <p className={classes.error}>{errors.eventName}</p>
                            <Button type="submit" variant="contained" color="primary">Registration</Button>
                        </form>
                    </Box>

            }

            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
};

export default Registration;