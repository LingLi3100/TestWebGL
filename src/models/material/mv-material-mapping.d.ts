import { MVMaterialMappingJson } from '../configuration/interfaces';
import { AbstractMesh } from 'babylonjs';
/**
 * Material mapping class for a switch material or material allocator.
 */
export declare class MVMaterialMapping {
    name: string;
    isSwitchMaterial: boolean;
    mapping: string;
    slots: MVMaterialMappingJson[];
    activeSlot: MVMaterialMappingJson;
    meshes: AbstractMesh[];
    /**
     * Creates a new material mapping for a material allocator or switch material.
     * Switch materials have to initialize the property "slots".
     * Material allocators have to initialize the property "mapping".
     * @param {string} name
     * @param {string} mapping
     * @param {MVMaterialMappingJson} slots
     */
    constructor(name: string, mapping: string | null, slots?: MVMaterialMappingJson[]);
    /**
     * Adds a mesh to the material mapping (only for switch materials)
     * @param {AbstractMesh} mesh
     */
    addMesh(mesh: AbstractMesh): void;
}
