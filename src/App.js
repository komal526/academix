import './App.css';
import logo from './logo2.webp';

let name = "Academix";

function App() {
  const user = {
    isLoggedIn: true, // Set this value based on your backend login status
    profileImage: {logo}, // Replace with the actual URL from the backend
    username: "John Doe", // Replace with the actual username from the backend
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <img className="img-logo" src={logo} alt="Logo" />
          <h1 className="website-name">Academix</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            {user.isLoggedIn ? (
              <>
                <li className="profile-container">
                  <img className="profile-img" src={user.profileImage} alt="Profile" />
                  <span>{user.username}</span>
                </li>
              </>
            ) : (
              <li><a href="#">Login</a></li>
            )}
          </ul>
        </nav>
      </header>

      <main>
        <h2>Welcome to {name}</h2>
        <p>Your academic social platform to connect and share knowledge.</p>
      </main>
    </>
  );
}

export default App;
