import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { css } from "emotion";
import { useBreakpoint } from "../utils/UseWindowsSize";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import postgresql from "../assets/postgresql.svg";

const useStyles = makeStyles({
  card: {
    maxWidth: 500
  },
  media: {
    height: 140
  }
});

export const Technologies = () => {
  const classes = useStyles();
  const { sm, md } = useBreakpoint();

  const containerStyle = css`
    display: flex;
    flex-direction: ${sm || md ? "column" : "row"};
    justify-content: space-evenly;
    padding-top: 2vh;
    padding-bottom: 2vh;
  `;
  const font = css``;
  return (
    <div style={{ textAlign: "center", paddingTop: "2vh" }}>
      <Typography gutterBottom variant="h5" component="h2">
        Some of the technologies I work with:
      </Typography>
      <div className={containerStyle}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={react} title="React" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                React
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes. Declarative views make your code more
                predictable and easier to debug.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a target="_blank" href="https://reactjs.org">
              <Button size="small" color="primary">
                Learn More
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={nodejs}
              title="NodeJS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                NodeJS
              </Typography>
              <Typography
                className={font}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                As an asynchronous event-driven JavaScript runtime, Node.js is
                designed to build scalable network applications. In the
                following "hello world" example, many connections can be handled
                concurrently. Upon each connection, the callback is fired, but
                if there is no work to be done, Node.js will sleep.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a target="_blank" href="https://nodejs.org/en/">
              <Button size="small" color="primary">
                Learn More
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={postgresql}
              title="Postgresql"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Postgresql
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                PostgreSQL is a powerful, open source object-relational database
                system with over 30 years of active development that has earned
                it a strong reputation for reliability, feature robustness, and
                performance.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a target="_blank" href="https://www.postgresql.org">
              <Button size="small" color="primary">
                Learn More
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
