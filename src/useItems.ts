import {IBoxer} from "./boxers";
import {useCallback, useState} from "react";

export interface IItem extends IBoxer {
    selected?: boolean;
}
export const useItems = (initial: IItem[]) => {
    const [items, setItems] = useState<IItem[]>(initial);
    const selectItem = useCallback((boxerName: string) => {
        setItems((prevItems) =>
            prevItems.map((x) =>
                boxerName === x.name ? { ...x, selected: !x.selected } : x
            )
        );
    }, [setItems]);
    const selectedItems = items.filter(x => x.selected)
    return {items, selectedItems, selectItem};
}