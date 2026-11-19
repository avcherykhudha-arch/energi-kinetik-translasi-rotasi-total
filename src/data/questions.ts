import { PhysicsQuestion } from '../types/quiz';

export const PHYSICS_QUESTIONS: PhysicsQuestion[] = [
  {
    id: 1,
    title: 'Silinder Pejal Menuruni Bidang Miring',
    type: 'single_choice',
    typeLabel: 'Pilihan Ganda',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.1: Silinder pejal homogen bermassa $m = 4\\text{ kg}$ dan jari-jari $R = 0{,}2\\text{ m}$ dilepaskan dari diam menuruni bidang miring kasar bersudut $\\theta = 30^\\circ$ sepanjang $s = 5{,}4\\text{ m}$ tanpa slip.',
    prompt:
      'Sebuah silinder pejal homogen bermassa $m = 4\\text{ kg}$ dan berjari-jari $R = 0{,}2\\text{ m}$ ($I = \\frac{1}{2}mR^2$) dilepaskan dari keadaan diam dari puncak sebuah bidang miring kasar dengan sudut kemiringan $\\theta = 30^\\circ$ terhadap horizontal. Panjang lintasan bidang miring yang ditempuh pusat massa silinder hingga tepat mencapai dasar adalah $s = 5{,}4\\text{ m}$. Jika silinder menggelinding murni tanpa slip ($v = \\omega R$) dan percepatan gravitasi $g = 10\\text{ m/s}^2$, berapakah kecepatan linear pusat massa silinder saat mencapai dasar bidang miring?',
    options: [
      { label: 'A', text: '$4{,}24\\text{ m/s}$' },
      { label: 'B', text: '$5{,}20\\text{ m/s}$' },
      { label: 'C', text: '$6{,}00\\text{ m/s}$' },
      { label: 'D', text: '$6{,}21\\text{ m/s}$' },
      { label: 'E', text: '$7{,}35\\text{ m/s}$' },
    ],
    correctIndex: 2,
    narasiSoal:
      'Halo siswa SMAS Tunas Baru Jin Seung Batam, bersama Mr Jo di sini. Mari kita simak soal nomor 1, Pilihan Ganda. Sebuah silinder pejal homogen bermassa 4 kilogram dan berjari-jari 0,2 meter, dengan momen inersia setengah kali massa kali jari-jari kuadrat, dilepaskan dari keadaan diam dari puncak bidang miring kasar bersudut kemiringan 30 derajat terhadap horizontal. Panjang lintasan bidang miring hingga tepat mencapai dasar adalah 5,4 meter. Jika silinder menggelinding murni tanpa slip, dengan kecepatan linear sama dengan kecepatan sudut dikalikan jari-jari, serta percepatan gravitasi 10 meter per sekon kuadrat, berapakah kecepatan linear pusat massa silinder saat mencapai dasar bidang miring? Pilihan A: 4,24 meter per sekon. Pilihan B: 5,20 meter per sekon. Pilihan C: 6,00 meter per sekon. Pilihan D: 6,21 meter per sekon. Pilihan E: 7,35 meter per sekon.',
    narasiPembahasan:
      'Mari kita bahas soal nomor 1 secara runtut. Pertama, kita identifikasi bahwa silinder pejal dilepaskan dari keadaan diam dan menggelinding tanpa slip menuruni bidang miring. Karena tidak ada slip, gaya gesek statis ideal pada titik kontak sesaat memiliki kecepatan nol sehingga usaha gaya gesek statis adalah nol dan hukum kekekalan energi mekanik berlaku. Langkah kedua, kita tentukan ketinggian vertikal awal dari panjang lintasan miring. Ketinggian h sama dengan panjang lintasan s dikalikan sinus 30 derajat, yaitu 5,4 dikali 0,5 menghasilkan 2,7 meter. Langkah ketiga, kita tuliskan kekekalan energi mekanik: energi potensial gravitasi awal, yaitu massa kali gravitasi kali ketinggian, seluruhnya berubah menjadi energi kinetik total di dasar bidang miring, yaitu jumlah energi kinetik translasi dan energi kinetik rotasi. Energi kinetik translasi adalah setengah dikalikan massa dikalikan kuadrat kecepatan. Energi kinetik rotasi adalah setengah dikalikan momen inersia dikalikan kuadrat kecepatan sudut. Karena momen inersia silinder pejal adalah setengah dikalikan massa dikalikan kuadrat jari-jari, dan kecepatan sudut sama dengan kecepatan dibagi jari-jari, maka energi kinetik rotasinya menjadi seperempat dikalikan massa dikalikan kuadrat kecepatan. Jumlah energi kinetik translasi dan rotasi menjadi tiga perempat dikalikan massa dikalikan kuadrat kecepatan. Menyamakannya dengan massa kali gravitasi kali ketinggian, massa saling meniadakan. Maka kuadrat kecepatan sama dengan empat per tiga dikalikan 10 dikalikan 2,7, yaitu empat per tiga dikalikan 27 sama dengan 36. Akar kuadrat dari 36 adalah 6,00 meter per sekon. Jadi jawaban yang benar adalah C.',
    pembahasan: {
      identifikasi:
        'Sebuah silinder pejal homogen dilepaskan dari keadaan diam dan menggelinding murni tanpa slip menuruni bidang miring kasar. Karena terjadi gerak translasi sekaligus rotasi tanpa kehilangan energi mekanik akibat slip (gaya gesek statis ideal tidak melakukan usaha pada titik kontak sesaat), permasalahan diselesaikan menggunakan Hukum Kekekalan Energi Mekanik yang melibatkan energi potensial gravitasi, energi kinetik translasi, dan energi kinetik rotasi.',
      diketahui: [
        'Bentuk benda: Silinder pejal homogen ($I = \\frac{1}{2}mR^2$, sehingga $\\beta = \\frac{1}{2}$)',
        'Massa silinder: $m = 4\\text{ kg}$',
        'Jari-jari silinder: $R = 0{,}2\\text{ m}$',
        'Sudut kemiringan bidang: $\\theta = 30^\\circ$',
        'Panjang lintasan miring: $s = 5{,}4\\text{ m}$',
        'Kecepatan awal: $v_0 = 0\\text{ m/s}$ dan $\\omega_0 = 0\\text{ rad/s}$',
        'Percepatan gravitasi: $g = 10\\text{ m/s}^2$',
      ],
      ditanyakan:
        'Kecepatan linear pusat massa silinder saat mencapai dasar bidang miring ($v$).',
      landasanTeori:
        'Pada gerak menggelinding tanpa slip, berlaku hubungan kinematis $v = \\omega R$. Energi mekanik total pada sistem adalah $E = K_{\\text{trans}} + K_{\\text{rot}} + U_g$, dengan $K_{\\text{trans}} = \\frac{1}{2}mv^2$, $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2$, dan $U_g = mgh$. Untuk permukaan diam tanpa slip, titik kontak benda terhadap lintasan diam sesaat ($v_{\\text{kontak}} = 0$), sehingga usaha oleh gaya gesek statis bernilai nol ($W_{f_s} = 0$) dan $E_{\\text{awal}} = E_{\\text{akhir}}$.',
      fbdDeskripsi:
        'Pada bidang miring bersudut $30^\\circ$, gaya berat $m\\vec{g}$ bekerja vertikal ke bawah dari pusat massa (dapat diuraikan menjadi $mg\\sin 30^\\circ$ sejajar bidang miring ke bawah dan $mg\\cos 30^\\circ$ tegak lurus bidang miring). Gaya normal $\\vec{N}$ bekerja tegak lurus menjauhi permukaan bidang miring melalui pusat massa. Gaya gesek statis $\\vec{f}_s$ bekerja pada titik kontak mengarah ke atas sepanjang bidang miring untuk menghasilkan torsi searah jarum jam ($\tau = f_s R$) yang memutar silinder menuruni lereng.',
      analisisMatematis:
        'Terlebih dahulu tentukan ketinggian vertikal awal $h$:\n$$h = s \\sin\\theta$$\nKemudian terapkan Hukum Kekekalan Energi Mekanik antara posisi puncak (1) dan posisi dasar (2):\n$$E_1 = E_2$$\n$$U_1 + K_1 = U_2 + K_{\\text{trans},2} + K_{\\text{rot},2}$$\n$$mgh + 0 = 0 + \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$\nSubstitusikan $I = \\frac{1}{2}mR^2$ dan syarat tanpa slip $\\omega = \\frac{v}{R}$:\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2$$\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$$\nBagi kedua ruas dengan $m$:\n$$gh = \\frac{3}{4}v^2 \\implies v = \\sqrt{\\frac{4}{3}gh}$$',
      perhitungan:
        '1. Menghitung ketinggian awal:\n$$h = 5{,}4\\text{ m} \\times \\sin 30^\\circ = 5{,}4 \\times 0{,}5 = 2{,}7\\text{ m}$$\n2. Menghitung kecepatan linear pusat massa di dasar:\n$$v = \\sqrt{\\frac{4}{3} \\times 10 \\times 2{,}7} = \\sqrt{\\frac{4}{3} \\times 27} = \\sqrt{4 \\times 9} = \\sqrt{36} = 6{,}00\\text{ m/s}$$',
      jawabanAkhir: '$v = 6{,}00\\text{ m/s}$ (Pilihan C).',
      interpretasi:
        'Kecepatan akhir $6{,}00\\text{ m/s}$ lebih kecil dibandingkan jika benda meluncur licin tanpa berotasi ($\\sqrt{2gh} = \\sqrt{54} \\approx 7{,}35\\text{ m/s}$), karena sepertiga bagian dari energi potensial awal ($\\frac{1}{3}mgh$) terbagi menjadi energi kinetik rotasi agar silinder dapat berputar tanpa slip, sedangkan dua pertiga sisanya menjadi energi kinetik translasi.',
      analisisOpsi: [
        'Opsi A ($4{,}24\\text{ m/s}$): Tidak tepat, nilai ini muncul jika keliru menggabungkan faktor geometri ($\\sqrt{18}$).',
        'Opsi B ($5{,}20\\text{ m/s}$): Tidak tepat, merupakan hasil $\\sqrt{gh} = \\sqrt{27}$ yang berlaku untuk cincin tipis ($I = mR^2$), bukan silinder pejal.',
        'Opsi C ($6{,}00\\text{ m/s}$): BENAR, sesuai perhitungan kekekalan energi mekanik untuk silinder pejal ($I = \\frac{1}{2}mR^2$).',
        'Opsi D ($6{,}21\\text{ m/s}$): Tidak tepat, merupakan hasil $\\sqrt{\\frac{10}{7}gh} = \\sqrt{38{,}57}$ yang berlaku untuk bola pejal ($I = \\frac{2}{5}mR^2$).',
        'Opsi E ($7{,}35\\text{ m/s}$): Tidak tepat, merupakan hasil $\\sqrt{2gh} = \\sqrt{54}$ yang mengabaikan energi kinetik rotasi (kasus meluncur licin tanpa rotasi).',
      ],
    },
  },
  {
    id: 2,
    title: 'Analisis Energi Kinetik Bola Berongga Menggelinding',
    type: 'single_choice',
    typeLabel: 'Pilihan Ganda',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.2: Bola berongga tipis ($I = \\frac{2}{3}mR^2$) bermassa $m = 3\\text{ kg}$ dan jari-jari $R = 0{,}25\\text{ m}$ menggelinding tanpa slip pada lintasan datar dengan $\\omega = 16\\text{ rad/s}$.',
    prompt:
      'Sebuah bola berongga tipis homogen (kulit bola tipis, $I = \\frac{2}{3}mR^2$) bermassa $m = 3\\text{ kg}$ dan berjari-jari $R = 0{,}25\\text{ m}$ menggelinding murni tanpa slip di atas lintasan horizontal yang lurus. Pada saat pengamatan dilakukan, bola berotasi dengan kecepatan sudut tetap $\\omega = 16\\text{ rad/s}$. Tentukan energi kinetik total ($K_{\\text{total}}$) bola tersebut serta persentase rasio energi kinetik rotasinya terhadap energi kinetik total ($\\frac{K_{\\text{rot}}}{K_{\\text{total}}} \\times 100\\%$)!',
    options: [
      { label: 'A', text: '$K_{\\text{total}} = 24{,}0\\text{ J}$ dan rasio $25{,}0\\%$' },
      { label: 'B', text: '$K_{\\text{total}} = 33{,}6\\text{ J}$ dan rasio $28{,}6\\%$' },
      { label: 'C', text: '$K_{\\text{total}} = 40{,}0\\text{ J}$ dan rasio $40{,}0\\%$' },
      { label: 'D', text: '$K_{\\text{total}} = 40{,}0\\text{ J}$ dan rasio $66{,}7\\%$' },
      { label: 'E', text: '$K_{\\text{total}} = 48{,}0\\text{ J}$ dan rasio $50{,}0\\%$' },
    ],
    correctIndex: 2,
    narasiSoal:
      'Sekarang mari kita perhatikan soal nomor 2, Pilihan Ganda. Sebuah bola berongga tipis homogen dengan momen inersia dua pertiga dikalikan massa dikalikan jari-jari kuadrat, memiliki massa 3 kilogram dan jari-jari 0,25 meter. Bola menggelinding murni tanpa slip di atas lintasan horizontal yang lurus. Pada saat pengamatan dilakukan, bola berotasi dengan kecepatan sudut tetap 16 radian per sekon. Tentukan energi kinetik total bola tersebut serta persentase rasio energi kinetik rotasinya terhadap energi kinetik total! Pilihan A: energi kinetik total 24,0 Joule dan rasio 25,0 persen. Pilihan B: energi kinetik total 33,6 Joule dan rasio 28,6 persen. Pilihan C: energi kinetik total 40,0 Joule dan rasio 40,0 persen. Pilihan D: energi kinetik total 40,0 Joule dan rasio 66,7 persen. Pilihan E: energi kinetik total 48,0 Joule dan rasio 50,0 persen.',
    narasiPembahasan:
      'Mari kita analisis soal nomor 2 tahap demi tahap. Bola berongga tipis memiliki massa 3 kilogram, jari-jari 0,25 meter, dan kecepatan sudut 16 radian per sekon. Tahap pertama, karena bola menggelinding tanpa slip, kecepatan linear pusat massa sama dengan kecepatan sudut dikalikan jari-jari, yaitu 16 dikalikan 0,25 sama dengan 4 meter per sekon. Tahap kedua, hitung energi kinetik translasi: setengah dikalikan massa dikalikan kuadrat kecepatan, yaitu setengah dikalikan 3 dikalikan 16 menghasilkan 24 Joule. Tahap ketiga, hitung momen inersia bola berongga tipis: dua pertiga dikalikan 3 dikalikan kuadrat dari 0,25, menghasilkan 0,125 kilogram meter kuadrat. Maka energi kinetik rotasi sama dengan setengah dikalikan 0,125 dikalikan kuadrat dari 16, yaitu 0,0625 dikalikan 256 sama dengan 16 Joule. Tahap keempat, energi kinetik total adalah penjumlahan 24 Joule ditambah 16 Joule sama dengan 40,0 Joule. Tahap kelima, rasio energi kinetik rotasi terhadap energi kinetik total adalah 16 dibagi 40 sama dengan dua per lima atau 40,0 persen. Jadi jawaban yang tepat adalah C.',
    pembahasan: {
      identifikasi:
        'Bola berongga tipis menggelinding murni tanpa slip pada lintasan datar dengan kecepatan sudut konstan. Soal ini menuntut penentuan kecepatan translasi dari syarat tanpa slip terlebih dahulu, lalu menghitung masing-masing komponen energi kinetik translasi dan rotasi, energi total, serta proporsi energi rotasi terhadap totalnya.',
      diketahui: [
        'Bentuk benda: Bola berongga tipis ($I = \\frac{2}{3}mR^2$, $\\beta = \\frac{2}{3}$)',
        'Massa bola: $m = 3\\text{ kg}$',
        'Jari-jari bola: $R = 0{,}25\\text{ m}$',
        'Kecepatan sudut: $\\omega = 16\\text{ rad/s}$',
      ],
      ditanyakan:
        'Energi kinetik total ($K_{\\text{total}}$) dan persentase rasio $\\frac{K_{\\text{rot}}}{K_{\\text{total}}} \\times 100\\%$.',
      landasanTeori:
        'Untuk gerak menggelinding tanpa slip pada bidang datar, pusat massa bergerak dengan kelajuan $v = \\omega R$. Energi kinetik total merupakan jumlah skalar energi kinetik translasi $K_{\\text{trans}} = \\frac{1}{2}mv^2$ dan energi kinetik rotasi $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2$. Secara aljabar, jika $I = \\beta mR^2$, maka $\\frac{K_{\\text{rot}}}{K_{\\text{total}}} = \\frac{\\beta}{1 + \\beta}$.',
      fbdDeskripsi:
        'Pada lintasan horizontal datar dengan kelajuan konstan ($a = 0$, $\\alpha = 0$), gaya yang bekerja pada bola hanyalah gaya berat $m\\vec{g}$ vertikal ke bawah dari pusat massa dan gaya normal $\\vec{N}$ vertikal ke atas dari titik kontak yang sama besar ($N = mg$). Karena tidak ada percepatan translasi maupun percepatan sudut pada gerak menggelinding beraturan di permukaan datar ideal, gaya gesek statis bernilai nol ($f_s = 0$).',
      analisisMatematis:
        '1. Hubungan tanpa slip:\n$$v = \\omega R$$\n2. Energi kinetik translasi dan rotasi:\n$$K_{\\text{trans}} = \\frac{1}{2}mv^2, \\quad K_{\\text{rot}} = \\frac{1}{2}\\left(\\frac{2}{3}mR^2\\right)\\omega^2$$\n3. Energi kinetik total dan rasio rotasi:\n$$K_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}}$$\n$$\\text{Rasio} = \\frac{K_{\\text{rot}}}{K_{\\text{total}}} \\times 100\\% = \\frac{\\frac{2}{3}}{1 + \\frac{2}{3}} \\times 100\\% = \\frac{2}{5} \\times 100\\% = 40\\%$$',
      perhitungan:
        '1. Kecepatan pusat massa:\n$$v = 16 \\times 0{,}25 = 4{,}0\\text{ m/s}$$\n2. Energi kinetik translasi:\n$$K_{\\text{trans}} = \\frac{1}{2}(3)(4^2) = 1{,}5 \\times 16 = 24{,}0\\text{ J}$$\n3. Momen inersia dan energi kinetik rotasi:\n$$I = \\frac{2}{3}(3)(0{,}25)^2 = 2 \\times 0{,}0625 = 0{,}125\\text{ kg}\\cdot\\text{m}^2$$\n$$K_{\\text{rot}} = \\frac{1}{2}(0{,}125)(16^2) = 0{,}0625 \\times 256 = 16{,}0\\text{ J}$$\n4. Energi kinetik total:\n$$K_{\\text{total}} = 24{,}0 + 16{,}0 = 40{,}0\\text{ J}$$\n5. Persentase rasio energi rotasi:\n$$\\frac{K_{\\text{rot}}}{K_{\\text{total}}} \\times 100\\% = \\frac{16{,}0}{40{,}0} \\times 100\\% = 40{,}0\\%$$',
      jawabanAkhir: '$K_{\\text{total}} = 40{,}0\\text{ J}$ dan rasio $\\frac{K_{\\text{rot}}}{K_{\\text{total}}} = 40{,}0\\%$ (Pilihan C).',
      interpretasi:
        'Sebesar $40\\%$ energi kinetik total bola berongga tersimpan dalam bentuk gerak rotasi, sementara $60\\%$ sisanya berupa energi kinetik translasi. Proporsi ini hanya bergantung pada faktor distribusi massa $\\beta = \\frac{2}{3}$, bukan pada nilai massa ataupun jari-jari.',
      analisisOpsi: [
        'Opsi A: Tidak tepat, $24{,}0\\text{ J}$ hanya menghitung energi kinetik translasi tanpa menyertakan rotasi.',
        'Opsi B: Tidak tepat, menggunakan rumus momen inersia bola pejal ($I = \\frac{2}{5}mR^2$) sehingga menghasilkan $K_{\\text{rot}} = 9{,}6\\text{ J}$ dan $K_{\\text{total}} = 33{,}6\\text{ J}$.',
        'Opsi C: BENAR, nilai $K_{\\text{total}} = 40{,}0\\text{ J}$ dan rasio terhadap energi total adalah $\\frac{16}{40} = 40{,}0\\%$.',
        'Opsi D: Tidak tepat, $66{,}7\\%$ adalah perbandingan $K_{\\text{rot}}/K_{\\text{trans}} = \\frac{2}{3}$, bukan perbandingan terhadap energi kinetik total.',
        'Opsi E: Tidak tepat, menggunakan momen inersia cincin tipis ($I = mR^2$) sehingga menghasilkan $K_{\\text{total}} = 48{,}0\\text{ J}$ dan rasio $50{,}0\\%$.',
      ],
    },
  },
  {
    id: 3,
    title: 'Kekekalan Energi Mekanik Bola Pejal',
    type: 'multiple_choice',
    typeLabel: 'Pilihan Ganda Kompleks',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.3: Bola pejal homogen ($m = 5\\text{ kg}, R = 0{,}2\\text{ m}$) dilepaskan dari diam di puncak bidang miring kasar berketinggian vertikal $h = 3{,}5\\text{ m}$.',
    prompt:
      'Sebuah bola pejal homogen bermassa $m = 5\\text{ kg}$ dan berjari-jari $R = 0{,}2\\text{ m}$ ($I = \\frac{2}{5}mR^2$) dilepaskan dari keadaan diam di puncak suatu bidang miring kasar pada ketinggian vertikal $h = 3{,}5\\text{ m}$ di atas lantai dasar ($g = 10\\text{ m/s}^2$). Bola menggelinding tanpa slip hingga mencapai dasar bidang miring. Pilihlah SEMUA pernyataan berikut yang BENAR berdasarkan analisis fisika!',
    options: [
      {
        label: '1',
        text: 'Penurunan energi potensial gravitasi bola dari puncak ke dasar sebesar $175\\text{ J}$, dan seluruhnya terkonversi menjadi jumlah energi kinetik translasi dan rotasi sebesar $175\\text{ J}$.',
      },
      {
        label: '2',
        text: 'Tepat saat mencapai dasar bidang miring, energi kinetik translasi bola sebesar $125\\text{ J}$ sedangkan energi kinetik rotasinya sebesar $50\\text{ J}$.',
      },
      {
        label: '3',
        text: 'Karena adanya gaya gesek statis yang menyebabkan bola berotasi, energi mekanik sistem berkurang sehingga energi kinetik total di dasar lebih kecil daripada $175\\text{ J}$.',
      },
      {
        label: '4',
        text: 'Kecepatan sudut bola di dasar bidang miring memenuhi hubungan tanpa slip sehingga bernilai $\\omega = 25\\sqrt{2}\\text{ rad/s}$.',
      },
      {
        label: '5',
        text: 'Energi kinetik rotasi bola di dasar bidang miring lebih besar daripada energi kinetik translasinya karena momen inersia bergantung pada kuadrat jari-jari.',
      },
    ],
    correctIndices: [0, 1, 3],
    narasiSoal:
      'Kita lanjut ke soal nomor 3, Pilihan Ganda Kompleks. Pada soal ini Anda dapat memilih lebih dari satu pernyataan yang benar. Sebuah bola pejal homogen bermassa 5 kilogram dan berjari-jari 0,2 meter, dengan momen inersia dua per lima kali massa kali jari-jari kuadrat, dilepaskan dari keadaan diam pada ketinggian vertikal 3,5 meter di atas lantai dasar. Gunakan percepatan gravitasi 10 meter per sekon kuadrat. Bola menggelinding tanpa slip hingga mencapai dasar bidang miring. Evaluasilah kelima pernyataan berikut. Pernyataan 1: Penurunan energi potensial gravitasi bola dari puncak ke dasar sebesar 175 Joule, dan seluruhnya terkonversi menjadi jumlah energi kinetik translasi dan rotasi sebesar 175 Joule. Pernyataan 2: Tepat saat mencapai dasar bidang miring, energi kinetik translasi bola sebesar 125 Joule sedangkan energi kinetik rotasinya sebesar 50 Joule. Pernyataan 3: Karena adanya gaya gesek statis yang menyebabkan bola berotasi, energi mekanik sistem berkurang sehingga energi kinetik total di dasar lebih kecil daripada 175 Joule. Pernyataan 4: Kecepatan sudut bola di dasar bidang miring memenuhi hubungan tanpa slip sehingga bernilai 25 akar 2 radian per sekon. Pernyataan 5: Energi kinetik rotasi bola di dasar bidang miring lebih besar daripada energi kinetik translasinya karena momen inersia bergantung pada kuadrat jari-jari.',
    narasiPembahasan:
      'Mari kita evaluasi satu per satu pernyataan pada soal nomor 3. Bola pejal bermassa 5 kilogram turun dari ketinggian 3,5 meter tanpa slip. Energi potensial gravitasi awal adalah massa kali gravitasi kali tinggi, yaitu 5 kali 10 kali 3,5 sama dengan 175 Joule. Karena bola menggelinding tanpa slip, titik kontak sesaat selalu diam terhadap bidang miring, sehingga gaya gesek statis ideal tidak melakukan usaha. Akibatnya energi mekanik kekal dan energi kinetik total di dasar tepat sama dengan 175 Joule. Dengan demikian Pernyataan 1 benar dan Pernyataan 3 salah. Selanjutnya, untuk bola pejal dengan faktor inersia dua per lima, perbandingan energi kinetik rotasi terhadap translasi adalah dua banding lima. Artinya dari total 175 Joule, energi kinetik translasi adalah lima per tujuh dikali 175 sama dengan 125 Joule, dan energi kinetik rotasi adalah dua per tujuh dikali 175 sama dengan 50 Joule. Jadi Pernyataan 2 benar dan Pernyataan 5 salah. Terakhir, dari setengah kali massa kali kuadrat kecepatan sama dengan 125 Joule, kita peroleh kuadrat kecepatan sama dengan 50, atau kecepatan sama dengan 5 akar 2 meter per sekon. Maka kecepatan sudut sama dengan kecepatan dibagi jari-jari 0,2 meter, yaitu 25 akar 2 radian per sekon. Maka Pernyataan 4 benar. Kombinasi pernyataan yang benar adalah 1, 2, dan 4.',
    pembahasan: {
      identifikasi:
        'Kasus kekekalan energi mekanik pada bola pejal yang menggelinding tanpa slip menuruni bidang miring kasar. Siswa harus mengevaluasi konsekuensi kekekalan energi, pembagian energi translasi dan rotasi, peran usaha gaya gesek statis, serta nilai kinematis kecepatan sudut di dasar lintasan.',
      diketahui: [
        'Bentuk benda: Bola pejal homogen ($I = \\frac{2}{5}mR^2$, $\\beta = \\frac{2}{5}$)',
        'Massa: $m = 5\\text{ kg}$',
        'Jari-jari: $R = 0{,}2\\text{ m}$',
        'Ketinggian awal: $h = 3{,}5\\text{ m}$',
        'Kecepatan awal: $v_0 = 0$, $\\omega_0 = 0$',
        'Percepatan gravitasi: $g = 10\\text{ m/s}^2$',
      ],
      ditanyakan:
        'Kebenaran dari lima pernyataan mengenai $\\Delta U_g$, $K_{\\text{trans}}$, $K_{\\text{rot}}$, kekekalan energi mekanik, dan kecepatan sudut $\\omega$ di dasar.',
      landasanTeori:
        'Pada kondisi menggelinding tanpa slip di lintasan diam, kecepatan titik kontak adalah nol sehingga gaya gesek statis tidak melakukan usaha ($W_{f_s} = \\int \\vec{f}_s \\cdot \\vec{v}_{\\text{kontak}}\\,dt = 0$). Energi mekanik sistem tetap kekal: $U_{\\text{awal}} = K_{\\text{trans}} + K_{\\text{rot}}$. Proporsi energi mengikuti $K_{\\text{rot}} = \\beta K_{\\text{trans}}$, sehingga $K_{\\text{trans}} = \\frac{1}{1+\\beta}E_{\\text{mek}}$ dan $K_{\\text{rot}} = \\frac{\\beta}{1+\\beta}E_{\\text{mek}}$.',
      fbdDeskripsi:
        'Bola pejal berada pada bidang miring kasar dengan sudut $\\theta$. Gaya berat $m\\vec{g}$ mengarah vertikal ke bawah dari pusat massa; gaya normal $\\vec{N}$ tegak lurus permukaan bidang miring melewati pusat massa; dan gaya gesek statis $\\vec{f}_s$ di titik kontak mengarah ke atas sejajar bidang miring sehingga menimbulkan percepatan sudut searah putaran menuruni lereng.',
      analisisMatematis:
        '$$U_1 = mgh$$\n$$K_{\\text{total},2} = K_{\\text{trans},2} + K_{\\text{rot},2} = U_1$$\nKarena $I = \\frac{2}{5}mR^2$ dan $\\omega = \\frac{v}{R}$:\n$$K_{\\text{rot},2} = \\frac{2}{5}K_{\\text{trans},2}$$\n$$K_{\\text{trans},2} = \\frac{5}{7} U_1, \\qquad K_{\\text{rot},2} = \\frac{2}{7} U_1$$\n$$v = \\sqrt{\\frac{2 K_{\\text{trans},2}}{m}}, \\qquad \\omega = \\frac{v}{R}$$',
      perhitungan:
        '1. Perubahan energi potensial gravitasi:\n$$U_1 = 5 \\times 10 \\times 3{,}5 = 175\\text{ J} \\implies \\Delta U_g = -175\\text{ J}$$\n2. Energi kinetik translasi dan rotasi di dasar:\n$$K_{\\text{trans},2} = \\frac{5}{7} \\times 175 = 125\\text{ J}$$\n$$K_{\\text{rot},2} = \\frac{2}{7} \\times 175 = 50\\text{ J}$$\n3. Kecepatan linear dan kecepatan sudut di dasar:\n$$\\frac{1}{2}(5)v^2 = 125 \\implies v^2 = 50 \\implies v = 5\\sqrt{2}\\text{ m/s}$$\n$$\\omega = \\frac{v}{R} = \\frac{5\\sqrt{2}}{0{,}2} = 25\\sqrt{2}\\text{ rad/s}$$',
      jawabanAkhir: 'Pernyataan yang benar adalah **1, 2, dan 4**.',
      interpretasi:
        'Gaya gesek statis pada gerak menggelinding tanpa slip berperan mendistribusikan ulang sebagian energi potensial menjadi energi rotasi melalui torsi, bukan mendisipasi energi mekanik menjadi panas seperti halnya gaya gesek kinetis pada gerak slip.',
      analisisOpsi: [
        'Pernyataan 1 — BENAR: Penurunan $U_g$ sebesar $175\\text{ J}$ seluruhnya menjadi $K_{\\text{trans}} + K_{\\text{rot}} = 175\\text{ J}$.',
        'Pernyataan 2 — BENAR: Sesuai pembagian $\\frac{5}{7}(175) = 125\\text{ J}$ dan $\\frac{2}{7}(175) = 50\\text{ J}$.',
        'Pernyataan 3 — SALAH: Gaya gesek statis ideal tanpa slip tidak melakukan usaha, sehingga energi mekanik tetap kekal ($175\\text{ J}$).',
        'Pernyataan 4 — BENAR: Dengan $v = 5\\sqrt{2}\\text{ m/s}$ dan $R = 0{,}2\\text{ m}$, diperoleh $\\omega = 25\\sqrt{2}\\text{ rad/s}$.',
        'Pernyataan 5 — SALAH: $K_{\\text{rot}} = 50\\text{ J}$ justru lebih kecil daripada $K_{\\text{trans}} = 125\\text{ J}$ karena $\\beta = \\frac{2}{5} < 1$.',
      ],
    },
  },
  {
    id: 4,
    title: 'Perbandingan Bola Pejal dan Cincin Tipis',
    type: 'multiple_choice',
    typeLabel: 'Pilihan Ganda Kompleks',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.4: Bola Pejal (A, $I_A = \\frac{2}{5}MR^2$) dan Cincin Tipis (B, $I_B = MR^2$) bermassa $M = 2\\text{ kg}$ dan jari-jari $R = 0{,}3\\text{ m}$ dilepaskan bersamaan dari ketinggian $h = 2{,}8\\text{ m}$.',
    prompt:
      'Dua benda tegar, yakni **Bola Pejal (A)** ($I_A = \\frac{2}{5}MR^2$) dan **Cincin Tipis (B)** ($I_B = MR^2$), memiliki massa yang sama $M = 2\\text{ kg}$ dan jari-jari luar yang sama $R = 0{,}3\\text{ m}$. Keduanya dilepaskan serentak dari keadaan diam pada ketinggian vertikal yang sama $h = 2{,}8\\text{ m}$ di atas dasar dua bidang miring kasar yang identik, lalu menggelinding tanpa slip menuju dasar ($g = 10\\text{ m/s}^2$). Pilihlah SEMUA pernyataan berikut yang BENAR!',
    options: [
      {
        label: '1',
        text: 'Di dasar bidang miring, energi kinetik total Bola Pejal (A) sama besar dengan energi kinetik total Cincin Tipis (B), yaitu $56\\text{ J}$.',
      },
      {
        label: '2',
        text: 'Energi kinetik translasi Bola Pejal (A) di dasar bidang miring ($40\\text{ J}$) lebih besar daripada energi kinetik translasi Cincin Tipis (B) ($28\\text{ J}$).',
      },
      {
        label: '3',
        text: 'Karena memiliki massa dan jari-jari yang sama, kecepatan pusat massa kedua benda di dasar bidang miring adalah sama besar.',
      },
      {
        label: '4',
        text: 'Pada Cincin Tipis (B), seluruh massanya berada pada jarak $R$ dari sumbu putar sehingga porsi energi kinetik rotasinya mencapai $50\\%$ dari energi total, lebih besar daripada porsi rotasi Bola Pejal (A) yang sekitar $28{,}6\\%$.',
      },
      {
        label: '5',
        text: 'Cincin Tipis (B) mencapai dasar bidang miring lebih dahulu daripada Bola Pejal (A) karena momen inersianya lebih besar.',
      },
    ],
    correctIndices: [0, 1, 3],
    narasiSoal:
      'Berikutnya soal nomor 4, Pilihan Ganda Kompleks. Pilihlah semua pernyataan yang benar. Dua benda tegar, yaitu Bola Pejal A dengan momen inersia dua per lima M R kuadrat, dan Cincin Tipis B dengan momen inersia M R kuadrat, memiliki massa yang sama 2 kilogram dan jari-jari sama 0,3 meter. Keduanya dilepaskan serentak dari keadaan diam pada ketinggian vertikal 2,8 meter di atas dasar dua bidang miring kasar yang identik, lalu menggelinding tanpa slip menuju dasar dengan percepatan gravitasi 10 meter per sekon kuadrat. Pernyataan 1: Di dasar bidang miring, energi kinetik total Bola Pejal A sama besar dengan energi kinetik total Cincin Tipis B, yaitu 56 Joule. Pernyataan 2: Energi kinetik translasi Bola Pejal A di dasar bidang miring 40 Joule, lebih besar daripada energi kinetik translasi Cincin Tipis B sebesar 28 Joule. Pernyataan 3: Karena memiliki massa dan jari-jari yang sama, kecepatan pusat massa kedua benda di dasar bidang miring adalah sama besar. Pernyataan 4: Pada Cincin Tipis B, seluruh massanya berada pada jarak R dari sumbu putar sehingga porsi energi kinetik rotasinya mencapai 50 persen dari energi total, lebih besar daripada porsi rotasi Bola Pejal A yang sekitar 28,6 persen. Pernyataan 5: Cincin Tipis B mencapai dasar bidang miring lebih dahulu daripada Bola Pejal A karena momen inersianya lebih besar.',
    narasiPembahasan:
      'Mari kita analisis perbandingan antara Bola Pejal A dan Cincin Tipis B pada soal nomor 4. Pertama, keduanya memiliki massa 2 kilogram dan ketinggian awal 2,8 meter, sehingga energi potensial awal masing-masing adalah 2 dikali 10 dikali 2,8 sama dengan 56 Joule. Karena menggelinding tanpa slip, seluruh 56 Joule berubah menjadi energi kinetik total di dasar bagi kedua benda. Jadi Pernyataan 1 benar. Kedua, untuk Bola Pejal A dengan faktor inersia dua per lima, energi kinetik translasinya adalah lima per tujuh dikali 56 sama dengan 40 Joule, dan energi rotasinya 16 Joule atau sekitar 28,6 persen. Sedangkan untuk Cincin Tipis B dengan faktor inersia satu, energi kinetik terbagi sama rata: translasinya 28 Joule dan rotasinya 28 Joule atau tepat 50 persen. Oleh karena itu Pernyataan 2 benar dan Pernyataan 4 benar. Ketiga, karena energi kinetik translasi Bola Pejal lebih besar yaitu 40 Joule dibanding 28 Joule untuk massa yang sama, maka kecepatan pusat massa Bola Pejal juga lebih besar daripada Cincin Tipis, dan percepatan turunnya lebih besar sehingga Bola Pejal A tiba lebih dahulu di dasar bidang miring. Jadi Pernyataan 3 dan Pernyataan 5 salah. Kombinasi yang benar adalah 1, 2, dan 4.',
    pembahasan: {
      identifikasi:
        'Perbandingan dinamika dan energi antara dua benda berdimensi lengkung dengan massa dan jari-jari sama namun distribusi massa (momen inersia) berbeda ketika menggelinding tanpa slip dari ketinggian yang sama.',
      diketahui: [
        'Massa kedua benda sama: $M_A = M_B = M = 2\\text{ kg}$',
        'Jari-jari kedua benda sama: $R_A = R_B = R = 0{,}3\\text{ m}$',
        'Bola Pejal (A): $I_A = \\frac{2}{5}MR^2$ ($\\beta_A = \\frac{2}{5}$)',
        'Cincin Tipis (B): $I_B = MR^2$ ($\\beta_B = 1$)',
        'Ketinggian awal sama: $h = 2{,}8\\text{ m}$, $g = 10\\text{ m/s}^2$',
      ],
      ditanyakan:
        'Pernyataan-pernyataan yang benar mengenai perbandingan $K_{\\text{total}}$, $K_{\\text{trans}}$, $K_{\\text{rot}}$, kecepatan pusat massa, dan waktu tempuh kedua benda.',
      landasanTeori:
        'Energi kinetik total di dasar ditentukan hanya oleh $Mgh$ (sama untuk keduanya jika $M$ dan $h$ sama). Namun pembagian antara translasi dan rotasi bergantung pada faktor geometri $\\beta = \\frac{I}{MR^2}$: $v = \\sqrt{\\frac{2gh}{1+\\beta}}$ dan percepatan linear menuruni bidang miring $a = \\frac{g\\sin\\theta}{1+\\beta}$. Semakin kecil $\\beta$ (massa lebih terkonsentrasi dekat poros), semakin besar kecepatan dan percepatan translasinya.',
      fbdDeskripsi:
        'Masing-masing benda pada bidang miring mengalami gaya berat $M\\vec{g}$ ke bawah, gaya normal $\\vec{N}$ tegak lurus bidang, serta gaya gesek statis $\\vec{f}_s$ ke atas sepanjang bidang miring. Untuk Cincin Tipis B yang memiliki $\\beta$ lebih besar, dibutuhkan porsi gaya gesek statis yang lebih besar relatif terhadap berat agar syarat tanpa slip $a = \\alpha R$ tetap terpenuhi, sehingga gaya total ke bawah $(Mg\\sin\\theta - f_s)$ dan percepatan $a_B$ lebih kecil daripada $a_A$.',
      analisisMatematis:
        '$$U_0 = Mgh$$\nUntuk Benda A ($\\beta_A = \\frac{2}{5}$):\n$$K_{\\text{trans}, A} = \\frac{1}{1 + 2/5}Mgh = \\frac{5}{7}Mgh, \\quad K_{\\text{rot}, A} = \\frac{2}{7}Mgh$$\n$$v_A = \\sqrt{\\frac{10}{7}gh}$$\nUntuk Benda B ($\\beta_B = 1$):\n$$K_{\\text{trans}, B} = \\frac{1}{1 + 1}Mgh = \\frac{1}{2}Mgh, \\quad K_{\\text{rot}, B} = \\frac{1}{2}Mgh$$\n$$v_B = \\sqrt{gh}$$',
      perhitungan:
        '1. Energi mekanik awal masing-masing benda:\n$$U_0 = 2 \\times 10 \\times 2{,}8 = 56\\text{ J}$$\n2. Bola Pejal (A):\n$$K_{\\text{total}, A} = 56\\text{ J}, \\quad K_{\\text{trans}, A} = \\frac{5}{7}(56) = 40\\text{ J}, \\quad K_{\\text{rot}, A} = 16\\text{ J}$$\n$$\\frac{K_{\\text{rot}, A}}{K_{\\text{total}, A}} = \\frac{2}{7} \\approx 28{,}6\\%, \\quad v_A = \\sqrt{\\frac{2(40)}{2}} = \\sqrt{40} \\approx 6{,}32\\text{ m/s}$$\n3. Cincin Tipis (B):\n$$K_{\\text{total}, B} = 56\\text{ J}, \\quad K_{\\text{trans}, B} = \\frac{1}{2}(56) = 28\\text{ J}, \\quad K_{\\text{rot}, B} = 28\\text{ J}$$\n$$\\frac{K_{\\text{rot}, B}}{K_{\\text{total}, B}} = \\frac{1}{2} = 50{,}0\\%, \\quad v_B = \\sqrt{\\frac{2(28)}{2}} = \\sqrt{28} \\approx 5{,}29\\text{ m/s}$$',
      jawabanAkhir: 'Pernyataan yang benar adalah **1, 2, dan 4**.',
      interpretasi:
        'Bola Pejal (A) mengalahkan Cincin Tipis (B) mencapai dasar karena distribusi massa bola lebih dekat ke pusat, sehingga hanya memerlukan $28{,}6\\%$ energi untuk berotasi dan mengalokasikan $71{,}4\\%$ energi untuk bergerak maju (translasi).',
      analisisOpsi: [
        'Pernyataan 1 — BENAR: Energi potensial awal kedua benda sama ($56\\text{ J}$), sehingga energi kinetik total di dasar sama-sama $56\\text{ J}$.',
        'Pernyataan 2 — BENAR: $K_{\\text{trans}, A} = 40\\text{ J} > K_{\\text{trans}, B} = 28\\text{ J}$.',
        'Pernyataan 3 — SALAH: Kecepatan pusat massa berbeda ($v_A \\approx 6{,}32\\text{ m/s} > v_B \\approx 5{,}29\\text{ m/s}$) karena $\\beta_A < \\beta_B$.',
        'Pernyataan 4 — BENAR: Porsi rotasi cincin $\\frac{1}{2} = 50\\%$, sedangkan bola pejal $\\frac{2}{7} \\approx 28{,}6\\%$.',
        'Pernyataan 5 — SALAH: Bola Pejal (A) memiliki percepatan $a_A = \\frac{5}{7}g\\sin\\theta$ lebih besar daripada Cincin Tipis (B) $a_B = \\frac{1}{2}g\\sin\\theta$, sehingga Bola Pejal tiba lebih dulu.',
      ],
    },
  },
  {
    id: 5,
    title: 'Silinder Berongga Menaiki Bidang Miring',
    type: 'true_false_group',
    typeLabel: 'Benar / Salah (4 Pernyataan)',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.5: Silinder berongga tipis ($m = 2\\text{ kg}, R = 0{,}4\\text{ m}, I = mR^2$) bergerak dengan $v_1 = 4\\text{ m/s}$ lalu menaiki bidang miring kasar $\\theta = 30^\\circ$ tanpa slip hingga berhenti sesaat di ketinggian $h_{\\text{maks}}$.',
    prompt:
      'Dalam eksperimen laboratorium fisika di SMAS Tunas Baru Jin Seung Batam, sebuah **silinder berongga tipis** bermassa $m = 2\\text{ kg}$ dan berjari-jari $R = 0{,}4\\text{ m}$ ($I = mR^2$) mula-mula bergerak menggelinding murni tanpa slip pada lantai datar dengan kecepatan pusat massa $v_1 = 4\\text{ m/s}$. Silinder tersebut kemudian menaiki bidang miring kasar bersudut $\\theta = 30^\\circ$ sambil tetap menggelinding tanpa slip hingga berhenti sesaat pada ketinggian vertikal maksimum $h_{\\text{maks}}$ ($g = 10\\text{ m/s}^2$). Tentukan nilai kebenaran (**BENAR** atau **SALAH**) dari keempat pernyataan analisis berikut!',
    statements: [
      {
        id: '5a',
        text: 'Perubahan energi kinetik translasi silinder dari posisi awal menaiki bidang miring hingga berhenti sesaat di titik tertinggi adalah $\\Delta K_{\\text{trans}} = -32\\text{ J}$.',
        correctValue: false,
      },
      {
        id: '5b',
        text: 'Selama menaiki bidang miring hingga berhenti sesaat, energi kinetik rotasi silinder berkurang sebesar $16\\text{ J}$ ($\\Delta K_{\\text{rot}} = -16\\text{ J}$) akibat torsi perlambatan dari gaya gesek statis yang mengarah ke atas bidang miring.',
        correctValue: true,
      },
      {
        id: '5c',
        text: 'Ketinggian vertikal maksimum yang dicapai silinder adalah $h_{\\text{maks}} = 1{,}6\\text{ m}$ karena seluruh energi mekanik awal sebesar $32\\text{ J}$ berubah menjadi energi potensial gravitasi saat berhenti sesaat.',
        correctValue: true,
      },
      {
        id: '5d',
        text: 'Jika pada lantai datar mula-mula silinder bergerak dengan $v_1 = 4\\text{ m/s}$ namun meluncur tanpa berotasi (slip murni pada permukaan licin) lalu menaiki bidang miring licin sempurna, ketinggian maksimum yang dicapai akan lebih tinggi daripada $1{,}6\\text{ m}$.',
        correctValue: false,
      },
    ],
    narasiSoal:
      'Sekarang soal nomor 5, Benar atau Salah berbasis kasus analisis tingkat tinggi. Terdapat empat pernyataan yang dinilai terpisah. Dalam eksperimen laboratorium fisika di SMAS Tunas Baru Jin Seung Batam, sebuah silinder berongga tipis bermassa 2 kilogram dan berjari-jari 0,4 meter, dengan momen inersia massa kali kuadrat jari-jari, mula-mula bergerak menggelinding tanpa slip pada lantai datar dengan kecepatan pusat massa 4 meter per sekon. Silinder kemudian menaiki bidang miring kasar bersudut 30 derajat sambil tetap menggelinding tanpa slip hingga berhenti sesaat pada ketinggian vertikal maksimum. Percepatan gravitasi 10 meter per sekon kuadrat. Tentukan Benar atau Salah untuk keempat pernyataan berikut. Pernyataan pertama: Perubahan energi kinetik translasi silinder dari awal menaiki bidang miring hingga berhenti sesaat di titik tertinggi adalah minus 32 Joule. Pernyataan kedua: Selama menaiki bidang miring hingga berhenti sesaat, energi kinetik rotasi silinder berkurang sebesar 16 Joule akibat torsi perlambatan dari gaya gesek statis yang mengarah ke atas bidang miring. Pernyataan ketiga: Ketinggian vertikal maksimum yang dicapai silinder adalah 1,6 meter karena seluruh energi mekanik awal sebesar 32 Joule berubah menjadi energi potensial gravitasi saat berhenti sesaat. Pernyataan keempat: Jika pada lantai datar mula-mula silinder bergerak dengan kecepatan 4 meter per sekon namun meluncur tanpa berotasi pada permukaan licin lalu menaiki bidang miring licin sempurna, ketinggian maksimum yang dicapai akan lebih tinggi daripada 1,6 meter.',
    narasiPembahasan:
      'Mari kita analisis keempat pernyataan pada soal nomor 5. Silinder berongga tipis bermassa 2 kilogram dengan kecepatan awal 4 meter per sekon memiliki energi kinetik translasi awal setengah dikali 2 dikali 16 sama dengan 16 Joule. Karena momen inersia silinder berongga adalah massa dikalikan kuadrat jari-jari dan kecepatan sudut awal sama dengan 4 dibagi 0,4 yaitu 10 radian per sekon, maka energi kinetik rotasi awal juga sama dengan 16 Joule. Jadi energi mekanik total awal adalah 16 ditambah 16 sama dengan 32 Joule. Saat berhenti sesaat di ketinggian maksimum, baik kecepatan linear maupun kecepatan sudut bernilai nol. Maka perubahan energi kinetik translasi adalah nol dikurangi 16 sama dengan minus 16 Joule, bukan minus 32 Joule! Jadi pernyataan pertama salah. Selanjutnya untuk pernyataan kedua, perubahan energi kinetik rotasi memang minus 16 Joule. Mengapa gaya gesek statis mengarah ke atas bidang miring saat silinder mendaki? Karena saat mendaki ke kanan atas, komponen berat menarik pusat massa ke bawah lereng sehingga laju translasi melambat. Agar tetap tanpa slip, kecepatan sudut searah jarum jam harus ikut melambat, yang membutuhkan torsi berlawanan arah jarum jam. Pada titik kontak terbawah, gaya gesek statis yang mengarah ke atas lereng menghasilkan torsi berlawanan arah jarum jam tersebut! Maka pernyataan kedua benar. Untuk pernyataan ketiga, energi mekanik 32 Joule sama dengan massa kali gravitasi kali ketinggian maksimum, yaitu 2 kali 10 kali h maksimum, menghasilkan h maksimum sama dengan 1,6 meter. Jadi pernyataan ketiga benar. Untuk pernyataan keempat, jika silinder hanya meluncur tanpa berotasi pada bidang licin dengan kecepatan 4 meter per sekon, energi mekanik total awalnya hanyalah energi kinetik translasi sebesar 16 Joule, lebih kecil daripada 32 Joule saat menggelinding. Akibatnya ketinggian maksimum yang dicapai hanya 0,8 meter, jauh lebih rendah daripada 1,6 meter. Jadi pernyataan keempat salah. Urutan kunci jawabannya adalah Salah, Benar, Benar, Salah.',
    pembahasan: {
      identifikasi:
        'Silinder berongga tipis menggelinding tanpa slip mendaki bidang miring kasar hingga berhenti sesaat. Kasus ini menguji pemahaman mendalam tentang pembagian energi translasi-rotasi, arah gaya gesek statis dan torsi perlambatan saat mendaki, serta perbandingan dengan gerak meluncur tanpa rotasi.',
      diketahui: [
        'Bentuk benda: Silinder berongga tipis ($I = mR^2$, $\\beta = 1$)',
        'Massa: $m = 2\\text{ kg}$, Jari-jari: $R = 0{,}4\\text{ m}$',
        'Kecepatan awal di dasar: $v_1 = 4\\text{ m/s}$',
        'Sudut bidang miring: $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$',
      ],
      ditanyakan:
        'Evaluasi Benar/Salah untuk 4 pernyataan tentang $\\Delta K_{\\text{trans}}$, $\\Delta K_{\\text{rot}}$ & arah $f_s$, $h_{\\text{maks}}$, dan kasus meluncur licin tanpa rotasi.',
      landasanTeori:
        'Saat menggelinding mendaki bidang miring tanpa slip, kondisi $v = \\omega R$ tetap berlaku setiap saat sehingga saat $v = 0$ di titik tertinggi, $\\omega = 0$ pula. Gaya gesek statis tidak melakukan usaha total, tetapi memberikan torsi yang memperlambat kecepatan sudut $\\omega$ seiring melambatnya $v$ oleh komponen berat $mg\\sin\\theta$.',
      fbdDeskripsi:
        'Silinder mendaki ke arah kanan atas ($+x$ sejajar lereng). Gaya berat $m\\vec{g}$ vertikal ke bawah; gaya normal $\\vec{N}$ tegak lurus bidang miring; dan gaya gesek statis $\\vec{f}_s$ bekerja di titik kontak mengarah **ke atas bidang miring** ($+x$). Secara dinamika, percepatan pusat massa $a_x < 0$ (mengarah turun lereng), dan agar $\\alpha_{\\text{cw}} = a_x/R < 0$ (perlambatan putaran searah jarum jam), torsi terhadap pusat massa harus berlawanan arah jarum jam, yang tepat dihasilkan oleh $\\vec{f}_s$ ke atas lereng ($f_s = -\\frac{I a_x}{R^2} > 0$).',
      analisisMatematis:
        '$$\\omega_1 = \\frac{v_1}{R}$$\n$$K_{\\text{trans},1} = \\frac{1}{2}mv_1^2, \\quad K_{\\text{rot},1} = \\frac{1}{2}(mR^2)\\left(\\frac{v_1}{R}\\right)^2 = \\frac{1}{2}mv_1^2$$\n$$E_{\\text{mek},1} = K_{\\text{trans},1} + K_{\\text{rot},1} = mv_1^2$$\nDi puncak ($v_2 = 0, \\omega_2 = 0$):\n$$mgh_{\\text{maks}} = E_{\\text{mek},1} \\implies h_{\\text{maks}} = \\frac{v_1^2}{g}$$',
      perhitungan:
        '1. Kecepatan sudut awal:\n$$\\omega_1 = \\frac{4}{0{,}4} = 10\\text{ rad/s}$$\n2. Energi kinetik awal dan akhir:\n$$K_{\\text{trans},1} = \\frac{1}{2}(2)(4^2) = 16\\text{ J} \\implies \\Delta K_{\\text{trans}} = 0 - 16 = -16\\text{ J}$$\n$$K_{\\text{rot},1} = \\frac{1}{2}(2 \\times 0{,}4^2)(10^2) = 16\\text{ J} \\implies \\Delta K_{\\text{rot}} = 0 - 16 = -16\\text{ J}$$\n$$E_{\\text{mek},1} = 16 + 16 = 32\\text{ J}$$\n3. Ketinggian maksimum:\n$$2 \\times 10 \\times h_{\\text{maks}} = 32 \\implies h_{\\text{maks}} = 1{,}6\\text{ m}$$\n4. Kasus meluncur tanpa rotasi ($\\omega_1 = 0$):\n$$E_{\\text{licin}} = K_{\\text{trans},1} = 16\\text{ J} \\implies h_{\\text{licin}} = \\frac{16}{2 \\times 10} = 0{,}8\\text{ m} < 1{,}6\\text{ m}$$',
      jawabanAkhir: '1: **SALAH**, 2: **BENAR**, 3: **BENAR**, 4: **SALAH**.',
      interpretasi:
        'Energi kinetik rotasi bertindak sebagai cadangan energi gerak yang ikut terkonversi menjadi energi potensial gravitasi saat benda mendaki bidang miring tanpa slip. Itulah sebabnya silinder yang menggelinding mampu mendaki dua kali lebih tinggi ($1{,}6\\text{ m}$) daripada silinder identik yang hanya meluncur tanpa berotasi ($0{,}8\\text{ m}$) pada kelajuan awal yang sama.',
      analisisOpsi: [
        'Pernyataan 1 — SALAH: $\\Delta K_{\\text{trans}} = -16\\text{ J}$, sedangkan $-32\\text{ J}$ adalah $\\Delta K_{\\text{total}}$.',
        'Pernyataan 2 — BENAR: $\\Delta K_{\\text{rot}} = -16\\text{ J}$ dan $\\vec{f}_s$ ke atas bidang miring menghasilkan torsi perlambatan sudut yang sesuai.',
        'Pernyataan 3 — BENAR: Seluruh energi mekanik $32\\text{ J}$ terkonversi menjadi $U_g = mgh_{\\text{maks}}$, menghasilkan $h_{\\text{maks}} = 1{,}6\\text{ m}$.',
        'Pernyataan 4 — SALAH: Tanpa rotasi, energi kinetik awal hanya $16\\text{ J}$ sehingga hanya mencapai $h = 0{,}8\\text{ m}$ (lebih rendah dari $1{,}6\\text{ m}$).',
      ],
    },
  },
  {
    id: 6,
    title: 'Energi Kinetik Total Silinder Pejal',
    type: 'numeric',
    typeLabel: 'Isian Singkat Matematis',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.6: Silinder pejal homogen ($m = 6\\text{ kg}, R = 0{,}2\\text{ m}$) menggelinding tanpa slip di lantai datar dengan kecepatan pusat massa $v = 5\\text{ m/s}$.',
    prompt:
      'Sebuah silinder pejal homogen bermassa $m = 6\\text{ kg}$ dan berjari-jari $R = 0{,}2\\text{ m}$ ($I = \\frac{1}{2}mR^2$) menggelinding murni tanpa slip di atas lintasan datar horizontal dengan kecepatan pusat massa tetap sebesar $v = 5\\text{ m/s}$. Hitunglah **energi kinetik total** ($K_{\\text{total}}$) yang dimiliki silinder pejal tersebut!',
    unit: 'J',
    correctValue: 112.5,
    tolerance: 0.5,
    placeholder: 'Contoh: 112.5',
    answerHint: 'Masukkan angka saja (gunakan titik untuk desimal).',
    narasiSoal:
      'Sekarang soal nomor 6, Isian Singkat Matematis. Sebuah silinder pejal homogen bermassa 6 kilogram dan berjari-jari 0,2 meter, dengan momen inersia setengah kali massa kali jari-jari kuadrat, menggelinding murni tanpa slip di atas lintasan datar horizontal dengan kecepatan pusat massa tetap sebesar 5 meter per sekon. Hitunglah energi kinetik total yang dimiliki silinder pejal tersebut dalam satuan Joule!',
    narasiPembahasan:
      'Mari kita hitung jawaban soal nomor 6 secara sistematis. Silinder pejal bermassa 6 kilogram, jari-jari 0,2 meter, dan kecepatan pusat massa 5 meter per sekon menggelinding tanpa slip. Pertama, hitung energi kinetik translasi: setengah dikalikan massa dikalikan kuadrat kecepatan, yaitu setengah dikalikan 6 dikalikan 25 sama dengan 75 Joule. Kedua, tentukan kecepatan sudut dari syarat tanpa slip: kecepatan dibagi jari-jari, yaitu 5 dibagi 0,2 sama dengan 25 radian per sekon. Ketiga, hitung momen inersia silinder pejal: setengah dikalikan 6 dikalikan kuadrat dari 0,2 sama dengan 0,12 kilogram meter kuadrat. Maka energi kinetik rotasi sama dengan setengah dikalikan 0,12 dikalikan 25 kuadrat, yaitu 0,06 dikalikan 625 sama dengan 37,5 Joule. Keempat, jumlahkan keduanya: 75 Joule ditambah 37,5 Joule sama dengan 112,5 Joule. Jadi jawaban akhirnya adalah 112,5 Joule.',
    pembahasan: {
      identifikasi:
        'Silinder pejal menggelinding murni tanpa slip pada lintasan datar dengan kelajuan pusat massa konstan. Energi kinetik total merupakan penjumlahan energi kinetik translasi dan rotasi.',
      diketahui: [
        'Bentuk benda: Silinder pejal homogen ($I = \\frac{1}{2}mR^2$)',
        'Massa: $m = 6\\text{ kg}$',
        'Jari-jari: $R = 0{,}2\\text{ m}$',
        'Kecepatan pusat massa: $v = 5\\text{ m/s}$',
      ],
      ditanyakan: 'Energi kinetik total ($K_{\\text{total}}$) dalam satuan Joule ($\text{J}$).',
      landasanTeori:
        'Energi kinetik total benda menggelinding tanpa slip diberikan oleh $K_{\\text{total}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ dengan $\\omega = \\frac{v}{R}$.',
      fbdDeskripsi:
        'Pada bidang datar dengan kecepatan konstan ($a = 0, \\alpha = 0$), silinder hanya dipengaruhi gaya berat $m\\vec{g}$ ke bawah dan gaya normal $\\vec{N}$ ke atas di titik kontak yang saling meniadakan ($N = mg$), dengan gaya gesek statis $f_s = 0$.',
      analisisMatematis:
        '$$K_{\\text{trans}} = \\frac{1}{2}mv^2$$\n$$K_{\\text{rot}} = \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4}mv^2$$\n$$K_{\\text{total}} = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$$',
      perhitungan:
        '1. Energi kinetik translasi:\n$$K_{\\text{trans}} = \\frac{1}{2}(6)(5^2) = 3 \\times 25 = 75\\text{ J}$$\n2. Kecepatan sudut dan momen inersia:\n$$\\omega = \\frac{5}{0{,}2} = 25\\text{ rad/s}, \\quad I = \\frac{1}{2}(6)(0{,}2)^2 = 0{,}12\\text{ kg}\\cdot\\text{m}^2$$\n3. Energi kinetik rotasi:\n$$K_{\\text{rot}} = \\frac{1}{2}(0{,}12)(25^2) = 0{,}06 \\times 625 = 37{,}5\\text{ J}$$\n4. Energi kinetik total:\n$$K_{\\text{total}} = 75 + 37{,}5 = 112{,}5\\text{ J}$$',
      jawabanAkhir: '$K_{\\text{total}} = 112{,}5\\text{ J}$ (ditulis `112.5`).',
      interpretasi:
        'Energi kinetik total silinder pejal lebih besar $50\\%$ daripada energi kinetik translasinya saja ($75\\text{ J}$), karena sepertiga dari energi kinetik total tersebut ($37{,}5\\text{ J}$) digunakan untuk gerak rotasi terhadap pusat massanya.',
      analisisOpsi: [
        'Jawaban numerik tunggal yang diterima adalah $112{,}5\\text{ J}$ (rentang toleransi $\\pm 0{,}5\\text{ J}$).',
      ],
    },
  },
  {
    id: 7,
    title: 'Kecepatan Bola Pejal di Dasar Bidang Miring',
    type: 'numeric',
    typeLabel: 'Isian Singkat Matematis',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.7: Bola pejal homogen ($m = 3{,}5\\text{ kg}, R = 0{,}15\\text{ m}$) dilepaskan dari diam di ketinggian vertikal $h = 7{,}0\\text{ m}$ pada bidang miring kasar bersudut $30^\\circ$.',
    prompt:
      'Sebuah bola pejal homogen bermassa $m = 3{,}5\\text{ kg}$ dan berjari-jari $R = 0{,}15\\text{ m}$ ($I = \\frac{2}{5}mR^2$) dilepaskan dari keadaan diam pada ketinggian vertikal $h = 7{,}0\\text{ m}$ di atas dasar sebuah bidang miring kasar yang memiliki sudut kemiringan $\\theta = 30^\\circ$. Bola menggelinding murni tanpa slip hingga mencapai dasar bidang miring ($g = 10\\text{ m/s}^2$). Tentukan besar **kecepatan linear pusat massa** ($v$) bola tepat saat mencapai dasar bidang miring!',
    unit: 'm/s',
    correctValue: 10,
    tolerance: 0.15,
    placeholder: 'Contoh: 10',
    answerHint: 'Masukkan angka saja tanpa satuan.',
    narasiSoal:
      'Sekarang soal nomor 7, Isian Singkat Matematis. Sebuah bola pejal homogen bermassa 3,5 kilogram dan berjari-jari 0,15 meter, dengan momen inersia dua per lima massa kali jari-jari kuadrat, dilepaskan dari keadaan diam pada ketinggian vertikal 7,0 meter di atas dasar sebuah bidang miring kasar bersudut kemiringan 30 derajat. Bola menggelinding murni tanpa slip hingga mencapai dasar bidang miring dengan percepatan gravitasi 10 meter per sekon kuadrat. Tentukan besar kecepatan linear pusat massa bola tepat saat mencapai dasar bidang miring dalam satuan meter per sekon!',
    narasiPembahasan:
      'Mari kita selesaikan soal nomor 7. Bola pejal bermassa 3,5 kilogram dilepaskan dari diam pada ketinggian 7,0 meter. Energi potensial gravitasi awal adalah massa dikalikan gravitasi dikalikan ketinggian, yaitu 3,5 dikalikan 10 dikalikan 7,0 sama dengan 245 Joule. Pada dasar bidang miring, energi potensial nol dan seluruh energi mekanik berubah menjadi energi kinetik translasi ditambah energi kinetik rotasi. Untuk bola pejal, energi kinetik translasi adalah setengah dikalikan massa dikalikan kuadrat kecepatan, sedangkan energi kinetik rotasi adalah setengah dikalikan dua per lima dikalikan massa dikalikan kuadrat jari-jari dikalikan kuadrat dari kecepatan per jari-jari, yang disederhanakan menjadi satu per lima dikalikan massa dikalikan kuadrat kecepatan. Jumlah kedua energi kinetik tersebut adalah tujuh per sepuluh dikalikan massa dikalikan kuadrat kecepatan. Menyamakannya dengan massa kali gravitasi kali ketinggian, maka kuadrat kecepatan sama dengan sepuluh per tujuh dikalikan 10 dikalikan 7,0, yang menghasilkan tepat 100. Akar kuadrat dari 100 adalah 10 meter per sekon. Jadi jawaban akhirnya adalah 10 meter per sekon.',
    pembahasan: {
      identifikasi:
        'Bola pejal menggelinding murni tanpa slip menuruni bidang miring dari keadaan diam. Kecepatan di dasar bidang miring ditentukan melalui hukum kekekalan energi mekanik.',
      diketahui: [
        'Bentuk benda: Bola pejal homogen ($I = \\frac{2}{5}mR^2$, $\\beta = \\frac{2}{5}$)',
        'Massa: $m = 3{,}5\\text{ kg}$, Jari-jari: $R = 0{,}15\\text{ m}$',
        'Ketinggian vertikal awal: $h = 7{,}0\\text{ m}$',
        'Sudut bidang miring: $\\theta = 30^\\circ$, $v_0 = 0$, $g = 10\\text{ m/s}^2$',
      ],
      ditanyakan: 'Kecepatan linear pusat massa di dasar bidang miring ($v$) dalam satuan $\\text{m/s}$.',
      landasanTeori:
        'Melalui kekekalan energi mekanik tanpa slip, $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(1+\\beta)mv^2$, sehingga $v = \\sqrt{\\frac{2gh}{1+\\beta}}$.',
      fbdDeskripsi:
        'Pada bidang miring bersudut $30^\\circ$, bekerja gaya berat $m\\vec{g}$ vertikal ke bawah, gaya normal $\\vec{N}$ tegak lurus permukaan bidang, dan gaya gesek statis $\\vec{f}_s$ di titik kontak ke arah atas lereng yang memutar bola searah gerakan turun tanpa mengalami slip.',
      analisisMatematis:
        '$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}\\left(\\frac{2}{5}mR^2\\right)\\left(\\frac{v}{R}\\right)^2$$\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$$\n$$v = \\sqrt{\\frac{10}{7}gh}$$',
      perhitungan:
        '1. Energi potensial awal:\n$$U_1 = 3{,}5 \\times 10 \\times 7{,}0 = 245\\text{ J}$$\n2. Substitusi ke persamaan kecepatan:\n$$v = \\sqrt{\\frac{10}{7} \\times 10 \\times 7{,}0} = \\sqrt{10 \\times 10} = \\sqrt{100} = 10\\text{ m/s}$$\n(Verifikasi energi di dasar: $K_{\\text{trans}} = \\frac{1}{2}(3{,}5)(100) = 175\\text{ J}$ dan $K_{\\text{rot}} = \\frac{1}{5}(3{,}5)(100) = 70\\text{ J}$, total $= 245\\text{ J}$).',
      jawabanAkhir: '$v = 10\\text{ m/s}$ (ditulis `10`).',
      interpretasi:
        'Kecepatan akhir bola pejal di dasar bidang miring bergantung pada ketinggian vertikal $h$ dan faktor momen inersia $\\beta$, serta tidak bergantung pada sudut kemiringan maupun massa selama bola menggelinding murni tanpa slip.',
      analisisOpsi: [
        'Jawaban numerik tunggal yang diterima adalah $10\\text{ m/s}$ (rentang toleransi $\\pm 0{,}15\\text{ m/s}$).',
      ],
    },
  },
  {
    id: 8,
    title: 'Perbandingan Energi Kinetik Dua Benda',
    type: 'numeric',
    typeLabel: 'Isian Singkat Matematis',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.8: Bola berongga tipis ($m_1 = 3\\text{ kg}, R_1 = 0{,}2\\text{ m}$) dan silinder pejal ($m_2 = 4\\text{ kg}, R_2 = 0{,}25\\text{ m}$) menggelinding tanpa slip dengan kecepatan sama $v = 6\\text{ m/s}$.',
    prompt:
      'Dua benda tegar bergerak menggelinding murni tanpa slip di atas lintasan datar horizontal dengan kecepatan pusat massa yang sama besar, yaitu $v = 6\\text{ m/s}$. Benda pertama berupa **bola berongga tipis** ($I_1 = \\frac{2}{3}m_1 R_1^2$) bermassa $m_1 = 3\\text{ kg}$ dan berjari-jari $R_1 = 0{,}2\\text{ m}$. Benda kedua berupa **silinder pejal homogen** ($I_2 = \\frac{1}{2}m_2 R_2^2$) bermassa $m_2 = 4\\text{ kg}$ dan berjari-jari $R_2 = 0{,}25\\text{ m}$. Hitunglah **selisih energi kinetik total** kedua benda tersebut ($|K_{\\text{total},2} - K_{\\text{total},1}|$)!',
    unit: 'J',
    correctValue: 18,
    tolerance: 0.2,
    placeholder: 'Contoh: 18',
    answerHint: 'Masukkan angka saja dalam satuan Joule.',
    narasiSoal:
      'Sekarang soal nomor 8, Isian Singkat Matematis. Dua benda tegar bergerak menggelinding murni tanpa slip di atas lintasan datar horizontal dengan kecepatan pusat massa yang sama besar, yaitu 6 meter per sekon. Benda pertama berupa bola berongga tipis bermassa 3 kilogram dan berjari-jari 0,2 meter dengan momen inersia dua pertiga massa satu kali kuadrat jari-jari satu. Benda kedua berupa silinder pejal homogen bermassa 4 kilogram dan berjari-jari 0,25 meter dengan momen inersia setengah massa dua kali kuadrat jari-jari dua. Hitunglah selisih energi kinetik total antara kedua benda tersebut dalam satuan Joule!',
    narasiPembahasan:
      'Mari kita hitung selisih energi kinetik total kedua benda pada soal nomor 8. Pertama, untuk benda pertama yaitu bola berongga tipis bermassa 3 kilogram dan kecepatan 6 meter per sekon: energi kinetik translasinya adalah setengah dikalikan 3 dikalikan 36 sama dengan 54 Joule. Karena faktor momen inersianya dua pertiga, energi kinetik rotasinya adalah dua pertiga dikalikan 54 sama dengan 36 Joule. Jadi energi kinetik total benda pertama adalah 54 ditambah 36 sama dengan 90 Joule. Kedua, untuk benda kedua yaitu silinder pejal homogen bermassa 4 kilogram dan kecepatan sama 6 meter per sekon: energi kinetik translasinya adalah setengah dikalikan 4 dikalikan 36 sama dengan 72 Joule. Karena faktor momen inersianya setengah, energi kinetik rotasinya adalah setengah dikalikan 72 sama dengan 36 Joule. Jadi energi kinetik total benda kedua adalah 72 ditambah 36 sama dengan 108 Joule. Menarik sekali, energi kinetik rotasi keduanya sama-sama 36 Joule, namun selisih energi kinetik totalnya adalah 108 dikurangi 90 sama dengan 18 Joule. Jadi jawaban akhirnya adalah 18 Joule.',
    pembahasan: {
      identifikasi:
        'Perbandingan energi kinetik total dua benda berbeda bentuk, massa, dan jari-jari yang menggelinding tanpa slip pada kelajuan pusat massa yang sama.',
      diketahui: [
        'Kelajuan kedua benda sama: $v = 6\\text{ m/s}$',
        'Benda 1 (Bola berongga tipis): $m_1 = 3\\text{ kg}$, $R_1 = 0{,}2\\text{ m}$, $I_1 = \\frac{2}{3}m_1 R_1^2$',
        'Benda 2 (Silinder pejal): $m_2 = 4\\text{ kg}$, $R_2 = 0{,}25\\text{ m}$, $I_2 = \\frac{1}{2}m_2 R_2^2$',
      ],
      ditanyakan: 'Selisih energi kinetik total $|K_{\\text{total},2} - K_{\\text{total},1}|$ dalam Joule ($\text{J}$).',
      landasanTeori:
        'Untuk setiap benda dengan $I = \\beta mR^2$ yang menggelinding tanpa slip ($\\omega = v/R$), berlaku $K_{\\text{total}} = \\frac{1}{2}mv^2(1 + \\beta)$.',
      fbdDeskripsi:
        'Kedua benda menggelinding dengan kecepatan konstan di lintasan horizontal sehingga masing-masing berada dalam kesetimbangan gaya vertikal ($N_1 = m_1 g$, $N_2 = m_2 g$) tanpa gaya gesek statis ($f_s = 0$) pada gerak lurus beraturan menggelinding ideal.',
      analisisMatematis:
        '$$K_{\\text{total},1} = \\frac{1}{2}m_1 v^2\\left(1 + \\frac{2}{3}\\right) = \\frac{5}{6}m_1 v^2$$\n$$K_{\\text{total},2} = \\frac{1}{2}m_2 v^2\\left(1 + \\frac{1}{2}\\right) = \\frac{3}{4}m_2 v^2$$\n$$\\Delta K = |K_{\\text{total},2} - K_{\\text{total},1}|$$',
      perhitungan:
        '1. Benda 1 (Bola berongga tipis):\n$$K_{\\text{trans},1} = \\frac{1}{2}(3)(6^2) = 54\\text{ J}$$\n$$\\omega_1 = \\frac{6}{0{,}2} = 30\\text{ rad/s}, \\quad I_1 = \\frac{2}{3}(3)(0{,}2)^2 = 0{,}08\\text{ kg}\\cdot\\text{m}^2$$\n$$K_{\\text{rot},1} = \\frac{1}{2}(0{,}08)(30^2) = 36\\text{ J} \\implies K_{\\text{total},1} = 54 + 36 = 90\\text{ J}$$\n2. Benda 2 (Silinder pejal):\n$$K_{\\text{trans},2} = \\frac{1}{2}(4)(6^2) = 72\\text{ J}$$\n$$\\omega_2 = \\frac{6}{0{,}25} = 24\\text{ rad/s}, \\quad I_2 = \\frac{1}{2}(4)(0{,}25)^2 = 0{,}125\\text{ kg}\\cdot\\text{m}^2$$\n$$K_{\\text{rot},2} = \\frac{1}{2}(0{,}125)(24^2) = 36\\text{ J} \\implies K_{\\text{total},2} = 72 + 36 = 108\\text{ J}$$\n3. Selisih energi kinetik total:\n$$|K_{\\text{total},2} - K_{\\text{total},1}| = |108 - 90| = 18\\text{ J}$$',
      jawabanAkhir: '$|K_{\\text{total},2} - K_{\\text{total},1}| = 18\\text{ J}$ (ditulis `18`).',
      interpretasi:
        'Meskipun benda 1 memiliki faktor bentuk $\\beta_1 = \\frac{2}{3}$ lebih besar daripada $\\beta_2 = \\frac{1}{2}$ sehingga kebetulan memiliki $K_{\\text{rot}}$ sama ($36\\text{ J}$), massa benda 2 yang lebih besar ($4\\text{ kg}$ vs $3\\text{ kg}$) membuat energi kinetik translasi dan energi totalnya tetap lebih tinggi sebesar $18\\text{ J}$.',
      analisisOpsi: [
        'Jawaban numerik tunggal yang diterima adalah $18\\text{ J}$ (rentang toleransi $\\pm 0{,}2\\text{ J}$).',
      ],
    },
  },
  {
    id: 9,
    title: 'Analisis Momen Inersia Roda Termodifikasi',
    type: 'numeric',
    typeLabel: 'Isian Singkat Matematis',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.9: Roda termodifikasi ($m = 8\\text{ kg}, R = 0{,}5\\text{ m}$) menggelinding tanpa slip dengan $K_{\\text{total}} = 140\\text{ J}$ dan $K_{\\text{rot}} = 40\\text{ J}$.',
    prompt:
      'Sebuah roda berdesain khusus (dengan pemberat di sekitar poros dan peleknya sehingga faktor momen inersianya tidak diketahui) bermassa $m = 8\\text{ kg}$ dan berjari-jari $R = 0{,}5\\text{ m}$ sedang menggelinding murni tanpa slip di atas lantai datar horizontal. Dari hasil pengukuran sensor dinamika, diketahui energi kinetik total roda adalah $K_{\\text{total}} = 140\\text{ J}$ dan energi kinetik rotasinya sebesar $K_{\\text{rot}} = 40\\text{ J}$. Melalui manipulasi persamaan energi dan syarat tanpa slip, tentukan besar **momen inersia** ($I$) roda tersebut terhadap pusat massanya!',
    unit: 'kg·m²',
    correctValue: 0.8,
    tolerance: 0.02,
    placeholder: 'Contoh: 0.8',
    answerHint: 'Masukkan angka saja (gunakan titik untuk desimal, misal 0.8).',
    narasiSoal:
      'Sekarang soal nomor 9, Isian Singkat Matematis. Sebuah roda berdesain khusus bermassa 8 kilogram dan berjari-jari 0,5 meter sedang menggelinding murni tanpa slip di atas lantai datar horizontal. Dari hasil pengukuran sensor, diketahui energi kinetik total roda adalah 140 Joule dan energi kinetik rotasinya sebesar 40 Joule. Melalui manipulasi persamaan energi dan syarat tanpa slip, tentukan besar momen inersia roda tersebut terhadap pusat massanya dalam satuan kilogram meter kuadrat!',
    narasiPembahasan:
      'Mari kita kerjakan soal nomor 9 dengan alur penalaran terbalik dari energi menuju momen inersia. Diketahui energi kinetik total roda adalah 140 Joule dan energi kinetik rotasinya 40 Joule. Langkah pertama, cari energi kinetik translasi dengan mengurangkan energi total dengan energi rotasi, yaitu 140 dikurangi 40 sama dengan 100 Joule. Langkah kedua, gunakan rumus energi kinetik translasi, yaitu setengah dikalikan massa dikalikan kuadrat kecepatan sama dengan 100 Joule. Dengan massa 8 kilogram, diperoleh empat kali kuadrat kecepatan sama dengan 100, sehingga kuadrat kecepatan sama dengan 25 dan kecepatan pusat massa sama dengan 5 meter per sekon. Langkah ketiga, gunakan syarat menggelinding tanpa slip: kecepatan sudut sama dengan kecepatan dibagi jari-jari, yaitu 5 dibagi 0,5 sama dengan 10 radian per sekon. Langkah keempat, substitusikan kecepatan sudut ini ke rumus energi kinetik rotasi: setengah dikalikan momen inersia dikalikan kuadrat kecepatan sudut sama dengan 40 Joule. Setengah dikalikan 100 adalah 50, sehingga 50 dikalikan momen inersia sama dengan 40. Maka momen inersia sama dengan 40 dibagi 50, yaitu 0,8 kilogram meter kuadrat.',
    pembahasan: {
      identifikasi:
        'Penentuan besaran fisis internal (momen inersia $I$) suatu roda termodifikasi dari data pengukuran energi kinetik total dan energi kinetik rotasinya saat menggelinding tanpa slip.',
      diketahui: [
        'Massa roda: $m = 8\\text{ kg}$',
        'Jari-jari roda: $R = 0{,}5\\text{ m}$',
        'Energi kinetik total: $K_{\\text{total}} = 140\\text{ J}$',
        'Energi kinetik rotasi: $K_{\\text{rot}} = 40\\text{ J}$',
      ],
      ditanyakan: 'Momen inersia roda terhadap pusat massa ($I$) dalam satuan $\\text{kg}\\cdot\\text{m}^2$.',
      landasanTeori:
        'Berdasarkan $K_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}}$, kita dapat mengisolasi $K_{\\text{trans}} = \\frac{1}{2}mv^2$ untuk menemukan $v$, lalu menerapkan syarat tanpa slip $\\omega = v/R$, dan akhirnya menghitung $I$ dari $K_{\\text{rot}} = \\frac{1}{2}I\\omega^2$.',
      fbdDeskripsi:
        'Roda bermassa $8\\text{ kg}$ bergerak pada lantai datar dengan gaya berat $m\\vec{g}$ vertikal ke bawah dari pusat massa dan gaya normal $\\vec{N}$ vertikal ke atas dari titik kontak ($N = mg$), serta tanpa gaya gesek statis ($f_s = 0$) selama kecepatan konstan.',
      analisisMatematis:
        '1. $K_{\\text{trans}} = K_{\\text{total}} - K_{\\text{rot}}$\n2. $v = \\sqrt{\\frac{2 K_{\\text{trans}}}{m}}$\n3. $\\omega = \\frac{v}{R}$\n4. $I = \\frac{2 K_{\\text{rot}}}{\\omega^2}$ (atau secara langsung $\\frac{I}{mR^2} = \\frac{K_{\\text{rot}}}{K_{\\text{trans}}}$)',
      perhitungan:
        '1. Energi kinetik translasi:\n$$K_{\\text{trans}} = 140 - 40 = 100\\text{ J}$$\n2. Kecepatan linear pusat massa:\n$$\\frac{1}{2}(8)v^2 = 100 \\implies 4v^2 = 100 \\implies v^2 = 25 \\implies v = 5\\text{ m/s}$$\n3. Kecepatan sudut roda:\n$$\\omega = \\frac{5}{0{,}5} = 10\\text{ rad/s}$$\n4. Momen inersia roda:\n$$\\frac{1}{2}I(10^2) = 40 \\implies 50I = 40 \\implies I = \\frac{40}{50} = 0{,}8\\text{ kg}\\cdot\\text{m}^2$$',
      jawabanAkhir: '$I = 0{,}8\\text{ kg}\\cdot\\text{m}^2$ (ditulis `0.8`).',
      interpretasi:
        'Nilai $I = 0{,}8\\text{ kg}\\cdot\\text{m}^2$ bersesuaian dengan $\\beta = \\frac{I}{mR^2} = \\frac{0{,}8}{8 \\times 0{,}25} = 0{,}4 = \\frac{2}{5}$, yang secara fisis sangat masuk akal ($0 < \\beta \\le 1$) dan menunjukkan distribusi massa roda setara dengan bola pejal.',
      analisisOpsi: [
        'Jawaban numerik tunggal yang diterima adalah $0{,}8\\text{ kg}\\cdot\\text{m}^2$ (rentang toleransi $\\pm 0{,}02\\text{ kg}\\cdot\\text{m}^2$).',
      ],
    },
  },
  {
    id: 10,
    title: 'Kasus Integratif Lintasan Multi-Ketinggian',
    type: 'numeric',
    typeLabel: 'Isian Singkat Matematis (HOTS Integratif)',
    maxPoints: 10,
    stimulusCaption:
      'Gambar 1.10: Silinder pejal ($m = 4\\text{ kg}, R = 0{,}25\\text{ m}$) menggelinding tanpa slip dari $h_1 = 4{,}5\\text{ m}$ ($v_1 = 2\\text{ m/s}$), melewati dasar ($h_2 = 0\\text{ m}$), lalu naik ke $h_3 = 2{,}1\\text{ m}$.',
    prompt:
      'Sebuah **silinder pejal homogen** bermassa $m = 4\\text{ kg}$ dan berjari-jari $R = 0{,}25\\text{ m}$ ($I = \\frac{1}{2}mR^2$) mula-mula bergerak menggelinding murni tanpa slip pada lintasan atas yang mendatar pada ketinggian $h_1 = 4{,}5\\text{ m}$ dengan kecepatan pusat massa awal $v_1 = 2\\text{ m/s}$. Silinder kemudian menuruni lintasan lengkung kasar menuju dasar ($h_2 = 0\\text{ m}$) dan langsung menaiki lereng kasar di sisi seberang hingga mencapai posisi pada ketinggian $h_3 = 2{,}1\\text{ m}$. Selama seluruh perjalanan pada lintasan kaku tersebut, silinder terus menggelinding murni tanpa slip ($g = 10\\text{ m/s}^2$). Tentukan **kecepatan sudut** ($\\omega_3$) silinder tepat saat melewati ketinggian $h_3 = 2{,}1\\text{ m}$!',
    unit: 'rad/s',
    correctValue: 24,
    tolerance: 0.25,
    placeholder: 'Contoh: 24',
    answerHint: 'Masukkan angka saja dalam satuan rad/s.',
    narasiSoal:
      'Kita tiba pada soal terakhir, nomor 10, Isian Singkat Matematis tingkat integratif paling menantang. Sebuah silinder pejal homogen bermassa 4 kilogram dan berjari-jari 0,25 meter, dengan momen inersia setengah massa kali jari-jari kuadrat, mula-mula bergerak menggelinding murni tanpa slip pada lintasan atas yang mendatar pada ketinggian 4,5 meter dengan kecepatan pusat massa awal 2 meter per sekon. Silinder kemudian menuruni lintasan lengkung kasar menuju dasar pada ketinggian nol meter, lalu langsung menaiki lereng kasar di sisi seberang hingga melewati posisi pada ketinggian 2,1 meter. Selama seluruh perjalanan, silinder terus menggelinding tanpa slip, dengan percepatan gravitasi 10 meter per sekon kuadrat. Tentukan kecepatan sudut silinder tepat saat melewati ketinggian 2,1 meter dalam satuan radian per sekon!',
    narasiPembahasan:
      'Mari kita bedah soal nomor 10 secara lengkap. Pertama, kita hitung energi mekanik total awal pada ketinggian 4,5 meter. Energi potensial gravitasi awal adalah 4 dikalikan 10 dikalikan 4,5 sama dengan 180 Joule. Untuk silinder pejal dengan kecepatan awal 2 meter per sekon, energi kinetik translasi awal adalah setengah dikalikan 4 dikalikan 4 sama dengan 8 Joule, dan energi kinetik rotasi awal adalah seperempat dikalikan 4 dikalikan 4 sama dengan 4 Joule. Sehingga energi kinetik total awal adalah 12 Joule, dan energi mekanik total sistem adalah 180 ditambah 12 sama dengan 192 Joule. Karena silinder terus menggelinding tanpa slip pada lintasan kaku, gaya gesek statis ideal tidak melakukan usaha sehingga energi mekanik total tetap 192 Joule di seluruh titik lintasan, baik saat di dasar maupun saat di ketinggian 2,1 meter. Kedua, pada ketinggian akhir 2,1 meter, energi potensial gravitasinya adalah 4 dikalikan 10 dikalikan 2,1 sama dengan 84 Joule. Maka energi kinetik total di posisi ketiga adalah 192 dikurangi 84 sama dengan 108 Joule. Ketiga, untuk silinder pejal, energi kinetik total sama dengan tiga per empat dikalikan massa dikalikan kuadrat kecepatan. Substitusikan massa 4 kilogram: tiga per empat dikalikan 4 dikalikan kuadrat kecepatan sama dengan 108, sehingga tiga kali kuadrat kecepatan sama dengan 108. Diperoleh kuadrat kecepatan sama dengan 36, atau kecepatan pusat massa di ketinggian 2,1 meter tepat 6 meter per sekon. Keempat, karena tetap menggelinding tanpa slip, kecepatan sudut pada posisi ketiga adalah kecepatan 6 dibagi jari-jari 0,25 meter, menghasilkan tepat 24 radian per sekon.',
    pembahasan: {
      identifikasi:
        'Gerak menggelinding tanpa slip melewati lintasan dengan tiga elevasi berbeda: posisi awal berketinggian $h_1$ dengan kelajuan awal tak nol, posisi dasar $h_2 = 0$, dan posisi akhir $h_3$ pada lereng menanjak. Soal menguji integrasi kekekalan energi mekanik (dengan suku $U_g$, $K_{\\text{trans}}$, dan $K_{\\text{rot}}$ sekaligus pada keadaan awal dan akhir) serta konversi ke kecepatan sudut.',
      diketahui: [
        'Bentuk benda: Silinder pejal homogen ($I = \\frac{1}{2}mR^2$, $\\beta = \\frac{1}{2}$)',
        'Massa: $m = 4\\text{ kg}$, Jari-jari: $R = 0{,}25\\text{ m}$',
        'Posisi 1: $h_1 = 4{,}5\\text{ m}$, $v_1 = 2\\text{ m/s}$',
        'Posisi 2 (dasar): $h_2 = 0\\text{ m}$',
        'Posisi 3: $h_3 = 2{,}1\\text{ m}$, $g = 10\\text{ m/s}^2$',
      ],
      ditanyakan: 'Kecepatan sudut silinder di ketinggian $h_3 = 2{,}1\\text{ m}$ ($\\omega_3$) dalam satuan $\\text{rad/s}$.',
      landasanTeori:
        'Karena lintasan kaku dan kondisi menggelinding murni tanpa slip berlaku sepanjang lintasan ($v = \\omega R$ dan $W_{f_s} = 0$), hukum kekekalan energi mekanik berlaku penuh antara posisi 1 dan posisi 3:\n$$U_1 + K_{\\text{trans},1} + K_{\\text{rot},1} = U_3 + K_{\\text{trans},3} + K_{\\text{rot},3}$$',
      fbdDeskripsi:
        'Saat melewati lereng menanjak di posisi 3 bersudut $\\theta$, silinder mengalami gaya berat $m\\vec{g}$ vertikal ke bawah, gaya normal $\\vec{N}$ tegak lurus lereng, dan gaya gesek statis $\\vec{f}_s$ di titik kontak mengarah ke atas sepanjang lereng untuk memperlambat kecepatan sudutnya secara sinkron dengan perlambatan translasi.',
      analisisMatematis:
        '$$E_1 = mgh_1 + \\frac{3}{4}mv_1^2$$\n$$E_3 = mgh_3 + \\frac{3}{4}mv_3^2$$\nDengan $E_1 = E_3$:\n$$mgh_1 + \\frac{3}{4}mv_1^2 = mgh_3 + \\frac{3}{4}mv_3^2$$\n$$\\omega_3 = \\frac{v_3}{R}$$',
      perhitungan:
        '1. Energi mekanik di Posisi 1 ($h_1 = 4{,}5\\text{ m}, v_1 = 2\\text{ m/s}$):\n$$U_1 = 4 \\times 10 \\times 4{,}5 = 180\\text{ J}$$\n$$K_{\\text{trans},1} = \\frac{1}{2}(4)(2^2) = 8\\text{ J}, \\quad K_{\\text{rot},1} = \\frac{1}{4}(4)(2^2) = 4\\text{ J}$$\n$$E_{\\text{mek},1} = 180 + 8 + 4 = 192\\text{ J}$$\n(Catatan: saat di dasar $h_2 = 0$, seluruh $192\\text{ J}$ menjadi $K_{\\text{total},2}$ dengan $v_2 = 8\\text{ m/s}$ dan $\\omega_2 = 32\\text{ rad/s}$).\n2. Energi pada Posisi 3 ($h_3 = 2{,}1\\text{ m}$):\n$$U_3 = 4 \\times 10 \\times 2{,}1 = 84\\text{ J}$$\n$$K_{\\text{total},3} = E_{\\text{mek},1} - U_3 = 192 - 84 = 108\\text{ J}$$\n3. Kecepatan linear dan kecepatan sudut di Posisi 3:\n$$\\frac{3}{4}m v_3^2 = 108 \\implies \\frac{3}{4}(4)v_3^2 = 108 \\implies 3v_3^2 = 108 \\implies v_3^2 = 36 \\implies v_3 = 6\\text{ m/s}$$\n$$\\omega_3 = \\frac{v_3}{R} = \\frac{6}{0{,}25} = 24\\text{ rad/s}$$',
      jawabanAkhir: '$\\omega_3 = 24\\text{ rad/s}$ (ditulis `24`).',
      interpretasi:
        'Silinder mencapai posisi $h_3 = 2{,}1\\text{ m}$ dengan energi kinetik total $108\\text{ J}$ ($72\\text{ J}$ translasi dan $36\\text{ J}$ rotasi), lebih besar daripada energi kinetik awalnya di $h_1 = 4{,}5\\text{ m}$ ($12\\text{ J}$) karena berada pada elevasi yang $2{,}4\\text{ m}$ lebih rendah.',
      analisisOpsi: [
        'Jawaban numerik tunggal yang diterima adalah $24\\text{ rad/s}$ (rentang toleransi $\\pm 0{,}25\\text{ rad/s}$).',
      ],
    },
  },
];
