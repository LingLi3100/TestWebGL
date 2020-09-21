import { BaseTexture, Scene } from 'babylonjs';
/**
 * Texture service for handling textures in scene
 */
export declare class TextureService {
    private readonly _scene;
    /**
     * Create a new TextureService
     * @param {Scene} scene
     */
    constructor(scene: Scene);
    /**
     * Create or get a texture if exist in scene
     * @param {any} config
     * @param {string} rootUrl
     * @return {BaseTexture}
     */
    createOrGetTexture(config: BaseTexture, rootUrl: string): Promise<BaseTexture>;
}
