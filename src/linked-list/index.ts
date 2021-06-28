type Elem = number;
type Next = LinkNode | null;

class LinkNode {
  elem: Elem;
  next: Next;
  constructor(elem?: number, next?: Next) {
    this.elem = elem === undefined ? 0 : elem;
    this.next = next === undefined ? null : next;
  }
}

export default class LinkedList {
  // 表头节点
  head: LinkNode | null = null; // 是
  // 私有变量, 存储数组长度
  private len = 0;

  // 添加一个节点
  public append(elem: Elem): void {
    let node = new LinkNode(elem);
    let current: LinkNode;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      // 循环列表, 直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      // 找到最后一项, 将 next 值设置为传入的 node
      current.next = node;
    }
    // 更新长度
    this.len++;
  }
  // 获取长度
  public size(): number {
    return this.len;
  }
  // 在某个位置 (pos) 添加
  public insert(position: number, elem: Elem) {}
  // 删除某个位置的元素
  public removeAt(position: number) {
    // 检查合法性
    const isValidPosition = position >= 0 && position < this.len;
    if (!isValidPosition) return;

    //
    let current = this.head;
    let previous: LinkNode;
    let index = 0;

    if (position === 0) {
      // 移除第一项
    } else {
      while (index++ < position) {}
    }
  }

  // public removeAt(pos: number) {
  //   if (pos > -1 && pos < this.len) {
  //     let current = this.head;
  //     let previous;
  //     let index = 0;

  //     if (pos === 0) {
  //       this.head = current.next;
  //     } else {
  //       while (index++ < pos) {
  //         previous = current;
  //         current = current.next;
  //       }
  //       previous.next = current.next;
  //     }
  //     this.len--;
  //     return current.elem;
  //   } else {
  //     return null;
  //   }
  // }

  // public insert(elem, pos) {
  //   if (pos > -1 && pos < this.len) {
  //     let current = this.head;
  //     let index = 0;
  //     let previous;
  //     let node = new LinkNode(elem);

  //     if (pos === 0) {
  //       node.next = current;
  //       this.head = node;
  //     } else {
  //       while (index++ < pos) {
  //         previous = current;
  //         current = current.next;
  //       }
  //       node.next = current;
  //       previous.next = node;
  //     }
  //     this.len++;
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  public toString() {
    var current = this.head;
    var str = "";
    while (current) {
      str += current.elem; //output is undefinedundefinedundefined
      // str += JSON.stringify(current);
      // prints out {"next":{"next":{}}}{"next":{}}{}
      current = current.next;
    }
    return str;
  }
}
