import './index.scss';
import MyExercise from './components/Exercise';
import MyRecordChart from './components/RecordChart';
import Navigate from './components/Navigate';
import MyDiary from './components/Diary';

const MyRecord = ()=>{
    return (
        <div className="record d-flex flex-column">
           <Navigate />
           <MyRecordChart />
           <MyExercise />
           <MyDiary />
        </div>
    )
}

export default MyRecord;


