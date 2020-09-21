import { MVCameraShotBehaviorSettings } from '../interfaces';
import { MVCamera } from '../MVCamera';
import { CameraShotBehavior } from './CameraShotBehavior';
/**
 * Camera-Orbit behavior class
 */
export declare class CameraShotBehaviorOrbit extends CameraShotBehavior {
    /**
     * Create a new Orbit-Behavior based on the MVCameraShotBehaviorSettings
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
     * Set the AutoRotationBehavior if the settings allowing it
     * @param {MVCamera} camera
     */
    private setAutoRotationFromBehavior;
}
