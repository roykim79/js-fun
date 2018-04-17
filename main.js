var Stack = {
  data: [],

  print: function () {
    return this.data;
  },

  push: function (x) {
    //your code here (adds x to the top of the stack)
    this.data[this.data.length] = x;
  },

  isEmpty: function () {
    // your code here (tests if the Stack is empty)
    return this.data.length == 0;
  },

  peek: function () {
    // your code here (returns the last value from the bottom of the stack)
    return this.data[this.data.length - 1];
  },

  pop: function () {
    // your code here (returns a value as well as removing top item from the stack)
    return this.data.pop();
  }
};

var myStack = Object.create(Stack);
console.log(myStack.isEmpty()); // true
console.log(myStack.print()); // []
console.log(myStack.push(2));
console.log(myStack.isEmpty()); // false
console.log(myStack.push(4));
console.log(myStack.print()); // [2, 4]
console.log(myStack.peek()); // 4
console.log(myStack.pop()); // 4
console.log(myStack.pop()); // 2
console.log(myStack.peek()); // null
console.log(myStack.isEmpty()); // true




var Queue = function(){
  data: [],

  print: function () {
    console.log(this.data);
  },

  enqueue: function (x) {
    // your code here (inserts an element at the beginning of the array - index 0)
    this.data[0] = x;
  },

  isEmpty: function () {
    // your code here (returns a boolean depending on if the data array is empty)
    return this.data.length == 0;
  },

  peek: function () {
    // your code here (returns the last item in the array, or, first in the queue)
    return this.data[this.data.length - 1];
  },

  dequeue: function(){
    // your code here (returns a value as well as removing the next item in the queue)
    if (!this.isEmpty()) {
      return this.pop();
    } else {
      return null;
    }
  }
};

var q = Object.create(Queue);

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');

q.print(); // ['c', 'b', 'a']

q.peek(); // 'a'

q.dequeue(); // 'a'

q.print(); // ['c', 'b']

q.dequeue(); // 'b'

q.dequeue(); // 'c'
q.dequeue(); // null
