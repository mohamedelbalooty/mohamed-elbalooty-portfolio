export interface ArticleSection {
  heading: string;
  body: string[];
  codeBlock?: {
    language: string;
    code: string;
  };
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  author: string;
  sections: ArticleSection[];
  relatedProjectSlugs?: string[];
}

export const articles: Article[] = [
  {
    slug: "designing-maintainable-flutter-clean-architecture",
    title: "Designing Maintainable Flutter Clean Architecture for Production Scale",
    summary:
      "A deep dive into enforcing boundaries between Presentation, Domain, and Data layers in enterprise Flutter applications to isolate business rules from framework volatility.",
    publishedAt: "2025-11-15",
    readingTime: "7 min read",
    author: "Mohamed Elbalooty",
    tags: ["Flutter", "Clean Architecture", "BLoC", "Software Engineering"],
    relatedProjectSlugs: ["lirat", "white-labeled-ecommerce"],
    sections: [
      {
        heading: "The Core Problem: UI-Coupled Business Logic",
        body: [
          "In many Flutter codebases, the boundary between UI widgets, state containers, and HTTP clients easily blurs. When an API schema changes or a state management library evolves, massive refactoring sweeps through view files.",
          "Clean Architecture solves this by introducing strict dependency inversion: business rules (entities and use cases) sit at the center of the application and have zero dependencies on Flutter widgets or third-party network packages.",
        ],
      },
      {
        heading: "Separating into Three Distinct Layers",
        body: [
          "1. Presentation Layer: Responsible solely for rendering widgets, listening to BLoC states, and dispatching user intents. No HTTP calls or database logic ever touch this layer.",
          "2. Domain Layer: The pure Dart core of the application. It defines entity models, business rules, and repository interfaces. It can be compiled and unit tested without the Flutter test framework.",
          "3. Data Layer: Implements the repository interfaces defined in the domain layer. It communicates with REST APIs, GraphQL endpoints, local SQLite databases, or encrypted secure key stores.",
        ],
        codeBlock: {
          language: "dart",
          code: `// Domain: Pure use case with no Flutter dependency
class TransferFundsUseCase {
  final WalletRepository repository;
  
  TransferFundsUseCase(this.repository);

  Future<Either<Failure, TransactionReceipt>> call(TransferParams params) async {
    if (params.amount <= 0) {
      return Left(InvalidAmountFailure());
    }
    return await repository.executeTransfer(params);
  }
}`,
        },
      },
      {
        heading: "Managing Boundaries with Dependency Injection",
        body: [
          "By employing service locators or constructor injection, use cases depend strictly on abstract repository interfaces rather than concrete network implementations.",
          "This architecture makes mocking and unit testing trivial: unit tests execute use cases against in-memory mock repositories, verifying edge cases in milliseconds without spinning up emulators.",
        ],
      },
    ],
  },
  {
    slug: "fintech-mobile-engineering-zero-tolerance-for-failure",
    title: "FinTech Mobile Engineering: Architecting Zero-Tolerance Payment Flows",
    summary:
      "Strategies for building resilient mobile financial interfaces: idempotency keys, atomic state locking, and graceful network recovery in digital wallets.",
    publishedAt: "2025-08-20",
    readingTime: "6 min read",
    author: "Mohamed Elbalooty",
    tags: ["FinTech", "Mobile Security", "Idempotency", "Flutter"],
    relatedProjectSlugs: ["lirat", "p2p-syria", "card-app"],
    sections: [
      {
        heading: "The Fragility of the Mobile Edge",
        body: [
          "Mobile networks are inherently unreliable. A user walking through an underground station or switching between Wi-Fi and 5G can experience connection dropouts right as they tap 'Confirm Payment'.",
          "In a standard e-commerce app, a failed network call might prompt a simple retry button. In FinTech, an unguarded retry can result in double debiting a bank account or creating duplicate ledger entries.",
        ],
      },
      {
        heading: "Client-Side Idempotency & State Locking",
        body: [
          "To eliminate duplicate transactions, every financial payment request must generate a deterministic UUIDv4 idempotency key before dispatch. This key is sent in HTTP headers (e.g. 'Idempotency-Key: <UUID>').",
          "Simultaneously, the UI BLoC immediately transitions into an immutable 'TransactionInFlight' state, physically disabling tap inputs and back navigation until a cryptographic acknowledgment or explicit timeout occurs.",
        ],
        codeBlock: {
          language: "dart",
          code: `// Deterministic idempotency key pattern
Future<void> onConfirmPayment(PaymentEvent event, Emitter<PaymentState> emit) async {
  if (state is PaymentInFlight) return; // Prevent double tap
  
  final idempotencyKey = uuid.v4();
  emit(PaymentInFlight(idempotencyKey));

  final result = await processPaymentUseCase(
    PaymentParams(amount: event.amount, key: idempotencyKey),
  );
  
  result.fold(
    (failure) => emit(PaymentFailed(failure)),
    (receipt) => emit(PaymentSuccess(receipt)),
  );
}`,
        },
      },
      {
        heading: "Graceful Token Refresh without User Disruption",
        body: [
          "Financial sessions require short-lived JWT access tokens and secure refresh mechanisms. By intercepting HTTP 401 responses with a synchronized queue, expired tokens are refreshed in the background and queued requests are replayed transparently.",
        ],
      },
    ],
  },
  {
    slug: "ai-assisted-flutter-development-multiplier",
    title: "AI as an Engineering Multiplier in Production Flutter Teams",
    summary:
      "How senior mobile engineers leverage modern AI tools (Claude, Cursor, Copilot) to accelerate boilerplate generation, test synthesis, and API modeling while preserving architecture discipline.",
    publishedAt: "2026-01-10",
    readingTime: "5 min read",
    author: "Mohamed Elbalooty",
    tags: ["AI", "Developer Experience", "Team Leadership", "Productivity"],
    relatedProjectSlugs: ["lirat", "white-labeled-ecommerce"],
    sections: [
      {
        heading: "AI as a Multiplier, Not a Substitute for Judgment",
        body: [
          "There is a stark difference between treating AI as a code generator and using it as a specialized engineering multiplier. Without architectural guardrails, AI can generate messy, tightly coupled code that accumulates massive technical debt.",
          "As a team lead, I treat AI tools like Cursor, Claude, and GitHub Copilot as acceleration tools for repetitive tasks: generating JSON serialization mappers, synthesizing parameterized unit test matrices, and drafting boilerplate data classes.",
        ],
      },
      {
        heading: "Practical Workflows That Save Hours",
        body: [
          "1. API Contract to Dart Model Generation: Feeding OpenAPI/Swagger specifications into AI prompts to generate strongly typed Freezed or JSON-serializable Dart entities complete with null-safety checks.",
          "2. Test Matrix Expansion: Providing a complex financial use case and having AI generate comprehensive boundary test fixtures (zero values, negative numbers, precision rounding issues, timeout simulations).",
          "3. RFC & Architecture Documentation: Rapidly producing architectural tradeoff documents comparing state management strategies or evaluating third-party SDK dependencies before committing team sprint resources.",
        ],
      },
    ],
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
