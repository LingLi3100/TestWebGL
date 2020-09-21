import { Scene } from 'babylonjs';
import { MeshManager, EnvironmentManager, CameraManager, ActionItemManager } from './mangers';
import { EntityManager } from './mangers/entity/entity.manager';
/**
 * Core class that init all
 */
export declare class Core {
    private _engine;
    private _scene;
    private _canvas;
    private _inspectorState;
    private _optimizer;
    private _meshManager;
    private _environmentManager;
    private _cameraManager;
    private _entityManager;
    private _actionItemManager;
    /**
     * Creates core class with will init engine and all mangers
     * @param {HTMLCanvasElement} canvas
     * @param {boolean} useNullEngine Null Engine is used for testing purposes only
     */
    constructor(canvas: HTMLCanvasElement);
    /**
     * Init Engine and Mangers
     * @param {boolean} useNullEngine Null Engine is used for testing purposes only
  
     */
    private initializeEngineAndManagers;
    /**
     * Create new Engine
     * @return {Engine} new Engine
     */
    private createEngine;
    /**
     * Create new Scene
     * @param {Engine} babylonEngine
     * @return {Scene} new Scene
     */
    private createScene;
    /**
     * Register all event listeners
     */
    private registerEventListeners;
    /**
     * Start the render loop
     */
    startRender(): void;
    /**
     * Stop the render loop
     */
    stopRender(): void;
    /**
     * Displays the default BabylonJS loading UI.
     */
    displayDefaultLoadingUi(): void;
    /**
     * Hides the default BabylonJS loading UI.
     */
    hideDefaultLoadingUi(): void;
    /**
     * Toggle debug inspector
     */
    toggleInspector(): void;
    /**
     * Start the scene optimization
     */
    startOptimization(): void;
    /**
     * Destroys the WebGL context and cleans up all memory
     */
    destroy(): void;
    /**
     * Gets the current mesh manager
     * @return {MeshManager}
     */
    getMeshManager(): MeshManager;
    /**
     * Gets the current environment manager
     * @return {EnvironmentManager}
     */
    getEnvironmentManager(): EnvironmentManager;
    /**
     * Gets the current camera manger
     * @return {CameraManager}
     */
    getCameraManager(): CameraManager;
    /**
     * Gets the current entity manger
     * @return {EntityManager}
     */
    getEntityManager(): EntityManager;
    /**
     * Get the Babylon Scene
     * @return {Scene}
     */
    getScene(): Scene;
    /**
     * Get the current ActionItem manager
     * @return {ActionItemManager} current ActionItem Manger
     */
    getActionItemManager(): ActionItemManager;
}
