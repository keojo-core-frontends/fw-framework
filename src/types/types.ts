export interface DOMAttributes {
  class: string;
  classNames?: string[];
  style: string;
  [key: string]: string | string[] | undefined;
}

export const DOM_TYPES = {
  TEXT: 'text',
  ELEMENT: 'element',
  FRAGMENT: 'fragment',
} as const
interface Node {
  domRef?: HTMLElement | Text | null;
}


export interface virtualTextNode extends Node {
  type: 'text'
  value: string;
} 

export interface virtualElementNode extends Node {
  type: 'element';
  tag: string;
  props: DOMAttributes | null | {};
  children: vitrualNode[] | null | [];
}

export interface virtualFragmentNode extends Node {
  type: 'fragment';
  children: vitrualNode[] | null | [];
}

export type vitrualNode = virtualTextNode | virtualElementNode | virtualFragmentNode | null | string ;

export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

export type Vdom = vitrualNode