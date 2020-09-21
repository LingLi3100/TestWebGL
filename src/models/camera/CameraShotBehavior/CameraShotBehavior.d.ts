import { MVCameraShotBehaviorSettings } from '../interfaces';
import { MVCamera } from '../MVCamera';
/**
 * Abstract class for Camera-Shot-Behaviors
 */
export declare abstract class CameraShotBehavior {
    /** Defines the if this behavior is active */
    active: boolean;
    /** Defines the settings of the behavior that will be applied on the camera */
    settings: MVCameraShotBehaviorSettings;
    /**
     * Create a new Behavior based on the MVCameraShotBehaviorSettings
     * @param {MVCameraShotBehaviorSettings} settings
     */
    protected constructor(settings: MVCameraShotBehaviorSettings);
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
}
