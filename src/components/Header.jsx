import React, { useRef, useState } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import logo from '../assets/news_4127310.png';
import './Header.css';

const Header = () => {
    // const [search,setSearch] = useState('');/

    const input = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const queryData = input.current.value;
        e.target.reset();
        return navigate(`/search?q=${queryData}`);
       
    //   setSearch(input.current.value);

    }
  return <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <img  className='news-logo img-responsive' src={logo} alt="" />
    <Link className="navbar-brand" to="/">News API</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" name="search" ref={input} placeholder="Search" aria-label="Search" />
       
      </form>
    </div>
  </div>
</nav>
  </div>;
};

export default Header;
