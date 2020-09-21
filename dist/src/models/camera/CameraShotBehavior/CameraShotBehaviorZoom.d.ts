import { MVCameraShotBehaviorSettings } from '../interfaces';
import { MVCamera } from '../MVCamera';
import { CameraShotBehavior } from './CameraShotBehavior';
/**
 * Camera-Zoom behavior class
 */
export declare class CameraShotBehaviorZoom extends CameraShotBehavior {
    /**
     * Create a new Zoom-Behavior based on the MVCameraShotBehaviorSettings
     * @param {MVCameraShotBehaviorSettings} settings
     */
    constructor(settings: MVCameraShotBehaviorSettings);
    /**
     * Update settings
     * @param {MVCamera} camera
     * @return {MVCamera} modified camera
     */
    protected updateSettings(camera: MVCamera): MVCamera;
    /**
     * Activate behavior on camera
     * @param {MVCamera} camera
     */
    activate(camera: MVCamera): void;
    /**
     * Deactivate behavior on camera
     * @param {MVCamera} camera
     */
    deactivate(camera: MVCamera): void;
    /**
     * Calculate the camera radius in contrast do the aspect ratio
     * @param {MVCamera} camera
     * @return {number} radius
     */
    private calculateRadius;
}
