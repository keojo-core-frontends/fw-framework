function prettyPrintDOMNode(node: Node): void {
    const serializer = new XMLSerializer();
    const xmlStr = serializer.serializeToString(node);
    const formattedStr = formatXML(xmlStr);
    console.log(formattedStr);
  }
  
  function formatXML(xml: string): string {
    const reg = /(>)(<)(\/*)/g;
    const wsexp = / *(.*) +\n/g;
    const contexp = /(<.+>)(.+\n)/g;
    xml = xml.replace(reg, '$1\n$2$3').replace(wsexp, '$1\n').replace(contexp, '$1\n$2');
    let pad = 0;
    let formatted = '';
    const lines = xml.split('\n');
    for (let n = 0; n < lines.length; n++) {
      const line = lines[n];
      const indent = /^<\//.test(line) ? --pad : pad++;
      formatted += '  '.repeat(indent) + line + '\n';
      if (/^<\//.test(line)) pad--;
    }
    return formatted;
  }
  
  // Example usage:
  const div = document.createElement('div');
  div.innerHTML = '<p>Hello, <strong>world</strong>!</p>';
  prettyPrintDOMNode(div);
  