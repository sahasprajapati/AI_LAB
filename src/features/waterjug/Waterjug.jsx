import React, { forwardRef, useEffect, useRef, useState } from "react";
import { TweenMax } from "gsap";
import { Linear } from "gsap/gsap-core";
import { useImperativeHandle } from "react";

const WaterjugComponent = forwardRef((props, ref) => {
  const { id, capacity = 3, height = 160, width = 160 } = props;

  const [waterVolume, setWaterVolume] = useState(0);
  const [emptyWaterVolume, setEmptyWaterVolume] = useState(capacity);
  const [toggle, setToggle] = useState(0);
  const [toggleRender, setToggleRender] = useState(false);
  const [waterLevel, setWaterLevel] = useState(0);
  const [temporaryLevel, setTemporaryLevel] = useState(0);
  useImperativeHandle(ref, () => ({
    fill(x) {
      console.log("Fill");
      setWaterVolume(x);
    },
    drop(x) {
      console.log("empty");
      setEmptyWaterVolume(x);
    },
    toggleButton(x) {
      setToggle(x);
      setToggleRender(!toggleRender);
    },
    empty() {
      setToggleRender(!toggleRender);
      setToggle(2);
      setEmptyWaterVolume(temporaryLevel);
    },
  }));

  useEffect(() => {
    if (toggle === 1) {
      console.log("IN RISE id " + id);
      console.log(waterLevel, waterVolume);
      const rise = waterLevel + waterVolume;

      setWaterLevel(rise);
      const waterRatio = (temporaryLevel + waterVolume) / capacity;
      const previousRatio = temporaryLevel / capacity;
      setTemporaryLevel(rise);
      // "Wave" animation
      TweenMax.fromTo(
        ".water-fill" + id,
        0.8,
        {
          attr: {
            x: -400,
          },
        },
        {
          attr: {
            x: 0,
          },
          repeat: -1,
          ease: Linear.easeNone,
        }
      );

      // "Fill up" animation
      TweenMax.fromTo(
        ".water-fill" + id,
        3,
        {
          attr: {
            y: 378 - 378 * previousRatio,
            height: 440 * previousRatio,
          },
        },
        {
          attr: {
            y: 378 - 378 * waterRatio,
            height: 440 * waterRatio,
          },
          ease: Linear.easeNone,
        }
      );
    } else if (toggle === 2) {
      console.log("IN DROP id " + id);
      console.log(waterLevel, emptyWaterVolume);
      const drop = waterLevel - emptyWaterVolume;
      setWaterLevel(drop);

      const previousRatio = temporaryLevel / capacity;
      const emptyWaterRatio = (temporaryLevel - emptyWaterVolume) / capacity;
      setTemporaryLevel(drop);
      // "Wave" animation
      TweenMax.fromTo(
        ".water-fill" + id,
        0.8,
        {
          attr: {
            x: -400,
          },
        },
        {
          attr: {
            x: 0,
          },
          repeat: -1,
          ease: Linear.easeNone,
        }
      );

      // "Drop water" animation
      TweenMax.fromTo(
        ".water-fill" + id,
        3,
        {
          attr: {
            y: 378 - 378 * previousRatio,
            height: 440 * previousRatio,
          },
        },
        {
          attr: {
            y: 378 - 378 * emptyWaterRatio,
            height: 440 * emptyWaterRatio,
          },
          ease: Linear.easeNone,
        }
      );
    }
  }, [toggleRender]);

  return (
    <>
      <svg
        id="Layer_1"
        height={height}
        width={width}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 378 378"
      >
        <defs>
          <pattern
            id="water"
            width=".25"
            height="1.1"
            patternContentUnits="objectBoundingBox"
          >
            <path
              fill="#4A90E2"
              d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
            />
          </pattern>

          <g id="text">
            <circle cx="50%" cy="50%" r="50%" />
          </g>

          <mask id="text-mask">
            <use x="0" y="0" href="#text" opacity="1" fill="#ffffff" />
          </mask>
        </defs>

        <use x="0" y="0" href="#text" fill="#222" />

        <rect
          className={"water-fill" + id}
          mask="url(#text-mask)"
          fill="url(#water)"
          x="400"
          y="0"
          width="1600"
          height="100%"
        />
        <text x="25%" y="50%" fill="white" fontSize="5em">
          {`${waterLevel}L/${capacity}L`}
        </text>
      </svg>
    </>
  );
});

export default WaterjugComponent;
