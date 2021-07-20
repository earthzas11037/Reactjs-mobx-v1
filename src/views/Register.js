import React, { useEffect } from 'react';
import { inject, observer } from "mobx-react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import * as EmailValidator from "email-validator";

function Register(props) {

    useEffect(() => {
        props.authenProv.data_register.email = ""
        props.authenProv.data_register.password = ""
    },[] )

    const handleRegister = async(e) => {
        e.preventDefault()
        var cur = props.authenProv.data_register
        var email = props.authenProv.data_register.email
        var password = props.authenProv.data_register.password
        if(cur.email === "" || cur.password === "" || cur.confirmPassword === "" || cur.user_name === ""){
            alert("กรุณากรอกข้อมูลให้ครบ!")
            return
        }
        if(!EmailValidator.validate(cur.email)){
            alert("กรุณากรอกอีเมล์ให้ถูกต้อง!")
            return
        }
        if(cur.password !== cur.confirmPassword){
            alert("ยืนยันรหัสผ่านไม่ถูกต้อง!")
            return
        }
        await  props.authenProv.register(email, password)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        props.authenProv.data_register = {
            ...props.authenProv.data_register,
            [name] : value
        }
    }

    return(
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
        >
            <Grid xs={12} sm={12} md={6} lg={3}style={{backgroundColor:"WHITE",padding:50,marginTop:"5%",borderRadius:5}}>
                <Typography style={{fontSize:"2.0em",textAlign:"center",marginTop:50}}>
                    สมัครสมาชิก
                </Typography>
                <TextField
                    fullWidth
                    label={<div style={{fontSize:"1.5em",marginTop:-6}}>อีเมล์</div>}
                    name="email"
                    style={{marginTop:10}}
                    inputProps={{style: {fontSize: "1.2em"}}}
                    variant="outlined"
                    value={props.authenProv.data_register.email}
                    onChange={e => handleChange(e)}
                />
                <TextField 
                    fullWidth
                    label={<div style={{fontSize:"1.5em",marginTop:-6}}>รหัสผ่าน</div>}
                    type="password"
                    name="password"
                    style={{marginTop:10}}
                    inputProps={{style: {fontSize: "1.2em"}}}
                    variant="outlined"
                    value={props.authenProv.data_register.password}
                    onChange={e => handleChange(e)}
                />
                <TextField 
                    fullWidth
                    label={<div style={{fontSize:"1.5em",marginTop:-6}}>ยืนยันรหัสผ่าน</div>}
                    type="password"
                    name="confirmPassword"
                    style={{marginTop:10}}
                    inputProps={{style: {fontSize: "1.2em"}}}
                    variant="outlined"
                    value={props.authenProv.data_register.confirmPassword}
                    onChange={e => handleChange(e)}
                />
                <TextField 
                    fullWidth
                    label={<div style={{fontSize:"1.5em",marginTop:-6}}>ชื่อผู้ใช้</div>}
                    type="text"
                    name="user_name"
                    style={{marginTop:10}}
                    inputProps={{style: {fontSize: "1.2em"}}}
                    variant="outlined"
                    value={props.authenProv.data_register.user_name}
                    onChange={e => handleChange(e)}
                />
                <Button 
                    variant="contained" 
                    color="primary"  
                    style={{paddingTop:10,paddingBottom:10 ,borderRadius:4,marginTop:20,width:"100%"}} 
                    onClick={handleRegister}
                >
                    ยืนยัน
                </Button>
                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                    <Button 
                        variant="outlined"
                        color="primary"  
                        style={{paddingTop:10,paddingBottom:10 ,borderRadius:4,marginTop:20,width:"100%",marginBottom:50}} 
                    >
                        ลงชื่อเข้าใช้
                    </Button>
                </NavLink>
            </Grid>
        </Grid>
    )
}

export default inject("authenProv")(observer(Register)); 
