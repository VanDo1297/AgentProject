import axios from "axios"
import { columnDataList } from "../../data/column"

const getColumnData = async () => {
    // fake call API
    return await axios.get("/").then(response =>{
        return columnDataList
    })
}

export {getColumnData}