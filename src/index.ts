import LinkedList from "./linked-list/index";

let t = new LinkedList();
t.append(1); // Works fine
t.append(3);
t.append(2);
// console.log(t); // LinkedList
// let tt = t.removeAt(1);
// console.log(t, "tt", tt); // LinkedList, 'tt', 1
// t.insert("asd", 2);
// let ttt = t.insert("a", 1);
// console.log(ttt); // true
console.log({ t }); // LinkedList
// console.log(t.toString()); //asda0

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//  输入：head = [1,3,2]
//  输出：[2,3,1]

//  0 <= 链表长度 <= 10000

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
// function reversePrint(head: ListNode | null): number[] {

// }

// let head = [1, 3, 2];

// reversePrint(head)
