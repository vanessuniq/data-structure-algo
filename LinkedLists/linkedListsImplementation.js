//Let's start by constructing the node using JS Class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * An instance of the Node class will have two properties: 
 * the data that will hold the value of the passed element, 
 * and the next property (initialized with null) that is the pointer to the next node.
 */

//Now let's implement the linked list class:
class LinkedList {
    constructor(data = null) {
        if (data !== null) {
            const node = new Node(data);
            this.head = node;
            this.tail = node;
        } else {
            this.head = null;
            this.tail = null;
        }

    }
}