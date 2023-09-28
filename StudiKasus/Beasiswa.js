function run(n1, n2, n3) {
    const average = (n1 + n2 + n3) /3;

const diatas = average > 90;

const  statikmeningkat = n1 < n2 && n2 < n3;

    return diatas && statikmeningkat ? 'BENAR': 'SALAH';
}