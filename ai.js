// File: ai.js
// Arahkan ke file proxy di hostingmu sendiri
const API_URL = "proxy.php"; 
const MODEL_NAME = "sortiq:latest"; // Pastikan nama model benar

async function getAIResponse(message) {
    try {
        console.log("Mengirim pesan ke Proxy...");

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: MODEL_NAME,
                messages: [{ role: "user", content: message }],
                stream: false
            })
        });

        // Cek jika error dari Proxy
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Proxy Error:", errorText);
            return "Maaf, ada gangguan pada server AI.";
        }

        const data = await response.json();
        
        // Cek struktur balasan Ollama
        if (data.message && data.message.content) {
            return data.message.content;
        } else {
            console.log("Respon aneh:", data);
            return "AI bingung (Respon kosong).";
        }

    } catch (error) {
        console.error("JS Error:", error);
        return "Gagal terhubung. Cek koneksi internetmu.";
    }
}