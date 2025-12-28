# Kasparro Frontend Engineering Assignment

A comprehensive frontend implementation for Kasparro's AI-native SEO & Brand Intelligence platform, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`.

## 📁 Folder Structure

```
├── app/                          # Next.js App Router pages
│   ├── app/                     # Dashboard routes (authenticated shell)
│   │   ├── dashboard/           # Brand snapshot dashboard
│   │   ├── audit/               # Core audit interface
│   │   ├── architecture/        # System architecture visualization
│   │   └── layout.tsx           # Dashboard layout wrapper
│   ├── platform/                # Product overview page
│   ├── about/                   # About page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── dashboard/               # Dashboard-specific components
│   │   ├── BrandSelector.tsx   # Brand selection dropdown
│   │   ├── ScoreCard.tsx        # Reusable score display card
│   │   ├── AuditModuleSidebar.tsx # Module navigation sidebar
│   │   └── ModuleDetails.tsx    # Detailed module view
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Public site header
│   │   ├── Footer.tsx           # Public site footer
│   │   └── DashboardLayout.tsx  # Dashboard layout
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── select.tsx
│       ├── badge.tsx
│       └── separator.tsx
├── data/                         # Mocked JSON data
│   ├── brands.json              # Brand definitions
│   ├── brand-snapshots.json     # Dashboard snapshot data
│   ├── audit-modules.json       # Module metadata
│   └── audit-data/              # Per-brand audit results
│       └── brand-1.json         # Complete audit data
├── lib/                          # Utilities and core logic
│   ├── types.ts                 # TypeScript type definitions
│   ├── store.ts                 # Zustand state management
│   ├── data-loader.ts           # Data loading utilities
│   └── utils.ts                 # Helper functions (cn, etc.)
└── public/                       # Static assets
```

## 🏗️ Architecture Decisions

### Component Architecture

The application follows a clear separation of concerns:

1. **Layout Components** (`components/layout/`)
   - Reusable layout structures for public and dashboard sections
   - Handle navigation and page structure

2. **Feature Components** (`components/dashboard/`)
   - Domain-specific components for dashboard functionality
   - Encapsulate business logic and data presentation

3. **UI Primitives** (`components/ui/`)
   - Reusable, unstyled components from shadcn/ui
   - Provide consistent design system foundation

4. **Page Components** (`app/`)
   - Route-level components that compose features
   - Handle data fetching and page-level logic

### Data Modeling

All data is strongly typed using TypeScript interfaces defined in `lib/types.ts`:

- `Brand`: Brand entity definition
- `AuditModule`: Complete audit module with scores, insights, issues, recommendations
- `AuditIssue`: Individual issue with severity and metadata
- `BrandSnapshot`: Dashboard-level summary metrics
- `AuditData`: Complete audit result set
- `SystemComponent`: Architecture visualization data

Data is stored as JSON files in the `data/` directory and loaded through typed utilities, ensuring type safety throughout the application.

### State Management

State is managed using Zustand (`lib/store.ts`) for:

- **Selected Brand ID**: Tracks which brand is currently selected
- **Selected Module ID**: Tracks which audit module is being viewed

This approach provides:
- Simple, predictable state updates
- No prop drilling
- Easy integration with React components
- Minimal boilerplate

### Routing Structure

**Public Routes:**
- `/` - Home page with value proposition and overview
- `/platform` - Product explainer and technical details
- `/about` - Mission, philosophy, and vision

**Dashboard Routes** (under `/app`):
- `/app/dashboard` - Brand snapshot with key metrics
- `/app/audit` - Core audit interface with module navigation
- `/app/architecture` - System architecture visualization

### Styling Approach

- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **shadcn/ui**: Pre-built, accessible component primitives
- **CSS Variables**: Theming support through Tailwind's CSS variable system
- **Responsive Design**: Mobile-first approach with breakpoint utilities

## 🎨 Design Decisions

### Visual Style

- **Clean, Modern Aesthetic**: Minimal design focused on content clarity
- **Data-Dense but Readable**: Careful use of spacing, typography, and hierarchy
- **Color-Coded Scores**: Green (80+), Yellow (60-79), Red (<60) for quick visual assessment
- **Subtle Interactions**: Hover states and transitions for better UX

### UX Patterns

1. **Progressive Disclosure**: Dashboard shows high-level metrics, audit shows detailed analysis
2. **Clear Navigation**: Sidebar for modules, top nav for main sections
3. **Contextual Information**: Each module shows score, insights, issues, and recommendations
4. **Empty States**: Helpful messages when no brand/module is selected

### Component Reusability

- `ScoreCard`: Reusable for any numeric score display
- `ModuleDetails`: Consistent presentation across all audit modules
- `AuditModuleSidebar`: Handles module navigation and selection state
- Layout components shared across public and dashboard sections

## 🔧 Technical Implementation

### Type Safety

All data structures are typed, ensuring:
- Compile-time error checking
- Better IDE autocomplete
- Self-documenting code
- Refactoring safety

### Data Loading

- Static JSON imports for type-safe data loading
- `data-loader.ts` utility provides a clean interface for accessing audit data
- Easy to extend with API calls in the future

### Performance Considerations

- Client-side state management for instant UI updates
- No unnecessary re-renders through proper React patterns
- Efficient data structures for lookups
- Lazy loading ready (can be added for large datasets)

## 📊 Data Structure

### Audit Module Structure

Each audit module contains:
- **Score**: Numeric score out of max score (typically 100)
- **Insights**: Array of key findings
- **Issues**: Array of problems with severity ratings
- **Recommendations**: Actionable improvement suggestions

### Brand Snapshot

Dashboard-level metrics:
- AI Visibility Score
- Trust / EEAT Score
- Non-Branded Keyword Coverage
- Last Audit Timestamp

## 🎯 Tradeoffs Made

### Scope vs. Completeness

- **Chose**: Focused on core functionality with clean architecture
- **Tradeoff**: Some advanced features (dark mode, animations) left as optional bonuses
- **Rationale**: Better to demonstrate solid fundamentals than rushed features

### Static Data vs. API

- **Chose**: Static JSON files for mocked data
- **Tradeoff**: Not a real backend integration
- **Rationale**: Assignment explicitly allows mocked data; structure ready for API integration

### Component Granularity

- **Chose**: Medium-grained components (not over-abstracted)
- **Tradeoff**: Some components could be split further
- **Rationale**: Balance between reusability and maintainability

### State Management Complexity

- **Chose**: Simple Zustand store for global state
- **Tradeoff**: Could use React Context or more complex state management
- **Rationale**: Fits the use case perfectly; easy to understand and maintain

## 🚧 Future Enhancements

If this were a production application, I would add:

1. **API Integration**: Replace static JSON with real API calls
2. **Authentication**: User login and session management
3. **Dark Mode**: Theme switching (bonus feature)
4. **Loading States**: Skeleton loaders for better perceived performance
5. **Error Handling**: Comprehensive error boundaries and user feedback
6. **Testing**: Unit tests for components and integration tests for flows
7. **Accessibility**: Enhanced ARIA labels and keyboard navigation
8. **Performance**: Code splitting, image optimization, caching strategies
9. **Analytics**: User interaction tracking
10. **Real-time Updates**: WebSocket integration for live audit progress

## 📝 Assumptions & Shortcuts

1. **Single Brand Audit Data**: Only `brand-1.json` has complete audit data; other brands use it as fallback
2. **No Authentication**: Dashboard is accessible without login (as per assignment)
3. **Static Routing**: All routes are statically generated
4. **No Error Boundaries**: Basic error handling (would add in production)
5. **Simplified Architecture View**: Visual representation is conceptual, not a real system diagram
6. **No Data Validation**: Assumes JSON data is always valid (would add validation in production)

## 🎓 Learning & Growth

This assignment demonstrates:

- **System Thinking**: How to structure a complex frontend application
- **Component Design**: Clear boundaries and responsibilities
- **Data Modeling**: Type-safe data structures and interfaces
- **State Management**: Clean, predictable state flow
- **UX Clarity**: Presenting complex, data-dense information clearly
- **Engineering Discipline**: Code organization, naming, and maintainability

## 📦 Dependencies

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **shadcn/ui**: Component library
- **Zustand**: State management
- **Framer Motion**: Animations (available but minimal usage)
- **Lucide React**: Icons

## 🚀 Deployment

The application is ready for deployment on Vercel:

```bash
# Build the application
npm run build

# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📄 License

This is an assignment submission for Kasparro's frontend engineering position.

---

**Built with attention to detail, clear architecture, and engineering discipline.**
