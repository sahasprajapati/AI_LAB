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
};
