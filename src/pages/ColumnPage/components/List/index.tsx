import './index.scss';

import { useContext, useEffect, useState } from "react";
import { PrimaryButton } from "../../../../components/buttons";
import { ColumnContext, GET_COLUMN } from "../../../../contexts/columnContext";
import { columnDataList, IColumnDataItem } from "../../../../data/column";
import { getColumnData } from "../../../../services/columnServices";

const ITEM_LIMIT =  8;

const ColumnData = () =>{

    const columnContext = useContext(ColumnContext);
    const [itemLimits, setItemLimits] = useState(ITEM_LIMIT)
    const [data, setData] = useState<IColumnDataItem[]>([]);

    const fetchColumnData = ()=>{
        getColumnData().then(response =>{
            columnContext.dispatch({type: GET_COLUMN, data:response})
        });
    }

    useEffect(() => {
        setData(columnContext.state.data)
    },[columnContext.state.data])

    useEffect(() => {
        fetchColumnData();
    },[])


    return (
        <div className='column__data'>
            <div className='column__data--list'>
                {data.slice(0, itemLimits).map((item)=>{
                    return <ColumnDataItem item={item} />
                })}
            </div>
            { itemLimits < columnDataList.length && <div className="column__button--diary">
                <PrimaryButton message='コラムをもっと見る' onClick={()=>setItemLimits(itemLimits + ITEM_LIMIT)} />
            </div> }
        </div>
    )
}

export default ColumnData;


const ColumnDataItem = ({item}:{item: IColumnDataItem})=>{

    return (
        // update key is unid
        <div key={item.description+"-"+Math.random()} className="column__data--item">
            <div className="column-data__item--thumbnail">
                <div className="content">
                    <img src={item.thumbnail} alt="" />
                    <p className="column-data__item--datetime">{item.date} {item.time}</p>
                </div>
            </div>
            <p className='column-data__item--description'>{item.description}</p>
            <div className="column-data__item--hashtag-list">
                {item.hashtag.map((tag,index)=>{
                    return(
                        <div className="column-data__item--hashtag-item">{tag}</div>
                    )
                })}
            </div>
        </div>
    )
}