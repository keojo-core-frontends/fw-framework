export interface DOMAttributes {
    class: string;
    classNames?: string[];
    style: string;
    [key: string]: string | string[] | undefined;
  }
  