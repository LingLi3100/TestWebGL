import { Scene, Vector3, Mesh, AbstractMesh } from 'babylonjs';
/**
 * Service for modifying meshes
 */
export declare class MeshService {
    private readonly _scene;
    private _assetLoader;
    /**
     * Creates a new BabylonJS based Mesh Service
     * @param {Scene} scene - the Babylon scene
     */
    constructor(scene: Scene);
    /**
     * Load GLB or GLTF files
     * @param {string} url
     * @param {string} fileName
     */
    loadMeshes(url: string, fileName: string): void;
    /**
     * Removes a mesh from the scene
     * @param {AbstractMesh} mesh Mesh
     * @return {Promise<void>}
     */
    removeMesh(mesh: AbstractMesh): Promise<void>;
    /**
     * Removes meshes from the scene
     * @param {AbstractMesh[]} meshes Meshes
     * @return {Promise<any>}
     */
    removeMeshes(meshes: AbstractMesh[]): Promise<void[]>;
    /**
     * Create basic plane mesh
     * @param  {string} name
     * @param  {number} size
     * @param  {Vector3} position
     * @param  {boolean} billboardModeAll?
     * @return {Mesh}
     */
    createPlane(name: string, size: number, position: Vector3, billboardModeAll?: boolean): Mesh;
    /**
     * Create basic sphere mesh
     * @param  {string} name
     * @param  {number} diameter
     * @param  {Vector3} position
     * @param  {boolean} visible
     * @return {Mesh}
     */
    createSphere(name: string, diameter: number, position: Vector3, visible: boolean): Mesh;
}
