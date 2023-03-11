import './index.scss';

const columnCategories = [
    {
        title:"RECOMMENDED\nCOLUMN",
        contentMessage:"オススメ"
    },
    {
        title:"RECOMMENDED\nDIET",
        contentMessage:"ダイエット"
    },
    {
        title:"RECOMMENDED\nBEAUTY",
        contentMessage:"美容"
    },
    {
        title:"RECOMMENDED\nHEALTH",
        contentMessage:"健康"
    }
]

const Category = ()=>{
  
    return (
        <div className='column__category'>
            <div className='column__category--list'>
                {columnCategories.map((item)=>{
                    return (
                        <div key={Math.random() +"-column-category"} className="column__category--item">
                            <p className='category__item--title'>{item.title}</p>
                            <div className="divide"></div>
                            <p className="category__item--message">{item.contentMessage}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category;


