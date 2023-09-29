function run(level, totalLevel) {
    var totalHadiah = 0;
    var PemainGagal = 20000;
    var pemainMenang = 100000;

    hasil = 0;
    for (i = 0; i < level; i++) (
        totalHadiah += pemainMenang)
    if (level < totalLevel) {
        loser = totalLevel - level
        hasil = loser * PemainGagal
        totalhasil = totalHadiah - hasil;
        if (totalhasil < 0) {
            totalhasil = 0;
        }

    }
    return totalhasil;
}
