import { Scene, Mesh } from 'babylonjs';
/**
 * Service for configuring actionmanagers
 */
export declare class ActionsService {
    private readonly _scene;
    /**
     * Creates a new BabylonJS based CollisionSphere Service
     * @param {Scene} scene - the Babylon scene
     */
    constructor(scene: Scene);
    /**
     * Registers a click event on a specific mesh
     * @param  {Mesh} mesh
     * @param  {Function} callback Callback function that is called on every click
     */
    registerClickEvent(mesh: Mesh, callback: Function): void;
    /**
     * Adds a Babylon ActionManager to a mesh
     * @param  {Mesh} mesh
     * @return {Mesh} mesh with instantiated ActionManager
     */
    private addActionManagerToMesh;
}
