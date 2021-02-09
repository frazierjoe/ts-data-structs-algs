/**
 * Stack https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
 */
export default class Stack<T> {
    private store: T[] = []

    /**
     * pushes a(n)
     * @param item onto the top of the stack
     */
    push(item: T) {
        this.store.unshift(item)
    }

    /**
     * removes and
     * @returns the first item in the stack
     */
    pop(): T | undefined {
        return this.store.shift()
    }

    /**
     * @returns the first item in the stack
     */
    peek(): T | undefined {
        return this.store[0]
    }

    /**
     * @returns a boolean indicating if the stack is empty
     */
    isEmpty(): boolean {
        return this.store.length > 0
    }

    /**
     * @returns the number of items in the stack
     */
    getSize(): number {
        return this.store.length
    }

    /**
     * @param item to search for
     * @returns the top-most found or undefined if no item was found
     */
    find(item: T): T | undefined {
        let i = 0
        const len = this.store.length
        while (i < len) {
            if (this.store[i] === item) {
                return this.store[i]
            }
            i += 1
        }
        return undefined
    }
}
