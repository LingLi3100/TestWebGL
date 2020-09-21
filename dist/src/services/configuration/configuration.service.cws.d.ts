import { ConfigurationService } from './configuration.service';
import { MVEntity } from '../../models/entity/mv-entity';
/**
 * Configuration Service Class to update the layers and materials of an entity depending based on a CWS based rule engine
 */
export declare class ConfigurationServiceCWS implements ConfigurationService {
    /**
     * Sets the default configuration of an entity
     * @param {MVEntity} entity
     */
    setDefaultConfiguration(): MVEntity;
    /**
     * Updates the current configuration of an entity
     * @param {MVEntity} entity
     * @param {string[]} configurationCodes Configuration codes
     */
    updateConfiguration(entity: MVEntity, configurationCodes: string[]): MVEntity;
}
