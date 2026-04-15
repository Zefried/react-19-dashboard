import "./AgentProfile.css";
import { useNavigate } from "react-router-dom";

export const AgentProfile = () => {
  const navigate = useNavigate();

  const agent = {
    photo: "",
    firstName: "Shivam",
    middleName: "kumar",
    lastName: "das",

    guardianFirst: "Suresh",
    guardianMiddle: "kumar",
    guardianLast: "Das",

    permanentAddress: "ABC Street, City",
    presentAddress: "XYZ Street, City",
    pin: "781001",

    mobile: "9876543210",
    altMobile: "9123456780",

    registrationDate: "2024-01-10",
    ilpStart: "2024-01-01",
    ilpEnd: "2024-12-31",
  };

  const fullName = [agent.firstName, agent.middleName, agent.lastName]
    .filter(Boolean)
    .join(" ");

  const guardianName = [
    agent.guardianFirst,
    agent.guardianMiddle,
    agent.guardianLast,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ap-container">
      <h1 className="ap-title">Agent Profile</h1>

      {/* TOP CARD */}
      <div className="ap-card ap-center">
        <div className="ap-avatar">
          {agent.photo ? (
            <img src={agent.photo} alt="agent" />
          ) : (
            <span>👤</span>
          )}
        </div>
        <h2>{fullName}</h2>
      </div>

      {/* GRID SECTION */}
      <div className="ap-grid">
        {/* BASIC */}
        <div className="ap-card">
          <h2 className="ap-section-title">Basic Details</h2>
          <div className="ap-grid-2">
            <p><strong>Guardian:</strong> {guardianName}</p>
            <p><strong>Mobile:</strong> {agent.mobile}</p>
            <p><strong>Alternate:</strong> {agent.altMobile}</p>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="ap-card">
          <h2 className="ap-section-title">Address</h2>
          <div className="ap-grid-2">
            <p><strong>Permanent:</strong> {agent.permanentAddress}</p>
            <p><strong>Present:</strong> {agent.presentAddress}</p>
            <p><strong>PIN:</strong> {agent.pin}</p>
          </div>
        </div>

        {/* REGISTRATION */}
        <div className="ap-card">
          <h2 className="ap-section-title">Registration</h2>
          <div className="ap-grid-2">
            <p><strong>Date:</strong> {agent.registrationDate}</p>
          </div>
        </div>

        {/* ILP */}
        <div className="ap-card">
          <h2 className="ap-section-title">ILP Details</h2>
          <div className="ap-grid-2">
            <p><strong>Start:</strong> {agent.ilpStart}</p>
            <p><strong>End:</strong> {agent.ilpEnd}</p>
          </div>
        </div>
      </div>

      {/* ACTION */}
      <div className="ap-actions">
        <button className="ap-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};