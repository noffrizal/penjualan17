import React, { useState } from "react";

// import material-ui
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

// import styles
import useStyles from "./styles";

// react router DOM
import { Link } from 'react-router-dom'

// validator email
import isEmail from "validator/lib/isEmail";

function Registrasi() {

    const classes = useStyles();
    const [form, setForm] = useState({
        email:'',
        password:'',
        ulangi_password:''
    });

    const [error, setError] = useState({
        email:'',
        password:'',
        ulangi_password:''
    })

    const handleChange = e=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })

        setError({
            ...error,
            [e.target.name] :''
        })
    }

    const validate = ()=>{
        const newError = { ...error}

        // validasi Email
        if(!form.email){
            newError.email = 'Email Wajib diisi'
        }else if(!isEmail(form.email)){
            newError.email = 'Email tidak Valid'
        }

        // validasi Password
        if (!form.password) {
            newError.password = 'Password Wajib diisi'
        }

        if (!form.ulangi_password) {
            newError.ulangi_password = 'Ulangi Password Wajib diisi'
        }else if(form.ulangi_password !== form.password) {
            newError.ulangi_password = 'Password tidak sama'
        }

        return newError
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const findErrors= validate()

        if (Object.keys(findErrors).some(err=>err!=='')) {
            setError(findErrors)
    }}

    return <Container maxWidth='xs'>
        <Paper className={classes.paper}>
            <Typography
                variant="h5"
                component='h1'
                className={classes.blue}>Buat Akun</Typography>

            <form  onSubmit={handleSubmit} noValidate>
                <TextField id="email"
                    type="email"
                    name="email"
                    margin="normal"
                    label="Alamat Email"
                    fullWidth
                    required
                    value={form.email}
                    onChange={handleChange}
                    helperText={error.email}
                    error={error.email?true:false}
                />

                <TextField id="password"
                    type="password"
                    name="password"
                    margin="normal"
                    label="Password"
                    fullWidth
                    required
                    value={form.password}
                    onChange={handleChange}
                    helperText={error.password}
                    error={error.password?true:false}
                />

                <TextField id="ulangi_password"
                    type="password"
                    name="ulangi_password"
                    margin="normal"
                    label="Ulangi Password"
                    fullWidth
                    required
                    value={form.ulangi_password}
                    onChange={handleChange}
                    helperText={error.ulangi_password}
                    error={error.ulangi_password?true:false}
                />

                <Grid container className={classes.buttons}>
                    <Grid item xs>
                        <Button type="submit"
                            color="primary"
                            variant="contained"
                            size="large"
                        >Daftar</Button>

                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            color="secondary"
                            variant="contained"
                            size="large"
                            to='/login'
                        >Login</Button>
                    </Grid>
                </Grid>



            </form>
        </Paper>
    </Container>


}

export default Registrasi