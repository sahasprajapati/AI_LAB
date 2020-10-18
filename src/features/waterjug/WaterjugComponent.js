import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Waterjug from "./Waterjug";
import WaterJugClass from "./WaterjugClass";
import {
  addCapacityX,
  addCapacityY,
  addTarget,
  computePath,
  selectCapacityX,
  selectCapacityY,
  selectPath,
  reset,
  stop,
  selectStopAnimation,
  selectTarget,
} from "./waterjugSlice";

const water = new WaterJugClass(7, 5, 1);

water.pourRule();
const WaterjugComponent = () => {
  const capX = useSelector(selectCapacityX);
  const capY = useSelector(selectCapacityY);
  const targt = useSelector(selectTarget);
  const path = useSelector(selectPath);
  const stop = useSelector(selectStopAnimation);
  const refX = useRef(null);
  const refY = useRef(null);

  const [capacityX, setCapacityX] = useState(0);
  const [capacityY, setCapacityY] = useState(0);

  const [jugX, setJugX] = useState(0);
  const [jugY, setJugY] = useState(0);
  const [prevJugX, setPrevJugX] = useState(0);
  const [prevJugY, setPrevJugY] = useState(0);

  const [target, setTarget] = useState(0);

  const dispatch = useDispatch();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const waitLoop = async () => {
    var tempX = 0;
    var tempY = 0;
    for (var i of path) {
      console.log(i);
      const x = i[0];
      const y = i[1];
      setJugX(x);
      setJugY(y);
      setPrevJugX(tempX);
      setPrevJugY(tempY);
      console.log(x, y);
      console.log(tempX, tempY);
      if (x > tempX) {
        refX.current.fill(x - tempX);
        refX.current.toggleButton(1);
      } else if (x < tempX) {
        refX.current.drop(tempX - x);
        refX.current.toggleButton(2);
      }
      // await sleep(3000);
      if (y > tempY) {
        refY.current.fill(y - tempY);
        refY.current.toggleButton(1);
      } else if (y < tempY) {
        refY.current.drop(tempY - y);
        refY.current.toggleButton(2);
      }

      tempX = x;
      tempY = y;
      if (stop) {
        break;
      } else {
        await sleep(4000);
      }
    }
  };
  useEffect(() => {
    if (refX.current !== null && refY.current !== null) {
      if (path.length === 0) {
        console.log("empty");
        refX.current.empty();
        refY.current.empty();
      } else {
        try {
          waitLoop();
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, [path]);

  const handleSubmit = (functionArguement, parameters) => {
    dispatch(functionArguement(parameters));
  };
  return (
    <Card>
      <CardContent>
        <Grid
          container
          xl={12}
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            container
            xs={12}
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Card>
              <CardContent>
                <Grid
                  item
                  container
                  xs={12}
                  spacing={2}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid xs={12} sm={6} item container direction="column">
                    <Grid item>
                      <Waterjug
                        id={1}
                        height="200"
                        width="200"
                        ref={refX}
                        capacity={capX}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          refX.current.fill(2);
                          refX.current.toggleButton(1);
                        }}
                      >
                        Fill 2L
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          refX.current.drop(2);
                          refX.current.toggleButton(2);
                        }}
                      >
                        Drop 2L
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid xs={12} sm={6} item container direction="column">
                    <Grid item>
                      <Waterjug
                        id={2}
                        height="200"
                        width="200"
                        ref={refY}
                        capacity={capY}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          refY.current.fill(2);
                          refY.current.toggleButton(1);
                        }}
                      >
                        Fill 2L
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          refY.current.drop(2);
                          refY.current.toggleButton(2);
                        }}
                      >
                        Drop 2L
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography>Jug Y Capacity : {capX}</Typography>
            </Grid>
            <Grid item>
              <Typography>Jug X Capacity : {capY}</Typography>
            </Grid>
            <Grid item>
              <Typography>Target : {targt}</Typography>
            </Grid>
          </Grid>{" "}
          <Grid
            item
            xs={12}
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <TextField
                label="Capacity For JUG X"
                plaardceholder="X Litre"
                variant="outlined"
                aria-label="Capacity Fot jug X"
                value={capacityX}
                type="number"
                onChange={(e) => setCapacityX(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter")
                    handleSubmit(addCapacityX, {
                      capacityX: parseInt(capacityX),
                    });
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Capacity For JUG Y"
                plaardceholder="Y Litre"
                variant="outlined"
                aria-label="Capacity Fot jug Y"
                value={capacityY}
                type="number"
                onChange={(e) => setCapacityY(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter")
                    handleSubmit(addCapacityY, {
                      capacityY: parseInt(capacityY),
                    });
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Target"
                plaardceholder="X Litre"
                variant="outlined"
                aria-label="Target"
                value={target}
                type="number"
                onChange={(e) => setTarget(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter")
                    handleSubmit(addTarget, { target: parseInt(target) });
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  dispatch(reset());

                  refX.current.empty();
                  refY.current.empty();
                  dispatch(computePath());
                }}
              >
                Compute Path
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  dispatch(reset());
                }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {path.length > 0 ? (
              <>
                <Grid item xs={6}>
                  <Typography align="center">Current Transfer</Typography>
                  <Typography align="center">{`In JugX: ${prevJugX} -> ${jugX}`}</Typography>
                  <Typography align="center">{`In JugY: ${prevJugY} -> ${jugY}`}</Typography>
                </Grid>
              </>
            ) : null}

            <Grid
              item
              container
              spacing={2}
              xs={6}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography>Steps Involved</Typography>
              </Grid>
              {path.length > 0
                ? path.map((value, index) => {
                    return (
                      <Grid item key={index}>
                        <Typography>{`JugX: ${value[0]}L, JugY:${value[1]}L`}</Typography>
                      </Grid>
                    );
                  })
                : null}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default WaterjugComponent;
