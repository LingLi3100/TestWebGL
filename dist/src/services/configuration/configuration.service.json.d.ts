import { ConfigurationService } from './configuration.service';
import { MVEntity } from '../../models/entity/mv-entity';
/**
 * Configuration Service Class to update the layers and switch materials of an entity depending based on a JSON based rule engine. Does not actually modify the scene.
 */
export declare class ConfigurationServiceJson implements ConfigurationService {
    /**
     * Updates the current configuration of an entity based on a rule engine JSON file and the current configuration codes.
     * Does not actually modify the scene. Only used to prepare the entity after configuration updates before the changes are applied to the scene in the MVEntity class.
     * Updates the layer visibility as well as the switch materials of the entity.
     * Before this function is called the function setDefaultConfiguration must have been called.
     * @param {MVEntity} entity
     * @param {string[]} configurationCodes
     * @return {MVEntity}
     */
    updateConfiguration(entity: MVEntity, configurationCodes: string[]): MVEntity;
    /**
     * Sets the default configuration of an entity.
     * Does not actually modify the scene.
     * Only used to prepare the entity before its meshes and materials are added to the scene in the MVEntity class.
     * @param {MVEntity} entity
     * @return {MVEntity}
     */
    setDefaultConfiguration(entity: MVEntity): MVEntity;
}
