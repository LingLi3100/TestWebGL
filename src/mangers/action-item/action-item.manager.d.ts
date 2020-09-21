import { MeshManager } from '..';
import { ActionItem } from '../../models/action-item';
import { Scene } from 'babylonjs';
import { ActionItemOptions } from '../../models/action-item';
import { Observable } from 'rxjs';
/**
 * Class to manage all ActionItems in the scene
 */
export declare class ActionItemManager {
    private readonly _meshManager;
    private readonly _scene;
    private readonly _actionsService;
    private readonly _materialService;
    private _actionItems;
    private _fadeAnimation;
    /**
     * Creates new ActionItem Manager
     * @param  {Scene} scene
     * @param  {MeshManager} meshManager
     */
    constructor(scene: Scene, meshManager: MeshManager);
    /**
     * create ActionItems from JSON document
     * @param  {string} baseUrl
     * @param  {string} url
     * @return {Promise<ActionItem[]>}
     */
    createActionItemsFromJSON(baseUrl: string, url: string): Promise<ActionItem[]>;
    /**
     * Create a new ActionItem
     * @param {string} materialBaseUrl
     * @param {string} textureBaseUrl
     * @param  {ActionItemOptions} options ActionItem options
     * @return {Promise<ActionItem>}
     */
    createActionItem(materialBaseUrl: string, textureBaseUrl: string, options: ActionItemOptions): Promise<ActionItem>;
    /**
     * Subscribe to the click event of an ActionItem
     * @param  {string} id ID of the ActionItem to subscribe to
     * @return {Observable<ActionItem>}
     */
    subscribeToActionItem(id: string): Observable<ActionItem>;
    /**
     * Gets an action item by id
     * @param {string} id
     * @return {ActionItem}
     */
    getActionItem(id: string): ActionItem;
    /**
     * Reset Action Items
     */
    resetActionItems(): void;
}
