import { Scene } from 'babylonjs';
import { MVCamera, MVCameraShot } from '../../models/camera';
/**
 * Class to manage all cameras of the webGL scene.
 */
export declare class CameraManager {
    private readonly _cameraService;
    private _cameraShots;
    private _activeCameraShotIndex;
    private _mainCamera;
    /**
     * Creates new Camera Manger
     * @param {Scene} scene
     * @param {HTMLCanvasElement} canvas
     */
    constructor(scene: Scene, canvas: HTMLCanvasElement);
    /**
     * Get camera shot by id
     * @param {string} id
     * @return {MVCameraShot} camera shot
     */
    getCameraShot(id: string): MVCameraShot;
    /**
     * Return all ids of camera shots
     * @return {string}
     */
    getAllCameraShotsIds(): string[];
    /**
     * Get active camera shot
     * @return {MVCameraShot}
     */
    getActiveCameraShot(): MVCameraShot;
    /**
     * Get active camera
     * @return {MVCamera} active camera
     */
    getActiveCamera(): MVCamera;
    /**
     * Sets up the default camera
     */
    setupDefaultCamera(): void;
    /**
     * Set new camera shots for camera
     * @param {string} baseUrl
     * @param {string[]} cameraShotUrls
     * @return {Promise<MVCameraShot[]>}
     */
    addCameraShots(baseUrl: string, cameraShotUrls: string[]): Promise<MVCameraShot[]>;
    /**
     * Request a camera shot by id
     * @param {string} id
     */
    requestCameraShot(id: string): void;
}
