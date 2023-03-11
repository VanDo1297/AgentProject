import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { ColumnContextProvider } from "./contexts/columnContext";
import { HomeContextProvider } from "./contexts/homeContext";
import { RecordContextProvider } from "./contexts/recordContext";
import MyColumnPage from "./pages/ColumnPage";
import HomePage from './pages/HomePage';
import MyRecordPage from "./pages/MyRecord";

const App = () => {
  return (
    <div className="App">
      <Router>
        <HomeContextProvider>
        <RecordContextProvider>
        <ColumnContextProvider>
          <Header />  

          <Switch>
            <Route path='/' exact component={HomePage} ></Route>
            <Route path='/my-record' exact  component={MyRecordPage} ></Route>
            <Route path='/column' exact  component={MyColumnPage} ></Route>
          </Switch>
          
          <Footer />
        </ColumnContextProvider>
        </RecordContextProvider>
        </HomeContextProvider>
      </Router>
    </div>
  );
}

export default App;
