import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[400]
        : theme.palette.grey[700],
  },
  postTitle: {
    fontSize: "16px",
    textAlign: "left",
  },
  postText: {
    display: "flex",
    justifyContent: "left",
    alignItems: "baseline",
    fontSize: "12px",
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
  Button: {
		margin: "15px",
	}
}));

const Posts = (props) => {
  const { posts } = props;
  console.log(props);
  const classes = useStyles();
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Button className={classes.Button} href={"create/"} variant="contained" color="primary">
          New Post
        </Button>
        
        <Grid container spacing={5} alignItems="flex-end">
        
          {posts.map((post) => {
            return (
              // Enterprise card is full width at sm breakpoint

              <Grid item key={post.id} xs={12} md={4}>
                <Card className={classes.card}>
                  <Link
                    color="textPrimary"
                    href={"ownpost/" + post.id}
                    className={classes.link}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.postTitle}
                    >
                      {post.title.substr(0, 50)}
                    </Typography>
                    <div className={classes.postText}>
                      <Typography color="textSecondary">
                        {post.content.substr(0, 60)}...
                      </Typography>
                    </div>
                    <div className={classes.postTitle}>
                    <Typography color="textSecondary">
                    
                        {post.date_posted.substr(0, 10)}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Posts;
