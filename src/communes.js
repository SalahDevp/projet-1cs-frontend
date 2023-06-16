const communes = [
    // Wilaya 01 - Adrar
    { code: "0101", name: "Adrar", wilayaCode: "01" },
    { code: "0102", name: "Tamest", wilayaCode: "01" },
    { code: "0103", name: "Charouine", wilayaCode: "01" },
    { code: "0104", name: "Reggane", wilayaCode: "01" },
    { code: "0105", name: "In Zghmir", wilayaCode: "01" },
    // ... Autres communes de la wilaya 01 ...
  
    // Wilaya 02 - Chlef
    { code: "0201", name: "Chlef", wilayaCode: "02" },
    { code: "0202", name: "Ténès", wilayaCode: "02" },
    { code: "0203", name: "El Karimia", wilayaCode: "02" },
    { code: "0204", name: "Taougrit", wilayaCode: "02" },
    { code: "0205", name: "Beni Haoua", wilayaCode: "02" },
    // ... Autres communes de la wilaya 02 ...
  
    // Wilaya 03 - Laghouat
    { code: "0301", name: "Laghouat", wilayaCode: "03" },
    { code: "0302", name: "Ksar El Hirane", wilayaCode: "03" },
    { code: "0303", name: "Aïn Madhi", wilayaCode: "03" },
    { code: "0304", name: "Hassi R'Mel", wilayaCode: "03" },
    { code: "0305", name: "Aflou", wilayaCode: "03" },
    // ... Autres communes de la wilaya 03 ...
  
    // Wilaya 04 - Oum El Bouaghi
    { code: "0401", name: "Oum El Bouaghi", wilayaCode: "04" },
    { code: "0402", name: "Aïn Beïda", wilayaCode: "04" },
    { code: "0403", name: "Aïn M'Lila", wilayaCode: "04" },
    { code: "0404", name: "Ouled Hamla", wilayaCode: "04" },
    { code: "0405", name: "Dhalaa", wilayaCode: "04" },
    // ... Autres communes de la wilaya 04 ...
  
    // Wilaya 05 - Batna
    { code: "0501", name: "Batna", wilayaCode: "05" },
    { code: "0502", name: "Aïn Touta", wilayaCode: "05" },
    { code: "0503", name: "N'Gaous", wilayaCode: "05" },
    { code: "0504", name: "Merouana", wilayaCode: "05" },
    { code: "0505", name: "Seriana", wilayaCode: "05" },
    // ... Autres communes de la wilaya 05 ...
  
    // Wilaya 06 - Béjaïa
  { code: "0601", name: "Béjaïa", wilayaCode: "06" },
  { code: "0602", name: "Amizour", wilayaCode: "06" },
  { code: "0603", name: "Ferraoun", wilayaCode: "06" },
  { code: "0604", name: "Taourirt Ighil", wilayaCode: "06" },
  { code: "0605", name: "Tichy", wilayaCode: "06" },
  // ... Autres communes de la wilaya 06 ...

  // Wilaya 07 - Biskra
  { code: "0701", name: "Biskra", wilayaCode: "07" },
  { code: "0702", name: "M'Chouneche", wilayaCode: "07" },
  { code: "0703", name: "Ouled Djellal", wilayaCode: "07" },
  { code: "0704", name: "Tolga", wilayaCode: "07" },
  { code: "0705", name: "Lichana", wilayaCode: "07" },
  // ... Autres communes de la wilaya 07 ...

  // Wilaya 08 - Béchar
  { code: "0801", name: "Béchar", wilayaCode: "08" },
  { code: "0802", name: "Erg Ferradj", wilayaCode: "08" },
  { code: "0803", name: "Ouled Khoudir", wilayaCode: "08" },
  { code: "0804", name: "Kenadsa", wilayaCode: "08" },
  { code: "0805", name: "Igli", wilayaCode: "08" },
  // ... Autres communes de la wilaya 08 ...

  // Wilaya 09 - Blida
  { code: "0901", name: "Blida", wilayaCode: "09" },
  { code: "0902", name: "Boufarik", wilayaCode: "09" },
  { code: "0903", name: "Chréa", wilayaCode: "09" },
  { code: "0904", name: "El Affroun", wilayaCode: "09" },
  { code: "0905", name: "Mouzaïa", wilayaCode: "09" },

  // Wilaya 10 - Bouira
  { code: "1001", name: "Bouira", wilayaCode: "10" },
  { code: "1002", name: "Lakhdaria", wilayaCode: "10" },
  { code: "1003", name: "Boukram", wilayaCode: "10" },
  { code: "1004", name: "Aïn Bessam", wilayaCode: "10" },
  { code: "1005", name: "Kadiria", wilayaCode: "10" },
  // ... Autres communes de la wilaya 10 ...

  // Wilaya 11 - Tamanrasset
  { code: "1101", name: "Tamanrasset", wilayaCode: "11" },
  { code: "1102", name: "In Guezzam", wilayaCode: "11" },
  { code: "1103", name: "In Salah", wilayaCode: "11" },
  { code: "1104", name: "Idles", wilayaCode: "11" },
  { code: "1105", name: "Tazrouk", wilayaCode: "11" },
  // ... Autres communes de la wilaya 11 ...

  // Wilaya 12 - Tébessa
  { code: "1201", name: "Tébessa", wilayaCode: "12" },
  { code: "1202", name: "Bir El Ater", wilayaCode: "12" },
  { code: "1203", name: "Cheria", wilayaCode: "12" },
  { code: "1204", name: "El Ogla", wilayaCode: "12" },
  { code: "1205", name: "El Kouif", wilayaCode: "12" },
  // ... Autres communes de la wilaya 12 ...

  // Wilaya 13 - Tlemcen
  { code: "1301", name: "Tlemcen", wilayaCode: "13" },
  { code: "1302", name: "Maghnia", wilayaCode: "13" },
  { code: "1303", name: "Nedroma", wilayaCode: "13" },
  { code: "1304", name: "Ghazaouet", wilayaCode: "13" },
  { code: "1305", name: "Béni Snous", wilayaCode: "13" },
  // ... Autres communes de la wilaya 13 ...

  // Wilaya 14 - Tiaret
  { code: "1401", name: "Tiaret", wilayaCode: "14" },
  { code: "1402", name: "Medroussa", wilayaCode: "14" },
  { code: "1403", name: "Aïn Bouchekif", wilayaCode: "14" },
  { code: "1404", name: "Aïn Kermes", wilayaCode: "14" },
  { code: "1405", name: "Ksar Chellala", wilayaCode: "14" },
  // ... Autres communes de la wilaya 14 ...

  // Wilaya 15 - Tizi Ouzou
  { code: "1501", name: "Tizi Ouzou", wilayaCode: "15" },
  { code: "1502", name: "Aïn El Hammam", wilayaCode: "15" },
  { code: "1503", name: "Boghni", wilayaCode: "15" },
  { code: "1504", name: "Tigzirt", wilayaCode: "15" },
  { code: "1505", name: "Draâ Ben Khedda", wilayaCode: "15" },
  // ... Autres communes de la wilaya 15 ...

  // Wilaya 16 - Alger
  { code: "1601", name: "Alger Centre", wilayaCode: "16" },
  { code: "1602", name: "Bab El Oued", wilayaCode: "16" },
  { code: "1603", name: "Bologhine", wilayaCode: "16" },
  { code: "1604", name: "El Harrach", wilayaCode: "16" },
  { code: "1605", name: "Rouïba", wilayaCode: "16" },
  // ... Autres communes de la wilaya 16 ...

  // Wilaya 17 - Djelfa
  { code: "1701", name: "Djelfa", wilayaCode: "17" },
  { code: "1702", name: "El Idrissia", wilayaCode: "17" },
  { code: "1703", name: "Aïn Oussera", wilayaCode: "17" },
  { code: "1704", name: "Hassi Bahbah", wilayaCode: "17" },
  { code: "1705", name: "Moudjebara", wilayaCode: "17" },
  // ... Autres communes de la wilaya 17 ...

  // Wilaya 18 - Jijel
  { code: "1801", name: "Jijel", wilayaCode: "18" },
  { code: "1802", name: "El Milia", wilayaCode: "18" },
  { code: "1803", name: "Ghebala", wilayaCode: "18" },
  { code: "1804", name: "Taher", wilayaCode: "18" },
  { code: "1805", name: "Emir Abdelkader", wilayaCode: "18" },
  // ... Autres communes de la wilaya 18 ...

  // Wilaya 19 - Sétif
  { code: "1901", name: "Sétif", wilayaCode: "19" },
  { code: "1902", name: "El Eulma", wilayaCode: "19" },
  { code: "1903", name: "Aïn Arnat", wilayaCode: "19" },
  { code: "1904", name: "Guelta Zerka", wilayaCode: "19" },
  { code: "1905", name: "Beni Aziz", wilayaCode: "19" },
  // ... Autres communes de la wilaya 19 ...

  // Wilaya 20 - Saïda
  { code: "2001", name: "Saïda", wilayaCode: "20" },
  { code: "2002", name: "Doui Thabet", wilayaCode: "20" },
  { code: "2003", name: "Aïn El Hadjar", wilayaCode: "20" },
  { code: "2004", name: "Youb", wilayaCode: "20" },
  { code: "2005", name: "Ouled Khaled", wilayaCode: "20" },
  // ... Autres communes de la wilaya 20 ...

  // Wilaya 21 - Skikda
  { code: "2101", name: "Skikda", wilayaCode: "21" },
  { code: "2102", name: "Azzaba", wilayaCode: "21" },
  { code: "2103", name: "Collo", wilayaCode: "21" },
  { code: "2104", name: "Zitouna", wilayaCode: "21" },
  { code: "2105", name: "El Hadaiek", wilayaCode: "21" },
  // ... Autres communes de la wilaya 21 ...

// Wilaya 22 - Sidi Bel Abbès
{ code: "2201", name: "Sidi Bel Abbès", wilayaCode: "22" },
{ code: "2202", name: "Tessala", wilayaCode: "22" },
{ code: "2203", name: "Sidi Ali Boussidi", wilayaCode: "22" },
{ code: "2204", name: "Marhoum", wilayaCode: "22" },
{ code: "2205", name: "Mostefa Ben Brahim", wilayaCode: "22" },
// ... Autres communes de la wilaya 22 ...

// Wilaya 23 - Annaba
{ code: "2301", name: "Annaba", wilayaCode: "23" },
{ code: "2302", name: "El Bouni", wilayaCode: "23" },
{ code: "2303", name: "Seraïdi", wilayaCode: "23" },
{ code: "2304", name: "Chetaïbi", wilayaCode: "23" },
{ code: "2305", name: "Aïn Berda", wilayaCode: "23" },
// ... Autres communes de la wilaya 23 ...

// Wilaya 24 - Guelma
{ code: "2401", name: "Guelma", wilayaCode: "24" },
{ code: "2402", name: "Nechmaya", wilayaCode: "24" },
{ code: "2403", name: "Khezaras", wilayaCode: "24" },
{ code: "2404", name: "Belkheir", wilayaCode: "24" },
{ code: "2405", name: "Boumahra Ahmed", wilayaCode: "24" },
// ... Autres communes de la wilaya 24 ...

// Wilaya 25 - Constantine
{ code: "2501", name: "Constantine", wilayaCode: "25" },
{ code: "2502", name: "Hamma Bouziane", wilayaCode: "25" },
{ code: "2503", name: "El Khroub", wilayaCode: "25" },
{ code: "2504", name: "Didouche Mourad", wilayaCode: "25" },
{ code: "2505", name: "Ibn Ziad", wilayaCode: "25" },
// ... Autres communes de la wilaya 25 ...

// Wilaya 26 - Médéa
{ code: "2601", name: "Médéa", wilayaCode: "26" },
{ code: "2602", name: "Ouzera", wilayaCode: "26" },
{ code: "2603", name: "Si Mahdjoub", wilayaCode: "26" },
{ code: "2604", name: "Aïn Boucif", wilayaCode: "26" },
{ code: "2605", name: "Médéa", wilayaCode: "26" },
// ... Autres communes de la wilaya 26 ...

// Wilaya 27 - Mostaganem
{ code: "2701", name: "Mostaganem", wilayaCode: "27" },
{ code: "2702", name: "Aïn Nouïssy", wilayaCode: "27" },
{ code: "2703", name: "Hassi Mameche", wilayaCode: "27" },
{ code: "2704", name: "Achaacha", wilayaCode: "27" },
{ code: "2705", name: "Nekmaria", wilayaCode: "27" },
// ... Autres communes de la wilaya 27 ...

// Wilaya 28 - M'Sila
{ code: "2801", name: "M'Sila", wilayaCode: "28" },
{ code: "2802", name: "Bou Saada", wilayaCode: "28" },
{ code: "2803", name: "Ouled Derradj", wilayaCode: "28" },
{ code: "2804", name: "Maadid", wilayaCode: "28" },
{ code: "2805", name: "Magra", wilayaCode: "28" },
// ... Autres communes de la wilaya 28 ...

// Wilaya 29 - Mascara
{ code: "2901", name: "Mascara", wilayaCode: "29" },
{ code: "2902", name: "Bou Hanifia", wilayaCode: "29" },
{ code: "2903", name: "Tizi", wilayaCode: "29" },
{ code: "2904", name: "Hachem", wilayaCode: "29" },
{ code: "2905", name: "Zahana", wilayaCode: "29" },
// ... Autres communes de la wilaya 29 ...


// Wilaya 30 - Ouargla
{ code: "3001", name: "Ouargla", wilayaCode: "30" },
{ code: "3002", name: "Hassi Messaoud", wilayaCode: "30" },
{ code: "3003", name: "Rouissat", wilayaCode: "30" },
{ code: "3004", name: "N'Goussa", wilayaCode: "30" },
{ code: "3005", name: "Hassi Ben Abdellah", wilayaCode: "30" },
// ... Autres communes de la wilaya 30 ...

// Wilaya 31 - Oran
{ code: "3101", name: "Oran", wilayaCode: "31" },
{ code: "3102", name: "Es Sénia", wilayaCode: "31" },
{ code: "3103", name: "Bir El Djir", wilayaCode: "31" },
{ code: "3104", name: "Gdyel", wilayaCode: "31" },
{ code: "3105", name: "Hassi Bounif", wilayaCode: "31" },
// ... Autres communes de la wilaya 31 ...

// Wilaya 32 - El Bayadh
{ code: "3201", name: "El Bayadh", wilayaCode: "32" },
{ code: "3202", name: "Rogassa", wilayaCode: "32" },
{ code: "3203", name: "Brezina", wilayaCode: "32" },
{ code: "3204", name: "El Abiodh Sidi Cheikh", wilayaCode: "32" },
{ code: "3205", name: "Chellala", wilayaCode: "32" },
// ... Autres communes de la wilaya 32 ...

// Wilaya 33 - Illizi
{ code: "3301", name: "Illizi", wilayaCode: "33" },
{ code: "3302", name: "Djanet", wilayaCode: "33" },
{ code: "3303", name: "Debdeb", wilayaCode: "33" },
{ code: "3304", name: "Bordj Omar Driss", wilayaCode: "33" },
{ code: "3305", name: "In Aménas", wilayaCode: "33" },
// ... Autres communes de la wilaya 33 ...

// Wilaya 34 - Bordj Bou Arréridj
{ code: "3401", name: "Bordj Bou Arréridj", wilayaCode: "34" },
{ code: "3402", name: "Ras El Oued", wilayaCode: "34" },
{ code: "3403", name: "Bordj Zemmoura", wilayaCode: "34" },
{ code: "3404", name: "El Achir", wilayaCode: "34" },
{ code: "3405", name: "Aïn Taghrout", wilayaCode: "34" },
// ... Autres communes de la wilaya 34 ...

// Wilaya 35 - Boumerdès
{ code: "3501", name: "Boumerdès", wilayaCode: "35" },
{ code: "3502", name: "Boudouaou", wilayaCode: "35" },
{ code: "3503", name: "Boumerdès", wilayaCode: "35" },
{ code: "3504", name: "Bordj Ménaïel", wilayaCode: "35" },
{ code: "3505", name: "Baghlia", wilayaCode: "35" },
// ... Autres communes de la wilaya 35 ...

// Wilaya 36 - El Tarf
{ code: "3601", name: "El Tarf", wilayaCode: "36" },
{ code: "3602", name: "Bouhadjar", wilayaCode: "36" },
{ code: "3603", name: "El Kala", wilayaCode: "36" },
{ code: "3604", name: "Zerizer", wilayaCode: "36" },
{ code: "3605", name: "Besbes", wilayaCode: "36" },
// ... Autres communes de la wilaya 36 ...

// Wilaya 37 - Tindouf
{ code: "3701", name: "Tindouf", wilayaCode: "37" },
{ code: "3702", name: "Oum El Assel", wilayaCode: "37" },
{ code: "3703", name: "Tindouf", wilayaCode: "37" },
{ code: "3704", name: "Tsabit", wilayaCode: "37" },
{ code: "3705", name: "Igli", wilayaCode: "37" },
// ... Autres communes de la wilaya 37 ...

// Wilaya 38 - Tissemsilt
{ code: "3801", name: "Tissemsilt", wilayaCode: "38" },
{ code: "3802", name: "Bordj Bounaama", wilayaCode: "38" },
{ code: "3803", name: "Theniet El Had", wilayaCode: "38" },
{ code: "3804", name: "Lazharia", wilayaCode: "38" },
{ code: "3805", name: "Beni Chaib", wilayaCode: "38" },
// ... Autres communes de la wilaya 38 ...

// Wilaya 39 - El Oued
{ code: "3901", name: "El Oued", wilayaCode: "39" },
{ code: "3902", name: "Robbah", wilayaCode: "39" },
{ code: "3903", name: "Oued El Alenda", wilayaCode: "39" },
{ code: "3904", name: "Bayadha", wilayaCode: "39" },
{ code: "3905", name: "Nakhla", wilayaCode: "39" },
// ... Autres communes de la wilaya 39 ...

// Wilaya 40 - Khenchela
{ code: "4001", name: "Khenchela", wilayaCode: "40" },
{ code: "4002", name: "El Hamma", wilayaCode: "40" },
{ code: "4003", name: "Aïn Touila", wilayaCode: "40" },
{ code: "4004", name: "Kais", wilayaCode: "40" },
{ code: "4005", name: "Baghai", wilayaCode: "40" },
// ... Autres communes de la wilaya 40 ...

// Wilaya 41 - Souk Ahras
{ code: "4101", name: "Souk Ahras", wilayaCode: "41" },
{ code: "4102", name: "Sedrata", wilayaCode: "41" },
{ code: "4103", name: "Hanancha", wilayaCode: "41" },
{ code: "4104", name: "Mechroha", wilayaCode: "41" },
{ code: "4105", name: "Ouled Driss", wilayaCode: "41" },
// ... Autres communes de la wilaya 41 ...

{ code: "4201", name: "Aïn Beida", wilayaCode: "42" },
{ code: "4202", name: "Bir Haddada", wilayaCode: "42" },
{ code: "4203", name: "Bir El Ater", wilayaCode: "42" },
{ code: "4204", name: "Souk Ahras", wilayaCode: "42" },
{ code: "4205", name: "M'Daourouch", wilayaCode: "42" },
// ... Ajoutez les autres communes de la wilaya 42 ...

{ code: "4301", name: "El Bayadh", wilayaCode: "43" },
{ code: "4302", name: "Rogassa", wilayaCode: "43" },
{ code: "4303", name: "Brezina", wilayaCode: "43" },
{ code: "4304", name: "Ghassoul", wilayaCode: "43" },
{ code: "4305", name: "Boualem", wilayaCode: "43" },
// ... Ajoutez les autres communes de la wilaya 43 ...

{ code: "4401", name: "El Tarf", wilayaCode: "44" },
{ code: "4402", name: "Bouhadjar", wilayaCode: "44" },
{ code: "4403", name: "Ben M'Hidi", wilayaCode: "44" },
{ code: "4404", name: "Bou Tlelis", wilayaCode: "44" },
{ code: "4405", name: "Hassasna", wilayaCode: "44" },
// ... Ajoutez les autres communes de la wilaya 44 ...

{ code: "4501", name: "Tindouf", wilayaCode: "45" },
  { code: "4502", name: "Oum El Assel", wilayaCode: "45" },
  { code: "4503", name: "Foum El Oued", wilayaCode: "45" },
  { code: "4504", name: "Tamanrasset", wilayaCode: "45" },
  { code: "4505", name: "In Ghar", wilayaCode: "45" },
  // ... Ajoutez les autres communes de la wilaya 45 ...

  { code: "4601", name: "Timimoun", wilayaCode: "46" },
  { code: "4602", name: "Tindirma", wilayaCode: "46" },
  { code: "4603", name: "Ouled Said", wilayaCode: "46" },
  { code: "4604", name: "Charouine", wilayaCode: "46" },
  { code: "4605", name: "Tinerkouk", wilayaCode: "46" },
  // ... Ajoutez les autres communes de la wilaya 46 ...

  { code: "4701", name: "Tissemsilt", wilayaCode: "47" },
  { code: "4702", name: "Lardjem", wilayaCode: "47" },
  { code: "4703", name: "Sidi Lantri", wilayaCode: "47" },
  { code: "4704", name: "Bordj Bounaama", wilayaCode: "47" },
  { code: "4705", name: "Lazharia", wilayaCode: "47" },
  // ... Ajoutez les autres communes de la wilaya 47 ...

  { code: "4801", name: "El Bayadh", wilayaCode: "48" },
  { code: "4802", name: "Rogassa", wilayaCode: "48" },
  { code: "4803", name: "Brezina", wilayaCode: "48" },
  { code: "4804", name: "Ghassoul", wilayaCode: "48" },
  { code: "4805", name: "Boualem", wilayaCode: "48" },
  // ... Ajoutez les autres communes de la wilaya 48 ...

]
export default communes;