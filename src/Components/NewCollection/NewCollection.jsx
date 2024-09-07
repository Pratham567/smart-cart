import './NewCollection.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollection = () => {
    return (
        <div className="new-collection">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="new-collection-item">
                {
                    new_collection.map((collection, i) => {
                        return <Item key={i} itemInfo={collection} />
                    })
                }

            </div>

        </div>
    );
}

export default NewCollection;