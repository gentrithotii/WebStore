import React from "react";
import Paper from "@material-ui/core/Paper";
import {homeContainer} from "../style/styles"


export default class Main extends React.Component{
    render(){
        return(
            <>
            <Paper id="order-placed" style={homeContainer.paperContainer}>
                <div className="content rounded-border">
                    <h2>An order is placed.
                        <h5>Thank you for your shopping with us.</h5>
                     </h2>
                </div>
            </Paper>
            </>
        )
    }
}