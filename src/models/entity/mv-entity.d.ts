import { MVEntityConfig, MVMeshSettingsJson } from './interfaces';
import { MVRuleEngineJson, MVMaterialMappingsJson } from '../configuration/interfaces';
import { MVLayer } from './mv-layer';
import { Scene, AnimationGroup } from 'babylonjs';
import { MVMaterialMapping } from '../material/mv-material-mapping';
/**
 * Entity class to manage a configurable product or environment.
 */
export declare class MVEntity {
    readonly name: string;
    readonly uuid: string;
    readonly entityConfig: MVEntityConfig;
    readonly layers: MVLayer[];
    readonly materialMappings: MVMaterialMapping[];
    ruleEngineJson?: MVRuleEngineJson;
    meshSettingsJson?: MVMeshSettingsJson;
    materialMappingsJson?: MVMaterialMappingsJson;
    private _activeConfigurationCodes;
    private _assetLoader;
    private _scene;
    private _materialService;
    private _configurationService;
    private _meshService;
    private _materialsBaseUrl;
    private _texturesBaseUrl;
    private _rig;
    private _rootNode;
    private _animationGroups;
    /**
     * Creates a new MVEntity
     * @param {MVEntityConfig} entityConfig
     * @param {string} entityUuid
     * @param {Scene} scene
     */
    constructor(entityConfig: MVEntityConfig, entityUuid: string, scene: Scene);
    /**
     * Sets the default configuration of the entity by using the configuration service. Initializes the layers, material allocators and switch materials of the entity. Does not actually apply the default configuration to the scene. It only prepares the entity before it is applied to the scene in the applyConfiguration function.
     * @return {Promise<void>}
     */
    setDefaultConfiguration(): Promise<void>;
    /**
     * Updates the configuration of the entity based on passed configuration codes.
     * @param {string[]} configurationCodes
     * @return {Promise<any>}
     */
    updateConfiguration(configurationCodes: string[]): Promise<void>;
    /**
     * Applies the current configuration to the Babylon Scene.
     * Loads / unloads meshes and materials.
     * @param {MVEntity} entity
     * @return {Promise<any>}
     */
    applyConfiguration(): Promise<void[]>;
    /**
     * Applies the current configuration to a layer.
     * Loads / unloads meshes.
     * @param {MVLayer} layer
     * @return {Promise<AbstractMesh[]>} layer that could be removed
     */
    private applyMeshesToLayer;
    /**
     * Applies the correct materials to all meshes of a layer
     * @param {MVLayer} layer
     */
    private applyMaterialsToLayer;
    /**
     * Apply mesh settings from JSON file if it exists.
     * @param {AbstractMesh} mesh
     */
    private applyMeshSettingsFromJson;
    /**
     * Processes the original material of a mesh that was imported into the application.
     * Imported materials are always mapped to target material (material allocator or target material).
     * If the material is a material allocator is is directly mapped to a target material and added to the scene. If the material is a switch material the mesh is only linked to the correconding switch material. After all materials have been processed the switch materials are assigned to the meshes and added to the scene.
     * @param {AbstractMesh} mesh
     * @return {Promise<void>}
     */
    private processOriginalMaterial;
    /**
     * Gets the target material from a material mapping.
     * @param {MVMaterialMappingJson} materialMapping
     * @return {Promise<Material>}
     */
    private getTargetMaterialFromMaterialMapping;
    /**
     * Updates all switch materials. Assigns the correct target materials to objects that use switch materials. Before this function is called the switchMaterials property must already have been updated by calling the updateConfiguration Function on the configurationService.
     * @return {Promise<any>}
     */
    private updateSwitchMaterials;
    /**
     * Updates a switch material. Assigns the correct target material to the objects that use the passed switch material. Before this function is called the passed switchMaterial property must already have been updated by calling the updateConfiguration Function on the configurationService.
     * @param {MVMaterialMapping} materialMapping
     * @return {Promise<any>}
     */
    private updateSwitchMaterial;
    /**
     * Gets the layers of the entity
     * @return {MVLayer[]} Layers
     */
    getLayers(): MVLayer[];
    /**
     * Adds a layer to the entity
     * @param {MVLayer} layer
     */
    addLayer(layer: MVLayer): void;
    /**
     * Gets all material mappings of the entity
     * @return {MVMaterialMapping[]}
     */
    getMaterialMappings(): MVMaterialMapping[];
    /**
     * Adds a material mapping to the entity
     * @param {MVMaterialMapping} materialMapping
     */
    addMaterialMapping(materialMapping: MVMaterialMapping): void;
    /**
     * Gets a material mapping by name
     * @param {string} materialMappingName
     * @return {MVMaterialMapping} Material Allocator
     */
    getMaterialMapping(materialMappingName: string): MVMaterialMapping;
    /**
     * Updates a material mapping by name.
     * @param {string} materialMappingName
     * @param {MVMaterialMapping} updatedMaterialMapping
     */
    updateMaterialMapping(materialMappingName: string, updatedMaterialMapping: MVMaterialMapping): Promise<void>;
    /**
     * Gets an animation group by name
     * @param {string} name
     * @return {AnimationGroup}
     */
    getAnimationGroup(name: string): AnimationGroup;
    /**
     * Plays an animation group by name. Resolves the returned promise when the animation has finished playing.
     * @param {string} animationGroupName
     * @param {number} speedRatio Defines how fast the animation is supposed to be played. 1 by default. 2 = twice as fast.
     * @return {Promise<void>}
     */
    playAnimationGroup(animationGroupName: string, speedRatio?: number): Promise<void>;
    /**
     * Inverses an animation group by name.
     * @param {string} animationGroupName
     */
    inverseAnimationGroup(animationGroupName: string): void;
}
