const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000; // Port yang akan diekspos Ngrok

// ==================================================================
// 1. KONFIGURASI CORS (PENTING AGAR FIREBASE TIDAK DIBLOKIR)
// ==================================================================
app.use(cors({
    origin: '*', // Izinkan semua website (termasuk firebase kamu)
    methods: ['GET', 'POST', 'OPTIONS'], // Izinkan metode ini
    allowedHeaders: ['Content-Type', 'ngrok-skip-browser-warning'] // Izinkan header "sakti" ngrok
}));

app.use(express.json());

// ==================================================================
// 2. ENDPOINT CHAT
// ==================================================================
app.post('/api/generate', async (req, res) => {
    const { model, prompt } = req.body;

    // Log agar kamu tau kalau ada pesan masuk di terminal laptop
    console.log(`📩 [Masuk] Pesan dari Web: "${prompt.substring(0, 30)}..."`);

    try {
        // Teruskan pesan ke OLLAMA (Localhost port 11434)
        const response = await axios.post('http://127.0.0.1:11434/api/generate', {
            model: model || "llama3", 
            prompt: prompt,
            stream: false // Kita matikan stream biar coding frontend lebih simpel
        });

        console.log(`✅ [Sukses] Membalas ke Web.`);
        
        // Kirim jawaban Ollama kembali ke Web Firebase
        res.json(response.data);

    } catch (error) {
        console.error("❌ [Error] Gagal menghubungi Ollama:", error.message);
        console.error("   Pastikan Ollama sudah jalan (ollama run llama3)");
        res.status(500).json({ 
            response: "⚠️ Maaf, Otak AI di server lokal sedang offline atau error." 
        });
    }
});

// ==================================================================
// 3. JALANKAN SERVER
// ==================================================================
// Menggunakan '0.0.0.0' agar lebih stabil menerima koneksi luar
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n==================================================`);
    console.log(`🚀 SERVER JEMBATAN BERJALAN DI PORT ${PORT}`);
    console.log(`   Langkah selanjutnya:`);
    console.log(`   1. Buka terminal baru`);
    console.log(`   2. Ketik: ngrok http ${PORT}`);
    console.log(`==================================================\n`);
});