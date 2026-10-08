import { Project } from "./types";

export const iqamtiProject: Project = {
  slug: "iqamti",
  title: "IQAMTI — إقامتي",
  subtitle: "Hotel Discovery & Direct Reservation Platform · Saudi Arabia",
  category: "Hospitality",
  featured: true,
  order: 5,
  shortDescription:
    "A premier hotel discovery and booking platform across Saudi Arabia, supporting seasonal accommodations, availability calendars, and multi-currency direct booking workflows.",
  overview:
    "IQAMTI (إقامتي) is a hospitality booking application serving travelers, pilgrim visitors, and domestic tourists across the Kingdom of Saudi Arabia. The application provides comprehensive hotel discovery, room availability filtering, detailed property amenities, and secure multi-currency direct reservations with instant confirmation vouchers.",
  role: "Senior Flutter Developer",
  period: "2023 – 2024",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "RESTful APIs",
    "Payment Gateways",
    "Multi-Currency",
    "Google Maps SDK",
    "Localization (Arabic / English)",
    "App Store & Google Play Releases",
  ],
  architecture: [
    "Presentation Layer: BLoC state management for dynamic room inventory, interactive date-range pickers, and photo carousels",
    "Domain Layer: Pure Dart reservation pricing engine evaluating seasonal rates, municipal taxes, and promotional coupons",
    "Data Layer: High-performance image cache pipeline, secure payment gateway tokenization, and multi-currency feed reconciliation",
  ],
  architectureLayers: [
    {
      name: "Presentation (Booking Flow & UI)",
      responsibility:
        "Property discovery, interactive photo galleries, seasonal calendar date-pickers, room option selector, and checkout review.",
      components: ["HotelSearchBloc", "RoomReservationBloc", "DatePickerModal", "PaymentSheetWidget"],
    },
    {
      name: "Domain (Pricing & Inventory Logic)",
      responsibility:
        "Deterministic price computation engine, seasonal room rate validation, and cancellation policy checks.",
      components: ["CalculateStayPriceUseCase", "ConfirmBookingUseCase", "HotelRepositoryInterface"],
    },
    {
      name: "Data & Payment Gateways",
      responsibility:
        "Encrypted payment tokenization (Mada, Visa, Apple Pay), multi-currency conversion APIs, and hotel inventory endpoints.",
      components: ["PaymentGatewayClient", "HotelRemoteDataSource", "CachedHotelInventoryDao"],
    },
  ],
  problem:
    "High-demand hospitality in Saudi Arabia (such as Ramadan, Umrah, and seasonal festivals) requires real-time room inventory updates, zero checkout calculation errors across currencies, and fast, low-friction booking on mobile devices.",
  responsibilities: [
    "Architected and developed the consumer mobile application for Android and iOS using Flutter.",
    "Engineered search filters by city, amenities, guest occupancy, rating, and price bands.",
    "Integrated secure multi-currency payment gateway flows including Mada, Visa, Mastercard, and Apple Pay.",
    "Oversaw App Store and Google Play compliance, store listings, and regular production release cycles.",
  ],
  challenges: [
    "Rendering dozens of high-res property photo galleries without consuming excessive mobile memory or dropping frames.",
    "Guaranteeing that seasonal pricing, local taxes, and currency exchange rates calculated on the client match backend totals down to the cent.",
  ],
  solutions: [
    "Implemented a memory-bounded image cache strategy with lazy loading and low-resolution blur placeholders.",
    "Encapsulated all currency and fee formulas inside an isolated domain pricing engine with comprehensive unit test coverage.",
  ],
  engineeringDecisions: [
    {
      title: "Isolated Pricing Engine in Pure Dart Domain Layer",
      context:
        "Seasonal room tariffs, city taxes, VAT, and multi-currency conversions easily create rounding mismatches if computed inconsistently between platforms.",
      decision:
        "Centralized all financial calculations inside a pure Dart BookingPricingEngine tested with hundreds of mock currency pairs.",
      tradeOff: "Requires strict adherence to contract versioning between mobile and backend API specs.",
      result:
        "Eliminated checkout rounding disputes and enabled smooth multi-currency payments in SAR, USD, and regional currencies.",
    },
  ],
  features: [
    "Comprehensive hotel search with interactive city and regional map browsing",
    "Dynamic room availability calendar with instant rate updates",
    "Multi-currency payment support with localized Saudi payment methods (Mada, Apple Pay, Cards)",
    "Property amenity breakdown, interactive photo galleries, and guest reviews",
    "Direct instant reservation voucher issuance and digital booking pass",
    "Bilingual Arabic (RTL) and English (LTR) interface",
  ],
  outcomes: [
    "Successfully launched and actively maintained on both Google Play and Apple App Store.",
    "Delivered a seamless hotel booking flow that boosted mobile reservation conversions.",
    "Built a scalable mobile architecture that smoothly handles seasonal booking spikes.",
  ],
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.iqamti_app",
  appStoreUrl:
    "https://apps.apple.com/br/app/iqamti-%D8%A5%D9%82%D8%A7%D9%85%D8%AA%D9%8A/id1605716549?l=en",
  tags: [
    "Hospitality",
    "Hotel Booking",
    "Saudi Arabia",
    "Payments",
    "Multi-Currency",
    "Clean Architecture",
    "Localization",
  ],
  relatedProjectSlugs: ["azda", "white-labeled-ecommerce"],
};
