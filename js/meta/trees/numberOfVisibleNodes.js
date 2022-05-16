class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        while(true) {
            if(temp.value === value) {
                return undefined;
            }

            if(value < temp.value) {
                if(!temp.left) {
                    temp.left = newNode;

                    return this;
                }

                temp = temp.left;
            } else {
                if(!temp.right) {
                    temp.right = newNode;

                    return this;
                }

                temp = temp.right;
            }
        }
    }

    lookup(value) {
        if(!this.root) {
            return  undefined;
        }

        let temp = this.root;

        while(temp) {
            if(value === temp.value) {
                return true;
            }

            if(value < temp.value) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }

        return false;
    }
    
    lookupLeftNode(node, count) {
        if(!node) {
         return count;
        }

        count++;

        const left = this.lookupLeftNode(node.left, count);
        const right = this.lookupLeftNode(node.right, count);

        return Math.max(left, right);
    }
}

const bst = new BinaryTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(14);
bst.insert(13);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(7);


// bst.insert(10);
// bst.insert(8);
// bst.insert(15);
// bst.insert(4);
// bst.insert(5);
// bst.insert(6);
// bst.insert(14);
// bst.insert(16);

// console.log(bst);

const r = bst.lookupLeftNode(bst.root, 0);

console.log(r);