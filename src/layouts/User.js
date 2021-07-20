import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Sidebar from '../components/Sidebar';
import Navibar from '../components/Navibar'
import Footer from '../components/Footer'
import Home from '../views/Home'


const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        padding: 20,
        marginTop: 30,
        marginBottom: 60,
        minHeight:800
    }
}));

function User(props) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }


    useEffect(() => {
    }, [])

    return (
        <div>
            <Sidebar
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
            />
            <Navibar
                handleDrawerToggle={handleDrawerToggle}
                history={props.history}
            />
                <main className={classes.content} >
                    <div className={classes.toolbar} />
                        {
                            props.authenProv.token? (
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Redirect to="/" />
                                </Switch>
                            ) : (
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Redirect to="/" />
                                </Switch>
                            )
                        }
                </main>
            <Footer/>
        </div>
    )

}

export default inject("authenProv")(observer(User)); 