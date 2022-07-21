import React from 'react';
import style from "./Nav.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/Group 8700.svg';
import logo from '../assets/Group 8700.png';
import LoggedIn from './LoggedIn';

function Nav() {
  const navigate = useNavigate();
  return (
    <div className={style.headerWrap}>
      <div className={style.headerLogo}>
        {/* <Link to='/listview'><img src={logo} style={{ width: "32px", margin: "0 8px 0 24px"}}/></Link> */}
        <LogoIcon style={{ width: "32px", margin: "0 16px 0 24px" }} onClick={() => navigate('/listview')} />
        <Link to="/listview" style={{color: "black", textDecoration: "none",fontSize: "20px", fontWeight: "normal"}}>
          <span style={{marginRight: "24px"}}>세작소</span>
        </Link>
        
        <Link to='/register' style={{ textDecoration: "none", color: "black",fontSize: "14px" }}>등록하기</Link>
      </div>

      <div className={style.headerRight}>
        {/* <NotLoggedIn/> */}
        <LoggedIn/>
      </div>
    </div>
  );
}

const NotLoggedIn = () => {
  return (
    <div>
      <span>로그인</span>
      <span style={{ margin: "0 24px", fontWeight: "bold" }}>|</span>
      <span>회원가입</span>
    </div>
  )
};




export default Nav;