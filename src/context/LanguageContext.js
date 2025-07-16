import React, { createContext, useContext, useState, useEffect } from 'react';

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
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.why': 'Why ZetCollect',
    'nav.demo': 'Demo',
    'nav.upcoming': 'Upcoming Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    
    // Hero Section
    'hero.title': 'Transform Cash Collections with ZetCollect',
    'hero.subtitle': 'Empowering African microfinance institutions with efficient, transparent, and fraud-resistant digital collection solutions',
    'hero.cta.demo': 'Get Started',
    'hero.cta.request': 'Request a Demo',
    'hero.cta.features': 'Explore Features',
    
    // Features
    'features.title': 'Core Features',
    'features.subtitle': 'Everything you need to digitize cash collections',
    'features.client.title': 'Client Management',
    'features.client.desc': 'Comprehensive client database with detailed profiles and collection history.',
    'features.collector.title': 'Collector Management',
    'features.collector.desc': 'Track collector performance, routes, and daily collection targets.',
    'features.branch.title': 'Branch Setup',
    'features.branch.desc': 'Multi-branch support with customizable settings and hierarchies.',
    'features.mobile.title': 'Mobile Collection',
    'features.mobile.desc': 'Offline-capable mobile app for collectors to record transactions anywhere.',
    'features.booklet.title': 'Booklet System',
    'features.booklet.desc': 'Digital booklet management with QR codes and validation features.',
    'features.history.title': 'Transaction History',
    'features.history.desc': 'Complete audit trail of all collection activities and payments.',
    'features.reports.title': 'Reports & Analytics',
    'features.reports.desc': 'Real-time dashboards and comprehensive reporting for data-driven decisions.',
    'features.access.title': 'User Access & Roles',
    'features.access.desc': 'Role-based permissions ensuring secure access to sensitive information.',
    'features.sms.title': 'SMS Notifications',
    'features.sms.desc': 'Automated reminders and confirmations via SMS for better communication.',
    'features.sync.title': 'Daily Synchronization',
    'features.sync.desc': 'Seamless data sync between mobile devices and central database.',
    
    // Why ZetCollect
    'why.title': 'Why ZetCollect',
    'why.subtitle': 'Built specifically for African microfinance realities',
    'why.africa.title': 'Built for Africa\'s Realities',
    'why.africa.desc': 'Designed for low-connectivity environments with offline-first capabilities and optimized for local market conditions.',
    'why.fraud.title': 'Fraud-Resistant',
    'why.fraud.desc': 'Advanced security features including digital booklets, GPS tracking, and real-time validation prevent fraudulent activities.',
    'why.mobile.title': 'Mobile-First',
    'why.mobile.desc': 'Optimized for smartphones and tablets with intuitive interfaces that work perfectly on any device.',
    'why.customizable.title': 'Fully Customizable',
    'why.customizable.desc': 'Adapt the platform to your specific workflows, branding, and operational requirements.',
    'why.integrable.title': 'Integrable',
    'why.integrable.desc': 'Seamlessly integrate with existing core banking systems and third-party financial services.',
    'why.data.title': 'Data-Driven Decisions',
    'why.data.desc': 'Comprehensive analytics and reporting tools provide actionable insights for better business decisions.',
    
    // Demo Section
    'demo.title': 'ZetCollect in Action',
    'demo.subtitle': 'Watch how ZetCollect streamlines collections for African MFIs',
    'demo.cta': 'Request a Demo',
    'demo.video_title': 'ZetCollect in Action',
    'demo.play_button': 'Play video',
    'demo.content_title': 'What you\'ll see in this demo:',
    'demo.points.real_time_tracking': 'Real-time collection tracking',
    'demo.points.offline_mode': 'Offline mode capabilities',
    'demo.points.analytics_dashboard': 'Analytics dashboard overview',
    'demo.points.mobile_collector': 'Mobile collector interface',
    'demo.points.fraud_prevention': 'Fraud prevention features',
    'demo.points.multi_branch': 'Multi-branch management',
    
    // Upcoming Features
    'upcoming.title': 'Upcoming Features',
    'upcoming.subtitle': 'Exciting features coming soon to enhance your collection experience',
    'upcoming.gps.title': 'GPS Traceability',
    'upcoming.gps.desc': 'Real-time location tracking for enhanced security and route optimization.',
    'upcoming.alerts.title': 'Missed Collection Alerts',
    'upcoming.alerts.desc': 'Automated notifications for missed collections and follow-up reminders.',
    'upcoming.risk.title': 'Client Risk Profile & Rating',
    'upcoming.risk.desc': 'AI-powered risk assessment and client rating system for better decision making.',
    'upcoming.route.title': 'Route & Schedule Optimization',
    'upcoming.route.desc': 'Smart routing algorithms to optimize collector schedules and maximize efficiency.',
    'upcoming.portal.title': 'Client Self-Access Portal',
    'upcoming.portal.desc': 'Allow clients to view their collection history and make payments independently.',
    'upcoming.currency.title': 'New Currency System (KES)',
    'upcoming.currency.desc': 'Seamless integration of Kenya Shillings (KES) for all transactions and financial reporting.',

    
    // Contact Us
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Please contact us to discuss any other queries.',
    'contact.form.title': 'Talk to ZetCollect to create your digital future.',
    'contact.form.first_name': 'First Name*',
    'contact.form.last_name': 'Last Name*',
    'contact.form.email': 'Business Email*',
    'contact.form.job_title': 'Job Title*',
    'contact.form.contact_number': 'Work Phone*',
    'contact.form.organisation': 'Company Name*',
    'contact.form.country': 'Country*',
    'contact.form.country.cameroon': 'Cameroon',
    'contact.form.country.kenya': 'Kenya',
    'contact.form.country.gabon': 'Gabon',
    'contact.form.country.tchad': 'Tchad',
    'contact.form.country.congo': 'Republic of Congo',
    'contact.form.message': 'Your Message*',
    'contact.form.functional_role': 'Functional Role*',
    'contact.form.functional_role.finance': 'Finance and Accounting',
    'contact.form.functional_role.hr': 'Human Resource',
    'contact.form.functional_role.operator': 'Operator',
    'contact.form.functional_role.it': 'IT',
    'contact.form.job_level': 'Job Level*',
    'contact.form.job_level.c_level': 'C-Level',
    'contact.form.job_level.vp': 'Vice President',
    'contact.form.job_level.director': 'Director',
    'contact.form.job_level.manager': 'Manager',
    'contact.form.job_level.other': 'Other',
    'contact.form.how_did_you_hear': 'How did you hear about ZetCollect?',
    'contact.form.how_did_you_hear.search': 'Search Engine',
    'contact.form.how_did_you_hear.referral': 'Referral',
    'contact.form.opt_in': 'Opt in to ZetCollect tailored information such as industry news and reports, solution updates and events, via email and telephone',
    'contact.form.submit': 'Submit',
    'contact.microservices.title': 'Serving Microservices Across Africa',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.contactUs': 'Contact Us',
    'common.getStarted': 'Get Started',
    'common.comingSoon': 'Coming Soon',
    'common.newsletter': 'Stay updated—join our newsletter!',
    'common.talkToUs': 'Want these now? Talk to us!',
    
    // Footer
    'footer.logo_alt': 'Company Logo',
    'footer.help_text': 'Need help finding the best solution for your business?',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.youtube': 'YouTube',
    'footer.about': 'ABOUT',
    'footer.who_we_serve': 'Who We Serve',
    'footer.resource_center': 'Resource Center',
    'footer.about_us': 'About Us',
    'footer.newsroom': 'NEWSROOM',
    'footer.articles': 'Articles',
    'footer.events_webinars': 'Events and Webinars',
    'footer.support': 'Support',
    'footer.faq': 'FAQ',
    'footer.training_certification': 'Training and Certification',
    'footer.rights': 'Powered By © {year} Evolv IZSoftwares Group Ltd. All rights reserved.',
    
    // WorkInProgressPage
    'wip.title': 'Page Under Construction',
    'wip.description': 'We\'re working hard to bring this page to life. Check back soon for updates!',
    'wip.backToHome': 'Go back to Home',
    
    // CustomerSupportPage
    'support.title': 'Customer support',
    'support.subtitle': 'Solution specific support',
    'support.selectLabel': 'Select a feature',
    'support.selectPlaceholder': 'Select a feature',
    'support.contactLabel': '{feature} Support:',
    'support.phone': 'Phone',
    'support.email': 'Email',
    'support.noSelection': 'Please select a feature to view support details.',
    'support.communityButton': 'Online Support Community',
    // Feature names
    'support.feature.client': 'Client Management',
    'support.feature.collector': 'Collector (Agent) Management',
    'support.feature.branch': 'Branch & Institution Setup',
    'support.feature.mobile': 'Mobile Collection Interface',
    'support.feature.booklet': 'Booklet (Carnet) System',
    'support.feature.history': 'Transaction History',
    'support.feature.reports': 'Reports & Analytics',
    'support.feature.access': 'User Access & Roles',
    'support.feature.sms': 'SMS Notifications (Optional)',
    'support.feature.sync': 'Daily Synchronization',
    
    // ReleaseNotesPage
    'release.title': 'Release notes',
    'release.description1': 'ZetCollect is a cutting-edge finance collection app tailored for African institutions. Its intuitive mobile interface ensures seamless payments, even offline. Advanced security and analytics empower efficient, transparent operations.',
    'release.description2': 'Our SaaS platform brings fresh updates every week, neatly summarized each month. VPC users enjoy quarterly updates with a 14-day test period, or 45 days with staging. ZetCollect offers secure, flexible, and insightful tools to simplify your financial operations.',
    'release.saas.title': 'ZetCollect System: 2025 release',
    'release.saas.systemVersion': '1.2.0 - 25th April 2025',
    'release.saas.systemVersion2': '1.2.1 - 27th June 2025',
    'release.saas.title2': 'ZetCollect Website: 2025 release',
    'release.saas.systemVersionWeb': '1.0.0 Beta - 25th April 2025',
    'release.saas.systemVersionWeb2': ' 1.0.1 Beta - 27th June 2025',
    
    // FAQPage
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Here\'s the answers to all your burning questions about ZetCollect. You can also contact us directly or dive deeper into our knowledge base and API documentation.',
    'faq.questions.client_management': 'How does ZetCollect\'s Client Management feature work?',
    'faq.answers.client_management': 'ZetCollect\'s Client Management allows you to easily add, update, and manage all your client information, including custom fields. You can allocate specific collection books to clients for structured tracking and set daily saving expectations to monitor their progress effectively.',
    'faq.questions.collector_management': 'What functionalities does the Collector (Agent) Management offer?',
    'faq.answers.collector_management': 'The Collector (Agent) Management feature enables you to assign agents to specific branches, allocate clients and collection zones to them, and track their daily activities in real-time. This includes monitoring collected amounts and identifying missed collections.',
    'faq.questions.multi_branch': 'Can ZetCollect support multiple branches and institutions?',
    'faq.answers.multi_branch': 'Yes, ZetCollect supports a multi-branch setup with role-based access control, allowing you to manage different branches efficiently. It also provides centralized head office control for comprehensive monitoring of performance across all your branches.',
    'faq.questions.mobile_collection': 'What are the capabilities of the Mobile Collection Interface?',
    'faq.answers.mobile_collection': 'The Mobile Collection Interface is an Android application designed for collectors, enabling real-time entry of collections directly from client locations. It functions seamlessly both online and offline, automatically syncing all data when an internet connection is available, ensuring continuous operation.',
    'faq.questions.booklet_system': 'How does the Booklet (Carnet) System prevent fraud?',
    'faq.answers.booklet_system': 'The Booklet (Carnet) System assigns each client a digital collection booklet. Collectors mark transactions on the app based on entries in this digital booklet. This process creates a transparent and verifiable record, significantly reducing the risk of fraud and misreporting.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.features': 'Fonctionnalités',
    'nav.why': 'Pourquoi ZetCollect',
    'nav.demo': 'Démo',
    'nav.upcoming': 'Fonctionnalités à venir',
    'nav.pricing': 'Tarification',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    
    // Hero Section
    'hero.title': 'Transformez les Collections avec ZetCollect',
    'hero.subtitle': 'Autonomiser les institutions de microfinance africaines avec des solutions de collection numériques efficaces, transparentes et résistantes à la fraude',
    'hero.cta.demo': 'Voir la Démo',
    'hero.cta.request': 'Demander une Démo',
    'hero.cta.features': 'Explorer les Fonctionnalités',
    
    // Features
    'features.title': 'Fonctionnalités Principales',
    'features.subtitle': 'Tout ce dont vous avez besoin pour numériser les collections',
    'features.client.title': 'Gestion des Clients',
    'features.client.desc': 'Base de données complète des clients avec profils détaillés et historique des collections.',
    'features.collector.title': 'Gestion des Collecteurs',
    'features.collector.desc': 'Suivi des performances, itinéraires et objectifs quotidiens des collecteurs.',
    'features.branch.title': 'Configuration des Succursales',
    'features.branch.desc': 'Support multi-succursales avec paramètres personnalisables et hiérarchies.',
    'features.mobile.title': 'Collection Mobile',
    'features.mobile.desc': 'Application mobile hors ligne pour enregistrer les transactions partout.',
    'features.booklet.title': 'Système de Carnets',
    'features.booklet.desc': 'Gestion numérique des carnets avec codes QR et fonctionnalités de validation.',
    'features.history.title': 'Historique des Transactions',
    'features.history.desc': 'Piste d\'audit complète de toutes les activités de collection et paiements.',
    'features.reports.title': 'Rapports et Analyses',
    'features.reports.desc': 'Tableaux de bord en temps réel et rapports complets pour des décisions basées sur les données.',
    'features.access.title': 'Accès et Rôles Utilisateur',
    'features.access.desc': 'Permissions basées sur les rôles garantissant un accès sécurisé aux informations sensibles.',
    'features.sms.title': 'Notifications SMS',
    'features.sms.desc': 'Rappels et confirmations automatisés par SMS pour une meilleure communication.',
    'features.sync.title': 'Synchronisation Quotidienne',
    'features.sync.desc': 'Synchronisation transparente des données entre appareils mobiles et base de données centrale.',
    
    // Why ZetCollect
    'why.title': 'Pourquoi ZetCollect',
    'why.subtitle': 'Conçu spécifiquement pour les réalités de la microfinance africaine',
    'why.africa.title': 'Conçu pour les Réalités Africaines',
    'why.africa.desc': 'Conçu pour les environnements à faible connectivité avec des capacités hors ligne et optimisé pour les conditions du marché local.',
    'why.fraud.title': 'Résistant à la Fraude',
    'why.fraud.desc': 'Fonctionnalités de sécurité avancées incluant carnets numériques, suivi GPS et validation en temps réel.',
    'why.mobile.title': 'Mobile d\'Abord',
    'why.mobile.desc': 'Optimisé pour smartphones et tablettes avec interfaces intuitives fonctionnant parfaitement sur tout appareil.',
    'why.customizable.title': 'Entièrement Personnalisable',
    'why.customizable.desc': 'Adaptez la plateforme à vos flux de travail, marque et exigences opérationnelles spécifiques.',
    'why.integrable.title': 'Intégrable',
    'why.integrable.desc': 'Intégration transparente avec les systèmes bancaires centraux existants et services financiers tiers.',
    'why.data.title': 'Décisions Basées sur les Données',
    'why.data.desc': 'Outils d\'analyse et de reporting complets fournissent des insights exploitables pour de meilleures décisions.',
    
    // Demo Section
    'demo.title': 'ZetCollect en Action',
    'demo.subtitle': 'Regardez comment ZetCollect rationalise les collections pour les IMF africaines',
    'demo.cta': 'Demander une Démo',
    'demo.video_title': 'ZetCollect en Action',
    'demo.play_button': 'Lire la vidéo',
    'demo.content_title': 'Ce que vous verrez dans cette démo :',
    'demo.points.real_time_tracking': 'Suivi des collections en temps réel',
    'demo.points.offline_mode': 'Capacités du mode hors ligne',
    'demo.points.analytics_dashboard': 'Aperçu du tableau de bord analytique',
    'demo.points.mobile_collector': 'Interface mobile pour les collecteurs',
    'demo.points.fraud_prevention': 'Fonctionnalités de prévention de la fraude',
    'demo.points.multi_branch': 'Gestion multi-succursales',
    
    'upcoming.title': 'Fonctionnalités à Venir',
    'upcoming.subtitle': 'Des fonctionnalités passionnantes à venir pour améliorer votre expérience de collecte',
    'upcoming.gps.title': 'Traçabilité GPS',
    'upcoming.gps.desc': 'Suivi de localisation en temps réel pour une sécurité renforcée et une optimisation des itinéraires.',
    'upcoming.alerts.title': 'Alertes de Collecte Manquée',
    'upcoming.alerts.desc': 'Notifications automatiques pour les collectes manquées et rappels de suivi.',
    'upcoming.risk.title': 'Profil et Évaluation des Risques Client',
    'upcoming.risk.desc': 'Évaluation des risques basée sur l\'IA et système de notation client pour une meilleure prise de décision.',
    'upcoming.route.title': 'Optimisation des Itinéraires et des Horaires',
    'upcoming.route.desc': 'Algorithmes de routage intelligents pour optimiser les horaires des collecteurs et maximiser l\'efficacité.',
    'upcoming.portal.title': 'Portail Libre-Service Client',
    'upcoming.portal.desc': 'Permettre aux clients de consulter leur historique de collecte et d\'effectuer des paiements de manière autonome.',
    'upcoming.currency.title': 'Nouveau Système Monétaire (KES)',
    'upcoming.currency.desc': 'Intégration transparente des shillings kenyans (KES) pour toutes les transactions et les rapports financiers.',
    
    // Contact Us
    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Veuillez nous contacter pour discuter de toute autre question.',
    'contact.form.title': 'Parlez à ZetCollect pour créer votre avenir numérique.',
    'contact.form.first_name': 'Prénom*',
    'contact.form.last_name': 'Nom de famille*',
    'contact.form.email': 'Courriel professionnel*',
    'contact.form.job_title': 'Titre du poste*',
    'contact.form.contact_number': 'Téléphone professionnel*',
    'contact.form.organisation': 'Entreprise nom*',
    'contact.form.country': 'Pays*',
    'contact.form.country.cameroon': 'Cameroun',
    'contact.form.country.kenya': 'Kenya',
    'contact.form.country.gabon': 'Gabon',
    'contact.form.country.tchad': 'Tchad',
    'contact.form.country.congo': 'République du Congo',
    'contact.form.message': 'Votre message*',
    'contact.form.functional_role': 'Rôle fonctionnel*',
    'contact.form.functional_role.finance': 'Finance et comptabilité',
    'contact.form.functional_role.hr': 'Ressources humaines',
    'contact.form.functional_role.operator': 'Opérateur',
    'contact.form.functional_role.it': 'Informatique',
    'contact.form.job_level': 'Niveau du poste*',
    'contact.form.job_level.c_level': 'Niveau C',
    'contact.form.job_level.vp': 'Vice-Président',
    'contact.form.job_level.director': 'Directeur',
    'contact.form.job_level.manager': 'Manager',
    'contact.form.job_level.other': 'Autre',
    'contact.form.how_did_you_hear': 'Comment avez-vous entendu parler de ZetCollect ?',
    'contact.form.how_did_you_hear.search': 'Moteur de recherche',
    'contact.form.how_did_you_hear.referral': 'Recommandation',
    'contact.form.opt_in': 'S\'inscrire pour recevoir des informations personnalisées de ZetCollect, telles que des nouvelles de l\'industrie, des rapports, des mises à jour de solutions et des événements, par courriel et téléphone',
    'contact.form.submit': 'Soumettre',
    'contact.microservices.title': 'Servir les microservices à travers l\'Afrique',
    
    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.contactUs': 'Nous Contacter',
    'common.getStarted': 'Commencer',
    'common.comingSoon': 'Bientôt Disponible',
    'common.newsletter': 'Restez informés—rejoignez notre newsletter !',
    'common.talkToUs': 'Vous les voulez maintenant ? Parlez-nous !',
    
    // Footer
    'footer.logo_alt': 'Logo de l\'entreprise',
    'footer.help_text': 'Besoin d\'aide pour trouver la meilleure solution pour votre entreprise ?',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.youtube': 'YouTube',
    'footer.about': 'À PROPOS',
    'footer.who_we_serve': 'Qui Nous Servons',
    'footer.resource_center': 'Centre de Ressources',
    'footer.about_us': 'À Propos de Nous',
    'footer.newsroom': 'SALLE DE PRESSE',
    'footer.articles': 'Articles',
    'footer.events_webinars': 'Événements et Webinaires',
    'footer.support': 'Support',
    'footer.faq': 'FAQ',
    'footer.training_certification': 'Formation et Certification',
    'footer.rights': 'Propulsé par © {year} Evolv IZSoftwares Group Ltd. Tous droits réservés.',
    
    // WorkInProgressPage
    'wip.title': 'Page en Construction',
    'wip.description': 'Nous travaillons dur pour donner vie à cette page. Revenez bientôt pour des mises à jour !',
    'wip.backToHome': 'Retourner à l\'Accueil',
    
    // CustomerSupportPage
    'support.title': 'Support client',
    'support.subtitle': 'Support spécifique à la solution',
    'support.selectLabel': 'Sélectionner une fonctionnalité',
    'support.selectPlaceholder': 'Sélectionner une fonctionnalité',
    'support.contactLabel': 'Support pour {feature} :',
    'support.phone': 'Téléphone',
    'support.email': 'Courriel',
    'support.noSelection': 'Veuillez sélectionner une fonctionnalité pour voir les détails du support.',
    'support.communityButton': 'Communauté de support en ligne',
    // Feature names
    'support.feature.client': 'Gestion des clients',
    'support.feature.collector': 'Gestion des collecteurs (agents)',
    'support.feature.branch': 'Configuration des succursales et institutions',
    'support.feature.mobile': 'Interface de collecte mobile',
    'support.feature.booklet': 'Système de carnets',
    'support.feature.history': 'Historique des transactions',
    'support.feature.reports': 'Rapports et analyses',
    'support.feature.access': 'Accès et rôles des utilisateurs',
    'support.feature.sms': 'Notifications SMS (optionnel)',
    'support.feature.sync': 'Synchronisation quotidienne',
    
    // ReleaseNotesPage
    "release.title": "Notes de version",
    "release.description1": "ZetCollect est une application incontournable pour des collectes financières sans stress en Afrique. Son interface mobile intuitive fonctionne parfaitement, même hors ligne. Sécurité avancée et analyses intelligentes renforcent l'efficacité et la confiance.",
    "release.description2": "Notre plateforme SaaS propose des mises à jour hebdomadaires, résumées chaque mois pour plus de clarté. Les utilisateurs VPC reçoivent des mises à jour trimestrielles avec 14 jours de test, ou 45 jours avec environnement de staging. ZetCollect offre des outils sécurisés, flexibles et perspicaces.",
    "release.saas.title": " ZetCollect système: Version 2025 ",
    "release.saas.systemVersion": "1.2.0 - 25 avril 2025",
    "release.saas.systemVersion2": " 1.2.1 - 27 juin 2025",
    "release.saas.title2": "ZetCollect le site: Version 2025",
    "release.saas.systemVersionWeb": "1.0.0 Bêta - 25 avril 2025",
    "release.saas.systemVersionWeb2": "1.0.1 Bêta - 27 juin 2025",
    
    // FAQPage
    'faq.title': 'Foire aux Questions',
    'faq.subtitle': 'Voici les réponses à toutes vos questions brûlantes sur ZetCollect. Vous pouvez également nous contacter directement ou explorer notre base de connaissances et la documentation de l\'API.',
    'faq.questions.client_management': 'Comment fonctionne la fonctionnalité de gestion des clients de ZetCollect ?',
    'faq.answers.client_management': 'La gestion des clients de ZetCollect vous permet d\'ajouter, de mettre à jour et de gérer facilement toutes les informations des clients, y compris les champs personnalisés. Vous pouvez attribuer des carnets de collecte spécifiques aux clients pour un suivi structuré et définir des attentes d\'épargne quotidiennes pour suivre leur progression efficacement.',
    'faq.questions.collector_management': 'Quelles fonctionnalités offre la gestion des collecteurs (agents) ?',
    'faq.answers.collector_management': 'La fonctionnalité de gestion des collecteurs (agents) permet d\'assigner des agents à des succursales spécifiques, d\'attribuer des clients et des zones de collecte, et de suivre leurs activités quotidiennes en temps réel. Cela inclut le suivi des montants collectés et l\'identification des collectes manquées.',
    'faq.questions.multi_branch': 'ZetCollect peut-il prendre en charge plusieurs succursales et institutions ?',
    'faq.answers.multi_branch': 'Oui, ZetCollect prend en charge une configuration multi-succursales avec un contrôle d\'accès basé sur les rôles, permettant de gérer efficacement différentes succursales. Il offre également un contrôle centralisé depuis le siège pour une surveillance complète des performances dans toutes vos succursales.',
    'faq.questions.mobile_collection': 'Quelles sont les capacités de l\'interface de collecte mobile ?',
    'faq.answers.mobile_collection': 'L\'interface de collecte mobile est une application Android conçue pour les collecteurs, permettant l\'enregistrement en temps réel des collectes directement depuis les emplacements des clients. Elle fonctionne parfaitement en ligne et hors ligne, synchronisant automatiquement toutes les données lorsqu\'une connexion Internet est disponible, garantissant une opération continue.',
    'faq.questions.booklet_system': 'Comment le système de carnets prévient-il la fraude ?',
    'faq.answers.booklet_system': 'Le système de carnets attribue à chaque client un carnet de collecte numérique. Les collecteurs enregistrent les transactions sur l\'application en fonction des entrées de ce carnet numérique. Ce processus crée un enregistrement transparent et vérifiable, réduisant considérablement le risque de fraude et d\'erreurs de rapport.',
  },
  sw: {
    // Navigation
    'nav.home': 'Nyumbani',
    'nav.features': 'Vipengele',
    'nav.why': 'Kwa Nini ZetCollect',
    'nav.demo': 'Mfano',
    'nav.upcoming': 'Vipengele Vinavyokuja',
    'nav.pricing': 'Bei',
    'nav.contact': 'Mawasiliano',
    'nav.login': 'Ingia',
    
    // Hero Section
    'hero.title': 'Badilisha Ukusanyaji wa Pesa na ZetCollect',
    'hero.subtitle': 'Kuwezesha taasisi za kifedha za Afrika kwa suluhisho za kidijitali za ukusanyaji zilizo na ufanisi, uwazi na upinzani wa ulaghai',
    'hero.cta.demo': 'Angalia Mfano',
    'hero.cta.request': 'Omba Mfano',
    'hero.cta.features': 'Chunguza Vipengele',
    
    // Features
    'features.title': 'Vipengele Vikuu',
    'features.subtitle': 'Kila kitu unachohitaji ili kudigitize ukusanyaji',
    'features.client.title': 'Usimamizi wa Wateja',
    'features.client.desc': 'Hifadhidata kamili ya wateja yenye maelezo na historia ya ukusanyaji.',
    'features.collector.title': 'Usimamizi wa Wakusanya',
    'features.collector.desc': 'Fuatilia utendaji wa wakusanya, njia na malengo ya kila siku.',
    'features.branch.title': 'Usanidi wa Matawi',
    'features.branch.desc': 'Msaada wa matawi mengi na mipangilio inayoweza kubadilishwa.',
    'features.mobile.title': 'Ukusanyaji wa Simu',
    'features.mobile.desc': 'Programu ya simu inayoweza kutumika bila mtandao kwa kurekodi miamala popote.',
    'features.booklet.title': 'Mfumo wa Vitabu',
    'features.booklet.desc': 'Usimamizi wa kidijitali wa vitabu na msimbo wa QR na vipengele vya uthibitisho.',
    'features.history.title': 'Historia ya Miamala',
    'features.history.desc': 'Njia kamili ya ukaguzi wa shughuli zote za ukusanyaji na malipo.',
    'features.reports.title': 'Ripoti na Uchanganuzi',
    'features.reports.desc': 'Dashibodi za wakati halisi na ripoti za kina kwa maamuzi yenye msingi wa data.',
    'features.access.title': 'Ufikiaji na Majukumu ya Watumiaji',
    'features.access.desc': 'Ruhusa zinazotegemea majukumu zinazohakikisha ufikiaji salama wa taarifa nyeti.',
    'features.sms.title': 'Arifa za SMS',
    'features.sms.desc': 'Vikumbusho na uthibitisho wa kiotomatiki kupitia SMS kwa mawasiliano bora.',
    'features.sync.title': 'Ulandanishi wa Kila Siku',
    'features.sync.desc': 'Ulandanishi unaofaa wa data kati ya vifaa vya simu na hifadhidata kuu.',
    
    // Why ZetCollect
    'why.title': 'Kwa Nini ZetCollect',
    'why.subtitle': 'Imeundwa maalum kwa ukweli wa kifedha cha Afrika',
    'why.africa.title': 'Imeundwa kwa Ukweli wa Afrika',
    'why.africa.desc': 'Imeundwa kwa mazingira ya muunganisho mdogo na uwezo wa bila mtandao na iliyoboreshwa kwa hali za soko la ndani.',
    'why.fraud.title': 'Inayopinga Ulaghai',
    'why.fraud.desc': 'Vipengele vya usalama vya hali ya juu vikiwa ni pamoja na vitabu vya kidijitali, ufuatiliaji wa GPS na uthibitisho wa wakati halisi.',
    'why.mobile.title': 'Simu Kwanza',
    'why.mobile.desc': 'Imeongezwa kwa simu mahiri na kompyuta kibao na interface za kina zinazofanya kazi vizuri kwenye kifaa chochote.',
    'why.customizable.title': 'Inayoweza Kubadilishwa Kabisa',
    'why.customizable.desc': 'Rekebisha jukwaa kulingana na mtiririko wako wa kazi, nembo na mahitaji ya uendeshaji.',
    'why.integrable.title': 'Inayoweza Kuunganishwa',
    'why.integrable.desc': 'Uunganisho unaofaa na mifumo ya benki kuu iliyopo na huduma za kifedha za nje.',
    'why.data.title': 'Maamuzi Yanayotegemea Data',
    'why.data.desc': 'Zana za kina za uchanganuzi na ripoti hutoa maarifa yanayoweza kutumika kwa maamuzi bora ya biashara.',
    
    // Demo Section
    'demo.title': 'ZetCollect Ikifanya Kazi',
    'demo.subtitle': 'Angalia jinsi ZetCollect inavyoratibu ukusanyaji kwa IMF za Afrika',
    'demo.cta': 'Omba Mfano',
    'demo.video_title': 'ZetCollect Ikifanya Kazi',
    'demo.play_button': 'Cheza Video',
    'demo.content_title': 'Utachokiona katika mfano huu:',
    'demo.points.real_time_tracking': 'Ufuatiliaji wa ukusanyaji wa wakati halisi',
    'demo.points.offline_mode': 'Uwezo wa hali ya nje ya mtandao',
    'demo.points.analytics_dashboard': 'Muhtasari wa dashibodi ya uchanganuzi',
    'demo.points.mobile_collector': 'Kiolesura cha wakusanya cha simu',
    'demo.points.fraud_prevention': 'Vipengele vya kuzuia ulaghai',
    'demo.points.multi_branch': 'Usimamizi wa matawi mengi',
    
    // Upcoming Features
    'upcoming.title': 'Vipengele Vijavyo',
    'upcoming.subtitle': 'Vipengele vya kusisimua vinakuja hivi karibuni ili kuboresha uzoefu wako wa ukusanyaji',
    'upcoming.gps.title': 'Ufuatiliaji wa GPS',
    'upcoming.gps.desc': 'Kufuatilia eneo kwa wakati halisi kwa usalama ulioimarishwa na uboreshaji wa njia.',
    'upcoming.alerts.title': 'Arifa za Ukusanyaji Uliokosa',
    'upcoming.alerts.desc': 'Arifa za kiotomatiki kwa makusanyo yaliyokosa na vikumbusho vya kufuatilia.',
    'upcoming.risk.title': 'Profaili na Ukadiriaji wa Hatari ya Mteja',
    'upcoming.risk.desc': 'Tathmini ya hatari inayoendeshwa na AI na mfumo wa ukadiriaji wa mteja kwa kufanya maamuzi bora.',
    'upcoming.route.title': 'Uboreshaji wa Njia na Ratiba',
    'upcoming.route.desc': 'Algoriti za kupanga njia mahiri ili kuboresha ratiba za wakusanyaji na kuongeza ufanisi.',
    'upcoming.portal.title': 'Jukwaa la Kujihudumia la Mteja',
    'upcoming.portal.desc': 'Waruhusu wateja kutazama historia yao ya ukusanyaji na kufanya malipo wenyewe.',
    'upcoming.currency.title': 'Mfumo Mpya wa Sarafu (KES)',
    'upcoming.currency.desc': 'Ujumuishaji usio na mshono wa Shilingi za Kenya (KES) kwa miamala yote na ripoti za kifedha.',
    
    // Contact Us
    'contact.title': 'Wasiliana Nasi',
    'contact.subtitle': 'Tafadhali wasiliana nasi kujadili maswali yoyote ya ziada.',
    'contact.form.title': 'Zungumza na ZetCollect ili kuunda mustakabali wako wa kidijitali.',
    'contact.form.first_name': 'Jina la Kwanza*',
    'contact.form.last_name': 'Jina la Mwisho*',
    'contact.form.email': 'Barua pepe ya Biashara*',
    'contact.form.job_title': 'Cheo cha Kazi*',
    'contact.form.contact_number': 'Simu ya Kazini*',
    'contact.form.organisation': 'Jina la kampuni*',
    'contact.form.country': 'Nchi*',
    'contact.form.country.cameroon': 'Kameruni',
    'contact.form.country.kenya': 'Kenya',
    'contact.form.country.gabon': 'Gabon',
    'contact.form.country.tchad': 'Chadi',
    'contact.form.country.congo': 'Jamhuri ya Kongo',
    'contact.form.message': 'Ujumbe Wako*',
    'contact.form.functional_role': 'Jukumu la Kazi*',
    'contact.form.functional_role.finance': 'Fedha na Uhasibu',
    'contact.form.functional_role.hr': 'Rasilimali za Watu',
    'contact.form.functional_role.operator': 'Opereta',
    'contact.form.functional_role.it': 'TEHAMA',
    'contact.form.job_level': 'Kiwango cha Kazi*',
    'contact.form.job_level.c_level': 'Kiwango cha C',
    'contact.form.job_level.vp': 'Makamu wa Rais',
    'contact.form.job_level.director': 'Mkurugenzi',
    'contact.form.job_level.manager': 'Meneja',
    'contact.form.job_level.other': 'Nyingine',
    'contact.form.how_did_you_hear': 'Umesikia vipi kuhusu ZetCollect?',
    'contact.form.how_did_you_hear.search': 'Injini ya Utafutaji',
    'contact.form.how_did_you_hear.referral': 'Rufaa',
    'contact.form.opt_in': 'Jisajili kupokea taarifa za ZetCollect zilizoboreshwa kama vile habari za sekta, ripoti, masasisho ya suluhisho na matukio, kupitia barua pepe na simu',
    'contact.form.submit': 'Wasilisha',
    'contact.microservices.title': 'Kuhudumia Huduma Ndogo Ndogo Barani Afrika',
    
    // Common
    'common.learnMore': 'Jifunze Zaidi',
    'common.contactUs': 'Wasiliana Nasi',
    'common.getStarted': 'Anza',
    'common.comingSoon': 'Inakuja Hivi Karibuni',
    'common.newsletter': 'Baki umejua—jiunge na jarida letu!',
    'common.talkToUs': 'Unahitaji hivi sasa? Zungumza nasi!',
    
    // Footer
    'footer.logo_alt': 'Nembo ya Kampuni',
    'footer.help_text': 'Unahitaji msaada kupata suluhisho bora kwa Biashara yako?',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.youtube': 'YouTube',
    'footer.about': 'KUHUSU',
    'footer.who_we_serve': 'Tunawahudumia Nani',
    'footer.resource_center': 'Kituo cha Rasilimali',
    'footer.about_us': 'Kuhusu Sisi',
    'footer.newsroom': 'CHUMBA CHA HABARI',
    'footer.articles': 'Makala',
    'footer.events_webinars': 'Matukio na Semina za Mtandao',
    'footer.support': 'Msaada',
    'footer.faq': 'Maswali Yanayoulizwa Mara kwa Mara',
    'footer.training_certification': 'Mafunzo na Uthibitisho',
    'footer.rights': 'Imewashwa na © {year} Evolv IZSoftwares Group Ltd. Haki Zote Zimehifadhiwa.',
    
    // WorkInProgressPage
    'wip.title': 'Ukurasa Unaendelea kujengwa',
    'wip.description': 'Tunafanya kazi kwa bidii kuufanya ukurasa huu uwe tayari. Rudi hivi karibuni kwa masasisho!',
    'wip.backToHome': 'Rudi Nyumbani',
    
    // CustomerSupportPage
    'support.title': 'Msaada wa Wateja',
    'support.subtitle': 'Msaada Maalum wa Suluhisho',
    'support.selectLabel': 'Chagua Kipengele',
    'support.selectPlaceholder': 'Chagua Kipengele',
    'support.contactLabel': 'Msaada wa {feature}:',
    'support.phone': 'Simu',
    'support.email': 'Barua pepe',
    'support.noSelection': 'Tafadhali chagua kipengele ili kuona maelezo ya msaada.',
    'support.communityButton': 'Jumuiya ya Msaada Mtandaoni',
    // Feature names
    'support.feature.client': 'Usimamizi wa Wateja',
    'support.feature.collector': 'Usimamizi wa Wakusanya (Wakala)',
    'support.feature.branch': 'Usanidi wa Matawi na Taasisi',
    'support.feature.mobile': 'Kiolesura cha Ukusanyaji wa Simu',
    'support.feature.booklet': 'Mfumo wa Vitabu (Carnet)',
    'support.feature.history': 'Historia ya Miamala',
    'support.feature.reports': 'Ripoti na Uchanganuzi',
    'support.feature.access': 'Ufikiaji na Majukumu ya Watumiaji',
    'support.feature.sms': 'Arifa za SMS (za Hiari)',
    'support.feature.sync': 'Ulandanishi wa Kila Siku',
    
    // ReleaseNotesPage
    "release.title": "Maelezo ya Toleo",
    "release.description1": "ZetCollect ni programu ya kukusanya fedha inayofaa kwa taasisi za Afrika. Muundo wake wa kirafiki wa simu hufanya kazi bila hitilafu, hata nje ya mtandao. Usalama wa hali ya juu na uchanganuzi wa data huongeza ufanisi na imani.",
    "release.description2": "Jukwaa letu la SaaS huleta masasisho ya kila wiki, yaliyofupishwa kila mwezi kwa uwazi. Watumiaji wa VPC hupokea masasisho ya kila robo mwaka na siku 14 za majaribio, au siku 45 na mazingira ya staging. ZetCollect hutoa zana za usalama, zinazobadilika, na za uchanganuzi.",
    "release.saas.title": "Programu ya ZetCollect: Toleo la 2025",
    "release.saas.systemVersion": "1.2.0 - 25 Aprili 2025",
    "release.saas.systemVersion2": "1.2.1 - 27 Juni 2025",
    "release.saas.title2": "Tovuti ya ZetCollect: Toleo la 2025",
    "release.saas.systemVersionWeb": "1.0.0 Beta - 25 Aprili 2025",
    "release.saas.systemVersionWeb2": "1.0.1 Beta - 27 Juni 2025",
    
    // FAQPage
    'faq.title': 'Maswali Yanayoulizwa Mara kwa Mara',
    'faq.subtitle': 'Hapa kuna majibu ya maswali yako yote ya moto kuhusu ZetCollect. Unaweza pia kuwasiliana nasi moja kwa moja au kuchunguza zaidi katika hifadhidata yetu ya maarifa na nyaraka za API.',
    'faq.questions.client_management': 'Je, Kipengele cha Usimamizi wa Wateja cha ZetCollect Kinafanyaje Kazi?',
    'faq.answers.client_management': 'Usimamizi wa Wateja wa ZetCollect hukuruhusu kuongeza, kusasisha, na kusimamia taarifa zote za wateja kwa urahisi, ikiwa ni pamoja na sehemu za desturi. Unaweza kugawa vitabu maalum vya ukusanyaji kwa wateja kwa ufuatiliaji wa kimuundo na kuweka matarajio ya akiba ya kila siku ili kufuatilia maendeleo yao kwa ufanisi.',
    'faq.questions.collector_management': 'Je, Usimamizi wa Wakusanya (Wakala) Unatoa Vipengele Gani?',
    'faq.answers.collector_management': 'Kipengele cha Usimamizi wa Wakusanya (Wakala) hukuruhusu kugawa wakala kwa matawi maalum, kuwagawia wateja na maeneo ya ukusanyaji, na kufuatilia shughuli zao za kila siku kwa wakati halisi. Hii ni pamoja na kufuatilia kiasi kilichokusanywa na kutambua ukusanyaji uliopotea.',
    'faq.questions.multi_branch': 'Je, ZetCollect Inaweza Kusaidia Matawi Mengi na Taasisi?',
    'faq.answers.multi_branch': 'Ndiyo, ZetCollect inasaidia usanidi wa matawi mengi na udhibiti wa upatikanaji unaotegemea majukumu, ikikuruhusu kusimamia matawi tofauti kwa ufanisi. Pia inatoa udhibiti wa kati wa ofisi ya kichwa kwa ufuatiliaji wa kina wa utendaji katika matawi yako yote.',
    'faq.questions.mobile_collection': 'Je, Ni Nini Uwezo wa Kiolesura cha Ukusanyaji wa Simu?',
    'faq.answers.mobile_collection': 'Kiolesura cha Ukusanyaji wa Simu ni programu ya Android iliyoundwa kwa wakusanya, inayowezesha kuingiza ukusanyaji kwa wakati halisi moja kwa moja kutoka kwa maeneo ya wateja. Inafanya kazi bila mshono mtandaoni na nje ya mtandao, ikilandanisha data zote kiotomatiki wakati muunganisho wa intaneti unapatikana, ikihakikisha uendeshaji wa kuendelea.',
    'faq.questions.booklet_system': 'Je, Mfumo wa Vitabu (Carnet) Unazuiaje Ulaghai?',
    'faq.answers.booklet_system': 'Mfumo wa Vitabu (Carnet) unagawia kila mteja kitabu cha ukusanyaji cha kidijitali. Wakusanya huweka alama za miamala kwenye programu kulingana na ingizo katika kitabu hiki cha kidijitali. Mchakato huu unaunda rekodi ya uwazi na inayoweza kuthibitishwa, ikipunguza kwa kiasi kikubwa hatari ya ulaghai na kuripoti vibaya.',
  },
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('zetcollect-language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('zetcollect-language', language);
  }, [language]);

  const t = (key, params = {}) => {
    if (!translations[language][key]) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    let text = translations[language][key];
    Object.keys(params).forEach((param) => {
      text = text.replace(`{${param}}`, params[param]);
    });
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};