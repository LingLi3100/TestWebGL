import { Scene, Material, NodeMaterial } from 'babylonjs';
import { MVMaterial } from '../../models/material';
/**
 * Material Class
 */
export declare class MaterialService {
    private readonly _scene;
    /**
     * Create new Material-Service
     * @param {Scene} scene
     */
    constructor(scene: Scene);
    /**
     * Get material from scene with id
     * @param {string} id
     * @return {Material}
     */
    getMaterial(id: string): Material;
    /**
     * Create a new Material
     * @param {string} materialBaseUrl
     * @param {string} textureBaseUrl
     * @param {string} id
     * @param {string} name
     * @param {string} fileName
     * @return {Promise<MVMaterial|NodeMaterial>}
     */
    createMaterial(materialBaseUrl: string, textureBaseUrl: string, id: string, name: string, fileName?: string): Promise<MVMaterial | NodeMaterial>;
    /**
     * Delete material from id
     * @param {string} id
     */
    deleteMaterial(id: string): void;
}
