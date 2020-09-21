import { Scene, AbstractMesh, AnimationGroup } from 'babylonjs';
import { AssetLoader } from './asset-loader.service';
/**
 * Datahub Asset Loader Class
 */
export declare class AssetLoaderDatahub implements AssetLoader {
    private readonly _scene;
    /**
     * Creates a datahub asset loader class
     * @param {Scene} scene
     */
    constructor(scene: Scene);
    /**
     * Loads meshes from datahub
     * @param {string} url
     * @param {string} fileName
     */
    loadMeshes(url: string, fileName: string): Promise<AbstractMesh[]>;
    /**
     * Loads animationGroups from datahub
     * @param {string} url
     * @param {string} fileName
     */
    loadAnimationGroups(url: string, fileName: string): Promise<AnimationGroup[]>;
}
