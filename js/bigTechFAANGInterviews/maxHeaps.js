const _heap = Symbol();
const _comparator = Symbol();
const _parent = Symbol();
const _left = Symbol();
const _right = Symbol();
const _swap = Symbol();
const _compare = Symbol();
const _shiftUp = Symbol();
const _shiftDown = Symbol();

class PriorityQueue {
    constructor() {
        this[_heap] = [];
    }

    [_parent](index) {
        return Math.floor((index - 1) / 2);
    }

    [_left](index) {
        return index*2 + 1;
    }

    [_right](index) {
        return index*2 + 2;
    }

    [_swap](i, j) {
        const temp = this[_heap][i];
        this[_heap][i] = this[_heap][j];
        this[_heap][j] = temp;
    }

    [_compare](i, j) {
        return this[_heap][i] > this[_heap][j];
    }

    [_shiftUp]() {
        let index = this.size() - 1;

        while(index > 0 && this[_compare](index, this[_parent](index))) {            
            const parent = this[_parent](index);
            this[_swap](index, parent);
            index = parent;
        }
    }

    [_shiftDown]() {
        let index = 0;

        while(
            (this[_left](index) < this.size()) &&
            this[_compare](this[_left](index), index) || 
            (this[_right](index) < this.size() && 
            this[_compare](this[_right](index), index))
            ) {
                const greaterNode = this[_right](index) < this.size() 
                    && this[_compare](this[_right](index), this[_left](index))
                    ? this[_right](index)
                    : this[_left](index);
                
                this[_swap](greaterNode, index);
                index = greaterNode;
            }
    }

    get heap() {
        return this[_heap];
    }

    size() {
        return this[_heap].length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this[_heap][0];
    }

    push(value) {
        this[_heap].push(value);
        this[_shiftUp]();

        return this.size();
    }

    pop() {
        if(this.size() > 1) {
            this[_swap](0, this.size() - 1);
        }

        const popped = this[_heap].pop();

        this[_shiftDown]();

        return popped
    }
}

const findMaxProduct = (arr) => {
    const pq = new PriorityQueue();
    let output = [];

    for(let i = 0; i < arr.length; i++) {
        pq.push(arr[i]);

        if(i < 2) {
            output.push(-1);
        } else {
            const poppedItems = [];
            const total = pq.size();

            for(let j=0; j< total; j++) {
                poppedItems.push(pq.pop());
            }

            const mult = multiply(poppedItems);

            output.push(mult);

            for(let j=0; j<=i; j++){
                pq.push(arr[j]);
            }
        }
    }

    return output;
}

const multiply = (heap) => {
    let mult = 1;

    for(let i = 0; i < 3; i++) {
        mult *= heap[i];
    }

    return mult;
}

const resp = findMaxProduct([1, 2, 3, 4, 5]);

console.log(resp);