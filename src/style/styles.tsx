import styled from "@emotion/styled";
import { grid } from "@mui/system";
import Image from "/images/fruits-mix-background-homepage.jpeg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;


export const styles = {
  

    paperContainer: {
      height: '100%',
      width: '100%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
  },
    img: {
      backgroundSize: "cover",
      width: "90%",
      heigh: "100%",
      borderRadius: "0 0 20px 20px",
    },
    button: {
      borderRadius: "0 0 20px 20px",
    },
    product: {
      height: "auto",
      alignItems: "center",
      justtifyContent: "center",
      maxwidth: "100%",
      border: "1px solid #ccc",
      borderRadius: "0 0 20px 20px",
    },
    imageContainer: {
      height: "auto",
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

export const cartContainer = {
  paperContainer: {
    height: 'auto',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%"
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
