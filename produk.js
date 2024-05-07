document.addEventListener("DOMContentLoaded", function() {
    const produk = document.querySelectorAll('.produk');
    
    // Fungsi untuk mencari produk berdasarkan nama
    function cariProduk(nama) {
        for (let i = 0; i < produk.length; i++) {
            if (produk[i].dataset.nama === nama) {
                return produk[i];
            }
        }
        return null; // Jika tidak ditemukan
    }

    // Contoh penggunaan: cariProduk('Produk 1')
});