# Yet Another Electronics Tools (YAET)

Yet Another Electronics Tools (YAET) adalah aplikasi desktop yang dirancang untuk membantu mahasiswa dan praktisi elektronika dalam melakukan berbagai perhitungan rumus dengan cepat dan akurat. Aplikasi ini mengedepankan aspek estetika antarmuka dengan menggabungkan konsep Liquid Glassmorphism dan Neumorphism untuk memberikan pengalaman pengguna yang nyaman dan taktil.

## Fitur Utama

- Visualisasi Rumus Ilmiah: Menggunakan library KaTeX untuk menampilkan persamaan matematika dengan format yang sesuai dengan standar akademik dan profesional.
- UI Liquid Glass: Tampilan transparan yang dinamis dengan elemen blur di latar belakang untuk memberikan kesan modern.
- Neumorphic Control: Desain tombol dan input dengan bayangan lembut yang memberikan kesan depth pada UI.
- Instant Equation: Hasil perhitungan akan muncul seketika setelah nilai dimasukkan atau dengan menekan tombol Enter pada keyboard.
- Rumus Lengkap:
  - Op-Amp: Penguatan Non-Inverting, Inverting, Penjumlah, Selisih, dan Gain Error.
  - Power Amp: Perhitungan Daya dan Efisiensi Kelas A, B, dan AB.
  - Power Electronics: Regulator Zener, Line Regulation, dan Load Regulation.
  - Semikonduktor: Penyearah Setengah Gelombang, Gelombang Penuh, dan Kapasitas Kulit Atom.
  - Transistor: Karakteristik JFET, D-MOSFET, dan E-MOSFET.
- Dark Mode dan Light Mode: Dukungan perpindahan tema untuk kenyamanan penggunaan dalam berbagai kondisi cahaya.

## Panduan Penggunaan (.exe)

Bagi user yang ingin menjalankan aplikasi secara langsung tanpa perlu melakukan proses instalasi atau kompilasi kode sumber, ikuti langkah berikut:

1. Buka halaman repository ini di browser.
2. Navigasi ke bagian Releases di sisi kanan halaman.
3. Unduh file executable terbaru yang memiliki ekstensi .exe.
4. Setelah proses unduh selesai, klik dua kali pada file tersebut untuk menjalankan aplikasi.
5. Aplikasi ini bersifat portable, sehingga tidak memerlukan proses instalasi ke sistem Windows Anda.

## Development dan Local Installation

Jika Anda ingin menjalankan atau mengembangkan aplikasi ini dari kode sumber, pastikan Anda telah menginstal Node.js di komputer Anda:

1. Clone repository ini:
   git clone https://github.com/klauszealot/Yet-Another-Electronics-Tools.git
2. Masuk ke direktori proyek:
   cd Yet-Another-Electronics-Tools
3. Instal dependensi:
   npm install
4. Jalankan aplikasi dalam mode pengembangan:
   npm start

## Bahasa Pemrograman dan Tools yang digunakan

- Framework: Electron.js
- Frontend: HTML5, CSS3 (Custom Properties), JavaScript (ES6+)
- Matematika: KaTeX
- Tipografi: Apple San Francisco

## License
Proyek ini dilisensikan di bawah Lisensi ISC.
