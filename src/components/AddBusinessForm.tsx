import { useState } from 'react';
import '@/styles/businessForm.css'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import logo from "@/assets/NavBar/logo.png";
import merchant from "@/assets/NavBar/merchant.png";
import agent from "@/assets/NavBar/agent.png";
import producer from "@/assets/NavBar/producer.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BusinessInfoForm } from './BusinessInfoForm'; 

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void; 
};

export function AddBusinessForm({ isOpen, setIsOpen }: Props) {
  const [isFormOpen, setFormOpen] = useState(false); 

  const handleClick = () => {
    setIsOpen(false); 
    setFormOpen(true); 
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="sheet-content">
          <SheetHeader>
            <SheetTitle className="sheet-title">
              <img src={logo} width={30} height={20} alt="Logo" />
              Add a Business
            </SheetTitle>
          </SheetHeader>
          <div className="content-container">
            <div className="business-options">
              {[...Array(7)].map((_, index) => (
                <div className="business-option" key={index}>
                  <section className="circle"></section>
                  <section className="option-text"></section>
                </div>
              ))}
            </div>
            <div className="account-selection">
              <div className="account-container">
                <h3 className="account-title">
                  What kind of account do you want to open?
                </h3>
                <p className="account-subtitle">
                  You can always add another account later on.
                </p>
                <hr className="divider" />
                <section className="account-options">
                  <div className="account-option" onClick={handleClick}>
                    <img src={merchant} width={70} height={70} alt="Merchant" />
                    <section className="account-info">
                      <h5 className="account-type">Merchant Account</h5>
                      <p className="account-description">
                        I want to pay suppliers and receive payment from buyers across the globe.
                      </p>
                    </section>
                    <MdKeyboardArrowRight size={60} color="#B4B4B4" className="icon" />
                  </div>
                  <div className="account-option" onClick={handleClick}>
                    <img src={agent} width={70} height={70} alt="Agent" />
                    <section className="account-info">
                      <h5 className="account-type">Agent Account</h5>
                      <p className="account-description">
                        I want to help clients with global flights, hotels, tuition payments & accommodation.
                      </p>
                    </section>
                    <MdKeyboardArrowRight size={60} color="#B4B4B4" className="icon" />
                  </div>
                  <div className="account-option" onClick={handleClick}>
                    <img src={producer} width={70} height={70} alt="Producer" />
                    <section className="account-info">
                      <h5 className="account-type">An Exporting Producer</h5>
                      <p className="account-description">
                        I want to export finished goods from Africa to a global audience using Ojah by Shiga.
                      </p>
                    </section>
                    <MdKeyboardArrowRight size={60} color="#B4B4B4" className="icon" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {isFormOpen && (
        <BusinessInfoForm isOpen={isFormOpen} setIsOpen={setFormOpen} onSubmit={() => {} } />
      )}
    </>
  );
}