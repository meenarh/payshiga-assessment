import { IoArrowForwardOutline } from "react-icons/io5";
import card1 from "@/assets/NavBar/card-black.png";
import card2 from "@/assets/NavBar/card-purple.png";
import mtn from "@/assets/NavBar/mtn.png";
import gtb from "@/assets/NavBar/gtb.png";
import { TbRefresh } from "react-icons/tb";
import { LuArrowDownLeft } from "react-icons/lu";
import { LuArrowUpRight } from "react-icons/lu";

// type Props = {}

const Cards = () => {
  return (
   <div className="cards-section">
   <div className="card-list">
     <section className="card-header">
       <h3>Cards</h3>
       <p className="see-all">See All <IoArrowForwardOutline style={{marginTop: '3px'}} /></p>
     </section>
     <hr />
     <div className="card-item">
       <div className="card-info">
         <img src={card2} alt="Card" width={42} height={42} />
         <p>Naira Card<span>*** 8594</span></p>
       </div>
       <span className="card-status locked">Locked</span>
       <p className="card-amount">5,500 NGN</p>
     </div>
     <hr />
     <div className="card-item">
       <div className="card-info">
         <img src={card2} width={42} height={42} alt="Card" />
         <p>Naira Card<span>*** 8594</span></p>
       </div>
       <span className="card-status locked">Locked</span>
       <p className="card-amount">5,500 NGN</p>
     </div>
     <hr />
     <div className="card-item">
       <div className="card-info">
         <img src={card1} width={42} height={42} alt="Card" />
         <p>Dollar Card<span>*** 8594</span></p>
       </div>
       <span className="card-status active">Active</span>
       <p className="card-amount">5,500 NGN</p>
     </div>
     <hr />
     <div className="card-item">
       <div className="card-info">
         <img src={card2} width={42} height={42} alt="Card" />
         <p>Naira Card<span>*** 8594</span></p>
       </div>
       <span className="card-status locked">Locked</span>
       <p className="card-amount">5,500 NGN</p>
     </div>
     <hr />
     <div className="card-item">
       <div className="card-info">
         <img src={card1} width={42} height={42} alt="Card" />
         <p>Dollar Card<span>*** 8594</span></p>
       </div>
       <span className="card-status active">Active</span>
       <p className="card-amount">5,500 NGN</p>
     </div>
   </div>
   <div className="activities-section">
     <section className="activity-header">
       <h3>Recent Activities</h3>
       <p className="see-all">See All <IoArrowForwardOutline style={{marginTop: '3px'}} /></p>
     </section>
     <hr />
     <div className="activity-item">
       <div className="activity-info">
         <img src={mtn} alt="MTN" width={45} height={45} />
         <p>Bill payment for<span>MTN Airtime top up</span></p>
       </div>
       <p className="activity-amount positive">+ 5,500 NGN</p>
     </div>
     <hr />
     <div className="activity-item">
       <div className="activity-info">
         <img src={gtb} alt="GTB" width={45} height={45} />
         <p>Payment to bank<span>Oluwatobi Oseni</span></p>
       </div>
       <p className="activity-amount positive">+ 5,500 NGN</p>
     </div>
     <hr />
     <div className="activity-item">
       <div className="activity-info">
         <div style={{backgroundColor: '#F5F5F5', width: '45px', height: '45px', borderRadius: '50px', display: 'flex', alignItems: 'center', margin: 'auto'}}>
         <LuArrowUpRight size={16} style={{margin: 'auto'}} />
         </div>
         <p>Payment to <span>Oluwatobi Oseni</span></p>
       </div>
       <p className="activity-amount grey"> 5,500 TZS</p>
     </div>
     <hr />
     <div className="activity-item">
       <div className="activity-info">
       <div style={{backgroundColor: '#F5F5F5', width: '45px', height: '45px', borderRadius: '50px', display: 'flex', alignItems: 'center', margin: 'auto'}}>
         <TbRefresh size={16} style={{margin: 'auto'}} />
         </div>
         <p>Currency Swap from<span>NGN &gt; GBP</span></p>
       </div>
       <p className="activity-amount positive">+ 500 GBP</p>
     </div>
     <hr />
     <div className="activity-item">
       <div className="activity-info">
       <div style={{backgroundColor: '#F5F5F5', width: '45px', height: '45px', borderRadius: '50px', display: 'flex', alignItems: 'center', margin: 'auto'}}>
         <LuArrowDownLeft size={16} style={{margin: 'auto'}} />
         </div>
         <p>Received from bank<span>Oluwatobi Oseni</span></p>
       </div>
       <p className="activity-amount positive">+ 5,500 NGN</p>
     </div>
     <hr />
   </div>
 </div>
  )
}

export default Cards