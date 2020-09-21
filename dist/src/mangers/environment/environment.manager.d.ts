import { Scene } from 'babylonjs';
import { MVEnvironmentConfigs, MVEnvironmentEntity } from '../../models/entity/interfaces';
/**
 * Class to manage the environment of the webGL scene.
 */
export declare class EnvironmentManager {
    private readonly _environmentService;
    private readonly _scene;
    private _environments;
    private _activeEnvironment;
    private _activeEnvironmentConfigurationCode;
    /**
     * Creates new Environment Manger
     * @param {Scene} scene
     */
    constructor(scene: Scene);
    /**
     * Get environment by id
     * @param {string} id
     * @return {{entity: MVEntity, envConfigs: MVEnvironmentConfigs}}
     */
    getEnvironmentById(id: string): MVEnvironmentEntity;
    /**
     * Updates environment by id
     * @param {string} id
     */
    updateEnvironmentConfigsById(id: string, newEnvConfigs: MVEnvironmentConfigs): void;
    /**
     * Get active environment
     * @return {{entity: MVEntity, envConfigs: MVEnvironmentConfigs}}
     */
    getActiveEnvironment(): MVEnvironmentEntity;
    /**
   * Get active environment config code
   * @return string
   */
    getActiveEnvironmentConfigurationCode(): string;
    /**
     * Sets up the default environment
     */
    setupDefaultEnvironment(): void;
    /**
     * New load
     * @param {string} baseUrl
     * @param {string} entityConfigName
     * @param {string} configurationCode
     * @return {Promise<MVEntity>}
     */
    loadEnvironment(baseUrl: string, entityConfigName: string, configurationCode: string | null): Promise<MVEnvironmentEntity>;
    /**
     * Update environment with new configuration codes
     * @param {string} entityId
     * @param {string} configurationCode
     * @return {Promise<void>}
     */
    updateEnvironment(entityId: string, configurationCode: string): Promise<void>;
    /**
     * Remove environment
     * @param {string} id
     */
    removeEnvironment(id: string): void;
    /**
     * Update existing environment that is hidden
     * @param {MVEntity} entity
     * @param {string} configurationCode
     * @return {Promise<void>}
     */
    private updateExistingEnvironment;
}
