import {
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePreset,
  selectPreset,
} from "../features/aStarSearch/aStarSearchSlice";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const SettingsModal = () => {
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const preset = useSelector(selectPreset);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        startIcon={<InfoOutlined />}
        onClick={() => setOpen(true)}
        style={{ outline: 0 }}
        variant="contained"
        color="secondary"
      >
        Info
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="A Star Pathfinding React Demo"
      >
        <Container style={modalStyle} className={classes.paper}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item>
              <Typography variant="h5">How does it work ?</Typography>
            </Grid>
            <Grid item>
              <List>
                <ListItem>
                  <Typography>Press start to compute the path</Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Hover over the cells to see more details about the result
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Use the set start/end and draw button to change the
                    obstacles
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <Typography variant="h5">Change Pattern</Typography>
            </Grid>
            <Grid item container spacing={2}>
              {[
                { preset: "a-star-text", text: "A-Star Text" },
                { preset: "labyrinth", text: "Labyrinth" },
                { preset: "random", text: "Random" },
                { preset: "blank", text: "Blank Canvas" },
              ].map((item) => (
                <Grid item key={item.preset}>
                  <Button
                    variant="contained"
                    disabled={preset === item.preset}
                    onClick={() =>
                      dispatch(changePreset({ preset: item.preset }))
                    }
                    style={{ outline: 0 }}
                  >
                    {item.text}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="h5">Ressources I found useful</Typography>
            </Grid>
            <Grid item>
              <List>
                <ListItem button>
                  <Link
                    color="secondary"
                    variant="body2"
                    href="https://www.youtube.com/watch?v=-L-WgKMFuhE"
                  >
                    Sebastian Lague's Youtube Video
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link
                    color="secondary"
                    variant="body2"
                    href="https://briangrinstead.com/blog/astar-search-algorithm-in-javascript-updated/"
                  >
                    Brian Grinstead's blog article on A* implementation and
                    optimization.
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link
                    color="secondary"
                    variant="body2"
                    href="http://www.codeblocq.com/2020/01/A-Star-Pathfinding-React-Demo/"
                  >
                    Jonathan Klughertz's blog on implementation of a* in react.
                    Design and code concept from the blog demo.
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </>
  );
};

export default SettingsModal;
