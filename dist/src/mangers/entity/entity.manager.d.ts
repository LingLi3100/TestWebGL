import { MVEntity } from '../../models/entity/mv-entity';
import { Scene } from 'babylonjs';
/**
 * Class to manage all entities (products and environments) of the webGL scene.
 */
export declare class EntityManager {
    private _entities;
    private readonly _scene;
    /**
     * Creates a new EntityManager
     * @param {Scene} scene Babylon scene
     */
    constructor(scene: Scene);
    /**
     * Loads a new entity based on an entity config file and initial configuration codes
     * @param {string} baseUrl
     * @param {string} entityConfigName
     * @param {string} configurationCodes Configuration Codes
     * @param {string} entityUuid Entity UUID
     * @return {Promise<MVEntity>} Entity
     */
    loadEntity(baseUrl: string, entityConfigName: string, configurationCodes: string[], entityUuid: string): Promise<MVEntity>;
    /**
     * Updates an entity based on configuration codes
     * @param {string} entityUuid Entity UUID
     * @param {string[]} configurationCodes Configuration Codes
     * @return {Promise<MVEntity>} Entity
     */
    updateEntityConfiguration(entityUuid: string, configurationCodes: string[]): Promise<MVEntity>;
    /**
     * Gets an existing entity by uuid
     * @param {string} uuid Uuid
     * @return {MVEntity}
     */
    getEntity(uuid: string): MVEntity;
}
