function run(num) {
    let totalPembelian = num;
    let diskon = 0;
  
    if (totalPembelian > 300000) {
      diskon = 0.3;  // Diskon 30% 
    } else if (totalPembelian > 100000) {
      diskon = 0.1;  // Diskon 10% 
    }
  
    const jumlahYangHarusDibayar = totalPembelian - totalPembelian * diskon;
    return parseFloat(jumlahYangHarusDibayar.toFixed(2));
  }
  
  console.log('1. num: 50000, output:', run(50000)); 
  console.log('2. num: 100000, output:', run(100000)); 
  console.log('3. num: 101000, output:', run(101000)); 
  console.log('4. num: 99000, output:', run(99000)); 
  console.log('5. num: 100100, output:', run(100100)); 
  console.log('6. num: 100001, output:', run(100001)); 
  console.log('7. num: 99999, output:', run(99999)); 
  console.log('8. num: 111111, output:', run(111111)); 
  console.log('9. num: 100050, output:', run(100050));
  console.log('10. num: 999999, output:', run(999999));
  