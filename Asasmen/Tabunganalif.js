function run(x,y,z) {
    let totalSavings = 0;
  
    for (let i = 1; i <= z; i++) {
      totalSavings += x + (i - 1) * y;  // Menambah setoran bulanan
    }
  
    return totalSavings;
  }
