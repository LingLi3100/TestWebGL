import { PBRMaterial, Scene } from 'babylonjs';
/**
 * MVMaterial for a customized material which extending the PBRMaterial from babylonjs
 */
export declare class MVMaterial extends PBRMaterial {
    /**
     * Create a new MVMaterial
     * @param {string} name
     * @param {string} id
     * @param {Scene} scene
     * @param {any} materialConfig
     * @param {string} texturesBaseUrl
     */
    constructor(name: string, id: string, scene: Scene, materialConfig?: any, texturesBaseUrl?: string);
    /**
     * Get Class Name
     * @return {string}
     */
    static getClassName(): string;
    /**
     * parse material from config
     * @param {string} name
     * @param {string} id
     * @param {any} materialConfig
     * @param {Scene} scene
     * @param {string} rootUrl
     */
    private parseMaterialFromConfig;
    /**
     * Sets inspectable custom properties on the material
     */
    private setInspectableCustomProperties;
}
