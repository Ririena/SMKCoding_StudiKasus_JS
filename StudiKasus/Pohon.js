function run(p,l,j) {
    const persegipanjang = (p,l,j);

    const rumus = 2 * (p + l) /j
    return persegipanjang &&     rumus;
}

// Coba Output
console.log('1', 'p: 80, l: 60, j:2', run(80,60,2));
console.log('2', 'p: 100, l: 80, j:4', run(100,80,4));
console.log('3', 'p: 120, l: 50, j:6', run(120,50,6));
console.log('4', 'p: 180, l: 100, j:4', run(180,100,4));
console.log('5', 'p: 200, l: 200, j:2', run(200,200,2));
console.log('6', 'p: 220, l: 120, j:4', run(220,120,4));
console.log('7', 'p: 240, l: 90, j:8', run(240,90,8));
console.log('8', 'p: 280, l: 140, j:2', run(280,140,2));
console.log('9', 'p: 300, l: 200, j:4', run(300,200,4));
console.log('10', 'p: 320, l: 160, j:6', run(320,160,6));   
