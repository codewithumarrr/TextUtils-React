import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About"
import {Route,Switch,BrowserRouter as Router} from "react-router-dom";



function App() {

  const [mode,setMode] = useState('light');

  
  const modeToggler = ()=>{
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(0 52 117)';
        showAlert("light mode is enabled","success");
      }else{

      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("dark mode is enabled","success");
    }
  }

  
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <Router>
          
              <Navbar title="TextUtilz" aboutText="About Us" toggleMode={mode} toggleMethod={modeToggler}  />

              <Alert alert={alert} />
              

            <div className="container my-3">
        <Switch>

              <Route path="/about">
                  <About toggleMode={mode}/>
              </Route>
            <Route path="/">
                <TextForm toggleMode={mode} showAlert={showAlert}/>
            </Route>



               
      </Switch>
          </div>
          <Footer/>
    </Router>
    </>
  );
}

export default App;
