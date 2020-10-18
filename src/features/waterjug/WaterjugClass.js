class WaterJugClass {
  constructor(x=3, y=5, target=4) {
    this.capX = x;
    this.capY = y;
    this.x = 0;
    this.y = 0;
    this.target = target;
    this.path = [];
  }
  rule(x, d = 0) {
    this.printVolume();
    console.log(`Rule ${x}`);
    switch (x) {
      case 1:
        if (this.x < this.capX) {
          this.x = this.capX;
        }
        console.log("Fill jugX completely");
        break;
      // fill capY gallon jug completely
      case 2:
        if (this.y < this.capY) {
          this.y = this.capY;
        }
        console.log("Fill jugY completely");
        break;

      // pour some part from x jug
      case 3:
        if (this.x > 0) {
          this.x = this.x - d;
        }
        console.log("Pour Some part D from X jug");
        break;
      // pour some part from y jug
      case 4:
        if (this.y > 0) {
          this.y = this.y - d;
        }
        console.log("Pour Some part D from Y jug");
        break;
      // empty jug x
      case 5:
        if (this.x > 0) {
          this.x = 0;
        }
        console.log("Empty jugX");
        break;
      // empty jug y
      case 6:
        if (this.y > 0) {
          this.y = 0;
        }
        console.log("Empty jugY");
        break;
      // pour water from y jug to fill x jug
      case 7:
        if (this.x + this.y < this.capX + this.capY) {
          this.y = this.y - (this.capX - this.x);
          this.x = this.capX;
        }
        console.log("Pour from jugY to fill jugX");
        break;
      //pour water from x jug to fill y jug
      case 8:
        if (this.x + this.y < this.capX + this.capY) {
          this.x = this.x - (this.capY - this.y);
          this.y = this.capY;
        }
        console.log("Pour from jugX to fill jugY");
        break;
      // pour all water from y jug to x jug
      case 9:
        if (this.x + this.y < this.capX) {
          this.x = this.x + this.y;
          this.y = 0;
        }
        console.log("Pour all from jugY to jugX");
        break;
      //pour all water from x jug to y jug
      case 10:
        if (this.x + this.y < this.capY) {
          this.x = 0;
          this.y = this.x + this.y;
        }
        console.log("Pour all from jugX to jugY");
        break;
      default:
        console.log("Unidentified rule");
    }

    this.printVolume();
    console.log("---");
    this.appendPath();
  }
  printVolume = () => {
    console.log(`[JugX=${this.x}, JugY=${this.y}]`);
  };
  // // print each state leading upto solution
  printPath = () => {
    for (let state of this.path) {
      if (state === this.path[-1]) {
        console.log(`[JugX:{${state[0]}, JugY:${state[1]}]`);
        continue;
        // console.log("[JugX){{state[0]}, JugY){{state[1]}]");
      }
    }
  };
  // // add new state generated to path
  appendPath = () => {
    this.path.push([this.x, this.y]);
  };
  reset = () => {
    this.x = 0;
    this.y = 0;
    this.path = [];
  };
  pour = () => {
    this.reset();
    let yJug = this.capY;
    let xJug = 0;
    this.rule(2)
    let step = 1;
    while (!this.target !== yJug && !this.target !== xJug) {
      console.log(`(${xJug},${yJug})`);
      let temp = 0;
      if (yJug < this.capX - xJug) {
        temp = yJug;

           this.rule(9)
      } else {
        temp = this.capX - xJug;
        this.rule(7)
      
      }
      xJug = xJug + temp;
      yJug = yJug - temp;

      // //             temp = min(yJug, this.capX-xJug)
      // //             xJug = xJug + temp
      // //             yJug = yJug - temp

      console.log(`(${xJug},${yJug})`);

      step = step + 1;
      if (yJug === this.target || xJug === this.target) {
        break;
      }
      if (yJug === 0) {
        yJug = this.capY;
        this.rule(2)
        step = step + 1;
      }
      if (xJug === this.capX) {
        xJug = 0;
        this.rule(5)
        step = step + 1;
      }
    }
  };
  //  Solve using rules
  pourRule = () => {
    this.reset();
    this.rule(2);
    let step = 1;
    while (1) {
      if (this.y === this.target || this.x === this.target) {
        break;
      }
      if (this.y < this.capX - this.x) {
        this.rule(9);
      } else {
        this.rule(7);
      }
      step = step + 1;
      if (this.y === this.target || this.x === this.target) {
        break;
      }
      if (this.y === 0) {
        this.rule(2);
        step = step + 1;
      }
      if (this.x === this.capX) {
        this.rule(5);
        step = step + 1;
      }
    }

    return step;
  };
  // Reverse the capacity of jugs
  reverseJugCapacity = () => {
    const temp = this.capX;

    this.capX = this.capY;
    this.capY = temp;
  };
  // Solve  for both x,y and y,x conditions
  solve = () => {
    console.log(`With JugXCapacity ${this.capX} and JugYCapacity ${this.capY}`);
    console.log(`Total steps to solve  ${this.pourRule()}`);
    this.printPath();
    console.log("*" * 100);
    console.log(`With JugXCapacity ${this.capX} and JugYCapacity ${this.capY}`);
    this.reverseJugCapacity();
    console.log(`Total steps to solve  ${this.pourRule()}`);
    this.printPath();
  };
}

export default WaterJugClass;
