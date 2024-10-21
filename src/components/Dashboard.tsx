import { SlOptionsVertical } from "react-icons/sl";
import { TiInfoLarge } from "react-icons/ti";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

// import ApexChart from '@/components/Chart.jsx'

import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "@/utils/Data";
import { BarChart } from "@/components/barchart";
import Header from "@/components/Header";
import '@/styles/home.css'
import Cards from "./Cards";

Chart.register(CategoryScale);

type Props = {
   businessName: string;
}

const Dashboard: React.FC<Props> = ({businessName}) => {
  const [chartData, /*setChartData*/] = useState({
    data: {
      labels: Data.map((data) => data.month),
      datasets: [
        {
          data: Data.map((data) => data.moneyIn),
          backgroundColor: [
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
            "#FAFAFF",
          ],
          borderColor: "#5540EB",
          borderRadius: "4",
          borderWidth: {
            top: 5,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      ],
    },
  });

  return (
    <div className="main-container">
    <Header />
    <hr className="section-divider" />
    <div className="content-wrapper">
      <section className="header-section">
        <h3 className="greeting-text">
          Good Afternoon, {businessName ? businessName : 'Payshiga'}
        </h3>
        <p className="date-text">
          Monday, January 23, 2023
        </p>
      </section>
      <hr />
      <section className="currency-section">
        <ul className="currency-list">
          <li className="currency-item active">NGN</li>
          <li className="currency-item">GBP</li>
          <li className="currency-item">USD</li>
          <li className="currency-item">CAD</li>
        </ul>
        <div className="action-buttons">
          <button className="add-money-button">Add Money</button>
          <button className="send-money-button">Send Money</button>
          <div className="options-button-container">
          <SlOptionsVertical className="options-button" size={50} />
          </div>
        </div>
      </section>
      <section className="balance-section">
        <div>
          <p className="balance-info">
            Available Balance
            <TiInfoLarge className="info-icon" style={{backgroundColor: '#99999C', color: 'white', borderRadius: '50px'}} />
          </p>
          <p className="balance-amount">NGN 1,000,000</p>
          <p className="balance-change positive">
            <IoMdArrowRoundUp className="change-icon" style={{marginTop: '3px'}} /> 20% Past Day
          </p>
        </div>
        <div>
          <p className="balance-info">
            Total Transactions
            <TiInfoLarge className="info-icon" />
          </p>
          <p className="transaction-count">345</p>
          <p className="balance-change positive">
            <IoMdArrowRoundUp className="change-icon" style={{marginTop: '3px'}} /> 20% Past Day
          </p>
        </div>
        <div>
          <p className="balance-info">
            Total Settlements
            <TiInfoLarge className="info-icon" />
          </p>
          <p className="settlement-amount">NGN 49,000,000</p>
          <p className="balance-change negative">
            <IoMdArrowRoundDown className="change-icon" style={{marginTop: '3px'}} /> 20% Past Day
          </p>
        </div>
      </section>
      <hr className="section-divider" />
      <div className="toggle-wrapper">
        <section className="toggle-section">
          <p className="toggle-option active">Money In</p>
          <p className="toggle-option">Money Out</p>
        </section>
        <section className="date-filter">
          <p>Last 30 days</p>
          <IoIosArrowDown style={{marginTop: '4px'}} />
        </section>
      </div>
      <div className="chart-container">
        <BarChart chartData={chartData.data} />
      </div>
      <hr className="section-divider" />
      <Cards />
    </div>
  </div>
  );
};

export default Dashboard;
