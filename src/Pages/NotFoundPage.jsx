import '../CSS/Notfound.css'
function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <a href="/" className="button">Go Back Home</a>
    </div>
  );
}

export default NotFoundPage;
