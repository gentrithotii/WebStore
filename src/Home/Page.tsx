import React from "react";
import Paper from "@material-ui/core/Paper";
import Image from "/images/fruits-mix-background-homepage.jpeg";


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '31.25rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100%'
    }
};

export default class Page extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
            
            </Paper>
        )
    }
}