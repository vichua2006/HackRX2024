import { Patient } from "../PrescriptionCard";

const PatientList: Patient[] = [
  {
    patientName: "Huang, Victor",
    dob: "2006/10/01",
    sex: "Male",
    activeRx: "1234567",
    medication: [
      ["Meth", 20],
      ["Coke", 5],
      ["Fent", 10],
    ],
    due: "1 day ago",
  },
  {
    patientName: "Jeon, Amelia",
    dob: "2006/02/21",
    sex: "Female",
    activeRx: "8910111",
    medication: [["Meth", 20]],
    due: "5 hrs ago",
  },
  {
    patientName: "Katreddy, Rohan",
    dob: "2006/10/22",
    sex: "Male",
    activeRx: "8008135",
    medication: [
      ["Meth", 20],
      ["Coke", 9],
      ["Fent", 16],
      ["Fent", 35],
      ["Meth", 20],
    ],
    due: "3h",
  },
  {
    patientName: "Kulshestha, Aadi",
    dob: "2006/09/15",
    sex: "Male",
    activeRx: "1617181",
    medication: [
      ["Meth", 420],
      ["Coke", 69],
    ],
    due: "1 day",
  },
];

export default PatientList;
