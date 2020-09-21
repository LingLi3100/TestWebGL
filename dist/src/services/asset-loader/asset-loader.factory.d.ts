import { Scene } from 'babylonjs';
import { AssetLoader } from './asset-loader.service';
/**
 * Factory to get the AssetLoader
 * @constructor
 * @param {Scene} scene
 */
export declare const getAssetLoader: (scene: Scene) => AssetLoader;
