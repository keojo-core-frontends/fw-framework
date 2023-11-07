// import { test, expect } from 'vitest';
// import { destroyDOM } from './destroy-dom';
// import { mountDOM } from './mount-dom';
// import { hFragment, hString } from './hypertext';

// test('destroyDOM - should remove a text node', () => {
//   const textNode = {
//     type: DOM_TYPES.TEXT,
//     domRef: document.createTextNode('Hello world')
//   };

//   destroyDOM({ vdom: textNode });

//   expect(textNode.domRef.parentNode).toBe(null);
// });

// test('destroyDOM - should remove an element node', () => {
//   const elementNode = {
//     type: DOM_TYPES.ELEMENT,
//     domRef: document.createElement('div'),
//     listeners: []
//   };

//   destroyDOM({ vdom: elementNode });

//   expect(elementNode.domRef.parentNode).toBe(null);
// });

// test('destroyDOM - should remove a fragment node', () => {
//   const fragmentNode = {
//     type: DOM_TYPES.FRAGMENT,
//     children: [
//       { type: DOM_TYPES.TEXT, domRef: document.createTextNode('Hello first') },
//       { type: DOM_TYPES.TEXT, domRef: document.createTextNode('Hello second') }
//     ]
//   };

//   destroyDOM({ vdom: fragmentNode });

//   fragmentNode.children.forEach(child => {
//     expect(child.domRef.parentNode).toBe(null);
//   });
// });

// test('mountDOM - should mount a "text" node', () => {
//   const root = document.createElement('body');
//   const textVdom = hString('Hello world');
//   mountDOM({ vdom: textVdom, parentElement: root });

//   const parentChild = root.childNodes[0];
//   expect(parentChild.nodeType).toBe(Node.TEXT_NODE);
//   expect(parentChild.nodeValue).toBe('Hello world');
// });

// test('mountDOM - should mount a "fragment" node with two text nodes', () => {
//   const root = document.createElement('body');
//   const fragmentVdom = hFragment([
//     hString('Hello first'),
//     hString('Hello second')
//   ]);
//   mountDOM({ vdom: fragmentVdom, parentElement: root });

//   expect(root.childNodes.length).toBe(2);
//   expect(root.childNodes[0].nodeValue).toBe('Hello first');
//   expect(root.childNodes[1].nodeValue).toBe('Hello second');
// });
