import { MVRuleEngineTypes } from '../configuration/interfaces';
import { BaseTexture, Light } from 'babylonjs';
import { MVEntity } from '../../../../mv-webgl-core/src/models/entity/mv-entity';
export interface MVEntityConfig {
    name: string;
    id: string;
    ruleEngineType: MVRuleEngineTypes;
    meshesUrlRelative: string;
    materialsUrlRelative: string;
    texturesUrlRelative: string;
    animationsUrlRelative: string;
    ruleEngineConfigUrlRelative?: string;
    materialMappingsUrlRelative?: string;
    actionItemUrlRelative?: string;
    entityConfigBaseUrl?: string;
    rigUrlRelative?: string;
    environmentEntityUrlsRelative: string[];
    animations: string[];
    cameraShotUrlsRelative: string[];
    meshSettingsRelative?: string;
    environmentConfigRelative?: string;
}
export interface MVEnvironmentEntity {
    entity: MVEntity;
    envConfigs: MVEnvironmentConfigs;
}
export interface MVEnvironmentConfigs {
    mappings: MVEnvironmentConfigMapping[];
}
export interface MVEnvironmentConfigMapping {
    code: string;
    config: MVEnvironmentConfig;
}
export interface MVEnvironmentConfig {
    clearColor: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    glowLayerIntensity?: number;
    lights: Array<Light>;
    environmentTexture?: BaseTexture;
    environmentIntensity: number;
    fogEnabled: boolean;
    fogMode: number;
    fogColor: {
        r: number;
        g: number;
        b: number;
    };
    fogDensity: number;
    fogEnd: number;
    fogStart: number;
    backgroundImageUrl?: string;
}
export interface MVMeshSetting {
    id: string;
    alphaIndex?: number;
}
export interface MVMeshSettingsJson {
    meshes: MVMeshSetting[];
}
