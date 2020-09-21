import { Scene, Vector3, Mesh } from 'babylonjs';
/**
 * Class to manage all scene meshes that can be used to render the scene.
 */
export declare class MeshManager {
    private readonly _meshService;
    /**
     * Creates new Mesh Manger
     * @param {Scene} scene
     */
    constructor(scene: Scene);
    /**
     * Load Mesh a mesh from an external resource
     * @param {string} url
     * @param {string} fileName
     */
    loadMeshes(url: string, fileName: string): void;
    /**
     * Create a basic plane mesh
     * @param {string} name
     * @param {number} size
     * @param {Vector3} position
     * @param {boolean} billboardModeAll
     * @return {Mesh}
     */
    createPlane(name: string, size: number, position: Vector3, billboardModeAll?: boolean): Mesh;
    /**
     * Create a basic sphere mesh
     * @param  {string} name
     * @param  {number} size
     * @param  {Vector3} position
     * @param  {boolean} visible Default: true
     * @return {Mesh}
     */
    createSphere(name: string, size: number, position: Vector3, visible: boolean): Mesh;
}
