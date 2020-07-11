import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                items
                    .filter((item, index) => index < 4) // show 4 items
                    .map(({id, ...otherItemProps}) =>  <CollectionItem key={id} {...otherItemProps}/>)
            }
            </div>
        </div>
    )
}

export default CollectionPreview;