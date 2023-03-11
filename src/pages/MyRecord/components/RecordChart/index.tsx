import './index.scss';
import Chart from "../../../../components/chart";
import { useState } from "react";

const filters = ["日","週","月","年"];

const MyRecordChart = () =>{
    const [filter, setFilter] = useState<string>("年");
    return (
        <div className="record__chart">
            <div className="record__chart--header d-flex flex-row align-items-center">
                <p className="record-section-title">{`BODY\nRECORD`}</p>
                <p className="record-section-time">2021.05.21</p>
            </div>
            <Chart />
            <div className="record__chart--filters">
                {filters.map(f =>  <div onClick={()=>setFilter(f)} key={f} className={"chart__filter--item" + (filter === f ? " chart__filter--item-active" : "")}>{f}</div> )}
            </div>
        </div>
    )
}

export default MyRecordChart;