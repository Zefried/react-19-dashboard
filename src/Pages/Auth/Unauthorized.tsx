import { useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextValue";
import '../../Pages/Auth/Styles/Unauthorized.css'

export const Unauthorized = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    if (!hasLoggedOut.current) {
      hasLoggedOut.current = true;
      auth?.logout();
    }
  }, [auth]);

  return (
    <div className="unauth-page">
      <div className="unauth-card">
        <h1 className="floating-403">403</h1>
        <h2 className="typewriter">Access Denied</h2>
        <p>You don’t have permission to view this page.Please use a different account or contact support if you believe this is an error.</p>
     

        <button onClick={() => navigate("/login", { replace: true })}>
          Go Back
        </button>
      </div>
    </div>
  );
};