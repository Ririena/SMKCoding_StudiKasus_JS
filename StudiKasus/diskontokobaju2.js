function run(num) {
    let totalPembelian = num;
    let diskon = 0;
  
    if (totalPembelian > 300000) {
      diskon = 0.1;  // Diskon 10% 
    } if (totalPembelian > 100000) {
      diskon = 0.3;  // Diskon 30% 
    }
  
    const jumlahYangHarusDibayar = totalPembelian - totalPembelian * diskon;
    return parseFloat(jumlahYangHarusDibayar.toFixed(2));
  }
