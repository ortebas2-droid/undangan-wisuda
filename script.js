// ========== DATA WISUDA ==========
const nama1 = "Marlina Harun, A.Md.Kes";
const nama2 = "Sulfina Kader, A.Md.Kes";
const tanggal = "Kamis, 23 Oktober 2025";

// Masukkan data ke dalam elemen jika elemen ada
const elNama1 = document.getElementById("nama1");
const elNama2 = document.getElementById("nama2");
const elTanggal = document.getElementById("tanggal");

if (elNama1) elNama1.textContent = nama1;
if (elNama2) elNama2.textContent = nama2;
if (elTanggal) elTanggal.textContent = tanggal;

// Tombol lokasi Google Maps (link yang kamu berikan)
const mapsBtn = document.getElementById("mapsBtn");
if (mapsBtn) {
  mapsBtn.href = "https://maps.app.goo.gl/LH2h3rXf9YNgqJmn6";
}

// ========== NAMA TAMU OTOMATIS ==========
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get("to");

let displayName = "Tamu Undangan";
if (guestName) {
  const decoded = decodeURIComponent(guestName).replace(/\+/g, " ");
  const capitalized = decoded.replace(/\b\w/g, c => c.toUpperCase());
  const guestEl = document.getElementById("guestName");
  if (guestEl) guestEl.textContent = capitalized;
  displayName = capitalized;
}

// ========== NOMOR WHATSAPP ==========
// gunakan format internasional tanpa tanda +, misalnya 6282... untuk Indonesia
const nomorWA1 = "6282191872994";
const nomorWA2 = "6282297192409";

let pesan = "Halo, saya ingin konfirmasi kehadiran";
if (guestName) {
  pesan = `Halo, saya ${displayName}, ingin konfirmasi kehadiran`;
}
const encodedPesan = encodeURIComponent(pesan);

// Pasang href ke elemen WA jika ada
const wa1El = document.getElementById("wa1");
const wa2El = document.getElementById("wa2");

// Gunakan https://wa.me/<number>?text=<message> (works both di Web & Mobile)
if (wa1El) wa1El.href = `https://wa.me/${nomorWA1}?text=${encodedPesan}`;
if (wa2El) wa2El.href = `https://wa.me/${nomorWA2}?text=${encodedPesan}`;
