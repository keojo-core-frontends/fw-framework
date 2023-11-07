import { createElementNode, createFragmentNode, createTextNode } from "@/packages/render";
// import { prettyPrintDOMNode } from '@/debug/dom/print';
import { describe, expect, test } from 'vitest'
import { DOM_TYPES, Mutable, vitrualNode } from "@/types/types";

// @vitest-environment happy-dom
describe('rendering html with DOM API', () => {
  test('create text node', () => {
    const parentElement = document.createElement('body');
    const virtualTextNode = {
      type: DOM_TYPES.TEXT,
      value: 'Hello world'
    } as const;

    createTextNode({ virtualTextNode, parentElement });

    const parentChild = parentElement.childNodes[0];

    expect(parentChild.nodeType).toBe(Node.TEXT_NODE);
    expect(parentChild.nodeValue).toBe('Hello world');
    expect(parentElement.outerHTML).toBe('<body>Hello world</body>');
  });

  test('create paragraph(element) node', () => {
    const parentElement = document.createElement('body');
    const virtualElementNode = {
      type: DOM_TYPES.ELEMENT,
      tag: 'p',
      props: {},
      children: ["hello i'm a paragraph content"] as Mutable<vitrualNode[]>
    } as const;
    createElementNode({ virtualElementNode, parentElement });

    const parentChild = parentElement.childNodes[0];

    expect(parentChild.nodeType).toBe(Node.ELEMENT_NODE);
    expect(parentChild.nodeName).toBe('P');
    expect(parentChild.textContent).toBe("hello i'm a paragraph content");
    expect(parentElement.outerHTML).toBe('<body><p>hello i\'m a paragraph content</p></body>');
  });

  test('create div(element) node', () => {
    const parentElement = document.createElement('body');
    const virtualElementNode = {
      type: DOM_TYPES.ELEMENT,
      tag: 'div',
      props: {},
      children: [`hello i'm a div`] as Mutable<vitrualNode[]>
    } as const;
    createElementNode({ virtualElementNode, parentElement });
    const parentChild = parentElement.childNodes[0];

    expect(parentChild.nodeType).toBe(Node.ELEMENT_NODE);
    expect(parentChild.nodeName).toBe('DIV');
    expect(parentChild.textContent).toBe(`hello i'm a div`);
    expect(parentElement.outerHTML).toBe('<body><div>hello i\'m a div</div></body>');
  });

  test('create fragment node', () => { 
    const parentElement = document.createElement('body');
    const virtualFragmentNode = {
      type: DOM_TYPES.FRAGMENT,
      children: [
        {
          type: DOM_TYPES.ELEMENT,
          tag: 'div',
          props: {
            'class': 'div' // not yet implemented
          },
          children: [`hello i'm a div`] as Mutable<vitrualNode[]>
        },
        {
          type: DOM_TYPES.ELEMENT,
          tag: 'p',
          props: {},
          children: ["hello i'm a paragraph"] as Mutable<vitrualNode[]>
        }
      ] as Mutable<vitrualNode[]>
    } as const;
    createFragmentNode({ virtualFragmentNode, parentElement });

    expect(parentElement.childNodes.length).toBe(2);
    expect(parentElement.outerHTML).toBe('<body><div>hello i\'m a div</div><p>hello i\'m a paragraph</p></body>');
  })
});