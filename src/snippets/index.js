export const snippets = {
  dfs: `
  DFS = (key, rev = false) => {
    let dfs = [];
    this.stack.push(key);
    while (1) {
      if (this.stack.length === 0) {
        // array empty or does not exist
        break;
      }
      const popped = this.stack.pop();

      dfs.push(popped);
      if (this.graph[popped] === undefined) {
      } else {
        let childData;
        if (rev) childData = this.graph[popped].slice().reverse();
        else childData = this.graph[popped];
        for (let i of childData) {
          this.stack.push(i);
        }
      }
    }
    return dfs;
  };`,
  bfs: `
  BFS = (key) => {
    this.queue.push(key);
    let bfs = [];
    while (1) {
      if (this.queue.length === 0) {
        // array empty or does not exist
        break;
      }
      const popped = this.queue.shift();
      bfs.push(popped);

      if (this.graph[popped] === undefined) {
      } else {
        const childData = this.graph[popped];
        for (let i of childData) {
          this.queue.push(i);
        }
      }
    }
    return bfs;
  };`,
  graphClass: `
  class Graph {
    constructor() {
      this.graph = [];
      this.stack = [];
      this.queue = [];
    }
    addEdge = (node, newNode) => {
      if (this.graph[node] === undefined) this.graph[node] = [];
      this.graph[node].push(newNode);
    };
  
    DFS = (key, rev = false) => {
      let dfs = [];
      this.stack.push(key);
      while (1) {
        if (this.stack.length === 0) {
          // array empty or does not exist
          break;
        }
        const popped = this.stack.pop();
  
        dfs.push(popped);
        if (this.graph[popped] === undefined) {
        } else {
          let childData;
          if (rev) childData = this.graph[popped].slice().reverse();
          else childData = this.graph[popped];
          for (let i of childData) {
            this.stack.push(i);
          }
        }
      }
      return dfs;
    };
    BFS = (key) => {
      this.queue.push(key);
      let bfs = [];
      while (1) {
        if (this.queue.length === 0) {
          // array empty or does not exist
          break;
        }
        const popped = this.queue.shift();
        bfs.push(popped);
  
        if (this.graph[popped] === undefined) {
        } else {
          const childData = this.graph[popped];
          for (let i of childData) {
            this.queue.push(i);
          }
        }
      }
      return bfs;
    };
  }
  `,
  water_jug: `
  class WaterJug():
    def __init__(self,x,y,target):
        self.capX = x
        self.capY = y
        self.x = 0
        self.y = 0
        self.target = target
        self.path = []
        
    def rule(self,x, d=0):
        w.printVolume()
        print('Rule {}'.format(x),end=' ')
        # fill capX gallon jug completely
        if(x==1):
                if self.x<self.capX:
                    self.x=self.capX
                print('Fill jugX completely')
        # fill capY gallon jug completely
        elif (x==2):
                if self.y<self.capY:
                    self.y=self.capY
                print('Fill jugY completely')
        # pour some part from x jug
        elif(x==3):
                if self.x>0:
                    self.x= self.x - d
                print('Pour Some part D from X jug')
        # pour some part from y jug        
        elif(x==4):
                if self.y>0:
                    self.y = self.y - d
                
                print('Pour Some part D from Y jug')
        # empty jug x        
        elif(x==5):
                if self.x>0:
                    self.x=0
                print('Empty jugX')
        # empty jug y        
        elif(x==6):
                if self.y>0:
                    self.y=0
                print('Empty jugY')
        # pour water from y jug to fill x jug        
        elif(x==7):
                if self.x+self.y < self.capX+self.capY:
                    self.y= self.y-(self.capX-self.x)
                    self.x = self.capX
                print('Pour from jugY to fill jugX')
        #pour water from x jug to fill y jug
        elif(x==8):
                if self.x+self.y < self.capX+self.capY:
                    self.x=self.x-(self.capY-self.y)
                    self.y = self.capY
                print('Pour from jugX to fill jugY')
        # pour all water from y jug to x jug
        elif(x==9):
                if self.x+self.y < self.capX:
                    self.x= self.x+self.y
                    self.y=0
                print('Pour all from jugY to jugX')
        #pour all water from x jug to y jug
        elif(x==10):
                if self.x+self.y < self.capY:
                    self.x=0
                    self.y=self.x+self.y     
                    print('Pour all from jugX to jugY')

        w.printVolume()
        print('---')
        self.appendPath()
             
    def printVolume(self):
        print('[JugX={}, JugY={}]'.format(self.x, self.y))
    
    # print each state leading upto solution
    def printPath(self):
        for state in self.path:
            if state==self.path[-1]:
                print(f'[JugX:{state[0]}, JugY:{state[1]}]')
                continue
            print(f'[JugX:{state[0]}, JugY:{state[1]}]', end='->')
    
    # add new state generated to path
    def appendPath(self):
        self.path.append([self.x, self.y])
    
    def reset(self):
        self.x=0
        self.y=0
        self.path=[]
        
    def pour(self): 
        self.reset()
        yJug= self.capY
        xJug=0
#         self.rule(2)
        step = 1
        while ((yJug  is not self.target) and (xJug is not self.target)): 
            print('({},{})'.format(xJug, yJug))
            

            if(yJug < (self.capX-xJug)):
                temp = yJug
#                 self.rule(9)
            else:
                temp = (self.capX-xJug)
#                 self.rule(7)
            xJug = xJug + temp
            yJug = yJug - temp

#             temp = min(yJug, self.capX-xJug) 
#             xJug = xJug + temp 
#             yJug = yJug - temp 

            print('({},{})'.format(xJug, yJug))

            step =  step + 1
            if ((yJug == self.target) or (xJug == self.target)): 
                break

            if yJug == 0: 
                yJug = self.capY
#                 self.rule(2)
                step =  step + 1

            if xJug == self.capX: 
                xJug = 0
#                 self.rule(5)
                step =  step + 1
    
    # Solve using rules
    def pourRule(self):
        self.reset()
        self.rule(2)
        step = 1
        while(1):
            if(self.y==self.target or self.x==self.target):
                break
            
            if(self.y < (self.capX-self.x)):
                self.rule(9)
            else:
                self.rule(7)
            
            step=step+1
            if(self.y==self.target or self.x==self.target):
                break
            
            if self.y==0:
                self.rule(2)
                step = step + 1
            
            if self.x==self.capX:
                self.rule(5)
                step = step+1
        return step 

    # Reverse the capacity of jugs
    def reverseJugCapacity(self):
        self.capX, self.capY = self.capY, self.capX
    
    # Solve  for both x,y and y,x conditions 
    def solve(self):
        print(f'With JugXCapacity {self.capX} and JugYCapacity {self.capY}',end='\\n\\n\\n')
        print(f'Total steps to solve : {self.pourRule()}',end='\\n\\n')
        self.printPath()
        print('*'*100)
        print(f'With JugXCapacity {self.capX} and JugYCapacity {self.capY}',end='\\n\\n\\n')
        self.reverseJugCapacity()
        print(f'Total steps to solve : {self.pourRule()}',end='\\n\\n')
        self.printPath()
  `,
  water_jug_pour_rule: `
  # Solve using rules
  def pourRule(self):
      self.reset()
      self.rule(2)
      step = 1
      while(1):
          if(self.y==self.target or self.x==self.target):
              break
          
          if(self.y < (self.capX-self.x)):
              self.rule(9)
          else:
              self.rule(7)
          
          step=step+1
          if(self.y==self.target or self.x==self.target):
              break
          
          if self.y==0:
              self.rule(2)
              step = step + 1
          
          if self.x==self.capX:
              self.rule(5)
              step = step+1
      return step 
  `,
  water_jug_rules: `
  def rule(self,x, d=0):
    w.printVolume()
    print('Rule {}'.format(x),end=' ')
    # fill capX gallon jug completely
    if(x==1):
            if self.x<self.capX:
                self.x=self.capX
            print('Fill jugX completely')
    # fill capY gallon jug completely
    elif (x==2):
            if self.y<self.capY:
                self.y=self.capY
            print('Fill jugY completely')
    # pour some part from x jug
    elif(x==3):
            if self.x>0:
                self.x= self.x - d
            print('Pour Some part D from X jug')
    # pour some part from y jug        
    elif(x==4):
            if self.y>0:
                self.y = self.y - d
            
            print('Pour Some part D from Y jug')
    # empty jug x        
    elif(x==5):
            if self.x>0:
                self.x=0
            print('Empty jugX')
    # empty jug y        
    elif(x==6):
            if self.y>0:
                self.y=0
            print('Empty jugY')
    # pour water from y jug to fill x jug        
    elif(x==7):
            if self.x+self.y < self.capX+self.capY:
                self.y= self.y-(self.capX-self.x)
                self.x = self.capX
            print('Pour from jugY to fill jugX')
    #pour water from x jug to fill y jug
    elif(x==8):
            if self.x+self.y < self.capX+self.capY:
                self.x=self.x-(self.capY-self.y)
                self.y = self.capY
            print('Pour from jugX to fill jugY')
    # pour all water from y jug to x jug
    elif(x==9):
            if self.x+self.y < self.capX:
                self.x= self.x+self.y
                self.y=0
            print('Pour all from jugY to jugX')
    #pour all water from x jug to y jug
    elif(x==10):
            if self.x+self.y < self.capY:
                self.x=0
                self.y=self.x+self.y     
                print('Pour all from jugX to jugY')

    w.printVolume()
    print('---')
    self.appendPath()
  `,
  water_jug_solution: `
  w = WaterJug(5,3,4)
  w.solve()
  
  OUTPUT:
    With JugXCapacity 5 and JugYCapacity 3


    [JugX=0, JugY=0]
    Rule 2 Fill jugY completely
    [JugX=0, JugY=3]
    ---
    [JugX=0, JugY=3]
    Rule 9 Pour all from jugY to jugX
    [JugX=3, JugY=0]
    ---
    [JugX=3, JugY=0]
    Rule 2 Fill jugY completely
    [JugX=3, JugY=3]
    ---
    [JugX=3, JugY=3]
    Rule 7 Pour from jugY to fill jugX
    [JugX=5, JugY=1]
    ---
    [JugX=5, JugY=1]
    Rule 5 Empty jugX
    [JugX=0, JugY=1]
    ---
    [JugX=0, JugY=1]
    Rule 9 Pour all from jugY to jugX
    [JugX=1, JugY=0]
    ---
    [JugX=1, JugY=0]
    Rule 2 Fill jugY completely
    [JugX=1, JugY=3]
    ---
    [JugX=1, JugY=3]
    Rule 9 Pour all from jugY to jugX
    [JugX=4, JugY=0]
    ---
    Total steps to solve : 8

    [JugX:0, JugY:3]-> [JugX:3, JugY:0]-> [JugX:3, JugY:3]-> [JugX:5, JugY:1]->
    [JugX:0, JugY:1]-> [JugX:1, JugY:0]-> [JugX:1, JugY:3]-> [JugX:4, JugY:0]
    *****************************************************
    With JugXCapacity 5 and JugYCapacity 3


    [JugX=0, JugY=0]
    Rule 2 Fill jugY completely
    [JugX=0, JugY=5]
    ---
    [JugX=0, JugY=5]
    Rule 7 Pour from jugY to fill jugX
    [JugX=3, JugY=2]
    ---
    [JugX=3, JugY=2]
    Rule 5 Empty jugX
    [JugX=0, JugY=2]
    ---
    [JugX=0, JugY=2]
    Rule 9 Pour all from jugY to jugX
    [JugX=2, JugY=0]
    ---
    [JugX=2, JugY=0]
    Rule 2 Fill jugY completely
    [JugX=2, JugY=5]
    ---
    [JugX=2, JugY=5]
    Rule 7 Pour from jugY to fill jugX
    [JugX=3, JugY=4]
    ---
    Total steps to solve : 6

    [JugX:0, JugY:5]->[JugX:3, JugY:2]->[JugX:0, JugY:2]
    ->[JugX:2, JugY:0]->[JugX:2, JugY:5]->[JugX:3, JugY:4]

  `,
};
