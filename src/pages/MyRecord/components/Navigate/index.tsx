import './index.scss';

// background image
import navigationIcon1 from '../../../../assets/photo/MyRecommend-1.jpg';
import navigationIcon2 from '../../../../assets/photo/MyRecommend-2.jpg';
import navigationIcon3 from '../../../../assets/photo/MyRecommend-3.jpg';

const navigateList = [
    {
        bgImg :navigationIcon1,
        navigateUrl :"",
        title:"BODY RECORD",
        buttonMessage:"自分のカラダの記録"
    },
    {
        bgImg :navigationIcon2,
        navigateUrl :"",
        title:"MY EXERCISE",
        buttonMessage:"自分の運動の記録"
    },
    {
        bgImg :navigationIcon3,
        navigateUrl :"",
        title:"MY DIARY",
        buttonMessage:"自分の日記"
    },
];

const Navigate = ()=>{
    return (
        <div className="record__navigate">
            <div className="record__navigate--list">
                {navigateList.map(navigate =>{
                    return (
                        <div className="navigate__item" key={navigate.title+"-"+navigate.buttonMessage}>
                            <div style={{
                                backgroundImage:`url(${navigate.bgImg})`
                            }} className="navigate__item--background">
                            
                            </div>
                            <div className="navigate__item--content">
                                <div className="overlay"></div>
                                <div className="navigate__item--content-value">
                                    <p>{navigate.title}</p>
                                    <button>{navigate.buttonMessage}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Navigate;