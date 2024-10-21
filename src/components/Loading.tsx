import React from "react";
import '@/styles/loading.css'
import Header from "./Header";
import avatar from "@/assets/NavBar/Avatar.png";
import { ChevronsUpDown } from "lucide-react";

type LoadingProps = {
  businessName: string; 
};

const Loading: React.FC<LoadingProps> = ({ businessName }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="navbar-top">
          <div className="info">
            <img src={avatar} width={42} height={42} alt="Avatar" id="avatar" />
            <section>
              <h4>Payshiga Techn...</h4>
              <p>Business ID: 09387465</p>
            </section>
            <ChevronsUpDown size={14} color='#99999C' />
          </div>
        </div>
        <div className="loading-section">
          <section className="circle"></section>
          <section className="rectangle"></section>
        </div>
        <div className="loading-section">
          <section className="circle"></section>
          <section className="rectangle"></section>
        </div>
        <div className="loading-section">
          <section className="circle"></section>
          <section className="rectangle"></section>
        </div>
        <div className="loading-section">
          <section className="circle"></section>
          <section className="rectangle"></section>
        </div>
        <div className="loading-section">
          <section className="circle"></section>
          <section className="rectangle"></section>
        </div>
        <div className="loading-section">
          <section className="circle"></section>
          <section className="rectangle"></section>
        </div>
        <div className="loading-section">
          <section className="circle"></section>
          <section className="rectangle"></section>
        </div>
        <div className="loading-section">
          <section className="circle"></section>
          <section className="rectangle"></section>
        </div>
      </div>
      <div className="main-content">
        <Header />
        <hr className="m-4" />
        <div className="header-section">
          <h4 className="title">Good Afternoon, Sandra</h4>
        </div>
        <section>
          <hr />
        </section>
        <div className="loading-indicator"></div>
        <p className="center-text">Switching to {businessName || 'Business Name'}</p>
      </div>
    </div>
  );
};

export default Loading;