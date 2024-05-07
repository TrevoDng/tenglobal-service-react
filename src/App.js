import React, { Profiler, useEffect, useState } from 'react';
//import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import HomeContent from './pages/HomeContent';
import Login from './pages/login/Login';
import { useContext } from "react";
import UserProfile from './userprofile/UserProfile';
import LandingPage from './pages/login/LandingPage';
import Statement from './pages/service/statement/Statement';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import { AuthContext, AuthProvider, INTIAL_STATE } from './context/AuthContext';
import ContactUs from './pages/contactus/ContactUs';
import AboutUs from './pages/aboutus/AboutUs';
import RegisterUser from './pages/login/Register';
import History from './pages/service/history/History';
import CurrentBalance from './pages/service/CurrentBalance';
import AccountDetails from './pages/service/accountDetails/AccountDetails';
import SendProofCollectData from './pages/service/proofofpayment/SendProofCollectData';
import Helpbar from './pages/help/Help';
import HowToRegister from './pages/help/howtoregister/HowToRegister';
import HowToSend from './pages/help/howtosend/HowToSend';

function App() {
  const {currentUser} = useContext(AuthContext);                          

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />; 
    }
  
  return (
    <div className="App">
<BrowserRouter>
<Routes> 
    <Route path="/">
    <Route path="login" element={<Login />} />

        <Route
              index
              element={
                <RequireAuth>
                  <LandingPage />
                  </RequireAuth>
              }
            />
        <Route
        path="aboutus" 
        element={
        <AboutUs/>
        } 
          />
    
        <Route path="registeruser">
        <Route 
        index
        element={
      <RegisterUser/>
      } 
      />
    </Route>
    <Route path="contactus">
        <Route 
        index
        element={
      <ContactUs/>
      } 
      />
    </Route>
    <Route path="homecontent">
        <Route 
        index
        element={
          <RequireAuth>
      <HomeContent/>
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="userprofile">
        <Route 
        index
        element={
          <RequireAuth >
      <UserProfile />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="sendproofofpayment">
        <Route 
        index
        element={
          <RequireAuth>
      <SendProofCollectData />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="statement">
        <Route 
        index
        element={
          <RequireAuth>
      <Statement />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="history">
        <Route 
        index
        element={
          <RequireAuth>
      <History />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="currentbalance">
        <Route 
        index
        element={
          <RequireAuth>
      <CurrentBalance />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="accountdetails">
        <Route 
        index
        element={
          <RequireAuth>
      <AccountDetails />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="sendproof">
        <Route 
        index
        element={
          <RequireAuth>
      <SendProofCollectData />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="help">
        <Route 
        index
        element={
          <RequireAuth>
      <Helpbar />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="howtoregister">
        <Route 
        index
        element={
          <RequireAuth>
      <HowToRegister />
      </RequireAuth>
      } 
      />
    </Route>
    <Route path="howtosend">
        <Route 
        index
        element={
          <RequireAuth>
      <HowToSend />
      </RequireAuth>
      } 
      />
    </Route>
  </Route>
  
    <Route path='*' element={<PageNotFound />} />
    </Routes>

</BrowserRouter>

</div>
  );
}

export default App;