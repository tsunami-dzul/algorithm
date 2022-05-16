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

const reverse = (head) => {
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

const createList = (arr) => {
    const linkedList = new LinkedList();

    for(let i = 0; i < arr.length; i++) {
        linkedList.push(arr[i]);
    }

    return linkedList.head;
}

const arr =  [1, 2, 8, 9, 12, 16]
const resp = reverse(createList(arr));

console.log(JSON.stringify(resp));