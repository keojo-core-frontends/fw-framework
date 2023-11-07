// class DetailedTextNode {

// }

// export class DetailElementNode extends HTMLElement{
//   constructor(htmlElement: HTMLElement){
//     super();
//     this.innerHTML = htmlElement.innerHTML;
//   }

//   toString(){
//     console.log('this', this)
//     return this?.outerHTML ?? this?.innerHTML;
//   }

//   details(){
//     const attributes = this.attributes;
//     const classNames = this.classList;
//     const id = this.id;
//     const tagName = this.tagName;
//     const children = this.children;

//     return {
//       attributes,
//       classNames,
//       id,
//       tagName,
//       children
//     }
//   }

//   toDetailedString(){
//     console.log('details', this.details())
//   }
// }