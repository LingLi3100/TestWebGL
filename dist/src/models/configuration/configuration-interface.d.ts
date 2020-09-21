import { MVMaterialMapping } from '../material/mv-material-mapping';
export declare enum MVRuleEngineTypes {
    'JSON' = "JSON",
    'CWS' = "CWS"
}
/**
 * Interfaces for Rule Engine files
 * (productName_rule_engine.json)
 */
export interface MVRuleEngineJson {
    defaultConfigurationCodes: string[];
    nonConfigurableLayers: string[];
    properties: MVRuleEngineProperty[];
}
export interface MVRuleEngineProperty {
    code: string;
    layerNames?: string[];
    materialSchemes?: MVMaterialScheme[];
}
export interface MVMaterialScheme {
    switchMaterialName: string;
    switchMaterialSlot: string;
}
export interface MVMaterialMappingJson {
    name: string;
    mapping: string;
}
/**
 * Interfaces for Switch Material Mapping files
 * (productName_material_mappings.json)
 */
export interface MVMaterialMappingsJson {
    materialAllocators: MVMaterialMappingJson[];
    switchMaterials: MVSwitchMaterialMapping[];
}
export interface MVSwitchMaterialMapping {
    name: string;
    slots: MVMaterialMapping[];
}
