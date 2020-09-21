import { Vector3 } from 'babylonjs';
export interface ActionItemsOptions {
    /** */
    defaultMaterial: string;
    /** */
    actionItems: ActionItemOptions[];
}
export interface ActionItemOptions {
    /** relative url to material folder */
    materialsUrlRelative: string;
    /** relative url to texture folder  */
    texturesUrlRelative: string;
    /** id of action item */
    id: string;
    /** plane size */
    size: number;
    /** material name.json */
    material: string;
    /** states of the action item */
    states: ActionItemState[];
}
export interface ActionItemState {
    /** id of the state */
    id: string;
    /** position of the action item in state */
    position: Vector3;
}
export interface ActionItemsOptionsJSON {
    /** relative url to material folder */
    materialsUrlRelative: string;
    /** relative url to texture folder */
    texturesUrlRelative: string;
    /** material name.json */
    defaultMaterial?: string;
    /** action items */
    actionItems: ActionItemOptionsJSON[];
}
export interface ActionItemOptionsJSON {
    /** id of action item */
    id: string;
    /** plane size */
    size: number;
    /** material that overrides the default one. Syntax same: name.json */
    material?: string;
    /** states of the action item */
    states: ActionItemStateJSON[];
}
export interface ActionItemStateJSON {
    /** id of the state */
    id: string;
    /** position of the action item in state */
    position: number[];
}
