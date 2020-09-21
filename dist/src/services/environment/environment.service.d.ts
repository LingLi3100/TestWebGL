import { Scene } from 'babylonjs';
import { MVEntityConfig, MVEnvironmentConfigs } from '../../models/entity/interfaces';
import { MVEntity } from '../../models/entity/mv-entity';
/**
 * Service to modify the environment of the BabylonJS based scene
 */
export declare class EnvironmentService {
    private readonly _scene;
    private readonly _textureService;
    /**
     * Creates a new BabylonJS based Environment Service
     * @param {Scene} scene - the Babylon scene
     */
    constructor(scene: Scene);
    /**
     * Setup the default environment with lights
     */
    setupDefaultEnvironment(): void;
    /**
     * Set a new background image
     * @param {string} textureUrl
     * @param {string} texturesName
     * @return {Promise<void>}
     */
    setBackgroundImage(textureUrl: string, texturesName: string): Promise<void>;
    /**
     * Applies settings from Environment config file
     * @param {MVEntityConfig} entityConfig
     * @param {MVEnvironmentConfigs} environmentConfigs
     * @param {string} configurationCode
     */
    applyEnvironmentSettings(entityConfig: MVEntityConfig, environmentConfigs: MVEnvironmentConfigs, configurationCode: string): Promise<void>;
    /**
     * Load EnvironmentConfigs
     * @param {string} url
     * @return {Promise<MVEnvironmentConfigs | null>}
     */
    loadConfigFile(url: string): Promise<MVEnvironmentConfigs | null>;
    /**
     * Enable / Hide environment
     * @param {MVEntity} environment
     * @param {boolean} hide
     */
    setEnvironmentEnableStatus(environment: MVEntity, hide?: boolean): void;
    /**
     * Get a MVEnvironmentConfig from configuration codes
     * @param {MVEnvironmentConfigs} environmentConfigs
     * @param {string} configurationCode
     * @return {MVEnvironmentConfig}
     */
    private getEnvironmentConfigFromConfigurationString;
    /**
     * Parse lights
     * @param {any} lightJSON
     */
    private parseLights;
    /**
     * Applies settings to an existing light
     * @param {PointLight | DirectionalLight | SpotLight | HemisphericLight} light - a Babylon light
     * @param {any} settings  settings
     */
    private applyLightSettings;
    /**
     * Clean scene lights, layers
     */
    private clearScene;
}
