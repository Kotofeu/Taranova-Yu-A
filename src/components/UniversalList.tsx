import {ReactNode} from 'react';

interface UniversalListProps<T> {
    className: string;
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

export default function UniversalList<T> (props: UniversalListProps<T>){
    return (
        <div className={props.className}>
            {props.items && props.items.map( props.renderItem)}
        </div>
       
    )
}

