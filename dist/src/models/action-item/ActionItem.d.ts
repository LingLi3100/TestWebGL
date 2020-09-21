import { Mesh, Scene } from 'babylonjs';
import { ActionItemOptions, ActionItemState } from './interfaces';
import { Observable } from 'rxjs';
/**
 * ActionItem class
 */
export declare class ActionItem {
    /** Defines the ID of the action item */
    id: string;
    /** Defines the plane which is the action item in the scene */
    plane: Mesh;
    /** Defines the collisionSphere which handle the click event later. It is bigger, for easier click events than the plane. */
    collisionSphere: Mesh;
    /** Defines the click event. If a user clicks on the action item this event will be fired. */
    private _clicked$;
    clicked$: Observable<ActionItem>;
    /** Defines the sates of the action items, which contains the position of the action item in the scene */
    private readonly _states;
    /** Defines the current index of the active state */
    private _stateIndex;
    /** Defines the state event. If a new state on the action item is set, this event is fired. */
    private _state$;
    /** Defines the blocked status. To avoid multiple cliks at the same time an action item gets blocked until the next state. */
    private _blocked;
    private _fadeAnimation;
    private _scene;
    /**
     * Creates a new ActionItem
     * @param {Scene} scene
     * @param {ActionItemOptions} options
     */
    constructor(scene: Scene, options: ActionItemOptions);
    /**
     * Get the current state of the ActionItem
     * @return {ActionItemState}
     */
    getState(): ActionItemState;
    /**
     * Gets all states of the ActionItem.
     * @return {ActionItemState[]}
     */
    getStates(): ActionItemState[];
    /**
     * Go to next state and show ActionItem
     */
    nextState(): void;
    setState(id: string): void;
    /**
     * Emit click event and hide ActionItem
     */
    emitClickEvent(): void;
    /**
     * Update the position of the ActionItem
     * @param  {Vector3} position
     */
    private updatePosition;
    /**
     * Plays the fade animation
     */
    playFadeAnimation(): void;
    /**
     * Blocks the action item from click events.
     */
    block(): void;
    /**
     * Unblocks the action item from click events.
     */
    unblock(): void;
    /**
     * Unloads the action item.
     */
    unload(): void;
}
