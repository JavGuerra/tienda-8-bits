const products = [
    {
        model: "ZX Spectrum",
        code: "001",
        manufacturer: "001",
        info: "16/48K. Sencillo de usar. Gran variedad de accesorios y software. Teclado incómodo.",
        relevance: true,
        price: 300,
        year: 1982,
        photo: "spectrum.jpg",
        link: "https://es.wikipedia.org/wiki/Sinclair_ZX_Spectrum"
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
        link: "https://es.wikipedia.org/wiki/Sinclair_ZX81"
    },
    {
        model: "SORD M5",
        code: "003",
        manufacturer: "002",
        info: "4Kb. Ampliable a 36Kb. Bien construido. BASIC limitado.",
        relevance: false,
        price: 150,
        year: 1982,
        photo: "sordm5.jpg",
        link: "https://es.wikipedia.org/wiki/Sord_M5"
    }
];

export default products;
