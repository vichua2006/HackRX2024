export interface Drug {
  brand: string;
  name: string;
  dosage: [number, string][];
  divider: string;
  din: string;
  quantity: [number, string];
  standardQuantity: number;
}
const DrugInventoryList: Drug[] = [
  {
    brand: "Alysena",
    name: "28",
    dosage: [
      [100, "mcg"],
      [20, "mcg"],
    ],
    divider: "/",
    din: "02387883",
    quantity: [10, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Sandoz",
    name: "Amlodipine",
    dosage: [[10, "mg"]],
    divider: "/",
    din: "​02284391​",
    quantity: [75, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Apo",
    name: "Atorvastatin",
    dosage: [[40, "mg"]],
    divider: "/",
    din: "02295296",
    quantity: [36, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Sandoz",
    name: "Candesartan",
    dosage: [[32, "mg"]],
    divider: "/",
    din: "02417340",
    quantity: [48, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Humira",
    name: "",
    dosage: [
      [40, "mg"],
      [0.8, "mL"],
    ],
    divider: "/",
    din: "02258595​",
    quantity: [120, "mg"],
    standardQuantity: 10,
  },
  {
    brand: "Sandoz",
    name: "Metformin",
    dosage: [[500, "mg"]],
    divider: "/",
    din: "02246820",
    quantity: [175, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Apo",
    name: "Mometasone",
    dosage: [[50, "mcg"]],
    divider: "/",
    din: "02403587",
    quantity: [9, "PACK"],
    standardQuantity: 10,
  },
  {
    brand: "Jamp",
    name: "Pantoprazole",
    dosage: [[40, "mg"]],
    divider: "/",
    din: "02357054​",
    quantity: [90, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Oxycontin",
    name: "",
    dosage: [[10, "mg"]],
    divider: "/",
    din: "02240131",
    quantity: [42, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Sandoz",
    name: "Ramipril",
    dosage: [[2.5, "mg"]],
    divider: "/",
    din: "02355922​",
    quantity: [56, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Crestor",
    name: "Rosuvastatin",
    dosage: [[5, "mg"]],
    divider: "/",
    din: "02355922",
    quantity: [38, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Teva",
    name: "Salbutamol",
    dosage: [[100, "mcg"]],
    divider: "/",
    din: "02326450",
    quantity: [700, "mcg"],
    standardQuantity: 10,
  },
  {
    brand: "Shingrix",
    name: "",
    dosage: [
      [50, "mcg"],
      [0.5, "mL"],
    ],
    divider: "/",
    din: "02468425​",
    quantity: [4, "PACK"],
    standardQuantity: 10,
  },
  {
    brand: "Sythroid",
    name: "",
    dosage: [[175, "mcg"]],
    divider: "/",
    din: "02172135​",
    quantity: [114, "TAB"],
    standardQuantity: 10,
  },
  {
    brand: "Vyvanse",
    name: "",
    dosage: [[60, "mg"]],
    divider: "/",
    din: "02347172",
    quantity: [73, "CAP"],
    standardQuantity: 10,
  },
];

export default DrugInventoryList;
