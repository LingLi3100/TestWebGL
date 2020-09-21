import { ArcRotateCamera, Scene, Vector3 } from 'babylonjs';
import { MVCameraShot } from './MVCameraShot';
/**
 * Base Camera class
 */
export declare class MVCamera extends ArcRotateCamera {
    /** Current active shot */
    currentShot: MVCameraShot;
    /** Previous camera shot */
    previousShot: MVCameraShot;
    /**
     * Creates a new Camera
     * @param {string} name
     * @param {number} alpha
     * @param {number} beta
     * @param {number} radius
     * @param {Vector3} target
     * @param {Scene} scene
     * @param {boolean} setActiveOnSceneIfNoneActive
     */
    constructor(name: string, alpha: number, beta: number, radius: number, target: Vector3, scene: Scene, setActiveOnSceneIfNoneActive?: boolean);
    /**
     * Freeze camera with sets inertial values to zero
     */
    freeze(): void;
}
