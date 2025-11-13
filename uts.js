class Cuti {
    constructor(nama, kuota) {
        this.nama = nama;
        this.kuota = kuota;
    }

    ajukanCuti(daysRequested) {
        if (daysRequested > this.kuota) {
            return `Kuota anda tidak cukup untuk mengajukan cuti ini.`;
        } else {
        return `Pengajuan cuti ${daysRequested} hari disetujui untuk ${this.nama}. Sisa kuota: ${this.kuota} hari.`;
    }
}
}
class CutiTahunan extends Cuti {
    constructor(nama) {
        super(nama, 12); 
        this.jenisCuti = "Cuti Tahunan";
    }

    ajukanCuti(daysRequested) {
        console.log(`Mengajukan ${this.jenisCuti}...`);
        return super.ajukanCuti(daysRequested);
    }
}

class CutiSakit extends Cuti {
    constructor(nama) {
        super(nama, 2); 
        this.jenisCuti = "Cuti Sakit";
    }

    ajukanCuti(daysRequested) {
        console.log(`Mengajukan ${this.jenisCuti}...`);
        return super.ajukanCuti(daysRequested);
    }
}

class CutiMelahirkan extends Cuti {
    constructor(nama) {
        super(nama, 90); 
        this.jenisCuti = "Cuti Melahirkan";
    }

    ajukanCuti(daysRequested) {
        console.log(`Mengajukan ${this.jenisCuti}...`);
        return super.ajukanCuti(daysRequested);
    }
}

const karyawan1 = new CutiTahunan("Budi");
const karyawan2 = new CutiSakit("Siti");
const karyawan3 = new CutiMelahirkan("Maya");


console.log(karyawan1.ajukanCuti(5));

console.log(karyawan2.ajukanCuti(10));