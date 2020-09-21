import { Color3, Color4, Node, Vector3 } from 'babylonjs';
/**
 * Check if variable is string
 * @param {unknown} obj
 * @return {boolean}
 */
export declare const isString: (obj: unknown) => boolean;
/**
 * Check if variable is boolean
 * @param {unknown} obj
 * @return {boolean}
 */
export declare const isBoolean: (obj: unknown) => boolean;
/**
 * Check if variable is number
 * @param {any} obj
 * @return {boolean}
 */
export declare const isNumber: (obj: any) => boolean;
/**
 * Check if a object is a Color3
 * @param {unknown} obj
 * @return {boolean} obj is Color3
 */
export declare const isColor3: (obj: unknown) => obj is Color3;
/**
 * Check if a object is a Light Color3
 * @param {unknown} arr
 * @return {boolean} obj is Color3
 */
export declare const isColor3Array: (arr: unknown) => arr is Color3;
/**
 * Check if a object is a Color4
 * @param {unknown} obj
 * @return {boolean} obj is Color4
 */
export declare const isColor4: (obj: unknown) => obj is Color4;
/**
 * Check if a object is a Light Vector3
 * @param {unknown} arr
 * @return {boolean} obj is Vector3
 */
export declare const isVector3Array: (arr: unknown) => arr is Vector3;
/**
 * Gets a child node by id if it exists.
 * @param {Node} node Babylon Node
 * @param {string} id
 * @return {Node}
 */
export declare const getChildNodeById: (node: Node, id: string) => Node;
