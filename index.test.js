import { Node, LinkedList, ListLinkedList } from "./index.js";

//initialization
const ll = new LinkedList();

const expect = chai.expect;
async function testInsertFirst(data) {
	await describe("testInsertFirst(data)", () => {
		it("should insert a node at first", () => {
			ll.insertFirst(data);
			const current = ll.head;
			expect(current.data).to.equal(data);
		});
	});
}

async function testInsertLast(data) {
	// const ll = new LinkedList();
	await describe("testInsertLast(data)", () => {
		it("Should insert a node at last", () => {
			ll.insertLast(data);
			let current = ll.head;
			while (current.next) {
				current = current.next;
			}
			expect(current.data).to.equal(data);
		});
	});
}

async function testInsertAt(data, index) {
	await describe("testInsertAt(data,index)", () => {
		it("Should insert a node at index", () => {
			ll.insertAt(data, index);
			let current, previous;
			current = ll.head;
			let count = 0;
			while (count < index) {
				previous = current;
				count++;
				current = current.next;
			}
			expect(current.data).to.equal(data);
		});
	});
}

async function testRemoveAtFirst() {
	await describe("removeAtFirst()", () => {
		it("Should remove first node", () => {
			let current = ll.head;
			ll.removeAtFirst();
			expect(ll.head).to.equal(current.next);
		});
	});
}

async function testRemoveAtLast() {
	await describe("removeAtLast()", () => {
		it("Should remove last node", () => {
			let current = ll.head;
			let previous;
			while (current.next) {
				previous = current;
				current = current.next;
			}
			ll.removeAtLast();
			expect(previous.next).to.be.null;
		});
	});
}

async function testRemoveAt(index) {
	await describe("removeAt(index)", () => {
		it("Should remove at index", () => {
			if (index === 0) {
				ll.removeAtFirst();
			} else {
				let previous;
				let current = ll.head;
				let count = 0;
				while (count < index) {
					count++;
					previous = current;
					current = current.next;
				}
				ll.removeAt(index);
				expect(previous.next).to.equal(current.next);
			}
		});
	});
}

async function testRemoveByValue(data) {
	await describe("removeByValue(data)", () => {
		it("Should remove by value", () => {
			ll.removeByValue(data);
			let current = ll.head;
			let previous;
			while (current.next) {
				previous = current;
				current = current.next;
				if (current.data == data) {
					expect(previous.next).to.equal(current.next);
				}
				if (previous.data == data) {
					expect(previous.data).to.equal(current.data);
					expect(previous.next).to.equal(current.next);
				}
			}
		});
	});
}

async function testClearList() {
	await describe("clearList()", () => {
		it("Should clear the list", () => {
			ll.head = null;
			ll.size = 0;
			ll.clearList();
			expect(ll.head).to.be.null;
			expect(ll.size).to.equal(0);
		});
	});
}

testInsertFirst(100);
testInsertFirst(200);
testInsertFirst(300);
testInsertLast(400);
testInsertLast(500);
testInsertLast(600);
testInsertAt(600, 1);
testInsertAt(700, 1);
testRemoveAtFirst();
testRemoveAtLast();
testRemoveAt(1);
testRemoveAt(0);
testRemoveByValue(200);
testRemoveByValue(700);
// testClearList();

const ll2 = new LinkedList();
ll2.insertFirst(200);

const ll3 = new LinkedList();
ll3.insertFirst(300);

const lll = new ListLinkedList();

lll.addToFirstLinkedList(ll);
lll.addToIndexLinkedList(1, ll3);
lll.addToLastLinkedList(ll2);

// console.log(ll);
// console.log(lll);
