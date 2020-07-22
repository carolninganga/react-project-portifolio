import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./style.module.css";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProjectCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            animate__fadeInLeftBig
            image={props.img}
            title={props.title}
          />
          <CardContent>
            <Typography
              class="animate__animated animate__zoomIn"
              gutterBottom
              variant="h6"
              component="h4"
            >
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            id={styles.linkBtn}
            a
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="primary"
            href={props.github}
          >
            GitHub
          </Button>
          <Button
            id={styles.linkBtn}
            a
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="primary"
            href={props.site}
          >
            Live Site
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default ProjectCard;



