import { useNavigate } from "react-router-dom";
import "./SingleWorker.css";

export const WorkerDetail = () => {
  const navigate = useNavigate();

  const worker = {
    photo: "",

    firstName: "Ramesh",
    middleName: "",
    lastName: "Das",

    guardianFirst: "Suresh",
    guardianMiddle: "",
    guardianLast: "Das",

    permanentAddress: "ABC Road, Guwahati",
    presentAddress: "XYZ Road, Guwahati",
    pin: "781001",

    mobile: "9876543210",
    altMobile: "9123456780",

    registrationDate: "2026-03-20",

    category: "Electrician",
    description: "Experienced in wiring, fittings and maintenance work.",

    documents: ["AADHAAR CARD", "VOTER ID"],

    ilpIssue: "2026-01-01",
    ilpExpiry: "2026-12-31",

    agent: "Rahul Sharma",
    employeeId: "WRK101",

    paymentMode: "UPI",
    autoRenew: "UPI",

    status: "Pending",
  };

  const fullName = [worker.firstName, worker.middleName, worker.lastName]
    .filter(Boolean)
    .join(" ");

  const guardianName = [
    worker.guardianFirst,
    worker.guardianMiddle,
    worker.guardianLast,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="idw-container">
      {/* HEADER */}
      <div className="idw-header">
        <div>
          <h2 className="idw-title">{fullName}</h2>
          <p className="idw-subtitle">
            {worker.employeeId} • {worker.category}
          </p>

          <span className={`idw-badge idw-badge-${worker.status.toLowerCase()}`}>
            {worker.status}
          </span>
        </div>

        <button className="idw-link-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      {/* GRID */}
      <div className="idw-grid">

        {/* BASIC */}
        <div className="idw-card">
          <h3 className="idw-section-title">Basic Info</h3>
          <div className="idw-info-grid">
            <div>
              <p className="idw-label">Guardian</p>
              <p className="idw-value">{guardianName}</p>
            </div>

            <div>
              <p className="idw-label">Mobile</p>
              <p className="idw-value">{worker.mobile}</p>
            </div>

            <div>
              <p className="idw-label">Alternate</p>
              <p className="idw-value">{worker.altMobile}</p>
            </div>

            <div>
              <p className="idw-label">Category</p>
              <p className="idw-value">{worker.category}</p>
            </div>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="idw-card">
          <h3 className="idw-section-title">Address</h3>
          <div className="idw-info-grid">
            <div>
              <p className="idw-label">Permanent</p>
              <p className="idw-value">{worker.permanentAddress}</p>
            </div>

            <div>
              <p className="idw-label">Present</p>
              <p className="idw-value">{worker.presentAddress}</p>
            </div>

            <div>
              <p className="idw-label">PIN</p>
              <p className="idw-value">{worker.pin}</p>
            </div>
          </div>
        </div>

        {/* REGISTRATION */}
        <div className="idw-card">
          <h3 className="idw-section-title">Registration</h3>
          <div className="idw-info-grid">
            <div>
              <p className="idw-label">Date</p>
              <p className="idw-value">{worker.registrationDate}</p>
            </div>

            <div>
              <p className="idw-label">Employee ID</p>
              <p className="idw-value">{worker.employeeId}</p>
            </div>

            <div>
              <p className="idw-label">Agent</p>
              <p className="idw-value">{worker.agent}</p>
            </div>
          </div>
        </div>

        {/* WORK */}
        <div className="idw-card">
          <h3 className="idw-section-title">Work Details</h3>
          <div className="idw-info-grid">
            <div>
              <p className="idw-label">Category</p>
              <p className="idw-value">{worker.category}</p>
            </div>

            <div>
              <p className="idw-label">Description</p>
              <p className="idw-value">{worker.description}</p>
            </div>
          </div>
        </div>

        {/* DOCUMENTS */}
        <div className="idw-card">
          <h3 className="idw-section-title">Documents (KYC)</h3>
          <div className="idw-info-grid">
            <div>
              <p className="idw-value">
                {worker.documents.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* ILP */}
        <div className="idw-card">
          <h3 className="idw-section-title">ILP Details</h3>
          <div className="idw-info-grid">
            <div>
              <p className="idw-label">Issue</p>
              <p className="idw-value">{worker.ilpIssue}</p>
            </div>

            <div>
              <p className="idw-label">Expiry</p>
              <p className="idw-value">{worker.ilpExpiry}</p>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="idw-card">
          <h3 className="idw-section-title">Payment</h3>
          <div className="idw-info-grid">
            <div>
              <p className="idw-label">Mode</p>
              <p className="idw-value">{worker.paymentMode}</p>
            </div>

            <div>
              <p className="idw-label">Auto Renew</p>
              <p className="idw-value">{worker.autoRenew}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};