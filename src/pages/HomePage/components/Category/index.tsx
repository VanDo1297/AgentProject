import './index.scss';
import knifeIcon from '../../../../assets/icon/knife.png';
import coffeeIcon from '../../../../assets/icon/coffee.png';
import { FILTER_HISTORY, HomeContext } from '../../../../contexts/homeContext';

import {useContext, useState} from 'react';

const Category = ()=>{

    const homeContext = useContext(HomeContext);

    const [filterd, setFiltered] = useState("");

    const handleFilter = (category:string)=>{
        if(filterd === category){
            setFiltered("");
            homeContext.dispatch({type: FILTER_HISTORY, filterdHistoryItems: homeContext.state.historyItems});
            return;
        }
        setFiltered(category);
        let newHistoryItems = homeContext.state.historyItems.filter(item => item.category === category);
        homeContext.dispatch({type: FILTER_HISTORY, filterdHistoryItems: newHistoryItems});
    }

    return (
        <div className="home__category">
            <CategoryItem action={()=>handleFilter("morning")} message="Morning" ic={knifeIcon} />
            <CategoryItem action={()=>handleFilter("lunch")} message="Lunch" ic={knifeIcon} />
            <CategoryItem action={()=>handleFilter("dinner")} message="Dinner" ic={knifeIcon} />
            <CategoryItem action={()=>handleFilter("snack")} message="Snack" ic={coffeeIcon} />
        </div>
    )
}
export default Category;

const CategoryItem = ({action, ic , message}:{action:()=>void , ic:string, message: string})=>{
    return (
        <div onClick={action} className="home__category--item">
            <div className="hexagon-bg">
                <div></div>
                <div></div>
            </div>
            <div className="content">
                <img src={ic} alt="" />
                <p>{message}</p>
            </div>
        </div>
    )
}