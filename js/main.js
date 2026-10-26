/**
 * Omar Nour — Personal Professional Portfolio
 * Core Positioning: Operations Manager with a Software Engineering Background,
 * building toward Technical Project Management.
 */

const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navWhatIDo: "What I Do",
    navProjects: "Projects",
    navSpotix: "Spotix",
    navExperience: "Experience",
    navEducation: "Education",
    navDirection: "Career Direction",
    navContact: "Contact",

    // Hero Section
    heroTitle: "Omar Nour",
    heroSubtitle: "Operations Manager",
    heroBadgeTech: "Software Engineering",
    heroHeadline: "Building Systems. Managing Operations. Solving Problems.",
    heroParagraph: "I am an Operations Manager with a Software Engineering background. I focus on managing operations, organizing workflows, and leading teams, using my software background to understand technical systems and communicate effectively with developers.",
    btnExplore: "Explore My Work",
    btnContact: "Contact Me",
    btnCV: "Download CV",
    heroStatus: "Available for Operations & Project Leadership",
    heroPhotoBadge: "Operations Manager • Egypt",
    heroSnapshotFocus: "Operations Management",
    heroSnapshotFocusLabel: "Primary Practice",
    heroSnapshotTech: "Software Engineering",
    heroSnapshotTechLabel: "Technical Grounding",
    heroSnapshotGrowth: "Project Management",
    heroSnapshotGrowthLabel: "Current Growth",
    heroSnapshotAim: "Technical Project Management",
    heroSnapshotAimLabel: "Career Direction",

    // About Me Section
    aboutSectionTitle: "About Me",
    aboutTagline: "Operations Manager with a Software Engineering background, building toward Technical Project Management",
    aboutQuote: "“Operations succeed when systems are clear, teams are empowered, and technology eliminates friction.”",
    aboutP1: "I work primarily in Operations Management. Over time, I built practical experience across managing operations, teams, logistics, sales operations, process development, business management, and software development.",
    aboutP2: "My software engineering background gives me an understanding of how code is written, how software projects are built, and how technical teams operate. This helps me bridge daily business execution with technical requirements.",
    aboutP3: "I am currently growing as an Operations Manager while developing stronger Project Management knowledge. My long-term direction is Technical Project Management—where I can understand business needs, communicate with developers, and help manage project execution from requirements to delivery.",
    aboutBadge1Title: "Primary Focus",
    aboutBadge1Val: "Operations Management",
    aboutBadge2Title: "Technical Background",
    aboutBadge2Val: "Software Engineering",
    aboutBadge3Title: "Current Growth",
    aboutBadge3Val: "Project Management",
    aboutBadge4Title: "Long-Term Direction",
    aboutBadge4Val: "Technical Project Management",
    aboutCardTitle: "Professional Profile Specification",
    aboutCardLocation: "Egypt (On-site & Remote)",
    aboutCardLocationLabel: "Base & Availability",

    // What I Do Section (4 Pillars in Hierarchy)
    whatIDoTitle: "What I Do",
    whatIDoSubtitle: "My primary focus is Operations Management, supported by a software engineering background and ongoing development in project management.",
    opsCoreBadge: "Primary Operating Arena",
    pillar1Title: "Operations Management",
    pillar1Badge: "Primary Focus",
    pillar1Desc: "Managing day-to-day operations, setting up processes, and keeping work moving.",
    pillar1Item1: "People Management & Team Leadership",
    pillar1Item2: "KPI Systems & Performance Follow-up",
    pillar1Item3: "Process Development & SOP Rules",
    pillar1Item4: "Operational Decision Making",
    pillar1Item5: "Sales Operations",
    pillar1Item6: "Logistics & Procurement",
    pillar1Item7: "Operational Problem Solving",

    pillar2Title: "Business & Management",
    pillar2Badge: "Management",
    pillar2Desc: "Understanding business needs, managing resources, and developing team leaders.",
    pillar2Item1: "Business Operations & Management",
    pillar2Item2: "Developing Managers & Team Leaders",
    pillar2Item3: "Customer Handling & Issue Resolution",
    pillar2Item4: "Workflow & Process Improvement",
    pillar2Item5: "Operational Systems & Procedures",

    pillar3Title: "Software Engineering",
    pillar3Badge: "Technical Foundation",
    pillar3Desc: "Technical foundation that helps me understand software projects and communicate with developers.",
    pillar3Item1: "HTML, CSS & JavaScript",
    pillar3Item2: "React & Front-End Concepts",
    pillar3Item3: "Bootstrap & Tailwind CSS",
    pillar3Item4: "WordPress",
    pillar3Item5: "Git & GitHub Workflows",
    pillar3Item6: "Testing & Web Layouts",
    pillar3Item7: "Technical Communication with Developers",

    pillar4Title: "Project Manager",
    pillar4Badge: "Current Development & Management",
    pillar4Desc: "Currently developing knowledge and practical skills in project management.",
    pillar4Item1: "Project Management Concepts",
    pillar4Item2: "Project Coordination & Task Follow-up",
    pillar4Item3: "Agile & Scrum Basics",
    pillar4Item4: "User Stories & Requirement Breakdown",
    pillar4Item5: "Working with Technical Teams",
    pillar4Item6: "Project Execution Tracking",

    // Selected Projects Section
    projectsTitle: "Selected Projects",
    projectsSubtitle: "Real-world web projects, interactive tools, and internal operational systems",

    // Project: AC Calculator
    projAcCategory: "Practical Software Tool — Efficiency Calculator",
    projAcTitle: "Air Conditioning Efficiency Calculator",
    projAcDesc: "A practical software calculator that estimates required cooling capacity and unit requirements based on room dimensions, equipment specs, and occupant heat load.",
    projAcDidLabel: "What I Did:",
    projAcDid: "Built the interactive calculation tool, programmed the room volume and occupant thermal load formulas, and designed a clear Arabic-first user interface.",
    projAcLearnedLabel: "What I Learned:",
    projAcLearned: "Gained experience translating physical formulas (volume and thermal load) into a clean, responsive web application that provides instant, error-free calculations.",
    projAcParam1: "Room Dimensions (L × W × H)",
    projAcParam2: "AC Capacity & Unit Count",
    projAcParam3: "Occupancy Heat Load",

    // Project 1: Dr. Mohamed Elshawaf
    proj1Category: "Client Web Project — Medical",
    proj1Title: "Dr. Mohamed Elshawaf Website",
    proj1Desc: "A professional website created for Dr. Mohamed Elshawaf, a doctor in Egypt and Libya specializing in allergy and sinus care. It presents his services and clinic information.",
    proj1DidLabel: "What I Did:",
    proj1Did: "Handled the front-end development, content layout, and responsive mobile design.",
    proj1LearnedLabel: "What I Learned:",
    proj1Learned: "Gained experience gathering requirements directly from a medical professional, organizing complex clinical information, and delivering a clean, functional site.",

    // Project 2: SIMAH
    proj2Category: "Client Web Project — Corporate Agency",
    proj2Title: "SIMAH Website",
    proj2Desc: "A corporate website built for SIMAH to present their company services, business information, and contact channels online.",
    proj2DidLabel: "What I Did:",
    proj2Did: "Developed the responsive layout, site structure, and client contact integration.",
    proj2LearnedLabel: "What I Learned:",
    proj2Learned: "Learned how to align web page design with corporate brand identity and deliver a clear online presentation.",

    // Project 3: CourseTopia
    proj3Category: "Internal Business System — Operations Automation",
    proj3Title: "CourseTopia Employee & Attendance System",
    proj3Desc: "An internal system built using Google Apps Script to manage employee information and office attendance.",
    proj3DidLabel: "What I Did:",
    proj3Did: "Programmed the system using Google Apps Script to handle employee records, individualized work schedules, leave/permission requests, late-arrival rules, and attendance requirements.",
    proj3LearnedLabel: "What I Learned:",
    proj3Learned: "Demonstrated how software can solve complex operational problems. I learned how to translate organizational attendance rules into clean automated logic that reduces manual management overhead.",

    btnViewProject: "View Project",
    btnOpenSystem: "Open System",
    btnGitHubMore: "View More Projects on GitHub",

    // Spotix Section
    spotixHeading: "Spotix",
    spotixTag: "Current Role & Management",
    spotixTitle: "General Manager — Spotix",
    spotixPeriod: "May 2026 – Present",
    spotixRoleDesc: "Started with responsibility for Operations and gradually expanded into General Manager, overseeing the company's day-to-day work and coordinating teams across all departments.",
    spotixDeptsTitle: "Scope of Responsibilities",
    spotixDeptsDesc: "Overseeing day-to-day work and coordination across departments: Moderation, Marketing Coordination, Design, Sales Operations, Procurement & Supply, Production (Cutting, Workshop, Engraving, Finishing, Pressing), Shipping & Route Logistics, HR, and KPI Systems.",
    spotixCluster1Title: "Commercial & Front-Line",
    spotixCluster1Desc: "Moderation, Marketing Coordination, Sales Operations",
    spotixCluster2Title: "Production & Workshop",
    spotixCluster2Desc: "Design, Cutting, Workshop Operations, Engraving, Finishing & Pressing",
    spotixCluster3Title: "Supply Chain & Fulfillment",
    spotixCluster3Desc: "Procurement, Vendor Sourcing, Shipping & Route Logistics",
    spotixCluster4Title: "Governance & Team Leadership",
    spotixCluster4Desc: "HR, KPI Systems, SOP Rules, Department Leader Mentorship",

    spotixApproachTitle: "Management Approach & Problem Solving",
    spotixApproachP1: "When an operational issue occurs, I understand the root cause, listen to the team, consider customer needs, write a clear process rule, train the responsible person, delegate authority, and follow up until the process becomes stable.",
    spotixApproachP2: "The goal is to build an operation that does not depend on one person for every decision. I develop department leaders so they can handle issues independently. I also research machine problems and document operational manuals so the team can troubleshoot technical issues faster without waiting for external maintenance.",
    spotixMethodTitle: "Operational Problem-Solving Protocol",
    spotixStep1Title: "Root-Cause Diagnostics",
    spotixStep1Desc: "Listen to the team, inspect physical and workflow bottlenecks, and analyze customer impact.",
    spotixStep2Title: "Process Rule (SOP)",
    spotixStep2Desc: "Formulate an unambiguous operating standard that eliminates dependency on single-person intervention.",
    spotixStep3Title: "Delegation & Training",
    spotixStep3Desc: "Train responsible leads, document technical/machine manuals, and empower front-line decision making.",
    spotixStep4Title: "KPI Monitoring",
    spotixStep4Desc: "Follow up regularly with measurable benchmarks until the operational workflow is fully autonomous.",

    spotixImpactTitle: "Key Operational Contributions",
    spotixImpactItem1: "Expanded overall team structure and established coordination frameworks across departments.",
    spotixImpactItem2: "Built KPI-based accountability frameworks with clear departmental responsibilities.",
    spotixImpactItem3: "Improved cross-departmental coordination between sales, design, workshop, production, and shipping.",
    spotixImpactItem4: "Developed department leaders, reducing dependency on direct management intervention.",
    spotixImpactItem5: "Accelerated sales-to-production workflows, helping drive business growth.",
    spotixImpactItem6: "Expanded my role into social media content direction, planning post ideas, reviewing content, setting visual direction, and selecting products and offers to focus on.",

    // Career Timeline
    expTitle: "Career Experience",
    expSubtitle: "Complete timeline from newest to oldest showing responsibilities and key takeaways",
    labelDid: "What I Did:",
    labelLearned: "What I Learned:",
    expEra1Title: "Executive Operations & Management Leadership",
    expEra1Subtitle: "Senior operational management, team scaling, and company-wide workflow governance",
    expEra2Title: "Field Operations, Supply Chain & Logistics",
    expEra2Subtitle: "Hands-on site supervision, procurement, vendor negotiations, and distribution",
    expEra3Title: "Foundational Business & Technical Roots",
    expEra3Subtitle: "Commercial operations, administrative leadership, and software engineering training",

    // 1. Spotix
    exp1Role: "General Manager",
    exp1Company: "Spotix",
    exp1Date: "May 2026 – Present",
    exp1Did: "Started with responsibility for operations and gradually expanded into General Manager, overseeing the company's day-to-day work under the business owner. Managing cross-departmental execution across sales, moderation, design, marketing content direction, workshop and production, supply and procurement, logistics and shipping, HR, and KPI systems.",
    exp1Learned: "Taught me how to build self-sustaining teams, establish SOPs, develop department leaders, and manage broad multi-departmental operations. Recently, through self-research, studying different examples, and applying lessons directly to our posts, I have also started developing a practical understanding of content planning, visual direction, and aligning social media content with product and offer priorities—learning and refining this area through real daily execution.",

    // 2. Porto Group
    exp2Role: "Manager",
    exp2Company: "Porto Group — Qena",
    exp2Date: "January 2026 – May 2026",
    exp2Did: "Managing site workers, monthly financial closing, tax account closing, worker recruitment, and general administrative operations.",
    exp2Learned: "Taught me how to handle site-level workforce management, monthly financial closings, and resolve operational problems under pressure.",

    // 3. 4Geeks
    exp3Role: "Project Manager",
    exp3Company: "4Geeks",
    exp3Date: "July 2025 – December 2025",
    exp3Did: "Managed academy operations, restructured workflows, reduced unnecessary costs, improved staffing schedules, and followed up on daily execution.",
    exp3Learned: "Taught me how operational restructuring, cost control, and proper schedule management can turn an operational deficit into monthly profitability.",

    // 4. Creativa / Ather
    exp4Role: "Assistant Project & Event Coordinator",
    exp4Company: "Creativa / Ather",
    exp4Date: "2024 – 2025",
    exp4Did: "Coordinated training events, supported instructors/trainees, organized logistics, managed Dev Arena tracks/schedules/reports, and built simple web tools when needed.",
    exp4Learned: "Taught me how to organize multi-track events, coordinate instructors and participants, manage event logistics, and keep complex schedules moving toward a deadline.",

    // 5. Kellogg's Noodles
    exp5Role: "Marketing Agent",
    exp5Company: "Kellogg's Noodles Egypt",
    exp5Date: "November 2024 – January 2025",
    exp5Did: "Outdoor sales and field marketing across Minya governorate, supervised sales reps, supported field campaigns, and resolved customer issues.",
    exp5Learned: "Taught me field-level sales operations, how field teams work on the ground, and how to handle customer problems directly.",

    // 6. FabriGate
    exp6Role: "Purchasing Manager / Logistics Officer",
    exp6Company: "FabriGate",
    exp6Date: "2024",
    exp6Did: "Procurement, vendor sourcing, price negotiation, delivery tracking, route planning, and logistics coordination.",
    exp6Learned: "Taught me the fundamentals of supply chain, vendor negotiation, shipment tracking, and delivery route planning.",

    // 7. Military Production
    exp7Role: "Purchasing Manager / Site Supervisor",
    exp7Company: "Military Production / Water Authority",
    exp7Date: "2023 – 2024",
    exp7Did: "Site procurement, contractor supervision, progress monitoring, daily problem solving, and reporting to engineers.",
    exp7Learned: "Taught me how to monitor site progress, manage contractor relationships, and report operational status clearly to engineering leadership.",

    // 8. SES Solar Energy
    exp8Role: "Assistant Field Coordinator",
    exp8Company: "SES Solar Energy",
    exp8Date: "2023",
    exp8Did: "Supervised solar installation teams, tracked daily field tasks, coordinated site visits, prepared equipment, and reported operational delays.",
    exp8Learned: "Taught me how technical field installations work, how to coordinate installation teams, and how to resolve site delays proactively.",

    // 9. Nile Petroleum
    exp9Role: "Assistant Account Manager",
    exp9Company: "Nile Petroleum",
    exp9Date: "2023",
    exp9Did: "Monitored fuel station daily operations, payment collections, bank deposits, fuel truck dispatching, and daily operational logging.",
    exp9Learned: "Taught me strict daily operational tracking, payment handling routines, and fuel logistics coordination.",

    // 10. Yu-Gi Café
    exp10Role: "Business / Administrative Manager",
    exp10Company: "Yu-Gi Café",
    exp10Date: "August 2022 – August 2023",
    exp10Did: "Managed administrative and practical day-to-day operations for a family business, including staff, inventory, supplier relations, and cash transactions.",
    exp10Learned: "Taught me hands-on business management, staff supervision, inventory control, and customer service execution.",

    // 11. Cosmetics Business
    exp11Role: "Business Manager",
    exp11Company: "Cosmetics & Perfume Business",
    exp11Date: "2021 – 2022",
    exp11Did: "Managed day-to-day operations, product procurement, sales, and customer service for a cosmetics and perfume business.",
    exp11Learned: "Taught me basic commercial operations, purchasing, sales management, and customer handling.",

    // 12. Front-End Training
    exp12Role: "Front-End Intern / Trainee",
    exp12Company: "Ather / EraaSoft",
    exp12Date: "2021 – 2022",
    exp12Did: "Practical training in HTML, CSS, JavaScript, Bootstrap, React, Git, and responsive web design.",
    exp12Learned: "Gave me a real foundation in software engineering, technical code structure, web technologies, and how developers build applications.",

    // Education & Training
    eduTitle: "Education & Professional Training",
    eduSubtitle: "Completed education and specialized training programs",
    eduDegreeTitle: "Management Information Systems (MIS)",
    eduDegreeInst: "Higher Institute of Technology",
    eduDegreeStatus: "Completed Degree",
    train1Title: "Web Development Specialist",
    train1Inst: "National Telecommunication Institute (NTI)",
    train1Status: "Completed Training",
    train2Title: "Summer Technology Program",
    train2Inst: "Information Technology Institute (ITI)",
    train2Status: "Completed Training",
    train3Title: "Front-End & React",
    train3Inst: "EraaSoft Academy",
    train3Status: "Completed Training",

    // Career Direction Section
    dirTitle: "Career Direction",
    dirSubtitle: "Natural professional progression from Operations toward Technical Project Management",
    dirStep1Tag: "Current Focus",
    dirStep1Title: "Where I Am Now",
    dirStep1Desc: "Operations Management — managing teams, setting up processes, tracking KPIs, handling logistics, and making operational decisions on the ground.",
    dirStep2Tag: "Current Growth",
    dirStep2Title: "What I Am Building",
    dirStep2Desc: "Project Management Knowledge — deepening skills in project coordination, task tracking, Agile/Scrum concepts, User Stories, and working with technical teams.",
    dirStep3Tag: "Long-Term Goal",
    dirStep3Title: "Where I Am Going",
    dirStep3Desc: "Technical Project Management — bridging business needs and technical teams, translating requirements, and managing project execution from start to finish.",

    // Contact
    contactTitle: "Contact Me",
    contactSubtitle: "Direct contact options",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone / WhatsApp / Telegram",
    contactLocationLabel: "Location",
    contactLocationVal: "Egypt",
    contactSocialsLabel: "Links",

    footerRole: "Operations Manager",
    footerRights: "Omar Nour. All rights reserved.",
    whatsappAria: "Chat on WhatsApp",
    homePageTitle: "Omar Nour | Operations Manager & Software Background",
    projectsPageTitle: "Projects | Omar Nour",
    experiencePageTitle: "Experience | Omar Nour"
  },

  ar: {
    // Navigation
    navHome: "الرئيسية",
    navAbout: "عن عمر",
    navWhatIDo: "ماذا أفعل",
    navProjects: "المشاريع",
    navSpotix: "Spotix",
    navExperience: "الخبرات",
    navEducation: "التعليم",
    navDirection: "التوجّه المهني",
    navContact: "التواصل",

    // Hero Section
    heroTitle: "عمر نور",
    heroSubtitle: "إداري عمليات (Operations Manager)",
    heroBadgeTech: "خلفية في هندسة البرمجيات",
    heroHeadline: "بناء الأنظمة. إدارة العمليات. حل المشكلات.",
    heroParagraph: "أنا إداري عمليات بخلفية في هندسة البرمجيات. أركز على إدارة العمليات وتنظيم مسارات العمل وقيادة الفرق، مستفيداً من خلفيتي البرمجية لفهم الأنظمة التقنية والتواصل الفعّال مع المطورين.",
    btnExplore: "استكشف أعمالي",
    btnContact: "تواصل معي",
    btnCV: "تحميل السيرة الذاتية",
    heroStatus: "متاح لقيادة العمليات والمشروعات التقنية",
    heroPhotoBadge: "إداري عمليات • مصر",
    heroSnapshotFocus: "إدارة العمليات",
    heroSnapshotFocusLabel: "المجال الأساسي",
    heroSnapshotTech: "هندسة البرمجيات",
    heroSnapshotTechLabel: "الأساس التقني",
    heroSnapshotGrowth: "إدارة المشروعات",
    heroSnapshotGrowthLabel: "التطوير الحالي",
    heroSnapshotAim: "إدارة المشروعات التقنية",
    heroSnapshotAimLabel: "التوجه المستقبلي",

    // About Me Section
    aboutSectionTitle: "عن عمر نور",
    aboutTagline: "إداري عمليات بخلفية في هندسة البرمجيات، يتطور نحو إدارة المشروعات التقنية",
    aboutQuote: "«تنجح العمليات عندما تكون الأنظمة واضحة، وفرق العمل مُمكَّنة، وتعمل التكنولوجيا على إزالة العوائق.»",
    aboutP1: "أعمل بشكل أساسي في مجال إدارة العمليات (Operations Management). بنيت خبرتي العملية عبر إدارة العمليات، الأفراد، اللوجستيات، عمليات المبيعات، تطوير الإجراءات، إدارة الأعمال، وتطوير البرمجيات.",
    aboutP2: "تمنحني خلفيتي في هندسة البرمجيات فهماً حقيقياً لكيفية كتابة الكود وبناء المشاريع البرمجية وطبيعة عمل الفرق التقنية. يساعدني ذلك في الربط بين التنفيذ التشغيلي اليومي والمتطلبات التقنية.",
    aboutP3: "أعمل حالياً على النمو كـ Operations Manager بالتوازي مع تطوير معرفتي بإدارة المشروعات. توجّهي المستقبلي هو إدارة المشروعات التقنية (Technical Project Management)—حيث يمكنني فهم متطلبات الأعمال، والتواصل مع المطورين، ومتابعة تنفيذ المشروعات من مرحلة المتطلبات حتى التسليم.",
    aboutBadge1Title: "التركيز الحالي",
    aboutBadge1Val: "إدارة العمليات (Operations)",
    aboutBadge2Title: "الخلفية التقنية",
    aboutBadge2Val: "هندسة البرمجيات",
    aboutBadge3Title: "التطوير الحالي",
    aboutBadge3Val: "إدارة المشروعات",
    aboutBadge4Title: "التوجه المستقبلي",
    aboutBadge4Val: "إدارة المشروعات التقنية",
    aboutCardTitle: "الملف المهني والمؤشرات",
    aboutCardLocation: "مصر (حضوري وعن بُعد)",
    aboutCardLocationLabel: "المقر والجاهزية",

    // What I Do Section (4 Pillars in Hierarchy)
    whatIDoTitle: "ماذا أفعل؟",
    whatIDoSubtitle: "تركيزي الأساسي هو إدارة العمليات، مدعوماً بخلفية في هندسة البرمجيات وتطوير مستمر في إدارة المشروعات.",
    opsCoreBadge: "المجال التشغيلي الرئيسي",
    pillar1Title: "إدارة العمليات (Operations Management)",
    pillar1Badge: "التركيز الأساسي",
    pillar1Desc: "إدارة التشغيل اليومي، تصميم مسارات العمل، وضمان استمرارية الإنجاز.",
    pillar1Item1: "إدارة الأفراد وقيادة الفرق",
    pillar1Item2: "أنظمة ومؤشرات الأداء (KPIs)",
    pillar1Item3: "تطوير مسارات وإجراءات العمل (SOPs)",
    pillar1Item4: "اتخاذ القرارات التشغيلية",
    pillar1Item5: "إدارة عمليات المبيعات",
    pillar1Item6: "اللوجستيات والمشتريات",
    pillar1Item7: "حل المشكلات التشغيلية",

    pillar2Title: "إدارة الأعمال والفرق",
    pillar2Badge: "الإدارة",
    pillar2Desc: "فهم احتياجات الأعمال، إدارة الموارد، وتطوير قادة الأقسام.",
    pillar2Item1: "إدارة الأعمال والعمليات التجارية",
    pillar2Item2: "تطوير المديرين وقادة الفرق",
    pillar2Item3: "إدارة مشكلات العملاء والحلول",
    pillar2Item4: "تحسين وتطوير مسارات العمل",
    pillar2Item5: "بناء الأنظمة والإجراءات التشغيلية",

    pillar3Title: "هندسة البرمجيات",
    pillar3Badge: "الأساس التقني",
    pillar3Desc: "أساس تقني يتيح لي فهم المشاريع البرمجية والتواصل الفعّال مع المطورين.",
    pillar3Item1: "HTML, CSS & JavaScript",
    pillar3Item2: "React ومفاهيم تطوير الواجهات",
    pillar3Item3: "أطر العمل Bootstrap & Tailwind",
    pillar3Item4: "إدارة وتطوير WordPress",
    pillar3Item5: "مسارات العمل عبر Git & GitHub",
    pillar3Item6: "الاختبار والتصميم المتجاوب",
    pillar3Item7: "التواصل التقني مع فرق التطوير",

    pillar4Title: "مدير مشروعات (Project Manager)",
    pillar4Badge: "تطوير وإدارة حالية",
    pillar4Desc: "أعمل حالياً على تطوير معرفتي ومهاراتي العملية في إدارة المشروعات.",
    pillar4Item1: "مفاهيم إدارة المشروعات",
    pillar4Item2: "تنسيق المشروعات ومتابعة المهام",
    pillar4Item3: "أساسيات Agile & Scrum",
    pillar4Item4: "كتابة User Stories وتحليل المتطلبات",
    pillar4Item5: "العمل مع الفرق التقنية",
    pillar4Item6: "متابعة تنفيذ المشروعات",

    // Selected Projects Section
    projectsTitle: "المشاريع المختارة",
    projectsSubtitle: "مواقع إلكترونية وأدوات تفاعلية وأنظمة تشغيل داخلية تم تنفيذها لعملاء حقيقيين",

    // Project: AC Calculator
    projAcCategory: "أداة برمجية عملية — حاسبة كفاءة",
    projAcTitle: "حاسبة كفاءة التكييف المتقدمة",
    projAcDesc: "أداة برمجية عملية لحساب متطلبات التكييف المناسبة بناءً على أبعاد الغرفة (الطول، العرض، الارتفاع)، قدرة التكييف، عدد الوحدات، والحمل الحراري لعدد الأشخاص.",
    projAcDidLabel: "ما قمت به:",
    projAcDid: "تطوير الحاسبة التفاعلية، برمجة معادلات حجم الغرفة والأحمال الحرارية للأشخاص، وتصميم واجهة استخدام واضحة ومتجاوبة.",
    projAcLearnedLabel: "ما تعلمته:",
    projAcLearned: "اكتسبت خبرة في تحويل المعادلات والحسابات الهندسية التطبيقية إلى أداة ويب عملية وسريعة تساعد في اتخاذ قرارات دقيقة بدون تعقيد.",
    projAcParam1: "أبعاد وحجم الغرفة",
    projAcParam2: "قدرة وعدد الوحدات",
    projAcParam3: "الحمل الحراري للأشخاص",

    // Project 1: Dr. Mohamed Elshawaf
    proj1Category: "مشروع عميل — موقع طبي",
    proj1Title: "موقع د. محمد الشواف",
    proj1Desc: "موقع إلكتروني احترافي تم إنشاؤه للدكتور محمد الشواف، طبيب متخصص في أمراض الحساسية والأنف والأذن والحنجرة بمصر وليبيا.",
    proj1DidLabel: "ما قمت به:",
    proj1Did: "تطوير واجهة الموقع، تنظيم المحتوى، وضمان تجربة استخدام مرنة ومتجاوبة مع الهواتف.",
    proj1LearnedLabel: "ما تعلمته:",
    proj1Learned: "اكتسبت خبرة في جمع المتطلبات مباشرة من طبيب متخصص، تنظيم المحتوى الطبي المعقد، وتنفيذ موقع عملي وسهل الاستخدام.",

    // Project 2: SIMAH
    proj2Category: "مشروع عميل — موقع شركة",
    proj2Title: "موقع شركة سِمة (SIMAH)",
    proj2Desc: "مشروع موقع إلكتروني تم إنشاؤه لشركة سِمة لعرض خدمات الشركة وهويتها ومعلومات التواصل.",
    proj2DidLabel: "ما قمت به:",
    proj2Did: "تطوير هيكل الموقع والتصميم المتجاوب وتكامل قنوات التواصل.",
    proj2LearnedLabel: "ما تعلمته:",
    proj2Learned: "تعلمت كيفية مطابقة تصميم الموقع مع الهوية المؤسسية للشركة وتقديم عرض رقمي واضح للخدمات.",

    // Project 3: CourseTopia
    proj3Category: "نظام إداري داخلي — أتمتة عمليات",
    proj3Title: "نظام CourseTopia لإدارة الموظفين والحضور",
    proj3Desc: "نظام إداري داخلي تم تطويره باستخدام Google Apps Script لإدارة بيانات الموظفين والحضور.",
    proj3DidLabel: "ما قمت به:",
    proj3Did: "برمجة النظام بـ Google Apps Script لمعالجة سجّلات الموظفين، جداول العمل الفردية، الإجازات والأذونات، وسياسات التأخير.",
    proj3LearnedLabel: "ما تعلمته:",
    proj3Learned: "توضيح كيف يمكن للتكنولوجيا حل المشكلات التشغيلية المعقدة. تعلمت تحويل قواعد الحضور التنظيمية إلى منطق برمجي مؤتمت يقلل من العبء الإداري اليدوي.",

    btnViewProject: "عرض المشروع",
    btnOpenSystem: "فتح النظام",
    btnGitHubMore: "عرض المزيد من المشاريع على GitHub",

    // Spotix Section
    spotixHeading: "Spotix",
    spotixTag: "الدور الحالي والإدارة العامة",
    spotixTitle: "المدير العام — Spotix",
    spotixPeriod: "مايو 2026 – الحالي",
    spotixRoleDesc: "بدأت بتولي مسؤولية العمليات وتدرجت المسؤوليات وصولاً إلى منصب المدير العام، حيث أدير العمل اليومي وأنسق بين مختلف أقسام الشركة.",
    spotixDeptsTitle: "نطاق المسؤوليات",
    spotixDeptsDesc: "الإشراف والتنسيق بين أقسام: خدمة العملاء (Moderation)، التسويق والمحتوى، التصميم، المبيعات، المشتريات والتوريد، الإنتاج (القص، الورشة، الحفر، التشطيب)، الشحن واللوجستيات، الموارد البشرية، وتطوير الأنظمة ومؤشرات الأداء.",
    spotixCluster1Title: "العمليات التجارية والعملاء",
    spotixCluster1Desc: "خدمة العملاء (Moderation)، التسويق والمحتوى، وإدارة المبيعات",
    spotixCluster2Title: "التصنيع والورشة",
    spotixCluster2Desc: "التصميم، القص، تشغيل الورشة، الحفر، التشطيب والكبس الحراري",
    spotixCluster3Title: "سلاسل الإمداد والتوريد",
    spotixCluster3Desc: "المشتريات، متابعة الموردين، الشحن واللوجستيات",
    spotixCluster4Title: "البنية المؤسسية والكوادر",
    spotixCluster4Desc: "الموارد البشرية، مؤشرات الأداء (KPIs)، وتوثيق الإجراءات (SOPs)",

    spotixApproachTitle: "منهجية الإدارة وحل المشكلات",
    spotixApproachP1: "عند حدوث مشكلة تشغيلية، أفهم السبب الجذر، أستمع للفريق، أراعي متطلبات العميل، أضع قاعدة عمل واضحة، أدرّب الشخص المسؤول، أفوّض الصلاحيات، وأتابع حتى يستقر النظام.",
    spotixApproachP2: "الهدف هو بناء منظومة لا تعتمد على شخص واحد في كل قرار. أطور قادة الأقسام ليحلوا المشكلات بأنفسهم. كما أقوم ببحث أعطال الماكينات وتوثيق تشغيلها لتشخيص الأعطال وسرعة إصلاحها دون انتظار الصيانة الخارجية دائماً.",
    spotixMethodTitle: "منهجية حل المشكلات التشغيلية (4 خطوات)",
    spotixStep1Title: "تحليل السبب الجذري",
    spotixStep1Desc: "الاستماع لفريق العمل، فحص نقاط التعطيل الميدانية والتقنية، وتقدير الأثر على العميل.",
    spotixStep2Title: "صياغة قاعدة العمل (SOP)",
    spotixStep2Desc: "وضع إجراء قياسي واضح لا يقبل التأويل، لتقليل الاعتماد على التدخل الفردي للإدارة.",
    spotixStep3Title: "التدريب وتفويض الصلاحيات",
    spotixStep3Desc: "تدريب مسؤولي الأقسام، توثيق أدلة تشغيل الماكينات، وتمكين الفرق من اتخاذ القرار المباشر.",
    spotixStep4Title: "متابعة مؤشرات الأداء",
    spotixStep4Desc: "المتابعة المنتظمة بالمؤشرات الرقمية حتى يصل مسار العمل إلى الاستقرار التام والذاتي.",

    spotixImpactTitle: "إسهامات تشغيلية رئيسية",
    spotixImpactItem1: "توسيع الهيكل التنظيمي وبناء أطر التنسيق الفعّال بين الأقسام.",
    spotixImpactItem2: "بناء أنظمة قياس أداء (KPIs) محددة للمسؤوليات.",
    spotixImpactItem3: "تحسين التنسيق بين المبيعات، التصميم، الورشة، الإنتاج، والشحن.",
    spotixImpactItem4: "تطوير قادة الأقسام وتقليل الاعتماد على التدخل المباشر للإدارة.",
    spotixImpactItem5: "تسريع مسارات العمل من المبيعات إلى الإنتاج مما ساهم في نمو الأعمال.",
    spotixImpactItem6: "توسيع نطاق المسؤوليات ليشمل توجيه محتوى السوشيال ميديا، وتخطيط أفكار المنشورات، ومراجعة المحتوى، وتحديد التوجه البصري، واختيار المنتجات والعروض ذات الأولوية.",

    // Career Timeline
    expTitle: "الخبرات المهنية",
    expSubtitle: "التسلسل الزمني الكامل للخبرات موضحاً المسؤوليات والدروس المستفادة",
    labelDid: "ما قمت به:",
    labelLearned: "ما تعلمته:",
    expEra1Title: "القيادة التشغيلية والإدارة التنفيذية",
    expEra1Subtitle: "مسؤوليات تشغيلية عليا، توسيع فرق العمل، وإدارة وحوكمة المنظومات المتكاملة",
    expEra2Title: "العمليات الميدانية وسلاسل الإمداد واللوجستيات",
    expEra2Subtitle: "الإشراف الميداني، إدارة المشتريات والموردين، ومتابعة المقاولين والتوزيع",
    expEra3Title: "إدارة الأعمال والأساس التقني",
    expEra3Subtitle: "الإدارة التجارية، إدارة المنشآت العائلية، والتدريب المكثف على هندسة البرمجيات",

    // 1. Spotix
    exp1Role: "المدير العام (General Manager)",
    exp1Company: "Spotix",
    exp1Date: "مايو 2026 – الحالي",
    exp1Did: "بدأت بتولي إدارة العمليات وتدرجت المسؤوليات وصولاً إلى منصب المدير العام لإدارة وتنسيق العمل اليومي في الشركة تحت إشراف المالك عبر مختلف الوظائف: المبيعات، خدمة العملاء، التصميم، توجيه المحتوى، الورشة والإنتاج، المشتريات والتوريد، الشحن، الموارد البشرية، ومتابعة مؤشرات الأداء.",
    exp1Learned: "علمتني هذه التجربة كيفية بناء فرق عمل مستقلة، وضع الإجراءات المعيارية (SOPs)، تطوير قادة الأقسام، وإدارة العمليات واسعة النطاق. ومؤخراً، من خلال البحث والاطلاع والتطبيق المباشر على محتوى Spotix، بدأت أيضاً في اكتساب فهم عملي لتخطيط المحتوى والتوجه البصري وربط منشورات السوشيال ميديا بأولويات المنتجات والعروض، مع الاستمرار في التعلم وتطوير هذا الجانب مع التجربة والممارسة.",

    // 2. Porto Group
    exp2Role: "مدير موقع",
    exp2Company: "Porto Group — قنا",
    exp2Date: "يناير 2026 – مايو 2026",
    exp2Did: "إدارة العمالة بالموقع، الإغلاق المالي الشهري، إغلاق الحسابات الضريبية، وتوفير الكوادر المناسبة.",
    exp2Learned: "علمتني كيفية إدارة العمالة الميدانية، إجراء الإغلاقات المالية الشهرية، وحل المشكلات التشغيلية تحت الضغط.",

    // 3. 4Geeks
    exp3Role: "مدير مشروع (Project Manager)",
    exp3Company: "4Geeks",
    exp3Date: "يوليو 2025 – ديسمبر 2025",
    exp3Did: "إدارة عمليات الأكاديمية، إعادة هيكلة مسارات العمل، تقليل التكاليف غير الضرورية، تحسين توزيع العمالة، ومتابعة التنفيذ اليومي.",
    exp3Learned: "علمتني كيف يمكن لإعادة الهيكلة التشغيلية وضبط التكاليف وتنظيم الجداول تحويل الأكاديمية من الخسارة إلى تحقيق أرباح شهرياً.",

    // 4. Creativa / Ather
    exp4Role: "مساعد منسق مشاريع وفاعليات",
    exp4Company: "Creativa / Ather",
    exp4Date: "2024 – 2025",
    exp4Did: "تنسيق الفاعليات التدريبية، دعم المحاضرين والمتدربين، تنظيم اللوجستيات، إدارة مسارات Dev Arena وجداولها وتقاريرها، وبناء أدوات ويب بسيطة.",
    exp4Learned: "علمتني كيفية تنظيم الفاعليات متعددة المسارات، التنسيق بين المحاضرين والشاركين، إدارة اللوجستيات، والالتزام بالمواعيد النهائية.",

    // 5. Kellogg's Noodles
    exp5Role: "مسؤول تسويق ومبيعات ميدانية",
    exp5Company: "Kellogg's Noodles Egypt",
    exp5Date: "نوفمبر 2024 – يناير 2025",
    exp5Did: "المبيعات الميدانية والتسويق الخارجي بمحافظة المنيا، الإشراف على المندوبين، ودعم الحملات الميدانية.",
    exp5Learned: "علمتني طبيعة العمليات الميدانية، كيفية إدارة فرق البيع الميداني، والتعامل المباشر مع مشكلات العملاء.",

    // 6. FabriGate
    exp6Role: "مدير مشتريات ومسؤول لوجستيات",
    exp6Company: "FabriGate",
    exp6Date: "2024",
    exp6Did: "المشتريات، البحث عن الموردين، التفاوض على الأسعار، متابعة التوريد، وتخطيط مسارات الشحن.",
    exp6Learned: "علمتني أساسيات سلاسل التوريد، التفاوض مع الموردين، تتبع الشحنات، وتخطيط مسارات التوزيع.",

    // 7. Military Production
    exp7Role: "مدير مشتريات ومشرف موقع",
    exp7Company: "الإنتاج الحربي / هيئة مياه الشرب",
    exp7Date: "2023 – 2024",
    exp7Did: "مشتريات الموقع، متابعة المقاولين، مراقبة تقدم العمل، حل المشكلات التشغيلية، وتقديم التقارير للمهندسين.",
    exp7Learned: "علمتني كيفية متابعة تقدم العمل الميداني، إدارة العلاقات مع المقاولين، وتقديم تقارير دقيقة للإدارة الهندسية.",

    // 8. SES Solar Energy
    exp8Role: "مساعد منسق ميداني",
    exp8Company: "SES Solar Energy",
    exp8Date: "2023",
    exp8Did: "الإشراف على فرق التركيب، متابعة المهام اليومية، تنسيق المعاينات، تجهيز المعدات، ومتابعة المعوقات.",
    exp8Learned: "علمتني كيفية متابعة التركيبات التقنية الميدانية، تنسيق فرق العمل الفنية، وحل تأخيرات الموقع بشكل استباقي.",

    // 9. Nile Petroleum
    exp9Role: "مساعد مدير حسابات وتغطية عمليات",
    exp9Company: "Nile Petroleum",
    exp9Date: "2023",
    exp9Did: "متابعة تشغيل المحطات، التحصيلات، الإيداعات البنكية، وتنسيق حركة سيارات المواد البترولية.",
    exp9Learned: "علمتني الانضباط في المتابعة التشغيلية اليومية، التعامل مع التدفقات النقدية، وتنسيق نقل المواد البترولية.",

    // 10. Yu-Gi Café
    exp10Role: "مدير إداري وتجاري",
    exp10Company: "Yu-Gi Café",
    exp10Date: "أغسطس 2022 – أغسطس 2023",
    exp10Did: "إدارة العمليات اليومية لنشاط تجاري عائلي، بما يشمل الموظفين، المخزون، الموردين، والحسابات.",
    exp10Learned: "علمتني الإدارة المباشرة للأعمال، الإشراف على العمالة، ضبط المخزون، وخدمة العملاء.",

    // 11. Cosmetics Business
    exp11Role: "مدير نشاط تجاري",
    exp11Company: "مشروع مستحضرات التجميل والعطور",
    exp11Date: "2021 – 2022",
    exp11Did: "إدارة عمليات مشروع مستحضرات التجميل والعطور، المشتريات، والمبيعات.",
    exp11Learned: "علمتني أساسيات العمليات التجارية، المشتريات، المبيعات، وإدارة العملاء.",

    // 12. Front-End Training
    exp12Role: "متدرب تطوير واجهات المستخدم",
    exp12Company: "Ather / EraaSoft",
    exp12Date: "2021 – 2022",
    exp12Did: "تدريب عملي مكثف على HTML, CSS, JavaScript, Bootstrap, React, Git والتصميم المتجاوب.",
    exp12Learned: "منحتني أساساً حقيقياً في هندسة البرمجيات، البناء البرمجي للكود، تكنولوجيا الويب، وكيفية بناء التطبيقات.",

    // Education & Training
    eduTitle: "التعليم والتدريب المهني",
    eduSubtitle: "المؤهلات الدراسية والبرامج التدريبية المكتملة",
    eduDegreeTitle: "نظم المعلومات الإدارية (MIS)",
    eduDegreeInst: "المعهد العالي للتكنولوجيا",
    eduDegreeStatus: "درجة بكالوريوس مكتملة",
    train1Title: "تطوير تطبيقات الويب",
    train1Inst: "المعهد القومي للاتصالات (NTI)",
    train1Status: "برنامج تدريبي مكتمل",
    train2Title: "التدريب الصيفي للتكنولوجيا",
    train2Inst: "معهد تكنولوجيا المعلومات (ITI)",
    train2Status: "برنامج تدريبي مكتمل",
    train3Title: "تطوير الواجهات و React",
    train3Inst: "أكاديمية EraaSoft",
    train3Status: "برنامج تدريبي مكتمل",

    // Career Direction Section
    dirTitle: "التوجّه المهني",
    dirSubtitle: "تطور مهني طبيعي من إدارة العمليات نحو إدارة المشروعات التقنية",
    dirStep1Tag: "التركيز الحالي",
    dirStep1Title: "أين أنا الآن؟",
    dirStep1Desc: "إدارة العمليات (Operations Management) — إدارة الفرق، تصميم مسارات العمل، متابعة الـ KPIs، اللوجستيات، واتخاذ القرارات التشغيلية.",
    dirStep2Tag: "التطوير الحالي",
    dirStep2Title: "ما أعمل على بناءه؟",
    dirStep2Desc: "معرفة وتطوير مهارات إدارة المشروعات — تعميق الخبرة في تنسيق المشروعات، متابعة المهام، أساسيات Agile/Scrum، كتابة User Stories، والعمل مع الفرق التقنية.",
    dirStep3Tag: "الهدف المستقبلي",
    dirStep3Title: "إلى أين أتجه؟",
    dirStep3Desc: "إدارة المشروعات التقنية (Technical Project Management) — الجسر بين احتياجات الأعمال والفرق التقنية، ترجمة المتطلبات، وإدارة تنفيذ المشروعات من البداية للنهاية.",

    // Contact
    contactTitle: "تواصل معي",
    contactSubtitle: "معلومات التواصل المباشر",
    contactEmailLabel: "البريد الإلكتروني",
    contactPhoneLabel: "الهاتف / واتساب / تليجرام",
    contactLocationLabel: "الموقع",
    contactLocationVal: "مصر",
    contactSocialsLabel: "المنصات والروابط",

    footerRole: "إداري عمليات (Operations Manager)",
    footerRights: "عمر نور. جميع الحقوق محفوظة.",
    whatsappAria: "تواصل عبر واتساب",
    homePageTitle: "عمر نور | إداري عمليات (Operations Manager)",
    projectsPageTitle: "المشاريع | عمر نور",
    experiencePageTitle: "الخبرات المهنية | عمر نور"
  }
};

function safeGetStorage(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (e) {
    return fallback;
  }
}

function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // Storage restricted or unavailable
  }
}

let currentLang = safeGetStorage("omar_nour_lang", "en");
let currentTheme = safeGetStorage("omar_nour_theme", "dark");

// DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavigation();
  initActiveNav();
  initYear();
});

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Theme Management
function initTheme() {
  setTheme(currentTheme);
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }
}

function setTheme(theme) {
  currentTheme = theme;
  safeSetStorage("omar_nour_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);

  const sunIcon = document.getElementById("themeIconSun");
  const moonIcon = document.getElementById("themeIconMoon");

  if (sunIcon && moonIcon) {
    if (theme === "dark") {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    } else {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }
  }
}

// Language & i18n Management
function initLanguage() {
  setLanguage(currentLang);
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const newLang = currentLang === "en" ? "ar" : "en";
      setLanguage(newLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  safeSetStorage("omar_nour_lang", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update button label
  const langLabel = document.getElementById("langLabel");
  if (langLabel) {
    langLabel.textContent = lang === "en" ? "العربية" : "English";
  }

  // Update text across data-i18n elements
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update aria-label for elements with data-i18n-aria
  const ariaElements = document.querySelectorAll("[data-i18n-aria]");
  ariaElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("aria-label", translations[lang][key]);
    }
  });

  // Update document title
  const titleEl = document.querySelector("title");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n");
    if (key && translations[lang] && translations[lang][key]) {
      titleEl.textContent = translations[lang][key];
    } else {
      const page = window.location.pathname.split("/").pop() || "index.html";
      if (page.includes("projects")) {
        titleEl.textContent = lang === "ar" ? "المشاريع | عمر نور" : "Projects | Omar Nour";
      } else if (page.includes("experience")) {
        titleEl.textContent = lang === "ar" ? "الخبرات المهنية | عمر نور" : "Experience | Omar Nour";
      } else {
        titleEl.textContent = lang === "ar"
          ? "عمر نور | إداري عمليات (Operations Manager)"
          : "Omar Nour | Operations Manager & Software Background";
      }
    }
  }
}

// Mobile Menu Navigation Drawer
function initNavigation() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNavDrawer");
  const closeBtn = document.getElementById("closeNavBtn");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && mobileNav) {
    const openMenu = () => {
      mobileNav.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      mobileNav.classList.remove("active");
      document.body.style.overflow = "";
    };

    menuBtn.addEventListener("click", openMenu);

    if (closeBtn) closeBtn.addEventListener("click", closeMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("active")) {
        closeMenu();
      }
    });
  }
}

// Multi-page Active Navigation Indicator
function initActiveNav() {
  const path = window.location.pathname.toLowerCase();
  const isProjects = path.includes("projects");
  const isExperience = path.includes("experience");
  const isHome = !isProjects && !isExperience;

  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
      return;
    }
    const cleanHref = href.toLowerCase().split("#")[0].split("?")[0].trim();
    const isLinkProjects = cleanHref.includes("projects");
    const isLinkExperience = cleanHref.includes("experience");
    const isLinkHome = cleanHref.endsWith("index.html") || cleanHref === "" || cleanHref === "./" || cleanHref === "/";

    let shouldBeActive = false;
    if (isProjects && isLinkProjects) shouldBeActive = true;
    else if (isExperience && isLinkExperience) shouldBeActive = true;
    else if (isHome && isLinkHome) shouldBeActive = true;

    if (shouldBeActive) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
