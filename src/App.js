// import logo from './logo.svg';
// import './App.css';
// import './login.'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           drt
//         </p>
//         <a
          
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import { Routes } from 'react-router-dom/dist';
import 'bootstrap/dist/css/bootstrap.css'
const App = () => {
return (
<div className="App">

<Router>
    <Routes>
        <Route exact path="/HomePage" element={<HomePage/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/RegistrationPage" element={<RegistrationPage/>} />

    </Routes>
</Router>
 </div>
);
};

export default App;
