export function mountDOM(vdom: Vdom, parentElement: HTMLElement) {
    if (vdom === null) return;
    switch (vdom.type) {
      case 'text':
        console.log('it was text');
        createTextNode({ virtualTextNode: vdom, parentElement });
        break;
      case 'element':
        console.log('it was element');
        break;
      case 'fragment':
        console.log('it was fragment');
        createFragmentNode({ virtualFragmentNode: vdom, parentElement });
        break;
      default: {
        throw new Error(`Can't mount DOM of type: ${vdom.type}`);
      }
    }
  }
  