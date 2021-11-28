class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	//Insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}
	//Insert last node
	insertLast(data) {
		let node = new Node(data);
		let current;
		// If the list is empty , make the node become head
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	//Insert at index
	insertAt(data, index) {
		//If index is out of range
		if (index > 0 && index > this.size) {
			return;
		}
		if (index === 0) {
			this.insertFirst(data);
			return;
		}
		const node = new Node(data);
		let current, previous;

		//Set current to first
		current = this.head;
		let count = 0;

		while (count < index) {
			previous = current; //Node before index
			count++;
			current = current.next; //Node after index
		}
		node.next = current;
		previous.next = node;
		this.size++;
	}
	//Delete at the beginning
	removeAtFirst() {
		let current = this.head;
		if (!current.next) {
			this.head = null;
		} else {
			this.head = current.next;
		}
		this.size--;
	}
	//Delete at the end
	removeAtLast() {
		let current = this.head;
		let previous;
		if (!current.next) {
			this.head = null;
		} else {
			while (current.next) {
				previous = current;
				current = current.next;
			}
			previous.next = null;
		}
		this.size--;
	}

	//Delete at index
	removeAt(index) {
		if (index > 0 && index > this.size) {
			return;
		}

		let current = this.head;
		let previous;
		let count = 0;
		//Remove first
		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.size--;
	}
	//Delete by value
	removeByValue(data) {
		let current = this.head;
		let previous;
		//Remove
		while (current.next) {
			previous = current;
			current = current.next;
			if (current.data == data) {
				previous.next = current.next;
			}
			if (previous.data == data) {
				previous.data = current.data;
				previous.next = current.next;
			}
		}
		this.size--;
	}
	//Clear list
	clearList() {
		this.head = null;
		this.size = 0;
	}
	//Print list data
	printListData() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

class ListLinkedList {
	constructor(...list) {
		this.list = list;
	}
	addToLastLinkedList(list) {
		this.list.push(list);
	}

	addToFirstLinkedList(list) {
		this.list.unshift(list);
	}

	addToIndexLinkedList(index, list) {
		this.list.splice(index, 0, list);
	}
}

export { Node, LinkedList, ListLinkedList };
