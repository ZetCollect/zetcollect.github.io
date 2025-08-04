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
    "about.numbers.industryCovers": "Microfinance Covers",
    "about.geography.title": "Our Geography",
    "about.geography.description":
      "Headquartered in Kenya and operating internationally, our team drives digital transformation for businesses globally. We ensure on-site and virtual presence to deliver services to our major target markets in:",
    "about.geography.kenya": "Kenya",
    "about.geography.kenyaOffice":
      "Office Locations: Oracle Tower, Westland, Nairobi",
    "about.geography.cameroon": "Cameroon",
    "about.geography.cameroonOffice": "V. Office Locations: Akwa, Douala",
    "about.clients.title": "Our Clients",
    "about.clients.description":
      "We have collaborated with companies from 3 continents which are Africa, North America and Europe. Some of our prominent clients include:",
    "about.clients.logoAlt": "Client Logo {index}",
    "about.pricingPolicy.title": "Our Pricing Policy",
    "about.pricingPolicy.description":
      "Depending on a project and the nature of the delivered service, we offer the following pricing models:",
    "about.pricingPolicy.subscriptionBased": "Subscription-Based Model",
    "about.pricingPolicy.subscriptionBasedDesc":
      "Our Subscription-Based Model provides a flexible and cost-effective way to access ZetCollect's core features. Under this model, businesses pay a regular, recurring fee for access to the platform’s services. This model is typically used by our standard Business accounts. However, please note that while you’ll have access to the core functionalities, Subscription-Based users will not receive the latest features, but will have update on lastest security patch.",
    "about.pricingPolicy.payAsYouGo": "Pay As You Go",
    "about.pricingPolicy.payAsYouGoDesc":
      "Our pay-as-you-go model offers flexibility for clients to use ZetCollect and SCOS services as needed, paying only for the features and resources utilized. This approach is ideal for businesses seeking scalable solutions without long-term commitments.",
    "about.pricingPolicy.serviceContinuity": "Service Continuity Model",
    "about.pricingPolicy.serviceContinuityDesc":
      "The Service Continuity Model is designed for organizations that need uninterrupted access to the most current features, updates, and optimizations. Enterprise accounts typically opt for this model, ensuring they receive continuous updates to the platform, including the latest functionalities, security patches, and performance improvements. This model guarantees that your institution will always be equipped with the most up-to-date version of ZetCollect.",
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
    "upcoming.portal.title": "What does our Client Self Portal Provides ?",
    "upcoming.portal.desc": "Allow clients to view their collection history, verify if agent (collector) threshold has been reached and verify if he is authorised to collect.",
   

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
      "Powered By © {year} Evolv IZSoftwares Group Ltd. All rights reserved.",

    // WorkInProgressPage
    "wip.title": "Page Under Construction",
    "wip.description":
      "We're working hard to bring this page to life. Check back soon for updates!",
    "wip.backToHome": "Go back to Home",

    // CustomerSupportPage
    "support.title": "Customer support",
    "support.subtitle": "Features Specific Support",
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
      "Our SaaS platform brings fresh updates every week, neatly summarized each month. ZetCollect updates its website weekly and releases app updates every two weeks. ",
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
    "release.saas.systemVersionWeb5":
      "<strong>Version</strong>: 1.0.5-Beta - 25th July 2025",

    // FAQPage
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Here's the answers to all your burning questions about ZetCollect. You can also contact us directly or dive deeper into our knowledge base and API documentation.",
    
    "faq.questions.product_infoA": "What is ZetCollect  ?",
    "faq.answers.product_infoA": "It’s a cash collection management system for microfinance institutions and cooperatives. It helps you manage clients, agents(collectors) and branches while improving transparency, reporting, and operational control.",
    "faq.questions.product_infoB": "Is the system tailored for microfinance institutions in the CEMAC region ?",
    "faq.answers.product_infoB": "Yes, ZetCollect is built to align with CEMAC regulations, supporting agents working in rural or urban settings and integrating both digital and booklet-based collection.",
    "faq.questions.product_infoC": "What are the main benefits of using ZetCollect ?",
    "faq.answers.product_infoC": "You gain improved Cash Flow Tracking, Faster Reconciliation, Automated reporting, Agent Commission, and better compliance with regional financial standards.",
   
    "faq.questions.client_management": "How does ZetCollect's Client Management feature work?",
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
    "faq.questions.transaction_history":
      "How does ZetCollect's Transaction History feature work?",
    "faq.answers.transaction_history":
      "Complete audit trail of all collection activities and payments, providing a detailed record for transparency and accountability.",
    "faq.questions.reports_analytics":
      "What does the Reports & Analytics feature offer?",
    "faq.answers.reports_analytics":
      "Real-time dashboards and comprehensive reporting for data-driven decisions, enabling insights into collection performance and trends.",
    "faq.questions.user_access":
      "How does User Access & Roles ensure security?",
    "faq.answers.user_access":
      "Role-based permissions ensuring secure access to sensitive information, protecting data integrity across the platform.",
    "faq.questions.sms_notifications":
      "What is the functionality of SMS Notifications?",
    "faq.answers.sms_notifications":
      "Automated reminders and confirmations via SMS for better communication, keeping clients and collectors informed.",
    "faq.questions.daily_sync":
      "How does Daily Synchronization work in ZetCollect?",
    "faq.answers.daily_sync":
      "Seamless data sync between mobile devices and central database, ensuring data consistency and availability.",
    "faq.questions.gps_traceability":
      "What is GPS Traceability, and how will it benefit collectors?",
    "faq.answers.gps_traceability":
      "Real-time location tracking for enhanced security and route optimization, improving collector efficiency and safety.",
    "faq.questions.missed_alerts": "What are Missed Collection Alerts?",
    "faq.answers.missed_alerts":
      "Automated notifications for missed collections and follow-up reminders, ensuring timely follow-ups and accountability.",
    "faq.questions.risk_profile":
      "How does the Client Risk Profile & Rating system work?",
    "faq.answers.risk_profile":
      "AI-powered risk assessment and client rating system for better decision making, identifying potential risks proactively.",
    "faq.questions.route_optimization":
      "What is Route & Schedule Optimization?",
    "faq.answers.route_optimization":
      "Smart routing algorithms to optimize collector schedules and maximize efficiency, reducing time and costs.",
    "faq.questions.self_access_portal":
      "What is the Client Self-Access Portal?",
    "faq.answers.self_access_portal":
      "Allows clients to view their collection history and make payments independently, enhancing convenience and transparency.",
    "faq.questions.currency_system":
      "How will the New Currency System (CDF) be implemented?",
    "faq.answers.currency_system":
      "Seamless integration of Congolese Franc (CDF) for all transactions and financial reporting, ensuring compliance and ease of use.",

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
    "training.courses.security.title": "ZetCollect Security",
    // Pricing Page (Updated)
    "pricing.section1.title": "Competitive pricing for faster growth",
    "pricing.section1.description":
      "Flexible pricing & payment plans to suit businesses of all sizes.",
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
    "pricing.compareFeatures.dailySynchronization":
      "Daily Data Synchronization",
    "pricing.compareFeatures.passwordPolicy": "Password Policy",
    "pricing.compareFeatures.databaseHosting": "Database Hosting",
    "pricing.compareFeatures.gpsTraceability": "GPS Tracking for Agents",
    "pricing.compareFeatures.missedCollectionAlerts":
      "Missed Collection Alerts",
    "pricing.compareFeatures.clientRiskProfile": "Client Risk Profiling",
    "pricing.compareFeatures.routeOptimization":
      "Route and Schedule Optimization",
    "pricing.compareFeatures.clientSelfAccessPortal":
      "Client Self-Service Portal",
    "pricing.compareFeatures.localBusinessHours":
      "Local Business Hours Support",
    "pricing.compareFeatures.enterpriseSupport": "24/7 Enterprise Support",
    // OnboardingCoursePage Component
    "onboarding.title": "Courses",
    "onboarding.allCourses": "All Courses",
    "onboarding.productKnowledge": "ZetCollect Product Knowledge",
    "onboarding.onboardingAndIssueResolution":
      "Onboarding and Issue Resolution",
    "onboarding.security": "ZetCollect Security",
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
    "courses.security.title": "ZetCollect Security",
    "courses.security.lesson.secure-transaction-protocols.title":
      "Introduction to ZetCollect Security",
    "courses.security.lesson.secure-transaction-protocols.description":
      "ZetCollect prioritizes the security of your financial transactions with robust measures designed to protect your data and ensure trust....",
    // ProductKnowledgeCoursePage Component
    "productKnowledge.title": "Courses",
    "productKnowledge.allCourses": "All Courses",
    "productKnowledge.productKnowledge": "ZetCollect Product Knowledge",
    "productKnowledge.onboardingAndIssueResolution":
      "Onboarding and Issue Resolution",
    "productKnowledge.security": "ZetCollect Security",
    "productKnowledge.filter.all": "All Lessons",
    "productKnowledge.filter.completed": "Completed",
    "productKnowledge.filter.inProgress": "In Progress",
    "productKnowledge.noLessons":
      "No lessons found for this category or filter.",

    // SecurityCoursePage Component
    "security.title": "Courses",
    "security.description":
      "Learn how to protect your data and systems with ZetCollect's comprehensive security courses.",
    "security.allCourses": "All Courses",
    "security.productKnowledge": "ZetCollect Product Knowledge",
    "security.onboardingAndIssueResolution": "Onboarding and Issue Resolution",
    "security.security": "ZetCollect Security",
    "security.filter.all": "All Lessons",
    "security.filter.completed": "Completed",
    "security.filter.inProgress": "In Progress",
    "security.noLessons": "No lessons found for this category or filter.",

    // CourseLessonPage Component
    "courseLesson.title": "{lessonTitle}",
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
    "lessons.protecting-accounts.relatedCourses.product-knowledge.title":
      "ZetCollect Product Knowledge",

    "lessons.adding-business-kyc3.title":
      "Adding a Business to a KYC Level 3 Account",
    "lessons.adding-business-kyc3.category": "Onboarding and Issue Resolution",
    "lessons.adding-business-kyc3.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Understanding KYC Level 3 for Businesses</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">KYC Level 3 accounts offer enhanced transaction limits and features for businesses. This course outlines the requirements and the step-by-step process for upgrading your business account.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Required Documents:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Business registration certificate.</li><li>Tax identification number (TIN).</li><li>Proof of business address.</li><li>Identification for all directors/partners.</li><li>Bank account statement for the business.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Application Process:</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Log in to your ZetCollect business account.</li><li>Navigate to the \'Upgrade Account\' section.</li><li>Select \'KYC Level 3 for Businesses\'.</li><li>Upload all required documents.</li><li>Submit your application for review.</li></ol><p class="text-lg text-gray-600 italic mb-6">Processing time may vary. You will be notified via email upon approval.</p>',
    "lessons.adding-business-kyc3.relatedCourses.onboarding.title":
      "Onboarding and Issue Resolution",
    "lessons.adding-business-kyc3.relatedCourses.product-knowledge.title":
      "ZetCollect Product Knowledge",

    "lessons.mobile-app-basics.title": "ZetCollect Mobile App Basics",
    "lessons.mobile-app-basics.category": "ZetCollect Product Knowledge",
    "lessons.mobile-app-basics.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Getting Started with the ZetCollect App</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">This lesson covers the fundamental features and functionalities of the ZetCollect mobile application, designed for seamless financial management on the go.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Core Features:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Client Management.</li><li>Mobile Collection.</li><li>Booklet System.</li><li>Report and Analytics.</li></ul><p class="text-lg text-gray-600 italic mb-6">Regular updates bring new features and improvements.</p>',
    "lessons.mobile-app-basics.relatedCourses.product-knowledge.title":
      "ZetCollect Product Knowledge",

    "lessons.zetcollect-security.title": "ZetCollect Security Overview",
    "lessons.zetcollect-security.category": "ZetCollect Security",
    "lessons.zetcollect-security.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Introduction to ZetCollect Security</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">ZetCollect prioritizes the security of your financial transactions with robust measures designed to protect your data and ensure trust. This lesson explores the key security features available to all users.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Key Security Features:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>End-to-end encryption for all transactions.</li><li>Real-time fraud detection and alerts.</li><li>Secure user authentication protocols.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">How to Stay Secure:</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Regularly update your ZetCollect app.</li><li>Monitor your account activity frequently.</li><li>Contact support if you notice suspicious behavior.</li></ol><p class="text-lg text-gray-600 italic mb-6">For additional security tips, visit our support page.</p>',
    "lessons.zetcollect-security.relatedCourses.onboarding.title":
      "Onboarding and Issue Resolution",
    "lessons.zetcollect-security.relatedCourses.product-knowledge.title":
      "ZetCollect Product Knowledge",

    // First Section: ZetCollect Empowers Agents
    "combined.section1.title":
      "ZetCollect transforms payment collection for agents.",
    "combined.section1.description":
      "ZetCollect empowers agents with innovative tools to digitize cash collections and expand financial access across Africa.",
    "combined.section1.share": "Share the story",

    // Second Section: ZetCollect Capabilities
    "combined.section2.title": "What ZetCollect Offers",
    "combined.section2.description":
      "A comprehensive platform designed to streamline payment collections and empower your team.",
    "combined.section2.capability1.title": "Enhanced Client Support",
    "combined.section2.capability1.description":
      "Tools to manage client relationships and track payment histories effectively.",
    "combined.section2.capability2.title": "Performance Insights",
    "combined.section2.capability2.description":
      "Real-time data to monitor and optimize agent performance and operations.",
    "combined.section2.capability3.title": "Scalable Operations",
    "combined.section2.capability3.description":
      "Flexible solutions to support growth across multiple locations and teams.",

    // Third Section: About ZetCollect
    "combined.section3.impact.title": "Impact",
    "combined.section3.impact.stat1.value": "400%+",
    "combined.section3.impact.stat1.description":
      "agent network growth in 2 years",
    "combined.section3.impact.stat2.value": "~500",
    "combined.section3.impact.stat2.description": "new agent signups per week",
    "combined.section3.impact.stat3.value": "~5min",
    "combined.section3.impact.stat3.description":
      "average transaction processing time",
    "combined.section3.about.title": "About ZetCollect",
    "combined.section3.about.description":
      "ZetCollect, a pioneering fintech platform based in Nairobi, Kenya, launched in 2022 to transform payment collection and financial inclusion across Africa. Founded by visionary tech entrepreneurs, ZetCollect provides innovative tools to empower agents and businesses, serving over 10,000 agents and processing millions in transactions annually.",
    "combined.section3.table.header.feature": "FEATURE",
    "combined.section3.table.header.region": "REGION",
    "combined.section3.table.header.industry": "INDUSTRY",
    "combined.section3.table.row1.area": "Payment Processing",
    "combined.section3.table.row1.feature":
      "Fast and reliable transaction handling",
    "combined.section3.table.row1.region": "Africa",
    "combined.section3.table.row1.industry": "Finance",

    // Section: The Challenge for ZetCollect
    "combined.section4.title": "The Challenge for ZetCollect",
    "combined.section4.description1":
      "ZetCollect needed to efficiently onboard hundreds of new agents to meet rising demand.",
    "combined.section4.description2":
      "Since its launch in 2022, ZetCollect has been a leader in bridging the financial inclusion gap in Africa, equipping agents with tools to manage payments and support local economies. With a growing network of agents, the platform aims to serve more communities, but scaling requires overcoming onboarding hurdles.",
    "combined.section4.quote":
      "Our mission at ZetCollect is to bring financial services to every corner of Africa",
    "combined.section4.quote.author":
      "Beryl, Operations Director at ZetCollect",
    "combined.section4.description3":
      "Expanding the agent network involves training on complex payment systems and ensuring consistent service quality, especially in diverse and remote regions.",
    "combined.section4.description4":
      "ZetCollect addresses this with its intuitive platform, designed to support rapid growth and operational excellence.",

    // Section: The Solution
    "combined.section5.title": "The Solution",
    "combined.section5.description1":
      "ZetCollect’s platform provides a seamless solution for onboarding and scaling its agent network. Its intuitive tools enable agents to manage transactions efficiently, even in challenging environments.",
    "combined.section5.description2":
      "The system offers real-time support and insights, allowing agents to focus on delivering value to clients rather than administrative tasks. This adaptability ensures consistent performance as the network grows.",
    "combined.section5.description3":
      "With ZetCollect, businesses can expand their reach and enhance financial inclusion across Africa with confidence.",

    // Section: Impact Cards
    "combined.section6.card1.value": "4x",
    "combined.section6.card1.description": "as many agents empowered",
    "combined.section6.card2.value": "~5min",
    "combined.section6.card2.description": "average transaction time",

    // Section: Action Banner
    "combined.actionBanner.title": "Ready to Transform Your Business?",
    "combined.actionBanner.description":
      "We’re excited to help transform your collectionas a client through our software",
    "combined.actionBanner.ctaButton": "Get Started",

    // Section: Transformation
    "combined.section8.title": "Transformation",
    "combined.section8.description1":
      "ZetCollect has transformed payment collection across Africa. This innovative platform has streamlined transactions for thousands of users, reducing processing times by 60% and enhancing efficiency. By integrating advanced technology, ZetCollect continues to drive financial inclusion and operational excellence.",
    "combined.section8.description2":
      "“ZetCollect has revolutionized our approach to payments, empowering our teams with faster and more reliable solutions,” said a ZetCollect spokesperson. The platform’s improvements in data management are paving the way for sustained growth and innovation.",

    // Section: Additional Customer Success Stories
    "combined.section9.title": "Additional Customer Success Stories",
    "combined.section9.viewAll": "View all Success Stories",
    "combined.section9.story1.label": "Customer Story",
    "combined.section9.story1.title":
      "Young Microfinances expands with ZetCollect.",
    "combined.section9.story1.description":
      "See how ZetCollect supports Young Microfinances in scaling their operations.",
    "combined.section9.story1.link": "Learn more",

    // First Section: ACEP Cameroun - Fondation Grameen Crédit-Agricole Empowers Agents
    "microfinances.section1.title":
      "ZetCollect transforms payment collection for ACEP Cameroun - Fondation Grameen Crédit-Agricole.",
    "microfinances.section1.description":
      "ZetCollect empowers ACEP Cameroun - Fondation Grameen Crédit-Agricole with innovative tools to digitize loan disbursements and enhance financial inclusion across Africa.",
    "microfinances.section1.share": "Share the story",

    // Third Section: Impact and About ACEP Cameroun
    "microfinances.section2.impact.title": "Impact",
    "microfinances.section2.impact.stat1.value": "300%+",
    "microfinances.section2.impact.stat1.description":
      "loan disbursement growth in 2 years",
    "microfinances.section2.impact.stat2.value": "~400",
    "microfinances.section2.impact.stat2.description":
      "new borrower signups per month",
    "microfinances.section2.impact.stat3.value": "~10min",
    "microfinances.section2.impact.stat3.description":
      "average loan processing time",
    "microfinances.section2.about.title":
      "About ACEP Cameroun - Fondation Grameen Crédit-Agricole with ZetCollect",
    "microfinances.section2.about.description":
      "ACEP Cameroun - Fondation Grameen Crédit-Agricole, partnered with ZetCollect since 2024, leverages advanced payment solutions to expand financial services to underserved communities in Africa. Serving over 5,000 borrowers, this collaboration has revolutionized micro-lending efficiency.",

    // Section: The Challenge
    "microfinances.section3.title": "The Challenge",
    "microfinances.section3.description1":
      "ACEP Cameroun - Fondation Grameen Crédit-Agricole faced significant hurdles in scaling loan disbursements across remote and rural regions of Cameroon. The organization struggled with outdated manual processes that slowed down loan approvals and limited their reach to underserved populations. Limited infrastructure and connectivity issues further complicated the timely delivery of financial services, making it challenging to meet the growing demand from local farmers and small business owners.",
    "microfinances.section3.description2":
      "Additionally, the lack of real-time data and efficient tracking systems hindered the ability to monitor loan performance and ensure repayment consistency. This created a bottleneck that threatened the organization's mission to promote agricultural development and economic empowerment, prompting the need for a robust technological solution to overcome these operational barriers.",

    // Section: The Solution
    "microfinances.section4.title": "The Solution",
    "microfinances.section4.description1":
      "ZetCollect introduced a cutting-edge platform tailored to streamline loan processing and repayments for ACEP Cameroun - Fondation Grameen Crédit-Agricole. The solution offered a user-friendly interface that allowed staff to manage loan applications and disbursements efficiently, even in areas with limited internet access. By integrating mobile technology, ZetCollect enabled field agents to collect repayments directly from borrowers, reducing delays and improving cash flow.",
    "microfinances.section4.description2":
      "The platform also provided advanced analytics and reporting tools, empowering the organization to track loan portfolios in real-time and make data-driven decisions. This technological upgrade not only addressed connectivity challenges but also enhanced the overall efficiency of loan management, allowing ACEP Cameroun to scale its operations and serve more clients across diverse regions with confidence and reliability.",

    // Section: The Transformation
    "microfinances.section5.title": "The Transformation",
    "microfinances.section5.description1":
      "With ZetCollect, ACEP Cameroun - Fondation Grameen Crédit-Agricole significantly improved financial access for thousands of borrowers, particularly in rural Cameroon. The adoption of the platform led to a remarkable increase in loan disbursement rates, enabling smallholder farmers and entrepreneurs to invest in their businesses and improve their livelihoods. This transformation has strengthened the organization's reputation as a leader in microfinance innovation.",
    "microfinances.section5.description2":
      "Furthermore, the enhanced efficiency and transparency brought by ZetCollect have fostered greater trust among borrowers and stakeholders, resulting in higher repayment rates and sustained growth. By overcoming previous limitations, ACEP Cameroun is now better positioned to expand its outreach, support more communities, and contribute to the economic development of the region, marking a new era of success and impact.",

    // Static Text Translations
    "customerSuccessStories.section1.title":
      "ZetCollect delivers Customer Success.",
    "customerSuccessStories.section1.description":
      "With ZetCollect, leading businesses in Africa empower agents to do more with innovative payment solutions, leveraging all their transaction data to uncover deeper insights, streamline operations, and enhance customer financial success.",
    "customerSuccessStories.section2.title":
      "Additional Customer Success Stories 1",
    "customerSuccessStories.section2.viewAll": "View All",
    "customerSuccessStories.section2.label": "Customer Story",
    "customerSuccessStories.section2.link": "Read more",
    "customerSuccessStories.section3.title":
      "Additional Customer Success Stories 2",
    "customerSuccessStories.section3.viewAll": "View All",
    "customerSuccessStories.section3.label": "Customer Story",
    "customerSuccessStories.section3.link": "Read more",

    // First Section: ZetCollect Transforms Merchant Payments in Gabon
    "gabonmerchants.section1.title":
      "ZetCollect Transforms Merchant Payments in Gabon",
    "gabonmerchants.section1.description":
      "ZetCollect revolutionizes payment collections for merchants in Gabon, empowering them with efficient tools to enhance financial transactions across the region.",
    "gabonmerchants.section1.share": "Share the story",

    // Third Section: Impact and About Gabon Merchants
    "gabonmerchants.section2.impact.title": "Impact",
    "gabonmerchants.section2.impact.stat1.value": "30%",
    "gabonmerchants.section2.impact.stat1.description":
      "reduction in transaction costs",
    "gabonmerchants.section2.impact.stat2.value": "250",
    "gabonmerchants.section2.impact.stat2.description": "agents empowered",
    "gabonmerchants.section2.impact.stat3.value": "40%",
    "gabonmerchants.section2.impact.stat3.description":
      "increase in customer satisfaction",
    "gabonmerchants.section2.about.title": "About ZetCollect in Gabon",
    "gabonmerchants.section2.about.description":
      "ZetCollect, partnered with local merchants in Gabon since 2024, leverages its platform to optimize payment processes, serving over 1,200 merchants and boosting retail efficiency across urban and rural areas.",

    // Section: The Challenge
    "gabonmerchants.section3.title": "The Challenge",
    "gabonmerchants.section3.description1":
      "Gabonese merchants faced significant challenges with traditional payment systems, including high transaction costs and slow processing times that hindered their ability to serve customers effectively. Limited access to modern financial tools in both urban and rural areas compounded these issues, leading to lost sales and reduced competitiveness.",
    "gabonmerchants.section3.description2":
      "The lack of real-time payment tracking and reconciliation further complicated inventory management and cash flow, creating operational bottlenecks. This situation underscored the need for a scalable, technology-driven solution to modernize merchant payments and support economic growth in Gabon.",

    // Section: The Solution
    "gabonmerchants.section4.title": "The Solution",
    "gabonmerchants.section4.description1":
      "ZetCollect deployed a tailored platform to streamline merchant payments in Gabon, offering a mobile-based system that reduced transaction costs by 30% and enabled 250 agents to process payments efficiently. The solution included offline capabilities to address connectivity challenges in remote areas.",
    "gabonmerchants.section4.description2":
      "Advanced reporting tools were integrated to provide merchants with real-time insights into their transactions, improving inventory control and cash flow management. This technology empowered merchants to expand their customer base and enhance service delivery across Gabon’s diverse market landscape.",

    // Section: The Transformation
    "gabonmerchants.section5.title": "The Transformation",
    "gabonmerchants.section5.description1":
      "With ZetCollect, Gabonese merchants have transformed their payment operations, serving over 1,500 customers and reducing costs significantly as of 08:00 AM EAT on July 31, 2025. This has enabled small businesses to reinvest savings into growth, strengthening the local economy.",
    "gabonmerchants.section5.description2":
      "The platform’s success has built trust among merchants and customers, leading to a 40% increase in repeat business. ZetCollect’s innovative approach positions Gabon’s retail sector for sustained expansion and improved financial resilience.",

    // First Section: ZetCollect Boosts Agent Efficiency in Tchad
    "tchadagents.section1.title": "ZetCollect Boosts Agent Efficiency in Tchad",
    "tchadagents.section1.description":
      "ZetCollect enhances payment processing for agents in Tchad, empowering them with reliable tools to serve clients across the region.",
    "tchadagents.section1.share": "Share the story",

    // Third Section: Impact and About Tchad Agents
    "tchadagents.section2.impact.title": "Impact",
    "tchadagents.section2.impact.stat1.value": "40%",
    "tchadagents.section2.impact.stat1.description":
      "faster payment processing",
    "tchadagents.section2.impact.stat2.value": "350",
    "tchadagents.section2.impact.stat2.description": "clients served",
    "tchadagents.section2.impact.stat3.value": "25%",
    "tchadagents.section2.impact.stat3.description":
      "increase in agent productivity",
    "tchadagents.section2.about.title": "About ZetCollect in Tchad",
    "tchadagents.section2.about.description":
      "ZetCollect, partnered with agent networks in Tchad since 2024, optimizes payment operations, serving over 800 clients and improving financial services in urban and rural areas.",

    // Section: The Challenge
    "tchadagents.section3.title": "The Challenge",
    "tchadagents.section3.description1":
      "Agents in Tchad struggled with slow and unreliable payment processing systems, which limited their ability to serve clients effectively. Poor infrastructure and intermittent connectivity in remote areas compounded these issues, leading to delays and lost revenue opportunities.",
    "tchadagents.section3.description2":
      "The lack of efficient tracking and reporting tools also hindered agent performance monitoring, creating operational inefficiencies. This prompted the need for a robust solution to enhance payment reliability and support Tchad’s growing financial network.",

    // Section: The Solution
    "tchadagents.section4.title": "The Solution",
    "tchadagents.section4.description1":
      "ZetCollect introduced a mobile-based platform to boost agent efficiency in Tchad, enabling 40% faster payment processing and empowering 350 agents with offline capabilities to overcome connectivity issues.",
    "tchadagents.section4.description2":
      "The platform included real-time tracking and analytics, allowing agents to manage transactions and report performance effectively. This solution enhanced reliability and scalability, supporting Tchad’s financial operations across diverse regions.",

    // Section: The Transformation
    "tchadagents.section5.title": "The Transformation",
    "tchadagents.section5.description1":
      "With ZetCollect, agents in Tchad have improved payment processing for over 400 clients, achieving greater reliability as of 08:26 AM EAT on July 31, 2025. This has enabled agents to expand their reach and support local economic growth.",
    "tchadagents.section5.description2":
      "The increased efficiency has strengthened agent-client relationships, boosting trust and leading to a 25% rise in productivity. ZetCollect’s technology positions Tchad’s financial sector for sustained development and enhanced service delivery.",

    "customerStories.microfinances.title": "Microfinance Success in Nairobi",
    "customerStories.microfinances.description":
      "In Nairobi, ZetCollect partnered with a microfinance network to digitize loan repayments, reducing processing times by 45% and empowering 400 agents to serve rural clients efficiently. This transformation, effective as of 09:15 AM EAT on July 31, 2025, boosts financial access across Kenya.",
    "customerStories.cooperative.title":
      "ZetCollect transforms payment collection for agents.",
    "customerStories.cooperative.description":
      "ZetCollect empowers agents with innovative tools to digitize cash collections and expand financial access across Africa.",
    "customerStories.merchants-gabon.title":
      "ZetCollect Transforms Merchant Payments in Gabon",
    "customerStories.merchants-gabon.description":
      "In Gabon, ZetCollect streamlined payment collections for local merchants, reducing transaction costs by 30% and enabling 250 agents to enhance customer service. This effort, active by 09:15 AM EAT on July 31, 2025, strengthens Tanzania's retail sector.",
    "customerStories.agents-Tchad.title":
      "ZetCollect Boosts Agent Efficiency in Tchad",
    "customerStories.agents-Tchad.description":
      "In Tchad, ZetCollect empowered a network of agents to process payments 40% faster, serving 350 clients with improved reliability. This success, recorded by 09:15 AM EAT on July 31, 2025, enhances financial operations in Tchad.",
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
    "upcoming.portal.title": "Que propose notre portail client ?",
    "upcoming.portal.desc": "Permettre aux clients de consulter leur historique de collecte, de vérifier si le seuil de l'agent (collecteur) a été atteint et de vérifier s'il est autorisé à collecter.",
   

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
      "Propulsé par © {year} Evolv IZSoftwares Group Ltd. Tous droits réservés.",

    // WorkInProgressPage
    "wip.title": "Page en Construction",
    "wip.description":
      "Nous travaillons dur pour donner vie à cette page. Revenez bientôt pour des mises à jour !",
    "wip.backToHome": "Retourner à l'Accueil",

    // CustomerSupportPage
    "support.title": "Support client",
    "support.subtitle": "Fonctionnalités Support Spécifique",
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
      "<strong>Version</strong>: 1.0.1-Bêta - 25 avril 2025",
    "release.saas.systemVersionWeb2":
      "<strong>Version</strong>: 1.0.2-Bêta - 27 juin 2025",
    "release.saas.systemVersionWeb3":
      "<strong>Version</strong>: 1.0.3-Beta - 12th Juillet 2025",
    "release.saas.systemVersionWeb4":
      "<strong>Version</strong>: 1.0.4-Beta - 18th Juillet 2025",
    "release.saas.systemVersionWeb5":
      "<strong>Version</strong>: 1.0.5-Beta - 25th Juillet 2025",

    // FAQPage
    "faq.title": "Questions Fréquemment Posées",
    "faq.subtitle": "Voici les réponses à toutes vos questions brûlantes sur ZetCollect. Vous pouvez également nous contacter directement ou explorer plus en détail notre base de connaissances et la documentation de notre API.",
    "faq.questions.product_infoA": "Qu'est-ce que ZetCollect ?",
    "faq.answers.product_infoA": "C’est un système de gestion de collecte de fonds conçu pour les institutions de microfinance et les coopératives. Il vous aide à gérer les clients, les agents (collecteurs) et les agences, tout en améliorant la transparence, les rapports et le contrôle opérationnel.",
    "faq.questions.product_infoB": "ZetCollect est-il adapté aux institutions de microfinance de la région CEMAC ?",
    "faq.answers.product_infoB": "Oui, ZetCollect est conçu pour être conforme aux réglementations de la CEMAC, en soutenant les agents (collecteur) opérant en zones rurales ou urbaines et en intégrant à la fois la collecte numérique et celle basée sur les carnets.",
    "faq.questions.product_infoC": "Quels sont les principaux avantages de l’utilisation de ZetCollect ?",
    "faq.answers.product_infoC": "Vous bénéficiez d’un meilleur suivi des flux de trésorerie, d’un rapprochement plus rapide, de rapports automatisés, de commissions pour les agents, et d’une meilleure conformité aux normes financières régionales.",
   
    "faq.questions.client_management": "Comment fonctionne la fonctionnalité de Gestion des Clients de ZetCollect ?",
    "faq.answers.client_management":
      "La Gestion des Clients de ZetCollect vous permet d’ajouter, de mettre à jour et de gérer facilement toutes les informations de vos clients, y compris des champs personnalisés. Vous pouvez attribuer des livres de collecte spécifiques aux clients pour un suivi structuré et définir des attentes d’épargne quotidienne pour surveiller efficacement leurs progrès.",
    "faq.questions.collector_management":
      "Quelles fonctionnalités offre la Gestion des Collecteurs (Agents) ?",
    "faq.answers.collector_management":
      "La fonctionnalité de Gestion des Collecteurs (Agents) vous permet d’assigner des agents à des branches spécifiques, de leur attribuer des clients et des zones de collecte, et de suivre leurs activités quotidiennes en temps réel. Cela inclut le suivi des montants collectés et l’identification des collectes manquées.",
    "faq.questions.multi_branch":
      "ZetCollect peut-il supporter plusieurs branches et institutions ?",
    "faq.answers.multi_branch":
      "Oui, ZetCollect prend en charge une configuration multi-branches avec un contrôle d’accès basé sur les rôles, vous permettant de gérer efficacement différentes branches. Il offre également un contrôle centralisé depuis le siège pour un suivi complet des performances de toutes vos branches.",
    "faq.questions.mobile_collection":
      "Quelles sont les capacités de l’Interface de Collecte Mobile ?",
    "faq.answers.mobile_collection":
      "L’Interface de Collecte Mobile est une application Android conçue pour les collecteurs, permettant la saisie en temps réel des collectes directement depuis les lieux des clients. Elle fonctionne de manière fluide en ligne et hors ligne, synchronisant automatiquement toutes les données lorsqu’une connexion Internet est disponible, assurant une opération continue.",
    "faq.questions.booklet_system":
      "Comment le Système de Carnet (Booklet) prévient-il la fraude ?",
    "faq.answers.booklet_system":
      "Le Système de Carnet (Booklet) attribue un carnet de collecte numérique à chaque client. Les collecteurs marquent les transactions sur l’application en fonction des entrées dans ce carnet numérique. Ce processus crée un enregistrement transparent et vérifiable, réduisant considérablement le risque de fraude et de mauvaise déclaration.",
    "faq.questions.transaction_history":
      "Comment fonctionne la fonctionnalité Historique des Transactions de ZetCollect ?",
    "faq.answers.transaction_history":
      "Traçabilité complète de toutes les activités de collecte et paiements, offrant un enregistrement détaillé pour la transparence et la responsabilité.",
    "faq.questions.reports_analytics":
      "Que propose la fonctionnalité Rapports et Analytiques ?",
    "faq.answers.reports_analytics":
      "Tableaux de bord en temps réel et rapports détaillés pour des décisions basées sur les données, permettant des insights sur les performances de collecte et les tendances.",
    "faq.questions.user_access":
      "Comment l’Accès Utilisateur et les Rôles assurent-ils la sécurité ?",
    "faq.answers.user_access":
      "Permissions basées sur les rôles assurant un accès sécurisé aux informations sensibles, protégeant l’intégrité des données sur la plateforme.",
    "faq.questions.sms_notifications":
      "Quelle est la fonctionnalité des Notifications SMS ?",
    "faq.answers.sms_notifications":
      "Rappels et confirmations automatisés via SMS pour une meilleure communication, tenant les clients et collecteurs informés.",
    "faq.questions.daily_sync":
      "Comment fonctionne la Synchronisation Quotidienne dans ZetCollect ?",
    "faq.answers.daily_sync":
      "Synchronisation fluide des données entre les appareils mobiles et la base de données centrale, garantissant la cohérence et la disponibilité des données.",
    "faq.questions.gps_traceability":
      "Qu’est-ce que la Traçabilité GPS, et comment bénéficiera-t-elle aux collecteurs ?",
    "faq.answers.gps_traceability":
      "Suivi de localisation en temps réel pour une sécurité renforcée et une optimisation des itinéraires, améliorant l’efficacité et la sécurité des collecteurs.",
    "faq.questions.missed_alerts":
      "Quelles sont les Alertes de Collectes Manquées ?",
    "faq.answers.missed_alerts":
      "Notifications automatisées pour les collectes manquées et rappels de suivi, assurant un suivi opportun et la responsabilité.",
    "faq.questions.risk_profile":
      "Comment fonctionne le Système de Profil de Risque Client et d’Évaluation ?",
    "faq.answers.risk_profile":
      "Évaluation des risques alimentée par l’IA et système d’évaluation des clients pour une meilleure prise de décision, identifiant les risques potentiels de manière proactive.",
    "faq.questions.route_optimization":
      "Qu’est-ce que l’Optimisation des Itinéraires et des Horaires ?",
    "faq.answers.route_optimization":
      "Algorithmes de routage intelligents pour optimiser les horaires des collecteurs et maximiser l’efficacité, réduisant le temps et les coûts.",
    "faq.questions.self_access_portal":
      "Qu’est-ce que le Portail d’Accès Autonome des Clients ?",
    "faq.answers.self_access_portal":
      "Permet aux clients de consulter leur historique de collecte et d’effectuer des paiements de manière indépendante, améliorant la commodité et la transparence.",
    "faq.questions.currency_system":
      "Comment le Nouveau Système de Devise (CDF) sera-t-il mis en œuvre ?",
    "faq.answers.currency_system":
      "Intégration fluide du Franc Congolais (CDF) pour toutes les transactions et rapports financiers, assurant la conformité et la facilité d’utilisation.",

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
    "training.courses.security.title": "ZetCollect sécurité",
    //pricing Page
    "pricing.section1.title":
      "Des prix compétitifs pour une croissance plus rapide",
    "pricing.section1.description":
      "Des tarifs et des plans de paiement flexibles adaptés aux entreprises de toutes tailles.",
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
    "pricing.compareFeatures.databaseHosting":
      "Hébergement de bases de données",
    "pricing.compareFeatures.dailySynchronization":
      "Synchronisation quotidienne des données",
    "pricing.compareFeatures.passwordPolicy": "Politique de mot de passe",
    "pricing.compareFeatures.gpsTraceability": "Suivi GPS pour les agents",
    "pricing.compareFeatures.missedCollectionAlerts":
      "Alertes de collecte manquée",
    "pricing.compareFeatures.clientRiskProfile":
      "Profilage des risques des clients",
    "pricing.compareFeatures.routeOptimization":
      "Optimisation des itinéraires et des horaires",
    "pricing.compareFeatures.clientSelfAccessPortal":
      "Portail en libre-service pour les clients",
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
    "courses.onboarding.title": "Intégration et Résolution des Problèmes",
    "courses.onboarding.lesson.protecting-accounts.title":
      "Protection des Comptes avec l'Authentification à Deux Facteurs de ZetCollect",
    "courses.onboarding.lesson.protecting-accounts.description":
      "Dans ce cours, vous apprendrez tout ce qu'il faut savoir sur l'Authentification à Deux Facteurs (2FA) de ZetCollect. Vous serez équipé pour...",
    "courses.product-knowledge.title": "Connaissance des Produits ZetCollect",
    "courses.product-knowledge.lesson.mobile-app-basics.title":
      "Bases de l'Application Mobile ZetCollect",
    "courses.product-knowledge.lesson.mobile-app-basics.description":
      "Apprenez à naviguer dans l'application mobile ZetCollect, à effectuer des transactions de base et à résoudre les problèmes courants.",
    "courses.compliance.title": "Conformité et Réglementation",
    "courses.compliance.lesson.understanding-kyc-requirements.title":
      "Comprendre les Exigences KYC chez ZetCollect",
    "courses.compliance.lesson.understanding-kyc-requirements.description":
      "Bienvenue à la troisième partie de notre série ! Ici, vous apprendrez les bases de l'intégration des clients, de la vérification de leurs documents, et th..",
    "courses.compliance.lesson.fraud-prevention-training.title":
      "Meilleures Pratiques de Prévention de la Fraude",
    "courses.compliance.lesson.fraud-prevention-training.description":
      "Comprenez les schémas de fraude courants et apprenez les meilleures pratiques pour vous protéger, vous et vos clients, contre la fraude financière.",
    "courses.compliance.lesson.data-privacy-regulations.title":
      "Réglementations sur la Protection des Données et Meilleures Pratiques",
    "courses.compliance.lesson.data-privacy-regulations.description":
      "Un cours essentiel sur les lois de protection des données (par ex. GDPR, réglementations locales) et sur la manière de gérer les données clients de manière sécurisée et conforme.",
    "courses.security.title": "Sécurité ZetCollect",
    "courses.security.lesson.secure-transaction-protocols.title":
      "Protocoles de Transaction Sécurisée avec ZetCollect",
    "courses.security.lesson.secure-transaction-protocols.description":
      "Explorez les protocoles de transaction sécurisée utilisés par ZetCollect pour assurer un traitement des paiements sûr et fiable. Vous apprendrez à...",
    "courses.security.lesson.encryption-standards.title":
      "Normes de Chiffrement chez ZetCollect",
    "courses.security.lesson.encryption-standards.description":
      "Ce cours couvre les normes de chiffrement mises en œuvre par ZetCollect pour protéger les données sensibles. Vous serez formé à...",
    "courses.security.lesson.incident-response-training.title":
      "Formation à la Réponse aux Incidents",
    "courses.security.lesson.incident-response-training.description":
      "Apprenez à répondre efficacement aux incidents de sécurité avec les stratégies de réponse aux incidents de ZetCollect. Vous serez préparé à...",
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

    // SecurityCoursePage Component (French)
    "security.title": "Cours",
    "security.description":
      "Apprenez à protéger vos données et systèmes grâce aux cours de sécurité complets de ZetCollect.",
    "security.allCourses": "Tous les Cours",
    "security.securityAwareness": "Sensibilisation à la Sécurité",
    "security.securityTraining": "Formation en Sécurité",
    "security.filter.all": "Toutes les Leçons",
    "security.filter.completed": "Terminées",
    "security.filter.inProgress": "En Cours",
    "security.noLessons":
      "Aucune leçon trouvée pour cette catégorie ou ce filtre.",

    // lessonContent.json
    "lessons.protecting-accounts.title":
      "Protection des Comptes avec l'Authentification à Deux Facteurs de ZetCollect",
    "lessons.protecting-accounts.category":
      "Intégration et Résolution des Problèmes",
    "lessons.protecting-accounts.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Introduction à l\'Authentification à Deux Facteurs (2FA)</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">L\'authentification à deux facteurs (2FA) ajoute une couche supplémentaire de sécurité à votre compte ZetCollect. Elle exige une seconde forme de vérification en plus de votre mot de passe, réduisant considérablement le risque d\'accès non autorisé.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Pourquoi 2FA est Important ?</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Protège contre le vol de mots de passe.</li><li>Ajoute une couche essentielle de défense contre les attaques de phishing.</li><li>Garantit que seul vous pouvez accéder à votre compte, même si votre mot de passe est compromis.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Comment Activer 2FA</h2><p class="text-lg text-gray-700 mb-6 leading-relaxed">Suivez ces étapes simples pour activer 2FA sur votre compte ZetCollect :</p><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Connectez-vous à votre tableau de bord ZetCollect.</li><li>Accédez à \'Paramètres de Sécurité\'.</li><li>Sélectionnez \'Activer l\'Authentification à Deux Facteurs\'.</li><li>Choisissez votre méthode préférée (par exemple, application d\'authentification, code SMS).</li><li>Suivez les instructions à l\'écran pour compléter la configuration.</li></ol><p class="text-lg text-gray-600 italic mb-6">Pour plus de détails, consultez notre guide officiel de l\'utilisateur.</p>',
    "lessons.protecting-accounts.relatedCourses.onboarding.title":
      "Intégration et Résolution des Problèmes",
    "lessons.protecting-accounts.relatedCourses.product-knowledge.title":
      "Connaissance des Produits ZetCollect",

    "lessons.adding-business-kyc3.title":
      "Ajout d'une Entreprise à un Compte KYC Niveau 3",
    "lessons.adding-business-kyc3.category":
      "Intégration et Résolution des Problèmes",
    "lessons.adding-business-kyc3.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Comprendre le Niveau 3 KYC pour les Entreprises</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Les comptes KYC niveau 3 offrent des limites de transaction améliorées et des fonctionnalités supplémentaires pour les entreprises. Ce cours détaille les exigences et le processus étape par étape pour mettre à niveau votre compte d\'entreprise.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Documents Requis :</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Certificat d\'enregistrement de l\'entreprise.</li><li>Numéro d\'identification fiscale (TIN).</li><li>Preuve de l\'adresse de l\'entreprise.</li><li>Identification de tous les directeurs/partenaires.</li><li>Relevé de compte bancaire de l\'entreprise.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Processus de Demande :</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Connectez-vous à votre compte d\'entreprise ZetCollect.</li><li>Accédez à la section \'Mettre à Niveau le Compte\'.</li><li>Sélectionnez \'KYC Niveau 3 pour les Entreprises\'.</li><li>Chargez tous les documents requis.</li><li>Soumettez votre demande pour examen.</li></ol><p class="text-lg text-gray-600 italic mb-6">Le temps de traitement peut varier. Vous serez notifié par email après approbation.</p>',
    "lessons.adding-business-kyc3.relatedCourses.onboarding.title":
      "Intégration et Résolution des Problèmes",
    "lessons.adding-business-kyc3.relatedCourses.product-knowledge.title":
      "Connaissance des Produits ZetCollect",

    "lessons.mobile-app-basics.title":
      "Bases de l'Application Mobile ZetCollect",
    "lessons.mobile-app-basics.category":
      "Connaissance des Produits ZetCollect",
    "lessons.mobile-app-basics.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Démarrer avec l\'Application ZetCollect</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Cette leçon couvre les fonctionnalités et les fonctionnalités de base de l\'application mobile ZetCollect, conçue pour une gestion financière fluide en déplacement.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Fonctionnalités Principales :</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Gestion des Clients.</li><li>Collecte Mobile.</li><li>Système de Carnet.</li><li>Rapports et Analyse.</li></ul><p class="text-lg text-gray-600 italic mb-6">Les mises à jour régulières apportent de nouvelles fonctionnalités et améliorations.</p>',
    "lessons.mobile-app-basics.relatedCourses.product-knowledge.title":
      "Connaissance des Produits ZetCollect",

    "lessons.zetcollect-security.title": "Aperçu de la Sécurité ZetCollect",
    "lessons.zetcollect-security.category": "Sécurité ZetCollect",
    "lessons.zetcollect-security.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Introduction à la Sécurité ZetCollect</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">ZetCollect accorde la priorité à la sécurité de vos transactions financières avec des mesures robustes conçues pour protéger vos données et garantir la confiance. Cette leçon explore les principales fonctionnalités de sécurité disponibles pour tous les utilisateurs.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Fonctionnalités de Sécurité Clés :</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Chiffrement de bout en bout pour toutes les transactions.</li><li>Détection et alertes de fraude en temps réel.</li><li>Protocoles d\'authentification sécurisés pour les utilisateurs.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Comment Rester Sécurisé :</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Mettez régulièrement à jour votre application ZetCollect.</li><li>Surveillez fréquemment l\'activité de votre compte.</li><li>Contactez le support si vous remarquez un comportement suspect.</li></ol><p class="text-lg text-gray-600 italic mb-6">Pour des conseils de sécurité supplémentaires, visitez notre page de support.</p>',
    "lessons.zetcollect-security.relatedCourses.onboarding.title":
      "Intégration et Résolution des Problèmes",
    "lessons.zetcollect-security.relatedCourses.product-knowledge.title":
      "Connaissance des Produits ZetCollect",

    // First Section: ZetCollect Empowers Agents
    "combined.section1.title":
      "ZetCollect transforme la collecte de paiements pour les agents.",
    "combined.section1.description":
      "ZetCollect dote les agents d'outils innovants pour numériser les collectes en espèces et élargir l'accès financier à travers l'Afrique.",
    "combined.section1.share": "Partager l'histoire",

    // Second Section: ZetCollect Capabilities
    "combined.section2.title": "Ce que propose ZetCollect",
    "combined.section2.description":
      "Une plateforme complète conçue pour simplifier la collecte de paiements et renforcer votre équipe.",
    "combined.section2.capability1.title": "Support client amélioré",
    "combined.section2.capability1.description":
      "Outils pour gérer les relations avec les clients et suivre efficacement les historiques de paiement.",
    "combined.section2.capability2.title": "Perspectives de performance",
    "combined.section2.capability2.description":
      "Données en temps réel pour surveiller et optimiser les performances des agents et les opérations.",
    "combined.section2.capability3.title": "Opérations évolutives",
    "combined.section2.capability3.description":
      "Solutions flexibles pour soutenir la croissance à travers plusieurs emplacements et équipes.",

    // Third Section: About ZetCollect
    "combined.section3.impact.title": "Impact",
    "combined.section3.impact.stat1.value": "400%+",
    "combined.section3.impact.stat1.description":
      "croissance du réseau d'agents en 2 ans",
    "combined.section3.impact.stat2.value": "~500",
    "combined.section3.impact.stat2.description":
      "nouvelles inscriptions d'agents par semaine",
    "combined.section3.impact.stat3.value": "~5min",
    "combined.section3.impact.stat3.description":
      "temps moyen de traitement des transactions",
    "combined.section3.about.title": "À propos de ZetCollect",
    "combined.section3.about.description":
      "ZetCollect, une plateforme fintech pionnière basée à Nairobi, Kenya, lancée en 2022 pour transformer la collecte de paiements et l'inclusion financière en Afrique. Fondée par des entrepreneurs technologiques visionnaires, ZetCollect fournit des outils innovants pour autonomiser les agents et les entreprises, servant plus de 10 000 agents et traitant des millions de transactions chaque année.",
    "combined.section3.table.header.feature": "FONCTIONNALITE",
    "combined.section3.table.header.region": "RÉGION",
    "combined.section3.table.header.industry": "INDUSTRIE",
    "combined.section3.table.row1.feature":
      "Gestion rapide et fiable des transactions",
    "combined.section3.table.row1.region": "Afrique",
    "combined.section3.table.row1.industry": "Finance",

    // Section: The Challenge for ZetCollect
    "combined.section4.title": "Le défi pour ZetCollect",
    "combined.section4.description1":
      "ZetCollect devait intégrer efficacement des centaines de nouveaux agents pour répondre à la demande croissante.",
    "combined.section4.description2":
      "Depuis son lancement en 2022, ZetCollect est un leader dans la réduction de l'écart d'inclusion financière en Afrique, équipant les agents d'outils pour gérer les paiements et soutenir les économies locales. Avec un réseau d'agents en expansion, la plateforme vise à servir plus de communautés, mais la mise à l'échelle nécessite de surmonter des obstacles d'intégration.",
    "combined.section4.quote":
      "Notre mission chez ZetCollect est d'apporter des services financiers à chaque coin de l'Afrique",
    "combined.section4.quote.author":
      "Beryl, Directrice des Opérations chez ZetCollect",
    "combined.section4.description3":
      "L'expansion du réseau d'agents implique une formation sur des systèmes de paiement complexes et la garantie d'une qualité de service constante, en particulier dans les régions diverses et éloignées.",
    "combined.section4.description4":
      "ZetCollect répond à cela avec sa plateforme intuitive, conçue pour soutenir une croissance rapide et une excellence opérationnelle.",

    // Section: The Solution
    "combined.section5.title": "La solution",
    "combined.section5.description1":
      "La plateforme de ZetCollect offre une solution fluide pour l'intégration et l'expansion de son réseau d'agents. Ses outils intuitifs permettent aux agents de gérer efficacement les transactions, même dans des environnements difficiles.",
    "combined.section5.description2":
      "Le système offre un support et des informations en temps réel, permettant aux agents de se concentrer sur la création de valeur pour les clients plutôt que sur les tâches administratives. Cette adaptabilité garantit des performances constantes à mesure que le réseau se développe.",
    "combined.section5.description3":
      "Avec ZetCollect, les entreprises peuvent élargir leur portée et améliorer l'inclusion financière en Afrique avec confiance.",

    // Section: Impact Cards
    "combined.section6.card1.value": "4x",
    "combined.section6.card1.description": "autant d'agents autonomisés",
    "combined.section6.card2.value": "~5min",
    "combined.section6.card2.description": "temps moyen de transaction",

    // Section: Action Banner
    "combined.actionBanner.title": "Prêt à transformer votre entreprise ?",
    "combined.actionBanner.description":
      "Nous sommes ravis de contribuer à la transformation de votre collectif en tant que client grâce à notre logiciel.",
    "combined.actionBanner.ctaButton": "Commemencer",

    // Section : Transformation
    "combined.section8.title": "Transformation",
    "combined.section8.description1":
      "ZetCollect a transformé la collecte de paiements à travers l'Afrique. Cette plateforme innovante a simplifié les transactions pour des milliers d'utilisateurs, réduisant les temps de traitement de 60 % et améliorant l'efficacité. En intégrant des technologies avancées, ZetCollect continue de promouvoir l'inclusion financière et l'excellence opérationnelle.",
    "combined.section8.description2":
      "« ZetCollect a révolutionné notre approche des paiements, permettant à nos équipes de bénéficier de solutions plus rapides et fiables », a déclaré un porte-parole de ZetCollect. Les améliorations de la plateforme en matière de gestion de données ouvrent la voie à une croissance et une innovation durables.",
    // Section: Additional Customer Success Stories
    "combined.section9.title":
      "Histoires de succès supplémentaires des clients",
    "combined.section9.viewAll": "Voir toutes les histoires de succès",
    "combined.section9.story1.label": "Histoire de client",
    "combined.section9.story1.title":
      "Young Microfinances se développe avec ZetCollect.",
    "combined.section9.story1.description":
      "Découvrez comment ZetCollect soutient Young Microfinances dans l'expansion de leurs opérations.",
    "combined.section9.story1.link": "En savoir plus",

    // First Section: ACEP Cameroun - Fondation Grameen Crédit-Agricole Empowers Agents
    "microfinances.section1.title":
      "ZetCollect transforme la collecte de paiements pour ACEP Cameroun - Fondation Grameen Crédit-Agricole.",
    "microfinances.section1.description":
      "ZetCollect dote ACEP Cameroun - Fondation Grameen Crédit-Agricole d'outils innovants pour numériser les décaissements de prêts et améliorer l'inclusion financière à travers l'Afrique.",
    "microfinances.section1.share": "Partager l'histoire",

    // Third Section: Impact and About ACEP Cameroun
    "microfinances.section2.impact.title": "Impact",
    "microfinances.section2.impact.stat1.value": "300%+",
    "microfinances.section2.impact.stat1.description":
      "croissance des décaissements de prêts en 2 ans",
    "microfinances.section2.impact.stat2.value": "~400",
    "microfinances.section2.impact.stat2.description":
      "nouvelles inscriptions d'emprunteurs par mois",
    "microfinances.section2.impact.stat3.value": "~10min",
    "microfinances.section2.impact.stat3.description":
      "temps moyen de traitement des prêts",
    "microfinances.section2.about.title":
      "À propos d'ACEP Cameroun - Fondation Grameen Crédit-Agricole avec ZetCollect",
    "microfinances.section2.about.description":
      "ACEP Cameroun - Fondation Grameen Crédit-Agricole, en partenariat avec ZetCollect depuis 2024, exploite des solutions de paiement avancées pour élargir les services financiers aux communautés mal desservies en Afrique. Servant plus de 5 000 emprunteurs, cette collaboration a révolutionné l'efficacité du microcrédit.",

    // Section: The Challenge
    "microfinances.section3.title": "Le défi",
    "microfinances.section3.description1":
      "ACEP Cameroun - Fondation Grameen Crédit-Agricole a rencontré des obstacles importants pour élargir les décaissements de prêts dans les régions reculées et rurales du Cameroun. L'organisation a lutté avec des processus manuels obsolètes qui ralentissaient les approbations de prêts et limitaient leur portée aux populations mal desservies. Les problèmes d'infrastructure et de connectivité ont encore compliqué la livraison en temps opportun des services financiers, rendant difficile la satisfaction de la demande croissante des agriculteurs locaux et des petits entrepreneurs.",
    "microfinances.section3.description2":
      "De plus, l'absence de données en temps réel et de systèmes de suivi efficaces a entravé la capacité à surveiller les performances des prêts et à assurer une cohérence dans les remboursements. Cela a créé un goulot d'étranglement qui menaçait la mission de l'organisation de promouvoir le développement agricole et l'autonomisation économique, nécessitant une solution technologique robuste pour surmonter ces barrières opérationnelles.",

    // Section: The Solution
    "microfinances.section4.title": "La solution",
    "microfinances.section4.description1":
      "ZetCollect a introduit une plateforme de pointe adaptée pour rationaliser le traitement des prêts et les remboursements pour ACEP Cameroun - Fondation Grameen Crédit-Agricole. La solution offrait une interface conviviale qui permettait au personnel de gérer les demandes de prêts et les décaissements efficacement, même dans les zones à accès Internet limité. En intégrant la technologie mobile, ZetCollect a permis aux agents de terrain de collecter les remboursements directement auprès des emprunteurs, réduisant les délais et améliorant les flux de trésorerie.",
    "microfinances.section4.description2":
      "La plateforme a également fourni des outils d'analyse et de reporting avancés, permettant à l'organisation de suivre les portefeuilles de prêts en temps réel et de prendre des décisions basées sur les données. Cette mise à niveau technologique a non seulement résolu les défis de connectivité, mais a également amélioré l'efficacité globale de la gestion des prêts, permettant à ACEP Cameroun d'élargir ses opérations et de servir plus de clients à travers diverses régions avec confiance et fiabilité.",

    // Section: The Transformation
    "microfinances.section5.title": "La transformation",
    "microfinances.section5.description1":
      "Avec ZetCollect, ACEP Cameroun - Fondation Grameen Crédit-Agricole a considérablement amélioré l'accès financier pour des milliers d'emprunteurs, en particulier dans le Cameroun rural. L'adoption de la plateforme a conduit à une augmentation remarquable des taux de décaissement des prêts, permettant aux petits agriculteurs et entrepreneurs d'investir dans leurs entreprises et d'améliorer leurs moyens de subsistance. Cette transformation a renforcé la réputation de l'organisation en tant que leader dans l'innovation en microfinance.",
    "microfinances.section5.description2":
      "De plus, l'efficacité et la transparence accrues apportées par ZetCollect ont favorisé une plus grande confiance parmi les emprunteurs et les parties prenantes, entraînant des taux de remboursement plus élevés et une croissance soutenue. En surmontant les limitations précédentes, ACEP Cameroun est désormais mieux positionné pour élargir sa portée, soutenir plus de communautés et contribuer au développement économique de la région, marquant une nouvelle ère de succès et d'impact.",

    // Static Text Translations
    "customerSuccessStories.section1.title":
      "ZetCollect assure le Succès des Clients.",
    "customerSuccessStories.section1.description":
      "Avec ZetCollect, les entreprises leaders en Afrique permettent aux agents de faire plus grâce à des solutions de paiement innovantes, exploitant toutes leurs données de transaction pour découvrir des insights approfondis, rationaliser les opérations et améliorer le succès financier des clients.",
    "customerSuccessStories.section2.title":
      "Histoires de Succès Clients Supplémentaires 1",
    "customerSuccessStories.section2.viewAll": "Voir Tout",
    "customerSuccessStories.section2.label": "Histoire Client",
    "customerSuccessStories.section2.link": "Lire la suite",
    "customerSuccessStories.section3.title":
      "Histoires de Succès Clients Supplémentaires 2",
    "customerSuccessStories.section3.viewAll": "Voir Tout",
    "customerSuccessStories.section3.label": "Histoire Client",
    "customerSuccessStories.section3.link": "Lire la suite",

    // First Section: ZetCollect Transforms Merchant Payments in Gabon
    "gabonmerchants.section1.title":
      "ZetCollect Transforme les Paiements des Commerçants au Gabon",
    "gabonmerchants.section1.description":
      "ZetCollect révolutionne la collecte des paiements pour les commerçants au Gabon, leur offrant des outils efficaces pour améliorer les transactions financières dans toute la région.",
    "gabonmerchants.section1.share": "Partagez l'histoire",

    // Third Section: Impact and About Gabon Merchants
    "gabonmerchants.section2.impact.title": "Impact",
    "gabonmerchants.section2.impact.stat1.value": "30%",
    "gabonmerchants.section2.impact.stat1.description":
      "réduction des coûts de transaction",
    "gabonmerchants.section2.impact.stat2.value": "250",
    "gabonmerchants.section2.impact.stat2.description": "agents habilités",
    "gabonmerchants.section2.impact.stat3.value": "40%",
    "gabonmerchants.section2.impact.stat3.description":
      "augmentation de la satisfaction des clients",
    "gabonmerchants.section2.about.title": "À Propos de ZetCollect au Gabon",
    "gabonmerchants.section2.about.description":
      "ZetCollect, en partenariat avec les commerçants locaux au Gabon depuis 2024, utilise sa plateforme pour optimiser les processus de paiement, servant plus de 1 200 commerçants et améliorant l'efficacité du commerce de détail dans les zones urbaines et rurales.",

    // Section: The Challenge
    "gabonmerchants.section3.title": "Le Défi",
    "gabonmerchants.section3.description1":
      "Les commerçants gabonais ont été confrontés à des défis majeurs avec les systèmes de paiement traditionnels, notamment des coûts de transaction élevés et des temps de traitement lents qui ont entravé leur capacité à servir efficacement les clients. L'accès limité à des outils financiers modernes dans les zones urbaines et rurales a aggravé ces problèmes, entraînant des pertes de ventes et une réduction de la compétitivité.",
    "gabonmerchants.section3.description2":
      "L'absence de suivi en temps réel des paiements et de réconciliation a encore compliqué la gestion des stocks et la trésorerie, créant des goulets d'étranglement opérationnels. Cette situation a mis en lumière le besoin d'une solution technologique évolutive pour moderniser les paiements des commerçants et soutenir la croissance économique au Gabon.",

    // Section: The Solution
    "gabonmerchants.section4.title": "La Solution",
    "gabonmerchants.section4.description1":
      "ZetCollect a déployé une plateforme adaptée pour rationaliser les paiements des commerçants au Gabon, offrant un système mobile qui a réduit les coûts de transaction de 30 % et permis à 250 agents de traiter les paiements efficacement. La solution incluait des capacités hors ligne pour répondre aux défis de connectivité dans les zones reculées.",
    "gabonmerchants.section4.description2":
      "Des outils de reporting avancés ont été intégrés pour fournir aux commerçants des insights en temps réel sur leurs transactions, améliorant le contrôle des stocks et la gestion de la trésorerie. Cette technologie a permis aux commerçants d'élargir leur base de clients et d'améliorer la prestation de services à travers le paysage commercial diversifié du Gabon.",

    // Section: The Transformation
    "gabonmerchants.section5.title": "La Transformation",
    "gabonmerchants.section5.description1":
      "Avec ZetCollect, les commerçants gabonais ont transformé leurs opérations de paiement, servant plus de 1 500 clients et réduisant considérablement les coûts à partir de 08:50 AM EAT le 31 juillet 2025. Cela a permis aux petites entreprises de réinvestir leurs économies dans la croissance, renforçant l'économie locale.",
    "gabonmerchants.section5.description2":
      "Le succès de la plateforme a instauré la confiance entre les commerçants et les clients, entraînant une augmentation de 40 % des affaires répétées. L'approche innovante de ZetCollect positionne le secteur de la vente au détail du Gabon pour une expansion durable et une résilience financière améliorée.",

    // First Section: ZetCollect Boosts Agent Efficiency in Tchad
    "tchadagents.section1.title":
      "ZetCollect Améliore l'Efficacité des Agents au Tchad",
    "tchadagents.section1.description":
      "ZetCollect améliore le traitement des paiements pour les agents au Tchad, leur offrant des outils fiables pour servir les clients dans toute la région.",
    "tchadagents.section1.share": "Partagez l'histoire",

    // Third Section: Impact and About Tchad Agents
    "tchadagents.section2.impact.title": "Impact",
    "tchadagents.section2.impact.stat1.value": "40%",
    "tchadagents.section2.impact.stat1.description":
      "traitement des paiements plus rapide",
    "tchadagents.section2.impact.stat2.value": "350",
    "tchadagents.section2.impact.stat2.description": "clients servis",
    "tchadagents.section2.impact.stat3.value": "25%",
    "tchadagents.section2.impact.stat3.description":
      "augmentation de la productivité des agents",
    "tchadagents.section2.about.title": "À Propos de ZetCollect au Tchad",
    "tchadagents.section2.about.description":
      "ZetCollect, en partenariat avec les réseaux d'agents au Tchad depuis 2024, optimise les opérations de paiement, servant plus de 800 clients et améliorant les services financiers dans les zones urbaines et rurales.",

    // Section: The Challenge
    "tchadagents.section3.title": "Le Défi",
    "tchadagents.section3.description1":
      "Les agents au Tchad ont eu du mal avec des systèmes de traitement des paiements lents et peu fiables, ce qui a limité leur capacité à servir efficacement les clients. Une infrastructure médiocre et une connectivité intermittente dans les zones reculées ont aggravé ces problèmes, entraînant des retards et des pertes d'opportunités de revenus.",
    "tchadagents.section3.description2":
      "Le manque d'outils de suivi et de reporting efficaces a également entravé le suivi des performances des agents, créant des inefficacités opérationnelles. Cela a conduit à la nécessité d'une solution robuste pour améliorer la fiabilité des paiements et soutenir le réseau financier en croissance du Tchad.",

    // Section: The Solution
    "tchadagents.section4.title": "La Solution",
    "tchadagents.section4.description1":
      "ZetCollect a introduit une plateforme mobile pour améliorer l'efficacité des agents au Tchad, permettant un traitement des paiements 40 % plus rapide et dotant 350 agents de capacités hors ligne pour surmonter les problèmes de connectivité.",
    "tchadagents.section4.description2":
      "La plateforme a inclus un suivi en temps réel et des outils d'analyse, permettant aux agents de gérer les transactions et de rapporter leurs performances efficacement. Cette solution a renforcé la fiabilité et la scalabilité, soutenant les opérations financières du Tchad dans diverses régions.",

    // Section: The Transformation
    "tchadagents.section5.title": "La Transformation",
    "tchadagents.section5.description1":
      "Avec ZetCollect, les agents au Tchad ont amélioré le traitement des paiements pour plus de 400 clients, atteignant une plus grande fiabilité à partir de 08:47 AM EAT le 31 juillet 2025. Cela a permis aux agents d'élargir leur portée et de soutenir la croissance économique locale.",
    "tchadagents.section5.description2":
      "L'augmentation de l'efficacité a renforcé les relations entre agents et clients, augmentant la confiance et entraînant une hausse de 25 % de la productivité. La technologie de ZetCollect positionne le secteur financier du Tchad pour un développement durable et une amélioration de la prestation de services.",

    "customerStories.microfinances.title":
      "Succès de la Microfinance à Nairobi",
    "customerStories.microfinances.description":
      "À Nairobi, ZetCollect s'est associé à un réseau de microfinance pour numériser les remboursements de prêts, réduisant les temps de traitement de 45 % et permettant à 400 agents de servir efficacement les clients ruraux. Cette transformation, effective à partir de 09:15 AM EAT le 31 juillet 2025, renforce l'accès aux finances à travers le Kenya.",
    "customerStories.cooperative.title":
      "ZetCollect transforme la collecte de paiements pour les agents.",
    "customerStories.cooperative.description":
      "ZetCollect dote les agents d'outils innovants pour numériser les collectes d'argent liquide et élargir l'accès aux finances à travers l'Afrique.",
    "customerStories.merchants-gabon.title":
      "ZetCollect Transforme les Paiements des Commerçants au Gabon",
    "customerStories.merchants-gabon.description":
      "Au Gabon, ZetCollect a rationalisé la collecte des paiements pour les commerçants locaux, réduisant les coûts de transaction de 30 % et permettant à 250 agents d'améliorer le service client. Cet effort, actif à partir de 09:15 AM EAT le 31 juillet 2025, renforce le secteur de la vente au détail en Tanzanie.",
    "customerStories.agents-Tchad.title":
      "ZetCollect Améliore l'Efficacité des Agents au Tchad",
    "customerStories.agents-Tchad.description":
      "Au Tchad, ZetCollect a permis à un réseau d'agents de traiter les paiements 40 % plus rapidement, servant 350 clients avec une fiabilité accrue. Ce succès, enregistré à partir de 09:15 AM EAT le 31 juillet 2025, améliore les opérations financières au Tchad.",
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
    "upcoming.portal.title": "Je! Tovuti yetu ya Self Self hutoa nini?",
    "upcoming.portal.desc": "Ruhusu wateja kuona historia yao ya mkusanyiko, kuthibitisha ikiwa kiwango cha juu zaidi cha wakala (Collector) kimefikiwa na kuthibitisha ikiwa ameidhinishwa kukusanya.",
   
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
      "Imewashwa na © {year} Evolv IZSoftwares Group Ltd. Haki Zote Zimehifadhiwa.",

    // WorkInProgressPage
    "wip.title": "Ukurasa Unaendelea kujengwa",
    "wip.description":
      "Tunafanya kazi kwa bidii kuufanya ukurasa huu uwe tayari. Rudi hivi karibuni kwa masasisho!",
    "wip.backToHome": "Rudi Nyumbani",

    // CustomerSupportPage
    "support.title": "Msaada wa Wateja",
    "support.subtitle": "Vipengele vya Usaidizi Maalum",
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
      "<strong>Toleo la</strong>: 1.0.1-Beta - 25 Aprili 2025",
    "release.saas.systemVersionWeb2":
      "<strong>Toleo la</strong>: 1.0.2-Beta - 27 Juni 2025",
    "release.saas.systemVersionWeb3":
      "<strong>Version</strong>: 1.0.3-Beta - 12th Julai 2025",
    "release.saas.systemVersionWeb4":
      "<strong>Version</strong>: 1.0.4-Beta - 18th Julai 2025",
    "release.saas.systemVersionWeb5":
      "<strong>Version</strong>: 1.0.5-Beta - 25th Julai 2025",

    // FAQPage
    "faq.title": "Maswali Yanayoulizwa Mara kwa Mara",
    "faq.subtitle": "Hapa kuna majibu ya maswali yako yote ya moto kuhusu ZetCollect. Unaweza pia kutuwasiliana moja kwa moja au uchunguze zaidi katika msingi wetu wa maarifa na hati za API.",
 
    "faq.questions.product_infoA": "ZetCollect ni nini ?",
    "faq.answers.product_infoA": "Ni mfumo wa usimamizi wa ukusanyaji wa pesa ulioundwa kwa ajili ya taasisi za microfinance na vyama vya ushirika. Unakusaidia kusimamia wateja, mawakala (collectors), na matawi huku ukiboresha uwazi, utoaji wa ripoti, na udhibiti wa shughuli.",
    "faq.questions.product_infoB": "Je, ZetCollect umebuniwa mahsusi kwa taasisi za microfinance katika ukanda wa CEMAC?",
    "faq.answers.product_infoB": "Ndiyo, ZetCollect imeundwa kufuata kanuni za CEMAC, ikiwaunga mkono mawakala wanaofanya kazi vijijini au mijini, na ikijumuisha ukusanyaji wa kidijitali pamoja na ule wa kutumia vijitabu.",
    "faq.questions.product_infoC": "Ni faida gani kuu za kutumia ZetCollect ?",
    "faq.answers.product_infoC": "Unapata ufuatiliaji bora wa mtiririko wa pesa, upatanisho wa haraka, utoaji wa ripoti kiotomatiki, tume ya wakala, na ulinganifu bora na viwango vya kifedha vya kikanda.",
 
    "faq.questions.client_management":  "Je, kipengele cha Usimamizi wa Wateja cha ZetCollect kinavyofanya kazi vipi?",
    "faq.answers.client_management":
      "Usimamizi wa Wateja wa ZetCollect hukuruhusu kuongeza, kusasisha, na kusimamia habari yote ya wateja wako kwa urahisi, ikiwa ni pamoja na sehemu za desturi. Unaweza kugawa vitabu vya ukusanyaji mahususi kwa wateja kwa ufuatiliaji wa muundo na kuweka matarajio ya akiba ya kila siku ili kufuatilia maendeleo yao kwa ufanisi.",
    "faq.questions.collector_management":
      "Je, vipengele vya Usimamizi wa Wokovu (Wakala) vinatoa nini?",
    "faq.answers.collector_management":
      "Kipengele cha Usimamizi wa Wokovu (Wakala) kinakuruhusu kuwapa mawakala matawi mahususi, kugawa wateja na maeneo ya ukusanyaji kwao, na kufuatilia shughuli zao za kila siku kwa wakati halisi. Hii ni pamoja na kufuatilia kiasi kilichokusanywa na kutambua ukusanyaji uliokosa.",
    "faq.questions.multi_branch":
      "Je, ZetCollect inaweza kuunga mkono matawi na taasisi nyingi?",
    "faq.answers.multi_branch":
      "Ndiyo, ZetCollect inasaidia usanidi wa matawi mengi na udhibiti wa ufikiaji wa majukumu, hukuruhusu kusimamia matawi yako kwa ufanisi. Pia inatoa udhibiti wa kichwa wa ofisi kuu kwa ufuatiliaji wa kina wa utendaji katika matawi yako yote.",
    "faq.questions.mobile_collection":
      "Je, uwezo wa Interface ya Ukusanyaji wa Simu ni nini?",
    "faq.answers.mobile_collection":
      "Interface ya Ukusanyaji wa Simu ni programu ya Android iliyoundwa kwa wokusanyaji, inayowezesha ingizo la ukusanyaji wa wakati halisi moja kwa moja kutoka kwa maeneo ya wateja. Inafanya kazi vizuri kwa mtandao na bila mtandao, ikisawazisha data zote kiotomatiki wakati wa kuwa na muunganisho wa mtandao, na kuhakikisha uendeshaji endelevu.",
    "faq.questions.booklet_system":
      "Je, Mfumo wa Kitabu (Carnet) unazuia udanganyifu vipi?",
    "faq.answers.booklet_system":
      "Mfumo wa Kitabu (Carnet) unawapa kila mteja kitabu cha ukusanyaji cha dijitali. Wokusanyaji wanaweka alama za miamala kwenye programu kulingana na maingizo katika kitabu hiki cha dijitali. Mchakato huu unaunda rekodi ya uwazi na inayoweza kuthibitishwa, ikipunguza hatari ya udanganyifu na kuripoti vibaya kwa kiasi kikubwa.",
    "faq.questions.transaction_history":
      "Je, kipengele cha Historia ya Miadi ya ZetCollect kinavyofanya kazi vipi?",
    "faq.answers.transaction_history":
      "Njia kamili ya ukaguzi wa shughuli zote za ukusanyaji na malipo, ikitoa rekodi ya kina kwa uwazi na uwajibikaji.",
    "faq.questions.reports_analytics":
      "Je, kipengele cha Ripoti na Uchambuzi kinatoa nini?",
    "faq.answers.reports_analytics":
      "Dashibodi za wakati halisi na kuripoti kwa kina kwa maamuzi ya msingi wa data, zinazowezesha ufahamu wa utendaji wa ukusanyaji na mitindo.",
    "faq.questions.user_access":
      "Je, Ufikiaji wa Watumiaji na Majukumu huhakikisha usalama vipi?",
    "faq.answers.user_access":
      "Ruhusa za majukumu zinahakikisha ufikiaji salama wa taarifa nyeti, zinalinda uadilifu wa data katika jukwaa.",
    "faq.questions.sms_notifications":
      "Je, utendakazi wa Arifa za SMS ni nini?",
    "faq.answers.sms_notifications":
      "Kukumbusha na uthibitisho kiotomatiki kupitia SMS kwa mawasiliano bora, kuwaweka wateja na wokusanyaji wakiwa na taarifa.",
    "faq.questions.daily_sync":
      "Je, Usawazishaji wa Kila Siku wa ZetCollect unafanya kazi vipi?",
    "faq.answers.daily_sync":
      "Usawazishaji wa data bila matatizo kati ya vifaa vya simu na hifadhidata ya kati, huhakikisha uthabiti wa data na upatikanaji.",
    "faq.questions.gps_traceability":
      "Je, GPS Traceability ni nini, na itawafaidi wokusanyaji vipi?",
    "faq.answers.gps_traceability":
      "Ufuatiliaji wa eneo la wakati halisi kwa usalama ulioimarishwa na uboreshaji wa njia, kuboresha ufanisi na usalama wa wokusanyaji.",
    "faq.questions.missed_alerts": "Je, Arifa za Ukusanyaji wa Kukosa ni nini?",
    "faq.answers.missed_alerts":
      "Arifa za kiotomatiki za ukusanyaji uliokosa na vikumbusho vya ufuatiliaji, kuhakikisha ufuatiliaji wa wakati na uwajibikaji.",
    "faq.questions.risk_profile":
      "Je, Mfumo wa Wasifu wa Hatari wa Mteja na Ukadiriaji unavyofanya kazi vipi?",
    "faq.answers.risk_profile":
      "Tathmini ya hatari inayotegemea AI na mfumo wa ukadiriaji wa wateja kwa maamuzi bora, ikitambua hatari zinazowezekana mapema.",
    "faq.questions.route_optimization": "Je, Ubora wa Njia na Ratiba ni nini?",
    "faq.answers.route_optimization":
      "Algoriti za njia za akili za kuboresha ratiba za wokusanyaji na kuongeza ufanisi, kupunguza muda na gharama.",
    "faq.questions.self_access_portal":
      "Je, Portal ya Ufikiaji wa Kujitegemea wa Mteja ni nini?",
    "faq.answers.self_access_portal":
      "Inaruhusu wateja kuona historia yao ya ukusanyaji na kufanya malipo kwa kujitegemea, ikiimarisha urahisi na uwazi.",
    "faq.questions.currency_system":
      "Je, Mfumo wa Sarafu Mpya (CDF) utatekelezwa vipi?",
    "faq.answers.currency_system":
      "Uunganisho wa sarafu ya Kikongomani (CDF) kwa urahisi kwa miamala yote na kuripoti kifedha, kuhakikisha utiifu na urahisi wa matumizi.",

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
    "training.courses.security.title": "Usalama wa ZetCollect",

    //pricing page
    "pricing.section1.title": "Bei shindani kwa ukuaji wa haraka",
    "pricing.section1.description":
      "Mipango ya bei na malipo inayobadilika kuendana na biashara za ukubwa wote.",
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
    "pricing.compareFeatures.passwordPolicy": "Sera ya nenosiri",
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
    "onboarding.": "Maarifa ya Bidhaa za ZetCollect",
    "onboarding.onboardingAndIssueResolution":
      "Kuingiza na Kusuluhisha Masuala",
    "onboarding.filter.all": "Masomo Yote",
    "onboarding.filter.completed": "Yamekamilika",
    "onboarding.filter.inProgress": "Inaendelea",
    "onboarding.noLessons":
      "Hakuna masomo yaliyopatikana kwa kategoria hii au chujio.",
    // Courses Data (from coursesData.json)
    "courses.onboarding.title": "Uingizaji na Uthibitishaji wa Masuala",
    "courses.onboarding.lesson.protecting-accounts.title":
      "Kulinda Akaunti na Uthibitishaji wa Pili wa ZetCollect",
    "courses.onboarding.lesson.protecting-accounts.description":
      "Katika kozi hii, utajifunza kila kitu unachohitaji kujua kuhusu Uthibitishaji wa Pili (2FA) wa ZetCollect. Utawaandaliwa ku...",
    "courses.product-knowledge.title": "Maarifa ya Bidhaa ya ZetCollect",
    "courses.product-knowledge.lesson.mobile-app-basics.title":
      "Misingi ya Programu ya Simu ya ZetCollect",
    "courses.product-knowledge.lesson.mobile-app-basics.description":
      "Jifunze jinsi ya kusogeza programu ya ZetCollect ya simu, kufanya miamala ya msingi, na kusuluhisha matatizo ya kawaida.",
    "courses.compliance.title": "Ufuatiliaji na Kanuni",
    "courses.compliance.lesson.understanding-kyc-requirements.title":
      "Kuelewa Mahitaji ya KYC katika ZetCollect",
    "courses.compliance.lesson.understanding-kyc-requirements.description":
      "Karibu katika sehemu ya tatu ya mfululizo wetu! Hapa, utajifunza misingi ya kuleta wateja kwenye bodi, kuangalia hati zao, na th..",
    "courses.compliance.lesson.fraud-prevention-training.title":
      "Mbinu Bora za Kuzuia Udanganyifu",
    "courses.compliance.lesson.fraud-prevention-training.description":
      "Elewa miradi ya kawaida ya udanganyifu na ujifunze mbinu bora za kujilinda wewe na wateja wako kutokana na ulaghai wa kifedha.",
    "courses.compliance.lesson.data-privacy-regulations.title":
      "Kanuni za Faragha ya Data na Mbinu Bora",
    "courses.compliance.lesson.data-privacy-regulations.description":
      "Kozi muhimu kuhusu sheria za ulinzi wa data (k.m. GDPR, kanuni za ndani) na jinsi ya kushughulikia data ya wateja kwa usalama na kumudu.",
    "courses.security.title": "Usalama wa ZetCollect",
    "courses.security.lesson.secure-transaction-protocols.title":
      "Itifaki za Muamala Salama na ZetCollect",
    "courses.security.lesson.secure-transaction-protocols.description":
      "Chunguza itifaki za muamala salama zinazotumiwa na ZetCollect ili kuhakikisha usindikaji wa malipo salama na wa kuaminika. Utajifunza ku...",
    "courses.security.lesson.encryption-standards.title":
      "Viwango vya Usimbaji kwa ZetCollect",
    "courses.security.lesson.encryption-standards.description":
      "Kozi hii inashughulikia viwango vya usimbaji vinavyotekelezwa na ZetCollect ili kulinda data nyeti. Utafunzwa ku...",
    "courses.security.lesson.incident-response-training.title":
      "Mazoezi ya Kukabiliana na Matukio",
    "courses.security.lesson.incident-response-training.description":
      "Jifunze jinsi ya kukabiliana na matukio ya usalama kwa ufanisi kwa mikakati ya kukabiliana na matukio ya ZetCollect. Utaandaliwa ku...",
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

    // SecurityCoursePage Component (Swahili)
    "security.title": "Kozi",
    "security.description":
      "Jifunze jinsi ya kulinda data yako na mifumo kwa kutumia kozi za usalama za ZetCollect.",
    "security.allCourses": "Kozi Zote",
    "security.securityAwareness": "Uhamasishaji wa Usalama",
    "security.securityTraining": "Mafunzo ya Usalama",
    "security.filter.all": "Somo Zote",
    "security.filter.completed": "Zilizokamilika",
    "security.filter.inProgress": "Zinazoendelea",
    "security.noLessons":
      "Hakuna somo lililopatikana kwa jamii hii au kichujio hiki.",

    // CourseLessonPage Component
    "courseLesson.title": "{lessonTitle}",
    "courseLesson.notFound":
      "Somo halijapatikana. Tafadhali angalia URL au rudi kwenye ukurasa wa mafunzo ya msingi.",
    "courseLesson.backToCourse": "Rudi kwa {category}",
    "courseLesson.backToAllCourses": "Rudi kwa Kozi Zote",
    "courseLesson.relatedCourses": "Kozi Zilizounganishwa",

    // lessonContent.json
    "lessons.protecting-accounts.title":
      "Kulinda Akaunti na Uthibitishaji wa Miwili wa ZetCollect",
    "lessons.protecting-accounts.category": "Ufungaji wa Matatizo",
    "lessons.protecting-accounts.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Utangulizi wa 2FA</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Uthibitishaji wa Miwili (2FA) unaongeza safu ya ziada ya usalama kwenye akaunti yako ya ZetCollect. Unahitaji aina ya pili ya uthibitisho pamoja na nenosiri lako, na hivyo kupunguza hatari ya ufikiaji usioidhinishwa kwa kiasi kikubwa.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Kwa Nini 2FA Ni Muhimu?</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Hulinda dhidi ya wizi wa nenosiri.</li><li>Huongeza safu muhimu ya ulinzi dhidi ya mashambulizi ya wizi wa habari kupitia mtandao.</li><li>Hakikisha wewe peke yako ndiye unaweza kufikia akaunti yako, hata kama nenosiri lako limeibiwa.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Jinsi ya Kuwezesha 2FA</h2><p class="text-lg text-gray-700 mb-6 leading-relaxed">Fuata hatua hizi rahisi kuwezesha 2FA kwenye akaunti yako ya ZetCollect:</p><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Ingia kwenye dashibodi yako ya ZetCollect.</li><li>Sogea hadi \'Mipangilio ya Usalama\'.</li><li>Chagua \'Wezesha Uthibitishaji wa Miwili\'.</li><li>Chagua njia unayopenda (mfano, programu ya uthibitisho, nambari ya SMS).</li><li>Fuatilia maelekezo kwenye skrini kukamilisha usanidi.</li></ol><p class="text-lg text-gray-600 italic mb-6">For more details, refer to our official user guide.</p>',
    "lessons.protecting-accounts.relatedCourses.onboarding.title":
      "Ufungaji na wa Matatizo",
    "lessons.protecting-accounts.relatedCourses.product-knowledge.title":
      "Maarifa ya ZetCollect",

    "lessons.adding-business-kyc3.title":
      "Kuongeza Biashara kwenye Akaunti ya KYC Level 3",
    "lessons.adding-business-kyc3.category": "Ufungaji wa Matatizo",
    "lessons.adding-business-kyc3.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Kuelewa KYC Level 3 kwa Biashara</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Akaunti za KYC Level 3 hutoa mipaka ya juu ya miamala na vipengele vya ziada kwa biashara. Kozi hii inaainisha mahitaji na mchakato wa hatua kwa hatua wa kuboresha akaunti yako ya biashara.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Hati Zinazohitajika:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Cheti cha usajili wa biashara.</li><li>Namba ya utambulisho wa kodi (TIN).</li><li>Ushahidi wa anwani ya biashara.</li><li>Kitambulisho cha wakuu/washirika wote.</li><li>Hali ya akaunti ya benki ya biashara.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Mchakato wa Maombi:</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Ingia kwenye akaunti yako ya biashara ya ZetCollect.</li><li>Sogea hadi sehemu ya \'Boresha Akaunti\'.</li><li>Chagua \'KYC Level 3 kwa Biashara\'.</li><li>Pakia hati zote zinazohitajika.</li><li>Wasilisha ombi lako kwa mapitio.</li></ol><p class="text-lg text-gray-600 italic mb-6">Muda wa usindikaji unaweza kutofautiana. Utapopokea taarifa kupitia barua pepe baada ya kuidhinishwa.</p>',
    "lessons.adding-business-kyc3.relatedCourses.onboarding.title":
      "Ufungaji wa Matatizo",
    "lessons.adding-business-kyc3.relatedCourses.product-knowledge.title":
      "Maarifa ya ZetCollect",

    "lessons.mobile-app-basics.title": "Misingi ya ZetCollect Mobile App",
    "lessons.mobile-app-basics.category": "Maarifa ya ZetCollect",
    "lessons.mobile-app-basics.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Kuanza na ZetCollect App</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">Kozi hii inashughulikia vipengele vya msingi na utendakazi wa programu ya ZetCollect mobile, iliyoundwa kwa usimamizi wa kifedha usio na matatizo wakati wa kusafiri.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Vipengele vya Msingi:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Usimamizi wa Wateja.</li><li>Ukusanyaji wa Mobile.</li><li>Sistemu ya Kitabu.</li><li>Ripoti na Uchambuzi.</li></ul><p class="text-lg text-gray-600 italic mb-6">Updates za mara kwa mara huleta vipengele na maboresho mapya.</p>',
    "lessons.mobile-app-basics.relatedCourses.product-knowledge.title":
      "Maarifa ya ZetCollect",

    "lessons.zetcollect-security.title": "Muhtasari wa Usalama wa ZetCollect",
    "lessons.zetcollect-security.category": "Usalama wa ZetCollect",
    "lessons.zetcollect-security.content":
      '<h1 class="text-4xl font-bold text-gray-900 mb-6">Utangulizi wa Usalama wa ZetCollect</h1><p class="text-lg text-gray-700 mb-6 leading-relaxed">ZetCollect inaweka kipaumbele usalama wa miamala yako ya kifedha kwa hatua thabiti iliyoundwa kulinda data yako na kuhakikisha uaminifu. Kozi hii inachunguza vipengele vya msingi vya usalama vinavyopatikana kwa watumiaji wote.</p><h2 class="text-2xl font-bold text-gray-900 mb-4">Vipengele vya Usalama vya Msingi:</h2><ul class="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Usimbaji fiche wa mwisho kwa mwisho wa miamala yote.</li><li>Tambuzi la ulaghai wa muda halisi na arifa.</li><li>Itifaki za uthibitisho salama za watumiaji.</li></ul><h2 class="text-2xl font-bold text-gray-900 mb-4">Jinsi ya Kubaki Salama:</h2><ol class="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700"><li>Sasisha mara kwa mara programu yako ya ZetCollect.</li><li>Fuatilia shughuli za akaunti yako mara kwa mara.</li><li>Wasiliana na msaada ukiona tabia ya kutiliwa shaka.</li></ol><p class="text-lg text-gray-600 italic mb-6">For additional security tips, visit our support page.</p>',
    "lessons.zetcollect-security.relatedCourses.onboarding.title":
      "Ufungaji wa Matatizo",
    "lessons.zetcollect-security.relatedCourses.product-knowledge.title":
      "Maarifa ya ZetCollect",
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
    "pricing.compareFeatures.databaseHosting": "Kuhifadhi Hifadhidata",
    "pricing.compareFeatures.dailySynchronization":
      "Usawazishaji wa Data wa Kila Siku",
    "pricing.compareFeatures.gpsTraceability":
      "Ufuatiliaji wa GPS kwa Wakusanyaji",
    "pricing.compareFeatures.missedCollectionAlerts":
      "Arifa za Ukusanyaji Uliosahaulika",
    "pricing.compareFeatures.clientRiskProfile": "Profaili ya Hatari ya Wateja",
    "pricing.compareFeatures.routeOptimization": "Uboreshaji wa Njia na Ratiba",
    "pricing.compareFeatures.clientSelfAccessPortal":
      "Portali ya Huduma ya Wateja",
    "pricing.compareFeatures.localBusinessHours":
      "Msaada wa Saa za Biashara za Ndani",
    "pricing.compareFeatures.enterpriseSupport": "Msaada wa Mashirika 24/7",

    // First Section: ZetCollect Empowers Agents
    "combined.section1.title":
      "ZetCollect inabadilisha ukusanyaji wa malipo kwa wawakilishi.",
    "combined.section1.description":
      "ZetCollect inawapa wawakilishi zana za ubunifu za kugeuza dijitali ukusanyaji wa pesa taslimu na kupanua upatikanaji wa kifedha kote Afrika.",
    "combined.section1.share": "Shiriki hadithi",

    // Second Section: ZetCollect Capabilities
    "combined.section2.title": "ZetCollect Inatoa Nini",
    "combined.section2.description":
      "Jukwaa la kina lililoundwa ili kurahisisha ukusanyaji wa malipo na kuimarisha timu yako.",
    "combined.section2.capability1.title": "Msaada wa Wateja Ulioboreshwa",
    "combined.section2.capability1.description":
      "Zana za kudhibiti uhusiano na wateja na kufuatilia historia za malipo kwa ufanisi.",
    "combined.section2.capability2.title": "Maarifa ya Utendaji",
    "combined.section2.capability2.description":
      "Data ya wakati halisi ya kufuatilia na kuboresha utendaji wa wawakilishi na shughuli.",
    "combined.section2.capability3.title": "Shughuli Zilizoweza Kupanuka",
    "combined.section2.capability3.description":
      "Suluhisho zinazonyumbulika za kusaidia ukuaji katika maeneo na timu nyingi.",

    // Third Section: About ZetCollect
    "combined.section3.impact.title": "Athari",
    "combined.section3.impact.stat1.value": "400%+",
    "combined.section3.impact.stat1.description":
      "ukuu wa mtandao wa wawakilishi katika miaka 2",
    "combined.section3.impact.stat2.value": "~500",
    "combined.section3.impact.stat2.description":
      "usajili wa wawakilishi wapya kwa wiki",
    "combined.section3.impact.stat3.value": "~5min",
    "combined.section3.impact.stat3.description":
      "muda wa wastani wa uchukuzi wa muamala",
    "combined.section3.about.title": "Kuhusu ZetCollect",
    "combined.section3.about.description":
      "ZetCollect, jukwaa la fintech la upainia lenye makao yake Nairobi, Kenya, lililozinduliwa mwaka 2022 ili kubadilisha ukusanyaji wa malipo na ujumuishaji wa kifedha kote Afrika. Lililoanzishwa na wajasiriamali wa teknolojia wenye maono, ZetCollect hutoa zana za ubunifu za kuwezesha wawakilishi na Biashara, ikihudumia wawakilishi zaidi ya 10,000 na kuchakata mamilioni ya miamala kila mwaka.",
    "combined.section3.table.header.feature": "KIPENGELE",
    "combined.section3.table.header.region": "MKOA",
    "combined.section3.table.header.industry": "TAFRIJA",
    "combined.section3.table.row1.feature":
      "Uchukuzi wa muamala wa haraka na wa kuaminika",
    "combined.section3.table.row1.region": "Afrika",
    "combined.section3.table.row1.industry": "Fedha",

    // Section: The Challenge for ZetCollect
    "combined.section4.title": "Changamoto kwa ZetCollect",
    "combined.section4.description1":
      "ZetCollect ilihitaji kuwaingiza wawakilishi wapya mamia kwa ufanisi ili kukidhi mahitaji yanayopanda.",
    "combined.section4.description2":
      "Tangu ilipozinduliwa mwaka 2022, ZetCollect imekuwa kiongozi katika kupunguza pengo la ujumuishaji wa kifedha Afrika, ikiwezesha wawakilishi na zana za kudhibiti malipo na kusaidia uchumi wa ndani. Pamoja na mtandao wa wawakilishi unaokua, jukwaa linalenga kuhudumia jamii zaidi, lakini upanuzi unahitaji kushinda vizuizi vya kujiunga.",
    "combined.section4.quote":
      "Dhamira yetu katika ZetCollect ni kuleta huduma za kifedha kila kona ya Afrika",
    "combined.section4.quote.author":
      "Beryl, Mkurugenzi wa Operesheni katika ZetCollect",
    "combined.section4.description3":
      "Kupanua mtandao wa wawakilishi kunahusisha mafunzo juu ya mifumo tata ya malipo na kuhakikisha ubora wa huduma thabiti, hasa katika maeneo tofauti na ya mbali.",
    "combined.section4.description4":
      "ZetCollect inashughulikia hili kwa jukwaa lake la angavu, lililoundwa kusaidia ukuaji wa haraka na ubora wa uendeshaji.",

    // Section: The Solution
    "combined.section5.title": "Suluhisho",
    "combined.section5.description1":
      "Jukwaa la ZetCollect linatoa suluhisho la kutosha kwa kujiunga na kupanua mtandao wake wa wawakilishi. Zana zake za angavu zinawezesha wawakilishi kudhibiti miamala kwa ufanisi, hata katika mazingira magumu.",
    "combined.section5.description2":
      "Mfumo hutoa msaada wa wakati halisi na maarifa, kuruhusu wawakilishi kuzingatia kutoa thamani kwa wateja badala ya kazi za kiutawala. Upatikanaji huu unahakikisha utendaji thabiti kadiri mtandao unavyokua.",
    "combined.section5.description3":
      "Pamoja na ZetCollect, Biashara zinaweza kupanua upatikanaji wao na kuimarisha ujumuishaji wa kifedha kote Afrika kwa kujiamini.",

    // Section: Impact Cards
    "combined.section6.card1.value": "4x",
    "combined.section6.card1.description":
      "wawakilishi wengi zaidi waliowezeshwa",
    "combined.section6.card2.value": "~5min",
    "combined.section6.card2.description": "muda wa wastani wa muamala",

    // Section: Action Banner
    "combined.actionBanner.title": "Je, uko tayari kubadilisha Biashara yako?",
    "combined.actionBanner.description":
      "Wasiliana na timu yetu ili ugundue jinsi ZetCollect inavyoweza kurahisisha shughuli zako na kuendesha ukuaji wa maana.",
    "combined.actionBanner.ctaButton": "Anza Sasa",

    // Sehemu: Mabadiliko
    "combined.section8.title": "Mabadiliko",
    "combined.section8.description1":
      "Kufikia saa 12:57 PM EAT mnamo Julai 29, 2025, ZetCollect imebadilisha ukusanyaji wa malipo katika Afrika Mashariki. Jukwaa hili la ubunifu limerahisisha miamala kwa maelfu ya watumiaji, kupunguza muda wa usindikaji kwa 60% na kuongeza ufanisi. Kwa kuunganisha teknolojia ya hali ya juu, ZetCollect inaendelea kukuza ujumuishaji wa kifedha na ubora wa kiutendaji.",
    "combined.section8.description2":
      "“ZetCollect imebadilisha njia yetu ya kushughulikia malipo, ikiwawezesha timu zetu kupata suluhisho za haraka na za kuaminika,” alisema msemaji wa ZetCollect. Maboresho ya jukwaa katika usimamizi wa data yanaweka msingi wa ukuaji endelevu na uvumbuzi.",
    // Section: Additional Customer Success Stories
    "combined.section9.title": "Hadithi za Ziada za Mafanikio ya Wateja",
    "combined.section9.viewAll": "Tazama Hadithi Zote za Mafanikio",
    "combined.section9.story1.label": "Hadithi ya Mteja",
    "combined.section9.story1.title":
      "Young Microfinances inapopanua na ZetCollect.",
    "combined.section9.story1.description":
      "Angalia jinsi ZetCollect inavyosaidia Young Microfinances katika kupanua shughuli zao.",
    "combined.section9.story1.link": "Jifunze zaidi",

    // First Section: ACEP Cameroun - Fondation Grameen Crédit-Agricole Empowers Agents
    "microfinances.section1.title":
      "ZetCollect inabadilisha ukusanyaji wa malipo kwa ACEP Cameroun - Fondation Grameen Crédit-Agricole.",
    "microfinances.section1.description":
      "ZetCollect inawapa ACEP Cameroun - Fondation Grameen Crédit-Agricole zana za ubunifu za kugeuza dijitali umwagaji wa mikopo na kuimarisha ujumuishaji wa kifedha kote Afrika.",
    "microfinances.section1.share": "Shiriki hadithi",

    // Third Section: Impact and About ACEP Cameroun
    "microfinances.section2.impact.title": "Athari",
    "microfinances.section2.impact.stat1.value": "300%+",
    "microfinances.section2.impact.stat1.description":
      "ukuu wa umwagaji wa mikopo katika miaka 2",
    "microfinances.section2.impact.stat2.value": "~400",
    "microfinances.section2.impact.stat2.description":
      "usajili wa wakopaji wapya kwa mwezi",
    "microfinances.section2.impact.stat3.value": "~10min",
    "microfinances.section2.impact.stat3.description":
      "muda wa wastani wa uchukuzi wa mkopo",
    "microfinances.section2.about.title":
      "Kuhusu ACEP Cameroun - Fondation Grameen Crédit-Agricole na ZetCollect",
    "microfinances.section2.about.description":
      "ACEP Cameroun - Fondation Grameen Crédit-Agricole, ikiwa na ushirikiano na ZetCollect tangu 2024, inatumia suluhisho za malipo za hali ya juu kupanua huduma za kifedha kwa jamii zisizohudumiwa Afrika. Ikihudumia wakopaji zaidi ya 5,000, ushirikiano huu umebadilisha ufanisi wa mikopo midogo.",

    // Section: The Challenge
    "microfinances.section3.title": "Changamoto",
    "microfinances.section3.description1":
      "ACEP Cameroun - Fondation Grameen Crédit-Agricole ilikabiliana na vizuizi vikubwa katika kupanua umwagaji wa mikopo katika maeneo ya mbali na vijijini ya Kamerun. Shirika lilikabiliwa na michakato ya zamani ya mikono ambayo ilipunguza idhini za mikopo na kupunguza upatikanaji wao kwa idadi ya watu wasiohudumiwa. Masuala ya miundombinu na muunganisho yalizidisha ugumu wa kutoa huduma za kifedha kwa wakati, ikifanya iwe changamoto kukidhi mahitaji yanayokua kutoka kwa wakulima wa ndani na wamiliki wa Biashara ndogo.",
    "microfinances.section3.description2":
      "Zaidi ya hayo, ukosefu wa data ya wakati halisi na mifumo ya ufuatiliaji wa ufanisi ulizuia uwezo wa kufuatilia utendaji wa mikopo na kuhakikisha msimamo wa malipo. Hii ilizua kizuizi ambacho kilitishia dhamira ya shirika ya kukuza maendeleo ya kilimo na uwezeshaji wa kiuchumi, ikihitaji suluhisho la teknolojia la nguvu kushinda vizuizi hivi vya uendeshaji.",

    // Section: The Solution
    "microfinances.section4.title": "Suluhisho",
    "microfinances.section4.description1":
      "ZetCollect ilianzisha jukwaa la hali ya juu lililoboreshwa ili kurahisisha uchukuzi wa mikopo na malipo kwa ACEP Cameroun - Fondation Grameen Crédit-Agricole. Suluhisho hilo lilitoa kiolesura kinachofaa mtumiaji ambacho kiliwaruhusu wafanyakazi kudhibiti maombi ya mikopo na umwagaji kwa ufanisi, hata katika maeneo yenye upatikanaji mdogo wa mtandao. Kwa kuunganisha teknolojia ya simu, ZetCollect iliwezesha wawakilishi wa shambani kukusanya malipo moja kwa moja kutoka kwa wakopaji, ikipunguza ucheleweshaji na kuboresha mtiririko wa pesa.",
    "microfinances.section4.description2":
      "Jukwaa hilo pia lilitoa zana za uchanganuzi na ripoti za hali ya juu, zikiwezesha shirika kufuatilia portfolios za mikopo kwa wakati halisi na kufanya maamuzi yanayotegemea data. Uboreshaji huu wa teknolojia haukushughulikia tu changamoto za muunganisho bali pia uliimarisha ufanisi wa jumla wa usimamizi wa mikopo, ukiiruhusu ACEP Cameroun kupanua shughuli zake na kuhudumia wateja zaidi katika maeneo tofauti kwa kujiamini na kuaminika.",

    // Section: The Transformation
    "microfinances.section5.title": "Mabadiliko",
    "microfinances.section5.description1":
      "Pamoja na ZetCollect, ACEP Cameroun - Fondation Grameen Crédit-Agricole iliboresha kwa kiasi kikubwa upatikanaji wa kifedha kwa maelfu ya wakopaji, hasa katika Kamerun ya vijijini. Uchukuzi wa jukwaa ulisababisha ongezeko la kushangaza la viwango vya umwagaji wa mikopo, ukiwezesha wakulima wadogo na wajasiriamali kuwekeza katika Biashara zao na kuboresha maisha yao. Mabadiliko haya yameimarisha sifa ya shirika kama kiongozi katika ubunifu wa microfinance.",
    "microfinances.section5.description2":
      "Zaidi ya hayo, ufanisi ulioboreshwa na uwazi ulioletwa na ZetCollect umekuza imani kubwa zaidi miongoni mwa wakopaji na washikadau, ikisababisha viwango vya juu vya malipo na ukuaji endelevu. Kwa kushinda mapungufu ya awali, ACEP Cameroun sasa iko katika nafasi bora ya kupanua upatikanaji wake, kusaidia jamii zaidi, na kuchangia maendeleo ya kiuchumi ya mkoa, ikiashiria enzi mpya ya mafanikio na athari.",

    // Static Text Translations
    "customerSuccessStories.section1.title":
      "ZetCollect inaleta Mafanikio ya Wateja.",
    "customerSuccessStories.section1.description":
      "Kwa ZetCollect, biashara za kuongoza nchini Afrika zinawezesha mawakala kufanya zaidi kwa kutumia suluhisho za malipo za ubunifu, zikitumia data yao yote ya miamala kugundua maarifa ya kina, kurahisisha shughuli, na kuimarisha mafanikio ya kifedha ya wateja.",
    "customerSuccessStories.section2.title":
      "Hadithi za Ziada za Mafanikio ya Wateja 1",
    "customerSuccessStories.section2.viewAll": "Tazama Zote",
    "customerSuccessStories.section2.label": "Hadithi ya Mteja",
    "customerSuccessStories.section2.link": "Soma zaidi",
    "customerSuccessStories.section3.title":
      "Hadithi za Ziada za Mafanikio ya Wateja 2",
    "customerSuccessStories.section3.viewAll": "Tazama Zote",
    "customerSuccessStories.section3.label": "Hadithi ya Mteja",
    "customerSuccessStories.section3.link": "Soma zaidi",

    // First Section: ZetCollect Transforms Merchant Payments in Gabon
    "gabonmerchants.section1.title":
      "ZetCollect Inabadilisha Malipo ya Wafanyabiashara huko Gabon",
    "gabonmerchants.section1.description":
      "ZetCollect inabadilisha ukusanyaji wa malipo kwa wafanyabiashara huko Gabon, ikiwawezesha na zana za ufanisi ili kuboresha miamala ya kifedha katika eneo lote.",
    "gabonmerchants.section1.share": "Shiriki hadithi",

    // Third Section: Impact and About Gabon Merchants
    "gabonmerchants.section2.impact.title": "Athari",
    "gabonmerchants.section2.impact.stat1.value": "30%",
    "gabonmerchants.section2.impact.stat1.description":
      "kupunguza gharama za miamala",
    "gabonmerchants.section2.impact.stat2.value": "250",
    "gabonmerchants.section2.impact.stat2.description":
      "mawakala waliowekewa uwezo",
    "gabonmerchants.section2.impact.stat3.value": "40%",
    "gabonmerchants.section2.impact.stat3.description":
      "ongezeko la kuridhika kwa wateja",
    "gabonmerchants.section2.about.title": "Kuhusu ZetCollect huko Gabon",
    "gabonmerchants.section2.about.description":
      "ZetCollect, iliyoshirikiana na wafanyabiashara wa ndani huko Gabon tangu 2024, inatumia jukwaa lake kuboresha michakato ya malipo, ikihudumia zaidi ya wafanyabiashara 1,200 na kuimarisha ufanisi wa rejareja katika maeneo ya mijini na vijijini.",

    // Section: The Challenge
    "gabonmerchants.section3.title": "Changamoto",
    "gabonmerchants.section3.description1":
      "Wafanyabiashara wa Gabon walikabiliwa na changamoto kubwa na mifumo ya jadi ya malipo, ikiwa ni pamoja na gharama za juu za miamala na muda wa usindikaji wa polepole ambao ulizuia uwezo wao wa kuwahudumia wateja kwa ufanisi. Upatikanaji mdogo wa zana za kisasa za kifedha katika maeneo ya mijini na vijijini ulizidisha matatizo haya, na kusababisha upotevu wa mauzo na kupungua kwa ushindani.",
    "gabonmerchants.section3.description2":
      "Ukosefu wa ufuatiliaji wa malipo wa moja kwa moja na upatanisho ulikazia zaidi usimamizi wa hesabu na mtiririko wa fedha, na kuunda vizuizi vya kiutendaji. Hali hii iliangazia hitaji la suluhisho la teknolojia linaloweza kukua ili kuboresha malipo ya wafanyabiashara na kuunga mkono ukuaji wa kiuchumi huko Gabon.",

    // Section: The Solution
    "gabonmerchants.section4.title": "Suluhisho",
    "gabonmerchants.section4.description1":
      "ZetCollect ilianzisha jukwaa lililoundwa kwa ajili ya kurahisisha malipo ya wafanyabiashara huko Gabon, likitoa mfumo wa msingi wa simu ambao ulipunguza gharama za miamala kwa 30% na kuwawezesha mawakala 250 kusindika malipo kwa ufanisi. Suluhisho hili lilijumuisha uwezo wa kufanya kazi nje ya mtandao ili kukabiliana na changamoto za muunganisho katika maeneo ya mbali.",
    "gabonmerchants.section4.description2":
      "Zana za kuripoti za hali ya juu ziliunganishwa ili kuwapa wafanyabiashara maarifa ya moja kwa moja kuhusu miamala yao, kuboresha udhibiti wa hesabu na usimamizi wa mtiririko wa fedha. Teknolojia hii iliwawezesha wafanyabiashara kupanua msingi wao wa wateja na kuboresha utoaji wa huduma katika mazingira tofauti ya soko la Gabon.",

    // Section: The Transformation
    "gabonmerchants.section5.title": "Mabadiliko",
    "gabonmerchants.section5.description1":
      "Kwa ZetCollect, wafanyabiashara wa Gabon wamebadilisha shughuli za malipo yao, wakihudumia zaidi ya wateja 1,500 na kupunguza gharama kwa kiasi kikubwa kufikia 08:50 AM EAT mnamo Julai 31, 2025. Hii imewawezesha wafanyabiashara wadogo kuwekeza tena akiba yao katika ukuaji, na kuimarisha uchumi wa ndani.",
    "gabonmerchants.section5.description2":
      "Mafanikio ya jukwaa yameunda uaminifu kati ya wafanyabiashara na wateja, na kusababisha ongezeko la 40% la biashara ya mara kwa mara. Mbinu ya ubunifu ya ZetCollect inaweka sekta ya rejareja ya Gabon katika nafasi ya upanuzi endelevu na ustahimilivu bora wa kifedha.",

    // First Section: ZetCollect Boosts Agent Efficiency in Tchad
    "tchadagents.section1.title":
      "ZetCollect Inboea Ufanisi wa Mawakala huko Tchad",
    "tchadagents.section1.description":
      "ZetCollect inaimarisha usindikaji wa malipo kwa mawakala huko Tchad, ikiwawezesha na zana za kuaminika kuhudumia wateja katika eneo lote.",
    "tchadagents.section1.share": "Shiriki hadithi",

    // Third Section: Impact and About Tchad Agents
    "tchadagents.section2.impact.title": "Athari",
    "tchadagents.section2.impact.stat1.value": "40%",
    "tchadagents.section2.impact.stat1.description":
      "usindikaji wa malipo wa haraka",
    "tchadagents.section2.impact.stat2.value": "350",
    "tchadagents.section2.impact.stat2.description": "wateja waliotumikia",
    "tchadagents.section2.impact.stat3.value": "25%",
    "tchadagents.section2.impact.stat3.description":
      "ongezeko la tija ya mawakala",
    "tchadagents.section2.about.title": "Kuhusu ZetCollect huko Tchad",
    "tchadagents.section2.about.description":
      "ZetCollect, iliyoshirikiana na mitandao ya mawakala huko Tchad tangu 2024, inaboresha shughuli za malipo, ikihudumia zaidi ya wateja 800 na kuboresha huduma za kifedha katika maeneo ya mijini na vijijini.",

    // Section: The Challenge
    "tchadagents.section3.title": "Changamoto",
    "tchadagents.section3.description1":
      "Mawakala huko Tchad walikabiliwa na mifumo ya usindikaji wa malipo ya polepole na isiyo ya kuaminika, ambayo ilizuia uwezo wao wa kuwahudumia wateja kwa ufanisi. Miundombinu duni na muunganisho wa mara kwa mara katika maeneo ya mbali ulizidisha matatizo haya, na kusababisha ucheleweshaji na upotevu wa fursa za mapato.",
    "tchadagents.section3.description2":
      "Ukosefu wa zana za ufuatiliaji na kuripoti kwa ufanisi pia ulizuia ufuatiliaji wa utendaji wa mawakala, na kuunda uzembe wa kiutendaji. Hii ilihitaji suluhisho thabiti la kuimarisha kuaminika kwa malipo na kuunga mkono mtandao wa kifedha unaokua wa Tchad.",

    // Section: The Solution
    "tchadagents.section4.title": "Suluhisho",
    "tchadagents.section4.description1":
      "ZetCollect ilianzisha jukwaa la msingi wa simu kuimarisha ufanisi wa mawakala huko Tchad, ikiwezesha usindikaji wa malipo wa haraka kwa 40% na kuwapa mawakala 350 uwezo wa kufanya kazi nje ya mtandao ili kukabiliana na matatizo ya muunganisho.",
    "tchadagents.section4.description2":
      "Jukwaa hilo lilijumuisha ufuatiliaji wa moja kwa moja na uchanganuzi, kuruhusu mawakala kusimamia miamala na kuripoti utendaji wao kwa ufanisi. Suluhisho hili liliimarisha kuaminika na uwezo wa kuenea, lakiungwa mkono shughuli za kifedha za Tchad katika maeneo tofauti.",

    // Section: The Transformation
    "tchadagents.section5.title": "Mabadiliko",
    "tchadagents.section5.description1":
      "Kwa ZetCollect, mawakala huko Tchad wameboresha usindikaji wa malipo kwa zaidi ya wateja 400, wakipata kuaminika zaidi kufikia 08:47 AM EAT mnamo Julai 31, 2025. Hii imewapa uwezo wawakala kupanua wigo wao na kuunga mkono ukuaji wa kiuchumi wa ndani.",
    "tchadagents.section5.description2":
      "Ufanisi ulioongezeka umeimarisha uhusiano wa mawakala na wateja, kuongeza uaminifu na kusababisha ongezeko la 25% la tija. Teknolojia ya ZetCollect inaweka sekta ya kifedha ya Tchad katika nafasi ya maendeleo endelevu na uboreshaji wa utoaji wa huduma.",

    "customerStories.microfinances.title": "Mafanikio ya Mikopo ya Nairobi",
    "customerStories.microfinances.description":
      "Huko Nairobi, ZetCollect ilishirikiana na mtandao wa mikopo ya ndogo ili kubadilisha malipo ya mikopo kuwa ya kidijitali, ikipunguza muda wa usindikaji kwa 45% na kuwapa uwezo mawakala 400 kuhudumia wateja wa vijijini kwa ufanisi. Mabadiliko haya, yanayotumika kuanzia 09:15 AM EAT mnamo Julai 31, 2025, yanaongeza ufikiaji wa kifedha kote Kenya.",
    "customerStories.cooperative.title":
      "ZetCollect inabadilisha ukusanyaji wa malipo kwa mawakala.",
    "customerStories.cooperative.description":
      "ZetCollect inawawezesha mawakala kwa zana za ubunifu kubadilisha ukusanyaji wa pesa taslimu na kupanua ufikiaji wa kifedha kote Afrika.",
    "customerStories.merchants-gabon.title":
      "ZetCollect Inabadilisha Malipo ya Wafanyabiashara huko Gabon",
    "customerStories.merchants-gabon.description":
      "Huko Gabon, ZetCollect ilirahisisha ukusanyaji wa malipo kwa wafanyabiashara wa ndani, ikipunguza gharama za miamala kwa 30% na kuwapa uwezo mawakala 250 kuboresha huduma ya wateja. Juhudi hii, inayotumika kuanzia 09:15 AM EAT mnamo Julai 31, 2025, inaimarisha sekta ya rejareja ya Tanzania.",
    "customerStories.agents-Tchad.title":
      "ZetCollect Inaboeka Ufanisi wa Mawakala huko Tchad",
    "customerStories.agents-Tchad.description":
      "Huko Tchad, ZetCollect iliwapa uwezo mtandao wa mawakala kusindika malipo 40% kwa haraka, ukatumikia wateja 350 kwa kuaminika zaidi. Mafanikio haya, yaliyorekodiwa kuanzia 09:15 AM EAT mnamo Julai 31, 2025, yanaimarisha shughuli za kifedha huko Tchad.",
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
