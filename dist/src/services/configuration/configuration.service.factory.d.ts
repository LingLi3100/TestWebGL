import { MVRuleEngineTypes } from '../../models/configuration/configuration-interface';
import { ConfigurationService } from './configuration.service';
/**
 * Factory to get a configuration service to manage an entity
 * @param {MVRuleEngineTypes} ruleEngineType
 * @return {ConfigurationService} configuration service
 */
export declare const getConfigurationService: (ruleEngineType: MVRuleEngineTypes) => ConfigurationService;
