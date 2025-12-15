import './Filter.css'

function CollectionFilter(){
    return(
        <div className='filter-container'>
            <button className='filter-button-style'>TITLE </button>
            <button className='filter-button-style'>ARTIST</button>
            <button className='filter-button-style'>ALBUM RELEASE</button>
            <div className='filter-container-right'>
                 <button className='filter-button-style'>DATE </button>
            </div>
        </div>
    )
}

export default CollectionFilter;