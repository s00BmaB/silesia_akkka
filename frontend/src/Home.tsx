import React from "react";
import { useEffect, useState } from "react";


const Home: React.FC = () => {
    const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello/")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h2>MojaApp</h2>
        <div>
          <button style={styles.link}>Logowanie</button>
          <button style={styles.primary}>Rejestracja</button>
        </div>
      </nav>

      <main style={styles.hero}>
        <h1>Prosty sposób na zarządzanie danymi</h1>
        <p>Aplikacja do prowadzenia dziennika praktyk.</p>
        <p>{message}</p>

        <div style={{ marginTop: "20px" }}>
          <button style={styles.primary}>Zacznij teraz</button>
          <button style={styles.secondary}>Dowiedz się więcej</button>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2026 MojaApp</p>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderBottom: "1px solid #ddd",
  },
  hero: {
    textAlign: "center",
    marginTop: "100px",
  },
  footer: {
    textAlign: "center",
    marginTop: "150px",
    padding: "20px",
    borderTop: "1px solid #ddd",
  },
  primary: {
    padding: "10px 20px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginLeft: "10px",
  },
  secondary: {
    padding: "10px 20px",
    border: "1px solid black",
    background: "white",
    cursor: "pointer",
    marginLeft: "10px",
  },
  link: {
    background: "none",
    border: "none",
    marginRight: "10px",
    cursor: "pointer",
  },
};

export default Home;