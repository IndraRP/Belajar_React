import React from "react";
import "./page_css/beranda.css"; // Import file CSS beranda

class Beranda extends React.Component {
  aboutHandler = () => {
    window.location.href = "./tentangsaya";
  };

  render() {
    return (
      <div className="">

        <header className="header text-center">
          <h1 className="heading">Welcome to my Project</h1>
          <p className="subheading">
            This is my first Project using React JS and Router
          </p>
        </header>

        <main className="main">
          <section className="section">
            <h2 className="sectionHeading">Indra Ridho Rizkian Pratama</h2>
            <p> Saya adalah seorang siswa, Kepoin saya yukk </p>

            <button className="Button" onClick={this.aboutHandler}>
              About Me
            </button>
          </section>

          <br />
        </main>

        <footer className="footer text-center">
          <p>© Indra_2024</p>
        </footer>
      </div>
    );
  }
}

export default Beranda;