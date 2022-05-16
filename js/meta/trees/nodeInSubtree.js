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

        const temp = this.root;

        while(true) {
            if(value === temp.value) {
                return undefined;
            }

            if(value < temp.value) {
                if(!temp.left) {
                    temp.left = newNode;

                    return this;
                }

                temp = temp.left;
            }else {
                if(!temp.right) {
                    temp.right = newNode;

                    return this;
                }

                temp = temp.right;
            }
        }
    }
}

const countOfNodes = (root, queries, string) => {

}