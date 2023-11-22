import {IBoxer} from "./boxers";
import {useState} from "react";

export interface IItem extends IBoxer {
    selected?: boolean;
}
export const useItems = (initial: IItem[]) => {
    const [items, setItems] = useState<IItem[]>(initial);
    const selectItem = (boxer: IItem) => setItems(items.map(x => boxer.name === x.name ? {...x, selected: !x.selected} : x));
    const selectedItems = items.filter(x => x.selected)
    return {items, selectedItems, selectItem};
}