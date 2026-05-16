export interface PriceEntry {
  key: string;
  destination: string;
  fromAirport: number;
  fromCenter: number;
}

export interface PriceSection {
  titleKey: string;
  entries: PriceEntry[];
}

export const PRICE_SECTIONS: PriceSection[] = [
  {
    titleKey: "kassandraTitle",
    entries: [
      {
        key: "neaKallikrateia",
        destination: "Νέα Καλλικράτεια",
        fromAirport: 70,
        fromCenter: 85,
      },
      {
        key: "neaMoudania",
        destination: "Νέα Μουδανιά",
        fromAirport: 90,
        fromCenter: 105,
      },
      {
        key: "neaPotidaia",
        destination: "Νέα Ποτίδαια",
        fromAirport: 95,
        fromCenter: 110,
      },
      {
        key: "fokaia",
        destination: "Φώκαια",
        fromAirport: 100,
        fromCenter: 115,
      },
      { key: "sani", destination: "Σάνη", fromAirport: 110, fromCenter: 125 },
      {
        key: "afytos",
        destination: "Άφυτο",
        fromAirport: 115,
        fromCenter: 130,
      },
      {
        key: "siviri",
        destination: "Σίβηρη",
        fromAirport: 120,
        fromCenter: 135,
      },
      {
        key: "kallithea",
        destination: "Καλλιθέα",
        fromAirport: 120,
        fromCenter: 135,
      },
      {
        key: "kryopigi",
        destination: "Κρυοπηγή",
        fromAirport: 125,
        fromCenter: 140,
      },
      {
        key: "polychrono",
        destination: "Πολύχρονο",
        fromAirport: 130,
        fromCenter: 145,
      },
      {
        key: "chaniotis",
        destination: "Χανιώτη",
        fromAirport: 135,
        fromCenter: 150,
      },
      {
        key: "peukochori",
        destination: "Πευκοχώρι",
        fromAirport: 140,
        fromCenter: 155,
      },
      {
        key: "paliouri",
        destination: "Παλιούρι",
        fromAirport: 160,
        fromCenter: 175,
      },
    ],
  },
  {
    titleKey: "sithoniaTitle",
    entries: [
      {
        key: "gerakini",
        destination: "Γερακινή",
        fromAirport: 110,
        fromCenter: 125,
      },
      {
        key: "psakoudia",
        destination: "Ψακούδια",
        fromAirport: 120,
        fromCenter: 135,
      },
      {
        key: "nikiti",
        destination: "Νικήτη",
        fromAirport: 135,
        fromCenter: 150,
      },
      {
        key: "vourvourou",
        destination: "Βουρβουρού",
        fromAirport: 150,
        fromCenter: 165,
      },
      {
        key: "neosMarmaras",
        destination: "Νέος Μαρμαράς",
        fromAirport: 160,
        fromCenter: 175,
      },
      { key: "sarti", destination: "Σάρτη", fromAirport: 190, fromCenter: 205 },
    ],
  },
  {
    titleKey: "otherTitle",
    entries: [
      {
        key: "ierissos",
        destination: "Ιερισσός",
        fromAirport: 150,
        fromCenter: 165,
      },
      {
        key: "ouranoupoli",
        destination: "Ουρανούπολη",
        fromAirport: 170,
        fromCenter: 185,
      },
    ],
  },
];
