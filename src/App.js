import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingScreen from './pages/LoadingScreen';
import Landing from './pages/Landing';
import './assets/styles/main.scss'


function App() {

  // const [userKey, setUserKey] = useState('')
  const [theme, setTheme] = useState('light');
  const dark = theme === 'dark'

  return (
    <div className="App">
      <LoadingScreen theme={theme} setTheme={setTheme}>
        <p className="ComingSoon"> Coming Soon - Under Construction</p>
      </LoadingScreen>
      {/* <Landing /> */}
    </div>
  //   <Router>
  //   <div>
  //     <Nav />
  //     <Switch>
  //       <Route exact path={["/", "/books"]}>
  //         <Books />
  //       </Route>
  //       <Route exact path="/books/:id">
  //         <Detail />
  //       </Route>
  //       <Route>
  //         <NoMatch />
  //       </Route>
  //     </Switch>
  //   </div>
  // </Router>
  );
}




export default App;