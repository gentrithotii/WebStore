import React from "react";
import Paper from "@material-ui/core/Paper";

const styles = {
    aboutUsContainer: {
        background: "#F0EAEA",
        height: "10rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};

export default class Page extends React.Component{
    render(){
        return(
            <Paper style={styles.aboutUsContainer}>
                <footer><p>Online Fruit & Veg © 2022 <br /> Powered by Shopify</p></footer>
            </Paper>
        )
    }
}