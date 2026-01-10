SORTIQ - Platform Pengelolaan Sampah Cerdas Berbasis AI 🌱

SORTIQ adalah platform web inovatif yang memberdayakan masyarakat untuk memilah sampah dengan lebih cerdas menggunakan teknologi Kecerdasan Buatan (AI) dan Gamifikasi.

Proyek ini dikembangkan untuk mendukung SDGs Poin 13 (Penanganan Perubahan Iklim) dengan tujuan mengurangi emisi gas rumah kaca yang dihasilkan oleh timbunan sampah yang tidak terkelola.

🌟 Fitur Unggulan

1. 📷 AI Smart Scanner

Tidak perlu bingung lagi membedakan jenis sampah. Cukup arahkan kamera HP, dan AI kami akan mengidentifikasi jenis sampah (Plastik, Kertas, Logam, Kaca) secara real-time serta memberikan panduan cara mengelolanya.

2. 🗺️ Peta TPA & Navigasi Satelit

Fitur peta interaktif yang terintegrasi dengan Google Maps Satellite. Pengguna dapat melihat lokasi Tempat Pembuangan Akhir (TPA) atau Bank Sampah terdekat dengan akurasi tinggi dan mendapatkan rute navigasi langsung.

3. 🎮 Gamifikasi & Reward (Eco Market)

Setiap aksi memilah sampah dihargai dengan Poin XP. Pengguna dapat menukarkan poin tersebut dengan berbagai hadiah menarik seperti saldo E-Wallet, bibit pohon, atau starter kit kompos di Eco Market.

4. 🌍 Kalkulator Jejak Karbon

Fitur edukasi interaktif yang menghitung estimasi emisi CO2 yang berhasil dicegah pengguna berdasarkan jumlah sampah yang mereka daur ulang. Hasilnya divisualisasikan dalam bentuk "Jumlah Pohon yang Diselamatkan".

5. 🤖 Asisten Chatbot Cerdas

Layanan tanya jawab otomatis untuk membantu pengguna memahami isu-isu lingkungan dan cara penggunaan aplikasi.

🛠️ Teknologi yang Digunakan

SORTIQ dibangun dengan pendekatan Modern Web App yang ringan dan cepat tanpa instalasi:

Frontend Core: HTML5 Semantik & JavaScript Modern (ES6+)

Styling Framework: Tailwind CSS (via CDN) untuk desain responsif dan elegan.

Interactivity Engine: Alpine.js untuk manajemen state yang reaktif dan ringan.

Computer Vision Simulation: HTML5 Media Capture API untuk akses kamera.

Maps Integration: Google Maps Embed API dengan parameter Satelit.

Data Persistence: Browser LocalStorage (Menyimpan data pengguna & poin tanpa backend server, ideal untuk demo prototipe).

Assets: Phosphor Icons & Google Fonts (Plus Jakarta Sans & Playfair Display).

📂 Struktur File Proyek

Berikut adalah panduan navigasi file dalam proyek ini:

Nama File

Fungsi

index.html

Halaman Intro Animasi. Menampilkan logo dengan efek elegan sebelum masuk ke aplikasi.

beranda.html

Landing Page. Halaman muka berisi penjelasan visi, misi, dan fitur SORTIQ.

login.html

Halaman Autentikasi. Tempat pengguna memasukkan nama untuk personalisasi dashboard.

dashboard-user.html

Pusat Kendali (Main App). Single Page Application (SPA) yang memuat semua fitur utama (Peta, Chat, Market, Kalkulator).

scan.html

Modul AI Scanner. Halaman khusus yang mengakses kamera untuk memindai sampah.

logo.png

Aset gambar logo brand SORTIQ.

🚀 Cara Menjalankan (Demo)

Karena SORTIQ berbasis Client-Side murni, aplikasi ini tidak memerlukan instalasi server backend (seperti Node.js, PHP, atau Python).

Persiapan:

Pastikan perangkat terhubung ke internet (untuk memuat library Tailwind & Alpine.js dari CDN).

Pastikan file logo.png sudah ada di dalam folder proyek.

Langkah Demo:

Buka file index.html menggunakan browser modern (Chrome, Edge, Safari, atau Firefox).

Nikmati animasi pembuka, lalu Anda akan diarahkan ke beranda.html.

Klik tombol "Masuk / Daftar". Masukkan nama Anda (misal: "Juri 1") dan klik Masuk.

Di Dashboard, jelajahi fitur-fitur yang ada.

Coba fitur Scanner: Izinkan akses kamera browser jika diminta. Arahkan ke objek, tekan tombol shutter, lalu simpan hasilnya untuk menambah poin.

💡 Strategi Bisnis (Business Model)

SORTIQ dirancang untuk keberlanjutan (sustainability) finansial melalui:

B2B Data Insight: Menyediakan data agregat tren sampah konsumsi kepada produsen FMCG.

Komisi Transaksi: Fee kecil dari transaksi penjualan sampah terpilah ke pengepul mitra.

Eco-Marketplace: Penjualan produk ramah lingkungan (alat kompos, tas belanja) di dalam aplikasi.

🏆 Catatan untuk Dewan Juri

Simulasi AI: Dalam versi prototipe ini, deteksi objek disimulasikan untuk memastikan kelancaran demo tanpa ketergantungan pada model machine learning berat di sisi klien.

Persistensi Data: Data poin (XP) dan nama pengguna disimpan di memori browser (Local Storage). Data tidak akan hilang saat halaman di-refresh, memberikan pengalaman pengguna (UX) yang nyata.

Dibuat dengan ❤️ untuk Bumi yang lebih bersih.
