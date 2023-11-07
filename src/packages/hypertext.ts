import { DOM_TYPES, vitrualNode } from "@/types";
import { withoutNulls } from "@/packages/utils/array";

const mapTextNodes = (arr: vitrualNode[]) => arr.map((item) => {
  if (typeof item === 'string') {
    return {
      type: DOM_TYPES.TEXT,
      value: item,
    }
  }
  return item;
})

function hyperText(tag, props = {}, children = []) {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  }
}