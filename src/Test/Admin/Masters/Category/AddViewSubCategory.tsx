import { useNavigate } from "react-router-dom";
import "./addviewsubcat.css";

export const AddViewSubcategory = () => {
  const navigate = useNavigate();

  const subcategories = [
    "Wiring Repair",
    "Pipe Leakage Fix",
    "Furniture Making",
    "AC Installation",
    "Daily Wage Labour",
    "Home Cleaning",
    "Driver On Demand",
  ];

  return (
    <div className="advs-container">
      <h1 className="advs-title">Add View Subcategory</h1>

      {/* Select Category + Add */}
      <div className="advs-add-section">
        <select className="advs-select">
          <option>Select Category</option>
          <option>Electricians</option>
          <option>Plumbers</option>
          <option>Carpenters</option>
        </select>

        <input
          type="text"
          placeholder="e.g. Wiring Repair"
          className="advs-input"
        />

        <button className="advs-btn">Add</button>
      </div>

      {/* List */}
      <div className="advs-list-section">
        <div className="advs-header">
          <h2>Subcategories</h2>
          <span
            className="advs-view-all"
            onClick={() =>
              navigate("/dashboard/admin/all-subcategories")
            }
          >
            View All →
          </span>
        </div>

        <ul className="advs-list">
          {subcategories.slice(0, 5).map((sub, i) => (
            <li key={i} className="advs-item">
              {sub}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};