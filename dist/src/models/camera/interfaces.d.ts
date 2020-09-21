export interface MVCameraShotSettings {
    /** ID of the MVCameraShot */
    id: string;
    /** Vector 3 position of camera target */
    target: number[];
    /** Vector 3 position of camera */
    position: number[];
    /** Field of view */
    fov: number;
    /** Array of camera shot behaviors. Empty if no behaviors on camera */
    behaviors: MVCameraShotBehaviorSettings[];
}
export interface MVCameraShotBehaviorSettings {
    /** Type of camera shot behavior */
    type: MVCameraShotBehaviourType;
    /** Parameter for camera shot behavior */
    options: MVCameraShotBehaviorOption;
}
export declare enum MVCameraShotBehaviourType {
    /** Orbit-Type for camera */
    'ORBIT' = "ORBIT",
    /** Zoom-Type for camera */
    'ZOOM' = "ZOOM"
}
export interface MVCameraShotBehaviorOption {
    /** TBD */
    lowerAlphaLimit?: number;
    /** TBD */
    upperAlphaLimit?: number;
    /** TBD */
    lowerBetaLimit?: number;
    /** TBD */
    upperBetaLimit?: number;
    /** TBD */
    fov?: boolean;
    /** Limit the zoom factor in the zoom-out */
    upperRadiusLimit?: number;
    /** Limit the zoom factor in the zoom-in */
    lowerRadiusLimit?: number;
    /** Use idle rotate functionality */
    allowAutoRotation?: boolean;
    /** Speed of the idle rotation */
    autoRotationSpeed?: number;
    /** Speed and step width of mouse wheel for the zoom  */
    wheelPrecision?: number;
}
