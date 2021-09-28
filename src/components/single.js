import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import { useParams } from "react-router-dom";
//MaterialUI
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: "15px",
    padding: "7px 30px",
    borderRadius: "5px",
    margin: "5px 10px",
  
  },
}));

export default function Post() {
  const { id } = useParams();
  const classes = useStyles();

  const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    axiosInstance.get(`http://localhost:8000/api/ownpost/${id}`).then((res) => {
      setData({ posts: res.data });
      console.log(res.data);
    });
  }, [setData]);

  return (
    <Container component="main" maxWidth="md">
      <Container maxWidth="sm" className={classes.buttons}>
        <Link className={classes.Button}
          variant="contained"
          color="primary"
          href={'/edit/' + id}
        >
          Update Post
        </Link>
        <Link className={classes.Button}
          variant="contained"
          color="primary"
          href={'/delete/' + id}
        >
          Delete Post
        </Link>
      </Container>

      <CssBaseline />
      <div className={classes.paper}></div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {data.posts.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {data.posts.content}
          </Typography>
        </Container>
      </div>
    </Container>
  );
}
