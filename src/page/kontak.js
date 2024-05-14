import React from "react";
// import tentangsaya from "./tentangsaya";

class Beranda extends React.Component {
  About = () => {
    // Ganti './creations' dengan URL yang sesuai dengan halaman "creations" di aplikasi Anda
    window.location.href = "./";
  };
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.heading}>Contact</h1>
        </header>

        <main style={styles.main}>
          <section style={styles.section}>
            <h1>Hubungi</h1>
            <hr></hr>

            <ul className="Profile">
              <main style={styles.main}>
                <li>
                  <h3>Instagram</h3>
                  <a href="https://www.instagram.com/indra.rrpratama/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                      alt="Deskripsi Gambar"
                      style={styles.image}
                    />
                  </a>
                </li>

                <li>
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/082131211769">
                    <img
                      src="https://www.blackxperience.com/assets/blackattitude/blacktips//cover-wa-300x300.jpg"
                      alt="Deskripsi Gambar"
                      style={styles.image}
                    />
                  </a>
                </li>

                <li>
                  <h3>Linkedin</h3>
                  <a href="https://www.linkedin.com/in/indra-ridho-87aa14298/">
                    <img
                      src="data:image/png;base64,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"
                      alt="Deskripsi Gambar"
                      style={styles.image}
                    />
                  </a>
                </li>

                <li>
                  <h3>Github</h3>
                  <a href="https://github.com/IndraRP">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="Deskripsi Gambar"
                      style={styles.image}
                    />
                  </a>
                </li>
              </main>
            </ul>

            <button style={styles.Button} onClick={this.About}>
              Home
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
    padding: "20px",
    overflow: "hidden",
    minHeight: "100vh", // Mengisi tinggi layar penuh
    display: "flex", // Membuat konten menjadi flex container
    flexDirection: "column", // Menata konten dalam kolom

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

  image: {
    maxWidth: "100%", // lebar gambar
    height: "30px", // tinggi gambar
    borderRadius: "10px", // atau properti lain sesuai kebutuhan Anda
    marginBottom: "20px",
  },

  main: {
    maxWidth: "600px",
    marginBottom: "50px",
    height: "100%",
    marginTop: "10px",
    marginLeft: "70px",
  },

  section: {
    marginBottom: "0px",
    padding: "80px",
    height: "600px",
    weight: "200px",
    background: "rgba(222, 222, 222, 0.8)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },

  footer: {
    marginTop: "40px",
    padding: "15px",
    backgroundColor: "#a38666",
    width: "100%",
    color: "#222",
    textAlign: "center",
    marginBottom: "-10px",
  },
};

export default Beranda;
