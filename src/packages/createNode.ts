import { mountDOM } from "./mount-dom";
import {virtualFragmentNode, virtualTextNode, virtualElementNode, Vdom } from "./types";

export function createTextNode({virtualTextNode, parentElement}:{ virtualTextNode: virtualTextNode, parentElement:HTMLElement}) {
  const {value} = virtualTextNode;

  const textNode = document.createTextNode(value)
  // create a ref to the dom node
  virtualTextNode.domRef = textNode;

  parentElement.appendChild(textNode)
}

export function createFragmentNode({virtualFragmentNode, parentElement}:{ virtualFragmentNode: virtualFragmentNode, parentElement:HTMLElement}) {
  const {children:childrenVirtualDOMS} = virtualFragmentNode;

  virtualFragmentNode.domRef = parentElement;

  childrenVirtualDOMS.forEach((virtualDOM) => mountDOM({vdom: virtualDOM, parentElement}))
}

export function createElementNode({virtualElementNode, parentElement}:{ virtualElementNode: virtualElementNode, parentElement:HTMLElement}) {
  const {tag, props, children: childrenVirtualDOMS } = virtualElementNode;

  virtualElementNode.domRef = parentElement;

  const element = document.createElement(tag);
}
