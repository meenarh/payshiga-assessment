"use client";

import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setBusinessName } from '@/store/formSlice'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/NavBar/logo.png";
import { Locationbox } from "./Locationbox";
import { Industrybox } from "./Industrybox";
import { Sizebox } from "./Sizebox";
import { Volumebox } from "./Volumebox";
import { ArrowLeft } from "lucide-react";
import "../styles/infoForm.css";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: (businessName: string) => void;
};

export function BusinessInfoForm({ isOpen, setIsOpen }: Props) {
  const [businessName, setLocalBusinessName] = useState('');
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setBusinessName(businessName));
    console.log(businessName)
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="bottom" className="form-sheet-content">
        <SheetHeader>
          <SheetTitle className="form-sheet-title">
            <img src={logo} width={30} height={20} alt="" />
            Add a Business
          </SheetTitle>
        </SheetHeader>
        <div className="form-container">
          <div className="form-sidebar">
            {Array(7)
              .fill("")
              .map((_, index) => (
                <div className="form-placeholder-row" key={index}>
                  <section className="placeholder-circle"></section>
                  <section className="placeholder-bar"></section>
                </div>
              ))}
          </div>
          <div className="form-main">
            <h3 className="form-main-heading">
              Provide some info about <br /> your business
            </h3>
            <hr className="form-divider" />
            <form className="form-fields" onSubmit={handleSubmit}>
              <label htmlFor="" className="form-label">
                Where is your business located *
              </label>
              <Locationbox
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <label htmlFor="" className="form-label">
                What is your business name? *
              </label>
              <input
                type="text"
                placeholder="Business Name"
                className="form-input"
                value={businessName}
            onChange={(e) => setLocalBusinessName(e.target.value)}
              />
              <p className="form-hint">
                Use the registered business name on your document
              </p>
              <label htmlFor="" className="form-label">
                Business industry *
              </label>
              <Industrybox
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              />
              <div className="form-flex-row">
                <div className="form-field-group">
                  <label htmlFor="" className="form-label">
                    Company Size
                  </label>
                  <Sizebox />
                </div>
                <div className="form-field-group">
                  <label htmlFor="" className="form-label">
                    Estimated annual volume
                  </label>
                  <Volumebox />
                </div>
              </div>
              <div className="form-buttons">
                <Button variant="outline" className="form-back-button">
                  <ArrowLeft color="#99999C" size={20} />
                  Back
                </Button>
                <Button
                  type="submit"
                  className='form-create-button'
                >
                  Create Business
                </Button>
              </div>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BusinessInfoForm;
