import { createElementNode, createFragmentNode, createTextNode } from "@/packages/render";
import { Vdom } from "@/types";

export function mountDOM({vdom, parentElement}:{vdom: Vdom, parentElement: HTMLElement}) {
  if (vdom === null) return;
  if(typeof vdom === 'string') {
    createTextNode({ virtualTextNode: { type: 'text', value: vdom }, parentElement });
    return;
  }
  switch (vdom.type) {
    case 'text':
      console.log('it was text');
      createTextNode({ virtualTextNode: vdom, parentElement });
      break;
    case 'element':
      console.log('it was element');
      createElementNode({ virtualElementNode: vdom, parentElement });
      break;
    case 'fragment':
      console.log('it was fragment');
      createFragmentNode({ virtualFragmentNode: vdom, parentElement });
      break;
    default: {
      throw new Error(`Can't mount DOM of type: ${JSON.stringify(vdom)}`);
    }
  }
}
