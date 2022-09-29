import Image from "/images/fruits-mix-background-homepage.jpeg";

export const styles = {
  
    paperContainer: {
      height: '100%',
      width: 'auto',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#29251B",
  },
    img: {
      backgroundSize: "cover",
      width: "auto",
      height: "200px"
    },
    button: {
      borderRadius: "0 0 20px 20px",
    },
    product: {
      height: "auto",
      alignItems: "center",
      justtifyContent: "center",
      maxwidth: "100%",
    },
    freshFruits: {
        backgroundColor: "#F0EAEA",
        height: "8rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }, 
    headerContent: {
      opacity: 0.5,
      marginTop: "80px",
      color: "black",
      fontSize: "2rem",
    }
}

export const homeContainer = {
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
