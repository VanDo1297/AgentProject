import './index.scss';

import { useEffect, useState,useContext  } from "react";
import { GET_EXERCIES, RecordContext } from "../../../../contexts/recordContext";
import { IExcersiceItem } from "../../../../data/myRecords";
import { getExercises } from "../../../../services/myRecordServices";

const MyExercise = ()=>{
    const recordContext = useContext(RecordContext);
    const [excersices, setExcersices] = useState<IExcersiceItem[]>([]);

    const fetchExercises = ()=>{
        getExercises().then(response =>{
            recordContext.dispatch({type: GET_EXERCIES, exercises:response})
        });
    }

    useEffect(() => {
        setExcersices(recordContext.state.exercises)
    },[recordContext.state.exercises])

    useEffect(() => {
        fetchExercises();
    },[])

    return (
        <div className="record__exercise">
            <div className="record__exercise--header d-flex flex-row align-items-center">
                <p className="record-section-title">{`MY\nEXERCISE`}</p>
                <p className="record-section-time">2021.05.21</p>
            </div>
            <div className="record__exercise--list">
                {excersices.map(exercise =>{
                    return (
                        // update key to unid / id 
                        <div key={new Date().toString() + Math.random()} className="record__exercise--item">
                            <div className="exercise__item--infor d-flex flex-row align-items-center">
                                <div className="exercise__item--dot"></div>
                                <p className="exercise__name">{exercise.name}</p>
                                <p className="exercise__time d-flex">{exercise.time}</p>
                            </div>
                            <p className="exercise__item--value">{exercise.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyExercise;