export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  details?: {
    englishSummary?: string;
    weight?: string;
    allergens?: string[];
    fullIngredients?: string[];
    notes?: string[];
    spiceLevel?: string;
    nutrition?: {
      calories?: string;
      carbs?: string;
      fats?: string;
      proteins?: string;
    };
  };
}

export const foodCategories = [
  "Mic Dejun",
  "Aperitive",
  "Salate",
  "Supe",
  "Risotto",
  "Paste",
  "Fructe de mare",
  "Peste",
  "Pui",
  "Porc",
  "Vita",
  "Desert",
  "Garnituri si Sosuri",
];

export const foodMenuItems: MenuItem[] = [
  {
    id: "md1",
    name: "Omletă Quesadilla",
    description:
      "Omletă Quesadilla cu tortilla 70gr (gluten), ou 100gr (ouă), pancetta 30gr, dovlecel, ciuperci și ardei gras 60gr, brânză cedar 20gr (lactate), rucola 20gr și sos calypso 50gr (ouă)",
    price: "40 lei",
    category: "Mic Dejun",
    details: {
      englishSummary: "Omelette Quesadilla with tortilla, pancetta, zucchini, mushrooms and bell peppers, cedar cheese, rucola and calypso sauce",
      weight: "300gr",
      allergens: ["gluten", "ouă", "lactate"],
      fullIngredients: [
        "Lipie",
        "oua",
        "panceta",
        "dovlecei",
        "ardei gras",
        "branza branza gouda (lapte vacă pasteurizat, sare, culturi lactice, cheag)",
        "rucola",
        "sos ketchup",
        "sos maioneza",
      ],
      nutrition: {
        calories: "540kcal",
        carbs: "11gr",
        fats: "44gr",
        proteins: "29gr",
      },
    },
  },
  {
    id: "md2",
    name: "Ouă poșate",
    description:
      "Ouă poșate 100gr (ouă), hummus cu busuioc 100gr, prosciutto crudo 20gr, rucola 20gr, sos olandez 50gr (ouă) și pâine 50 gr (gluten)",
    price: "42 lei",
    category: "Mic Dejun",
    details: {
      englishSummary: "Poached eggs, hummus with basil, prosciutto crudo, rucola, hollandaise sauce and bread",
      weight: "350gr",
      allergens: ["ouă", "gluten"],
      fullIngredients: [
        "oua",
        "paine vel pitar",
        "rucola",
        "naut",
        "sos tahina",
        "usturoi granulat",
        "sos olandez",
        "ulei extravirgin masline",
        "prosciutto crudo",
        "otet cidru",
      ],
      nutrition: {
        calories: "750kcal",
        carbs: "39gr",
        fats: "52gr",
        proteins: "38gr",
      },
    },
  },
  {
    id: "md3",
    name: "Ouă poșate cu brânză de capră",
    description:
      "Ouă poșate 100gr (ouă) cu brânză de capra 30gr (lactate), paine 70gr (gluten), avocado 130gr, roșii uscate 40gr și masline verzi 40gr",
    price: "46 lei",
    category: "Mic Dejun",
    details: {
      englishSummary: "Poached eggs with goat cheese, bread, avocado, sun dried tomatoes and green olives",
      weight: "400gr",
      allergens: ["ouă", "lactate", "gluten"],
      nutrition: {
        calories: "836kcal",
        carbs: "72gr",
        fats: "49gr",
        proteins: "34gr",
      },
    },
  },
  {
    id: "md4",
    name: "Ouă încăierate",
    description:
      "Ouă 150gr (ouă) încăierate cu spanac 20gr, brânză de capră 60gr (lactate) și prosciutto deshidratat, pâine 70gr (gluten), unt 20gr, salată verde 40gr",
    price: "41 lei",
    category: "Mic Dejun",
    details: {
      englishSummary: "Scrambled eggs with spinach and goat cheese, dehydrated prosciutto, bread, butter and green salad",
      weight: "350gr",
      allergens: ["ouă", "lactate", "gluten"],
      nutrition: {
        calories: "676kcal",
        carbs: "43gr",
        fats: "39gr",
        proteins: "38gr",
      },
    },
  },
  {
    id: "md5",
    name: "Omletă cu pancetta",
    description:
      "Omletă cu ouă 150gr (ouă) cu pancetta 40gr , legume (dovlecel 20gr, ardei gras 20gr, ciuperci 20gr) și salată de rucola 30gr, roșii cherry 70gr",
    price: "34 lei",
    category: "Mic Dejun",
    details: {
      englishSummary: "Omlette with pancetta, zuchinni, mushrooms, bell peppers and rucola salad with cherry tomatoes",
      weight: "400gr",
      allergens: ["ouă"],
      nutrition: {
        calories: "390kcal",
        carbs: "7gr",
        fats: "28gr",
        proteins: "28gr",
      },
    },
  },
  {
    id: "ap1",
    name: "Fasole bătută",
    description:
      "Fasole bătută 200gr cu ceapă, sos de roșii și usturoi 50gr, servită cu pâine proaspătă* 100gr (gluten)",
    price: "27 lei",
    category: "Aperitive",
    details: {
      englishSummary: "Beans paste with onion, tomatoes sauce with garlic served with bread",
      weight: "350gr",
      allergens: ["gluten"],
      fullIngredients: [
        "fasole albă",
        "ceapa galbena",
        "rosii pasta",
        "usturoi granulat",
        "cimbrisor",
        "ulei floarea soarelui",
        "pâine",
        "boia afumata",
      ],
      notes: ["Vegan"],
      nutrition: {
        calories: "390kcal",
        carbs: "35gr",
        fats: "18gr",
        proteins: "9gr",
      },
    },
  },
  {
    id: "ap2",
    name: "Platou CRAFT",
    description:
      "Platou CRAFT cu prosciutto crudo 45gr, Hummus cu busuioc si muguri de pin 100gr, Cremă gratinată cu brânză 120gr (lactate) cu parmezan 20gr (lactate), maioneză 20gr (muștar, ouă.), smântănă 20gr (lactate), anghinare 20gr, roșii uscate 20gr, Fasole bătută 200gr cu ceapă, sos de roșii și usturoi 50gr, brânză de capră 70gr (lactate), Icre de crap 200gr (pește) cu ceapă 50gr, făcute în casă, rucola 50gr, castraveți murați 100gr, reducție de sos balsamic și roșii cherry 100gr, servit cu pâine prăjită* 150gr (gluten)",
    price: "115 lei",
    category: "Aperitive",
    details: {
      englishSummary: "CRAFT Platter with prosciutto crudo, hummus with basil and pine seeds, mustard sauce, Gratinated hot creamy cheese, parmesan, mayonnaise, cream cheese, artichoke, dried tomatoes, Beans paste with onion, tomatoes sauce with garlic, goat cheese, Carp roe with onion, rucola, pickles, balsamic reduction and cherry tomatoes, served with toasted bread",
      weight: "1450gr",
      allergens: ["gluten", "ouă", "lactate", "pește", "muștar"],
      notes: ["Recomandat 3-4 persoane"],
      nutrition: {
        calories: "850kcal",
        carbs: "45gr",
        fats: "57gr",
        proteins: "29gr",
      },
    },
  },
  {
    id: "ap3",
    name: "Hummus din năut",
    description:
      "Hummus din năut cu busuioc, tahina (semințe de susan), lămâie și ulei de măsline 250gr cu muguri de pin 20gr, servit cu pâine prăjită* 100gr (gluten)",
    price: "33 lei",
    category: "Aperitive",
    details: {
      englishSummary: "Hummus made from chickpea with basil, tahina, lemon and olive oil with pine nuts served with toasted bread",
      weight: "370gr",
      allergens: ["gluten", "susan"],
      fullIngredients: [
        "naut",
        "sos tahina",
        "muguri de pin",
        "demibagheta",
        "boia",
        "ulei extravirgin masline",
        "lamai",
        "sare marina",
        "usturoi",
        "ulei extravirgin masline",
      ],
      notes: ["Vegan"],
      nutrition: {
        calories: "590kcal",
        carbs: "59gr",
        fats: "29gr",
        proteins: "21gr",
      },
    },
  },
  {
    id: "ap4",
    name: "Cremă gratinată cu brânză",
    description:
      "Cremă gratinată cu brânză 120gr (lactate) cu parmezan 20gr (lactate), maioneză 20gr (muștar, ouă), smântănă 20gr (lactate), anghinare 20gr, roșii uscate 20gr, servită cu pâine prăjită* 100gr (gluten)",
    price: "39 LEI",
    category: "Aperitive",
    details: {
      englishSummary: "Gratinated hot creamy cheese with parmezan, mayonnaise, artichoke and dried tomatoes served with toasted bread",
      weight: "350gr",
      allergens: ["lactate", "ouă", "muștar", "gluten"],
      nutrition: {
        calories: "545 kcal",
        carbs: "19 gr",
        fats: "45 gr",
        proteins: "13 gr",
      },
    },
  },
  {
    id: "ap5",
    name: "Shakshuka cu hummus",
    description:
      "Shakshuka cu hummus și busuioc din năut 250gr (semințe de susan), muguri de pin 20gr, vinete 100gr, sos de roșii 50gr, busuioc și chimen, servit cu pâine prăjită* 100gr (gluten)",
    price: "49 LEI",
    category: "Aperitive",
    details: {
      englishSummary: "Shakshuka with hummus made from chickpea with basil, pine nuts, eggplant, tomatoes sauce, basil and cumin served with toasted bread",
      weight: "550gr",
      allergens: ["gluten", "susan"],
      nutrition: {
        calories: "491 kcal",
        carbs: "72 gr",
        fats: "14 gr",
        proteins: "19 gr",
      },
    },
  },
  {
    id: "ap6",
    name: "Icre de crap",
    description:
      "Icre de crap 200gr (pește) cu ceapă 50gr, făcute în casă, servite cu pâine prăjită 100gr (gluten)",
    price: "27 LEI",
    category: "Aperitive",
    details: {
      englishSummary: "Homemade Carp Roe with onions served with toasted bread",
      weight: "350gr",
      allergens: ["pește", "gluten"],
      nutrition: {
        calories: "1004 kcal",
        carbs: "3 gr",
        fats: "110 gr",
        proteins: "5 gr",
      },
    },
  },
  {
    id: "sal1",
    name: "Salată Caesar",
    description:
      "Salată Caesar cu piept de Pui* 150gr, salată iceberg 200gr, crutoane 30gr (gluten), usturoi, parmezan 30gr (lactate), maioneză 50gr (muștar, ouă) și sos de soia",
    price: "46 LEI",
    category: "Salate",
    details: {
      englishSummary: "Caesar Salad with chicken breast, iceberg salad, croutons, garlic, parmesan, mayonnaise and soy sauce",
      weight: "500gr",
      allergens: ["gluten", "lactate", "ouă", "muștar"],
      nutrition: {
        calories: "886 kcal",
        carbs: "30 gr",
        fats: "63 gr",
        proteins: "49 gr",
      },
    },
  },
  {
    id: "sal2",
    name: "Salată cu vrăbioară de Vită",
    description:
      "Salată cu vrăbioară de Vită* 150gr, rucola 70gr, varză rosie 30gr, edamame 50gr, roșii uscate 30gr, sos de hrean 50gr, parmezan 30gr și grisine (gluten)",
    price: "78 LEI",
    category: "Salate",
    details: {
      englishSummary: "Sirloin Beef Salad with rucola , red cabbage, edamame, dried tomatoes, horseraddish sauce, parmesan and breadsticks",
      weight: "350gr",
      allergens: ["gluten", "lactate"],
      nutrition: {
        calories: "816 kcal",
        carbs: "17 gr",
        fats: "34 gr",
        proteins: "31 gr",
      },
    },
  },
  {
    id: "sal3",
    name: "Salată cu Creveți",
    description:
      "Salată cu Creveți* 100gr (crustacee) , rucola 35gr, baby spanac 35gr, roșii cherry 80gr, morcov murat 40gr, biscuite de parmezan 50gr (lactate), vinegretă",
    price: "50 LEI",
    category: "Salate",
    details: {
      englishSummary: "Shrimps Salad with rucola, baby spinach, cherry tomatoes, pickled carrot, parmesan biscuits, vinegrette",
      weight: "350gr",
      allergens: ["crustacee", "lactate"],
      nutrition: {
        calories: "390 kcal",
        carbs: "19 gr",
        fats: "23 gr",
        proteins: "22 gr",
      },
    },
  },
  {
    id: "sal4",
    name: "Salată cu brânză Halloumi",
    description:
      "Salată cu brânză Halloumi 100gr (lactate), baby spanac 70gr și dovlecel la grătar 50gr, roșii uscate 30gr, muguri de pin, quinoa 30gr și dressing de iaurt cu mentă 30gr (lactate)",
    price: "45 LEI",
    category: "Salate",
    details: {
      englishSummary: "Halloumi Cheese Salad – baby spinach and grilled zucchini, dried tomatoes, pine nuts, quinoa with yogurt and mint dressing",
      weight: "350gr",
      allergens: ["lactate"],
      nutrition: {
        calories: "403 kcal",
        carbs: "21 gr",
        fats: "23 gr",
        proteins: "21 gr",
      },
    },
  },
  {
    id: "sal5",
    name: "TOFU BOL",
    description:
      "TOFU BOL cu quinoa 150gr, edamame 50gr, cartofi dulci cu cocos 50gr, ridiche Daikon murată, roșii cherry 80gr, varză roșie 50gr, tofu marinat cu ghimbir miere și sos de soia 100gr, sos de susan 50gr, miere",
    price: "49 LEI",
    category: "Salate",
    details: {
      englishSummary: "TOFU BOWL with quinoa, edamame, sweet potatoes, Daikon pickled radish, cherry tomatoes, tofu seasoned with ginger, soy sauce and honey, sesame sauce",
      weight: "450gr",
      allergens: ["susan"],
      nutrition: {
        calories: "934 kcal",
        carbs: "112 gr",
        fats: "22 gr",
        proteins: "58 gr",
      },
    },
  },
  {
    id: "sup1",
    name: "Supă cremă de cartofi",
    description:
      "Supă cremă de cartofi 400gr cu brânză de capră 20gr (lactate), pancetta 20gr, servită cu grisine (gluten) și mix de semințe de dovleac și floarea soarelui",
    price: "29 LEI",
    category: "Supe",
    details: {
      englishSummary: "Potatoes Cream Soup with goat cheese, pancetta, served with breadsticks and sunflower with pumpikin seeds",
      weight: "460gr",
      allergens: ["lactate", "gluten"],
      nutrition: {
        calories: "314 kcal",
        carbs: "13 gr",
        fats: "22 gr",
        proteins: "10 gr",
      },
    },
  },
  {
    id: "sup2",
    name: "Supa / Ciorba zilei",
    description: "Supa / Ciorba zilei cu paine si ardei iute",
    price: "27 LEI",
    category: "Supe",
    details: {
      englishSummary: "Soup of the day with bread and hot pepper",
      weight: "450gr",
    },
  },
  {
    id: "sup3",
    name: "Supă de fructe de mare",
    description:
      "Supă de fructe de mare cu creveți* 120gr (crustacee), midii* 100gr (moluște), camalari* 40gr (moluște) și sos de roșii cu apio, busuioc, usturoi si ceapa 250gr",
    price: "66 LEI",
    category: "Supe",
    details: {
      englishSummary: "Seafood Soup with Shrimps, mussels, calamari and tomatoes with apio, basil, garlic and onion",
      weight: "550gr",
      allergens: ["crustacee", "moluște"],
      nutrition: {
        calories: "246 kcal",
        carbs: "15 gr",
        fats: "3 gr",
        proteins: "24 gr",
      },
    },
  },
  {
    id: "sup4",
    name: "Ramen",
    description:
      "Ramen 100gr cu carne de porc* 100gr, ciuperci Shiitake, ou marinat cu sos de soia și susan 60gr, supă de pui 300gr, ceapă verde și miso",
    price: "48 LEI",
    category: "Supe",
    details: {
      englishSummary: "Ramen with pork meat, Shiitake mushrooms, marinated egg with soy sauce and sesame, chicken soup, green onions and miso",
      weight: "600gr",
      allergens: ["ouă", "susan"],
      nutrition: {
        calories: "521 kcal",
        carbs: "25 gr",
        fats: "31 gr",
        proteins: "43 gr",
      },
    },
  },
  {
    id: "ris1",
    name: "Risotto cu Somon",
    description:
      "Risotto cu Somon* 130gr (pește), orez arborio 250gr, parmezan 50gr (lactate), unt 25gr (lactate), ceapă 20gr și vin alb 20ml",
    price: "62 LEI",
    category: "Risotto",
    details: {
      englishSummary: "Salmon Risotto with arborio rice, parmesan, butter,onion, white wine",
      weight: "470gr",
      allergens: ["pește", "lactate"],
      nutrition: {
        calories: "784 kcal",
        carbs: "113 gr",
        fats: "9 gr",
        proteins: "41 gr",
      },
    },
  },
  {
    id: "ris2",
    name: "Risotto din orez arborio cu ciuperci",
    description:
      "Risotto din orez arborio 250gr cu ciuperci, hribi 30gr, champignon 50gr , parmezan 50gr (lactate), unt 25gr (lactate), ceapă 20gr și vin alb 20ml",
    price: "44 LEI",
    category: "Risotto",
    details: {
      englishSummary: "Mushrooms Risotto, arborio rice, bolletus, champignon, parmesan, butter, onion and white wine",
      weight: "450gr",
      allergens: ["lactate"],
      nutrition: {
        calories: "890 kcal",
        carbs: "108 gr",
        fats: "32 gr",
        proteins: "25 gr",
      },
    },
  },
  {
    id: "ris3",
    name: "Paella",
    description:
      "Paella cu creveți*200gr (crustacee), calamari* 160gr (moluște), midii*150gr (moluște), piept de pui* 150gr, mazăre 30gr, ardei gras 30gr, ceapă 50gr, lămâie 100gr și orez 500gr",
    price: "146 LEI",
    category: "Risotto",
    details: {
      englishSummary: "Paella with shrimps, calamari, mussels, chicken breast, peas, red peppers, onion and rice",
      weight: "1400gr",
      allergens: ["crustacee", "moluște"],
      nutrition: {
        calories: "1777 kcal",
        carbs: "243 gr",
        fats: "24 gr",
        proteins: "125 gr",
      },
    },
  },
  {
    id: "ris4",
    name: "Risotto din orez arborio cu calamari",
    description:
      "Risotto din orez arborio 250gr, cu calamari* 120gr (moluște), parmezan 50gr (lactate), unt 25gr (lactate), ceapă 20gr și vin alb 20ml",
    price: "71 LEI",
    category: "Risotto",
    details: {
      englishSummary: "Risotto with calamari, arborio rice, parmesan, butter, onion white wine",
      weight: "470gr",
      allergens: ["moluște", "lactate"],
      nutrition: {
        calories: "1050 kcal",
        carbs: "162 gr",
        fats: "54 gr",
        proteins: "47 gr",
      },
    },
  },
  {
    id: "ris5",
    name: "Risotto din orez arborio",
    description:
      "Risotto din orez arborio 250gr, unt 25gr (lactate), parmezan 50gr (lactate), ceapă 20gr și vin alb 20ml",
    price: "39 LEI",
    category: "Risotto",
    details: {
      englishSummary: "Risotto, arborio rice, butter, parmesan and white wine",
      weight: "350gr",
      allergens: ["lactate"],
      nutrition: {
        calories: "480 kcal",
        carbs: "70 gr",
        fats: "22 gr",
        proteins: "7 gr",
      },
    },
  },
  {
    id: "ris6",
    name: "Orez prăjit",
    description:
      "Orez prăjit 150gr cu ardei gras 70gr, ciuperci 80gr, dovlecel 70gr, edamame 40gr, ceapă verde 20gr, sos de soia 20ml",
    price: "42 LEI",
    category: "Risotto",
    details: {
      englishSummary: "Fried rice with peppers, mushrooms, zucchini, edamame, green onion and soy sauce",
      weight: "450gr",
      nutrition: {
        calories: "230 kcal",
        carbs: "45 gr",
        fats: "1 gr",
        proteins: "14 gr",
      },
    },
  },
  {
    id: "ris7",
    name: "Risotto marinara",
    description:
      "Risotto marinara (orez arborio 250gr, sos de roșii 150gr parmezan 50gr, ceapă, vin) 300gr cu Creveți 250gr, pesto, biscuite de parmazan 50gr și roșii cherry coapte 80gr",
    price: "81 LEI",
    category: "Risotto",
    details: {
      englishSummary: "Risotto Marinara with Shrimps, pesto, parmezan chips and girlled cherry tomatoes",
      weight: "600gr",
      allergens: ["lactate", "crustacee"],
      nutrition: {
        calories: "1516 kcal",
        carbs: "252 gr",
        fats: "21 gr",
        proteins: "78 gr",
      },
    },
  },
  {
    id: "ris8",
    name: "Risotto cu Nduja",
    description:
      "Risotto (orez arborio 250gr, unt 25gr, parmezan 50gr, ceapă, vin) 300gr cu Nduja, tentacule de calamar* la grătar 150gr, pesto de busuioc și lime 50gr",
    price: "71 LEI",
    category: "Risotto",
    details: {
      englishSummary: "Risotto with Nduja, grilled Calamari Tentacles, pesto and lime",
      weight: "600gr",
      allergens: ["lactate", "moluște"],
      nutrition: {
        calories: "1274 kcal",
        carbs: "233 gr",
        fats: "12 gr",
        proteins: "56 gr",
      },
    },
  },
  {
    id: "pas1",
    name: "Linguini",
    description:
      "Linguini 200gr (gluten, ouă) făcute in casă cu creveți* 50gr (crustacee), midii* 80gr (moluște), calamari* 40gr (moluște) si sos de roșii cu ierburi aromate 100gr",
    price: "67 LEI",
    category: "Paste",
    details: {
      englishSummary: "Seafood Home Made linguini with shrimps, mussels, calamari, tomatoes sauce and aromated herbs",
      weight: "470gr",
      allergens: ["gluten", "ouă", "crustacee", "moluște"],
      nutrition: {
        calories: "696 kcal",
        carbs: "86 gr",
        fats: "10 gr",
        proteins: "51 gr",
      },
    },
  },
  {
    id: "pas2",
    name: "Gnocchi",
    description:
      "Gnocchi 160gr (gluten) cu sos de brânză cu mucegai albastru 50gr (lactate), parmezan 30gr (lactate), smântână rama 50gr (lactate), sparanghel 50gr, muguri de pin și prosciutto deshidratat",
    price: "45 LEI",
    category: "Paste",
    details: {
      englishSummary: "Gnocchi with blue cheese and parmesan sauce, cream, asparagus, pine seeds and dehydrated prosciutto",
      weight: "450gr",
      allergens: ["gluten", "lactate"],
      nutrition: {
        calories: "649 kcal",
        carbs: "44 gr",
        fats: "41 gr",
        proteins: "27 gr",
      },
    },
  },
  {
    id: "pas3",
    name: "Pasta Amatriciana",
    description:
      "Pasta Amatriciana cu Bucatini sau Penne 200gr (gluten, ouă) făcute în casă cu pancetta 50gr, parmezan 30gr (lactate), roșii cherry 50gr, busuioc și sos de roșii 100gr",
    price: "49 LEI",
    category: "Paste",
    details: {
      englishSummary: "Pasta Amatriciana (Home Made Bucatini or Penne) with pancetta, parmesan, cherry tomatoes, basil and tomatoes sauce",
      weight: "430gr",
      allergens: ["gluten", "ouă", "lactate"],
      nutrition: {
        calories: "794 kcal",
        carbs: "93 gr",
        fats: "28 gr",
        proteins: "38 gr",
      },
    },
  },
  {
    id: "pas4",
    name: "Carbonara",
    description:
      "Carbonara cu Bucatini sau Penne 200gr (gluten, ouă) făcute în casă cu pancetta 50gr, ou 50gr (ouă), smântană rama 50gr (lactate) și parmezan 30gr (lactate)",
    price: "49 LEI",
    category: "Paste",
    details: {
      englishSummary: "Carbonara (Homemade Bucatini or Penne) with pancetta, egg, cream and parmesan",
      weight: "380gr",
      allergens: ["gluten", "ouă", "lactate"],
      nutrition: {
        calories: "898 kcal",
        carbs: "81 gr",
        fats: "72 gr",
        proteins: "49 gr",
      },
    },
  },
  {
    id: "pas5",
    name: "Penne Bolognese al Forno",
    description:
      "Penne Bolognese al Forno făcute în casă 200gr (gluten, ouă) cu ragu din carne de vită*, morcov, ceapă, țelină, apio 100gr, sos de roșii 100gr, brânză cedar 30gr (lactate) și parmezan 30gr (lactate)",
    price: "54 LEI",
    category: "Paste",
    details: {
      englishSummary: "Home Made Penne Bolognese al Forno with Beef ragu, carrots, onion, celery, apio, tomatoes sauce, cedar cheese and parmesan",
      weight: "400gr",
      allergens: ["gluten", "ouă", "lactate"],
      nutrition: {
        calories: "712 kcal",
        carbs: "70 gr",
        fats: "55 gr",
        proteins: "32 gr",
      },
    },
  },
  {
    id: "pas6",
    name: "Linguini cu Creveți",
    description:
      "Linguini făcute în casă 200gr (gluten, ouă) cu Creveți* 60gr (crustacee), calamari* 50gr (moluște), midii* 50gr (moluște), vongole* 40gr (moluște) busuioc, roșii cherry 50gr în sos de vin alb 50ml, unt 30gr (lactate), usturoi si lime 50gr",
    price: "67 LEI",
    category: "Paste",
    details: {
      englishSummary: "Home Made Linguini with Shrimps, calamari, mussels, vongole with basil, cherry tomatoes, white wine sauce, butter and garlic, lime",
      weight: "580gr",
      allergens: ["gluten", "ouă", "crustacee", "moluște", "lactate"],
      nutrition: {
        calories: "535 kcal",
        carbs: "93 gr",
        fats: "6 gr",
        proteins: "40 gr",
      },
    },
  },
  {
    id: "pas7",
    name: "Linguini cu creveți și sos de vin alb",
    description:
      "Linguini 200gr (gluten, ouă) făcute în casă, cu creveți* 100gr (crustacee). rosii cherry 50gr, parmezan 30gr (lactate) și sos de vin alb cu busuioc și usturoi 30gr",
    price: "59 LEI",
    category: "Paste",
    details: {
      englishSummary: "Home made Linguini with shrimps, cherry tomatoes, parmesan and white wine sauce with basil and garlic",
      weight: "410gr",
      allergens: ["gluten", "ouă", "crustacee", "lactate"],
      nutrition: {
        calories: "568 kcal",
        carbs: "92 gr",
        fats: "4 gr",
        proteins: "38 gr",
      },
    },
  },
  {
    id: "pas8",
    name: "Bucatini cu hribi",
    description:
      "Bucatini făcute în casă 200gr (ouă) cu hribi 50gr, ciuperci champignon 80gr, piure de trufe și parmezan 30gr",
    price: "42 LEI",
    category: "Paste",
    details: {
      englishSummary: "Homemade Bucatini with boletus, champignon, truffle puree and parmesan",
      weight: "360gr",
      allergens: ["ouă", "lactate"],
      nutrition: {
        calories: "783 kcal",
        carbs: "155 gr",
        fats: "5 gr",
        proteins: "29 gr",
      },
    },
  },
  {
    id: "pas9",
    name: "Bucatini Arrabiata",
    description:
      "Bucatini Arrabiata făcute în casă 200gr (ouă) cu sos de roșii 150gr, parmezan 30gr (lactate), busuioc 30gr, usturoi și fulgi de chilli",
    price: "39 LEI",
    category: "Paste",
    details: {
      englishSummary: "Homemade Bucatini Arrabiata with tomatoes sauce, parmezan, basil, garlic and chilli flakes",
      weight: "360gr",
      allergens: ["ouă", "lactate"],
      nutrition: {
        calories: "982 kcal",
        carbs: "95 gr",
        fats: "17 gr",
        proteins: "40 gr",
      },
    },
  },
  {
    id: "pas10",
    name: "Bucatini cu somon",
    description:
      "Bucatini 200gr cu somon* 150gr, mix de măsline 80gr, roșii cherry 80gr, busuioc, usturoi și muguri de pin",
    price: "64 LEI",
    category: "Paste",
    details: {
      englishSummary: "Bucatini pasta with salmon, olives, cherry tomatoes, basil, garlic and pine seeds",
      weight: "450gr",
      allergens: ["pește"],
      nutrition: {
        calories: "1420 kcal",
        carbs: "161 gr",
        fats: "61 gr",
        proteins: "59 gr",
      },
    },
  },
  {
    id: "fm1",
    name: "Midii în sos de roșii",
    description:
      "Midii* 330gr (moluște) în sos de roșii făcut in casă cu usturoi, busuioc 100gr și pâine prăjită* 100gr",
    price: "65 LEI",
    category: "Fructe de mare",
    details: {
      englishSummary: "Mussels with our own tomatoes sauce with garlic and basil served with toasted bread",
      weight: "530gr",
      allergens: ["moluște", "gluten"],
      nutrition: {
        calories: "508 kcal",
        carbs: "54 gr",
        fats: "12 gr",
        proteins: "40 gr",
      },
    },
  },
  {
    id: "fm2",
    name: "Tentacule de calamari la grătar",
    description:
      "Tentacule de calamari* 220gr (moluște) la grătar, salată verde 50gr și sos tzatziki cu iaurt grecesc (lactate), castraveți, mărar și usturoi 50gr, lime 50gr",
    price: "79 LEI",
    category: "Fructe de mare",
    details: {
      englishSummary: "Grilled calamari tentacles, salad and tzatziki with greek yogurt, cucumbers, dill and garlic",
      weight: "350gr",
      allergens: ["moluște", "lactate"],
      nutrition: {
        calories: "288 kcal",
        carbs: "4 gr",
        fats: "8 gr",
        proteins: "45 gr",
      },
    },
  },
  {
    id: "pes1",
    name: "File de somon glazurat",
    description:
      "File de somon* 180gr (pește) glazurat (miso, sirop de mere, sos tsuyu și fond de vită 30gr) și orez prăjit 200gr cu ardei gras 50gr, ciuperci 60gr, dovlecel 40gr, edamame 50gr, ceapă verde 30gr, sos de soia 20gr, , muguri de pin, susan negru, ghimbir și usturoi",
    price: "76 LEI",
    category: "Peste",
    details: {
      englishSummary: "Glazurated Salmon with miso, tsuyu sauce, beef stock, apple syrup and fried rice with bell pepper, mushrooms, zuchinni, edamame, green onnion, soy sauce, pine seeds, sesame seeds, ginger and garlic",
      weight: "550gr",
      allergens: ["pește", "susan"],
      nutrition: {
        calories: "980 kcal",
        carbs: "160 gr",
        fats: "7 gr",
        proteins: "80 gr",
      },
    },
  },
  {
    id: "pes2",
    name: "Dorada",
    description:
      "Dorada* 250gr (pește), mamaligă cremoasă cu parmezan 250gr și sos de roșii coapte cu leuștean, cimbru și usturoi 50gr",
    price: "76 LEI",
    category: "Peste",
    details: {
      englishSummary: "Dorada, creamy polenta with parmezan and slow cooked tomatoes sauce with lovage, thyme and garlic",
      weight: "550gr",
      allergens: ["pește", "lactate"],
      nutrition: {
        calories: "498 kcal",
        carbs: "19 gr",
        fats: "16 gr",
        proteins: "63 gr",
      },
    },
  },
  {
    id: "pui1",
    name: "Piept de pui cu gnocchi",
    description:
      "Piept de pui* 300gr cu gnocchi 120gr , sos de brânză cu mucegai albastru 50gr (lactate), parmezan 30gr (lactate), smântână rama 50gr (lactate), sparanghel 50gr, muguri de pin, prosciutto deshidratat și sos brun 50gr (unt, făină, morcov, țelină, ceapă, pastă tomate, fond vită și supă de pui)",
    price: "67 LEI",
    category: "Pui",
    details: {
      englishSummary: "Chicken breast, gnocchi with blue cheese and parmesan sauce, cream, asparagus, pine seeds, dehydrated prosciutto and brown sauce (butter, flour, carrot, celery, onion, tomato paste, beef stock and chicken stock)",
      weight: "600gr",
      allergens: ["lactate", "gluten"],
      nutrition: {
        calories: "1023 kcal",
        carbs: "45 gr",
        fats: "47 gr",
        proteins: "89 gr",
      },
    },
  },
  {
    id: "porc1",
    name: "Ciolan de Porc",
    description:
      "Ciolan de Porc* cu sos dulce acrișor (muștar, miere, soia) sau barbecue 600gr, salată coleslaw 150gr (maioneză, ouă) și cartofi prăjiți* 200gr",
    price: "80 LEI",
    category: "Porc",
    details: {
      englishSummary: "Pork Knuckle with sweet & sour or barbecue sauce, coleslaw salad and french fries",
      weight: "950gr",
      allergens: ["ouă", "muștar"],
      nutrition: {
        calories: "2610 kcal",
        carbs: "66 gr",
        fats: "218 gr",
        proteins: "104 gr",
      },
    },
  },
  {
    id: "vit1",
    name: "Vrăbioară de vită",
    description:
      "Vrăbioară de vită* 300gr cu sos balsamico, roșii cherry, capere, ceapă, busuioc 200gr și pâine proaspătă 100gr",
    price: "143 LEI",
    category: "Vita",
    details: {
      englishSummary: "Sirloin Beef with balsamico sauce, cheery tomatoes, capers, onions, basil and fresh bread",
      weight: "600gr",
      allergens: ["gluten"],
      nutrition: {
        calories: "981 kcal",
        carbs: "25 gr",
        fats: "73 gr",
        proteins: "45 gr",
      },
    },
  },
  {
    id: "vit2",
    name: "CRAFT Burger de vită",
    description:
      "CRAFT Burger de vită* Black Angus 200gr cu salată verde 20gr, castraveți murați, brânză gouda 20gr (lactate), sos craft 30gr (ouă. muștar), ceapă caramelizată 20gr, roșii, chiflă pretzel 80gr (guten), cartofi prajiți* 200gr și sos calypso 50gr (ouă, muștar)",
    price: "62 LEI",
    category: "Vita",
    details: {
      englishSummary: "CRAFT Burger with Black Angus Beef, lettuce salad, sweet & sour pickles, melted gouda cheese, craft sauce, caramelized onions, tomatoes, pretzel, french fries and calypso sauce",
      weight: "650gr",
      allergens: ["gluten", "ouă", "lactate", "muștar"],
      nutrition: {
        calories: "1460 kcal",
        carbs: "87 gr",
        fats: "101 gr",
        proteins: "51 gr",
      },
    },
  },
  {
    id: "des1",
    name: "Tiramisu",
    description:
      "Tiramisu cu mascarpone 100gr (lactate), ou 30gr (ouă), lichior amaretto, cafea espresso 20gr, pudră de cacao și piscoturi 100gr (gluten)",
    price: "35 LEI",
    category: "Desert",
    details: {
      englishSummary: "Tiramisu with mascarpone, eggs, amaretto liqueur, coffee espresso and cocoa powder",
      weight: "275gr",
      allergens: ["lactate", "ouă", "gluten"],
      nutrition: {
        calories: "830 kcal",
        carbs: "101 gr",
        fats: "42 gr",
        proteins: "12 gr",
      },
    },
  },
  {
    id: "des2",
    name: "Lava Cake",
    description:
      "Lava Cake cu ciocolată neagră 80gr (gluten, lactate, ouă), înghețată de vanilie 50gr (lactate) și sos de fructe de pădure 30gr",
    price: "33 LEI",
    category: "Desert",
    details: {
      englishSummary: "Lava Cake with black chocolate and vanilla ice cream",
      weight: "150gr",
      allergens: ["gluten", "lactate", "ouă"],
      nutrition: {
        calories: "622 kcal",
        carbs: "46 gr",
        fats: "59 gr",
        proteins: "7 gr",
      },
    },
  },
  {
    id: "gar1",
    name: "Legume la grătar",
    description:
      "Legume la grătar – dovlecel, ceapă verde, roșii cherry, ciuperci, ardei gras, busuioc și ulei de măsline",
    price: "23 LEI",
    category: "Garnituri si Sosuri",
    details: {
      englishSummary: "Grilled vegetables – zucchini, green onion, cherry tomatoes, mushrooms, peppers, basil and olive oil",
      weight: "300gr",
      nutrition: {
        calories: "183 kcal",
        carbs: "9 gr",
        fats: "13 gr",
        proteins: "3 gr",
      },
    },
  },
  {
    id: "gar2",
    name: "Piure de cartofi gratinați",
    description:
      "Piure (lactate) de cartofi gratinați cu parmezan (lactate) și ceapa verde",
    price: "25 LEI",
    category: "Garnituri si Sosuri",
    details: {
      englishSummary: "Gratinated potatoes puree with parmesan and green onion",
      weight: "200gr",
      allergens: ["lactate"],
      nutrition: {
        calories: "396 kcal",
        carbs: "36 gr",
        fats: "25 gr",
        proteins: "3 gr",
      },
    },
  },
];

export const drinkCategories = [
  "Cocktails & Long Drinks",
  "Cocktailuri Clasice",
  "Cocktailuri Fără Alcool",
  "Coffee & Hot Drinks",
  "Soft Drinks & Fresh",
  "Beer & Cider",
  "Spirits",
  "Long Drinks",
  "Cigarettes",
];

export const drinkMenuItems: MenuItem[] = [
  {
    id: "gt1",
    name: "Bulldog & Tonic",
    description: "Bulldog Gin 40ml, Evervess Tonic 120ml, lamaie, menta si flori comestibile",
    price: "39 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Bulldog & Tonic with lemon, mint and edible flowers",
      weight: "350ml",
    },
  },
  {
    id: "gt2",
    name: "Gordon's Pink & Tonic",
    description: "Gordon's Pink Gin 40ml, Evervess Tonic 250ml, capsuna, piper roz, lime",
    price: "32 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Gordon's Pink & Tonic with strawberry, pink pepper, lime",
      weight: "350ml",
    },
  },
  {
    id: "gt3",
    name: "Tanqueray London Dry & Tonic",
    description: "Tanqueray London Dry Gin 40ml, Evervess Tonic 250ml, fresh grapefruit 30ml, menta si grapefruit",
    price: "34 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Tanqueray London Dry & Tonic with fresh grapefruit, mint and grapefruit",
      weight: "350ml",
    },
  },
  {
    id: "gt4",
    name: "Tanqueray Royale Blackcurrant & Tonic",
    description: "Tanqueray Royale Blackcurrant Gin 40ml, Evervess Tonic 250ml, afine, lime si busuioc proaspat",
    price: "36 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Tanqueray Royale Blackcurrant & Tonic with blueberries, lime and fresh basil",
      weight: "350ml",
    },
  },
  {
    id: "gt5",
    name: "Tanqueray Flor de Sevilla & Tonic",
    description: "Tanqueray Flor de Sevilla Gin 40ml, Evervess Tonic 250ml, rodie, lime si rozmarin",
    price: "36 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Tanqueray Flor de Sevilla & Tonic with pomegranate, lime and rosemary",
      weight: "350ml",
    },
  },
  {
    id: "gt6",
    name: "Tanqueray No. Ten & Tonic",
    description: "Tanqueray No. Ten Gin 40ml, Evervess Tonic 250ml, rozmarin si lime",
    price: "41 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Tanqueray No. Ten & Tonic with rosemary and lime",
      weight: "350ml",
    },
  },
  {
    id: "sig1",
    name: "CRAFT",
    description: "Tanqueray London Dry Gin 40ml, Monin lavanda 20ml, Monin soc 20ml, Monin flori de trandafir 20ml, fresh de lamaie 20ml, infuzie de ceai albastru 10ml, albus de ou pasteurizat 10ml, muguri de trandafir",
    price: "39 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "CRAFT signature cocktail with Tanqueray Gin, lavender, elderflower, rose flowers, lemon, blue tea infusion, pasteurized egg white, rose buds",
      weight: "250ml",
      allergens: ["ouă"],
    },
  },
  {
    id: "sig2",
    name: "Pornstar Martini",
    description: "Ketel One Vodka 30ml, piure fructul pasiunii 20ml, Passoa 20ml, prosecco 20ml, lime, vanilie si fructul pasiunii, albus de ou pasteurizat 7ml",
    price: "39 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Pornstar Martini with Ketel One Vodka, passion fruit puree, Passoa, prosecco, lime, vanilla, passion fruit, pasteurized egg white",
      weight: "270ml",
      allergens: ["ouă"],
    },
  },
  {
    id: "sig3",
    name: "Johnnie Walker Black Ruby Tonic",
    description: "Johnnie Walker Black Ruby 40ml, Monin blackberry 20ml, fresh lime 20ml, Evervess tonic 50ml, afine",
    price: "35 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Johnnie Walker Black Ruby Tonic with blackberry syrup, fresh lime, tonic water, blueberries",
      weight: "220ml",
    },
  },
  {
    id: "sig4",
    name: "Hot Lavander",
    description: "Ketel One vodka 40ml, sirop de lavanda 40ml, lichior Monin Peach 20ml, fresh lamaie 20ml, ceai albastru 20ml",
    price: "36 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Hot Lavender with Ketel One vodka, lavender syrup, Monin Peach liqueur, fresh lemon, blue tea",
      weight: "150ml",
    },
  },
  {
    id: "sig5",
    name: "Aperol Vanilla Sour",
    description: "Aperol 50ml, Monin vanilie 20ml, fresh lamaie 30ml, albus de ou pasteurizat 15ml",
    price: "33 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Aperol Vanilla Sour with vanilla syrup, fresh lemon, pasteurized egg white",
      weight: "200ml",
      allergens: ["ouă"],
    },
  },
  {
    id: "sig6",
    name: "Between the sheets",
    description: "KVINT Divin VSOP 6 ani 40ml, Monin blackcurrant 20ml, triplu sec 15ml, fresh lamaie 15ml",
    price: "34 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Between the sheets with KVINT Divin VSOP 6 years, blackcurrant syrup, triple sec, fresh lemon",
      weight: "150ml",
    },
  },
  {
    id: "sig7",
    name: "Debbie",
    description: "Balsam 30ml, sirop de zahar 15ml, sirop de artar 15ml, albus de ou pasteurizat 10ml",
    price: "33 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Debbie with Balsam, sugar syrup, maple syrup, pasteurized egg white",
      weight: "200ml",
      allergens: ["ouă"],
    },
  },
  {
    id: "sig8",
    name: "Papa Negroni",
    description: "Don Papa Baroko 30ml, Campari 30ml, Bottega Cinzano rosso 30ml, portocala",
    price: "42 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Papa Negroni with Don Papa Baroko, Campari, Bottega Cinzano rosso, orange",
      weight: "100ml",
    },
  },
  {
    id: "sig9",
    name: "Limoncello Spritz",
    description: "Isolabella Limoncello 60ml, Grande Vento Prosecco 50ml, apa minerala 30ml, lamaie si menta",
    price: "33 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Limoncello Spritz with prosecco, mineral water, lemon and mint",
      weight: "200ml",
    },
  },
  {
    id: "sig10",
    name: "Pink Velvet",
    description: "Disaronno Velvet 40ml, Monin triplu sec 20ml, Monin capsuni 20ml, Monin cocos 15ml, Santal cranberry 40ml, fresh lamaie 20ml, albus de ou pasteurizat 10ml",
    price: "38 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Pink Velvet with Disaronno Velvet, triple sec, strawberry syrup, coconut syrup, cranberry, fresh lemon, pasteurized egg white",
      weight: "200ml",
      allergens: ["ouă"],
    },
  },
  {
    id: "sig11",
    name: "Paloma",
    description: "Don Julio Blanco 40ml, grapefruit juice 120ml, fresh lime 20ml, sare de Himalaya",
    price: "42 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Paloma with Don Julio Blanco, grapefruit juice, fresh lime, Himalayan salt",
      weight: "200ml",
    },
  },
  {
    id: "sig12",
    name: "Masskara Sour",
    description: "Don Papa Masskara 40ml, fresh lime 20ml, orange juice 20ml, sirop de zahar 20ml, dash orange bitter 3ml, zahar brun si portocala deshidratata",
    price: "35 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Masskara Sour with Don Papa Masskara, fresh lime, orange juice, sugar syrup, orange bitter, brown sugar and dehydrated orange",
      weight: "200ml",
    },
  },
  {
    id: "class1",
    name: "Negroni",
    description: "Campari 30ml, Bottega Cinzano Rosso 30ml, Tanqueray London Dry Gin 30ml",
    price: "35 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Negroni with Campari, Bottega Cinzano Rosso, Tanqueray London Dry Gin",
      weight: "150ml",
    },
  },
  {
    id: "class2",
    name: "Aperol Spritz",
    description: "Aperol 60ml, prosecco 120ml, apa minerala 30ml",
    price: "35 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Aperol Spritz with prosecco and mineral water",
      weight: "200ml",
    },
  },
  {
    id: "class3",
    name: "Mojito",
    description: "Captain Morgan White 40ml, apa minerala 120ml, zahar brun, menta",
    price: "35 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Mojito with Captain Morgan White, mineral water, brown sugar, mint",
      weight: "250ml",
    },
  },
  {
    id: "class4",
    name: "Manhattan",
    description: "Bulleit Bourbon 60ml, Bottega Cinzano rosso 30ml, angostura bitter dash",
    price: "38 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Manhattan with Bulleit Bourbon, Bottega Cinzano rosso, angostura bitter",
      weight: "100ml",
    },
  },
  {
    id: "class5",
    name: "Daiquiri",
    description: "Captain Morgan White 40ml, fresh lime 20ml, sirop de zahar 20ml",
    price: "33 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Daiquiri with Captain Morgan White, fresh lime, sugar syrup",
      weight: "150ml",
    },
  },
  {
    id: "class6",
    name: "Espresso Martini",
    description: "Ketel One vodka 40ml, Tia Maria 20ml, Julius Meinl espresso shot, sirop de zahar 10ml",
    price: "36 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Espresso Martini with Ketel One vodka, Tia Maria, espresso, sugar syrup",
      weight: "150ml",
    },
  },
  {
    id: "class7",
    name: "Disaronno Sour",
    description: "Amaretto Disaronno 60ml, fresh lime 30ml, sirop de zahar 30ml",
    price: "33 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Disaronno Sour with Amaretto Disaronno, fresh lime, sugar syrup",
      weight: "150ml",
    },
  },
  {
    id: "class8",
    name: "Hugo Spritz",
    description: "Prosecco 150ml, sirop de soc 40ml, menta, lime, apa minerala 20ml",
    price: "35 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Hugo Spritz with prosecco, elderflower syrup, mint, lime, mineral water",
      weight: "200ml",
    },
  },
  {
    id: "class9",
    name: "Cosmopolitan",
    description: "Ketel One Vodka 40ml, triplu sec 20ml, santal cranberry 40ml",
    price: "33 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Cosmopolitan with Ketel One Vodka, triple sec, cranberry",
      weight: "150ml",
    },
  },
  {
    id: "class10",
    name: "Campari Tonic",
    description: "Campari 40ml, apa tonica 160ml, lime",
    price: "28 lei",
    category: "Cocktailuri Clasice",
    details: {
      englishSummary: "Classic Campari Tonic with tonic water and lime",
      weight: "200ml",
    },
  },
  {
    id: "na1",
    name: "Basil Tanqueray 0.0% & Tonic",
    description: "Tanqueray 0.0% fără alcool și apa tonica 120ml, Monin soc 20ml, fresh lime 20ml si busuioc proaspat",
    price: "33 lei",
    category: "Cocktailuri Fără Alcool",
    details: {
      englishSummary: "Basil Tanqueray 0.0% & Tonic - non-alcoholic with elderflower syrup, fresh lime and fresh basil",
      weight: "350ml",
      notes: ["Fără alcool"],
    },
  },
  {
    id: "na2",
    name: "Red Berries Tanqueray 0.0% & Tonic",
    description: "Tanqueray 0.0% fără alcool si apa tonica 120ml, Monin red berries 20ml, fresh lime 20ml si busuioc proaspat",
    price: "33 lei",
    category: "Cocktailuri Fără Alcool",
    details: {
      englishSummary: "Red Berries Tanqueray 0.0% & Tonic - non-alcoholic with red berries syrup, fresh lime and fresh basil",
      weight: "350ml",
      notes: ["Fără alcool"],
    },
  },
  {
    id: "na3",
    name: "CRAFT Virgin",
    description: "Monin Cocos sirop 30ml, fresh grapefruit 50ml, fresh lamaie 25ml, ceai albastru 30ml",
    price: "26 lei",
    category: "Cocktailuri Fără Alcool",
    details: {
      englishSummary: "CRAFT Virgin - non-alcoholic with coconut syrup, fresh grapefruit, fresh lemon, blue tea",
      weight: "350ml",
      notes: ["Fără alcool"],
    },
  },
  {
    id: "na4",
    name: "Strawberry Smash",
    description: "Monin Strawberry piure 15ml, apa tonica 160ml, fresh lamaie 20ml, capsune",
    price: "26 lei",
    category: "Cocktailuri Fără Alcool",
    details: {
      englishSummary: "Strawberry Smash - non-alcoholic with strawberry puree, tonic water, fresh lemon, strawberries",
      weight: "350ml",
      notes: ["Fără alcool"],
    },
  },
  {
    id: "aper1",
    name: "Campari Spritz",
    description: "Campari 60ml, prosecco 90ml, apa minerala 30ml",
    price: "33 lei",
    category: "Cocktails & Long Drinks",
    details: {
      englishSummary: "Campari Spritz with prosecco and mineral water",
      weight: "200ml",
    },
  },
  {
    id: "aper3",
    name: "Crodino Spritz fara alcool",
    description: "Crodino 200ml, apa minerala 30ml",
    price: "27 lei",
    category: "Cocktailuri Fără Alcool",
    details: {
      englishSummary: "Crodino Spritz - non-alcoholic with mineral water",
      weight: "230ml",
      notes: ["Fără alcool"],
    },
  },
];

