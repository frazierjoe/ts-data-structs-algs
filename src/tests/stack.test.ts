import Stack from "../data-structures/Stack";

let stack: Stack<number>;

beforeAll(() => {
  stack = new Stack();
});

describe("my stack", () => {
  test("is empty", () => {
    expect(stack.isEmpty()).toBeFalsy();
  });

  test("has one item", () => {
    stack.push(1);
    expect(stack.getSize()).toBe(1);
  });

  test("has two items", () => {
    stack.push(2);
    expect(stack.getSize()).toBe(2);
  });

  test("finds bottom item", () => {
    expect(stack.find(1)).toBe(1);
  });

  test("doesn't find non-existing item", () => {
    expect(stack.find(3)).toBeUndefined();
  });

  test("peeks top item", () => {
    expect(stack.peek()).toBe(2);
  });

  test("pops top item", () => {
    expect(stack.pop()).toBe(2);
  });

  test("pops last item", () => {
    expect(stack.pop()).toBe(1);
  });

  test("has no items", () => {
    expect(stack.getSize()).toBe(0);
  });

  test("peeks undefined when empty", () => {
    expect(stack.peek()).toBeUndefined();
  });

  test("pops undefined when empty", () => {
    expect(stack.pop()).toBeUndefined();
  });
});
