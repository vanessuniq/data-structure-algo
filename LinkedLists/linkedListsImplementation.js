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
        //Having access to a head and tail makes appending and prepending, getting first and last node
        // operations constant time O(1).
    };
    // Checking if the list is empty
    isEmpty() {
            return !!this.head
        }
        // Getting the first node of the list
    getFirst() {
        return this.head;
    };
    // Getting the last node of the list
    getLast() {
        return this.tail;
    };
    // Adding a node at the end of the list
    append(data) {
        const node = new Node(data);
        // if the list is empty, set the head = node
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        return node;
    };
    // Adding a node at the beginning of the list
    preppend(data) {
        const node = new Node(data);
        // if the list is empty, set the head = node
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            // point the node next property to the list head then set the list head to the node
            node.next = this.head;
            this.head = node;
        };
        return node
    };

}