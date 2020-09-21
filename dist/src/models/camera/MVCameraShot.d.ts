import { MVCameraShotSettings } from './interfaces';
import { MVCamera } from './MVCamera';
/**
 * Base camera shot class for handling camera shot settings
 */
export declare class MVCameraShot {
    readonly id: string;
    private behaviors;
    private settings;
    private _active;
    /**
     * Create a new Camera shot based on MVCameraShotSettings
     * @param {MVCameraShotSettings} settings
     */
    constructor(settings: MVCameraShotSettings);
    /**
     * Get Active state
     * @return {boolean}
     */
    get active(): boolean;
    /**
     * Update Camera settings/parameters including all camera shot behaviors
     * @param {MVCamera} camera that get´s updated
     */
    private updateSettings;
    /**
     * Set Camera shot active
     * @param {MVCamera} camera
     */
    activate(camera: MVCamera): void;
    /**
     * Deactivate camera shot
     * @param {MVCamera} camera
     */
    deactivate(camera: MVCamera): void;
    /**
     * Creates a new camera shot behavior based on the MVCameraShotBehaviourType
     * @param {MVCameraShotBehaviourType} type
     * @param {MVCameraShotBehaviorSettings} settings
     * @return {CameraShotBehavior} new camera shot behavior
     */
    private createNewCameraShotBehavior;
    /**
     * Reset all camera values
     * @param {MVCamera} camera
     */
    private resetCameraValues;
}
