import React, { createContext, useContext, useState, useEffect } from "react";
import ArticlesContext from "./ArticlesContext.json";
import CustomerStorycontext from "./CustomerStorycontext.json";
import EventsContext from "./EventsContext.json";
import CustomerSupportcontext from "./CustomerSupportcontext.json";
import Faqcontext from "./Faqcontext.json";
import TrainingandCerificationContext from "./TrainingandCerificationContext.json";

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
    ...ArticlesContext.en,
    ...CustomerStorycontext.en,
    ...EventsContext.en,
    ...CustomerSupportcontext.en,
    ...Faqcontext.en,
    ...TrainingandCerificationContext.en,
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
  "upcoming.subtitle": "Exciting features coming soon to enhance your collection experience",
  "upcoming.gps.title": "GPS Traceability",
  "upcoming.gps.desc": "Real-time location tracking for enhanced security and route optimization.",
  "upcoming.alerts.title": "Missed Collection Alerts",
  "upcoming.alerts.desc": "Automated notifications for missed collections and follow-up reminders.",
  "upcoming.risk.title": "Client Risk Profile & Rating",
  "upcoming.risk.desc": "AI-powered risk assessment and client rating system for better decision making.",
  "upcoming.route.title": "Route & Schedule Optimization",
  "upcoming.route.desc": "Smart routing algorithms to optimize collector schedules and maximize efficiency.",
  "upcoming.portal.title": "What does our Client Self Portal Provides ?",
  "upcoming.portal.desc": "Allow clients to view their collection history, verify if agent (collector) threshold has been reached and verify if he is authorised to collect.",
  "upcoming.currency.title": "New Currency System (CDF)",
  "upcoming.currency.desc": "Seamless integration of Congolese Franc (CDF) for all transactions and financial reporting.",
  "upcoming.mobile_money.title": "Mobile Money",
  "upcoming.mobile_money.desc": "ZetCollect adds support for Orange Money and MTN Mobile Money, enabling seamless transactions and secure payments via mobile devices.",
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

    //pricing
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
    "pricing.compareFeatures.smsNotifications": "SMS Notifications",
    "pricing.compareFeatures.smsNotifications.business": "On Demand",
    "pricing.compareFeatures.smsNotifications.enterprise": "On Demand",
    "pricing.compareFeatures.customDomain": "Custom Domain",
    "pricing.compareFeatures.customDomain.business": "Default",
    "pricing.compareFeatures.customDomain.enterprise": "Private Domain",
    "pricing.compareFeatures.customBranding": "Custom Branding",
    "pricing.compareFeatures.customBranding.business": "Default",
    "pricing.compareFeatures.customBranding.enterprise": "Personal Branding",
    "pricing.compareFeatures.storage": "Storage",
    "pricing.compareFeatures.storage.business": "5 GB of storage",
    "pricing.compareFeatures.storage.enterprise": "Unlimited Storage",
    "pricing.compareFeatures.support": "Support",
    "pricing.compareFeatures.support.business": "Local Business Hours",
    "pricing.compareFeatures.support.enterprise": "24/7 Enterprise Support",

    //testimonials
    "testimonial.1.quote":
      "ZetCollect has transformed our daily cash collection operations. The offline capability is crucial for our rural branches, and the fraud prevention features give us complete peace of mind.",
    "testimonial.1.author": "Jason Mwangi",
    "testimonial.1.title": "Operations Director, Kenya Microfinance",
    "testimonial.1.country": "Kenya",
    "testimonial.1.initials": "JM",
    "testimonial.2.quote":
      "The mobile interface of ZetCollect is a game-changer for our field agents. It’s intuitive and reliable, even in areas with poor connectivity.",
    "testimonial.2.author": "Marie Ndong",
    "testimonial.2.title": "Branch Manager, Gabon Savings Bank",
    "testimonial.2.country": "Gabon",
    "testimonial.2.initials": "MN",
    "testimonial.3.quote":
      "With ZetCollect, we’ve streamlined our collection process and reduced errors significantly. The analytics dashboard provides insights we never had before.",
    "testimonial.3.author": "Pauline Eto",
    "testimonial.3.title": "Finance Lead, Cameroon Credit Union",
    "testimonial.3.country": "Cameroon",
    "testimonial.3.initials": "PE",
    "testimonial.4.quote":
      "ZetCollect’s fraud prevention tools have protected our operations, and the customizable features allow us to tailor it to our needs.",
    "testimonial.4.author": "Samuel Ngu",
    "testimonial.4.title": "CEO, Cameroon Microfinance Co.",
    "testimonial.4.country": "Cameroon",
    "testimonial.4.initials": "SN",
    "testimonial.5.quote":
      "The real-time tracking in ZetCollect has improved our efficiency and accountability across multiple branches.",
    "testimonial.5.author": "Esther Mbi",
    "testimonial.5.title": "Operations Manager, Cameroon Rural Bank",
    "testimonial.5.country": "Cameroon",
    "testimonial.5.initials": "EM",
  },

  fr: {
    ...ArticlesContext.fr,
    ...CustomerStorycontext.fr,
    ...EventsContext.fr,
    ...CustomerSupportcontext.fr,
    ...Faqcontext.fr,
    ...TrainingandCerificationContext.fr,
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

  // Upcoming Features
 // Upcoming Features
  "upcoming.title": "Fonctionnalités à Venir",
  "upcoming.subtitle": "Des fonctionnalités excitantes à venir pour améliorer votre expérience de collecte",
  "upcoming.gps.title": "Traçabilité GPS",
  "upcoming.gps.desc": "Suivi de localisation en temps réel pour une sécurité renforcée et une optimisation des itinéraires.",
  "upcoming.alerts.title": "Alertes de Collectes Manquées",
  "upcoming.alerts.desc": "Notifications automatisées pour les collectes manquées et rappels de suivi.",
  "upcoming.risk.title": "Profil de Risque Client et Évaluation",
  "upcoming.risk.desc": "Évaluation des risques alimentée par l’IA et système d’évaluation des clients pour de meilleures décisions.",
  "upcoming.route.title": "Optimisation des Itinéraires et Horaires",
  "upcoming.route.desc": "Algorithmes de routage intelligents pour optimiser les horaires des collecteurs et maximiser l’efficacité.",
  "upcoming.portal.title": "Que Propose Notre Portail d’Accès Autonome des Clients ?",
  "upcoming.portal.desc": "Permet aux clients de consulter leur historique de collecte, de vérifier si le seuil de l’agent (collecteur) a été atteint et de confirmer s’il est autorisé à collecter.",
  "upcoming.currency.title": "Nouveau Système de Devise (CDF)",
  "upcoming.currency.desc": "Intégration fluide du Franc Congolais (CDF) pour toutes les transactions et rapports financiers.",
  "upcoming.mobile_money.title": "Argent Mobile",
  "upcoming.mobile_money.desc": "ZetCollect ajoute un soutien pour Orange Money et MTN Mobile Money, permettant des transactions fluides et des paiements sécurisés via des appareils mobiles.",
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

    //pricing Page
    "pricing.section1.title":
      "Tarification compétitive pour une croissance rapide",
    "pricing.section1.description":
      "Plans de tarification et de paiement flexibles adaptés aux entreprises de toutes tailles.",
    "pricing.section1.cta": "Commencer",
    "pricing.section2.title": "Frais flexibles adaptés à votre entreprise",
    "pricing.section2.business.title": "Entreprise",
    "pricing.section2.business.description":
      "Tarification standard pour les entreprises en croissance.",
    "pricing.section2.business.features.title": "Vous obtenez :",
    "pricing.section2.business.features.localBusinessHours":
      "Support pendant les heures ouvrables locales",
    "pricing.section2.business.cta": "Commencer",
    "pricing.section2.enterprise.title": "Entreprise Premium",
    "pricing.section2.enterprise.description":
      "Tarifs personnalisés avec support dédié et fonctionnalités avancées.",
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
    "pricing.compareFeatures.bookletSystem": "Système de livrets",
    "pricing.compareFeatures.transactionHistory": "Historique des transactions",
    "pricing.compareFeatures.reportsAnalytics": "Rapports et analyses",
    "pricing.compareFeatures.userAccessRoles":
      "Accès et rôles des utilisateurs",
    "pricing.compareFeatures.dailySynchronization":
      "Synchronisation quotidienne des données",
    "pricing.compareFeatures.passwordPolicy": "Politique de mot de passe",
    "pricing.compareFeatures.databaseHosting": "Hébergement de base de données",
    "pricing.compareFeatures.gpsTraceability": "Suivi GPS pour les agents",
    "pricing.compareFeatures.missedCollectionAlerts":
      "Alertes de collecte manquée",
    "pricing.compareFeatures.clientRiskProfile": "Profil de risque des clients",
    "pricing.compareFeatures.routeOptimization":
      "Optimisation des itinéraires et des horaires",
    "pricing.compareFeatures.clientSelfAccessPortal":
      "Portail d'auto-service pour les clients",
    "pricing.compareFeatures.localBusinessHours":
      "Support pendant les heures ouvrables locales",
    "pricing.compareFeatures.enterpriseSupport": "Support entreprise 24/7",
    "pricing.compareFeatures.smsNotifications": "Notifications SMS",
    "pricing.compareFeatures.smsNotifications.business": "Sur demande",
    "pricing.compareFeatures.smsNotifications.enterprise": "Sur demande",
    "pricing.compareFeatures.customDomain": "Domaine personnalisé",
    "pricing.compareFeatures.customDomain.business": "Par défaut",
    "pricing.compareFeatures.customDomain.enterprise": "Domaine privé",
    "pricing.compareFeatures.customBranding": "Personnalisation de la marque",
    "pricing.compareFeatures.customBranding.business": "Par défaut",
    "pricing.compareFeatures.customBranding.enterprise": "Marque personnelle",
    "pricing.compareFeatures.storage": "Stockage",
    "pricing.compareFeatures.storage.business": "5 Go de stockage",
    "pricing.compareFeatures.storage.enterprise": "Stockage illimité",
    "pricing.compareFeatures.support": "Support",
    "pricing.compareFeatures.support.business": "Heures ouvrables locales",
    "pricing.compareFeatures.support.enterprise": "Support entreprise 24/7",

    //testimonial
    "testimonial.1.quote":
      "ZetCollect a transformé nos opérations quotidiennes de collecte d'argent. La capacité hors ligne est cruciale pour nos succursales rurales, et les fonctionnalités de prévention de la fraude nous offrent une tranquillité d'esprit totale.",
    "testimonial.1.author": "Jason Mwangi",
    "testimonial.1.title": "Directeur des opérations, Kenya Microfinance",
    "testimonial.1.country": "Kenya",
    "testimonial.1.initials": "JM",
    "testimonial.2.quote":
      "L'interface mobile de ZetCollect change la donne pour nos agents de terrain. Elle est intuitive et fiable, même dans les zones à faible connectivité.",
    "testimonial.2.author": "Marie Ndong",
    "testimonial.2.title": "Directrice de succursale, Gabon Savings Bank",
    "testimonial.2.country": "Gabon",
    "testimonial.2.initials": "MN",
    "testimonial.3.quote":
      "Avec ZetCollect, nous avons rationalisé notre processus de collecte et réduit les erreurs de manière significative. Le tableau de bord analytique fournit des informations que nous n'avions jamais eues auparavant.",
    "testimonial.3.author": "Pauline Eto",
    "testimonial.3.title": "Responsable des finances, Cameroon Credit Union",
    "testimonial.3.country": "Cameroun",
    "testimonial.3.initials": "PE",
    "testimonial.4.quote":
      "Les outils de prévention de la fraude de ZetCollect ont protégé nos opérations, et les fonctionnalités personnalisables nous permettent de l'adapter à nos besoins.",
    "testimonial.4.author": "Samuel Ngu",
    "testimonial.4.title": "PDG, Cameroon Microfinance Co.",
    "testimonial.4.country": "Cameroun",
    "testimonial.4.initials": "SN",
    "testimonial.5.quote":
      "Le suivi en temps réel de ZetCollect a amélioré notre efficacité et notre responsabilité à travers plusieurs succursales.",
    "testimonial.5.author": "Esther Mbi",
    "testimonial.5.title": "Responsable des opérations, Cameroon Rural Bank",
    "testimonial.5.country": "Cameroun",
    "testimonial.5.initials": "EM",
  },

  sw: {
    ...ArticlesContext.sw,
    ...CustomerStorycontext.sw,
    ...EventsContext.sw,
    ...CustomerSupportcontext.sw,
    ...Faqcontext.sw,
    ...TrainingandCerificationContext.sw,
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
  "upcoming.subtitle": "Vipengele vya kusisimua vinavyokuja hivi karibuni kuimarisha uzoefu wako wa ukusanyaji",
  "upcoming.gps.title": "Ufuatiliaji wa GPS",
  "upcoming.gps.desc": "Ufuatiliaji wa eneo la wakati halisi kwa usalama ulioimarishwa na uboreshaji wa njia.",
  "upcoming.alerts.title": "Arifa za Ukusanyaji wa Kukosa",
  "upcoming.alerts.desc": "Arifa za kiotomatiki za ukusanyaji uliokosa na vikumbusho vya ufuatiliaji.",
  "upcoming.risk.title": "Wasifu wa Hatari wa Mteja na Ukadiriaji",
  "upcoming.risk.desc": "Tathmini ya hatari inayotegemea AI na mfumo wa ukadiriaji wa wateja kwa maamuzi bora.",
  "upcoming.route.title": "Ubora wa Njia na Ratiba",
  "upcoming.route.desc": "Algoriti za njia za akili za kuboresha ratiba za wokusanyaji na kuongeza ufanisi.",
  "upcoming.portal.title": "Je, Portal Yetu ya Kujitegemea ya Mteja Inatoa Nini?",
  "upcoming.portal.desc": "Inaruhusu wateja kuona historia yao ya ukusanyaji, kuthibitisha ikiwa kizingiti cha wakala (wokusanyaji) kimefikia na kuthibitisha ikiwa ana idhini ya kukusanya.",
  "upcoming.currency.title": "Mfumo Mpya wa Sarafu (CDF)",
  "upcoming.currency.desc": "Uunganisho wa sarafu ya Kikongomani (CDF) kwa urahisi kwa miamala yote na kuripoti kifedha.",
  "upcoming.mobile_money.title": "Pesa za Simu",
  "upcoming.mobile_money.desc": "ZetCollect inaongeza uungaji wa Orange Money na MTN Mobile Money, kuruhusu miamala ya moja kwa moja na malipo salama kupitia vifaa vya simu.",
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
    "faq.subtitle":
      "Hapa kuna majibu ya maswali yako yote ya moto kuhusu ZetCollect. Unaweza pia kutuwasiliana moja kwa moja au uchunguze zaidi katika msingi wetu wa maarifa na hati za API.",

    "faq.questions.product_infoA": "ZetCollect ni nini ?",
    "faq.answers.product_infoA":
      "Ni mfumo wa usimamizi wa ukusanyaji wa pesa ulioundwa kwa ajili ya taasisi za microfinance na vyama vya ushirika. Unakusaidia kusimamia wateja, mawakala (collectors), na matawi huku ukiboresha uwazi, utoaji wa ripoti, na udhibiti wa shughuli.",
    "faq.questions.product_infoB":
      "Je, ZetCollect umebuniwa mahsusi kwa taasisi za microfinance katika ukanda wa CEMAC?",
    "faq.answers.product_infoB":
      "Ndiyo, ZetCollect imeundwa kufuata kanuni za CEMAC, ikiwaunga mkono mawakala wanaofanya kazi vijijini au mijini, na ikijumuisha ukusanyaji wa kidijitali pamoja na ule wa kutumia vijitabu.",
    "faq.questions.product_infoC": "Ni faida gani kuu za kutumia ZetCollect ?",
    "faq.answers.product_infoC":
      "Unapata ufuatiliaji bora wa mtiririko wa pesa, upatanisho wa haraka, utoaji wa ripoti kiotomatiki, tume ya wakala, na ulinganifu bora na viwango vya kifedha vya kikanda.",

    "faq.questions.client_management":
      "Je, kipengele cha Usimamizi wa Wateja cha ZetCollect kinavyofanya kazi vipi?",
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
    "pricing.section1.title": "Bei za Ushindani za Ukuaji wa Haraka",
    "pricing.section1.description":
      "Mipango ya Bei na Malipo ya Kunyumbulika kwa Biashara za Ukubwa Wote",
    "pricing.section1.cta": "Anza",
    "pricing.section2.title":
      "Ada za Kunyumbulika Zilizoboreshwa kwa Biashara Yako",
    "pricing.section2.business.title": "Biashara",
    "pricing.section2.business.description":
      "Bei ya Kawaida kwa Biashara Zilizokua",
    "pricing.section2.business.features.title": "Unapata:",
    "pricing.section2.business.features.localBusinessHours":
      "Msaada wa Saa za Biashara za Mitaa",
    "pricing.section2.business.cta": "Anza",
    "pricing.section2.enterprise.title": "Biashara ya Juu",
    "pricing.section2.enterprise.description":
      "Viango vya Kubinafsisha na Msaada wa kujitolea na Vipengele vya Juu",
    "pricing.section2.enterprise.features.title": "Unapata:",
    "pricing.section2.enterprise.features.enterpriseSupport":
      "Msaada wa Biashara ya Juu 24/7",
    "pricing.section2.enterprise.cta": "Wasiliana na Mauzo",
    "pricing.section3.title": "Linganisha Vipengele",
    "pricing.section3.link": "Jifunze kuhusu Vipengele",
    "pricing.compareFeatures.clientManagement": "Usimamizi wa Wateja",
    "pricing.compareFeatures.collectorManagement": "Usimamizi wa Wakusanyaji",
    "pricing.compareFeatures.branchSetup": "Usanidi wa Tawi na Taasisi",
    "pricing.compareFeatures.mobileCollection":
      "Kiolesura cha Mkusanyiko wa Simu",
    "pricing.compareFeatures.bookletSystem": "Mfumo wa Vijitabu",
    "pricing.compareFeatures.transactionHistory": "Historia ya Muamala",
    "pricing.compareFeatures.reportsAnalytics": "Ripoti na Uchanganuzi",
    "pricing.compareFeatures.userAccessRoles":
      "Ufikiaji wa Watumiaji na Majukumu",
    "pricing.compareFeatures.dailySynchronization":
      "Usawazishaji wa Data wa Kila Siku",
    "pricing.compareFeatures.passwordPolicy": "Sera ya Nenosiri",
    "pricing.compareFeatures.databaseHosting": "Mwenyeji wa Hifadhidata",
    "pricing.compareFeatures.gpsTraceability":
      "Ufuatiliaji wa GPS kwa Mawakala",
    "pricing.compareFeatures.missedCollectionAlerts":
      "Arifa za Mkusanyiko Uliokosa",
    "pricing.compareFeatures.clientRiskProfile": "Wasifu wa Hatari ya Mteja",
    "pricing.compareFeatures.routeOptimization": "Uboreshaji wa Njia na Ratiba",
    "pricing.compareFeatures.clientSelfAccessPortal":
      "Tovuti ya Huduma ya Mteja Binafsi",
    "pricing.compareFeatures.localBusinessHours":
      "Msaada wa Saa za Biashara za Mitaa",
    "pricing.compareFeatures.enterpriseSupport":
      "Msaada wa Biashara ya Juu 24/7",
    "pricing.compareFeatures.smsNotifications": "Arifa za SMS",
    "pricing.compareFeatures.smsNotifications.business": "Inapohitajika",
    "pricing.compareFeatures.smsNotifications.enterprise": "Inapohitajika",
    "pricing.compareFeatures.customDomain": "Kikoa cha Kubinafsisha",
    "pricing.compareFeatures.customDomain.business": "Chaguo-msingi",
    "pricing.compareFeatures.customDomain.enterprise": "Kikoa cha Kibinafsi",
    "pricing.compareFeatures.customBranding": "Chapa ya Kubinafsisha",
    "pricing.compareFeatures.customBranding.business": "Chaguo-msingi",
    "pricing.compareFeatures.customBranding.enterprise": "Chapa ya Kibinafsi",
    "pricing.compareFeatures.storage": "Hifadhi",
    "pricing.compareFeatures.storage.business": "Hifadhi ya GB 5",
    "pricing.compareFeatures.storage.enterprise": "Hifadhi Isiyo na Kikomo",
    "pricing.compareFeatures.support": "Msaada",
    "pricing.compareFeatures.support.business": "Saa za Biashara za Mitaa",
    "pricing.compareFeatures.support.enterprise":
      "Msaada wa Biashara ya Juu 24/7",

    //testimonial
    "testimonial.1.quote":
      "ZetCollect imebadilisha shughuli zetu za kila siku za ukusanyaji wa fedha. Uwezo wa kufanya kazi nje ya mtandao ni muhimu kwa matawi yetu ya vijijini, na vipengele vya kuzuia udanganyifu vinatupa amani ya akili kabisa.",
    "testimonial.1.author": "Jason Mwangi",
    "testimonial.1.title": "Mkurugenzi wa Shughuli, Kenya Microfinance",
    "testimonial.1.country": "Kenya",
    "testimonial.1.initials": "JM",
    "testimonial.2.quote":
      "Kiolesura cha simu cha ZetCollect ni kibadilishaji mchezo kwa wawakilishi wetu wa nje. Ni rahisi kutumia na ya kuaminika, hata katika maeneo yenye muunganisho dhaifu.",
    "testimonial.2.author": "Marie Ndong",
    "testimonial.2.title": "Meneja wa Tawi, Gabon Savings Bank",
    "testimonial.2.country": "Gabon",
    "testimonial.2.initials": "MN",
    "testimonial.3.quote":
      "Kwa ZetCollect, tumerahisisha mchakato wetu wa ukusanyaji na kupunguza makosa kwa kiasi kikubwa. Dashibodi ya uchanganuzi inatoa maarifa ambayo hatukuwahi kuwa nayo hapo awali.",
    "testimonial.3.author": "Pauline Eto",
    "testimonial.3.title": "Kiongozi wa Fedha, Cameroon Credit Union",
    "testimonial.3.country": "Kamerun",
    "testimonial.3.initials": "PE",
    "testimonial.4.quote":
      "Zana za kuzuia udanganyifu za ZetCollect zimehifadhi shughuli zetu, na vipengele vinavyoweza kubinafsishwa vinaturuhusu kuirekebisha kwa mahitaji yetu.",
    "testimonial.4.author": "Samuel Ngu",
    "testimonial.4.title": "Mkurugenzi Mkuu, Cameroon Microfinance Co.",
    "testimonial.4.country": "Kamerun",
    "testimonial.4.initials": "SN",
    "testimonial.5.quote":
      "Ufuatiliaji wa wakati halisi wa ZetCollect umeboresha ufanisi wetu na uwajibikaji katika matawi mengi.",
    "testimonial.5.author": "Esther Mbi",
    "testimonial.5.title": "Meneja wa Shughuli, Cameroon Rural Bank",
    "testimonial.5.country": "Kamerun",
    "testimonial.5.initials": "EM",
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
