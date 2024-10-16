// src/router/components/NotFoundPage.jsx

import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-message">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="not-found-link">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
