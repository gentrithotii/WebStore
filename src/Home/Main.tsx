import React from "react";
import Paper from "@material-ui/core/Paper";
import Image from "/images/fruits-mix-background-homepage.jpeg";

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '34.25rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
    },
    aboutUsContainer: {
        backgroundColor: "#302F2D",
        height: "36rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};

export default class Main extends React.Component{
    render(){
        return(
            <>
            <Paper style={styles.paperContainer}>
                <div className="content rounded-border">
                    <h2>Fresh, Tasty, Quality.
                        <h5>We are an independent fruit & vegetable trader with over 40 years experience.</h5>
                     </h2>
                </div>
            </Paper>
            <Paper style={styles.aboutUsContainer}>
                <div className="about-us rounded-border">
                    <h2>Who We Are<br/><h5 className="h5-opacity">We founded The FruitGuys in the kitchen of our one-bedroom apartment in San Francisco in 1998 with the idea to help companies provide healthy options to employees during their workday. Today we are a proud B Corp and one of the most trusted providers of farm-fresh fruit, produce, and snacks to businesses, schools, and homes across the country. We are still family owned and operated and remain committed to our mission of fighting hunger in our communities and supporting small farms and agricultural sustainability. 
                    <br/><br /> -Chris Mittelstaedt, Founder & CEO</h5></h2>
                </div>
            </Paper>
            </>
        )
    }
}