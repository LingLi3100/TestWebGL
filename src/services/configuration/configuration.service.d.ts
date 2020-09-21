import { MVEntity } from '../../models/entity/mv-entity';
/**
 * Configuration Service Class to update the layers and materials of an entity depending based on a CWS or JSON based rule engine
 */
export interface ConfigurationService {
    /**
     * Sets the default configuration of an entity
     * @param {MVEntity} entity Entity
     * @returns {MVEntity} Entity
     */
    setDefaultConfiguration(entity: MVEntity): MVEntity;
    /**
     * Updates the current configuration of an entity
     * @param configurationCodes Configuration codes
     * @param {MVEntity} entity Entity
     * @returns {MVEntity} Entity
     */
    updateConfiguration(entity: MVEntity, configurationCodes: string[]): MVEntity;
}
