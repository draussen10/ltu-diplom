import React from 'react';

interface ItemCardProps {
    itemCardText: string,
    itemCardPhoto?: string[]
}
const ItemCard = ({itemCardText, itemCardPhoto}: ItemCardProps) => {
    return (
        <div>
            <div style={{marginBottom: '40px'}} dangerouslySetInnerHTML={{ __html: itemCardText }} />
            {itemCardPhoto?.map(photo => <img src={photo} alt={photo} style={{marginBottom: '10px'}} />)}
        </div>
    );
};

export default ItemCard;