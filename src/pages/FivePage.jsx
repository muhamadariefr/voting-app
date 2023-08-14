import { Container, Row, Col } from "react-bootstrap";

const FivePage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container data-aos="fade-up" data-aos-duration="1500">
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Syarat & Ketentuan</h1>
              <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, alias!
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Selamat datang di website pemilihan online kami! Sebelum Anda
                mulai menggunakan platform ini, kami ingin mengingatkan Anda
                untuk membaca dan memahami syarat dan ketentuan penggunaan di
                bawah ini. Dengan mengakses dan menggunakan website ini, Anda
                dianggap telah membaca, memahami, dan menyetujui syarat dan
                ketentuan yang ditetapkan. Jika Anda tidak setuju dengan syarat
                dan ketentuan ini, harap berhenti menggunakan website ini.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">Ketentuan Penggunaan:</h4>
              <p>
                <li>
                  Pengguna harus setuju dan patuh pada syarat dan ketentuan
                  penggunaan website pemilihan online.
                </li>
                <li>
                  Pengguna harus memberikan informasi yang akurat dan valid saat
                  mendaftar atau menggunakan platform.
                </li>
                <li>
                  Pengguna tidak diperkenankan melakukan tindakan yang melanggar
                  hukum atau merugikan pihak lain dalam menggunakan platform.
                </li>
                <li>
                  Pengguna bertanggung jawab penuh atas segala aktivitas yang
                  terjadi di akun mereka.
                </li>
                <li>
                  Pengguna harus menjaga kerahasiaan informasi login mereka dan
                  tidak boleh memberikan akses ke akun mereka kepada pihak lain.
                </li>
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">Keamanan:</h4>
              <p>
                <li>
                  Pengguna harus menghindari tindakan yang dapat mengancam
                  keamanan website, seperti upaya hacking, pengiriman malware,
                  atau penyalahgunaan lainnya.
                </li>
                <li>
                  Pengguna tidak boleh melakukan tindakan yang dapat mengganggu
                  atau merusak infrastruktur teknis website pemilihan online.
                </li>
                <li>
                  Pengguna harus memberi tahu penyelenggara jika menemukan
                  kerentanan keamanan atau masalah teknis lainnya dalam
                  penggunaan platform.
                </li>
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">Kebijakan Privasi:</h4>
              <p>
                <li>
                  Website pemilihan online harus memiliki kebijakan privasi yang
                  jelas yang menjelaskan bagaimana data pengguna dikumpulkan,
                  digunakan, dan dilindungi.
                </li>
                <li>
                  Pengguna harus memberikan persetujuan mereka terhadap
                  kebijakan privasi sebelum menggunakan platform.
                </li>
                <li>
                  Data pribadi pengguna harus dijaga kerahasiaannya dan tidak
                  boleh dibagikan kepada pihak ketiga tanpa persetujuan
                  pengguna.
                </li>
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">Integritas Pemilihan:</h4>
              <p>
                <li>
                  Pengguna tidak boleh melakukan tindakan manipulasi, penipuan,
                  atau kecurangan dalam pemilihan yang dilakukan melalui
                  website.
                </li>
                <li>
                  Pengguna tidak boleh melakukan tindakan yang dapat
                  mempengaruhi atau memanipulasi hasil pemilihan.
                </li>
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">Tanggung Jawab Hukum:</h4>
              <p>
                <li>
                  Pengguna harus mematuhi hukum yang berlaku dalam penggunaan
                  website pemilihan online.
                </li>
                <li>
                  Pengguna bertanggung jawab penuh atas konten yang mereka
                  bagikan atau unggah di platform.
                </li>
                <li>
                  Penyelenggara tidak bertanggung jawab atas kerugian atau
                  tuntutan hukum yang timbul akibat penggunaan yang melanggar
                  hukum.
                </li>
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">Perubahan dan Pembaruan:</h4>
              <p>
                <li>
                  Penyelenggara berhak untuk mengubah syarat dan ketentuan
                  penggunaan sesuai kebijakan mereka.
                </li>
                <li>
                  Pengguna harus memeriksa dan memahami perubahan yang
                  diberlakukan pada syarat dan ketentuan penggunaan.
                </li>
              </p>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col>
              <p>
                Kami berharap pengalaman Anda dalam menggunakan platform
                pemilihan online ini menyenangkan dan aman. Harap pastikan bahwa
                Anda memahami dan mematuhi syarat dan ketentuan yang berlaku.
                Jika Anda memiliki pertanyaan atau kekhawatiran, jangan ragu
                untuk menghubungi kami melalui kontak yang tersedia di website
                ini.
                <br />
                <br />
                Terima kasih atas partisipasi Anda dalam pemilihan online kami!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FivePage;
