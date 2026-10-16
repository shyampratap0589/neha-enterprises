// Comprehensive Product Database for Neha Enterprises - Pneumatics & Industrial Tools
// Serving Automation & Manufacturing Industries Since 2006
// Features Full Pneumatics Catalog + Air Compressors + 500+ Size & Fitting Configurations

const PRODUCTS_DATA = [
  // =========================================================================
  // CATEGORY 1: INDUSTRIAL AIR COMPRESSORS
  // =========================================================================
  {
    id: "comp-piston-01",
    name: "Industrial Heavy-Duty Belt-Driven Piston Air Compressor",
    category: "compressors",
    categoryName: "Air Compressors",
    modelCode: "NE-AC-5HP-220L",
    price: 38500,
    originalPrice: 44000,
    rating: 4.9,
    reviewsCount: 46,
    inStock: true,
    badge: "Industrial Heavy Duty",
    image: "images/air-compressor-piston.svg",
    images: ["images/air-compressor-piston.svg"],
    shortDesc: "V-Twin cast iron pump air compressor with 100% copper motor, heavy-gauge receiver tank, and automatic pressure switch.",
    fullDesc: "Engineered for continuous workshop and factory duty. Features a heavy cast iron V-twin pump cylinder block for rapid heat dissipation, Swedish steel reed valves, heavy balanced flywheel with deep cooling fan blades, automatic unloader pressure switch, and ASME standard air tank with safety pop-off valve.",
    features: [
      "100% Heavy cast iron pump block for extreme durability and long service life",
      "Automatic unloader pressure switch with built-in dial pressure gauge",
      "Large finned aftercooler copper pipe reduces moisture condensation",
      "Supplied with vibration damping rubber feet / heavy caster wheels"
    ],
    variantsLabel: "Select Motor Power & Tank Capacity:",
    variants: [
      { name: "3 HP Motor • 150L Tank (12 CFM)", code: "NE-AC-3HP-150L", price: 29500 },
      { name: "5 HP Motor • 220L Tank (18 CFM)", code: "NE-AC-5HP-220L", price: 38500, selected: true },
      { name: "7.5 HP Motor • 300L Tank (26 CFM)", code: "NE-AC-7.5HP-300L", price: 52000 },
      { name: "10 HP Motor • 500L Tank (38 CFM)", code: "NE-AC-10HP-500L", price: 68000 },
      { name: "15 HP Two-Stage • 500L Tank (52 CFM)", code: "NE-AC-15HP-500L", price: 92000 }
    ],
    specifications: {
      "Motor Rating": "3 HP to 15 HP (3-Phase 415V / Single-Phase 220V)",
      "Tank Capacity": "150 Liters to 500 Liters Tested Air Tank",
      "Max Working Pressure": "10.0 ~ 12.5 Bar (145 ~ 180 PSI)",
      "Pump Type": "Cast Iron V-Twin / Multi-Stage Heavy Duty",
      "Air Delivery (FAD)": "12 to 52 CFM (340 to 1,470 L/min)",
      "Drive Type": "Belt Driven with V-Belt Mesh Safety Guard",
      "Warranty": "1 Year Commercial Warranty by Neha Enterprises"
    },
    applications: ["Automobile service centers", "CNC machine air supply", "Paint spray booths", "Pneumatic automation plants"]
  },
  {
    id: "comp-screw-02",
    name: "Intelligent Industrial Rotary Screw Air Compressor (Acoustic Enclosure)",
    category: "compressors",
    categoryName: "Air Compressors",
    modelCode: "NE-RSC-15HP",
    price: 135000,
    originalPrice: 155000,
    rating: 5.0,
    reviewsCount: 28,
    inStock: true,
    badge: "100% Continuous Duty",
    image: "images/air-compressor-screw.svg",
    images: ["images/air-compressor-screw.svg"],
    shortDesc: "High-efficiency rotary screw air compressor with intelligent PLC touchscreen, low noise cabinet, and continuous 24/7 duty.",
    fullDesc: "Designed for modern manufacturing facilities requiring uninterrupted compressed air supply. Features German-engineered asymmetric screw air-end rotors, direct or high-efficiency belt drive, multi-stage oil separator delivering <3 ppm oil carryover, and microprocessor controller with automatic load/unload cycles.",
    features: [
      "24/7 Continuous duty operation without thermal shutdown",
      "Smart PLC touch screen monitors pressure, temperature & maintenance hours",
      "Ultra-low noise level (62-68 dB) - safe for indoor factory placement",
      "Over 30% electrical energy savings compared to conventional piston compressors"
    ],
    variantsLabel: "Select Power Rating:",
    variants: [
      { name: "10 HP (7.5 kW) • 38 CFM @ 8 Bar", code: "NE-RSC-10HP", price: 110000 },
      { name: "15 HP (11 kW) • 56 CFM @ 8 Bar", code: "NE-RSC-15HP", price: 135000, selected: true },
      { name: "20 HP (15 kW) • 78 CFM @ 8 Bar", code: "NE-RSC-20HP", price: 165000 },
      { name: "30 HP (22 kW) • 120 CFM @ 8 Bar", code: "NE-RSC-30HP", price: 220000 },
      { name: "50 HP (37 kW) • 210 CFM @ 8 Bar", code: "NE-RSC-50HP", price: 340000 }
    ],
    specifications: {
      "Power Range": "10 HP to 50 HP (7.5 kW to 37 kW)",
      "Working Pressure": "8 Bar / 10 Bar / 13 Bar",
      "Cooling Method": "Air Cooled with High-Efficiency Oil Cooler",
      "Noise Level": "62 ~ 68 dB(A)",
      "Control System": "Microcomputer PLC Controller with RS485",
      "Oil Residual": "Less than 3 ppm"
    },
    applications: ["Pharmaceutical plants", "Textile spinning mills", "Electronics assembly", "Packaging & bottling plants"]
  },
  {
    id: "comp-silent-03",
    name: "Oil-Free Ultra-Silent Dental & Laboratory Air Compressor",
    category: "compressors",
    categoryName: "Air Compressors",
    modelCode: "NE-OFC-2HP-50L",
    price: 18500,
    originalPrice: 22500,
    rating: 4.8,
    reviewsCount: 39,
    inStock: true,
    badge: "58 dB Ultra Quiet",
    image: "images/air-compressor-silent.svg",
    images: ["images/air-compressor-silent.svg"],
    shortDesc: "100% oil-free clean air compressor with internal epoxy-coated tank for medical clinics, dental chairs, food prep, and labs.",
    fullDesc: "Generates pure, contaminant-free air with zero lubricating oil vapor. Twin direct-drive copper motors with self-lubricating PTFE composite piston rings operate at a whisper-quiet 58 decibels, allowing indoor installation without disturbing personnel.",
    features: [
      "100% Oil-free air output - zero oil mist contamination",
      "Epoxy powder-coated interior tank prevents internal rust formation",
      "Whisper quiet operation at 58 dB - installable directly under desks",
      "Thermal overload motor protector with automatic pressure start/stop"
    ],
    variantsLabel: "Select Motor & Tank Size:",
    variants: [
      { name: "1 HP (750W) • 30L Tank (60 L/min)", code: "NE-OFC-1HP-30L", price: 13500 },
      { name: "2 HP (1500W) • 50L Tank (130 L/min)", code: "NE-OFC-2HP-50L", price: 18500, selected: true },
      { name: "3 HP (2250W) • 100L Tank (240 L/min)", code: "NE-OFC-3HP-100L", price: 29000 }
    ],
    specifications: {
      "Motor Power": "1 HP to 3 HP (100% Pure Copper Wound)",
      "Tank Capacity": "30 Liters, 50 Liters, 100 Liters",
      "Noise Level": "58 dB(A) (Quiet as conversation)",
      "Working Pressure": "7.0 ~ 8.0 Bar (116 PSI)",
      "Tank Coating": "Antibacterial Rust-Free Internal Epoxy"
    },
    applications: ["Dental clinics", "Pathology labs", "Electronics soldering", "Food & beverage dispensing"]
  },

  // =========================================================================
  // CATEGORY 2: PNEUMATIC AIR TOOLS
  // =========================================================================
  {
    id: "tool-iw-04",
    name: "1/2\" Heavy-Duty Twin Hammer Pneumatic Air Impact Wrench (850 Nm)",
    category: "air-tools",
    categoryName: "Pneumatic Tools",
    modelCode: "NE-IW-850TH",
    price: 4650,
    originalPrice: 5850,
    rating: 5.0,
    reviewsCount: 68,
    inStock: true,
    badge: "Bestseller Tool",
    image: "images/impact-wrench.jpg",
    images: ["images/impact-wrench.jpg"],
    shortDesc: "Industrial grade 1/2\" impact wrench delivering instantaneous 850 Nm torque with twin-hammer clutch mechanism for tyre shops and assembly.",
    fullDesc: "Engineered with precision hardened alloy steel twin-hammer impact mechanism for smooth, balanced, high-torque blows. Features a lightweight composite body with ergonomic soft rubber grip, variable forward/reverse 3-position torque regulator, and downward handle exhaust with built-in silencer.",
    features: [
      "850 Nm (627 ft-lb) maximum breakaway torque",
      "Twin hammer clutch mechanism for maximum power-to-weight ratio",
      "Composite housing weighs only 2.1 kg to eliminate operator fatigue",
      "Ergonomic one-handed forward/reverse speed selector",
      "Standard 1/4\" BSP brass air inlet fitting included"
    ],
    variantsLabel: "Select Drive Size & Torque Output:",
    variants: [
      { name: "1/2\" Drive • 850 Nm Twin Hammer (Standard Duty)", code: "NE-IW-850TH", price: 4650, selected: true },
      { name: "1/2\" Drive • 1,200 Nm Extreme Torque (Super Duty)", code: "NE-IW-1200TH", price: 6200 },
      { name: "3/4\" Drive • 1,600 Nm Heavy Industrial Duty", code: "NE-IW-1600TH", price: 9800 }
    ],
    specifications: {
      "Square Drive": "1/2 Inch (12.7 mm) / 3/4 Inch",
      "Max Torque": "850 Nm to 1,600 Nm",
      "Free Speed": "7,500 RPM",
      "Mechanism": "Balanced Twin Hammer Clutch",
      "Operating Air Pressure": "6.2 ~ 6.5 Bar (90 PSI)",
      "Air Consumption": "4.8 CFM (136 L/min)",
      "Weight": "2.1 Kg"
    },
    applications: ["Automobile tyre service shops", "Truck suspension repair", "Heavy machinery bolting", "Fabrication plants"]
  },
  {
    id: "tool-truck-05",
    name: "1\" Heavy-Duty Truck & Mining Pneumatic Air Impact Wrench (2,600 Nm)",
    category: "air-tools",
    categoryName: "Pneumatic Tools",
    modelCode: "NE-IW-1IN-2600",
    price: 14500,
    originalPrice: 17500,
    rating: 4.9,
    reviewsCount: 33,
    inStock: true,
    badge: "2,600 Nm Extreme Torque",
    image: "images/truck-impact-wrench.svg",
    images: ["images/truck-impact-wrench.svg"],
    shortDesc: "Super-torque 1-inch drive pneumatic wrench with 6\" extended anvil for commercial truck, bus, trailer, and tractor wheel lug nuts.",
    fullDesc: "Built for the heaviest commercial vehicle applications. High-strength alloy steel hammer mechanism delivers 2,600 Nm of brute torque. Equipped with an ergonomic side D-handle for two-handed control, inside safety trigger, and 6-inch extended anvil designed specifically to reach deep-dish dual truck rear wheels.",
    features: [
      "2,600 Nm (1,917 ft-lb) torque busts frozen and rusted heavy truck nuts",
      "6-Inch extended anvil easily reaches deep inner dual rear truck wheels",
      "Ergonomic auxiliary side D-handle for stable two-handed operation",
      "Heavy cast steel nose cone with 1/2\" high-flow air inlet"
    ],
    variantsLabel: "Select Anvil Style:",
    variants: [
      { name: "1\" Drive • 6\" Extended Long Anvil (Truck/Bus)", code: "NE-IW-1IN-LONG", price: 14500, selected: true },
      { name: "1\" Drive • Short Standard Anvil (Industrial Press)", code: "NE-IW-1IN-SHORT", price: 13200 }
    ],
    specifications: {
      "Square Drive": "1 Inch (25.4 mm)",
      "Max Working Torque": "2,600 Nm (1,917 ft-lb)",
      "Anvil Length": "6 Inch (150 mm) Extended Anvil",
      "Free Speed": "4,200 RPM",
      "Air Pressure": "8.0 ~ 10.0 Bar",
      "Inlet Thread": "1/2\" BSP High Flow",
      "Weight": "11.5 Kg"
    },
    applications: ["Heavy truck tyre shops", "Trailer & bus fleet workshops", "Mining & earthmoving machinery", "Railway maintenance"]
  },
  {
    id: "tool-dg-06",
    name: "1/4\" High-Speed Precision Pneumatic Air Die Grinder (22,000 RPM)",
    category: "air-tools",
    categoryName: "Pneumatic Tools",
    modelCode: "NE-DG-22K",
    price: 1850,
    originalPrice: 2350,
    rating: 4.9,
    reviewsCount: 42,
    inStock: true,
    badge: "Precision Deburring",
    image: "images/air-die-grinder.jpg",
    images: ["images/air-die-grinder.jpg"],
    shortDesc: "High-speed precision straight pneumatic die grinder for weld dressing, porting, deburring, and metal polishing.",
    fullDesc: "Equipped with high-precision ball bearings minimizing run-out for ultra-smooth high-speed rotation up to 22,000 RPM. Features an integrated safety throttle lock lever, rear exhaust directing air away from workpieces, and hardened steel collet.",
    features: [
      "Hardened 1/4\" (6mm) collet chuck with 1/8\" (3mm) adaptor sleeve",
      "Safety lock-off throttle lever prevents accidental start-up",
      "Rear exhaust with internal silencer for quiet workshop operation"
    ],
    variantsLabel: "Select Tool Head Configuration:",
    variants: [
      { name: "Straight Inline Body • 22,000 RPM", code: "NE-DG-22K-STR", price: 1850, selected: true },
      { name: "90-Degree Right Angle Head • 20,000 RPM", code: "NE-DG-90A", price: 2350 }
    ],
    specifications: {
      "Collet Size": "6 mm (1/4\") & 3 mm (1/8\")",
      "Free Speed": "20,000 ~ 22,000 RPM",
      "Working Pressure": "6.2 Bar (90 PSI)",
      "Weight": "0.68 Kg"
    },
    applications: ["Weld bead grinding", "Cylinder head porting", "Die & mold finishing", "Cast iron deburring"]
  },
  {
    id: "tool-rw-07",
    name: "1/2\" & 3/8\" Drive Industrial Pneumatic Air Ratchet Wrench",
    category: "air-tools",
    categoryName: "Pneumatic Tools",
    modelCode: "NE-AR-12-85",
    price: 2450,
    originalPrice: 3100,
    rating: 4.8,
    reviewsCount: 35,
    inStock: true,
    badge: "Compact Reach",
    image: "images/air-ratchet-wrench.jpg",
    images: ["images/air-ratchet-wrench.jpg"],
    shortDesc: "Slim-head pneumatic air ratchet for reaching engine compartments, machinery chassis, and tight assembly fasteners.",
    fullDesc: "Designed to speed up fastener removal in confined areas where standard impact guns cannot fit. Hardened ratchet head with forward/reverse thumb lever, paddle throttle, and knurled ergonomic aluminum body.",
    features: [
      "85 Nm maximum working torque for rapid bolting",
      "Compact low-profile ratchet head fits narrow spaces",
      "Easy thumb-flip forward and reverse direction switch"
    ],
    variantsLabel: "Select Drive Anvil Size:",
    variants: [
      { name: "1/2\" Square Drive (85 Nm)", code: "NE-AR-12-85", price: 2450, selected: true },
      { name: "3/8\" Square Drive (65 Nm)", code: "NE-AR-38-65", price: 2250 }
    ],
    specifications: {
      "Square Drive": "1/2\" (12.7mm) or 3/8\" (9.5mm)",
      "Max Torque": "65 to 85 Nm",
      "Free Speed": "160 RPM",
      "Weight": "1.2 Kg"
    },
    applications: ["Automotive engine bay maintenance", "Dashboard assembly", "Conveyor installation", "HVAC repair"]
  },
  {
    id: "tool-os-08",
    name: "5\" / 6\" Random Orbital Palm Air Sander (12,000 RPM)",
    category: "air-tools",
    categoryName: "Pneumatic Tools",
    modelCode: "NE-ROS-125",
    price: 3200,
    originalPrice: 3950,
    rating: 4.9,
    reviewsCount: 47,
    inStock: true,
    badge: "Swirl-Free Finish",
    image: "images/air-orbital-sander.jpg",
    images: ["images/air-orbital-sander.jpg"],
    shortDesc: "Vibration-damped palm air sander with 5mm orbit diameter for swirl-free automotive bodywork and woodworking.",
    fullDesc: "Ergonomic low-profile palm air sander designed for continuous duty in automotive paint refinishing and precision woodwork. Features a precision balanced counterweight for minimum hand vibration, speed adjustment thumb wheel, and Hook & Loop sanding pad.",
    features: [
      "Random orbital swirl-free sanding motion (5mm orbit)",
      "Drop-in motor cylinder for rapid maintenance",
      "Composite body with comfortable rubber teardrop palm grip"
    ],
    variantsLabel: "Select Sanding Pad Size & Vacuum Type:",
    variants: [
      { name: "5 Inch (125mm) Pad • Non-Vacuum", code: "NE-ROS-125-NV", price: 3200, selected: true },
      { name: "6 Inch (150mm) Pad • Central Vacuum Ready", code: "NE-ROS-150-CV", price: 3650 }
    ],
    specifications: {
      "Pad Diameter": "125 mm (5\") or 150 mm (6\")",
      "Orbit Diameter": "5.0 mm",
      "Free Speed": "12,000 RPM",
      "Weight": "0.92 Kg"
    },
    applications: ["Automotive paint prep", "Furniture woodwork", "Fiberglass smoothing", "Metal blend finishing"]
  },
  {
    id: "tool-ar-09",
    name: "Industrial Air-Hydraulic Blind Pop Riveter Gun (2.4mm - 4.8mm)",
    category: "air-tools",
    categoryName: "Pneumatic Tools",
    modelCode: "NE-HR-48PRO",
    price: 4100,
    originalPrice: 4950,
    rating: 4.8,
    reviewsCount: 29,
    inStock: true,
    badge: "High Traction Force",
    image: "images/air-riveter-gun.jpg",
    images: ["images/air-riveter-gun.jpg"],
    shortDesc: "Pneumatic-hydraulic blind rivet gun generating 1,050 kg pulling force with rear mandrel collector.",
    fullDesc: "Fast, fatigue-free riveting tool with pneumatic hydraulic pressure intensifier. Pulls rivets in a split second and automatically discharges spent pin mandrels into the rear transparent collection bottle.",
    features: [
      "1,050 kg (10.3 kN) traction power for aluminum, steel, and stainless rivets",
      "Includes 4 interchangeable nose tips: 2.4mm, 3.2mm, 4.0mm, and 4.8mm",
      "Transparent spent pin container keeps shop floor clean"
    ],
    variantsLabel: "Select Rivet Capacity Grade:",
    variants: [
      { name: "Standard Capacity: 2.4mm to 4.8mm Rivets", code: "NE-HR-48PRO", price: 4100, selected: true },
      { name: "Heavy Duty Capacity: 3.2mm to 6.4mm Rivets", code: "NE-HR-64PRO", price: 5800 }
    ],
    specifications: {
      "Rivet Capacity": "2.4mm to 4.8mm (Alu, Steel, SS)",
      "Traction Power": "1,050 kg (10.3 kN)",
      "Stroke Length": "18 mm",
      "Weight": "1.45 Kg"
    },
    applications: ["Sheet metal fabrication", "Bus body building", "Solar structure frames", "HVAC ducting assembly"]
  },
  {
    id: "tool-bg-10",
    name: "High-Pressure Variable Flow Pneumatic Air Blow Gun",
    category: "air-tools",
    categoryName: "Pneumatic Tools",
    modelCode: "NE-ABG-150",
    price: 360,
    originalPrice: 480,
    rating: 4.9,
    reviewsCount: 84,
    inStock: true,
    badge: "Workshop Essential",
    image: "images/air-blow-gun.jpg",
    images: ["images/air-blow-gun.jpg"],
    shortDesc: "Ergonomic industrial duster gun with angled steel reach nozzle and sensitive variable blast trigger.",
    fullDesc: "Delivers concentrated high-velocity air blast to blow away metal chips, swarf, dust, water, and debris from blind threaded holes and machinery cavities. Built with high impact POM body and solid brass inlet insert.",
    features: [
      "150mm / 300mm angled steel nozzle reaches deep recesses and crevices",
      "Sensitive progressive trigger lever meters air volume smoothly",
      "Solid brass 1/4\" BSP threaded inlet bushing"
    ],
    variantsLabel: "Select Nozzle Length:",
    variants: [
      { name: "Standard 150mm Angled Steel Wand", code: "NE-ABG-150", price: 360, selected: true },
      { name: "Extended 300mm Long Reach Wand", code: "NE-ABG-300", price: 440 },
      { name: "Safety Venturi Air Booster High Flow Nozzle", code: "NE-ABG-BOOST", price: 520 }
    ],
    specifications: {
      "Max Pressure": "1.2 MPa (12 Bar / 175 PSI)",
      "Inlet Thread": "1/4\" Male BSP Brass Fitting",
      "Body Material": "Reinforced POM Polymer"
    },
    applications: ["CNC milling chip clearing", "Lathe swarf removal", "Parts drying", "Machine dust blowing"]
  },

  // =========================================================================
  // CATEGORY 3: PNEUMATIC CYLINDERS & ACTUATORS (50+ SIZES)
  // =========================================================================
  {
    id: "cyl-sc-11",
    name: "ISO 15552 Standard Pneumatic Air Cylinder (SC Series)",
    category: "cylinders",
    categoryName: "Pneumatic Cylinders",
    modelCode: "SC-63x100-S",
    price: 2450,
    originalPrice: 2950,
    rating: 4.9,
    reviewsCount: 52,
    inStock: true,
    badge: "ISO Standard",
    image: "images/iso-cylinder.svg",
    images: ["images/iso-cylinder.svg"],
    shortDesc: "Tie-rod pneumatic cylinder built with hard anodized aluminum barrel and adjustable cushion chambers at both ends.",
    fullDesc: "The SC Series ISO 15552 Standard Cylinder is engineered for continuous manufacturing automation. Built with hard anodized aluminum tube, hard chrome-plated carbon steel piston rod, self-lubricating bearings, and magnetic ring for position switch detection.",
    features: [
      "Hard anodized aluminum profile barrel for minimal friction wear",
      "Adjustable air cushion needle valves on front and rear caps",
      "Magnetic piston ring built-in for magnetic reed switch sensing",
      "All bore sizes (32mm to 125mm) and stroke lengths (25mm to 1000mm) available!"
    ],
    variantsLabel: "Select Cylinder Bore Size & Stroke Length:",
    variants: [
      { name: "Bore 32mm x Stroke 50mm (G 1/8\")", code: "SC-32x50", price: 1450 },
      { name: "Bore 32mm x Stroke 100mm (G 1/8\")", code: "SC-32x100", price: 1650 },
      { name: "Bore 40mm x Stroke 100mm (G 1/4\")", code: "SC-40x100", price: 1850 },
      { name: "Bore 50mm x Stroke 100mm (G 1/4\")", code: "SC-50x100", price: 2150 },
      { name: "Bore 63mm x Stroke 100mm (G 3/8\")", code: "SC-63x100-S", price: 2450, selected: true },
      { name: "Bore 63mm x Stroke 200mm (G 3/8\")", code: "SC-63x200", price: 2850 },
      { name: "Bore 80mm x Stroke 100mm (G 3/8\")", code: "SC-80x100", price: 3450 },
      { name: "Bore 80mm x Stroke 250mm (G 3/8\")", code: "SC-80x250", price: 4100 },
      { name: "Bore 100mm x Stroke 200mm (G 1/2\")", code: "SC-100x200", price: 5400 },
      { name: "Bore 125mm x Stroke 300mm (G 1/2\")", code: "SC-125x300", price: 8200 },
      { name: "Custom Stroke (up to 1500mm)", code: "SC-CUSTOM-STROKE", price: 2950 }
    ],
    specifications: {
      "Bore Sizes Available": "32mm, 40mm, 50mm, 63mm, 80mm, 100mm, 125mm",
      "Strokes Available": "25mm up to 1500mm Custom",
      "Working Pressure": "0.1 ~ 1.0 MPa (1 ~ 10 Bar)",
      "Proof Pressure": "1.5 MPa (15 Bar)",
      "Action Type": "Double Acting / Magnetic Sensing",
      "Cushioning": "Adjustable Air Cushion Both Ends"
    },
    applications: ["Automated assembly lines", "Packaging machinery", "Conveyor stops and pushers", "Press fixtures"]
  },
  {
    id: "cyl-cq2-12",
    name: "Compact Space-Saving Air Cylinder (CQ2 Series)",
    category: "cylinders",
    categoryName: "Pneumatic Cylinders",
    modelCode: "CQ2B-40x25D",
    price: 1350,
    originalPrice: 1650,
    rating: 4.8,
    reviewsCount: 31,
    inStock: true,
    badge: "Space Saver",
    image: "images/compact-cylinder.svg",
    images: ["images/compact-cylinder.svg"],
    shortDesc: "Square profile short-stroke clamping cylinder designed for tight fixture envelopes and robotic end-effectors.",
    fullDesc: "Reduces overall cylinder length by more than 50% compared to standard tie-rod cylinders. Equipped with female threaded piston rod, flush-mount sensor slots on body, and rubber bumper cushioning.",
    features: [
      "Over 50% length reduction for ultra-tight machine spaces",
      "Direct through-hole body mounting or corner threads",
      "Built-in magnetic ring for magnetic sensor switches"
    ],
    variantsLabel: "Select Bore Size & Stroke:",
    variants: [
      { name: "Bore 20mm x Stroke 15mm (M5)", code: "CQ2B-20x15D", price: 850 },
      { name: "Bore 25mm x Stroke 20mm (M5)", code: "CQ2B-25x20D", price: 950 },
      { name: "Bore 32mm x Stroke 25mm (G 1/8\")", code: "CQ2B-32x25D", price: 1150 },
      { name: "Bore 40mm x Stroke 25mm (G 1/8\")", code: "CQ2B-40x25D", price: 1350, selected: true },
      { name: "Bore 50mm x Stroke 30mm (G 1/4\")", code: "CQ2B-50x30D", price: 1750 },
      { name: "Bore 63mm x Stroke 50mm (G 1/4\")", code: "CQ2B-63x50D", price: 2250 },
      { name: "Bore 80mm x Stroke 50mm (G 3/8\")", code: "CQ2B-80x50D", price: 3450 }
    ],
    specifications: {
      "Bore Sizes Available": "16, 20, 25, 32, 40, 50, 63, 80, 100mm",
      "Strokes Available": "5mm to 100mm",
      "Pressure Range": "0.05 ~ 1.0 MPa (0.5 ~ 10 Bar)",
      "Body Material": "Extruded Aluminum Alloy"
    },
    applications: ["Welding fixture clamping", "Robotic grippers", "Electronics test jigs", "Press tool hold-downs"]
  },
  {
    id: "cyl-mal-13",
    name: "Miniature Stainless Steel Rod Round Cylinder (MAL Series)",
    category: "cylinders",
    categoryName: "Pneumatic Cylinders",
    modelCode: "MAL-25x150-CA",
    price: 890,
    originalPrice: 1150,
    rating: 4.7,
    reviewsCount: 24,
    inStock: true,
    badge: "Stainless Rod",
    image: "images/mini-round-cylinder.svg",
    images: ["images/mini-round-cylinder.svg"],
    shortDesc: "Corrosion-resistant mini round barrel cylinder with rear pivot clevis mounting and threaded nose.",
    fullDesc: "The MAL round barrel cylinder provides high cycle speed in a slim circular profile. Designed with stainless steel piston rod, anodized end caps, and front/rear swivel pivot mounting options.",
    features: [
      "Corrosion-resistant stainless steel piston rod",
      "Rear clevis bracket included for pivoting stroke motion",
      "Front nose thread for panel and bracket mounting"
    ],
    variantsLabel: "Select Bore Size & Stroke Length:",
    variants: [
      { name: "Bore 16mm x Stroke 50mm (M5)", code: "MAL-16x50", price: 650 },
      { name: "Bore 20mm x Stroke 100mm (G 1/8\")", code: "MAL-20x100", price: 780 },
      { name: "Bore 25mm x Stroke 150mm (G 1/8\")", code: "MAL-25x150-CA", price: 890, selected: true },
      { name: "Bore 32mm x Stroke 200mm (G 1/8\")", code: "MAL-32x200", price: 1150 },
      { name: "Bore 40mm x Stroke 300mm (G 1/4\")", code: "MAL-40x300", price: 1550 }
    ],
    specifications: {
      "Bore Sizes Available": "16mm, 20mm, 25mm, 32mm, 40mm",
      "Strokes Available": "25mm to 500mm",
      "Pressure Range": "0.1 ~ 0.9 MPa",
      "Body Material": "Aluminum Barrel & Stainless Steel Rod"
    },
    applications: ["Conveyor sorting diverters", "Small packaging pushers", "Textile machinery", "Food sorting gates"]
  },

  // =========================================================================
  // CATEGORY 4: DIRECTIONAL & SOLENOID VALVES (MULTIPLE VOLTAGES & PORTS)
  // =========================================================================
  {
    id: "val-4v210-14",
    name: "5/2 & 5/3 Way Directional Pilot Solenoid Valve",
    category: "valves",
    categoryName: "Directional Valves",
    modelCode: "4V210-08",
    price: 780,
    originalPrice: 990,
    rating: 4.9,
    reviewsCount: 56,
    inStock: true,
    badge: "High Speed Cycle",
    image: "images/solenoid-valve.svg",
    images: ["images/solenoid-valve.svg"],
    shortDesc: "Industry-standard directional solenoid valve for pneumatic cylinders with manual test button and IP65 DIN connector.",
    fullDesc: "Features internally piloted spool with low starting pressure, IP65 dust/waterproof DIN 43650B coil connector with LED power indicator, and manual override test push-button for commissioning without electrical power.",
    features: [
      "Fast response cycle time (up to 5 cycles/sec)",
      "LED indicator light on DIN electrical plug",
      "Manual test override button for machine setup",
      "Available in 1/8\", 1/4\", 3/8\", 1/2\" ports and all standard coil voltages"
    ],
    variantsLabel: "Select Port Size, Action & Coil Voltage:",
    variants: [
      { name: "1/8\" Port (4V110-06) • 24V DC Single Coil", code: "4V110-06-24VDC", price: 690 },
      { name: "1/4\" Port (4V210-08) • 24V DC Single Coil", code: "4V210-08-24VDC", price: 780, selected: true },
      { name: "1/4\" Port (4V210-08) • 220V AC Single Coil", code: "4V210-08-220VAC", price: 780 },
      { name: "1/4\" Port (4V220-08) • 24V DC DOUBLE Coil", code: "4V220-08-24VDC", price: 1250 },
      { name: "1/4\" Port (4V230C-08) • 5/3 Way Closed Center", code: "4V230C-08-24VDC", price: 1550 },
      { name: "3/8\" Port (4V310-10) • 24V DC High Flow", code: "4V310-10-24VDC", price: 1100 },
      { name: "1/2\" Port (4V410-15) • 24V DC High Flow", code: "4V410-15-24VDC", price: 1650 }
    ],
    specifications: {
      "Port Sizes Available": "1/8\" (G1/8), 1/4\" (G1/4), 3/8\" (G3/8), 1/2\" (G1/2)",
      "Coil Voltages": "24V DC, 220V AC, 110V AC, 12V DC",
      "Working Pressure": "0.15 ~ 0.8 MPa (1.5 ~ 8.0 Bar)",
      "Protection Class": "IP65 Waterproof / Dustproof DIN"
    },
    applications: ["Double-acting cylinder control", "Process automation manifolds", "Filling machines", "Pneumatic presses"]
  },
  {
    id: "val-hand-15",
    name: "5/2 Way Manual Rotary Hand Lever Valve (4H Series)",
    category: "valves",
    categoryName: "Directional Valves",
    modelCode: "4H210-08",
    price: 620,
    originalPrice: 750,
    rating: 4.8,
    reviewsCount: 28,
    inStock: true,
    badge: "Zero Electricity",
    image: "images/hand-lever-valve.svg",
    images: ["images/hand-lever-valve.svg"],
    shortDesc: "Heavy-duty 5/2 directional control valve with ergonomic steel lever for manual press and jig operations.",
    fullDesc: "Operates 100% mechanically with zero electricity required, making it intrinsically safe in explosive or wet environments. Features smooth detent indexing and panel mounting threads.",
    features: [
      "Positive mechanical detent holds lever in position",
      "Zero electricity required - spark-free operation",
      "Ergonomic steel lever with rugged red knob"
    ],
    variantsLabel: "Select Port Size & Body Size:",
    variants: [
      { name: "1/4\" Port (4H210-08) • Standard Size", code: "4H210-08", price: 620, selected: true },
      { name: "3/8\" Port (4H310-10) • High Flow Size", code: "4H310-10", price: 920 },
      { name: "1/2\" Port (4H410-15) • Heavy Flow Size", code: "4H410-15", price: 1350 }
    ],
    specifications: {
      "Port Size Options": "G 1/4\", G 3/8\", G 1/2\" BSP",
      "Working Pressure": "0 ~ 0.8 MPa (0 ~ 8 Bar)",
      "Operating Angle": "± 45° Detent",
      "Body Material": "Die-Cast Aluminum Alloy"
    },
    applications: ["Manual press fixtures", "Workholding vices", "Woodworking clamps", "Test benches"]
  },
  {
    id: "val-foot-16",
    name: "Heavy-Duty Pneumatic Foot Treadle Pedal Valve (FV-420)",
    category: "valves",
    categoryName: "Directional Valves",
    modelCode: "FV-420",
    price: 980,
    originalPrice: 1250,
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    badge: "Safety Shield",
    image: "images/foot-valve.svg",
    images: ["images/foot-valve.svg"],
    shortDesc: "Industrial foot pedal pneumatic switch with bright yellow safety guard shield for hands-free machine operation.",
    fullDesc: "Allows machine operators to trigger pneumatic clamping, punching, or cutting fixtures with their foot while keeping hands completely free and safe. Features a protective steel safety hood preventing accidental tripping by falling objects.",
    features: [
      "Protective yellow safety shield cover prevents accidental step-on",
      "Non-slip ribbed treadle pedal for reliable foot engagement",
      "Cast aluminum floor plate with mounting bolt holes",
      "5/2 Way spring return or detent latching options"
    ],
    variantsLabel: "Select Action & Port Size:",
    variants: [
      { name: "5/2 Way Spring Return (Momentary) • 1/4\" Port", code: "FV-420-SPRING", price: 980, selected: true },
      { name: "5/2 Way Latching Lock Pedal • 1/4\" Port", code: "FV-420-LOCK", price: 1150 },
      { name: "3/2 Way Normally Closed Pedal • 1/4\" Port", code: "FV-320", price: 890 }
    ],
    specifications: {
      "Port Size": "G 1/4\" BSP Inlet, Outlet, Exhaust",
      "Working Pressure": "0 ~ 0.8 MPa (0 ~ 8 Bar)",
      "Safety Cover": "Heavy Cast Aluminum Yellow Hood",
      "Weight": "1.15 Kg"
    },
    applications: ["Pneumatic press stamping", "Jig and fixture clamping", "Spot welding pedals", "Bag sealing machines"]
  },

  // =========================================================================
  // CATEGORY 5: AIR PREPARATION (F.R.L. UNITS)
  // =========================================================================
  {
    id: "frl-3in1-17",
    name: "Complete F.R.L. Unit - Filter + Regulator + Lubricator (AC Series)",
    category: "air-prep",
    categoryName: "Air Preparation (F.R.L)",
    modelCode: "AC3000-03",
    price: 1850,
    originalPrice: 2300,
    rating: 4.9,
    reviewsCount: 48,
    inStock: true,
    badge: "Clean Air System",
    image: "images/frl-unit.svg",
    images: ["images/frl-unit.svg"],
    shortDesc: "3-stage modular air treatment unit: 5-micron water separator filter, pressure regulator with dial gauge, and micro-fog oil lubricator.",
    fullDesc: "Protects expensive pneumatic valves, cylinders, and air tools from moisture, pipe scale, rust, and internal friction wear. Features transparent polycarbonate bowls with steel protective guards, push-lock pressure adjustment knob, and modular mounting brackets.",
    features: [
      "5-Micron sintered filter element strips 99% moisture & particles",
      "Precision pressure regulator with built-in analogue dial gauge",
      "Micro-fog oil drip lubricator with sight dome and flow screw",
      "Heavy-duty modular brackets for rigid wall mounting"
    ],
    variantsLabel: "Select Port Thread & Flow Capacity:",
    variants: [
      { name: "1/4\" Port (AC2000-02) • Flow 500 L/min", code: "AC2000-02", price: 1450 },
      { name: "3/8\" Port (AC3000-03) • Flow 1,500 L/min", code: "AC3000-03", price: 1850, selected: true },
      { name: "1/2\" Port (AC4000-04) • Flow 3,000 L/min", code: "AC4000-04", price: 2350 },
      { name: "3/4\" Port (AC5000-06) • Flow 5,000 L/min", code: "AC5000-06", price: 3400 },
      { name: "1\" Port (AC5000-10) • Heavy Industrial 7,000 L/min", code: "AC5000-10", price: 4200 }
    ],
    specifications: {
      "Port Sizes Available": "1/4\", 3/8\", 1/2\", 3/4\", 1\" BSP",
      "Max Operating Pressure": "1.0 MPa (10 Bar / 145 PSI)",
      "Regulating Range": "0.05 ~ 0.85 MPa (0.5 ~ 8.5 Bar)",
      "Filtration Precision": "5 μm (Micron)",
      "Drain Options": "Manual or Automatic Drain"
    },
    applications: ["Compressor air main distribution", "CNC machine air supply", "Air tool feed lines", "Pneumatic automation lines"]
  },

  // =========================================================================
  // CATEGORY 6: PNEUMATIC FITTINGS & CONNECTORS (100+ COMBINATIONS)
  // =========================================================================
  {
    id: "fit-all-18",
    name: "Brass Nickel-Plated One-Touch Push-In Fittings (Straight, Elbow, Tee, Union)",
    category: "fittings",
    categoryName: "Fittings & Tubing",
    modelCode: "PC / PL / PU / PE Series (Pack of 10)",
    price: 320,
    originalPrice: 400,
    rating: 4.9,
    reviewsCount: 92,
    inStock: true,
    badge: "10-Pack All Sizes",
    image: "images/push-in-fittings.svg",
    images: ["images/push-in-fittings.svg"],
    shortDesc: "One-touch quick connect pneumatic fittings with stainless steel gripping collet and pre-coated Teflon thread sealant.",
    fullDesc: "Instant connection and disconnection for PU and Nylon air tubing. Precision engineered with nickel-plated brass body, POM release collar, and pre-applied PTFE thread sealant that eliminates Teflon tape.",
    features: [
      "Pre-coated white PTFE thread sealant for 100% leak-proof sealing",
      "Stainless steel teeth securely grip tube without cutting or scoring",
      "Full 360° rotating body allows easy wrench tightening in tight spaces",
      "Available in all tube sizes (4, 6, 8, 10, 12, 16mm) and threads (1/8\", 1/4\", 3/8\", 1/2\")"
    ],
    variantsLabel: "Select Fitting Style & Tube/Thread Size (Pack of 10):",
    variants: [
      { name: "PC 6-01 (6mm Tube x 1/8\" Thread) Male Straight", code: "PC-6-01-P10", price: 280 },
      { name: "PC 6-02 (6mm Tube x 1/4\" Thread) Male Straight", code: "PC-6-02-P10", price: 300 },
      { name: "PC 8-02 (8mm Tube x 1/4\" Thread) Male Straight", code: "PC-8-02-P10", price: 320, selected: true },
      { name: "PC 8-03 (8mm Tube x 3/8\" Thread) Male Straight", code: "PC-8-03-P10", price: 360 },
      { name: "PC 10-02 (10mm Tube x 1/4\" Thread) Male Straight", code: "PC-10-02-P10", price: 380 },
      { name: "PC 12-04 (12mm Tube x 1/2\" Thread) Male Straight", code: "PC-12-04-P10", price: 490 },
      { name: "PL 8-02 (8mm Tube x 1/4\" Thread) 90° Male Elbow", code: "PL-8-02-P10", price: 390 },
      { name: "PL 10-03 (10mm Tube x 3/8\" Thread) 90° Male Elbow", code: "PL-10-03-P10", price: 460 },
      { name: "PU-8 (8mm to 8mm) Straight Equal Union", code: "PU-8-P10", price: 290 },
      { name: "PE-8 (8mm 3-Way) Equal Tee Union", code: "PE-8-P10", price: 380 },
      { name: "PY-8 (8mm 3-Way) Equal Y-Splitter Union", code: "PY-8-P10", price: 390 }
    ],
    specifications: {
      "Tube Outer Diameters": "4mm, 6mm, 8mm, 10mm, 12mm, 16mm",
      "Thread Sizes": "M5, G 1/8\", G 1/4\", G 3/8\", G 1/2\" Male BSP",
      "Body Material": "Nickel-Plated Brass & POM Collar",
      "Working Pressure": "0 ~ 1.0 MPa (0 ~ 10 Bar)",
      "Package Quantity": "10 Pieces per Pack"
    },
    applications: ["Valve manifolds", "Cylinder port piping", "Pneumatic control panels", "Machine air feeds"]
  },

  // =========================================================================
  // CATEGORY 7: PNEUMATIC TUBING & HOSES
  // =========================================================================
  {
    id: "fit-pu-19",
    name: "Industrial Grade Polyurethane (PU) Pneumatic Tube Coil (100 Meters)",
    category: "fittings",
    categoryName: "Fittings & Tubing",
    modelCode: "PU-8x5-100M",
    price: 1450,
    originalPrice: 1800,
    rating: 4.9,
    reviewsCount: 54,
    inStock: true,
    badge: "100% Virgin Ether PU",
    image: "images/pu-hose-coil.svg",
    images: ["images/pu-hose-coil.svg"],
    shortDesc: "100% virgin polyurethane flexible pneumatic hose with exceptional bend radius, kink memory, and burst endurance.",
    fullDesc: "Extruded from high-grade German polyurethane granules for extreme elasticity and chemical endurance. Guarantees consistent wall thickness for leak-proof sealing with one-touch push-in fittings.",
    features: [
      "Superior flexibility down to -20°C without cracking or hardening",
      "Outstanding kink recovery memory under continuous factory flexing",
      "High chemical, compressor oil, and abrasion resistance"
    ],
    variantsLabel: "Select Tube Outer/Inner Diameter & Color:",
    variants: [
      { name: "4mm OD x 2.5mm ID (100m Roll) • Blue", code: "PU-4x2.5-100M", price: 850 },
      { name: "6mm OD x 4.0mm ID (100m Roll) • Blue", code: "PU-6x4-100M", price: 1100 },
      { name: "8mm OD x 5.0mm ID (100m Roll) • Blue", code: "PU-8x5-100M-BL", price: 1450, selected: true },
      { name: "8mm OD x 5.0mm ID (100m Roll) • Orange", code: "PU-8x5-100M-OR", price: 1450 },
      { name: "8mm OD x 5.0mm ID (100m Roll) • Transparent Clear", code: "PU-8x5-100M-TR", price: 1450 },
      { name: "10mm OD x 6.5mm ID (100m Roll) • Blue", code: "PU-10x6.5-100M", price: 1950 },
      { name: "12mm OD x 8.0mm ID (100m Roll) • Blue", code: "PU-12x8-100M", price: 2600 },
      { name: "16mm OD x 12.0mm ID (100m Roll) • Blue", code: "PU-16x12-100M", price: 4200 }
    ],
    specifications: {
      "Tube Diameters Available": "4x2.5mm, 6x4mm, 8x5mm, 10x6.5mm, 12x8mm, 16x12mm",
      "Coil Length": "100 Meters Full Roll (200m on request)",
      "Colors Available": "Industrial Blue, Safety Orange, Transparent, Black",
      "Working Pressure": "0.8 MPa (8 Bar at 23°C)",
      "Bursting Pressure": "2.8 MPa (28 Bar)"
    },
    applications: ["Factory air distribution", "Robotic cable drag chains", "Air tool hose lines", "Pneumatic automation systems"]
  },
  {
    id: "hose-recoil-20",
    name: "Heavy-Duty Spiral PU Recoil Spring Air Hose with Brass Swivel Couplers",
    category: "fittings",
    categoryName: "Fittings & Tubing",
    modelCode: "NE-RH-8-10M",
    price: 680,
    originalPrice: 850,
    rating: 4.8,
    reviewsCount: 41,
    inStock: true,
    badge: "Self-Retracting",
    image: "images/recoil-air-hose.svg",
    images: ["images/recoil-air-hose.svg"],
    shortDesc: "Self-retracting coil air hose with 360-degree brass swivel fittings and spring bend restrictors.",
    fullDesc: "Eliminates tangled hoses on workshop floors. Extends easily to full working reach and snaps back neatly into a compact coil. Features heavy spring bend restrictors at both ends to prevent kink damage at connection points.",
    features: [
      "Memory spring coil stretches effortlessly and auto-retracts",
      "Steel wire spring bend restrictors prevent hose crimping",
      "Factory assembled with 1/4\" brass male swivel coupler"
    ],
    variantsLabel: "Select Hose Working Length:",
    variants: [
      { name: "6 Meter (20 Ft) Working Length • 8x5mm Hose", code: "NE-RH-8-6M", price: 520 },
      { name: "10 Meter (33 Ft) Working Length • 8x5mm Hose", code: "NE-RH-8-10M", price: 680, selected: true },
      { name: "15 Meter (50 Ft) Working Length • 8x5mm Hose", code: "NE-RH-8-15M", price: 890 }
    ],
    specifications: {
      "Hose Dimensions": "8mm Outer Diameter x 5mm Inner Diameter",
      "Working Lengths": "6 Meters, 10 Meters, 15 Meters",
      "End Fittings": "1/4\" BSP Male Swivel with Spring Guard",
      "Working Pressure": "0.8 MPa (8 Bar)"
    },
    applications: ["Tyre inflation stations", "Assembly line tool balancers", "Workbench air guns", "Paint spray lines"]
  },

  // =========================================================================
  // CATEGORY 8: COMPRESSOR ACCESSORIES & SILENCERS
  // =========================================================================
  {
    id: "acc-sil-21",
    name: "Porous Sintered Bronze Brass Pneumatic Exhaust Silencer / Muffler (Pack of 10)",
    category: "accessories",
    categoryName: "Compressor Accessories",
    modelCode: "BSL-02",
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 65,
    inStock: true,
    badge: "Noise Reduction",
    image: "images/brass-silencer.svg",
    images: ["images/brass-silencer.svg"],
    shortDesc: "Heavy sintered bronze mufflers reduces exhausting air blast hiss while preventing dust ingress into solenoid valves.",
    fullDesc: "Screws directly into solenoid valve exhaust ports (R and S ports). Drops ear-splitting pneumatic blast noise from 95dB down to under 70dB for a safer workshop environment.",
    features: [
      "Reduces high-decibel exhaust blast noise by up to 25-30 dB",
      "Prevents dirt, swarf, and coolant ingress into valve internal spools",
      "Standard hex wrench body for simple tightening"
    ],
    variantsLabel: "Select Thread Size (Pack of 10):",
    variants: [
      { name: "1/8\" BSP Thread (BSL-01) Pack of 10", code: "BSL-01-P10", price: 280 },
      { name: "1/4\" BSP Thread (BSL-02) Pack of 10", code: "BSL-02-P10", price: 350, selected: true },
      { name: "3/8\" BSP Thread (BSL-03) Pack of 10", code: "BSL-03-P10", price: 490 },
      { name: "1/2\" BSP Thread (BSL-04) Pack of 10", code: "BSL-04-P10", price: 680 },
      { name: "3/4\" BSP Thread (BSL-06) Pack of 10", code: "BSL-06-P10", price: 1150 }
    ],
    specifications: {
      "Thread Sizes": "1/8\", 1/4\", 3/8\", 1/2\", 3/4\", 1\" BSP Male",
      "Filter Element": "Sintered Porous Bronze (50 μm)",
      "Base Material": "Solid Machined Hex Brass",
      "Package Qty": "10 Units per Pack"
    },
    applications: ["Solenoid valve exhaust ports", "Air cylinder exhaust vents", "Pneumatic clutches", "Vacuum generators"]
  },
  {
    id: "acc-pg-22",
    name: "0-10 Bar (0-150 PSI) Stainless Case Back Mount Pressure Gauge",
    category: "accessories",
    categoryName: "Compressor Accessories",
    modelCode: "NE-PG-50B",
    price: 290,
    originalPrice: 380,
    rating: 4.8,
    reviewsCount: 44,
    inStock: true,
    badge: "Accurate Damping",
    image: "images/pressure-gauge.svg",
    images: ["images/pressure-gauge.svg"],
    shortDesc: "High accuracy analogue Bourdon tube pressure gauge for compressor tanks, regulators, and distribution manifolds.",
    fullDesc: "Features dual-scale Bar and PSI dials with shatterproof acrylic lens and stainless steel outer casing. High-stability brass internal movement.",
    features: [
      "Dual pressure scale: 0-10 Bar & 0-150 PSI",
      "Durable 304 stainless steel housing",
      "Brass 1/4\" BSP center back or bottom connection thread"
    ],
    variantsLabel: "Select Dial Diameter, Mount & Pressure Range:",
    variants: [
      { name: "50mm Dial • Back Center Mount (0-10 Bar / 150 PSI)", code: "NE-PG-50B-10", price: 290, selected: true },
      { name: "50mm Dial • Bottom Radial Mount (0-10 Bar / 150 PSI)", code: "NE-PG-50R-10", price: 290 },
      { name: "63mm Dial • Back Center Mount (0-16 Bar / 230 PSI)", code: "NE-PG-63B-16", price: 390 },
      { name: "100mm Dial • High Accuracy Master Gauge (0-16 Bar)", code: "NE-PG-100-16", price: 750 }
    ],
    specifications: {
      "Dial Diameter": "50mm (2\"), 63mm (2.5\"), 100mm (4\")",
      "Pressure Ranges": "0 ~ 10 Bar (150 PSI) / 0 ~ 16 Bar (230 PSI)",
      "Connection": "G 1/4\" or G 3/8\" BSP Brass",
      "Accuracy": "Class 2.5 / Class 1.6"
    },
    applications: ["Air compressor tanks", "Pneumatic test rigs", "FRL units", "Distribution pipelines"]
  },
  {
    id: "acc-qc-23",
    name: "Quick Release Nitto-Type Heavy-Duty Pneumatic Coupler Set (SM + PM)",
    category: "accessories",
    categoryName: "Compressor Accessories",
    modelCode: "NE-QC-20-SET",
    price: 380,
    originalPrice: 480,
    rating: 4.9,
    reviewsCount: 58,
    inStock: true,
    badge: "Automatic Shutoff",
    image: "images/quick-coupler.svg",
    images: ["images/quick-coupler.svg"],
    shortDesc: "Self-sealing female quick coupler socket and hardened male plug for air tool line hookups.",
    fullDesc: "Industrial chrome-plated steel quick connector with ball-lock mechanism and spring-loaded shutoff valve. Auto-seals the air line whenever disconnected.",
    features: [
      "One-handed push-to-connect operation",
      "Hardened steel ball bearings prevent unintentional disconnection",
      "Built-in automatic shutoff check valve prevents air loss"
    ],
    variantsLabel: "Select Thread / Hose Barb Size (Set of Socket + Plug):",
    variants: [
      { name: "1/4\" Male BSP Thread (SM-20 + PM-20 Set)", code: "NE-QC-20-SET", price: 380, selected: true },
      { name: "3/8\" Male BSP Thread (SM-30 + PM-30 Set)", code: "NE-QC-30-SET", price: 460 },
      { name: "1/2\" Male BSP Thread (SM-40 + PM-40 Set)", code: "NE-QC-40-SET", price: 580 },
      { name: "8mm Hose Barb Push-On (SH-20 + PH-20 Set)", code: "NE-QC-8BARB-SET", price: 380 }
    ],
    specifications: {
      "Coupler Sizes": "20 Series (1/4\"), 30 Series (3/8\"), 40 Series (1/2\")",
      "Max Pressure": "1.5 MPa (15 Bar / 215 PSI)",
      "Material": "Chrome-Plated Hardened Carbon Steel",
      "Compatibility": "Standard industrial Japanese Nitto couplers"
    },
    applications: ["Air tool quick connect", "Compressor hose lines", "Pneumatic paint sprayers", "Tyre inflation lines"]
  }
];

const CATEGORIES_DATA = [
  { id: "all", name: "All Products (500+ Configurations)", count: 23 },
  { id: "compressors", name: "Air Compressors", count: 3 },
  { id: "air-tools", name: "Pneumatic Tools", count: 7 },
  { id: "cylinders", name: "Pneumatic Cylinders", count: 3 },
  { id: "valves", name: "Directional Valves", count: 3 },
  { id: "air-prep", name: "Air Preparation (FRL)", count: 1 },
  { id: "fittings", name: "Fittings & Tubing", count: 3 },
  { id: "accessories", name: "Compressor Accessories", count: 3 }
];
