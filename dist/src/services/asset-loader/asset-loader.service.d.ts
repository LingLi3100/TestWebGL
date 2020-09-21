import { AbstractMesh, AnimationGroup } from 'babylonjs';
/**
 * Asset Loader Interface
 */
export interface AssetLoader {
    /**
     * Loads a mesh from an external resource
     * @param url
     * @param fileName
     * @return {Promise<void>} loadtask
     */
    loadMeshes(url: string, fileName: string): Promise<AbstractMesh[]>;
    /**
     * Loads AnimationGroups from an external resource
     * @param url
     * @param fileName
     * @return {Promise<void>} loadtask
     */
    loadAnimationGroups(url: string, fileName: string): Promise<AnimationGroup[]>;
}
