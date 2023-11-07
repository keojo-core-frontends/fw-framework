import { vitrualNode } from "../../types";

export const withoutNulls = (arr: Array<vitrualNode>) => arr.filter((item) => item !== null);