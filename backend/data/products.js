const products = [
    {
        model: "ZX Spectrum",
        code: "001",
        manufacturer: "001",
        info: "16 o 48K. Sencillo y popular. Gran variedad de accesorios y software. Teclado incómodo.",
        relevance: true,
        price: 300,
        year: 1982,
        photo: "zx.jpg",
        link: "https://es.wikipedia.org/wiki/Sinclair_ZX_Spectrum",
        buy: "https://www.ebay.es/"
    },
    {
        model: "ZX81",
        code: "002",
        manufacturer: "001",
        info: "1Kb. Poco sofisticado, pero ampliable. Precio de salida razonable. Teclado pésimo.",
        relevance: false,
        price: 100,
        year: 1981,
        photo: "zx81.jpg",
        link: "https://es.wikipedia.org/wiki/Sinclair_ZX81",
        buy: "https://www.ebay.es/"
    },
    {
        model: "SORD M5",
        code: "003",
        manufacturer: "002",
        info: "4Kb. Ampliable a 36Kb. Bien construido. BASIC limitado.",
        relevance: false,
        price: 150,
        year: 1982,
        photo: "m5.jpg",
        link: "https://es.wikipedia.org/wiki/Sord_M5",
        buy: "https://www.ebay.es/"
    },
    {
        model: "TI 99/4A",
        code: "004",
        manufacturer: "003",
        info: "16Kb. Ampliable a 52Kb. Buen teclado y buen precio. BASIC lento.",
        relevance: true,
        price: 250,
        year: 1984,
        photo: "ti99.jpg",
        link: "https://es.wikipedia.org/wiki/Texas_Instruments_TI-99/4A",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Commodore 64",
        code: "005",
        manufacturer: "004",
        info: "64Kb. Buen teclado y precio. Excelentes gráficos y sonido. BASIC limitado.",
        relevance: true,
        price: 250,
        year: 1982,
        photo: "c64.jpg",
        link: "https://es.wikipedia.org/wiki/Commodore_64",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Commodore Vic 20",
        code: "006",
        manufacturer: "004",
        info: "5Kb. Ampliable a 32Kb. Cartuchos ROM. Precio de salida elevado.",
        relevance: false,
        price: 150,
        year: 1980,
        photo: "vic20.jpg",
        link: "https://es.wikipedia.org/wiki/Commodore_VIC-20",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Dragón 32/64",
        code: "007",
        manufacturer: "005",
        info: "32 o 64Kb. Modelo popular con teclado robusto. Compatible con TSR-80.",
        relevance: false,
        price: 250,
        year: 1982,
        photo: "dragon.jpg",
        link: "https://es.wikipedia.org/wiki/Dragon_32/64",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Epson HX-20",
        code: "008",
        manufacturer: "006",
        info: "16Kb. Ampliable a 32Kb. Portátil. Incluye mini-pantalla e impresora.",
        relevance: false,
        price: 200,
        year: 1982,
        photo: "hx20.jpg",
        link: "https://es.wikipedia.org/wiki/Epson_HX-20",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Atari 400",
        code: "009",
        manufacturer: "007",
        info: "16Kb. Bajo costo. Amplio catálogo de software. Mal teclado. Cartuchos.",
        relevance: false,
        price: 300,
        year: 1979,
        photo: "atari400.jpg",
        link: "https://es.wikipedia.org/wiki/Familia_Atari_de_8_bits",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Atari 800",
        code: "010",
        manufacturer: "007",
        info: "48Kb. Teclado mejorado. Amplio catálogo de software. Programable.",
        relevance: false,
        price: 300,
        year: 1979,
        photo: "atari800.jpg",
        link: "https://es.wikipedia.org/wiki/Familia_Atari_de_8_bits",
        buy: "https://www.ebay.es/"
    },
    {
        model: "BBC Micro",
        code: "011",
        manufacturer: "008",
        info: "16 o 32Kb. Popular. BASIC versátil. Buen teclado y bien construido.",
        relevance: true,
        price: 350,
        year: 1981,
        photo: "bbc.jpg",
        link: "https://es.wikipedia.org/wiki/BBC_Micro",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Colour Genie",
        code: "012",
        manufacturer: "009",
        info: "32Kb. Barato. Lento. Con buen teclado. Compatible con el TSR-80.",
        relevance: false,
        price: 400,
        year: 1982,
        photo: "genie.jpg",
        link: "https://en.wikipedia.org/wiki/Colour_Genie",
        buy: "https://www.ebay.es/"
    }
];

export default products;
