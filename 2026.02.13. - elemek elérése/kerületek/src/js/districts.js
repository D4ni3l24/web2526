"use strict"

function getSelectedDistrict() {
    const index = document.querySelector('#selected-district').value;
    return index === "" || isNaN(index) ? null : districts[index - 1];
}

const districts = [
    { 
        id: 1, 
        name: "I. kerület - Budavár", 
        description: "A Budai Vár és környéke, történelmi nevezetességek otthona.", 
        image: "district_1.png",
        population: 24100 
    },
    { 
        id: 2, 
        name: "II. kerület", 
        description: "Buda elegáns zöldövezeti része, villákkal és természetközeli helyekkel.", 
        image: "district_2.png",
        population: 87600
    },
    { 
        id: 3, 
        name: "III. kerület - Óbuda-Békásmegyer", 
        description: "Ókori római emlékek és a Duna-parti hangulat jellemzi.", 
        image: "district_3.png",
        population: 125300
    },
    { 
        id: 4, 
        name: "IV. kerület - Újpest", 
        description: "Észak-Pest egyik legnagyobb lakóövezete, ipari és sportközponttal.", 
        image: "district_4.png",
        population: 95300
    },
    { 
        id: 5, 
        name: "V. kerület - Belváros-Lipótváros", 
        description: "Budapest szíve, a Parlament és a legfontosabb hivatalok helyszíne.", 
        image: "district_5.png",
        population: 24400
    },
    { 
        id: 6, 
        name: "VI. kerület - Terézváros", 
        description: "A kulturális és éjszakai élet központja, az Andrássy út otthona.", 
        image: "district_6.png",
        population: 36000
    },
    { 
        id: 7, 
        name: "VII. kerület - Erzsébetváros", 
        description: "A híres zsidó negyed, romkocsmákkal és pezsgő élettel.", 
        image: "district_7.png",
        population: 50400
    },
    { 
        id: 8, 
        name: "VIII. kerület - Józsefváros", 
        description: "Régi és új keveredése, egyetemi és kulturális központ.", 
        image: "district_8.png",
        population: 71200
    },
    { 
        id: 9, 
        name: "IX. kerület - Ferencváros", 
        description: "A Duna-part és a felújított városrészek új élettel teli környékei.", 
        image: "district_9.png",
        population: 63600
    },
    { 
        id: 10, 
        name: "X. kerület - Kőbánya", 
        description: "Ipari és borászati múltú kerület, nagy parkokkal és sörgyárral.", 
        image: "district_10.png",
        population: 77100
    },
    { 
        id: 11, 
        name: "XI. kerület - Újbuda", 
        description: "A Gellért-hegytől a panelnegyedekig terjedő sokszínű városrész.", 
        image: "district_11.png",
        population: 153200
    },
    { 
        id: 12, 
        name: "XII. kerület - Hegyvidék", 
        description: "Budapest egyik legzöldebb kerülete, a Normafa és a János-hegy otthona.", 
        image: "district_12.png",
        population: 56600
    },
    { 
        id: 13, 
        name: "XIII. kerület", 
        description: "Modern üzleti negyed és lakóövezet a Duna-part közelében.", 
        image: "district_13.png",
        population: 124300
    },
    { 
        id: 14, 
        name: "XIV. kerület - Zugló", 
        description: "A Városliget és a sportélet központja, családbarát lakóövezet.", 
        image: "district_14.png",
        population: 118400
    },
    { 
        id: 15, 
        name: "XV. kerület", 
        description: "Kertvárosi részek és ipari övezetek keveredése Észak-Pesten.", 
        image: "district_15.png",
        population: 77800
    },
    { 
        id: 16, 
        name: "XVI. kerület", 
        description: "Kertvárosi jellege miatt közkedvelt a családosok körében.", 
        image: "district_16.png",
        population: 75200
    },
    { 
        id: 17, 
        name: "XVII. kerület - Rákosmente", 
        description: "A főváros egyik legnagyobb kertvárosi kerülete.", 
        image: "district_17.png",
        population: 87300
    },
    { 
        id: 18, 
        name: "XVIII. kerület - Pestszentlőrinc-Pestszentimre", 
        description: "Zöldövezeti kerület a repülőtér közelében.", 
        image: "district_18.png",
        population: 105600
    },
    { 
        id: 19, 
        name: "XIX. kerület - Kispest", 
        description: "Hagyományos munkáskerület, mára modernizálódott városrész.", 
        image: "district_19.png",
        population: 57600
    },
    { 
        id: 20, 
        name: "XX. kerület - Pesterzsébet", 
        description: "Régi kertvárosi hangulat és lakótelepek egyaránt jellemzik.", 
        image: "district_20.png",
        population: 64800
    },
    { 
        id: 21, 
        name: "XXI. kerület - Csepel", 
        description: "A Csepel-szigeten fekvő ipari és lakóövezeti kerület.", 
        image: "district_21.png",
        population: 74900
    },
    { 
        id: 22, 
        name: "XXII. kerület - Budafok-Tétény", 
        description: "A borászatáról híres dél-budai kerület.", 
        image: "district_22.png",
        population: 57400
    },
    { 
        id: 23, 
        name: "XXIII. kerület - Soroksár", 
        description: "Kisvárosi hangulatú, csendes kertvárosi környék.", 
        image: "district_23.png",
        population: 23900
    }
];


