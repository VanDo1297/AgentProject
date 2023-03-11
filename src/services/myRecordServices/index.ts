import axios from "axios"
import { diarys, excersices } from "../../data/myRecords"

const getExercises = async () => {
    // fake call API
    return await axios.get("/").then(response =>{
        return excersices
    })
}

const getDiarys = async () => {
    // fake call API
    return await axios.get("/").then(response =>{
        return diarys
    })
}

export {getExercises, getDiarys}