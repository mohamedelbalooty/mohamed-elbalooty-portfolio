import { Project } from "./types";

export const p2pSyriaProject: Project = {
  slug: "p2p-syria",
  title: "P2P Syria",
  subtitle: "SaaS Peer-to-Peer Financial Exchange Platform",
  category: "FinTech",
  featured: true,
  order: 2,
  shortDescription:
    "Architected and engineered a SaaS peer-to-peer financial transfer platform with real-time transaction tracking and robust security protocols.",
  overview:
    "P2P Syria is a SaaS-based FinTech platform built at Geexar to facilitate secure peer-to-peer financial interactions. As a Senior Flutter Developer, Mohamed was responsible for designing the core application architecture, establishing real-time transaction notifications via WebSockets/Push channels, and ensuring deterministic UI updates under variable network conditions.",
  role: "Senior Flutter Developer",
  company: "Geexar",
  period: "Mar. 2024 – Jun. 2025",
  technologies: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC",
    "Socket.io",
    "RESTful APIs",
    "Secure Token Management",
    "SQLite",
  ],
  architecture: [
    "Modular architecture with isolated payment flow modules",
    "Real-time bidirectional event pipeline bridging Socket.io to BLoC streams",
    "Encrypted local transaction journal for offline verification",
  ],
  architectureLayers: [
    {
      name: "Presentation Layer",
      responsibility: "Real-time exchange rates, interactive transfer wizard, and push-driven dispute alerts.",
      components: ["P2PTransferBloc", "ExchangeFeedBloc", "LiveStatusIndicator"],
    },
    {
      name: "Domain Layer",
      responsibility: "Verification workflows, escrow release use cases, and peer reputation validations.",
      components: ["InitiateTransferUseCase", "ConfirmReceiptUseCase", "P2PRepositoryInterface"],
    },
    {
      name: "Data & Real-time Layer",
      responsibility: "Socket event multiplexing, REST API clients, and SQLite transaction logs.",
      components: ["P2PSocketClient", "P2PRemoteDataSource", "LocalTransactionCache"],
    },
  ],
  problem:
    "Peer-to-peer money transfers need instantaneous confirmation and resilient connection handling so users never second-guess whether funds were sent or received.",
  responsibilities: [
    "Architected the P2P transfer interface and state pipelines.",
    "Integrated real-time socket listeners with fallback HTTP polling mechanisms.",
    "Mentored developers on handling streaming asynchronous Dart patterns.",
    "Participated in sprint planning, architecture reviews, and QA verification cycles.",
  ],
  challenges: [
    "Managing WebSocket connection drops during transfers without causing duplicated actions.",
    "Presenting rapid status transitions (Pending → Held in Escrow → Completed) accurately without UI flickering.",
  ],
  solutions: [
    "Built a heartbeat and reconnection strategy with exponential backoff and transaction handshake verification.",
    "Implemented optimistic UI updates guarded by server reconciliation events.",
  ],
  engineeringDecisions: [
    {
      title: "Real-Time Socket Connection with Fallback Long-Polling",
      context: "Mobile network instability can interrupt persistent sockets.",
      decision: "Implemented dual-mode transport: persistent Socket.io with seamless failover to authenticated REST polling.",
      tradeOff: "Added complexity in synchronization state machines.",
      result: "Guaranteed real-time responsiveness without losing status integrity when networks degrade.",
    },
  ],
  features: [
    "Peer-to-peer funds transfer with multi-currency quotation",
    "Real-time transaction status updates and instant alerts",
    "Encrypted recipient address book with offline caching",
    "Multi-factor authentication and transfer verification pin",
  ],
  outcomes: [
    "Shipped a resilient financial exchange mobile experience on schedule.",
    "Expanded user adoption and enabled scalable revenue streams for Geexar's fintech ecosystem.",
  ],
  tags: ["FinTech", "P2P", "SaaS", "Real-Time", "Socket.io"],
  relatedProjectSlugs: ["lirat", "card-app"],
};
