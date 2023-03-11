import axios from "axios"
import { historyItems } from "../../data/home"

const getHistoryItems = async () => {
    // fake call API
    return await axios.get("/").then(response =>{
        console.log("wqfwq");
        return historyItems
    })
}

export {getHistoryItems}