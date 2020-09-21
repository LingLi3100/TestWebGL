import { AbstractMesh, Scene, AnimationGroup } from 'babylonjs';
import 'babylonjs-loaders';
import { AssetLoader } from './asset-loader.service';
/**
 * Local Asset Loader
 */
export declare class AssetLoaderLocal implements AssetLoader {
    private readonly _scene;
    /**
     * Creates a local asset loader
     * @param {Scene} scene
     */
    constructor(scene: Scene);
    /**
     * Loads meshes from a local location
     * @param {string} url
     * @param {string} fileName
     * @return {Promise<AbstractMesh[]>}
     */
    loadMeshes(url: string, fileName: string): Promise<AbstractMesh[]>;
    /**
     * Loads animationgroups from a local location
     * @param {string} url
     * @param {string} fileName
     * @return {Promise<AbstractMesh[]>}
     */
    loadAnimationGroups(url: string, fileName: string): Promise<AnimationGroup[]>;
}
