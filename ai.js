// File: public/ai.js
const NGROK_URL = "https://everly-unmagnetised-serologically.ngrok-free.dev"; 

const MODEL_NAME = "llama3"; 

// ==================================================================================
// LOGIKA UTAMA
// ==================================================================================
const CLEAN_URL = NGROK_URL.replace(/\/$/, "");
const FULL_API_URL = `${CLEAN_URL}/api/generate`;

console.log("=== SISTEM AI SORTIQ (MANUAL VISIT MODE) ===");
console.log("Target API:", FULL_API_URL);

window.askAI = async function(message) {
    try {
        console.log(`🚀 Mengirim pesan ke AI...`);
        
        const fullPrompt = `Kamu adalah SORTIQ Assistant, asisten bijak yang membantu pengguna mengelola sampah. Jawablah dengan ramah dalam Bahasa Indonesia.\n\nUser: ${message}\nAssistant:`;

        const response = await fetch(FULL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Header Ngrok DIHAPUS supaya tidak bentrok dengan Ollama
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                prompt: fullPrompt,
                stream: false
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server Menolak (${response.status}): ${response.status === 404 ? "Cek URL/Model" : response.statusText}`);
        }

        const data = await response.json();
        
        if (data.response) {
            return data.response; 
        } else {
            return "AI bingung (Respon kosong).";
        }

    } catch (error) {
        console.error("❌ Error AI:", error);
        // Pesan Error Spesifik untuk Mengarahkan User
        return `⚠️ Gagal Terhubung.\n\nSatu langkah lagi! Karena kita pakai Ngrok gratis:\n1. Buka link ini di tab baru: ${CLEAN_URL}\n2. Klik tombol "Visit Site" (warna biru/merah).\n3. Kembali ke sini dan coba chat lagi.`;
    }
};

console.log("Siap! Fungsi window.askAI sudah terdaftar.");
