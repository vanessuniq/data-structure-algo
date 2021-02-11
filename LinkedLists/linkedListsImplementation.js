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
            this.size = 1
        } else {
            this.head = null;
            this.tail = null;
            this.size = 0
        }
        //Having access to a head and tail makes appending and prepending, getting first and last node
        // operations constant time O(1). Also initializing the list with the size  makes getting the length
        // of the list a constant time operation as well
    };
    // Checking if the list is empty O(1)
    isEmpty() {
            return !!this.head;
            // or return this.size === 0
        }
        // Getting the first node of the list O(1)
    getFirst() {
        return this.head;
    };
    // Getting the last node of the list O(1)
    getLast() {
        return this.tail;
    };
    // Adding a node at the end of the list O(1)
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
        // increase the size
        this.size += 1;
        return node;
    };
    // Adding a node at the beginning of the list O(1)
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
        //increase the size
        this.size += 1;
        return node
    };

    // insert an element at a given position of the list O(n)
    insertAt(data, position) {
        // if position is greater than the size of the list, add to the end of the list
        if (position >= this.size) {
            this.append(data)
                // if position is index 0, preppend the data
        } else if (position === 0) {
            this.preppend(data)
        } else {
            const node = new Node(data);
            // start a counter
            let start = 0;
            // keep track of previous and current node
            let previous = null,
                current = this.getFirst();
            // iterate over the list until the given position is reached
            while (start < position) {
                previous = current;
                current = current.next;
                start++
            };
            // attach the current node to the pointer of the insert element
            node.next = current;
            // set the previous node to point to the insert element
            previous.next = node;

        }
        // increase the size
        this.size += 1;
    };

    // find an element and return its index O(n)
    indexOf(data) {
        // if the list is empty return -1
        if (this.isEmpty()) {
            return -1
        }
        // initialize the counter and the current node
        let count = 0,
            current = this.getFirst();
        // iterate over the list
        while (current) {
            // check if the current node data is equal to the given data and return the count if it is
            if (current.data === data) {
                return count
            };
            // if no match, move to the next node and increase the count
            current = current.next;
            count++;
        };
        // if the element is not found
        return -1
    };

    // update an element in the list O(n)
    update(oldData, newData) {
        if (this.isEmpty()) {
            return false
        }
        //initialize current node
        let current = this.getFirst();
        while (current) {
            // check if the current node value === the oldData
            if (current.data === oldData) {
                current.data = newData
                return current;
            };
            // move to the next node if no match
            current = current.next;
        };

        // return false if oldData not found
        return false
    }

    // remove an element from the list O(n)
    delete(data) {
        // return false if the list is empty
        if (this.isEmpty()) {
            return false
        };
        // track the current and previous node
        let previous = null,
            current = this.getFirst();
        // itertate over the list
        while (current) {
            // compare the given data to the current node data
            if (current.data === data) {
                if (previous) {
                    // if the previous node is not null
                    previous.next = current.next

                    if (!current.next) {
                        // if the current node is the last node, set the tail to the previous node as well
                        this.tail = previous
                    }

                } else {
                    // if the previous node is null, it means that the given data was found at the head of the list
                    this.head = current.next
                };
                this.size -= 1;
                return current;
            };
            // if there's no match
            previous = current;
            current = current.next;
        };

        // if the data not found
        return false;
    }


}