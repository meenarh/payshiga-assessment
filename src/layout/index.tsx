import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { startLoading, stopLoading } from '../store/loadingSlice';
import Loading from '@/components/Loading';
import { Outlet, Link } from 'react-router-dom';
import "@/styles/dashboard.css";
import avatar from "@/assets/NavBar/Avatar.png";
import dashboard from "@/assets/NavBar/dashboard.png";
import transaction from "@/assets/NavBar/transaction.png";
import refunds from "@/assets/NavBar/refunds.png";
import bills from "@/assets/NavBar/bills.png";
import cards from "@/assets/NavBar/cards.png";
import contact from "@/assets/NavBar/contact.png";
import ecommerce from "@/assets/NavBar/ecommerce.png";
import settings from "@/assets/NavBar/settings.png";
import accounts from "@/assets/NavBar/accounts.png";
import payment from "@/assets/NavBar/payment.png";
import plus from "@/assets/NavBar/plus.png";
import { AddBusinessForm } from "@/components/AddBusinessForm";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from 'lucide-react';
import { MdOutlineMenu } from "react-icons/md";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(startLoading());

    setTimeout(() => {
      dispatch(stopLoading());
    }, 2000);
  }, [dispatch]);

  if (isLoading) {
    return <Loading businessName={'Business Name'} />;
  }

  return (
    <section className="dashboard">
      <nav className="navbar">
        <div className={`sidebar-container ${isMobile && !isExpanded ? 'hidden' : ''}`}>
          <div className="sidebar">
            <div className="navbar-top">
              <div className="info">
                <img
                  src={avatar}
                  width={42}
                  height={42}
                  alt="Avatar"
                  id="avatar"
                />
                <section>
                  <h4>{isExpanded ? "Payshiga Techn..." : "Payshiga Techn..."}</h4>
                  <p>Business ID: 09387465</p>
                </section>
                <button onClick={handleToggleExpand}>
                  <ChevronsUpDown size={14} color='#99999C' />
                </button>
              </div>

              {isExpanded && (
                <>
                  <hr className="divider" />
                  <div className="new">
                    <div className="add">
                      <img src={plus} alt="Add" width={42} height={42} />
                    </div>
                    <AddBusinessForm isOpen={isOpen} setIsOpen={handleClose} />
                    <Button className='btn' variant='ghost' onClick={() => setIsOpen(true)}>Add a Business</Button>
                  </div>
                </>
              )}
            </div>

            <div className="navbar-links">
              <ul>
                <li>
                  <img src={dashboard} width={50} height={50} />
                  <Link to="#" className="active">Dashboard</Link>
                </li>
                <li>
                  <img src={transaction} width={50} height={50} />
                  <Link to="#">Transactions</Link>
                </li>
                <li>
                  <img src={refunds} width={50} height={50} />
                  <Link to="#">Refunds</Link>
                </li>
                <li>
                  <img src={payment} width={50} height={50} />
                  <Link to="#">Payments</Link>
                </li>
                <li>
                  <img src={cards} width={50} height={50} />
                  <Link to="#">Cards</Link>
                </li>
                <li>
                  <img src={accounts} width={50} height={50} />
                  <Link to="#">Accounts</Link>
                </li>
                <li>
                  <img src={bills} width={50} height={50} />
                  <Link to="#">Manage Bills</Link>
                </li>
                <li>
                  <img src={ecommerce} width={50} height={50} />
                  <Link to="#">Ecommerce</Link>
                </li>
              </ul>
            </div>

            <div className="navbar-footer">
              <ul>
                <li>
                  <img src={settings} width={50} height={50} />
                  <Link to="#">Settings</Link>
                </li>
                <li>
                  <img src={contact} width={50} height={50} />
                  <Link to="#">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="content">
        <main>
          <Outlet />
        </main>
      </div>

      {isMobile && (
        <button className="mobile-toggle" onClick={handleToggleExpand}>
          <MdOutlineMenu />
        </button>
      )}
    </section>
  );
};

export default Layout;