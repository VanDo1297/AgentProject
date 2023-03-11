import './index.scss';

//logo
import logo from '../../assets/logo.png';
// icon
import noteIcon from '../../assets/icon/note.png';
import prizeIcon from '../../assets/icon/prize.png';
import inforIcon from '../../assets/icon/info.png';
import menuIcon from '../../assets/icon/menu.png';

import { useState } from 'react';
import ScrollToTop from '../scrollToTop';

const Header = ()=>{

    
    const [isShowDrawer,setIsShowDrawer] = useState(false);

    const handleMenuClick = ()=>{
        setIsShowDrawer(!isShowDrawer);
    }

    
    return (
        <header>
            <div className="logo">
                <a href="/"><img src={logo} alt="" /></a>
            </div>

            <Navbar  handleMenuClick={handleMenuClick}/>
            {isShowDrawer && <DrawerMenu />}
            <ScrollToTop />
        </header>
    )
}

export default Header;

const Navbar  = ({handleMenuClick}:{handleMenuClick:()=>void})=>{

    const [informationCount, setInformationcount] = useState(1);
    
    return (
        <nav>
            <ul>
                <li className='nav-item'>
                    <a href='/my-record'> 
                        <img src={noteIcon} alt="" />
                        <span>自分の記録</span>
                    </a>
                </li>
                <li className='nav-item'> 
                    <a href='#'> 
                        <img src={prizeIcon} alt="" />
                        <span>チャレンジ</span>
                    </a>
                </li>
                <li className='nav-item infor-item'>
                    <a href='#'> 
                        <img style={{marginRight: informationCount > 0 ? "20px" :"10px"}} src={inforIcon} alt="" />
                        <span>お知らせ</span>
                        {informationCount > 0 && <div className='badge'>{informationCount}</div>}
                    </a>
                </li>
                <li onClick={handleMenuClick} className='nav-item'>
                    <img src={menuIcon} alt="" />
                </li>
            </ul>
        </nav>
    )
}

const DRAWER_ITEMS = [
    {
        navigateUrl:"/my-record",
        name:"自分の記録"
    },
    {
        navigateUrl:"#",
        name:"体重グラフ"
    },
    {
        navigateUrl:"#",
        name:"目標"
    },
    {
        navigateUrl:"#",
        name:"選択中のコース"
    },
    {
        navigateUrl:"/column",
        name:"コラム一覧"
    },
    {
        navigateUrl:"#",
        name:"設定"
    },
]
const DrawerMenu = () =>{
    return (
        <div className="drawer">
            <div className="drawer-list">
                {DRAWER_ITEMS.map((item,index)=>{
                    return (
                        <div className="drawer-item">
                            <a href={item.navigateUrl}>
                                {item.name}
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}