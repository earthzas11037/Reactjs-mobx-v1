import React, { useEffect } from 'react';
import { inject, observer } from "mobx-react";
import Grid from '@material-ui/core/Grid';


function Home(props) {

    useEffect(() => {
    },[] )


    return(
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
        >
            <Grid xs={12} md={10}>
               
            </Grid>
        </Grid>
    )
}


export default inject("authenProv")(observer(Home)); 
