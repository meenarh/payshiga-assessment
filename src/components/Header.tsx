import { useState } from "react";
import notification from "@/assets/NavBar/Notification.svg";
import profile from "@/assets/NavBar/profile.png";
import '@/styles/header.css'

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className="header">
      <div>
        <h5 className="dashboard-title">Dashboard</h5>
      </div>
      <section>
        <p className="test-text">Test</p>
        <label className="checkbox-container">
          <input
            type="checkbox"
            value=""
            className="checkbox-input"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div className={`checkbox-toggle ${isChecked ? 'checked' : ''}`}>
            <div className={`checkbox-circle ${isChecked ? 'checked-circle' : ''}`}></div>
          </div>
        </label>
        <hr className="separator" />
        <img src={notification} width={24} height={20} alt="notification icon" />
        <img src={profile} width={40} height={40} alt="profile icon" />
      </section>
    </header>
  )
}

export default Header