import { AbstractMesh } from 'babylonjs';
/**
 * Layer class to manage a set of meshes or VSE (visualization unit)
 */
export declare class MVLayer {
    name: string;
    meshes: AbstractMesh[];
    visibilityState: boolean;
    previousVisibilityState: boolean;
    /**
     * Creates a new MVLayer
     * @param {string} layerName Layer Name
     */
    constructor(layerName: string);
    /**
     * Adds an array of meshes to the layer
     * @param {AbstractMesh[]} meshes Meshes
     */
    addMeshes(meshes: AbstractMesh[]): void;
}
