import { React, useContext, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import "./SidebarLayout.css";
import Logout from '../login/Logout';
import Statement from '../service/statement/Statement';
import History from '../service/history/History';
import CurrentBalance from '../service/CurrentBalance';
import UserAcount from '../../userprofile/UserProfile';
import { auth } from '../../firebase';

function SideBarLayout({parentToChild}) {
  const [holder, setHolder] = useState(0);
  const [statement, setStatement] = useState(0);
  const [history, setHistory] = useState(1);
  const [currentBalance, setCurrentBalance] = useState(2);
  const [useraccount, setUserAccount] = useState(3);


  return (
   <div className='sidebar-main-div'>
    
    {parentToChild}
    
   </div>
  
  );
}

export default SideBarLayout;
