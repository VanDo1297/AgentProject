import './index.scss';

import { useContext, useEffect, useState } from "react";
import { PrimaryButton } from "../../../../components/buttons";
import { IDairyItem } from "../../../../data/myRecords";
import { RecordContext, GET_DIARYS } from '../../../../contexts/recordContext';
import { getDiarys } from '../../../../services/myRecordServices';


const DIARY_ITEM_LIMIT =  8;
const MyDiary = ()=>{

    const recordContext = useContext(RecordContext);
    const [itemLimits, setItemLimits] = useState(DIARY_ITEM_LIMIT)
    const [diarys, setDiarys] = useState<IDairyItem[]>([]);

    const fetDiarys = ()=>{
        getDiarys().then(response =>{
            recordContext.dispatch({type: GET_DIARYS, diarys:response})
        });
    }

    useEffect(() => {
        setDiarys(recordContext.state.diarys)
    },[recordContext.state.diarys])

    useEffect(() => {
        fetDiarys();
    },[])

    return (
        <div className='record__diary'>
            <div className="record-section-title">MY DIARY</div>
            <div className="record__diary--list">
                {diarys.slice(0, itemLimits).map(diary =>{
                    return (
                        <div key={diary.id} className="record__diary--item">
                            <div className="diary__item--date">{diary.date}</div>
                            <div className="diary__item--time">{diary.time}</div>
                            <div className="diary__item--name">{diary.name}</div>
                            <div className="diary__item--note">{diary.note}</div>
                        </div>
                    )
                })}
                
            </div>
            { itemLimits < diarys.length && <div className="record__button--diary">
                <PrimaryButton message='自分の日記をもっと見る' onClick={()=>setItemLimits(itemLimits + DIARY_ITEM_LIMIT)} />
            </div> }
        </div>
    )
}

export default MyDiary
