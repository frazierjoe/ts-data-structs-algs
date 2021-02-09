class Stack<T> {
  private store: T[] = [];

  /**
   * pushes a(n)
   * @param item onto the top of the stack
   */
  push(item: T) {
    this.store.unshift(item);
  }

  /**
   * removes and
   * @returns the first item in the stack
   */
  pop(): T | undefined {
    return this.store.shift();
  }

  /**
   * @returns the first item in the stack
   */
  peek(): T | undefined {
    return this.store[0];
  }

  /**
   * tests if the stack is empty
   */
  empty(): boolean {
    return this.store.length > 0;
  }

  /**
   * @param item to search for
   * @returns the top-most found or undefined if no item was found
   */
  search(item: T): T | undefined {
    let i = 0;
    const len = this.store.length;
    while (i < len) {
      if (this.store[i] === item) {
        return this.store[i];
      }
    }
    return undefined;
  }
}
