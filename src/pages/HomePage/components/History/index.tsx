import './index.scss';
import { useContext, useState, useEffect } from "react";
import { PrimaryButton } from "../../../../components/buttons";
import { HomeContext, GET_HISTORY } from "../../../../contexts/homeContext";
import { IHistoryItem } from "../../../../data/home";
import { getHistoryItems } from "../../../../services/homeServices";

const LIMIT_ITEMS = 8;
const History = ()=>{

    const homeContext = useContext(HomeContext);

    const [historyItems,setHistoryItems] = useState<IHistoryItem[]>([]);
    const [limitItems, setLimitItems] = useState(LIMIT_ITEMS);

    const fetchHistoryItems = ()=>{
        getHistoryItems().then(response =>{
            homeContext.dispatch({type: GET_HISTORY, historyItems: response})
        });
    }

    const handleShowMoreHistory = ()=>{
        setLimitItems(limitItems + LIMIT_ITEMS)
    }

    useEffect(()=>{
        fetchHistoryItems();
    },[])

    useEffect(()=>{
        setHistoryItems(homeContext.state.filterdHistoryItems)
        setLimitItems(LIMIT_ITEMS)
    },[homeContext.state.filterdHistoryItems])
    
    if(historyItems.length === 0){
        return null;
    }

    return (
        <div className="home-history">
            <div className="home-history__list">
                {historyItems.slice(0, limitItems).map((item, index)=>{
                    return <HistoryItem item={item} />
                })}
            </div>
            {limitItems < historyItems.length && <div className="home-history__button">
                <PrimaryButton message='記録をもっと見る' onClick={handleShowMoreHistory}/>
            </div>}
        </div>
    )
}

export default History;

const HistoryItem = ({item}:{item: IHistoryItem})=>{
    return (
        // update key to unid/id
        <div key={item.category+"-"+item.date+ Math.random()} className="home-history__list--item">
            <div className="history__item--content">
                <img src={item.image} alt="" />
                <p className="">{item.date}</p>
            </div>
        </div>
    )
}