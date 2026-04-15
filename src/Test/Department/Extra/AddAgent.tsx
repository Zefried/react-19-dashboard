import './AddAgent.css'
import { useNavigate } from "react-router-dom";

export const AddAgent = () => {
  const navigate = useNavigate();

  return (
    <div className="ada-container">
      <h1 className="ada-title">Add Agent</h1>

      {/* PHOTO UPLOAD */}
      <div className="ada-card">
        <h2 className="ada-section-title">Agent Photo</h2>
        <div className="ada-photo-upload">
          <input type="file" className="ada-file-input" accept="image/*" />
        </div>
      </div>

      {/* FULL NAME */}
      <div className="ada-card">
        <h2 className="ada-section-title">Full Name</h2>
        <div className="ada-row">
          <input className="ada-input" placeholder="First Name" />
          <input className="ada-input" placeholder="Middle Name" />
          <input className="ada-input" placeholder="Last Name" />
        </div>
      </div>

      {/* Guardian Name */}
      <div className="ada-card">
        <h2 className="ada-section-title">
          Husband / Wife / Father / Mother Name
        </h2>
        <div className="ada-row">
          <input className="ada-input" placeholder="First Name" />
          <input className="ada-input" placeholder="Middle Name" />
          <input className="ada-input" placeholder="Last Name" />
        </div>
      </div>

      {/* Permanent Address */}
      <div className="ada-card">
        <h2 className="ada-section-title">Permanent Address</h2>
        <textarea className="ada-textarea" placeholder="Full Address" />
        <input className="ada-input" placeholder="PIN Code" />
      </div>

      {/* Present Address */}
      <div className="ada-card">
        <h2 className="ada-section-title">Present Address</h2>
        <textarea className="ada-textarea" placeholder="Full Address" />
        <input className="ada-input" placeholder="PIN Code" />
      </div>

      {/* Contact */}
      <div className="ada-card">
        <h2 className="ada-section-title">Contact Details</h2>
        <div className="ada-row">
          <input className="ada-input" placeholder="Registered Mobile No." />
          <input className="ada-input" placeholder="Alternate Mobile No." />
        </div>
      </div>

      {/* Registration */}
      <div className="ada-card">
        <h2 className="ada-section-title">Registration Details</h2>
        <div className="ada-row">
          <input type="date" className="ada-input" />
        </div>
      </div>

      {/* ILP / KYC */}
      <div className="ada-card">
        <h2 className="ada-section-title">
          ILP Document (KYC - Arunachal Pradesh)
        </h2>
        <div className="ada-row">
          <input type="date" className="ada-input" />
          <input type="date" className="ada-input" />
        </div>
      </div>

      {/* Action */}
      <div className="ada-actions">
        <button
          className="ada-btn"
          onClick={() => navigate("/dashboard/view-agents")}
        >
          Save Agent
        </button>
      </div>
    </div>
  );
};