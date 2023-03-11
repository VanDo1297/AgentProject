import Category from './components/Category';
import ColumnData from './components/List';

import './styles.scss';

const ColumnPage = ()=>{
    return (
        <div className="column-page d-flex flex-column">
            <Category />
            <ColumnData /> 
        </div>
    )
}

export default ColumnPage;

