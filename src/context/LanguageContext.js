import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * @typedef {'en' | 'fr' | 'sw'} Language
 */

/**
 * @typedef {Object} LanguageContextType
 * @property {Language} language
 * @property {(lang: Language) => void} setLanguage
 * @property {(key: string, params?: object) => string} t
 */

const translations = {
  en: {
    // About Page
    "about.title": "About ZetCollect:",
    "about.description":
      "ZetCollect is a cutting-edge, mobile-first platform designed to transform cash collection and management for microfinance institutions, cooperatives, and financial service providers across Africa. Built with the unique needs of African markets in mind, ZetCollect streamlines operations, enhances transparency, and fosters trust between institutions and their clients. Our mission is to empower organizations to manage collections efficiently, securely, and at scale, while bridging the gap to financial inclusion in underserved communities.",
    "about.numbers.title": "ZetCollect Group in Numbers",
    "about.numbers.teamExperience": "Team Professional Experience",
    "about.numbers.successStories": "Success Stories",
    "about.numbers.industryCovers": "Industry Covers",
    "about.geography.title": "Our Geography",
    "about.geography.description":
      "Headquartered in Kenya and operating internationally, our team drives digital transformation for businesses globally. We ensure on-site and virtual presence to deliver services to our major target markets in:",
    "about.geography.kenya": "Kenya",
    "about.geography.kenyaOffice": "Office locations: Nairobi",
    "about.geography.rwanda": "Rwanda",
    "about.geography.rwandaOffice": "V. Office locations: Kigali",
    "about.geography.cameroon": "Cameroon",
    "about.geography.cameroonOffice": "V. Office locations: Douala",
    "about.clients.title": "Our Clients",
    "about.clients.description":
      "We have collaborated with companies from 3 continents which are Africa, North America and Europe. Some of our prominent clients include:",
    "about.clients.logoAlt": "Client Logo {index}",
    "about.pricingPolicy.title": "Our Pricing Policy",
    "about.pricingPolicy.description":
      "Depending on a project and the nature of the delivered service, we offer the following pricing models:",
    "about.pricingPolicy.subscriptionBased": "Subscription-Based Model",
    "about.pricingPolicy.subscriptionBasedDesc":
      "This model allows clients to access our comprehensive suite of services, provided by our solution which are ZetCollect and Supply Chain Optimization as a Service (SCOS). The subscription includes regular updates, new features, and enhancements. Clients maintain continuous access to these services for the duration of their subscription.",
    "about.pricingPolicy.payAsYouGo": "Pay As You Go",
    "about.pricingPolicy.payAsYouGoDesc":
      "Our pay-as-you-go model offers flexibility for clients to use ZetCollect and SCOS services as needed, paying only for the features and resources utilized. This approach is ideal for businesses seeking scalable solutions without long-term commitments.",
    "about.pricingPolicy.serviceContinuity": "Service Continuity Model",
    "about.pricingPolicy.serviceContinuityDesc":
      "The service continuity model ensures uninterrupted access to ZetCollect and SCOS with dedicated support, proactive maintenance, and priority updates. This model is designed for businesses requiring consistent performance and reliability.",
    "about.pricingPolicy.onSiteDedicated": "On-Site Dedicated Model",
    "about.keyFeatures.title": "Our Key Features",
    "about.keyFeatures.clientManagement.title": "Client Management",
    "about.keyFeatures.clientManagement.description":
      "Seamlessly onboard, track, and manage client profiles with real-time updates, ensuring personalized service and accurate records.",
    "about.keyFeatures.collectorManagement.title": "Collector Management",
    "about.keyFeatures.collectorManagement.description":
      "Empower field agents with intuitive tools to schedule, track, and report collections, optimized for both online and offline environments.",
    "about.keyFeatures.mobileCollection.title": "Mobile Collection",
    "about.keyFeatures.mobileCollection.description":
      "Our offline-capable mobile app enables collectors to process payments anywhere, anytime, ensuring uninterrupted service in low-connectivity areas.",
    "about.keyFeatures.bookletSystem.title": "Booklet System",
    "about.keyFeatures.bookletSystem.description":
      "Digitize traditional collection booklets with a secure, user-friendly interface for tracking transactions and reducing errors.",
    "about.keyFeatures.reportsAnalytics.title": "Reports & Analytics",
    "about.keyFeatures.reportsAnalytics.description":
      "Gain actionable insights with real-time dashboards, customizable reports, and predictive analytics to optimize operations and drive smarter decisions.",
    "about.keyFeatures.transactionHistory.title": "Transaction History",
    "about.keyFeatures.transactionHistory.description":
      "Maintain a transparent, auditable record of all transactions, accessible to both institutions and clients for trust and accountability.",
    "about.keyFeatures.smsNotifications.title": "SMS Notifications",
    "about.keyFeatures.smsNotifications.description":
      "Keep clients informed with automated, timely SMS updates on payments, balances, and reminders, enhancing engagement and compliance.",
    "about.keyFeatures.userAccessRoles.title": "User Access & Roles",
    "about.keyFeatures.userAccessRoles.description":
      "Securely manage permissions with role-based access, ensuring data integrity and operational efficiency across teams.",
    "about.keyFeatures.dailySynchronization.title": "Daily Synchronization",
    "about.keyFeatures.dailySynchronization.description":
      "Automatically sync data across devices and systems, even in low-bandwidth settings, to keep information up-to-date and reliable.",
    "about.keyFeatures.branchSetup.title": "Branch Setup",
    "about.keyFeatures.branchSetup.description":
      "Easily configure and manage multiple branches, tailoring workflows to regional needs while maintaining centralized oversight.",
    "why.title2": "Why ZetCollect",
    "why.subtitle":
      "Discover what sets ZetCollect apart in delivering exceptional value to our clients.",
    "why.quality.title": "Quality-Centric Approach",
    "why.quality.desc":
      "We prioritize excellence in every aspect, delivering reliable, user-friendly solutions tailored to your business needs.",
    "why.security.title": "Top-notch Security",
    "why.security.desc":
      "Our platform employs advanced encryption and compliance measures to ensure your data and transactions are secure.",
    "why.africa.title": "Built for Africa",
    "why.africa.desc":
      "Designed with Africa's unique challenges in mind, offering offline capabilities and localized solutions.",
    "why.fraud.title": "Fraud Prevention",
    "why.fraud.desc":
      "Advanced tools to detect and prevent fraudulent activities, protecting your business and clients.",
    "why.mobile.title": "Mobile-First Design",
    "why.mobile.desc":
      "Our platform is optimized for mobile use, enabling seamless operations in the field.",
    "why.customizable.title": "Customizable Solutions",
    "why.customizable.desc":
      "Tailor our platform to fit your specific workflows and business requirements.",
    "why.integrable.title": "Seamless Integration",
    "why.integrable.desc":
      "Easily integrate with existing systems to enhance your operational efficiency.",
    "why.data.title": "Data-Driven Insights",
    "why.data.desc":
      "Leverage real-time analytics to make informed decisions and optimize performance.",
    // Why ZetCollect
    "why.title": "Why ZetCollect",
    "why.quality.alt": "Quality Badge",
    "why.security.alt": "Security Icon",
    "why.readMore": "Read more",

    // Blog Page
    "blog.title": "Blog",
    "blog.category.financial": "FINANCIAL TECHNOLOGY",
    "blog.post1.title":
      "Transforming Financial Collections with ZetCollect’s Mobile-First Innovation",
    "blog.post1.description":
      "ZetCollect simplifies financial collections across Africa with its intuitive, offline-capable mobile app. Packed with robust security and smart analytics, it streamlines payments and builds trust. Discover how it’s revolutionizing finance for institutions.",
    "blog.post2.title":
      "Securing Financial Futures with ZetCollect’s Advanced Protection",
    "blog.post2.description":
      "ZetCollect safeguards your financial collections with cutting-edge fraud prevention tools. Its robust security ensures trust and reliability for African institutions. Learn how it protects your operations.",
    "blog.post3.title": "Boost Efficiency with ZetCollect’s Smart Analytics",
    "blog.post3.description":
      "ZetCollect’s powerful analytics dashboard delivers real-time insights for smarter financial decisions. Tailored for Africa, it streamlines collections and enhances transparency. Explore its data-driven impact.",

    // Events Page
    "events.title": "Events",
    "events.subtitle": "Find what events are coming next.",
    "events.filter.all": "All Events",
    "events.filterType": "Event Type",
    "events.type.webinar": "Webinar",
    "events.type.inperson": "In Person",
    "events.upcoming": "Upcoming Events",
    "events.event1.month": "AUGUST",
    "events.event1.day": "4",
    "events.event1.type": "Webinar",
    "events.event1.title": "ZetCollect Virtual Showcase",
    "events.event1.description":
      "Our ZetCollect Live Demonstration event offers an in-depth look into a comprehensive suite of services designed to revolutionize cash collections. You will explore how ZetCollect empowers organizations with Client Management, Collector Management, Branch Setup, and Mobile Collection capabilities. Witness firsthand how our Booklet System, Transaction History, Reports & Analytics, and robust User Access & Roles enhance efficiency and streamline operations. Additionally, discover the benefits of SMS Notifications and seamless Daily Synchronization. Don’t miss this opportunity to see how ZetCollect can transform your approach to cash collection and management.",
    "events.event1.dateTime": "MONDAY, August, 4, 2025, AT GMT+1",
    "events.event1.time": "10:00AM TO 11:00AM",
    "events.event2.month": "OCTOBER",
    "events.event2.day": "6",
    "events.event2.type": "In Person",
    "events.event2.title": "Annual Tech Innovation Summit",
    "events.event2.description":
      "Join industry leaders and innovators at the Annual Tech Innovation Summit to discuss the latest trends in technology, digital transformation, and future-proof strategies. Featuring keynote speakers, interactive workshops, and networking opportunities.",
    "events.event2.dateTime": "MONDAY, OCTOBER, 6, 2025, AT GMT+1",
    "events.event2.time": "09:00AM TO 05:00PM",

    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.why": "Why ZetCollect",
    "nav.demo": "Demo",
    "nav.upcoming": "Upcoming Features",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.login": "Login",

    // Hero Section
    "hero.title": "Transform Cash Collections with ZetCollect",
    "hero.subtitle":
      "Empowering African microfinance institutions with efficient, transparent, and fraud-resistant digital collection solutions",
    "hero.cta.demo": "Get Started",
    "hero.cta.request": "Request a Demo",
    "hero.cta.features": "Explore Features",

    // Features
    "features.title": "Core Features",
    "features.subtitle": "Everything you need to digitize cash collections",
    "features.client.title": "Client Management",
    "features.client.desc":
      "Comprehensive client database with detailed profiles and collection history.",
    "features.collector.title": "Collector Management",
    "features.collector.desc":
      "Track collector performance, routes, and daily collection targets.",
    "features.branch.title": "Branch Setup",
    "features.branch.desc":
      "Multi-branch support with customizable settings and hierarchies.",
    "features.mobile.title": "Mobile Collection",
    "features.mobile.desc":
      "Offline-capable mobile app for collectors to record transactions anywhere.",
    "features.booklet.title": "Booklet System",
    "features.booklet.desc":
      "Digital booklet management with QR codes and validation features.",
    "features.history.title": "Transaction History",
    "features.history.desc":
      "Complete audit trail of all collection activities and payments.",
    "features.reports.title": "Reports & Analytics",
    "features.reports.desc":
      "Real-time dashboards and comprehensive reporting for data-driven decisions.",
    "features.access.title": "User Access & Roles",
    "features.access.desc":
      "Role-based permissions ensuring secure access to sensitive information.",
    "features.sms.title": "SMS Notifications",
    "features.sms.desc":
      "Automated reminders and confirmations via SMS for better communication.",
    "features.sync.title": "Daily Synchronization",
    "features.sync.desc":
      "Seamless data sync between mobile devices and central database.",

    // Demo Section
    "demo.title": "ZetCollect in Action",
    "demo.subtitle":
      "Watch how ZetCollect streamlines collections for African MFIs",
    "demo.cta": "Request a Demo",
    "demo.video_title": "ZetCollect in Action",
    "demo.play_button": "Play video",
    "demo.content_title": "What you'll see in this demo:",
    "demo.points.real_time_tracking": "Real-time collection tracking",
    "demo.points.offline_mode": "Offline mode capabilities",
    "demo.points.analytics_dashboard": "Analytics dashboard overview",
    "demo.points.mobile_collector": "Mobile collector interface",
    "demo.points.fraud_prevention": "Fraud prevention features",
    "demo.points.multi_branch": "Multi-branch management",

    // Upcoming Features
    "upcoming.title": "Upcoming Features",
    "upcoming.subtitle":
      "Exciting features coming soon to enhance your collection experience",
    "upcoming.gps.title": "GPS Traceability",
    "upcoming.gps.desc":
      "Real-time location tracking for enhanced security and route optimization.",
    "upcoming.alerts.title": "Missed Collection Alerts",
    "upcoming.alerts.desc":
      "Automated notifications for missed collections and follow-up reminders.",
    "upcoming.risk.title": "Client Risk Profile & Rating",
    "upcoming.risk.desc":
      "AI-powered risk assessment and client rating system for better decision making.",
    "upcoming.route.title": "Route & Schedule Optimization",
    "upcoming.route.desc":
      "Smart routing algorithms to optimize collector schedules and maximize efficiency.",
    "upcoming.portal.title": "Client Self-Access Portal",
    "upcoming.portal.desc":
      "Allow clients to view their collection history and make payments independently.",
    "upcoming.currency.title": "New Currency System (CDF)",
    "upcoming.currency.desc":
      "Seamless integration of Congolese Franc (CDF) for all transactions and financial reporting.",

    // Contact Us
    "contact.title": "Contact Us",
    "contact.subtitle": "Please contact us to discuss any other queries.",
    "contact.form.title": "Talk to ZetCollect to create your digital future.",
    "contact.form.first_name": "First Name*",
    "contact.form.last_name": "Last Name*",
    "contact.form.email": "Business Email*",
    "contact.form.job_title": "Job Title*",
    "contact.form.contact_number": "Work Phone*",
    "contact.form.organisation": "Company Name*",
    "contact.form.country": "Country*",
    "contact.form.country.cameroon": "Cameroon",
    "contact.form.country.kenya": "Kenya",
    "contact.form.country.gabon": "Gabon",
    "contact.form.country.tchad": "Tchad",
    "contact.form.country.congo": "Republic of Congo",
    "contact.form.message": "Your Message*",
    "contact.form.functional_role": "Functional Role*",
    "contact.form.functional_role.finance": "Finance and Accounting",
    "contact.form.functional_role.hr": "Human Resource",
    "contact.form.functional_role.operator": "Operator",
    "contact.form.functional_role.it": "IT",
    "contact.form.job_level": "Job Level*",
    "contact.form.job_level.c_level": "C-Level",
    "contact.form.job_level.vp": "Vice President",
    "contact.form.job_level.director": "Director",
    "contact.form.job_level.manager": "Manager",
    "contact.form.job_level.other": "Other",
    "contact.form.how_did_you_hear": "How did you hear about ZetCollect?",
    "contact.form.how_did_you_hear.search": "Search Engine",
    "contact.form.how_did_you_hear.referral": "Referral",
    "contact.form.opt_in":
      "Opt in to ZetCollect tailored information such as industry news and reports, solution updates and events, via email and telephone",
    "contact.form.submit": "Submit",
    "contact.microservices.title": "Serving Microservices Across Africa",

    // Common
    "common.learnMore": "Learn More",
    "common.contactUs": "Contact Us",
    "common.getStarted": "Get Started",
    "common.comingSoon": "Coming Soon",
    "common.newsletter": "Stay updated—join our newsletter!",
    "common.talkToUs": "Want these now? Talk to us!",

    // Footer
    "footer.logo_alt": "Company Logo",
    "footer.help_text":
      "Need help finding the best solution for your business?",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.youtube": "YouTube",
    "footer.about": "ABOUT",
    "footer.who_we_serve": "Who We Serve",
    "footer.customer_story": "Customer Story",
    "footer.about_us": "About Us",
    "footer.pricing": "Pricing",
    "footer.newsroom": "NEWSROOM",
    "footer.articles": "Articles",
    "footer.events_webinars": "Events and Webinars",
    "footer.support": "SUPPORT",
    "footer.faq": "FAQ",
    "footer.training_certification": "Training and Certification",
    "footer.rights":
      "Powered By © {year} Evolv ZetCollect Group Ltd. All rights reserved.",

    // WorkInProgressPage
    "wip.title": "Page Under Construction",
    "wip.description":
      "We're working hard to bring this page to life. Check back soon for updates!",
    "wip.backToHome": "Go back to Home",

    // CustomerSupportPage
    "support.title": "Customer support",
    "support.subtitle": "Solution specific support",
    "support.selectLabel": "Select a feature",
    "support.selectPlaceholder": "Select a feature",
    "support.contactLabel": "{feature} Support:",
    "support.phone": "Phone",
    "support.email": "Email",
    "support.noSelection": "Please select a feature to view support details.",
    "support.communityButton": "Online Support Community",
    // Feature names
    "support.feature.client": "Client Management",
    "support.feature.collector": "Collector (Agent) Management",
    "support.feature.branch": "Branch & Institution Setup",
    "support.feature.mobile": "Mobile Collection Interface",
    "support.feature.booklet": "Booklet (Carnet) System",
    "support.feature.history": "Transaction History",
    "support.feature.reports": "Reports & Analytics",
    "support.feature.access": "User Access & Roles",
    "support.feature.sms": "SMS Notifications (Optional)",
    "support.feature.sync": "Daily Synchronization",

    // ReleaseNotesPage
    "release.title": "Release Notes",
    "release.description1":
      "ZetCollect is a cutting-edge finance collection app tailored for African institutions. Its intuitive mobile interface ensures seamless payments, even offline. Advanced security and analytics empower efficient, transparent operations.",
    "release.description2":
      "Our SaaS platform brings fresh updates every week, neatly summarized each month. VPC users enjoy quarterly updates with a 14-day test period, or 45 days with staging. ZetCollect offers secure, flexible, and insightful tools to simplify your financial operations.",
    "release.saas.title": "ZetCollect System: 2025 release",
    "release.saas.systemVersion":
      "<strong>Version</strong>: 1.2.0 - 25th April 2025",
    "release.saas.systemVersion2":
      "<strong>Version</strong>: 1.2.1 - 27th June 2025",
    "release.saas.title2": "ZetCollect Website: 2025 release",
    "release.saas.systemVersionWeb":
      "<strong>Version</strong>: 1.0.1-Beta - 25th April 2025",
    "release.saas.systemVersionWeb2":
      "<strong>Version</strong>: 1.0.2-Beta - 27th June 2025",
    "release.saas.systemVersionWeb3":
      "<strong>Version</strong>: 1.0.3-Beta - 12th July 2025",
    "release.saas.systemVersionWeb4":
      "<strong>Version</strong>: 1.0.4-Beta - 18th July 2025",

    // FAQPage
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle":
      "Here's the answers to all your burning questions about ZetCollect. You can also contact us directly or dive deeper into our knowledge base and API documentation.",
    "faq.questions.client_management":
      "How does ZetCollect's Client Management feature work?",
    "faq.answers.client_management":
      "ZetCollect's Client Management allows you to easily add, update, and manage all your client information, including custom fields. You can allocate specific collection books to clients for structured tracking and set daily saving expectations to monitor their progress effectively.",
    "faq.questions.collector_management":
      "What functionalities does the Collector (Agent) Management offer?",
    "faq.answers.collector_management":
      "The Collector (Agent) Management feature enables you to assign agents to specific branches, allocate clients and collection zones to them, and track their daily activities in real-time. This includes monitoring collected amounts and identifying missed collections.",
    "faq.questions.multi_branch":
      "Can ZetCollect support multiple branches and institutions?",
    "faq.answers.multi_branch":
      "Yes, ZetCollect supports a multi-branch setup with role-based access control, allowing you to manage different branches efficiently. It also provides centralized head office control for comprehensive monitoring of performance across all your branches.",
    "faq.questions.mobile_collection":
      "What are the capabilities of the Mobile Collection Interface?",
    "faq.answers.mobile_collection":
      "The Mobile Collection Interface is an Android application designed for collectors, enabling real-time entry of collections directly from client locations. It functions seamlessly both online and offline, automatically syncing all data when an internet connection is available, ensuring continuous operation.",
    "faq.questions.booklet_system":
      "How does the Booklet (Carnet) System prevent fraud?",
    "faq.answers.booklet_system":
      "The Booklet (Carnet) System assigns each client a digital collection booklet. Collectors mark transactions on the app based on entries in this digital booklet. This process creates a transparent and verifiable record, significantly reducing the risk of fraud and misreporting.",

    // Training and Certification Page
    "training.title": "Take your career to the next level",
    "training.subtitle":
      "Get the product knowledge you need to become successful in your field",
    "training.heroImageAlt": "Career development illustration",
    "training.courses.title": "Courses",
    "training.courses.subtitle":
      "A collection of learning resources empowering the Offline Distribution Team",
    "training.courses.onboarding.title": "Onboarding and Issue Resolution",
    "training.courses.productKnowledge.title": "ZetCollect Product Knowledge",
    "training.courses.compliance.title": "Compliance and Regulation",
    // Pricing Page (Updated)
    "pricing.section1.title": "Fair pricing for faster growth",
    "pricing.section1.description":
      "Flexible pricing plans to suit businesses of all sizes.",
    "pricing.section1.cta": "Get Started",
    "pricing.section2.title": "Flexible fees tailored to your business",
    "pricing.section2.business.title": "Business",
    "pricing.section2.business.description":
      "Standard pricing for growing businesses.",
    "pricing.section2.business.features.title": "You get:",
    "pricing.section2.business.features.localBusinessHours":
      "Local business hours support",
    "pricing.section2.business.cta": "Get Started",
    "pricing.section2.enterprise.title": "Enterprise",
    "pricing.section2.enterprise.description":
      "Custom rates with dedicated support and advanced features.",
    "pricing.section2.enterprise.features.title": "You get:",
    "pricing.section2.enterprise.features.enterpriseSupport":
      "24/7 enterprise support",
    "pricing.section2.enterprise.cta": "Contact Sales",
    "pricing.section3.title": "Compare features",
    "pricing.section3.link": "Learn about features",
    "pricing.compareFeatures.clientManagement": "Client Management",
    "pricing.compareFeatures.collectorManagement": "Agent Management",
    "pricing.compareFeatures.branchSetup": "Branch and Institution Setup",
    "pricing.compareFeatures.mobileCollection": "Mobile Collection Interface",
    "pricing.compareFeatures.bookletSystem": "Booklet System",
    "pricing.compareFeatures.transactionHistory": "Transaction History",
    "pricing.compareFeatures.reportsAnalytics": "Reports and Analytics",
    "pricing.compareFeatures.userAccessRoles": "User Access and Roles",
    "pricing.compareFeatures.smsNotifications": "Optional SMS Notifications",
    "pricing.compareFeatures.dailySynchronization":
      "Daily Data Synchronization",
    "pricing.compareFeatures.gpsTraceability": "GPS Tracking for Agents",
    "pricing.compareFeatures.missedCollectionAlerts":
      "Missed Collection Alerts",
    "pricing.compareFeatures.clientRiskProfile": "Client Risk Profiling",
    "pricing.compareFeatures.routeOptimization":
      "Route and Schedule Optimization",
    "pricing.compareFeatures.clientSelfAccessPortal":
      "Client Self-Service Portal (Future)",
    "pricing.compareFeatures.localBusinessHours":
      "Local Business Hours Support",
    "pricing.compareFeatures.enterpriseSupport": "24/7 Enterprise Support",
    // OnboardingCoursePage Component
    "onboarding.title": "Courses",
    "onboarding.allCourses": "All Courses",
    "onboarding.productKnowledge": "ZetCollect Product Knowledge",
    "onboarding.onboardingAndIssueResolution":
      "Onboarding and Issue Resolution",
    "onboarding.filter.all": "All Lessons",
    "onboarding.filter.completed": "Completed",
    "onboarding.filter.inProgress": "In Progress",
    "onboarding.noLessons": "No lessons found for this category or filter.",

    // Courses Data (from coursesData.json)
    "courses.onboarding.title": "Onboarding and Issue Resolution",
    "courses.onboarding.lesson.protecting-accounts.title":
      "Protecting Accounts With ZetCollect Two Factor Authentication",
    "courses.onboarding.lesson.protecting-accounts.description":
      "In this course, you’ll learn everything you need to know about ZetCollect’s Two-Factor Authentication (2FA). You will be equipped to...",
    "courses.product-knowledge.title": "ZetCollect Product Knowledge",
    "courses.product-knowledge.lesson.mobile-app-basics.title":
      "ZetCollect Mobile App Basics",
    "courses.product-knowledge.lesson.mobile-app-basics.description":
      "Learn how to navigate the ZetCollect mobile application, perform basic transactions, and troubleshoot common issues.",
    "courses.compliance.title": "Compliance and Regulation",
    "courses.compliance.lesson.understanding-kyc-requirements.title":
      "Understanding The KYC Requirements at ZetCollect",
    "courses.compliance.lesson.understanding-kyc-requirements.description":
      "Welcome to the third part of our series! Here, you’ll learn the basics of bringing customers on board, checking their documents, and th..",
    "courses.compliance.lesson.fraud-prevention-training.title":
      "Fraud Prevention Best Practices",
    "courses.compliance.lesson.fraud-prevention-training.description":
      "Understand common fraud schemes and learn best practices to protect yourself and your clients from financial fraud.",
    "courses.compliance.lesson.data-privacy-regulations.title":
      "Data Privacy Regulations and Best Practices",
    "courses.compliance.lesson.data-privacy-regulations.description":
      "A critical course on data protection laws (e.g., GDPR, local regulations) and how to handle customer data securely and compliantly.",
    // ProductKnowledgeCoursePage Component
    "productKnowledge.title": "Courses",
    "productKnowledge.allCourses": "All Courses",
    "productKnowledge.productKnowledge": "ZetCollect Product Knowledge",
    "productKnowledge.onboardingAndIssueResolution":
      "Onboarding and Issue Resolution",
    "productKnowledge.filter.all": "All Lessons",
    "productKnowledge.filter.completed": "Completed",
    "productKnowledge.filter.inProgress": "In Progress",
    "productKnowledge.noLessons":
      "No lessons found for this category or filter.",
    // CourseLessonPage Component
    "courseLesson.title": "{lessonTitle}", // Placeholder for dynamic lesson title
    "courseLesson.notFound":
      "Lesson not found. Please check the URL or return to the main training page.",
    "courseLesson.backToCourse": "Back to {category}",
    "courseLesson.backToAllCourses": "Back to All Courses",
    "courseLesson.relatedCourses": "Related Courses",

    // lessonContent.json
    "lessons.protecting-accounts.title":
      "Protecting Accounts With ZetCollect Two Factor Authentication",
    "lessons.protecting-accounts.category": "Onboarding and Issue Resolution",
    "lessons.protecting-accounts.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Introduction to 2FA</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Two-Factor Authentication (2FA) adds an extra layer of security to your ZetCollect account. It requires a second form of verification in addition to your password, significantly reducing the risk of unauthorized access.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Why is 2FA Important?</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Protects against password theft.</li><li>Adds a crucial layer of defense against phishing attacks.</li><li>Ensures only you can access your account, even if your password is compromised.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">How to Enable 2FA</h2><p class="text-lg text-gray-700 mb-6 leading-relaxed">Follow these simple steps to enable 2FA on your ZetCollect account:</p><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Log in to your ZetCollect dashboard.</li><li>Navigate to \'Security Settings\'.</li><li>Select \'Enable Two-Factor Authentication\'.</li><li>Choose your preferred method (e.g., authenticator app, SMS code).</li><li>Follow the on-screen instructions to complete the setup.</li></ol><p class="text-lg text-gray-600 italic mb-6">For more details, refer to our official user guide.</p>',
    "lessons.protecting-accounts.relatedCourses.onboarding.title":
      "Onboarding and Issue Resolution",
    "lessons.protecting-accounts.relatedCourses.compliance.title":
      "Compliance and Regulation",
    "lessons.adding-business-kyc3.title":
      "Adding a Business to a KYC Level 3 Account",
    "lessons.adding-business-kyc3.category": "Onboarding and Issue Resolution",
    "lessons.adding-business-kyc3.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Understanding KYC Level 3 for Businesses</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">KYC Level 3 accounts offer enhanced transaction limits and features for businesses. This course outlines the requirements and the step-by-step process for upgrading your business account.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Required Documents:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Business registration certificate.</li><li>Tax identification number (TIN).</li><li>Proof of business address.</li><li>Identification for all directors/partners.</li><li>Bank account statement for the business.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Application Process:</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Log in to your ZetCollect business account.</li><li>Navigate to the \'Upgrade Account\' section.</li><li>Select \'KYC Level 3 for Businesses\'.</li><li>Upload all required documents.</li><li>Submit your application for review.</li></ol><p class="text-lg text-gray-600 italic mb-6">Processing time may vary. You will be notified via email upon approval.</p>',
    "lessons.adding-business-kyc3.relatedCourses.onboarding.title":
      "Onboarding and Issue Resolution",
    "lessons.adding-business-kyc3.relatedCourses.product-knowledge.title":
      "ZetCollect Product Knowledge",
    "lessons.understanding-kyc-requirements.title":
      "Understanding The KYC Requirements at ZetCollect",
    "lessons.understanding-kyc-requirements.category":
      "Compliance and Regulation",
    "lessons.understanding-kyc-requirements.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Introduction to KYC</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Know Your Customer (KYC) is a critical process for financial institutions to verify the identity of their clients. This is essential for preventing fraud, money laundering, and terrorist financing.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Key KYC Principles:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Customer Identification Program (CIP).</li><li>Customer Due Diligence (CDD).</li><li>Ongoing Monitoring.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Documents Commonly Required:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Government-issued ID (Passport, National ID).</li><li>Proof of address (Utility bill, Bank statement).</li><li>Proof of income (for certain account types).</li></ul><p class="text-lg text-gray-600 italic mb-6">Always ensure documents are valid and up-to-date.</p>',
    "lessons.understanding-kyc-requirements.relatedCourses.compliance.title":
      "Compliance and Regulation",
    "lessons.mobile-app-basics.title": "ZetCollect Mobile App Basics",
    "lessons.mobile-app-basics.category": "ZetCollect Product Knowledge",
    "lessons.mobile-app-basics.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Getting Started with the ZetCollect App</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">This lesson covers the fundamental features and functionalities of the ZetCollect mobile application, designed for seamless financial management on the go.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Core Features:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Client Management.</li><li>Mobile Collection.</li><li>Booklet System.</li><li>Report and Analytics.</li></ul><p class="text-lg text-gray-600 italic mb-6">Regular updates bring new features and improvements.</p>',
    "lessons.mobile-app-basics.relatedCourses.product-knowledge.title":
      "ZetCollect Product Knowledge",
    "lessons.fraud-prevention-training.title":
      "Fraud Prevention Best Practices",
    "lessons.fraud-prevention-training.category": "Compliance and Regulation",
    "lessons.fraud-prevention-training.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Identifying and Preventing Fraud</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Fraud is a constant threat in the financial sector. This training equips you with the knowledge to identify common fraud indicators and implement effective prevention strategies.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Common Fraud Types:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Phishing and Smishing.</li><li>Identity Theft.</li><li>Account Takeover.</li><li>Social Engineering.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Prevention Strategies:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Verify customer identity rigorously.</li><li>Educate clients on security best practices.</li><li>Report suspicious activities immediately.</li><li>Use strong, unique passwords and 2FA.</li></ul><p class="text-lg text-red-600 font-semibold mb-6">Remember: If something feels off, it probably is. Always err on the side of caution.</p>',
    "lessons.fraud-prevention-training.relatedCourses.compliance.title":
      "Compliance and Regulation",
  },
  fr: {
    // About Page
    "about.title": "À propos de ZetCollect :",
    "about.description":
      "ZetCollect est une plateforme mobile de pointe conçue pour transformer la collecte et la gestion de l'argent pour les institutions de microfinance, les coopératives et les fournisseurs de services financiers à travers l'Afrique. Construite en tenant compte des besoins uniques des marchés africains, ZetCollect rationalise les opérations, améliore la transparence et renforce la confiance entre les institutions et leurs clients. Notre mission est de permettre aux organisations de gérer les collectes de manière efficace, sécurisée et à grande échelle, tout en réduisant l'écart pour l'inclusion financière dans les communautés mal desservies.",
    "about.numbers.title": "ZetCollect Group en chiffres",
    "about.numbers.teamExperience": "Expérience professionnelle de l'équipe",
    "about.numbers.successStories": "Histoires de succès",
    "about.numbers.industryCovers": "Secteurs couverts",
    "about.geography.title": "Notre géographie",
    "about.geography.description":
      "Basé au Kenya et opérant à l'international, notre équipe favorise la transformation numérique des entreprises à l'échelle mondiale. Nous assurons une présence sur site et virtuelle pour fournir des services à nos principaux marchés cibles :",
    "about.geography.kenya": "Kenya",
    "about.geography.kenyaOffice": "Bureaux : Nairobi",
    "about.geography.rwanda": "Rwanda",
    "about.geography.rwandaOffice": "Bureaux virtuels : Kigali",
    "about.geography.cameroon": "Cameroun",
    "about.geography.cameroonOffice": "Bureaux virtuels : Douala",
    "about.clients.title": "Nos clients",
    "about.clients.description":
      "Nous avons collaboré avec des entreprises de 3 continents : l'Afrique, l'Amérique du Nord et l'Europe. Parmi nos clients les plus prestigieux figurent :",
    "about.clients.logoAlt": "Logo du client {index}",
    "about.pricingPolicy.title": "Notre politique tarifaire",
    "about.pricingPolicy.description":
      "En fonction d'un projet et de la nature du service fourni, nous proposons les modèles tarifaires suivants :",
    "about.pricingPolicy.subscriptionBased": "Modèle basé sur l'abonnement",
    "about.pricingPolicy.subscriptionBasedDesc":
      "Ce modèle permet aux clients d'accéder à notre suite complète de services, fournis par nos solutions ZetScore et Optimisation de la Chaîne d'Approvisionnement en tant que Service (SCOS). L'abonnement inclut des mises à jour régulières, de nouvelles fonctionnalités et des améliorations. Les clients bénéficient d'un accès continu à ces services pendant la durée de leur abonnement.",
    "about.pricingPolicy.payAsYouGo": "Paiement à l'usage",
    "about.pricingPolicy.payAsYouGoDesc":
      "Notre modèle de paiement à l'usage offre une flexibilité pour les clients souhaitant utiliser les services ZetScore et SCOS selon leurs besoins, en ne payant que pour les fonctionnalités et les ressources utilisées. Cette approche est idéale pour les entreprises recherchant des solutions évolutives sans engagements à long terme.",
    "about.pricingPolicy.serviceContinuity": "Modèle de continuité de service",
    "about.pricingPolicy.serviceContinuityDesc":
      "Le modèle de continuité de service garantit un accès ininterrompu à ZetScore et SCOS avec un support dédié, une maintenance proactive et des mises à jour prioritaires. Ce modèle est conçu pour les entreprises nécessitant une performance et une fiabilité constantes.",
    "about.pricingPolicy.onSiteDedicated": "Modèle dédié sur site",
    "about.keyFeatures.title": "Nos principales fonctionnalités",
    "about.keyFeatures.clientManagement.title": "Gestion des clients",
    "about.keyFeatures.clientManagement.description":
      "Intégrez, suivez et gérez les profils des clients de manière fluide avec des mises à jour en temps réel, garantissant un service personnalisé et des enregistrements précis.",
    "about.keyFeatures.collectorManagement.title": "Gestion des collecteurs",
    "about.keyFeatures.collectorManagement.description":
      "Donnez aux agents de terrain des outils intuitifs pour planifier, suivre et signaler les collectes, optimisés pour les environnements en ligne et hors ligne.",
    "about.keyFeatures.mobileCollection.title": "Collecte mobile",
    "about.keyFeatures.mobileCollection.description":
      "Notre application mobile, capable de fonctionner hors ligne, permet aux collecteurs de traiter les paiements n'importe où, n'importe quand, garantissant un service ininterrompu dans les zones à faible connectivité.",
    "about.keyFeatures.bookletSystem.title": "Système de carnet",
    "about.keyFeatures.bookletSystem.description":
      "Numérisez les carnets de collecte traditionnels avec une interface sécurisée et conviviale pour suivre les transactions et réduire les erreurs.",
    "about.keyFeatures.reportsAnalytics.title": "Rapports et analyses",
    "about.keyFeatures.reportsAnalytics.description":
      "Obtenez des informations exploitables grâce à des tableaux de bord en temps réel, des rapports personnalisables et des analyses prédictives pour optimiser les opérations et prendre des décisions plus intelligentes.",
    "about.keyFeatures.transactionHistory.title": "Historique des transactions",
    "about.keyFeatures.transactionHistory.description":
      "Maintenez un enregistrement transparent et auditable de toutes les transactions, accessible aux institutions et aux clients pour renforcer la confiance et la responsabilité.",
    "about.keyFeatures.smsNotifications.title": "Notifications SMS",
    "about.keyFeatures.smsNotifications.description":
      "Tenez les clients informés avec des mises à jour SMS automatisées et opportunes sur les paiements, les soldes et les rappels, améliorant l'engagement et la conformité.",
    "about.keyFeatures.userAccessRoles.title":
      "Accès et rôles des utilisateurs",
    "about.keyFeatures.userAccessRoles.description":
      "Gérez les autorisations de manière sécurisée avec un accès basé sur les rôles, garantissant l'intégrité des données et l'efficacité opérationnelle des équipes.",
    "about.keyFeatures.dailySynchronization.title":
      "Synchronisation quotidienne",
    "about.keyFeatures.dailySynchronization.description":
      "Synchronisez automatiquement les données sur les appareils et systèmes, même dans des environnements à faible bande passante, pour maintenir des informations à jour et fiables.",
    "about.keyFeatures.branchSetup.title": "Configuration des succursales",
    "about.keyFeatures.branchSetup.description":
      "Configurez et gérez facilement plusieurs succursales, en adaptant les flux de travail aux besoins régionaux tout en maintenant une supervision centralisée.",
    // Why ZetCollect
    "why.title": "Pourquoi ZetCollect",
    "why.title2": "Ce que nos clients obtiennent en choisissant ZetCollect:",
    "why.subtitle":
      "Conçu spécifiquement pour les réalités de la microfinance africaine",
    "why.quality.title": "Entreprise centrée sur la qualité",
    "why.quality.alt": "Badge de qualité",
    "why.quality.desc":
      "Nous fournissons uniquement des logiciels et services de haute qualité à nos clients. Nous garantissons que vous obtiendrez une valeur commerciale tangible, bénéficierez de processus de projet sains, d'équipes professionnelles et motivées, et d'une communication efficace entre ZetCollect, vos équipes et les parties prenantes. Notre engagement à fournir des logiciels et services de haute qualité n'est pas une simple promesse ; c'est un pacte intégré dans chaque ligne de code et articulé dans chaque décision stratégique.",
    "why.security.title": "Sécurité de premier ordre",
    "why.security.alt": "Icône de sécurité",
    "why.security.desc":
      "Nos protocoles de sécurité ne se limitent pas à respecter les normes de l'industrie ; ils les dépassent. Nous considérons la sécurité comme une entité vivante, évoluant avec le paysage des menaces en constante évolution. Tout comme une sentinelle s'adapte aux défis émergents, nos mesures de sécurité sont constamment affinées et améliorées. Considérez-nous comme les architectes d'une citadelle numérique, où des algorithmes de cryptage robustes constituent la pierre angulaire, des défenses multicouches servent de bastions, et une surveillance proactive fonctionne comme notre tour de guet. Bien que les certifications soient précieuses, nous croyons que la véritable sécurité est un engagement continu et que 'la sécurité est la responsabilité de tous'.",
    "why.africa.title": "Conçu pour les réalités africaines",
    "why.africa.desc":
      "Conçu pour les environnements à faible connectivité avec des capacités hors ligne prioritaires et optimisé pour les conditions du marché local.",
    "why.fraud.title": "Résistant à la fraude",
    "why.fraud.desc":
      "Fonctionnalités de sécurité avancées, y compris des carnets numériques, un suivi GPS et une validation en temps réel, pour prévenir les activités frauduleuses.",
    "why.mobile.title": "Priorité au mobile",
    "why.mobile.desc":
      "Optimisé pour les smartphones et les tablettes avec des interfaces intuitives qui fonctionnent parfaitement sur n'importe quel appareil.",
    "why.customizable.title": "Entièrement personnalisable",
    "why.customizable.desc":
      "Adaptez la plateforme à vos flux de travail, votre image de marque et vos besoins opérationnels spécifiques.",
    "why.integrable.title": "Intégrable",
    "why.integrable.desc":
      "Intégrez facilement avec les systèmes bancaires existants et les services financiers tiers.",
    "why.data.title": "Décisions basées sur les données",
    "why.data.desc":
      "Des outils d'analyse et de rapport complets fournissent des informations exploitables pour de meilleures décisions commerciales.",
    "why.readMore": "En savoir plus",

    // Blog Page
    "blog.title": "Blog",
    "blog.category.financial": "Technologie financière",
    "blog.post1.title":
      "Transformer les collectes financières avec l'innovation mobile de ZetCollect",
    "blog.post1.description":
      "ZetCollect simplifie les collectes financières à travers l'Afrique avec son application mobile intuitive, fonctionnant hors ligne. Dotée d'une sécurité robuste et d'analyses intelligentes, elle rationalise les paiements et renforce la confiance. Découvrez comment elle révolutionne la finance pour les institutions.",
    "blog.post2.title":
      "Sécuriser l'avenir financier avec la protection avancée de ZetCollect",
    "blog.post2.description":
      "ZetCollect protège vos collectes financières avec des outils de prévention de la fraude de pointe. Sa sécurité robuste garantit la confiance et la fiabilité pour les institutions africaines. Découvrez comment elle protège vos opérations.",
    "blog.post3.title":
      "Améliorer l'efficacité avec les analyses intelligentes de ZetCollect",
    "blog.post3.description":
      "Le tableau de bord analytique puissant de ZetCollect fournit des informations en temps réel pour des décisions financières plus intelligentes. Adapté à l'Afrique, il rationalise les collectes et améliore la transparence. Explorez son impact basé sur les données.",

    // Events Page
    "events.title": "Événements",
    "events.subtitle": "Découvrez les événements à venir.",
    "events.filter.all": "Tous les événements",
    "events.filterType": "Type d'événement",
    "events.type.webinar": "Webinaire",
    "events.type.inperson": "En personne",
    "events.upcoming": "Événements à venir",
    "events.event1.month": "AOÛT",
    "events.event1.day": "4",
    "events.event1.type": "Webinaire",
    "events.event1.title": "Vitrine virtuelle de ZetCollect",
    "events.event1.description":
      "Notre événement de démonstration en direct de ZetCollect offre un aperçu approfondi d'une suite complète de services conçus pour révolutionner les collectes de fonds. Vous explorerez comment ZetCollect permet aux organisations de gérer les clients, les collecteurs, la configuration des succursales et les capacités de collecte mobile. Découvrez de première main comment notre système de carnet, l'historique des transactions, les rapports et analyses, et les rôles d'accès robustes améliorent l'efficacité et rationalisent les opérations. De plus, découvrez les avantages des notifications SMS et de la synchronisation quotidienne transparente. Ne manquez pas cette opportunité de voir comment ZetCollect peut transformer votre approche de la collecte et de la gestion de fonds.",
    "events.event1.dateTime": "LUNDI, 4 août 2025, À GMT+1",
    "events.event1.time": "10:00 À 11:00",
    "events.event2.month": "OCTOBRE",
    "events.event2.day": "6",
    "events.event2.type": "En personne",
    "events.event2.title": "Sommet annuel de l'innovation technologique",
    "events.event2.description":
      "Rejoignez les leaders de l'industrie et les innovateurs au Sommet annuel de l'innovation technologique pour discuter des dernières tendances en technologie, transformation numérique et stratégies à l'épreuve du futur. Avec des conférenciers principaux, des ateliers interactifs et des opportunités de réseautage.",
    "events.event2.dateTime": "LUNDI, 6 octobre 2025, À GMT+1",
    "events.event2.time": "09:00 À 17:00",

    // Navigation
    "nav.home": "Accueil",
    "nav.features": "Fonctionnalités",
    "nav.why": "Pourquoi ZetCollect",
    "nav.demo": "Démo",
    "nav.upcoming": "Fonctionnalités à venir",
    "nav.pricing": "Tarification",
    "nav.contact": "Contact",
    "nav.login": "Connexion",

    // Hero Section
    "hero.title": "Transformez les Collections avec ZetCollect",
    "hero.subtitle":
      "Autonomiser les institutions de microfinance africaines avec des solutions de collection numériques efficaces, transparentes et résistantes à la fraude",
    "hero.cta.demo": "Voir la Démo",
    "hero.cta.request": "Demander une Démo",
    "hero.cta.features": "Explorer les Fonctionnalités",

    // Features
    "features.title": "Fonctionnalités Principales",
    "features.subtitle":
      "Tout ce dont vous avez besoin pour numériser les collections",
    "features.client.title": "Gestion des Clients",
    "features.client.desc":
      "Base de données complète des clients avec profils détaillés et historique des collections.",
    "features.collector.title": "Gestion des Collecteurs",
    "features.collector.desc":
      "Suivi des performances, itinéraires et objectifs quotidiens des collecteurs.",
    "features.branch.title": "Configuration des Succursales",
    "features.branch.desc":
      "Support multi-succursales avec paramètres personnalisables et hiérarchies.",
    "features.mobile.title": "Collection Mobile",
    "features.mobile.desc":
      "Application mobile hors ligne pour enregistrer les transactions partout.",
    "features.booklet.title": "Système de Carnets",
    "features.booklet.desc":
      "Gestion numérique des carnets avec codes QR et fonctionnalités de validation.",
    "features.history.title": "Historique des Transactions",
    "features.history.desc":
      "Piste d'audit complète de toutes les activités de collection et paiements.",
    "features.reports.title": "Rapports et Analyses",
    "features.reports.desc":
      "Tableaux de bord en temps réel et rapports complets pour des décisions basées sur les données.",
    "features.access.title": "Accès et Rôles Utilisateur",
    "features.access.desc":
      "Permissions basées sur les rôles garantissant un accès sécurisé aux informations sensibles.",
    "features.sms.title": "Notifications SMS",
    "features.sms.desc":
      "Rappels et confirmations automatisés par SMS pour une meilleure communication.",
    "features.sync.title": "Synchronisation Quotidienne",
    "features.sync.desc":
      "Synchronisation transparente des données entre appareils mobiles et base de données centrale.",

    // Demo Section
    "demo.title": "ZetCollect en Action",
    "demo.subtitle":
      "Regardez comment ZetCollect rationalise les collections pour les IMF africaines",
    "demo.cta": "Demander une Démo",
    "demo.video_title": "ZetCollect en Action",
    "demo.play_button": "Lire la vidéo",
    "demo.content_title": "Ce que vous verrez dans cette démo :",
    "demo.points.real_time_tracking": "Suivi des collections en temps réel",
    "demo.points.offline_mode": "Capacités du mode hors ligne",
    "demo.points.analytics_dashboard": "Aperçu du tableau de bord analytique",
    "demo.points.mobile_collector": "Interface mobile pour les collecteurs",
    "demo.points.fraud_prevention":
      "Fonctionnalités de prévention de la fraude",
    "demo.points.multi_branch": "Gestion multi-succursales",

    "upcoming.title": "Fonctionnalités à Venir",
    "upcoming.subtitle":
      "Des fonctionnalités passionnantes à venir pour améliorer votre expérience de collecte",
    "upcoming.gps.title": "Traçabilité GPS",
    "upcoming.gps.desc":
      "Suivi de localisation en temps réel pour une sécurité renforcée et une optimisation des itinéraires.",
    "upcoming.alerts.title": "Alertes de Collecte Manquée",
    "upcoming.alerts.desc":
      "Notifications automatiques pour les collectes manquées et rappels de suivi.",
    "upcoming.risk.title": "Profil et Évaluation des Risques Client",
    "upcoming.risk.desc":
      "Évaluation des risques basée sur l'IA et système de notation client pour une meilleure prise de décision.",
    "upcoming.route.title": "Optimisation des Itinéraires et des Horaires",
    "upcoming.route.desc":
      "Algorithmes de routage intelligents pour optimiser les horaires des collecteurs et maximiser l'efficacité.",
    "upcoming.portal.title": "Portail Libre-Service Client",
    "upcoming.portal.desc":
      "Permettre aux clients de consulter leur historique de collecte et d'effectuer des paiements de manière autonome.",
    "upcoming.currency.title": "Nouveau Système Monétaire (KES)",
    "upcoming.currency.desc":
      "Intégration transparente des shillings kenyans (KES) pour toutes les transactions et les rapports financiers.",

    // Contact Us
    "contact.title": "Nous Contacter",
    "contact.subtitle":
      "Veuillez nous contacter pour discuter de toute autre question.",
    "contact.form.title":
      "Parlez à ZetCollect pour créer votre avenir numérique.",
    "contact.form.first_name": "Prénom*",
    "contact.form.last_name": "Nom de famille*",
    "contact.form.email": "Courriel professionnel*",
    "contact.form.job_title": "Titre du poste*",
    "contact.form.contact_number": "Téléphone professionnel*",
    "contact.form.organisation": "Entreprise nom*",
    "contact.form.country": "Pays*",
    "contact.form.country.cameroon": "Cameroun",
    "contact.form.country.kenya": "Kenya",
    "contact.form.country.gabon": "Gabon",
    "contact.form.country.tchad": "Tchad",
    "contact.form.country.congo": "République du Congo",
    "contact.form.message": "Votre message*",
    "contact.form.functional_role": "Rôle fonctionnel*",
    "contact.form.functional_role.finance": "Finance et comptabilité",
    "contact.form.functional_role.hr": "Ressources humaines",
    "contact.form.functional_role.operator": "Opérateur",
    "contact.form.functional_role.it": "Informatique",
    "contact.form.job_level": "Niveau du poste*",
    "contact.form.job_level.c_level": "Niveau C",
    "contact.form.job_level.vp": "Vice-Président",
    "contact.form.job_level.director": "Directeur",
    "contact.form.job_level.manager": "Manager",
    "contact.form.job_level.other": "Autre",
    "contact.form.how_did_you_hear":
      "Comment avez-vous entendu parler de ZetCollect ?",
    "contact.form.how_did_you_hear.search": "Moteur de recherche",
    "contact.form.how_did_you_hear.referral": "Recommandation",
    "contact.form.opt_in":
      "S'inscrire pour recevoir des informations personnalisées de ZetCollect, telles que des nouvelles de l'industrie, des rapports, des mises à jour de solutions et des événements, par courriel et téléphone",
    "contact.form.submit": "Soumettre",
    "contact.microservices.title":
      "Servir les microservices à travers l'Afrique",

    // Common
    "common.learnMore": "En Savoir Plus",
    "common.contactUs": "Nous Contacter",
    "common.getStarted": "Commencer",
    "common.comingSoon": "Bientôt Disponible",
    "common.newsletter": "Restez informés—rejoignez notre newsletter !",
    "common.talkToUs": "Vous les voulez maintenant ? Parlez-nous !",

    // Footer
    "footer.logo_alt": "Logo de l'entreprise",
    "footer.help_text":
      "Besoin d'aide pour trouver la meilleure solution pour votre entreprise ?",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.youtube": "YouTube",
    "footer.about": "À PROPOS",
    "footer.who_we_serve": "Qui Nous Servons",
    "footer.customer_story": "Témoignage client",
    "footer.about_us": "À Propos de Nous",
    "footer.pricing": "Prix",
    "footer.newsroom": "SALLE DE PRESSE",
    "footer.articles": "Articles",
    "footer.events_webinars": "Événements et Webinaires",
    "footer.support": "SUPPORT",
    "footer.faq": "FAQ",
    "footer.training_certification": "Formation et Certification",
    "footer.rights":
      "Propulsé par © {year} Evolv ZetCollect Group Ltd. Tous droits réservés.",

    // WorkInProgressPage
    "wip.title": "Page en Construction",
    "wip.description":
      "Nous travaillons dur pour donner vie à cette page. Revenez bientôt pour des mises à jour !",
    "wip.backToHome": "Retourner à l'Accueil",

    // CustomerSupportPage
    "support.title": "Support client",
    "support.subtitle": "Support spécifique à la solution",
    "support.selectLabel": "Sélectionner une fonctionnalité",
    "support.selectPlaceholder": "Sélectionner une fonctionnalité",
    "support.contactLabel": "Support pour {feature} :",
    "support.phone": "Téléphone",
    "support.email": "Courriel",
    "support.noSelection":
      "Veuillez sélectionner une fonctionnalité pour voir les détails du support.",
    "support.communityButton": "Communauté de support en ligne",
    // Feature names
    "support.feature.client": "Gestion des clients",
    "support.feature.collector": "Gestion des collecteurs (agents)",
    "support.feature.branch": "Configuration des succursales et institutions",
    "support.feature.mobile": "Interface de collecte mobile",
    "support.feature.booklet": "Système de carnets",
    "support.feature.history": "Historique des transactions",
    "support.feature.reports": "Rapports et analyses",
    "support.feature.access": "Accès et rôles des utilisateurs",
    "support.feature.sms": "Notifications SMS (optionnel)",
    "support.feature.sync": "Synchronisation quotidienne",

    // ReleaseNotesPage
    "release.title": "Notes de version",
    "release.description1":
      "ZetCollect est une application incontournable pour des collectes financières sans stress en Afrique. Son interface mobile intuitive fonctionne parfaitement, même hors ligne. Sécurité avancée et analyses intelligentes renforcent l'efficacité et la confiance.",
    "release.description2":
      "Notre plateforme SaaS propose des mises à jour hebdomadaires, résumées chaque mois pour plus de clarté. Les utilisateurs VPC reçoivent des mises à jour trimestrielles avec 14 jours de test, ou 45 jours avec environnement de staging. ZetCollect offre des outils sécurisés, flexibles et perspicaces.",
    "release.saas.title": " ZetCollect système:  2025 libérer",
    "release.saas.systemVersion":
      "<strong>Version</strong>: 1.2.0 - 25 avril 2025",
    "release.saas.systemVersion2":
      "<strong>Version</strong>: 1.2.1 - 27 juin 2025",
    "release.saas.title2": "ZetCollect le site: 2025 libérer",
    "release.saas.systemVersionWeb":
      "<strong>Version</strong>: 1.0.0-Bêta - 25 avril 2025",
    "release.saas.systemVersionWeb2":
      "<strong>Version</strong>: 1.0.1-Bêta - 27 juin 2025",
    "release.saas.systemVersionWeb3":
      "<strong>Version</strong>: 1.0.2-Beta - 12th Juillet 2025",
    "release.saas.systemVersionWeb4":
      "<strong>Version</strong>: 1.0.3-Beta - 18th Juillet 2025",

    // FAQPage
    "faq.title": "Foire aux Questions",
    "faq.subtitle":
      "Voici les réponses à toutes vos questions brûlantes sur ZetCollect. Vous pouvez également nous contacter directement ou explorer notre base de connaissances et la documentation de l'API.",
    "faq.questions.client_management":
      "Comment fonctionne la fonctionnalité de gestion des clients de ZetCollect ?",
    "faq.answers.client_management":
      "La gestion des clients de ZetCollect vous permet d'ajouter, de mettre à jour et de gérer facilement toutes les informations des clients, y compris les champs personnalisés. Vous pouvez attribuer des carnets de collecte spécifiques aux clients pour un suivi structuré et définir des attentes d'épargne quotidiennes pour suivre leur progression efficacement.",
    "faq.questions.collector_management":
      "Quelles fonctionnalités offre la gestion des collecteurs (agents) ?",
    "faq.answers.collector_management":
      "La fonctionnalité de gestion des collecteurs (agents) permet d'assigner des agents à des succursales spécifiques, d'attribuer des clients et des zones de collecte, et de suivre leurs activités quotidiennes en temps réel. Cela inclut le suivi des montants collectés et l'identification des collectes manquées.",
    "faq.questions.multi_branch":
      "ZetCollect peut-il prendre en charge plusieurs succursales et institutions ?",
    "faq.answers.multi_branch":
      "Oui, ZetCollect prend en charge une configuration multi-succursales avec un contrôle d'accès basé sur les rôles, permettant de gérer efficacement différentes succursales. Il offre également un contrôle centralisé depuis le siège pour une surveillance complète des performances dans toutes vos succursales.",
    "faq.questions.mobile_collection":
      "Quelles sont les capacités de l'interface de collecte mobile ?",
    "faq.answers.mobile_collection":
      "L'interface de collecte mobile est une application Android conçue pour les collecteurs, permettant l'enregistrement en temps réel des collectes directement depuis les emplacements des clients. Elle fonctionne parfaitement en ligne et hors ligne, synchronisant automatiquement toutes les données lorsqu'une connexion Internet est disponible, garantissant une opération continue.",
    "faq.questions.booklet_system":
      "Comment le système de carnets prévient-il la fraude ?",
    "faq.answers.booklet_system":
      "Le système de carnets attribue à chaque client un carnet de collecte numérique. Les collecteurs enregistrent les transactions sur l'application en fonction des entrées de ce carnet numérique. Ce processus crée un enregistrement transparent et vérifiable, réduisant considérablement le risque de fraude et d'erreurs de rapport.",
    // Training and Certification Page
    "training.title": "Élevez votre carrière au niveau supérieur",
    "training.subtitle":
      "Acquérez les connaissances produit nécessaires pour réussir dans votre domaine",
    "training.heroImageAlt": "Illustration du développement de carrière",
    "training.courses.title": "Cours",
    "training.courses.subtitle":
      "Une collection de ressources d’apprentissage pour renforcer l’équipe de distribution hors ligne",
    "training.courses.onboarding.title":
      "Intégration et résolution des problèmes",
    "training.courses.productKnowledge.title":
      "Connaissance des produits ZetCollect",
    "training.courses.compliance.title": "Conformité et réglementation",
    //pricing Page
    "pricing.section1.title":
      "Tarification équitable pour une croissance rapide",
    "pricing.section1.description":
      "Des plans tarifaires flexibles adaptés aux entreprises de toutes tailles.",
    "pricing.section1.cta": "Commencer",
    "pricing.section2.title": "Frais flexibles adaptés à votre entreprise",
    "pricing.section2.business.title": "Business",
    "pricing.section2.business.description":
      "Tarification standard pour les entreprises en croissance.",
    "pricing.section2.business.features.title": "Vous obtenez :",
    "pricing.section2.business.features.localBusinessHours":
      "Support pendant les heures ouvrables locales",
    "pricing.section2.business.cta": "Commencer",
    "pricing.section2.enterprise.title": "Entreprise",
    "pricing.section2.enterprise.description":
      "Tarifs personnalisés avec un support dédié et des fonctionnalités avancées.",
    "pricing.section2.enterprise.features.title": "Vous obtenez :",
    "pricing.section2.enterprise.features.enterpriseSupport":
      "Support entreprise 24/7",
    "pricing.section2.enterprise.cta": "Contacter les ventes",
    "pricing.section3.title": "Comparer les fonctionnalités",
    "pricing.section3.link": "En savoir plus sur les fonctionnalités",
    "pricing.compareFeatures.clientManagement": "Gestion des clients",
    "pricing.compareFeatures.collectorManagement": "Gestion des agents",
    "pricing.compareFeatures.branchSetup":
      "Configuration des succursales et institutions",
    "pricing.compareFeatures.mobileCollection": "Interface de collecte mobile",
    "pricing.compareFeatures.bookletSystem": "Système de carnet",
    "pricing.compareFeatures.transactionHistory": "Historique des transactions",
    "pricing.compareFeatures.reportsAnalytics": "Rapports et analyses",
    "pricing.compareFeatures.userAccessRoles":
      "Accès et rôles des utilisateurs",
    "pricing.compareFeatures.smsNotifications":
      "Notifications SMS optionnelles",
    "pricing.compareFeatures.dailySynchronization":
      "Synchronisation quotidienne des données",
    "pricing.compareFeatures.gpsTraceability": "Suivi GPS pour les agents",
    "pricing.compareFeatures.missedCollectionAlerts":
      "Alertes de collecte manquée",
    "pricing.compareFeatures.clientRiskProfile":
      "Profilage des risques des clients",
    "pricing.compareFeatures.routeOptimization":
      "Optimisation des itinéraires et des horaires",
    "pricing.compareFeatures.clientSelfAccessPortal":
      "Portail en libre-service pour les clients (à venir)",
    "pricing.compareFeatures.localBusinessHours":
      "Support pendant les heures ouvrables locales",
    "pricing.compareFeatures.enterpriseSupport": "Support entreprise 24/7",
    // OnboardingCoursePage Component
    "onboarding.title": "Cours",
    "onboarding.allCourses": "Tous les cours",
    "onboarding.productKnowledge": "Connaissance des produits ZetCollect",
    "onboarding.onboardingAndIssueResolution":
      "Intégration et résolution des problèmes",
    "onboarding.filter.all": "Toutes les leçons",
    "onboarding.filter.completed": "Terminé",
    "onboarding.filter.inProgress": "En cours",
    "onboarding.noLessons":
      "Aucune leçon trouvée pour cette catégorie ou ce filtre.",

    // Courses Data (from coursesData.json)
    "courses.onboarding.title": "Intégration et résolution des problèmes",
    "courses.onboarding.lesson.protecting-accounts.title":
      "Protéger les comptes avec l'authentification à deux facteurs de ZetCollect",
    "courses.onboarding.lesson.protecting-accounts.description":
      "Dans ce cours, vous apprendrez tout ce que vous devez savoir sur l'authentification à deux facteurs (2FA) de ZetCollect. Vous serez équipé pour...",
    "courses.product-knowledge.title": "Connaissance des produits ZetCollect",
    "courses.product-knowledge.lesson.mobile-app-basics.title":
      "Bases de l'application mobile ZetCollect",
    "courses.product-knowledge.lesson.mobile-app-basics.description":
      "Apprenez à naviguer dans l'application mobile ZetCollect, à effectuer des transactions de base et à résoudre les problèmes courants.",
    "courses.compliance.title": "Conformité et réglementation",
    "courses.compliance.lesson.understanding-kyc-requirements.title":
      "Comprendre les exigences KYC chez ZetCollect",
    "courses.compliance.lesson.understanding-kyc-requirements.description":
      "Bienvenue dans la troisième partie de notre série ! Ici, vous apprendrez les bases de l'intégration des clients, la vérification de leurs documents et plus encore...",
    "courses.compliance.lesson.fraud-prevention-training.title":
      "Meilleures pratiques de prévention de la fraude",
    "courses.compliance.lesson.fraud-prevention-training.description":
      "Comprendre les schémas de fraude courants et apprendre les meilleures pratiques pour protéger vous-même et vos clients contre la fraude financière.",
    "courses.compliance.lesson.data-privacy-regulations.title":
      "Réglementations et meilleures pratiques en matière de protection des données",
    "courses.compliance.lesson.data-privacy-regulations.description":
      "Un cours essentiel sur les lois de protection des données (par exemple, RGPD, réglementations locales) et sur la manière de gérer les données des clients de manière sécurisée et conforme.",
    // ProductKnowledgeCoursePage Component
    "productKnowledge.title": "Cours",
    "productKnowledge.allCourses": "Tous les cours",
    "productKnowledge.productKnowledge": "Connaissance des produits ZetCollect",
    "productKnowledge.onboardingAndIssueResolution":
      "Intégration et résolution des problèmes",
    "productKnowledge.filter.all": "Toutes les leçons",
    "productKnowledge.filter.completed": "Terminé",
    "productKnowledge.filter.inProgress": "En cours",
    "productKnowledge.noLessons":
      "Aucune leçon trouvée pour cette catégorie ou ce filtre.",
    // CourseLessonPage Component
    "courseLesson.title": "{lessonTitle}",
    "courseLesson.notFound":
      "Leçon non trouvée. Veuillez vérifier l'URL ou retourner à la page principale de formation.",
    "courseLesson.backToCourse": "Retour à {category}",
    "courseLesson.backToAllCourses": "Retour à tous les cours",
    "courseLesson.relatedCourses": "Cours connexes",

    // lessonContent.json
    "lessons.protecting-accounts.title":
      "Protéger les comptes avec l'authentification à deux facteurs de ZetCollect",
    "lessons.protecting-accounts.category":
      "Intégration et résolution des problèmes",
    "lessons.protecting-accounts.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Introduction à l\'authentification à deux facteurs</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">L\'authentification à deux facteurs (2FA) ajoute une couche supplémentaire de sécurité à votre compte ZetCollect. Elle nécessite une seconde forme de vérification en plus de votre mot de passe, réduisant considérablement le risque d\'accès non autorisé.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Pourquoi la 2FA est-elle importante ?</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Protège contre le vol de mot de passe.</li><li>Ajoute une couche essentielle de défense contre les attaques de phishing.</li><li>Garantit que seul vous pouvez accéder à votre compte, même si votre mot de passe est compromis.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Comment activer la 2FA</h2><p class="text-lg text-gray-700 mb-6 leading-relaxed">Suivez ces étapes simples pour activer la 2FA sur votre compte ZetCollect :</p><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Connectez-vous à votre tableau de bord ZetCollect.</li><li>Accédez aux \'Paramètres de sécurité\'.</li><li>Sélectionnez \'Activer l\'authentification à deux facteurs\'.</li><li>Choisissez votre méthode préférée (par exemple, application d\'authentification, code SMS).</li><li>Suivez les instructions à l\'écran pour finaliser la configuration.</li></ol><p class="text-lg text-gray-600 italic mb-6">Pour plus de détails, consultez notre guide utilisateur officiel.</p>',
    "lessons.protecting-accounts.relatedCourses.onboarding.title":
      "Intégration et résolution des problèmes",
    "lessons.protecting-accounts.relatedCourses.compliance.title":
      "Conformité et réglementation",
    "lessons.adding-business-kyc3.title":
      "Ajouter une entreprise à un compte KYC de niveau 3",
    "lessons.adding-business-kyc3.category":
      "Intégration et résolution des problèmes",
    "lessons.adding-business-kyc3.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Comprendre le KYC de niveau 3 pour les entreprises</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Les comptes KYC de niveau 3 offrent des limites de transaction et des fonctionnalités améliorées pour les entreprises. Ce cours décrit les exigences et le processus étape par étape pour mettre à niveau votre compte d\'entreprise.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Documents requis :</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Certificat d\'enregistrement de l\'entreprise.</li><li>Numéro d\'identification fiscale (TIN).</li><li>Preuve de l\'adresse de l\'entreprise.</li><li>Identification pour tous les directeurs/partenaires.</li><li>Relevé bancaire de l\'entreprise.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Processus de candidature :</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Connectez-vous à votre compte d\'entreprise ZetCollect.</li><li>Accédez à la section \'Mettre à niveau le compte\'.</li><li>Sélectionnez \'KYC de niveau 3 pour les entreprises\'.</li><li>Téléchargez tous les documents requis.</li><li>Soumettez votre candidature pour examen.</li></ol><p class="text-lg text-gray-600 italic mb-6">Le temps de traitement peut varier. Vous serez notifié par courriel une fois approuvé.</p>',
    "lessons.adding-business-kyc3.relatedCourses.onboarding.title":
      "Intégration et résolution des problèmes",
    "lessons.adding-business-kyc3.relatedCourses.product-knowledge.title":
      "Connaissance des produits ZetCollect",
    "lessons.understanding-kyc-requirements.title":
      "Comprendre les exigences KYC chez ZetCollect",
    "lessons.understanding-kyc-requirements.category":
      "Conformité et réglementation",
    "lessons.understanding-kyc-requirements.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Introduction au KYC</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Le processus de connaissance du client (KYC) est essentiel pour les institutions financières afin de vérifier l\'identité de leurs clients. Cela est crucial pour prévenir la fraude, le blanchiment d\'argent et le financement du terrorisme.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Principes clés du KYC :</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Programme d\'identification des clients (CIP).</li><li>Vérification préalable des clients (CDD).</li><li>Surveillance continue.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Documents généralement requis :</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Pièce d\'identité délivrée par le gouvernement (passeport, carte d\'identité nationale).</li><li>Preuve d\'adresse (facture de services publics, relevé bancaire).</li><li>Preuve de revenu (pour certains types de comptes).</li></ul><p class="text-lg text-gray-600 italic mb-6">Assurez-vous toujours que les documents sont valides et à jour.</p>',
    "lessons.understanding-kyc-requirements.relatedCourses.compliance.title":
      "Conformité et réglementation",
    "lessons.mobile-app-basics.title":
      "Bases de l'application mobile ZetCollect",
    "lessons.mobile-app-basics.category":
      "Connaissance des produits ZetCollect",
    "lessons.mobile-app-basics.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Démarrer avec l\'application ZetCollect</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Cette leçon couvre les fonctionnalités et caractéristiques fondamentales de l\'application mobile ZetCollect, conçue pour une gestion financière fluide en déplacement.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Fonctionnalités principales :</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Gestion des clients.</li><li>Collecte mobile.</li><li>Système de carnets.</li><li>Rapports et analyses.</li></ul><p class="text-lg text-gray-600 italic mb-6">Des mises à jour régulières apportent de nouvelles fonctionnalités et améliorations.</p>',
    "lessons.mobile-app-basics.relatedCourses.product-knowledge.title":
      "Connaissance des produits ZetCollect",
    "lessons.fraud-prevention-training.title":
      "Meilleures pratiques de prévention de la fraude",
    "lessons.fraud-prevention-training.category":
      "Conformité et réglementation",
    "lessons.fraud-prevention-training.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Identifier et prévenir la fraude</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">La fraude est une menace constante dans le secteur financier. Cette formation vous équipe des connaissances nécessaires pour identifier les indicateurs de fraude courants et mettre en œuvre des stratégies de prévention efficaces.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Types de fraude courants :</h2><ul class="list-disc list-inside mb-6 space-y-2 text "list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Hameçonnage et smishing.</li><li>Vol d\'identité.</li><li>Prise de contrôle de compte.</li><li>Ingénierie sociale.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Stratégies de prévention :</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Vérifiez rigoureusement l\'identité des clients.</li><li>Éduquez les clients sur les meilleures pratiques de sécurité.</li><li>Signalez immédiatement les activités suspectes.</li><li>Utilisez des mots de passe forts et uniques ainsi que la 2FA.</li></ul><p class="text-lg text-red-600 font-semibold mb-6">Rappelez-vous : si quelque chose semble anormal, c\'est probablement le cas. Péchez toujours par excès de prudence.</p>',
    "lessons.fraud-prevention-training.relatedCourses.compliance.title":
      "Conformité et réglementation",
  },
  sw: {
    // About Page
    "about.title": "Kuhusu ZetCollect:",
    "about.description":
      "ZetCollect ni jukwaa la hali ya juu linalotumia simu za mkononi lililoundwa kubadilisha ukusanyaji na usimamizi wa pesa kwa taasisi za microfinance, vyama vya ushirika, na watoa huduma za kifedha kote Afrika. Imejengwa kwa kuzingatia mahitaji ya kipekee ya masoko ya Afrika, ZetCollect inarahisisha shughuli, inaboresha uwazi, na inakuza uaminifu kati ya taasisi na wateja wao. Dhamira yetu ni kuwezesha mashirika kusimamia ukusanyaji kwa ufanisi, salama, na kwa kiwango kikubwa, huku ikishughulikia pengo la ujumuishaji wa kifedha katika jamii zisizohudumiwa vya kutosha.",
    "about.numbers.title": "ZetCollect Group katika Nambari",
    "about.numbers.teamExperience": "Uzoefu wa Kitaalamu wa Timu",
    "about.numbers.successStories": "Hadithi za Mafanikio",
    "about.numbers.industryCovers": "Sekta Zilizofunikwa",
    "about.geography.title": "Jiografia Yetu",
    "about.geography.description":
      "Ikiwa na makao makuu nchini Kenya na ikifanya kazi kimataifa, timu yetu inasukuma mabadiliko ya kidijitali kwa Biashara duniani kote. Tunahakikisha uwepo wa moja kwa moja na wa mtandaoni ili kutoa huduma kwa masoko yetu ya msingi ya lengo katika:",
    "about.geography.kenya": "Kenya",
    "about.geography.kenyaOffice": "Maeneo ya Ofisi: Nairobi",
    "about.geography.rwanda": "Rwanda",
    "about.geography.rwandaOffice": "Maeneo ya Ofisi za Mtandaoni: Kigali",
    "about.geography.cameroon": "Kamerun",
    "about.geography.cameroonOffice": "Maeneo ya Ofisi za Mtandaoni: Douala",
    "about.clients.title": "Wateja Wetu",
    "about.clients.description":
      "Tumeshirikiana na kampuni kutoka mabara 3 ambayo ni Afrika, Amerika ya Kaskazini na Ulaya. Baadhi ya wateja wetu wa kujulikana ni pamoja na:",
    "about.clients.logoAlt": "Nembo ya Mteja {index}",
    "about.pricingPolicy.title": "Sera Yetu ya Bei",
    "about.pricingPolicy.description":
      "Kulingana na mradi na asili ya huduma inayotolewa, tunatoa mifano ya bei ifuatayo:",
    "about.pricingPolicy.subscriptionBased": "Mfano wa Msingi wa Usajili",
    "about.pricingPolicy.subscriptionBasedDesc":
      "Mfano huu unaruhusu wateja kupata huduma zetu za kina, zinazotolewa na suluhisho letu ambalo ni ZetScore na Uboreshaji wa Msururu wa Ugavi kama Huduma (SCOS). Usajili unajumuisha sasisho za mara kwa mara, vipengele vipya, na maboresho. Wateja wanaendelea kupata huduma hizi kwa muda wa usajili wao.",
    "about.pricingPolicy.payAsYouGo": "Lipa Unapohitaji",
    "about.pricingPolicy.payAsYouGoDesc":
      "Mfano wetu wa kulipa unapohitaji hutoa unyumbufu kwa wateja kutumia huduma za ZetScore na SCOS kulingana na mahitaji yao, wakilipa tu kwa vipengele na rasilimali zinazotumiwa. Njia hii ni bora kwa Biashara zinazotafuta suluhisho zinazoweza kupanuka bila ahadi za muda mrefu.",
    "about.pricingPolicy.serviceContinuity": "Mfano wa Kuendelea kwa Huduma",
    "about.pricingPolicy.serviceContinuityDesc":
      "Mfano wa kuendelea kwa huduma unahakikisha upatikanaji usiokatizwa wa ZetScore na SCOS pamoja na msaada wa kujitolea, matengenezo ya kujihami, na sasisho za kipaumbele. Mfano huu umeundwa kwa Biashara zinazohitaji utendaji na uaminifu thabiti.",
    "about.pricingPolicy.onSiteDedicated": "Mfano wa Kujitolea kwenye Tovuti",
    "about.keyFeatures.title": "Vipengele vyetu vya Msingi",
    "about.keyFeatures.clientManagement.title": "Usimamizi wa Wateja",
    "about.keyFeatures.clientManagement.description":
      "Jiandikishe, fuatilia, na simamia wasifu wa wateja kwa urahisi na sasisho za wakati halisi, zikihakikisha huduma za kibinafsi na rekodi sahihi.",
    "about.keyFeatures.collectorManagement.title": "Usimamizi wa Wakusanyaji",
    "about.keyFeatures.collectorManagement.description":
      "Wape nguvu mawakala wa shambani kwa zana za angavu za kuratibu, kufuatilia, na kuripoti ukusanyaji, zimeboreshwa kwa mazingira ya mtandaoni na nje ya mtandao.",
    "about.keyFeatures.mobileCollection.title": "Ukusanyaji wa Simu",
    "about.keyFeatures.mobileCollection.description":
      "Programu yetu ya simu inayoweza kufanya kazi nje ya mtandao inawawezesha wakusanyaji kushughulikia malipo mahali popote, wakati wowote, ikihakikisha huduma isiyokatizwa katika maeneo yenye muunganisho dhaifu.",
    "about.keyFeatures.bookletSystem.title": "Mfumo wa Vijarida",
    "about.keyFeatures.bookletSystem.description":
      "Badilisha vijarida vya jadi vya ukusanyaji kuwa dijitali na kiolesura cha usalama na rahisi kutumia kwa kufuatilia miamala na kupunguza makosa.",
    "about.keyFeatures.reportsAnalytics.title": "Ripoti na Uchanganuzi",
    "about.keyFeatures.reportsAnalytics.description":
      "Pata maarifa yanayoweza kutekelezwa na dashibodi za wakati halisi, ripoti zinazoweza kubinafsishwa, na uchanganuzi wa utabiri ili kuboresha shughuli na kufanya maamuzi ya busara zaidi.",
    "about.keyFeatures.transactionHistory.title": "Historia ya Miamala",
    "about.keyFeatures.transactionHistory.description":
      "Dumisha rekodi ya uwazi, inayoweza kukaguliwa ya miamala yote, inayoweza kupatikana na taasisi na wateja kwa ajili ya uaminifu na uwajibikaji.",
    "about.keyFeatures.smsNotifications.title": "Arifa za SMS",
    "about.keyFeatures.smsNotifications.description":
      "Wafahamishe wateja kwa sasisho za SMS za moja kwa moja na za wakati unaofaa kuhusu malipo, mizani, na vikumbusho, zikiboresha ushirikiano na uzingatiaji.",
    "about.keyFeatures.userAccessRoles.title":
      "Upatikanaji wa Watumiaji na Majukumu",
    "about.keyFeatures.userAccessRoles.description":
      "Simamia ruhusa kwa usalama na upatikanaji unaotegemea jukumu, ukihakikisha uadilifu wa data na ufanisi wa uendeshaji wa timu.",
    "about.keyFeatures.dailySynchronization.title": "Usawazishaji wa Kila Siku",
    "about.keyFeatures.dailySynchronization.description":
      "Sawazisha data kiotomatiki kwenye vifaa na mifumo, hata katika mazingira ya bandwidth ya chini, ili kuweka taarifa za sasa na za kuaminika.",
    "about.keyFeatures.branchSetup.title": "Usanidi wa Tawi",
    "about.keyFeatures.branchSetup.description":
      "Sanidi na simamia matawi mengi kwa urahisi, ukibinafsisha mtiririko wa kazi kwa mahitaji ya kikanda huku ukidumisha usimamizi wa kati.",
    // Why ZetCollect
    "why.title": "Kwa Nini ZetCollect",
    "why.title2": "Nini Mteja Wetu Anapata Kuchagua ZetCollect:",
    "why.subtitle":
      "Imejengwa mahsusi kwa hali halisi ya microfinance ya Afrika",
    "why.quality.title": "Kampuni Inayozingatia Ubora",
    "why.quality.alt": "Beji ya Ubora",
    "why.quality.desc":
      "Tunatoa tu programu na huduma za ubora wa juu kwa wateja wetu. Tunahakikisha utapata thamani ya Biashara inayoonekana, utafurahia michakato ya mradi yenye afya, timu za kitaalamu na zenye motisha, na mawasiliano ya ufanisi kati ya ZetCollect, timu zako, na wadau. Ahadi yetu ya kutoa programu na huduma za ubora wa juu sio ahadi tu; ni agano lililofumwa katika kila mstari wa msimbo na lililoelezwa katika kila uamuzi wa kimkakati.",
    "why.security.title": "Usalama wa Kiwango cha Juu",
    "why.security.alt": "Ikoni ya Usalama",
    "why.security.desc":
      "Mipango yetu ya usalama haijazuiliwa na kufikia viwango vya sekta; inavizidi. Tunaona usalama kama chombo cha kuishi, kinachobadilika pamoja na mazingira ya vitisho yanayobadilika kila mara. Kama vile askari anavyorekebisha changamoto zinazoibuka, hatua zetu za usalama hupitia urekebishaji na uboreshaji wa mara kwa mara. Tufikirie kama wabunifu wa ngome ya dijitali, ambapo algoriti za usimbaji thabiti zinasimama kama msingi, ulinzi wa tabaka nyingi unahudumu kama ngome, na ufuatiliaji wa kujihami unafanya kazi kama mnara wetu wa uchunguzi. Ingawa vyeti vina thamani, tunaamini kwamba usalama wa kweli ni kujitolea kwa kuendelea na 'usalama ni wajibu wa kila mtu'.",
    "why.africa.title": "Imejengwa kwa Hali Halisi za Afrika",
    "why.africa.desc":
      "Imeundwa kwa mazingira ya muunganisho wa chini na uwezo wa kufanya kazi nje ya mtandao wa kwanza na imeboreshwa kwa hali za soko la ndani.",
    "why.fraud.title": "Inayostahimili Ulaghai",
    "why.fraud.desc":
      "Vipengele vya usalama vya hali ya juu ikiwa ni pamoja na daftari za dijitali, uchukuzi wa GPS, na uthibitishaji wa wakati halisi huzuia shughuli za ulaghai.",
    "why.mobile.title": "Simu za Kwanza",
    "why.mobile.desc":
      "Imeboreshwa kwa simu za mkononi na kompyuta za mkononi na violesura vya angavu vinavyofanya kazi vizuri kwenye kifaa chochote.",
    "why.customizable.title": "Inayoweza Kubinafsishwa Kabisa",
    "why.customizable.desc":
      "Rekebisha jukwaa kwa mtiririko wako wa kazi, chapa, na mahitaji ya uendeshaji.",
    "why.integrable.title": "Inayoweza Kuunganishwa",
    "why.integrable.desc":
      "Unganisha bila mshono na mifumo ya benki ya msingi iliyopo na huduma za kifedha za wahusika wengine.",
    "why.data.title": "Maamuzi Yanayotokana na Data",
    "why.data.desc":
      "Zana za uchanganuzi na ripoti za kina hutoa maarifa yanayoweza kutekelezwa kwa maamuzi bora ya Biashara.",
    "why.readMore": "Soma zaidi",

    // Blog Page
    "blog.title": "Blogu",
    "blog.category.financial": "Teknolojia ya Fedha",
    "blog.post1.title":
      "Kubadilisha Ukusanyaji wa Fedha na Ubunifu wa Simu za Mkononi wa ZetCollect",
    "blog.post1.description":
      "ZetCollect hurahisisha ukusanyaji wa fedha kote Afrika na programu yake ya simu ya angavu, inayoweza kufanya kazi nje ya mtandao. Imejaa usalama thabiti na uchanganuzi wa akili, hurahisisha malipo na kujenga uaminifu. Gundua jinsi inavyobadilisha fedha kwa taasisi.",
    "blog.post2.title":
      "Kulinda Mustakabali wa Fedha na Ulinzi wa Juu wa ZetCollect",
    "blog.post2.description":
      "ZetCollect inalinda ukusanyaji wako wa fedha na zana za kuzuia udanganyifu za hali ya juu. Usalama wake thabiti unahakikisha uaminifu na kutegemewa kwa taasisi za Afrika. Jifunze jinsi inavyolinda shughuli zako.",
    "blog.post3.title":
      "Kuongeza Ufanisi na Uchanganuzi wa Akili wa ZetCollect",
    "blog.post3.description":
      "Dashibodi yenye nguvu ya uchanganuzi wa ZetCollect hutoa maarifa ya wakati halisi kwa maamuzi ya fedha ya akili zaidi. Imebuniwa kwa Afrika, hurahisisha ukusanyaji na huongeza uwazi. Chunguza athari zake zinazoendeshwa na data.",

    // Events Page
    "events.title": "Matukio",
    "events.subtitle": "Gundua matukio yanayokuja yafuatayo.",
    "events.filter.all": "Matukio Yote",
    "events.filterType": "Aina ya Tukio",
    "events.type.webinar": "Semina ya Mtandaoni",
    "events.type.inperson": "Mwa moja kwa moja",
    "events.upcoming": "Matukio Yanayokuja",
    "events.event1.month": "AGOSTI",
    "events.event1.day": "4",
    "events.event1.type": "Semina ya Mtandaoni",
    "events.event1.title": "Onyesho la Mtandaoni la ZetCollect",
    "events.event1.description":
      "Tukio letu la Maonyesho ya Moja kwa Moja ya ZetCollect linatoa uchunguzi wa kina wa seti kamili ya huduma zilizoundwa ili kubadilisha ukusanyaji wa fedha. Utafanyia uchunguzi jinsi ZetCollect inavyowezesha mashirika kwa Usimamizi wa Wateja, Usimamizi wa Wakusanyaji, Usanidi wa Tawi, na Uwezo wa Ukusanyaji wa Simu. Shuhudia moja kwa moja jinsi Mfumo wetu wa Daftari, Historia ya Miamala, Ripoti na Uchanganuzi, na Majukumu ya Upatikanaji wa Watumiaji yanavyoboresha ufanisi na kurahisisha shughuli. Zaidi ya hayo, gundua faida za Arifa za SMS na Usawazishaji wa Kila Siku usio na mshono. Usikose fursa hii ya kuona jinsi ZetCollect inavyoweza kubadilisha mbinu yako ya ukusanyaji na usimamizi wa fedha.",
    "events.event1.dateTime": "JUMATATU, Agosti 4, 2025, SAA GMT+1",
    "events.event1.time": "10:00 ASUBUHI HADI 11:00 ASUBUHI",
    "events.event2.month": "OKTOBA",
    "events.event2.day": "6",
    "events.event2.type": "Mwa moja kwa moja",
    "events.event2.title": "Mkutano wa Mwaka wa Ubunifu wa Teknolojia",
    "events.event2.description":
      "Jiunge na viongozi wa sekta na wabunifu katika Mkutano wa Mwaka wa Ubunifu wa Teknolojia kujadili mwelekeo wa hivi karibuni wa teknolojia, mabadiliko ya kidijitali, na mikakati ya kuthibitisha siku za usoni. Inahusisha wazungumzaji wa msingi, warsha za maingiliano, na fursa za mitandao.",
    "events.event2.dateTime": "JUMATATU, Oktoba 6, 2025, SAA GMT+1",
    "events.event2.time": "09:00 ASUBUHI HADI 05:00 USIKU",

    // Navigation
    "nav.home": "Nyumbani",
    "nav.features": "Vipengele",
    "nav.why": "Kwa Nini ZetCollect",
    "nav.demo": "Onyesho",
    "nav.upcoming": "Vipengele Vinavyokuja",
    "nav.pricing": "Bei",
    "nav.contact": "Wasiliana",
    "nav.login": "Ingia",

    // Hero Section
    "hero.title": "Badilisha Ukusanyaji wa Pesa na ZetCollect",
    "hero.subtitle":
      "Kuwezesha taasisi za kifedha za Afrika kwa suluhisho za kidijitali za ukusanyaji zilizo na ufanisi, uwazi na upinzani wa ulaghai",
    "hero.cta.demo": "Angalia Mfano",
    "hero.cta.request": "Omba Mfano",
    "hero.cta.features": "Chunguza Vipengele",

    // Features
    "features.title": "Vipengele Vikuu",
    "features.subtitle": "Kila kitu unachohitaji ili kudigitize ukusanyaji",
    "features.client.title": "Usimamizi wa Wateja",
    "features.client.desc":
      "Hifadhidata kamili ya wateja yenye maelezo na historia ya ukusanyaji.",
    "features.collector.title": "Usimamizi wa Wakusanya",
    "features.collector.desc":
      "Fuatilia utendaji wa wakusanya, njia na malengo ya kila siku.",
    "features.branch.title": "Usanidi wa Matawi",
    "features.branch.desc":
      "Msaada wa matawi mengi na mipangilio inayoweza kubadilishwa.",
    "features.mobile.title": "Ukusanyaji wa Simu",
    "features.mobile.desc":
      "Programu ya simu inayoweza kutumika bila mtandao kwa kurekodi miamala popote.",
    "features.booklet.title": "Mfumo wa Vitabu",
    "features.booklet.desc":
      "Usimamizi wa kidijitali wa vitabu na msimbo wa QR na vipengele vya uthibitisho.",
    "features.history.title": "Historia ya Miamala",
    "features.history.desc":
      "Njia kamili ya ukaguzi wa shughuli zote za ukusanyaji na malipo.",
    "features.reports.title": "Ripoti na Uchanganuzi",
    "features.reports.desc":
      "Dashibodi za wakati halisi na ripoti za kina kwa maamuzi yenye msingi wa data.",
    "features.access.title": "Ufikiaji na Majukumu ya Watumiaji",
    "features.access.desc":
      "Ruhusa zinazotegemea majukumu zinazohakikisha ufikiaji salama wa taarifa nyeti.",
    "features.sms.title": "Arifa za SMS",
    "features.sms.desc":
      "Vikumbusho na uthibitisho wa kiotomatiki kupitia SMS kwa mawasiliano bora.",
    "features.sync.title": "Ulandanishi wa Kila Siku",
    "features.sync.desc":
      "Ulandanishi unaofaa wa data kati ya vifaa vya simu na hifadhidata kuu.",

    // Demo Section
    "demo.title": "ZetCollect Ikifanya Kazi",
    "demo.subtitle":
      "Angalia jinsi ZetCollect inavyoratibu ukusanyaji kwa IMF za Afrika",
    "demo.cta": "Omba Mfano",
    "demo.video_title": "ZetCollect Ikifanya Kazi",
    "demo.play_button": "Cheza Video",
    "demo.content_title": "Utachokiona katika mfano huu:",
    "demo.points.real_time_tracking":
      "Ufuatiliaji wa ukusanyaji wa wakati halisi",
    "demo.points.offline_mode": "Uwezo wa hali ya nje ya mtandao",
    "demo.points.analytics_dashboard": "Muhtasari wa dashibodi ya uchanganuzi",
    "demo.points.mobile_collector": "Kiolesura cha wakusanya cha simu",
    "demo.points.fraud_prevention": "Vipengele vya kuzuia ulaghai",
    "demo.points.multi_branch": "Usimamizi wa matawi mengi",

    // Upcoming Features
    "upcoming.title": "Vipengele Vijavyo",
    "upcoming.subtitle":
      "Vipengele vya kusisimua vinakuja hivi karibuni ili kuboresha uzoefu wako wa ukusanyaji",
    "upcoming.gps.title": "Ufuatiliaji wa GPS",
    "upcoming.gps.desc":
      "Kufuatilia eneo kwa wakati halisi kwa usalama ulioimarishwa na uboreshaji wa njia.",
    "upcoming.alerts.title": "Arifa za Ukusanyaji Uliokosa",
    "upcoming.alerts.desc":
      "Arifa za kiotomatiki kwa makusanyo yaliyokosa na vikumbusho vya kufuatilia.",
    "upcoming.risk.title": "Profaili na Ukadiriaji wa Hatari ya Mteja",
    "upcoming.risk.desc":
      "Tathmini ya hatari inayoendeshwa na AI na mfumo wa ukadiriaji wa mteja kwa kufanya maamuzi bora.",
    "upcoming.route.title": "Uboreshaji wa Njia na Ratiba",
    "upcoming.route.desc":
      "Algoriti za kupanga njia mahiri ili kuboresha ratiba za wakusanyaji na kuongeza ufanisi.",
    "upcoming.portal.title": "Jukwaa la Kujihudumia la Mteja",
    "upcoming.portal.desc":
      "Waruhusu wateja kutazama historia yao ya ukusanyaji na kufanya malipo wenyewe.",
    "upcoming.currency.title": "Mfumo Mpya wa Sarafu (KES)",
    "upcoming.currency.desc":
      "Ujumuishaji usio na mshono wa Shilingi za Kenya (KES) kwa miamala yote na ripoti za kifedha.",

    // Contact Us
    "contact.title": "Wasiliana Nasi",
    "contact.subtitle":
      "Tafadhali wasiliana nasi kujadili maswali yoyote ya ziada.",
    "contact.form.title":
      "Zungumza na ZetCollect ili kuunda mustakabali wako wa kidijitali.",
    "contact.form.first_name": "Jina la Kwanza*",
    "contact.form.last_name": "Jina la Mwisho*",
    "contact.form.email": "Barua pepe ya Biashara*",
    "contact.form.job_title": "Cheo cha Kazi*",
    "contact.form.contact_number": "Simu ya Kazini*",
    "contact.form.organisation": "Jina la kampuni*",
    "contact.form.country": "Nchi*",
    "contact.form.country.cameroon": "Kameruni",
    "contact.form.country.kenya": "Kenya",
    "contact.form.country.gabon": "Gabon",
    "contact.form.country.tchad": "Chadi",
    "contact.form.country.congo": "Jamhuri ya Kongo",
    "contact.form.message": "Ujumbe Wako*",
    "contact.form.functional_role": "Jukumu la Kazi*",
    "contact.form.functional_role.finance": "Fedha na Uhasibu",
    "contact.form.functional_role.hr": "Rasilimali za Watu",
    "contact.form.functional_role.operator": "Opereta",
    "contact.form.functional_role.it": "TEHAMA",
    "contact.form.job_level": "Kiwango cha Kazi*",
    "contact.form.job_level.c_level": "Kiwango cha C",
    "contact.form.job_level.vp": "Makamu wa Rais",
    "contact.form.job_level.director": "Mkurugenzi",
    "contact.form.job_level.manager": "Meneja",
    "contact.form.job_level.other": "Nyingine",
    "contact.form.how_did_you_hear": "Umesikia vipi kuhusu ZetCollect?",
    "contact.form.how_did_you_hear.search": "Injini ya Utafutaji",
    "contact.form.how_did_you_hear.referral": "Rufaa",
    "contact.form.opt_in":
      "Jisajili kupokea taarifa za ZetCollect zilizoboreshwa kama vile habari za sekta, ripoti, masasisho ya suluhisho na matukio, kupitia barua pepe na simu",
    "contact.form.submit": "Wasilisha",
    "contact.microservices.title": "Kuhudumia Huduma Ndogo Ndogo Barani Afrika",

    // Common
    "common.learnMore": "Jifunze Zaidi",
    "common.contactUs": "Wasiliana Nasi",
    "common.getStarted": "Anza",
    "common.comingSoon": "Inakuja Hivi Karibuni",
    "common.newsletter": "Baki umejua—jiunge na jarida letu!",
    "common.talkToUs": "Unahitaji hivi sasa? Zungumza nasi!",

    // Footer
    "footer.logo_alt": "Nembo ya Kampuni",
    "footer.help_text":
      "Unahitaji msaada kupata suluhisho bora kwa Biashara yako?",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.youtube": "YouTube",
    "footer.about": "KUHUSU",
    "footer.who_we_serve": "Tunawahudumia Nani",
    "footer.customer_story": "Hadithi ya mteja",
    "footer.about_us": "Kuhusu Sisi",
    "footer.pricing": "Bei",
    "footer.newsroom": "CHUMBA CHA HABARI",
    "footer.articles": "Makala",
    "footer.events_webinars": "Matukio na Semina za Mtandao",
    "footer.support": "Msaada",
    "footer.faq": "Maswali Yanayoulizwa Mara kwa Mara",
    "footer.training_certification": "Mafunzo na Uthibitisho",
    "footer.rights":
      "Imewashwa na © {year} Evolv ZetCollect Group Ltd. Haki Zote Zimehifadhiwa.",

    // WorkInProgressPage
    "wip.title": "Ukurasa Unaendelea kujengwa",
    "wip.description":
      "Tunafanya kazi kwa bidii kuufanya ukurasa huu uwe tayari. Rudi hivi karibuni kwa masasisho!",
    "wip.backToHome": "Rudi Nyumbani",

    // CustomerSupportPage
    "support.title": "Msaada wa Wateja",
    "support.subtitle": "Msaada Maalum wa Suluhisho",
    "support.selectLabel": "Chagua Kipengele",
    "support.selectPlaceholder": "Chagua Kipengele",
    "support.contactLabel": "Msaada wa {feature}:",
    "support.phone": "Simu",
    "support.email": "Barua pepe",
    "support.noSelection":
      "Tafadhali chagua kipengele ili kuona maelezo ya msaada.",
    "support.communityButton": "Jumuiya ya Msaada Mtandaoni",
    // Feature names
    "support.feature.client": "Usimamizi wa Wateja",
    "support.feature.collector": "Usimamizi wa Wakusanya (Wakala)",
    "support.feature.branch": "Usanidi wa Matawi na Taasisi",
    "support.feature.mobile": "Kiolesura cha Ukusanyaji wa Simu",
    "support.feature.booklet": "Mfumo wa Vitabu (Carnet)",
    "support.feature.history": "Historia ya Miamala",
    "support.feature.reports": "Ripoti na Uchanganuzi",
    "support.feature.access": "Ufikiaji na Majukumu ya Watumiaji",
    "support.feature.sms": "Arifa za SMS (za Hiari)",
    "support.feature.sync": "Ulandanishi wa Kila Siku",

    // ReleaseNotesPage
    "release.title": "Maelezo ya Toleo",
    "release.description1":
      "ZetCollect ni programu ya kukusanya fedha inayofaa kwa taasisi za Afrika. Muundo wake wa kirafiki wa simu hufanya kazi bila hitilafu, hata nje ya mtandao. Usalama wa hali ya juu na uchanganuzi wa data huongeza ufanisi na imani.",
    "release.description2":
      "Jukwaa letu la SaaS huleta masasisho ya kila wiki, yaliyofupishwa kila mwezi kwa uwazi. Watumiaji wa VPC hupokea masasisho ya kila robo mwaka na siku 14 za majaribio, au siku 45 na mazingira ya staging. ZetCollect hutoa zana za usalama, zinazobadilika, na za uchanganuzi.",
    "release.saas.title": "Programu ya ZetCollect: Toleo la 2025",
    "release.saas.systemVersion":
      "<strong>Toleo la</strong>: 1.2.0 - 25 Aprili 2025",
    "release.saas.systemVersion2":
      "<strong>Toleo la</strong>: 1.2.1 - 27 Juni 2025",
    "release.saas.title2": "Tovuti ya ZetCollect: Toleo la 2025",
    "release.saas.systemVersionWeb":
      "<strong>Toleo la</strong>: 1.0.0-Beta - 25 Aprili 2025",
    "release.saas.systemVersionWeb2":
      "<strong>Toleo la</strong>: 1.0.1-Beta - 27 Juni 2025",
    "release.saas.systemVersionWeb3":
      "<strong>Version</strong>: 1.0.2-Beta - 12th Julai 2025",
    "release.saas.systemVersionWeb4":
      "<strong>Version</strong>: 1.0.3-Beta - 18th Julai 2025",

    // FAQPage
    "faq.title": "Maswali Yanayoulizwa Mara kwa Mara",
    "faq.subtitle":
      "Hapa kuna majibu ya maswali yako yote ya moto kuhusu ZetCollect. Unaweza pia kuwasiliana nasi moja kwa moja au kuchunguza zaidi katika hifadhidata yetu ya maarifa na nyaraka za API.",
    "faq.questions.client_management":
      "Je, Kipengele cha Usimamizi wa Wateja cha ZetCollect Kinafanyaje Kazi?",
    "faq.answers.client_management":
      "Usimamizi wa Wateja wa ZetCollect hukuruhusu kuongeza, kusasisha, na kusimamia taarifa zote za wateja kwa urahisi, ikiwa ni pamoja na sehemu za desturi. Unaweza kugawa vitabu maalum vya ukusanyaji kwa wateja kwa ufuatiliaji wa kimuundo na kuweka matarajio ya akiba ya kila siku ili kufuatilia maendeleo yao kwa ufanisi.",
    "faq.questions.collector_management":
      "Je, Usimamizi wa Wakusanya (Wakala) Unatoa Vipengele Gani?",
    "faq.answers.collector_management":
      "Kipengele cha Usimamizi wa Wakusanya (Wakala) hukuruhusu kugawa wakala kwa matawi maalum, kuwagawia wateja na maeneo ya ukusanyaji, na kufuatilia shughuli zao za kila siku kwa wakati halisi. Hii ni pamoja na kufuatilia kiasi kilichokusanywa na kutambua ukusanyaji uliopotea.",
    "faq.questions.multi_branch":
      "Je, ZetCollect Inaweza Kusaidia Matawi Mengi na Taasisi?",
    "faq.answers.multi_branch":
      "Ndiyo, ZetCollect inasaidia usanidi wa matawi mengi na udhibiti wa upatikanaji unaotegemea majukumu, ikikuruhusu kusimamia matawi tofauti kwa ufanisi. Pia inatoa udhibiti wa kati wa ofisi ya kichwa kwa ufuatiliaji wa kina wa utendaji katika matawi yako yote.",
    "faq.questions.mobile_collection":
      "Je, Ni Nini Uwezo wa Kiolesura cha Ukusanyaji wa Simu?",
    "faq.answers.mobile_collection":
      "Kiolesura cha Ukusanyaji wa Simu ni programu ya Android iliyoundwa kwa wakusanya, inayowezesha kuingiza ukusanyaji kwa wakati halisi moja kwa moja kutoka kwa maeneo ya wateja. Inafanya kazi bila mshono mtandaoni na nje ya mtandao, ikilandanisha data zote kiotomatiki wakati muunganisho wa intaneti unapatikana, ikihakikisha uendeshaji wa kuendelea.",
    "faq.questions.booklet_system":
      "Je, Mfumo wa Vitabu (Carnet) Unazuiaje Ulaghai?",
    "faq.answers.booklet_system":
      "Mfumo wa Vitabu (Carnet) unagawia kila mteja kitabu cha ukusanyaji cha kidijitali. Wakusanya huweka alama za miamala kwenye programu kulingana na ingizo katika kitabu hiki cha kidijitali. Mchakato huu unaunda rekodi ya uwazi na inayoweza kuthibitishwa, ikipunguza kwa kiasi kikubwa hatari ya ulaghai na kuripoti vibaya.",
    // Training and Certification Page
    "training.title": "Piga hatua ya juu katika kazi yako",
    "training.subtitle":
      "Pata maarifa ya bidhaa unayohitaji ili kufanikiwa katika uwanja wako",
    "training.heroImageAlt": "Mchoro wa maendeleo ya kazi",
    "training.courses.title": "Kozi",
    "training.courses.subtitle":
      "Mkusanyiko wa rasilimali za kujifunza zinazowezesha Timu ya Usambazaji Nje ya Mtandao",
    "training.courses.onboarding.title": "Kujiunga na Utatuzi wa Masuala",
    "training.courses.productKnowledge.title":
      "Maarifa ya Bidhaa za ZetCollect",
    "training.courses.compliance.title": "Uzingatiaji na Kanuni",
    "pricing.section1.title": "Bei ya Haki kwa Ukuaji wa Haraka",
    "pricing.section1.description":
      "Tuna mipango ya bei rahisi inayofaa Biashara zinazokua za ukubwa wowote.",
    "pricing.section1.cta": "Anza",
    "pricing.section2.title": "Ada Zinazobadilika Zinazofaa Ukubwa Wako",
    "pricing.section2.business.title": "Biashara",
    "pricing.section2.business.description":
      "Bei yetu ya kawaida kwa Biashara.",
    "pricing.section2.business.features.title": "Unapata:",
    "pricing.section2.business.features.accountManager":
      "Meneja wa Akaunti ya Kiufundi (5/7 na masaa 4/siku) Asubuhi au Jioni",
    "pricing.section2.business.features.storage": "Hifadhi: 50GB",
    "pricing.section2.business.cta": "Anza",
    "pricing.section2.enterprise.title": "Mashirika",
    "pricing.section2.enterprise.description":
      "Pata viwango vya kubinafsisha, wameneja wa akaunti za kujitolea na zaidi.",
    "pricing.section2.enterprise.features.title": "Unapata:",
    "pricing.section2.enterprise.features.accountManager":
      "Meneja wa Akaunti ya Kiufundi (7/7 na masaa 24/24)",
    "pricing.section2.enterprise.features.storage": "Hifadhi: 500GB",
    "pricing.section2.enterprise.cta": "Wasiliana na Mauzo",
    "pricing.section3.title": "Linganisha Vipengele",
    "pricing.section3.link": "Jifunze kuhusu vipengele",
    "pricing.features.clientManagement": "Usimamizi wa Wateja",
    "pricing.features.collectorManagement": "Usimamizi wa Wakusanya (Wakala)",
    "pricing.features.branchSetup": "Usanidi wa Tawi na Taasisi",
    "pricing.features.mobileCollection": "Kiolesura cha Ukusanyaji wa Simu",
    "pricing.features.bookletSystem": "Mfumo wa Vitabu (Carnet)",
    "pricing.features.transactionHistory": "Historia ya Miamala",
    "pricing.features.reportsAnalytics": "Ripoti na Uchanganuzi",
    "pricing.features.userAccessRoles": "Ufikiaji na Majukumu ya Watumiaji",
    "pricing.features.smsNotifications": "Arifa za SMS (za Hiari)",
    "pricing.features.dailySynchronization": "Ulandanishi wa Kila Siku",
    "pricing.features.gpsTraceability":
      "Ufuatiliaji wa GPS (Ufuatiliaji wa Jiografia wa Wakusanya)",
    "pricing.features.missedCollectionAlerts": "Arifa za Ukusanyaji Uliokosa",
    "pricing.features.clientRiskProfile":
      "Profaili ya Hatari ya Mteja na Mfumo wa Ukadiriaji",
    "pricing.features.routeOptimization": "Uboreshaji wa Njia na Ratiba",
    "pricing.features.clientSelfAccessPortal":
      "Jukwaa la Kujihudumia la Mteja (Ramani ya Baadaye)",
    // OnboardingCoursePage Component
    "onboarding.title": "Kozi",
    "onboarding.allCourses": "Kozi Zote",
    "onboarding.productKnowledge": "Maarifa ya Bidhaa za ZetCollect",
    "onboarding.onboardingAndIssueResolution":
      "Kuingiza na Kusuluhisha Masuala",
    "onboarding.filter.all": "Masomo Yote",
    "onboarding.filter.completed": "Yamekamilika",
    "onboarding.filter.inProgress": "Inaendelea",
    "onboarding.noLessons":
      "Hakuna masomo yaliyopatikana kwa kategoria hii au chujio.",

    // Courses Data (from coursesData.json)
    "courses.onboarding.title": "Kuingiza na Kusuluhisha Masuala",
    "courses.onboarding.lesson.protecting-accounts.title":
      "Kulinda Akaunti kwa Uthibitishaji wa Sababu Mbili za ZetCollect",
    "courses.onboarding.lesson.protecting-accounts.description":
      "Katika kozi hii, utajifunza kila kitu unachohitaji kujua kuhusu Uthibitishaji wa Sababu Mbili (2FA) wa ZetCollect. Utakuwa na vifaa vya...",
    "courses.product-knowledge.title": "Maarifa ya Bidhaa za ZetCollect",
    "courses.product-knowledge.lesson.mobile-app-basics.title":
      "Misingi ya Programu ya Simu ya ZetCollect",
    "courses.product-knowledge.lesson.mobile-app-basics.description":
      "Jifunze jinsi ya kutumia programu ya simu ya ZetCollect, kufanya miamala ya msingi, na kutatua masuala ya kawaida.",
    "courses.compliance.title": "Kuzingatia na Udhibiti",
    "courses.compliance.lesson.understanding-kyc-requirements.title":
      "Kuelewa Mahitaji ya KYC katika ZetCollect",
    "courses.compliance.lesson.understanding-kyc-requirements.description":
      "Karibu katika sehemu ya tatu ya mfululizo wetu! Hapa, utajifunza misingi ya kuingiza wateja, kukagua hati zao, na zaidi...",
    "courses.compliance.lesson.fraud-prevention-training.title":
      "Mbinu Bora za Kuzuia Udanganyifu",
    "courses.compliance.lesson.fraud-prevention-training.description":
      "Elewa mipango ya kawaida ya udanganyifu na ujifunze mbinu bora za kujikinga na wateja wako dhidi ya udanganyifu wa kifedha.",
    "courses.compliance.lesson.data-privacy-regulations.title":
      "Kanuni za Faragha ya Data na Mbinu Bora",
    "courses.compliance.lesson.data-privacy-regulations.description":
      "Kozi muhimu kuhusu sheria za ulinzi wa data (kwa mfano, GDPR, kanuni za mitaa) na jinsi ya kushughulikia data ya wateja kwa usalama na kwa mujibu wa sheria.",
    // ProductKnowledgeCoursePage Component
    "productKnowledge.title": "Kozi",
    "productKnowledge.allCourses": "Kozi Zote",
    "productKnowledge.productKnowledge": "Maarifa ya Bidhaa za ZetCollect",
    "productKnowledge.onboardingAndIssueResolution":
      "Kuingiza na Kusuluhisha Masuala",
    "productKnowledge.filter.all": "Masomo Yote",
    "productKnowledge.filter.completed": "Yamekamilika",
    "productKnowledge.filter.inProgress": "Inaendelea",
    "productKnowledge.noLessons":
      "Hakuna masomo yaliyopatikana kwa kategoria hii au chujio.",
    // CourseLessonPage Component
    "courseLesson.title": "{lessonTitle}",
    "courseLesson.notFound":
      "Somo halijapatikana. Tafadhali angalia URL au rudi kwenye ukurasa wa mafunzo ya msingi.",
    "courseLesson.backToCourse": "Rudi kwa {category}",
    "courseLesson.backToAllCourses": "Rudi kwa Kozi Zote",
    "courseLesson.relatedCourses": "Kozi Zilizounganishwa",

    // lessonContent.json
    "lessons.protecting-accounts.title":
      "Kulinda Akaunti kwa Uthibitishaji wa Sababu Mbili za ZetCollect",
    "lessons.protecting-accounts.category": "Kuingiza na Kusuluhisha Masuala",
    "lessons.protecting-accounts.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Utamu wa 2FA</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Uthibitishaji wa Sababu Mbili (2FA) huongeza safu ya ziada ya usalama kwenye akaunti yako ya ZetCollect. Inahitaji aina ya pili ya uthibitishaji pamoja na nenosiri lako, ikipunguza kwa kiasi kikubwa hatari ya upatikanaji usioidhinishwa.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Kwa nini 2FA ni ya Muhimu?</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Hulinda dhidi ya wizi wa nenosiri.</li><li>Hiongeza safu muhimu ya ulinzi dhidi ya mashambulizi ya hadaa.</li><li>Huhakikisha kuwa ni wewe pekee unaoweza kufikia akaunti yako, hata kama nenosiri lako limeathirika.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Jinsi ya Kuwasha 2FA</h2><p class="text-lg text-gray-700 mb-6 leading-relaxed">Fuata hatua hizi rahisi ili kuwasha 2FA kwenye akaunti yako ya ZetCollect:</p><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Ingia kwenye dashibodi yako ya ZetCollect.</li><li>Nenda kwenye \'Mipangilio ya Usalama\'.</li><li>Chagua \'Washa Uthibitishaji wa Sababu Mbili\'.</li><li>Chagua njia unayopendelea (kwa mfano, programu ya uthibitishaji, msimbo wa SMS).</li><li>Fuata maagizo kwenye skrini ili kukamilisha usanidi.</li></ol><p class="text-lg text-gray-600 italic mb-6">Kwa maelezo zaidi, rejelea mwongozo wetu rasmi wa mtumiaji.</p>',
    "lessons.protecting-accounts.relatedCourses.onboarding.title":
      "Kuingiza na Kusuluhisha Masuala",
    "lessons.protecting-accounts.relatedCourses.compliance.title":
      "Kuzingatia na Udhibiti",
    "lessons.adding-business-kyc3.title":
      "Kuongeza Biashara kwenye Akaunti ya KYC ya Kiwango cha 3",
    "lessons.adding-business-kyc3.category": "Kuingiza na Kusuluhisha Masuala",
    "lessons.adding-business-kyc3.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Kuelewa KYC ya Kiwango cha 3 kwa Biashara</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Akaunti za KYC za Kiwango cha 3 hutoa mipaka ya miamala iliyoboreshwa na vipengele kwa Biashara. Kozi hii inaelezea mahitaji na mchakato wa hatua kwa hatua wa kuboresha akaunti yako ya Biashara.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Hati Zinazohitajika:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Cheti cha usajili wa Biashara.</li><li>Nambari ya Kitambulisho cha Ushuru (TIN).</li><li>Thibitisho wa anwani ya Biashara.</li><li>Kitambulisho kwa wakurugenzi/washirika wote.</li><li>Taarifa ya akaunti ya benki ya Biashara.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Mchakato wa Maombi:</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Ingia kwenye akaunti yako ya Biashara ya ZetCollect.</li><li>Nenda kwenye sehemu ya \'Boresha Akaunti\'.</li><li>Chagua \'KYC ya Kiwango cha 3 kwa Biashara\'.</li><li>Pakia hati zote zinazohitajika.</li><li>Wasilisha ombi lako kwa ukaguzi.</li></ol><p class="text-lg text-gray-600 italic mb-6">Muda wa usindikaji unaweza kutofautiana. Utaarifiwa kupitia barua pepe baada ya idhini.</p>',
    "lessons.adding-business-kyc3.relatedCourses.onboarding.title":
      "Kuingiza na Kusuluhisha Masuala",
    "lessons.adding-business-kyc3.relatedCourses.product-knowledge.title":
      "Maarifa ya Bidhaa za ZetCollect",
    "lessons.understanding-kyc-requirements.title":
      "Kuelewa Mahitaji ya KYC katika ZetCollect",
    "lessons.understanding-kyc-requirements.category": "Kuzingatia na Udhibiti",
    "lessons.understanding-kyc-requirements.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Utamu wa KYC</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Jua Mteja Wako (KYC) ni mchakato muhimu kwa taasisi za kifedha ili kuthibitisha utambulisho wa wateja wao. Hii ni muhimu kwa kuzuia udanganyifu, uchukuzi wa pesa, na ufadhili wa ugaidi.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Misingi ya KYC:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Programu ya Utambulisho wa Wateja (CIP).</li><li>Ukaguzi wa Wajibu wa Wateja (CDD).</li><li>Ufuatiliaji wa Mara kwa Mara.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Hati Zinazohitajika za Kawaida:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Kitambulisho kilichotolewa na Serikali (Paspoti, Kitambulisho cha Taifa).</li><li>Thibitisho wa anwani (Bili ya Huduma, Taarifa ya Benki).</li><li>Thibitisho wa mapato (kwa aina fulani za akaunti).</li></ul><p class="text-lg text-gray-600 italic mb-6">Hakikisha kila wakati hati ni halali na ziko za kisasa.</p>',
    "lessons.understanding-kyc-requirements.relatedCourses.compliance.title":
      "Kuzingatia na Udhibiti",
    "lessons.mobile-app-basics.title":
      "Misingi ya Programu ya Simu ya ZetCollect",
    "lessons.mobile-app-basics.category": "Maarifa ya Bidhaa za ZetCollect",
    "lessons.mobile-app-basics.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Kuanza na Programu ya ZetCollect</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Somo hili linashughulikia vipengele na utendakazi wa msingi wa programu ya simu ya ZetCollect, iliyoundwa kwa usimamizi wa kifedha usio na mshono popote ulipo.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Vipengele za Msingi:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Usimamizi wa Wateja.</li><li>Ukusanyaji wa Simu.</li><li>Mfumo wa Vitabu.</li><li>Ripoti na Uchanganuzi.</li></ul><p class="text-lg text-gray-600 italic mb-6">Misasisho ya mara kwa mara huleta vipengele vipya na maboresho.</p>',
    "lessons.mobile-app-basics.relatedCourses.product-knowledge.title":
      "Maarifa ya Bidhaa za ZetCollect",
    "lessons.fraud-prevention-training.title":
      "Mbinu Bora za Kuzuia Udanganyifu",
    "lessons.fraud-prevention-training.category": "Kuzingatia na Udhibiti",
    "lessons.fraud-prevention-training.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Kutambua na Kuzuia Udanganyifu</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Udanganyifu ni tishio la mara kwa mara katika sekta ya kifedha. Mafunzo haya yanakupa maarifa ya kutambua viashiria vya kawaida vya udanganyifu na kutekeleza mikakati ya kuzuia yenye ufanisi.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Aina za Udanganyifu za Kawaida:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Hadaa na Smishing.</li><li>Wizi wa Utambulisho.</li><li>Kuchukua Akaunti.</li><li>Uhandisi wa Jamii.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Mikakati ya Kuzuia:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Thibitisha utambulisho wa mteja kwa ukali.</li><li>Elimu wateja juu ya mbinu bora za usalama.</li><li>Ripoti shughuli za kutiliwa shaka mara moja.</li><li>Tumia nywila zenye nguvu, za kipekee na 2FA.</li></ul><p class="text-lg text-red-600 font-semibold mb-6">Kumbuka: Ikiwa kitu kinahisi kuwa sio sawa, pengine sio sawa. Daima chagua tahadhari.</p>',
    "lessons.fraud-prevention-training.relatedCourses.compliance.title":
      "Kuzingatia na Udhibiti",
    // Pricing Page (Updated)
    "pricing.compareFeatures.clientManagement": "Usimamizi wa Wateja",
    "pricing.compareFeatures.collectorManagement": "Usimamizi wa Wakusanyaji",
    "pricing.compareFeatures.branchSetup": "Usanidi wa Tawi na Taasisi",
    "pricing.compareFeatures.mobileCollection":
      "Kiolesura cha Ukusanyaji wa Simu",
    "pricing.compareFeatures.bookletSystem": "Mfumo wa Vijarida",
    "pricing.compareFeatures.transactionHistory": "Historia ya Miamala",
    "pricing.compareFeatures.reportsAnalytics": "Ripoti na Uchanganuzi",
    "pricing.compareFeatures.userAccessRoles":
      "Upatikanaji wa Watumiaji na Majukumu",
    "pricing.compareFeatures.smsNotifications": "Arifa za SMS za Hiari",
    "pricing.compareFeatures.dailySynchronization":
      "Usawazishaji wa Data wa Kila Siku",
    "pricing.compareFeatures.gpsTraceability":
      "Ufuatiliaji wa GPS kwa Wakusanyaji",
    "pricing.compareFeatures.missedCollectionAlerts":
      "Arifa za Ukusanyaji Uliosahaulika",
    "pricing.compareFeatures.clientRiskProfile": "Profaili ya Hatari ya Wateja",
    "pricing.compareFeatures.routeOptimization": "Uboreshaji wa Njia na Ratiba",
    "pricing.compareFeatures.clientSelfAccessPortal":
      "Portali ya Huduma ya Wateja (ya Baadaye)",
    "pricing.compareFeatures.localBusinessHours":
      "Msaada wa Saa za Biashara za Ndani",
    "pricing.compareFeatures.enterpriseSupport": "Msaada wa Mashirika 24/7",
  },
};

const LanguageContext = createContext(undefined);

/**
 * @param {{ children: React.ReactNode }} props
 */
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && ["en", "fr", "sw"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = (key, params = {}) => {
    let translation =
      translations[language][key] || translations.en[key] || key;
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach((param) => {
        translation = translation.replace(`{${param}}`, params[param]);
      });
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * @returns {LanguageContextType}
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
