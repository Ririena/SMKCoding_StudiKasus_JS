function run(x,y,z) {
    let simpan = 0;
  
    for (let i = 1; i <= z; i++) {
      simpan += x + (i - 1) * y;  // Si Alif Nabung
    }
  
    return simpan;
  }
