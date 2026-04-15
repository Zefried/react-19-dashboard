import { useNavigate } from "react-router-dom";
import "./addviewcat.css";

export const AddViewCategory = () => {
  const navigate = useNavigate();

  const categories = [
    "Electricians",
    "Plumbers",
    "Carpenters",
    "AC Repair Technicians",
    "Construction Labour",
    "Housekeeping Staff",
    "Drivers",
  ];

  return (
    <div className="advc-container">
      <h1 className="advc-title">Add View Category</h1>

      {/* Add Category */}
      <div className="advc-add-section">
        <input
          type="text"
          placeholder="e.g. Electricians"
          className="advc-input"
        />
        <button className="advc-btn">Add</button>
      </div>

      {/* Categories */}
      <div className="advc-list-section">
        <div className="advc-header">
          <h2>Categories</h2>
          <span
            className="advc-view-all"
            onClick={() => navigate("/dashboard/admin/all-categories")}
          >
            View All →
          </span>
        </div>

        <ul className="advc-list">
          {categories.slice(0, 5).map((cat, i) => (
            <li key={i} className="advc-item">
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};