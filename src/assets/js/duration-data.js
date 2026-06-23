const normativeDataset = [
  {
    id: "residential-monolithic-16f-18000",
    group: "residential",
    subtype: "apartment",
    label: "Житловий будинок, монолітно-каркасний, 16 поверхів",

    capacityType: "area",
    capacityUnit: "m2",
    normativeCapacity: 18000,

    floors: 16,
    structureType: "frame_monolithic",

    normativeDurationTotal: 15,
    undergroundDuration: 2.5,

    sourceTable: "Додаток А",
    sourceNote: "Житлові будинки"
  },

  {
    id: "school-1000-students",
    group: "public",
    subtype: "school",
    label: "Школа на 1000 учнів",

    capacityType: "students",
    capacityUnit: "students",
    normativeCapacity: 1000,

    floors: null,
    structureType: null,

    normativeDurationTotal: null,
    undergroundDuration: 0,

    sourceTable: "Додаток А",
    sourceNote: "Школи"
  },

  {
    id: "clinic-600-visits",
    group: "public",
    subtype: "clinic",
    label: "Поліклініка на 600 відвідувань за зміну",

    capacityType: "visits",
    capacityUnit: "visits_per_shift",
    normativeCapacity: 600,

    floors: null,
    structureType: null,

    normativeDurationTotal: null,
    undergroundDuration: 0,

    sourceTable: "Додаток А",
    sourceNote: "Поліклініки"
  },

  {
    id: "hospital-600-beds",
    group: "public",
    subtype: "hospital",
    label: "Лікарня на 600 ліжок",

    capacityType: "beds",
    capacityUnit: "beds",
    normativeCapacity: 600,

    floors: null,
    structureType: null,

    normativeDurationTotal: null,
    undergroundDuration: 0,

    sourceTable: "Додаток А",
    sourceNote: "Лікарні"
  },

  {
    id: "canteen-100-seats",
    group: "public",
    subtype: "restaurant",
    label: "Їдальня на 100 місць",

    capacityType: "seats",
    capacityUnit: "seats",
    normativeCapacity: 100,

    floors: null,
    structureType: null,

    normativeDurationTotal: null,
    undergroundDuration: 0,

    sourceTable: "Додаток А",
    sourceNote: "Ресторани / їдальні"
  },

  {
    id: "warehouse-30000-m3",
    group: "public",
    subtype: "warehouse",
    label: "Складська будівля об'ємом 30000 м3",

    capacityType: "volume",
    capacityUnit: "m3",
    normativeCapacity: 30000,

    floors: 1,
    structureType: null,

    normativeDurationTotal: null,
    undergroundDuration: 0,

    sourceTable: "Додаток А",
    sourceNote: "Склади"
  },

  {
    id: "water-pipe-pe-300-1km",
    group: "network",
    subtype: "water_pipe",
    label: "Водопровід, поліетиленові труби DN300, 1 км",

    capacityType: "length",
    capacityUnit: "km",
    normativeCapacity: 1,

    pipeMaterial: "polyethylene",
    pipeDiameter: 300,

    normativeDurationTotal: null,
    undergroundDuration: 0,

    sourceTable: "Додаток А",
    sourceNote: "Зовнішні мережі водопроводу"
  }
];
