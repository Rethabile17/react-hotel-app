import React from "react";
import "./TermsAndConditions.css";
import { useNavigate } from "react-router-dom";
function TermsAndConditions() {
    const navigate = useNavigate();
    const backToRegister = () => {
        navigate("/register");
    };
  return (
    <div className="terms-container">
        <button className="back-to-register-btn" onClick={backToRegister}>Back</button>
      <h1 className="terms-title">Terms & Conditions</h1>
      <section className="terms-section">
        <h2 className="terms-subtitle">1. Booking & Reservations</h2>
        <p className="terms-text">
          All reservations are subject to availability and will be confirmed upon payment. By booking with us, you agree to our booking policies and accept the terms herein.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-subtitle">2. Payment Policies</h2>
        <p className="terms-text">
          Payments can be made via credit card, PayPal, or other approved methods. All charges will be processed in the specified currency at the time of booking.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-subtitle">3. Cancellation & Refunds</h2>
        <p className="terms-text">
          Cancellations are accepted up to 48 hours before your scheduled check-in time. Refunds are processed within 5–7 business days after the cancellation request.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-subtitle">4. Hotel Policies</h2>
        <p className="terms-text">
          Guests must comply with all hotel rules, including check-in and check-out times, noise levels, and conduct policies. Failure to adhere may result in additional charges.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-subtitle">5. Privacy & Security</h2>
        <p className="terms-text">
          We prioritize the privacy of our guests. All personal information is handled in accordance with our Privacy Policy, ensuring confidentiality and data protection.
        </p>
      </section>
      <footer className="terms-footer">
        <p className="terms-footer-text">
          Please contact us for any questions or clarifications regarding our terms and conditions.
        </p>
        <p className="terms-footer-text">Thank you for choosing our hotel!</p>
      </footer>
    </div>
  );
};
export default TermsAndConditions;