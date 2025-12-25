// ===============================
// IMAGE IMPORTS
// ===============================
import roInstallation from "../assets/servicesPhotos/ro installation.jpeg";
import repairMaintenance from "../assets/servicesPhotos/repaire and maintenance.jpg";
import amcPlans from "../assets/servicesPhotos/amc plans images.jpeg";
import filterReplacement from "../assets/servicesPhotos/filter replacement images.png";

import customerCareService from "../assets/servicesPhotos/customer care service.jpeg";
import routineService from "../assets/servicesPhotos/routeen service.webp";
import newSalesService from "../assets/servicesPhotos/new sales images.jpeg";
import waterTreatmentService from "../assets/servicesPhotos/8.png";

// ===============================
// SERVICES DATA
// ===============================
export const services = [
  // 1️⃣ RO Installation
  {
    id: "install",
    title: "RO Installation",
    description:
      "Professional RO and UV/UF purifier installation with proper inlet/outlet and TDS calibration.",
    features: [
      "Site inspection",
      "Leak-proof fittings",
      "TDS calibration",
      "Usage guidance",
    ],
    icon: "install",
    image: roInstallation,
  },

  // 2️⃣ Repair & Maintenance
  {
    id: "repair",
    title: "Repair & Maintenance",
    description:
      "Quick diagnosis and on-spot repair for low flow, bad taste, leakage, or startup issues.",
    features: [
      "Certified technicians",
      "Genuine spares",
      "90-day service warranty",
    ],
    icon: "repair",
    image: repairMaintenance,
  },

  // 3️⃣ AMC Plans
  {
    id: "amc",
    title: "AMC Plans",
    description:
      "Annual Maintenance Contracts for worry-free ownership and predictable costs.",
    features: [
      "2–3 free services",
      "Priority support",
      "Filter set included",
    ],
    icon: "shield",
    image: amcPlans,
  },

  // 4️⃣ Filter Replacement
  {
    id: "filter",
    title: "Filter Replacement",
    description:
      "Original pre-filter, sediment, carbon, RO membrane, and post-carbon replacements.",
    features: [
      "Genuine filters",
      "Performance guaranteed",
      "Better taste & clarity",
    ],
    icon: "filter",
    image: filterReplacement,
  },

  // 5️⃣ Domestic RO Plant Service
  {
    id: "domestic-ro-plant",
    title: "Domestic RO Plant Service",
    description:
      "Complete service, maintenance, and support for 50–100 LPH RO plants ensuring consistent water quality and long-term performance.",
    features: [
      "Complete system inspection",
      "Pre-filter & membrane cleaning",
      "Pump & electrical component check",
      "Pressure & flow calibration",
      "TDS & water quality testing",
      "Leakage & pipe connection inspection",
      "Affordable service packages",
      "Recommended every 3–6 months",
    ],
    icon: "home",
    image: customerCareService,
  },

  // 6️⃣ Commercial RO Plant Service
  {
    id: "commercial-ro-plant",
    title: "Commercial RO Plant Service",
    description:
      "Professional service and maintenance for commercial RO plants ensuring uninterrupted pure water supply for business operations.",
    features: [
      "Complete plant inspection & troubleshooting",
      "Pre-filter, membrane & media servicing",
      "High-pressure pump & electrical system check",
      "Pressure, flow & TDS calibration",
      "Leakage repair & pipeline maintenance",
      "Water quality performance testing",
    ],
    icon: "building",
    image: routineService,
  },

  // 7️⃣ Industrial RO Plant Maintenance
  {
    id: "industrial-ro-plant",
    title: "Industrial RO Plant Maintenance",
    description:
      "Comprehensive maintenance and support for large-scale industrial RO plants ensuring efficient operation and minimal downtime.",
    features: [
      "Comprehensive system inspection",
      "Pre-treatment, membrane & filter maintenance",
      "High-capacity pump & motor checks",
      "Electrical panel & automation inspection",
      "Pressure, flow & TDS calibration",
      "Leak detection & pipeline servicing",
      "Water quality testing & performance optimization",
    ],
    icon: "factory",
    image: newSalesService,
  },

  // 8️⃣ Water Treatment Plant Services
  {
    id: "water-treatment-plant",
    title: "Water Treatment Plant Services",
    description:
      "Complete maintenance and operational support for WTP, DM plants, and STP plants ensuring optimal water quality and uninterrupted service.",
    features: [
      "Complete plant inspection & troubleshooting",
      "Pre-treatment system servicing",
      "DM plant operation & maintenance",
      "STP servicing & membrane checks",
      "Pumps, motors & electrical panel inspection",
      "Pressure, flow & water quality monitoring",
      "Preventive maintenance & performance optimization",
      "Leak detection & pipeline maintenance",
    ],
    icon: "droplet",
    image: waterTreatmentService,
  },
];
