import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  let isAdmin = false; // Change to true to test access

  if (!isAdmin) {
    return (
      <Navigate 
        to="/alert" 
        replace 
        state={{ message: "You are not an admin. Access restricted." }} 
      />
    );
  }

  return children;
};

export default ProtectedRoute;