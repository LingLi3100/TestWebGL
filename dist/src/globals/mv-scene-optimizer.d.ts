import { Scene } from 'babylonjs';
/**
 * Class for Scene Optimizations
 */
export declare class MVSceneOptimizer {
    private _scene;
    private _options;
    private _optimizer;
    /**
     * Creates MV Scene Optimizer
     * @param  {Scene} scene
     * @param  {number} targetFps (Default: 30)
     */
    constructor(scene: Scene, targetFps?: number);
    /**
     * Enable the optimization of hardware scaling
     * @param  {number} priority (Default: 0)
     * @param  {number} maxScale (Default: 0.5)
     * @param  {number} steps (Default: 0.25)
     */
    addHardwareScalingOptimization(priority?: number, maxScale?: number, steps?: number): void;
    /**
     * Initializes the SceneOptimizer with default options (HS-Optiomization)
     */
    init(): void;
    /**
     * Starts the SceneOptimizer
     */
    start(): void;
    /**
     * Logs the final optimization details
     * @param  {SceneOptimization[]} optimizations
     */
    private onFailureOrEnd;
}
