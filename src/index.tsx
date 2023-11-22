import React, {memo} from 'react';
import ReactDOM from 'react-dom/client';
import {boxersList, IBoxer} from "./boxers";
import {IItem, useItems} from "./useItems";

const Item = memo(({item, onClick}: {item: IItem, onClick: (name: string) => void}) => {
    return (
        <button key={item.name} style={{ width: 200, margin: 10, padding: 10, border: '1px solid #bbb', backgroundColor: item.selected ? 'hsl(200, 100%, 80%)' : '#FAFAFA' , cursor: "pointer", borderRadius: 10, lineHeight: '10px' }} onClick={() => onClick(item.name)}>
            <div style={{ fontWeight: "bold", padding: '0 0 6px'}}>{item.name}</div>
            <div style={{ padding: '0 0 8px'}}>({item.division})</div>
            <div style={{ display: "flex", gap: 10, justifyContent: 'space-around', padding: '4px' }}>
                <div>Fights: {item.fights}</div>
                <div>KO's: {item.kos}</div>
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: 'space-around', padding: '4px' }}>
                <div>Win: {item.win}</div>
                <div>Loss: {item.loss}</div>
            </div>
        </button>
    )
})

const SelectedItems = ({items}: {items: IItem[]}) => {
    return <div style={{margin: '8px 10px'}}>Selected: {items.map(item => <span key={item.name} style={{ padding: '4px 8px', margin:'4px', backgroundColor: 'hsl(200, 80%, 94%)', border: '2px solid hsl(200, 100%, 80%)' , borderRadius: 10}}>{item.name}</span>)}</div>
}

const App = ({ boxers }: { boxers: IBoxer[] }) => {
    const {items, selectedItems, selectItem} = useItems(boxers);
    return (
        <div style={{display: 'flex', flexWrap: 'wrap' }}>
            <div><SelectedItems items={selectedItems}/></div>
            <div>{items.map((boxer) => <Item item={boxer} onClick={selectItem}/>)}</div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App boxers={boxersList} />
    </React.StrictMode>
);
