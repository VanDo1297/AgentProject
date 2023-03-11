import './styles.scss';

// icon
import AchievementRate from './components/Banner/AchiementRate';
import BodyFatChart from './components/Banner/BodyFatChart';
import Category from './components/Category';
import History from './components/History';

const HomePage = ()=>{
    return (
        <div className="home d-flex flex-column">
            <div className="home__banner d-flex ">
                <AchievementRate></AchievementRate>
                <BodyFatChart></BodyFatChart>
            </div>
            <Category></Category>
            <History></History>
        </div>
    )
}

export default HomePage;

