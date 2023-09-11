import { createTextNode } from "../render";
import { expect, test } from 'vitest'
import { DOM_TYPES } from "../types";

// @vitest-environment happy-dom

test('create text node', () => {
  const parentElement = document.createElement('body');
  const virtualTextNode = {
    type:  DOM_TYPES.TEXT,
    value: 'Hello world'
  } as const;
  const result = createTextNode({virtualTextNode, parentElement});
  const parentChild = parentElement.childNodes[0];

  expect(parentChild.nodeType).toBe(Node.TEXT_NODE);
  expect(parentChild.nodeValue).toBe('Hello world');
});
