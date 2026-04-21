import { useNavigate } from 'react-router-dom';
import './Styles/AdminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate();
  const stats = [
    { title: "Total Orders", value: 120 },
    { title: "Total Revenue", value: "₹45,000" },
    { title: "Dispatched Orders", value: 60 },
    { title: "Pending Orders", value: 30 },
    { title: "Delivered Orders", value: 30 },
  ];

  const orders = [
    { id: "ORD001", customer: "Rahul", qty: 2, size: "M", status: "Pending" },
    { id: "ORD002", customer: "Amit", qty: 1, size: "L", status: "Dispatched" },
    { id: "ORD003", customer: "Sneha", qty: 3, size: "S", status: "Delivered" },
    { id: "ORD004", customer: "Ravi", qty: 1, size: "M", status: "Pending" },
    { id: "ORD005", customer: "Priya", qty: 2, size: "L", status: "Delivered" },
    { id: "ORD006", customer: "Karan", qty: 1, size: "S", status: "Dispatched" },
  ];

  // phone, address, transaction id, status left for individual orders 
  // search and pagination needed 
  // dark mode needed too 

  return (
    <div className="adp">
      
      {/* Top Cards */}
      <div className="adp__cards">
        {stats.map((item, index) => (
          <div key={index} className="adp__card">
            <p className="adp__card-title">{item.title}</p>
            <h2 className="adp__card-value">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Orders Section */}

<div className="adp__orders">
  
  <div className="links">
    <h3 className="adp__section-title">Recent Orders</h3>
    <h4 
      className="adp-view-all-link"
      onClick={() => navigate("/dashboard/orders")}
    >
      View All Orders →
    </h4>
  </div>


  <div className="adp-table-wrapper">
    <table className="adp-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Qty</th>
          <th>Size</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td className="adp-id">{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.qty}</td>
            <td>{order.size}</td>

            <td>
              <span className={`adp-status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </td>

            <td>
              <button className="adp-view-btn">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default AdminPanel;