import { mountDOM } from "@/packages/mount-dom";
import { virtualElementNode, virtualFragmentNode } from "@/types";
import { describe, test, expect } from "vitest";

// @vitest-environment happy-dom

describe("mounting DOM", () => {
  test("should not mount null", () => {
    const parentElement = document.createElement("div");
    mountDOM({ vdom: null, parentElement });
    expect(parentElement.childNodes.length).toBe(0);
  });

  test("should mount text", () => {
    const parentElement = document.createElement("div");
    mountDOM({ vdom: "Hello, world!", parentElement });
    expect(parentElement.childNodes.length).toBe(1);
    expect(parentElement.firstChild.nodeType).toBe(Node.TEXT_NODE);
    expect(parentElement.firstChild.textContent).toBe("Hello, world!");
  });

  test("should mount textElement", () => {
    const parentElement = document.createElement("div");
    const vdom = {
      type: "text",
      value: "Hello, world!",
    } as const;
    mountDOM({ vdom, parentElement });
    expect(parentElement.childNodes.length).toBe(1);
    expect(parentElement.firstChild.nodeType).toBe(Node.TEXT_NODE);
    expect(parentElement.firstChild.textContent).toBe("Hello, world!");
  });

  test("should mount paragraph element", () => {
    const parentElement = document.createElement("div");
    const vdom = {
      type: "element",
      tag: "p",
      props: {},
      children: ["Hello, world!"],
    } as virtualElementNode;;
    mountDOM({ vdom, parentElement });
    expect(parentElement.childNodes.length).toBe(1);
    expect((parentElement.firstChild as Element).tagName).toBe("P");
    expect(parentElement.firstChild.textContent).toBe("Hello, world!");
  });

  test("should mount div element", () => {
    const parentElement = document.createElement("div");
    const vdom = {
      type: "element",
      tag: "div",
      props: {},
      children: ["Hello, world!"],
    } as virtualElementNode;
    mountDOM({ vdom, parentElement });
    expect(parentElement.childNodes.length).toBe(1);
    expect((parentElement.firstChild as Element).tagName).toBe("DIV");
    expect(parentElement.firstChild.textContent).toBe("Hello, world!");
  });

  test("should mount fragment", () => {
    const parentElement = document.createElement("div");
    const vdom = {
      type: "fragment",
      children: [
        { type: "text", value: "Hello, " },
        { type: "text", value: "world!" },
      ],
    } as virtualFragmentNode;
    mountDOM({ vdom, parentElement });
    expect(parentElement.childNodes.length).toBe(2);
    expect(parentElement.firstChild.nodeType).toBe(Node.TEXT_NODE);
    expect(parentElement.firstChild.textContent).toBe("Hello, ");
    expect(parentElement.lastChild.nodeType).toBe(Node.TEXT_NODE);
    expect(parentElement.lastChild.textContent).toBe("world!");
  });
});
