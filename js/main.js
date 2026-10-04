/**
 * Omar Nour — Personal Professional Portfolio
 * Plain, direct, human copy without AI clichés or buzzwords.
 */

const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navWhatIDo: "What I Do",
    navProjects: "Projects",
    navSpotix: "Spotix Case Study",
    navExperience: "Experience",
    navEducation: "Education",
    navContact: "Contact",

    // Hero Section
    heroTitle: "Omar Nour",
    heroSubtitle: "Software Engineer",
    heroHeadline: "Building Systems. Managing Operations. Solving Problems.",
    heroParagraph: "I build digital tools, organize business operations, and work with teams to turn practical problems into clear, working systems.",
    btnExplore: "Explore My Work",
    btnContact: "Contact Me",
    btnCV: "Download CV",

    // About Me Section
    aboutSectionTitle: "About Me",
    aboutTagline: "Software Engineer with hands-on experience in operations and management",
    aboutP1: "I have built experience across operations, project management, business management, logistics, team management, process development, and software development.",
    aboutP2: "Over time, I became interested in the connection between technology and business operations. Today, I work on both sides: writing code and building digital tools, as well as managing operations, organizing daily workflows, leading teams, and designing clear rules so the business stays organized.",
    aboutP3: "My long-term direction is Technical Project Management—combining Software Engineering, Operations, and Management.",

    // What I Do Section
    whatIDoTitle: "What I Do",
    whatIDoSubtitle: "Practical capabilities across software, operations, and business systems",

    pillar1Title: "Software Engineering",
    pillar1Desc: "Building clean websites, responsive user interfaces, and web applications.",
    pillar1Item1: "HTML, CSS, JavaScript",
    pillar1Item2: "React",
    pillar1Item3: "Bootstrap & Tailwind CSS",
    pillar1Item4: "WordPress",
    pillar1Item5: "Git & GitHub",
    pillar1Item6: "Testing & Responsive Design",

    pillar2Title: "Operations & Management",
    pillar2Desc: "Organizing business operations, managing people, and setting up practical processes.",
    pillar2Item1: "Operations Management",
    pillar2Item2: "People & Team Management",
    pillar2Item3: "KPI Systems",
    pillar2Item4: "Process Development",
    pillar2Item5: "Project Management & Sales Operations",
    pillar2Item6: "Logistics & Procurement",

    pillar3Title: "Systems & Automation",
    pillar3Desc: "Using software to solve operational problems and automate manual tasks.",
    pillar3Item1: "Business Systems",
    pillar3Item2: "Workflow Design & Internal Tools",
    pillar3Item3: "Employee Records & Attendance Systems",
    pillar3Item4: "Shift & Work Schedule Rules",
    pillar3Item5: "Process Automation & Documentation",
    pillar3Item6: "Operational Tracking & Follow-up",

    // Selected Projects Section
    projectsTitle: "Selected Projects",
    projectsSubtitle: "Real-world client websites and internal business automation tools",

    proj1Category: "Client Project — Doctor Website",
    proj1Title: "Dr. Mohamed Elshawaf Website",
    proj1Desc: "A professional website created for Dr. Mohamed Elshawaf, a doctor in Egypt and Libya specializing in allergy, sinus problems, and related conditions. It presents his professional background, medical services, and patient information.",

    proj2Category: "Client Project — Company Website",
    proj2Title: "SIMAH Website",
    proj2Desc: "A website project created for SIMAH to present their company services, identity, and contact information online.",

    proj3Category: "Internal Business System — Operational Tool",
    proj3Title: "CourseTopia Employee & Attendance System",
    proj3Desc: "An internal system built using Google Apps Script to manage employee information and attendance. It handles employee records, work schedules, permission and leave requests, late-arrival rules, and individual attendance requirements.",
    proj3Highlight: "This project demonstrates the practical connection between Technology + Operations + Management.",

    btnViewProject: "View Project",
    btnOpenSystem: "Open System",
    btnGitHubMore: "View More Projects on GitHub",

    // Spotix Case Study
    spotixTag: "Featured Work",
    spotixTitle: "Operations & Management — Spotix",
    spotixPeriod: "May 2026 – Present",
    spotixRoleDesc: "I handle broad company-wide operational responsibilities and final decision-making across the business.",

    spotixDeptsTitle: "Scope of Responsibilities",
    spotixDeptsDesc: "Moderation, marketing coordination, design operations, sales, procurement, production, cutting, workshop operations, engraving, finishing and pressing, shipping, logistics, HR, team management, KPI development, and process development.",

    spotixApproachTitle: "Management Approach & Problem Solving",
    spotixApproachP1: "When a problem happens, I do not just solve it myself. I listen to the team, understand the root cause, consider the customer's perspective, set a clear rule or process, train the responsible person, delegate the task, and follow up until the process stays stable.",
    spotixApproachP2: "The goal is to build a company that does not depend on one person for every decision. I have been developing department leaders so they can solve problems independently. I also research machine issues and document operational information so technical problems can be fixed faster without always waiting for external maintenance.",

    spotixImpactTitle: "What Has Been Achieved",
    spotixImpactItem1: "Expanded team structure and added new functional departments.",
    spotixImpactItem2: "Introduced clearer responsibilities and KPI-based accountability.",
    spotixImpactItem3: "Improved internal workflows between sales, production, workshop, and shipping.",
    spotixImpactItem4: "Developed department leadership and reduced dependency on direct management intervention.",
    spotixImpactItem5: "Helped accelerate sales and production workflows, contributing to business growth.",

    // Career Timeline
    expTitle: "Career Experience",
    expSubtitle: "Complete timeline from newest to oldest",

    // 1. Spotix
    exp1Role: "Operations & Management",
    exp1Company: "Spotix",
    exp1Date: "May 2026 – Present",
    exp1Point1: "Company-wide operations, people management, process development, sales operations, production, logistics, procurement, HR, KPIs, and final decision-making.",
    exp1Point2: "Managing multiple teams across moderation, design, sales, workshop, cutting, and shipping.",
    exp1Point3: "Building clear operational rules and developing department leaders.",

    // 2. Porto Group
    exp2Role: "Manager",
    exp2Company: "Porto Group — Qena",
    exp2Date: "January 2026 – May 2026",
    exp2Point1: "Managing workers, accounts, monthly closing, and tax account closing.",
    exp2Point2: "Recruiting and providing suitable workers for site operations.",
    exp2Point3: "General administrative, operational management, and problem solving.",

    // 3. 4Geeks
    exp3Role: "Project Manager",
    exp3Company: "4Geeks",
    exp3Date: "July 2025 – December 2025",
    exp3Point1: "Managed academy operations and worked on improving its financial and operational performance.",
    exp3Point2: "Restructured operations, reduced unnecessary costs, improved staffing, and managed work schedules.",
    exp3Point3: "Helped move the academy from a monthly loss to a monthly profit during my time there.",

    // 4. Creativa / Ather
    exp4Role: "Assistant Project & Event Coordinator",
    exp4Company: "Creativa / Ather",
    exp4Date: "2024 – 2025",
    exp4Point1: "Coordinated training events, supported instructors and trainees, organized logistics, and coordinated teams.",
    exp4Point2: "Worked as Intern Project Coordinator during Dev Arena activities, coordinating tracks, schedules, participants, instructors, logistics, and final reporting.",
    exp4Point3: "Built simple websites when needed to support events.",

    // 5. Kellogg's Noodles
    exp5Role: "Marketing Agent",
    exp5Company: "Kellogg's Noodles Egypt",
    exp5Date: "November 2024 – January 2025",
    exp5Point1: "Worked in outdoor sales and field marketing across villages and centers in Minya governorate.",
    exp5Point2: "Supervised sales representatives and supported representatives in the field.",
    exp5Point3: "Followed up on customer issues and supported promotional activities.",

    // 6. FabriGate
    exp6Role: "Purchasing Manager / Logistics Officer",
    exp6Company: "FabriGate",
    exp6Date: "2024",
    exp6Point1: "Purchasing, vendor sourcing, price negotiation, and delivery tracking.",
    exp6Point2: "Route planning and logistics coordination.",

    // 7. Military Production
    exp7Role: "Purchasing Manager / Site Supervisor",
    exp7Company: "Military Production / Water Authority",
    exp7Date: "2023 – 2024",
    exp7Point1: "Material procurement and contractor follow-up.",
    exp7Point2: "Site progress monitoring and solving daily operational problems.",
    exp7Point3: "Coordinating resources and reporting progress to engineers.",

    // 8. SES Solar Energy
    exp8Role: "Assistant Field Coordinator",
    exp8Company: "SES Solar Energy",
    exp8Date: "2023",
    exp8Point1: "Supervised solar installation teams and followed up on daily tasks.",
    exp8Point2: "Coordinated site visits, prepared tools and materials, and reported delays.",

    // 9. Nile Petroleum
    exp9Role: "Assistant Account Manager",
    exp9Company: "Nile Petroleum",
    exp9Date: "2023",
    exp9Point1: "Followed up on fuel station operations, payment collection, and bank deposits.",
    exp9Point2: "Coordinated fuel trucks and daily operational follow-up.",

    // 10. Yu-Gi Café
    exp10Role: "Business / Administrative Manager",
    exp10Company: "Yu-Gi Café",
    exp10Date: "August 2022 – August 2023",
    exp10Point1: "Managed the family business administratively and handled day-to-day operations.",
    exp10Point2: "Handled staff, inventory, suppliers, cash flow, and daily customer management.",

    // 11. Cosmetics Business
    exp11Role: "Business Manager",
    exp11Company: "Cosmetics & Perfume Business",
    exp11Date: "2021 – 2022",
    exp11Point1: "Managed a cosmetics and perfume business and handled its day-to-day operations.",

    // 12. Front-End Training
    exp12Role: "Front-End Intern / Trainee",
    exp12Company: "Ather / EraaSoft",
    exp12Date: "2021 – 2022",
    exp12Point1: "Training in HTML, CSS, JavaScript, Bootstrap, React, and responsive design.",

    // Education & Training
    eduTitle: "Education & Professional Training",
    eduSubtitle: "Completed education and specialized training programs",

    eduDegreeTitle: "Management Information Systems (MIS)",
    eduDegreeInst: "Higher Institute of Technology",
    eduDegreeStatus: "Completed Degree",

    train1Title: "Web Development",
    train1Inst: "National Telecommunication Institute (NTI)",
    train1Status: "Completed Training",

    train2Title: "Summer Training",
    train2Inst: "Information Technology Institute (ITI)",
    train2Status: "Completed Training",

    train3Title: "Front-End / React",
    train3Inst: "EraaSoft",
    train3Status: "Completed Training",

    // Professional Direction
    dirTitle: "Professional Direction",
    dirHeadline: "Technical Project Management",
    dirP1: "My long-term goal is to grow into a Technical Project Manager who can understand both the technical side of software and the operational side of business.",
    dirP2: "I want to combine Software Engineering, Operations, Management, and Project Management to help teams build practical systems that actually work for the business.",

    // Contact
    contactTitle: "Contact Me",
    contactSubtitle: "Direct contact options",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone / WhatsApp / Telegram",
    contactLocationLabel: "Location",
    contactLocationVal: "Egypt",
    contactSocialsLabel: "Links",

    footerRights: "Omar Nour. All rights reserved."
  },

  ar: {
    // Navigation
    navHome: "الرئيسية",
    navAbout: "عن عمر",
    navWhatIDo: "ماذا أفعل",
    navProjects: "المشاريع",
    navSpotix: "تجربة Spotix",
    navExperience: "الخبرات",
    navEducation: "التعليم",
    navContact: "التواصل",

    // Hero Section
    heroTitle: "عمر نور",
    heroSubtitle: "مهندس برمجيات",
    heroHeadline: "بناء الأنظمة. إدارة العمليات. حل المشكلات.",
    heroParagraph: "أقوم ببناء الحلول الرقمية، وتحسين العمليات التجارية، وإدارة الأفراد والعمليات لتحويل المشكلات إلى أنظمة عملية.",
    btnExplore: "استكشف أعمالي",
    btnContact: "تواصل معي",
    btnCV: "تحميل السيرة الذاتية",

    // About Me Section
    aboutSectionTitle: "عن عمر نور",
    aboutTagline: "مهندس برمجيات بخبرة عملية في إدارة العمليات والأفراد",
    aboutP1: "بنيت خبرتي العملية عبر مجالات متعددة شملت: إدارة العمليات، إدارة المشروعات، إدارة الأعمال، اللوجستيات، إدارة الأفراد، تطوير الإجراءات، وتطوير البرمجيات.",
    aboutP2: "مع الوقت، زاد اهتمامي بالربط بين التكنولوجيا والعمليات التجارية. اليوم أعمل على الجانبين: بناء البرمجيات والأنظمة الرقمية، وإدارة العمليات وتنظيم مسارات العمل وقيادة الفرق وتصميم القواعد والإجراءات لضمان تنظيم العمل وقابليته للتوسع.",
    aboutP3: "توجّهي المهني المستقبلي هو إدارة المشروعات التقنية (Technical Project Management)، للجمع بين تطوير البرمجيات، إدارة العمليات، وإدارة الأفراد.",

    // What I Do Section
    whatIDoTitle: "ماذا أفعل؟",
    whatIDoSubtitle: "قدرات عملية في البرمجيات والعمليات وأنظمة الأعمال",

    pillar1Title: "هندسة البرمجيات",
    pillar1Desc: "بناء المواقع الإلكترونية، واجهات المستخدم المتجاوبة، وتطبيقات الويب.",
    pillar1Item1: "HTML, CSS, JavaScript",
    pillar1Item2: "React",
    pillar1Item3: "Bootstrap & Tailwind CSS",
    pillar1Item4: "WordPress",
    pillar1Item5: "Git & GitHub",
    pillar1Item6: "الاختبار والتصميم المتجاوب",

    pillar2Title: "إدارة العمليات والأفراد",
    pillar2Desc: "تنظيم العمليات التجارية، إدارة فريق العمل، وتطوير إجراءات العمل.",
    pillar2Item1: "إدارة العمليات (Operations Management)",
    pillar2Item2: "إدارة الأفراد والفرق (People Management)",
    pillar2Item3: "أنظمة ومؤشرات الأداء (KPI Systems)",
    pillar2Item4: "تطوير مسارات وإجراءات العمل (Process Development)",
    pillar2Item5: "إدارة المشروعات وعمليات المبيعات",
    pillar2Item6: "اللوجستيات والمشتريات (Procurement)",

    pillar3Title: "الأنظمة والأتمتة",
    pillar3Desc: "استخدام التكنولوجيا لحل المشكلات التشغيلية وأتمتة المهام اليدوية.",
    pillar3Item1: "أنظمة الأعمال (Business Systems)",
    pillar3Item2: "تصميم مسارات العمل والأدوات الداخلية",
    pillar3Item3: "أنظمة بيانات الموظفين ومتابعة الحضور",
    pillar3Item4: "قواعد جداول العمل والشيفتات المختلفة",
    pillar3Item5: "أتمتة الإجراءات والتوثيق التشغيلي",
    pillar3Item6: "متابعة الأداء التشغيلي والتقارير",

    // Selected Projects Section
    projectsTitle: "المشاريع المختارة",
    projectsSubtitle: "مواقع إلكترونية وأدوات أتمتة إدارية تم تنفيذها لعملاء حقيقيين",

    proj1Category: "مشروع عميل — موقع طبي",
    proj1Title: "موقع د. محمد الشواف",
    proj1Desc: "موقع إلكتروني احترافي تم إنشاؤه للدكتور محمد الشواف، طبيب متخصص في أمراض الحساسية والأنف والأذن والحنجرة بمصر وليبيا. يعرض مؤهلاته الطبيّة والخدمات التي يقدمها وإرشادات المرضى.",

    proj2Category: "مشروع عميل — موقع شركة",
    proj2Title: "موقع شركة سِمة (SIMAH)",
    proj2Desc: "مشروع موقع إلكتروني تم إنشاؤه لشركة سِمة لعرض خدمات الشركة وهويتها ومعلومات التواصل.",

    proj3Category: "نظام إداري داخلي — أتمتة عمليات",
    proj3Title: "نظام CourseTopia لإدارة الموظفين والحضور",
    proj3Desc: "نظام إداري داخلي تم تطويره باستخدام Google Apps Script لإدارة بيانات الموظفين والحضور. يتناول جداول العمل المتنوعة لكل موظف، طلبات الإجازات والأذونات، سياسات التأخير، ومتطلبات الحضور للمكتب.",
    proj3Highlight: "يوضح هذا المشروع الربط العملي بين التكنولوجيا + العمليات + الإدارة لحل مشكلة واقعية.",

    btnViewProject: "عرض المشروع",
    btnOpenSystem: "فتح النظام",
    btnGitHubMore: "عرض المزيد من المشاريع على GitHub",

    // Spotix Case Study
    spotixTag: "خبرة عملية حقيقية",
    spotixTitle: "إدارة العمليات — Spotix",
    spotixPeriod: "مايو 2026 – الحالي",
    spotixRoleDesc: "أتولى مسؤوليات تشغيلية وإدارية شاملة على مستوى الشركة وأتخذ القرارات النهائية.",

    spotixDeptsTitle: "نطاق المسؤوليات",
    spotixDeptsDesc: "الإشراف على والتنسيق بين أقسام: خدمة العملاء (Moderation)، التسويق، التصميم، المبيعات، المشتريات، الإنتاج، القص، الورشة، الحفر، التشطيب والكبس، الشحن، اللوجستيات، الموارد البشرية، وتطوير الأنظمة ومؤشرات الأداء.",

    spotixApproachTitle: "منهجية الإدارة وحل المشكلات",
    spotixApproachP1: "عند حدوث مشكلة، لا أكتفي بحلها بنفسي مؤقتاً. أستمع للفريق، أفهم السبب الجذر، أراعي وجهة نظر العميل، أضع قاعدة أو إجراء عمل واضح، أدرّب الشخص المسؤول، أفوّض الصلاحيات، وأتابع حتى يستقر النظام.",
    spotixApproachP2: "الهدف هو بناء شركة لا تعتمد على شخص واحد في كل قرار. أعمل على تطوير قادة الأقسام ليحلوا المشكلات بأنفسهم. كما أقوم ببحث أعطال الماكينات وتوثيق تشغيلها لتشخيص الأعطال وسرعة إصلاحها دون انتظار الصيانة الخارجية دائماً.",

    spotixImpactTitle: "ما تم تحقيقه",
    spotixImpactItem1: "توسيع هيكل الفريق واستحداث أقسام وظيفية جديدة.",
    spotixImpactItem2: "تحديد المسؤوليات بوضوح وبناء نظام متابعة أداء قائم على الـ KPIs.",
    spotixImpactItem3: "تحسين مسارات العمل بين المبيعات، الإنتاج، الورشة، والشحن.",
    spotixImpactItem4: "تطوير قادة الأقسام وتقليل الاعتماد على التدخل المباشر للإدارة.",
    spotixImpactItem5: "المساهمة في تسريع عمليات المبيعات والإنتاج وتطوير الأعمال.",

    // Career Timeline
    expTitle: "الخبرات المهنية",
    expSubtitle: "التسلسل الزمني الكامل من الأحدث إلى الأقدم",

    // 1. Spotix
    exp1Role: "إدارة العمليات والإدارة التنفيذية",
    exp1Company: "Spotix",
    exp1Date: "مايو 2026 – الحالي",
    exp1Point1: "إدارة العمليات الشاملة، إدارة الأفراد، تطوير الإجراءات، المبيعات، الإنتاج، اللوجستيات، المشتريات، الموارد البشرية، الـ KPIs، واتخاذ القرارات النهائية.",
    exp1Point2: "إدارة الفرق المتعددة بين التصميم، الورشة، القص، الشحن، وخدمة العملاء.",
    exp1Point3: "بناء قواعد تشغيلية واضحة وتطوير قادة الأقسام.",

    // 2. Porto Group
    exp2Role: "مدير",
    exp2Company: "Porto Group — قنا",
    exp2Date: "يناير 2026 – مايو 2026",
    exp2Point1: "إدارة العمالة، الحسابات، الإغلاق الشهري، وإغلاق الحسابات الضريبية.",
    exp2Point2: "توظيف وتوفير العمالة المناسبة لاحتياجات الموقع.",
    exp2Point3: "الإدارة العامة وحل المشكلات التشغيلية والإدارية.",

    // 3. 4Geeks
    exp3Role: "مدير مشروع (Project Manager)",
    exp3Company: "4Geeks",
    exp3Date: "يوليو 2025 – ديسمبر 2025",
    exp3Point1: "إدارة عمليات الأكاديمية وتحسين أداء الشركة المالي والتشغيلي.",
    exp3Point2: "إعادة هيكلة العمليات، تقليل التكاليف غير الضرورية، تحسين توزيع العمالة، وإدارة جداول العمل.",
    exp3Point3: "النجاح في نقل الأكاديمية من الخسارة الشهرية إلى تحقيق أرباح شهرياً خلال فترة الإدارة.",

    // 4. Creativa / Ather
    exp4Role: "مساعد منسق مشاريع وفاعليات",
    exp4Company: "Creativa / Ather",
    exp4Date: "2024 – 2025",
    exp4Point1: "تنسيق الفاعليات التدريبية، دعم المحاضرين والمتدربين، تنظيم اللوجستيات، وتنسيق الفرق.",
    exp4Point2: "منسق مشاريع متدرب في فعاليات Dev Arena للإشراف على المسارات الجانبية، الجداول، اللوجستيات والتقارير.",
    exp4Point3: "بناء مواقع ويب وأدوات بسيطة لدعم الفاعليات عند الحاجة.",

    // 5. Kellogg's Noodles
    exp5Role: "مسؤول تسويق ومبيعات",
    exp5Company: "Kellogg's Noodles Egypt",
    exp5Date: "نوفمبر 2024 – يناير 2025",
    exp5Point1: "العمل في المبيعات الميدانية والتسويق الخارجي وتغطية القرى والمراكز بمحافظة المنيا.",
    exp5Point2: "الإشراف على مندوبي المبيعات ودعمهم ميدانياً.",
    exp5Point3: "متابعة مشكلات العملاء ودعم الفاعليات والأنشطة الترويجية.",

    // 6. FabriGate
    exp6Role: "مدير مشتريات ومسؤول لوجستيات",
    exp6Company: "FabriGate",
    exp6Date: "2024",
    exp6Point1: "المشتريات، البحث عن الموردين، التفاوض على الأسعار، ومتابعة التوريد.",
    exp6Point2: "تخطيط مسارات الشحن والتنسيق اللوجستي.",

    // 7. Military Production
    exp7Role: "مدير مشتريات ومشرف موقع",
    exp7Company: "الإنتاج الحربي / هيئة مياه الشرب",
    exp7Date: "2023 – 2024",
    exp7Point1: "مشتريات المواد والتوريدات ومتابعة المقاولين بالموقع.",
    exp7Point2: "متابعة تقدم العمل بالموقع وحل المشكلات التشغيلية اليومية.",
    exp7Point3: "تنسيق الموارد وتقديم تقارير متابعة المهندسين.",

    // 8. SES Solar Energy
    exp8Role: "مساعد منسق ميداني",
    exp8Company: "SES Solar Energy",
    exp8Date: "2023",
    exp8Point1: "الإشراف على فرق التركيب ومتابعة المهام اليومية بالموقع.",
    exp8Point2: "تنسيق المعاينات الميدانية، تجهيز الأدوات والمعدات، ومتابعة المعوقات.",

    // 9. Nile Petroleum
    exp9Role: "مساعد مدير حسابات وتغطية عمليات",
    exp9Company: "Nile Petroleum",
    exp9Date: "2023",
    exp9Point1: "متابعة تشغيل المحطات، التحصيلات، والإيداعات البنكية.",
    exp9Point2: "تنسيق حركة سيارات البنزين والمتابعة التشغيلية اليومية.",

    // 10. Yu-Gi Café
    exp10Role: "مدير إداري وتجاري",
    exp10Company: "Yu-Gi Café",
    exp10Date: "أغسطس 2022 – أغسطس 2023",
    exp10Point1: "إدارة العمليات اليومية والإدارية لنشاط تجاري عائلي.",
    exp10Point2: "إدارة العمالة، المخزون، الموردين، الحسابات اليومية، والتعامل مع العملاء.",

    // 11. Cosmetics Business
    exp11Role: "مدير نشاط تجاري",
    exp11Company: "مشروع مستحضرات التجميل والعطور",
    exp11Date: "2021 – 2022",
    exp11Point1: "إدارة نشاط تجاري في مجال مستحضرات التجميل والعطور ومتابعة تشغيله اليومي.",

    // 12. Front-End Training
    exp12Role: "متدرب تطوير واجهات المستخدم",
    exp12Company: "Ather / EraaSoft",
    exp12Date: "2021 – 2022",
    exp12Point1: "تدريب عملي على HTML, CSS, JavaScript, Bootstrap, React, والتصميم المتجاوب.",

    // Education & Training
    eduTitle: "التعليم والتدريب المهني",
    eduSubtitle: "المؤهلات الدراسية والبرامج التدريبية المكتملة",

    eduDegreeTitle: "نظم المعلومات الإدارية (MIS)",
    eduDegreeInst: "المعهد العالي للتكنولوجيا",
    eduDegreeStatus: "درجة بكالوريوس مكتملة",

    train1Title: "تطوير الويب",
    train1Inst: "المعهد القومي للاتصالات (NTI)",
    train1Status: "برنامج تدريبي مكتمل",

    train2Title: "التدريب الصيفي",
    train2Inst: "معهد تكنولوجيا المعلومات (ITI)",
    train2Status: "برنامج تدريبي مكتمل",

    train3Title: "تطوير الواجهات و React",
    train3Inst: "أكاديمية EraaSoft",
    train3Status: "برنامج تدريبي مكتمل",

    // Professional Direction
    dirTitle: "التوجّه المهني",
    dirHeadline: "إدارة المشروعات التقنية (Technical Project Management)",
    dirP1: "هدفي المهني هو التطور كـ Technical Project Manager يستطيع فهم الجانب التقني للبرمجيات والجانب التشغيلي للأعمال بنفس القدر.",
    dirP2: "أريد الجمع بين تطوير البرمجيات، إدارة العمليات، وإدارة الأفراد لمساعدة الفرق على بناء أنظمة عملية تخدم أهداف العمل الحقيقية.",

    // Contact
    contactTitle: "تواصل معي",
    contactSubtitle: "معلومات التواصل المباشر",
    contactEmailLabel: "البريد الإلكتروني",
    contactPhoneLabel: "الهاتف / واتساب / تليجرام",
    contactLocationLabel: "الموقع",
    contactLocationVal: "مصر",
    contactSocialsLabel: "المنصات والروابط",

    footerRights: "عمر نور. جميع الحقوق محفوظة."
  }
};

let currentLang = localStorage.getItem("omar_nour_lang") || "en";
let currentTheme = localStorage.getItem("omar_nour_theme") || "dark";

// DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavigation();
  initScrollSpy();
});

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
  localStorage.setItem("omar_nour_theme", theme);
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
  localStorage.setItem("omar_nour_lang", lang);
  
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

  // Update title
  const titleEl = document.querySelector("title");
  if (titleEl) {
    titleEl.textContent = lang === "ar" 
      ? "عمر نور | مهندس برمجيات وإداري عمليات" 
      : "Omar Nour | Software Engineer & Operations";
  }
}

// Mobile Menu Navigation Drawer
function initNavigation() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNavDrawer");
  const closeBtn = document.getElementById("closeNavBtn");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    const closeMenu = () => {
      mobileNav.classList.remove("active");
      document.body.style.overflow = "";
    };

    if (closeBtn) closeBtn.addEventListener("click", closeMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }
}

// Scroll Spy for Nav Highlighting
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}
