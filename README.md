File Structure 


client/
│
├── app/                        // Next.js App Router (সব Page ও Route এখানে থাকবে)
│
│   ├── (public)/               // Public Pages (Login ছাড়াই সবাই দেখতে পারবে)
│   │   ├── page.tsx            // Homepage
│   │   ├── gigs/               // All Gigs, Gig Details
│   │   ├── categories/         // Categories List & Category Details
│   │   ├── sellers/            // All Sellers & Seller Profile
│   │   ├── about/              // About Us
│   │   ├── contact/            // Contact Page
│   │   ├── faq/                // FAQ
│   │   └── terms/              // Terms & Privacy
│   │
│   ├── (auth)/                 // Authentication Pages
│   │   ├── login/              // Login Form
│   │   ├── register/           // Register Form
│   │   ├── forgot-password/    // Forgot Password
│   │   ├── verify-email/       // Email Verification
│   │   └── reset-password/     // Reset Password
│   │
│   ├── buyer/                  // Buyer Dashboard
│   │   ├── dashboard/          // Dashboard Overview
│   │   ├── orders/             // My Orders
│   │   ├── wishlist/           // Saved Gigs
│   │   ├── cart/               // Shopping Cart
│   │   ├── checkout/           // Payment Page
│   │   ├── messages/           // Chat
│   │   ├── reviews/            // Reviews Given
│   │   ├── profile/            // Buyer Profile
│   │   └── settings/           // Account Settings
│   │
│   ├── seller/                 // Seller Dashboard
│   │   ├── dashboard/          // Dashboard Overview
│   │   ├── gigs/               // My Gigs
│   │   ├── create-gig/         // Create New Gig
│   │   ├── edit-gig/           // Edit Gig
│   │   ├── orders/             // Seller Orders
│   │   ├── earnings/           // Earnings & Wallet
│   │   ├── portfolio/          // Portfolio
│   │   ├── reviews/            // Client Reviews
│   │   ├── analytics/          // Views, Sales, Revenue
│   │   └── settings/           // Seller Settings
│   │
│   ├── admin/                  // Admin Dashboard
│   │   ├── dashboard/          // Overview
│   │   ├── users/              // Manage Users
│   │   ├── sellers/            // Verify Sellers
│   │   ├── gigs/               // Approve/Delete Gigs
│   │   ├── orders/             // All Orders
│   │   ├── payments/           // Transactions
│   │   ├── categories/         // Manage Categories
│   │   ├── reports/            // User Reports
│   │   ├── analytics/          // Website Analytics
│   │   └── settings/           // Admin Settings
│   │
│   └── api/                    // Next.js API (যদি ব্যবহার করো)
│
├── components/                 // Reusable Components
│
│   ├── shared/                 // Navbar, Footer, Sidebar, Logo
│   ├── ui/                     // Button, Input, Modal, Badge, Avatar
│   ├── buyer/                  // Buyer-specific Components
│   ├── seller/                 // Seller-specific Components
│   ├── admin/                  // Admin-specific Components
│   ├── forms/                  // LoginForm, RegisterForm, GigForm
│   ├── cards/                  // GigCard, SellerCard, ReviewCard
│   ├── tables/                 // OrdersTable, UsersTable
│   ├── charts/                 // Revenue Chart, Analytics Chart
│   ├── dialogs/                // Confirm Dialog, Delete Dialog
│   ├── layouts/                // Dashboard Layout, Auth Layout
│   └── loaders/                // Spinner, Skeleton Loader
│
├── hooks/                      // Custom React Hooks
│   ├── useAuth.ts
│   ├── useRole.ts
│   ├── useUser.ts
│   ├── useSocket.ts
│   ├── useDebounce.ts
│   └── usePagination.ts
│
├── services/                   // API Calls
│   ├── auth.ts
│   ├── user.ts
│   ├── gig.ts
│   ├── order.ts
│   ├── payment.ts
│   ├── review.ts
│   ├── message.ts
│   └── notification.ts
│
├── lib/                        // Configuration
│   ├── axios.ts                // Axios Instance
│   ├── socket.ts               // Socket Connection
│   ├── auth.ts                 // Auth Helper
│   └── queryClient.ts          // TanStack Query Client
│
├── providers/                  // React Providers
│   ├── QueryProvider.tsx
│   ├── ThemeProvider.tsx
│   ├── SessionProvider.tsx
│   └── SocketProvider.tsx
│
├── types/                      // TypeScript Types
│   ├── user.ts
│   ├── gig.ts
│   ├── order.ts
│   ├── review.ts
│   └── api.ts
│
├── constants/                  // Constant Data
│   ├── roles.ts
│   ├── categories.ts
│   ├── routes.ts
│   └── status.ts
│
├── utils/                      // Helper Functions
│   ├── formatDate.ts
│   ├── formatCurrency.ts
│   ├── generateSlug.ts
│   ├── calculateRating.ts
│   └── validators.ts
│
├── middleware.ts               // Route Protection (Role-based Access)
│
├── styles/
│   └── globals.css
│
└── public/                     // Static Assets
    ├── images/
    ├── icons/
    ├── logos/
    └── favicon.ico