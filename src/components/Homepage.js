import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../context";

const Homepage = (props) => {
  const classes = useStyles();

  const { data } = useContext(UsersContext);
//   console.log(data);

  return (
    <Container maxWidth="md" className={classes.root}>
      {data
        ? data.map((item, index) => (
            <Card key={index} className={classes.cardContainer}>
                  <Avatar alt={item.name} src="/broken-image.jpg" className={classes.avatar} />
                <CardContent>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="body1">{item.username}</Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    {item.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/userdetails/${item.id}`}>
                    MORE DETAILS
                  </Link>
                </CardActions>
            </Card>
          ))
        : "Loading"}
    </Container>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  cardContainer: {
    width: "250px",
    margin: "15px",
    padding: "5px"
  },
  avatar: {
      backgroundColor: '#f44336'
  }
});

export default Homepage;
