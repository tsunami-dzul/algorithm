// Add any extra import statements you may need here


class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
    }
  }
  
  class LinkedList {
      constructor(data) {
          if(data) {
              const newNode = new Node(data);
              
              this.data = data;
              this.head = newNode;
              this.tail = newNode;
  
              this.length = 1;
          } else {
              this.length = 0;
          }
      }
  
      push(data) {
          const newNode = new Node(data);
  
          if(this.length === 0) {
              this.head = newNode;
              this.tail = newNode;
          } else {
              this.tail.next = newNode;
              this.tail = newNode;
          }
  
          this.length++;
  
          return this;
      }    
  }
  // Add any helper functions you may need here
  const swapArrayAndInsertInList = (subpart, linkedList) => {
      const swappedArray = swapArray(subpart);
  
      for(let i = 0; i < swappedArray.length; i++) {
          linkedList.push(swappedArray[i]);
      }
  }
  
  const swapArray = (arr) => {
      let p1 = 0;
      let p2 = arr.length-1;
  
      while(p1 < p2) {
          const temp = arr[p2];
  
          arr[p2] = arr[p1];
          arr[p1] = temp;
  
          p1++;
          p2--;
      }
      
      return arr;
  }
  
  function reverse(head) {
    let linkedList = new LinkedList();
    let subpart = [];

    while(head !== null) {        
        const data = head.data;

        if(data % 2 === 0) {
            subpart.push(data);
        } else if(data % 2 !== 0 && subpart.length > 0) {
            swapArrayAndInsertInList(subpart, linkedList);

            subpart = [];
            linkedList.push(head.data);
        } else {
            linkedList.push(head.data);
        }

        if(head.next === null && subpart.length > 0) {
            swapArrayAndInsertInList(subpart, linkedList);
        }

        head = head.next;
    }

    return linkedList.head;
  }
  
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  var test_case_number = 1;
  
  function printLinkedList(head) {
    var out = '[';
    while (head != null) {
      out += head.data;
      head = head.next;
      if (head != null) {
        out += ' ';
      }
    }
    out += ']';
    return out;
  }
  
  function check(expectedHead, outputHead) {
    var result = true;
    var tempExpectedHead = expectedHead;
    var tempOutputHead = outputHead;
    while (expectedHead != null && outputHead != null) {
      result &= (expectedHead.data == outputHead.data);
      expectedHead = expectedHead.next;
      outputHead = outputHead.next;
    }
    if (!(expectedHead == null && outputHead == null)) result = false;
  
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    } else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printLinkedList(tempExpectedHead);
      out += ' Your output: ';
      out += printLinkedList(tempOutputHead);
      console.log(out);
    }
    test_case_number++;
  }
  
  function createLinkedList(arr) {
    var head = null;
    var tempHead = head;
    for (var v of arr) {
      if (head == null) {
        head = new Node(v);
        tempHead = head;
      } else {
        head.next = new Node(v);
        head = head.next;
      }
    }
    return tempHead;
  }
  
  var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
  var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
  var output_1 = reverse(head_1);
  check(expected_1, output_1);
  
  var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
  var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
  var output_2 = reverse(head_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  