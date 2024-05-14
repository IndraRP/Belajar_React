import React from "react";

class Beranda extends React.Component {
  About = () => {
    // Ganti './creations' dengan URL yang sesuai dengan halaman "creations" di aplikasi Anda
    window.location.href = "./karya";
  };
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.heading}>TENTANG SAYA</h1>
        </header>

        <main style={styles.main}>
          <section style={styles.section}>
            <h2 style={styles.sectionHeading}>Indra Ridho Rizkian Pratama</h2>
            <p> Saya Adalah siswa SMK Telkom Malang </p>
            <div className="About">
              <h1>About</h1>
              <hr></hr>

              <ul className="Profile">
                <h4>Education</h4>
                <ul>
                  <li>SDN 1 Ngelo year graduation - 2019</li>
                  <li>SMPN 2 Cepu year graduation - 2022</li>
                  <li>SMK Telkom Malang year graduation - Now</li>
                </ul>
                <h4>Expertise</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>MySQL</li>
                </ul>
                <h4>Experience</h4>
                <ul>
                  <li>BussinesPlan Competition</li>
                  <li>Freelancer in project.co</li>
                  <li>Skillvul Akademi</li>
                </ul>
              </ul>
            </div>

            <button style={styles.Button} onClick={this.About}>
              Karya
            </button>
          </section>

          <br></br>
        </main>

        <footer style={styles.footer}>
          <p>© Indra_2024</p>
        </footer>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    overflow: "hidden",
    minHeight: "100vh", // Mengisi tinggi layar penuh
    display: "flex", // Membuat konten menjadi flex container
    flexDirection: "column", // Menata konten dalam kolom
    justifyContent: "center", // Menengahkan secara vertikal
    alignItems: "center", // Menengahkan secara horizontal

    background:
      "url(https://media.istockphoto.com/id/843814242/photo/business-table-top-with-mock-up-office-supplies-on-white.webp?b=1&s=170667a&w=0&k=20&c=UbgkgoDEEXnWmLMtIHaIuuliQGT2hHNvxJVdBdjNzvM=)" /* Ganti dengan path gambar latar belakang Anda */,
    backgroundSize: "cover", // Mengisi latar belakang sepenuhnya
    backgroundRepeat: "no-repeat",
  },
  Button: {
    borderRadius: "7px",
    marginTop: "25px",
    marginBottom: "15px",
    transition: "background-color 0.3s ease",
    backgroundColor: "#211e1e", // warna default
    color: "#F5F5F5",
    padding: "10px 33px",
    border: "none",
    cursor: "pointer",
  },

  header: {
    marginBottom: "25px",
  },
  heading: {
    fontSize: "50px",
    color: "#222",
    marginBottom: "10px",
    textAlign: "center",
  },
  subheading: {
    fontSize: "18px",
    color: "#666",
  },
  main: {
    maxWidth: "600px",
    margin: "0 auto",
    marginBottom: "50px",
    height: "100%",
    marginLeft: "70px",
  },
  section: {
    marginBottom: "20px",
    padding: "100px",
    height: "600px",
    weight: "100px",
    background: "rgba(222, 222, 222, 0.8)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
  sectionHeading: {
    fontSize: "25px",
    color: "#333",
    marginBottom: "5px",
    marginTop: "0px",
  },

  footer: {
    marginTop: "40px",
    padding: "15px",
    backgroundColor: "#a38666",
    width: "100%",
    color: "#222",
    textAlign: "center",
    marginBottom: "-40px",
  },
};

export default Beranda;
