import { Scene } from 'babylonjs';
import { MVCamera, MVCameraShotSettings } from '../../models/camera';
/**
 * Service for modifying cameras
 */
export declare class CameraService {
    private readonly _scene;
    private readonly _canvas;
    /**
     * Creates a new BabylonJS based Camera Service
     * @param {Scene} scene - the Babylon scene
     * @param {HTMLCanvasElement} canvas - the canvas object the scene is rendered on
     */
    constructor(scene: Scene, canvas: HTMLCanvasElement);
    /**
     * Load CameraShotSettings from json file
     * @param {string} url
     * @return {Promise<MVCameraShotSettings>}
     */
    loadCameraShotSettings(url: string): Promise<MVCameraShotSettings>;
    /**
     * Setup the default camera
     * @return {MVCamera}
     */
    setupDefaultCamera(): MVCamera;
}
