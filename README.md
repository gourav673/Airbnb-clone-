This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# TripBooking - Full-Stack Vacation Rental Platform

## Description

TripBooking is a modern, full-stack vacation rental platform inspired by Airbnb. It allows users to discover, list, book, and manage vacation properties. The application is built with Next.js (App Router) for a reactive frontend and robust backend capabilities, Prisma as the ORM for MongoDB, NextAuth.js for authentication, and Tailwind CSS for styling.

## Features

- **User Authentication:** Secure user registration and login using:
  - Email/Password (Credentials)
  - OAuth (GitHub, Google) via NextAuth.js
- **Property Listing Management:**
  - Users can create, view, update, and delete their property listings.
  - Detailed property pages with image galleries, descriptions, amenities, and location.
- **Advanced Search & Filtering:**
  - Search properties by location, dates, number of guests, and category.
  - Interactive map view (potential feature).
- **Image Uploads:** Seamless image uploads for property listings, handled by Cloudinary.
- **Favorites/Wishlist:** Users can save their favorite properties for later viewing.
- **Booking & Reservation System:**
  - Users can book available properties for specific dates.
  - View and manage their trips (bookings they've made).
  - Property owners can view and manage reservations for their listings.
- **Responsive Design:** User interface adapts to various screen sizes (desktop, tablet, mobile).
- **User Profiles:** (Implicit) Users can manage their listings, bookings, and favorite properties.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Frontend:** React, TypeScript, Tailwind CSS
- **State Management:** React Hooks, Zustand (for global state like modals)
- **Backend:** Next.js API Routes & Server Actions
- **Database:** MongoDB
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **Image Management:** Cloudinary
- **Linting & Formatting:** ESLint, Prettier
- **UI Components:** (Potentially shadcn/ui or custom components)

## Prerequisites

- Node.js (v18.x or v20.x recommended)
- npm, yarn, or pnpm
- MongoDB (a local instance or a cloud-hosted solution like MongoDB Atlas)

## Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url> TripBooking
    cd TripBooking
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory of the project. Copy the contents of `.env.example` (if you have one) or use the structure below:

    ```env
    # Database
    DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"

    # NextAuth.js
    NEXTAUTH_URL="http://localhost:3000" # Important: Use your actual deployment URL in production
    NEXTAUTH_SECRET="YOUR_STRONG_RANDOM_SECRET_HERE" # Generate with: openssl rand -base64 32

    # GitHub OAuth Provider
    GITHUB_ID="YOUR_GITHUB_CLIENT_ID"
    GITHUB_SECRET="YOUR_GITHUB_CLIENT_SECRET"

    # Google OAuth Provider
    GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
    GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

    # Cloudinary (for image uploads)
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="YOUR_CLOUDINARY_CLOUD_NAME"
    # Optional: If using backend-signed uploads (recommended for security)
    # CLOUDINARY_API_KEY="YOUR_CLOUDINARY_API_KEY"
    # CLOUDINARY_API_SECRET="YOUR_CLOUDINARY_API_SECRET"
    ```

    **Note:** For `NEXTAUTH_URL`, use `http://localhost:3000` for local development. For production, this **must** be the canonical URL of your deployed application.

4.  **Generate Prisma Client:**
    Ensure your database is running and accessible with the `DATABASE_URL` provided.

    ```bash
    npx prisma generate
    ```

5.  **Run Database Migrations (if you have migration files):**
    If you are starting a new database or have defined your schema and want to apply it:
    ```bash
    npx prisma migrate dev --name init
    ```
    (Replace `init` with a descriptive migration name if needed.)

## Running the Application

### 1. Development Mode

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
```

The application will start on `http://localhost:3000` (or the port specified if you've configured it differently).

### 2. Production Mode

First, build the application:

```bash
npm run build
# or
# yarn build
# or
# pnpm build
```

Then, start the production server:

```bash
npm run start
# or
# yarn start
# or
# pnpm start
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server (after building).
- `npm run lint`: Lints the codebase using ESLint.
- `npx prisma generate`: Generates/updates the Prisma Client based on your schema.
- `npx prisma migrate dev`: Creates and applies database migrations during development.
- `npx prisma studio`: Opens Prisma Studio, a GUI for your database.

## API Endpoints & Server Actions Overview

The application utilizes Next.js API Routes and Server Actions for backend logic.

### Key API Routes (under `app/(api)/`):

- **`/api/auth/[...nextauth]`**: Handled by NextAuth.js for all authentication operations (sign-in, sign-out, callbacks, session management).
- **`POST /api/register`**: Handles new user registration (for credentials-based auth).
- **`POST /api/listings`**: Creates a new property listing.
- **`GET /api/listings`**: (Potentially) Fetches listings with filters (though `getListings` Server Action is primary for page loads).
- **`DELETE /api/listings/:listingId`**: Deletes a property listing.
- **`POST /api/reservations`**: Creates a new booking/reservation.
- **`DELETE /api/reservations/:reservationId`**: Cancels/deletes a reservation.
- **`POST /api/favorites/:listingId`**: Adds a listing to the user's favorites.
- **`DELETE /api/favorites/:listingId`**: Removes a listing from the user's favorites.

### Key Server Actions (under `app/actions/`):

These functions are called directly from Server or Client Components for data fetching and mutations.

- `getCurrentUser()`: Fetches the currently authenticated user's data.
- `getListings(params)`: Fetches property listings based on various filter criteria.
- `getListingById(listingId)`: Fetches details for a single property listing.
- `getReservations(params)`: Fetches reservations based on criteria (e.g., for a user's trips, or for a property owner's listings).
- `getFavoriteListings()`: Fetches all listings favorited by the current user.

## Project Structure

TripBooking/
├── .vscode/ # VS Code editor settings (optional, e.g., extensions.json, settings.json)
│ └── settings.json
├── app/
│ ├── (api)/ # Group for API Routes (not part of URL path)
│ │ ├── auth/
│ │ │ └── [...nextauth]/
│ │ │ └── route.ts # NextAuth.js authentication handler
│ │ ├── listings/
│ │ │ ├── [listingId]/ # API routes for specific listings (e.g., reservations, updates)
│ │ │ │ └── route.ts
│ │ │ └── route.ts # API for creating/fetching all listings
│ │ ├── register/
│ │ │ └── route.ts # User registration API endpoint
│ │ └── reservations/
│ │ ├── [reservationId]/
│ │ │ └── route.ts # API for deleting/updating a specific reservation
│ │ └── route.ts # API for creating/fetching reservations
│ ├── (components)/ # Group for Reusable UI Components
│ │ ├── Avatar.tsx
│ │ ├── Button.tsx
│ │ ├── ClientOnly.tsx # Utility to ensure component renders only on client
│ │ ├── Container.tsx # Layout component for consistent padding/width
│ │ ├── EmptyState.tsx # Component for displaying when no data is available
│ │ ├── Heading.tsx # Reusable heading component
│ │ ├── HeartButton.tsx # Favorite/like button component
│ │ ├── inputs/ # Directory for various input field components
│ │ │ ├── Calendar.tsx
│ │ │ ├── CategoryInput.tsx
│ │ │ ├── Counter.tsx
│ │ │ ├── CountrySelect.tsx
│ │ │ ├── ImageUpload.tsx
│ │ │ └── Input.tsx # Generic text input component
│ │ ├── listings/ # Components specific to displaying listing information
│ │ │ ├── ListingCard.tsx # Card view for a single listing
│ │ │ ├── ListingCategory.tsx
│ │ │ ├── ListingHead.tsx # Header section for a listing detail page
│ │ │ ├── ListingInfo.tsx # Informational section for a listing detail page
│ │ │ └── ListingReservation.tsx # Reservation widget for a listing detail page
│ │ ├── Modals/ # Directory for modal dialog components
│ │ │ ├── LoginModal.tsx
│ │ │ ├── Modal.tsx # Base/generic modal structure
│ │ │ ├── RegisterModal.tsx
│ │ │ ├── RentModal.tsx # Modal for creating new listings/trips
│ │ │ └── SearchModal.tsx
│ │ └── navbar/ # Components related to the navigation bar
│ │ ├── Categories.tsx # Component to display listing categories
│ │ ├── Logo.tsx
│ │ ├── MenuItem.tsx # Individual item in a dropdown menu
│ │ ├── Search.tsx # Search bar component
│ │ ├── UserMenu.tsx # User avatar and dropdown menu
│ │ └── index.tsx # Main Navbar component orchestrating navbar elements
│ ├── (hooks)/ # Group for Custom React Hooks
│ │ ├── useCountries.ts # Hook for country data (e.g., for CountrySelect)
│ │ ├── useFavorite.ts # Hook for managing favorite status of listings
│ │ ├── useLoginModal.ts # Hook for controlling LoginModal visibility (Zustand store)
│ │ ├── useRegisterModal.ts # Hook for controlling RegisterModal visibility (Zustand store)
│ │ ├── useRentModal.ts # Hook for controlling RentModal visibility (Zustand store)
│ │ └── useSearchModal.ts # Hook for controlling SearchModal visibility (Zustand store)
│ ├── (libs)/ # Group for Libraries and helper utilities
│ │ └── prismadb.ts # Prisma client instance and initialization
│ ├── (providers)/ # Group for Global context providers
│ │ ├── ModalProvider.tsx # Provider to manage and render all modals globally
│ │ └── ToasterProvider.tsx # Provider for displaying toast notifications
│ ├── (types)/ # Group for TypeScript type definitions
│ │ └── index.ts # Aggregated type exports (e.g., SafeUser, SafeListing, SafeReservation)
│ ├── actions/ # Server Actions / Data fetching logic (server-side functions)
│ │ ├── getCurrentUser.ts
│ │ ├── getFavoriteListings.ts
│ │ ├── getListingById.ts
│ │ ├── getListings.ts # Action to fetch multiple listings with parameters
│ │ └── getReservations.ts
│ ├── favorites/ # Route for displaying user's favorite listings
│ │ ├── FavoritesClient.tsx # Client component for the favorites page
│ │ └── page.tsx # Server component for /favorites route
│ ├── listings/
│ │ └── [listingId]/ # Dynamic route for individual listing details
│ │ ├── ListingClient.tsx # Client component for the listing detail page
│ │ └── page.tsx # Server component for /listings/[listingId] route
│ ├── properties/ # Route for displaying listings created by the current user
│ │ ├── PropertiesClient.tsx # Client component for the properties page
│ │ └── page.tsx # Server component for /properties route
│ ├── reservations/ # Route for displaying reservations made on current user's listings
│ │ ├── ReservationsClient.tsx # Client component for the reservations page
│ │ └── page.tsx # Server component for /reservations route
│ ├── trips/ # Route for displaying trips booked by the current user
│ │ ├── TripsClient.tsx # Client component for the trips page
│ │ └── page.tsx # Server component for /trips route
│ ├── error.tsx # App-level error boundary file for handling runtime errors
│ ├── globals.css # Global styles, often including Tailwind base styles and custom global CSS
│ ├── layout.tsx # Root layout for the entire application
│ ├── loading.tsx # Default loading UI for suspense boundaries
│ └── page.tsx # Homepage of the application (root page)
├── node_modules/ # Directory where project dependencies are installed (managed by npm/yarn/pnpm)
├── prisma/
│ ├── migrations/ # Database migration files generated by Prisma
│ │ └── ... (folders for each migration)
│ └── schema.prisma # Prisma schema definition file (models, relations, datasource, generator)
├── public/ # Static assets that are served directly
│ ├── images/
│ │ └── placeholder.jpg # Example placeholder image
│ └── favicon.ico # Favicon for the website
├── .env # Environment variables (DATABASE_URL, NEXTAUTH_SECRET, etc. - should be in .gitignore)
├── .env.example # Example environment variables file for guidance
├── .eslintignore # Files/patterns for ESLint to ignore
├── eslint.config.mjs # ESLint configuration file (as provided by you)
├── .gitignore # Specifies intentionally untracked files that Git should ignore (e.g., node_modules, .env, .next)
├── components.json # Configuration for UI libraries like shadcn/ui if used
├── next-auth.d.ts # TypeScript declaration file for extending NextAuth.js types
├── next.config.mjs # Next.js configuration file (e.g., image domains, experimental features)
├── package-lock.json # Records exact versions of dependencies (if using npm)
├── yarn.lock # Records exact versions of dependencies (if using yarn)
├── pnpm-lock.yaml # Records exact versions of dependencies (if using pnpm)
├── package.json # Project metadata, dependencies, and scripts (e.g., "dev", "build", "start", "lint")
├── postcss.config.mjs # PostCSS configuration (primarily for Tailwind CSS and autoprefixer)
├── README.md # Project documentation: setup, overview, features, etc.
└── tsconfig.json # TypeScript compiler configuration (paths, strictness, target, etc.)

## Deployment

This Next.js application is well-suited for deployment on platforms like:

- **Vercel:** (Recommended) Offers seamless deployment for Next.js projects.
- **Netlify:** Good support for Next.js.
- Other platforms supporting Node.js applications.

Ensure your environment variables (especially `DATABASE_URL`, `NEXTAUTH_URL`, and `NEXTAUTH_SECRET`) are correctly configured on your deployment platform.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate if they exist.

## License

(Choose a license, e.g., MIT, ISC. If unsure, MIT is a common choice.)

Example:
[MIT](https://opensource.org/licenses/MIT)

````

Remember to replace placeholders like `<your-repository-url>` and choose a license. You can also add more specific details to sections like "Deployment" or "Contributing" as your project evolves.# TripBooking - Full-Stack Vacation Rental Platform

## Description

TripBooking is a modern, full-stack vacation rental platform inspired by Airbnb. It allows users to discover, list, book, and manage vacation properties. The application is built with Next.js (App Router) for a reactive frontend and robust backend capabilities, Prisma as the ORM for MongoDB, NextAuth.js for authentication, and Tailwind CSS for styling.

## Features

-   **User Authentication:** Secure user registration and login using:
    -   Email/Password (Credentials)
    -   OAuth (GitHub, Google) via NextAuth.js
-   **Property Listing Management:**
    -   Users can create, view, update, and delete their property listings.
    -   Detailed property pages with image galleries, descriptions, amenities, and location.
-   **Advanced Search & Filtering:**
    -   Search properties by location, dates, number of guests, and category.
    -   Interactive map view (potential feature).
-   **Image Uploads:** Seamless image uploads for property listings, handled by Cloudinary.
-   **Favorites/Wishlist:** Users can save their favorite properties for later viewing.
-   **Booking & Reservation System:**
    -   Users can book available properties for specific dates.
    -   View and manage their trips (bookings they've made).
    -   Property owners can view and manage reservations for their listings.
-   **Responsive Design:** User interface adapts to various screen sizes (desktop, tablet, mobile).
-   **User Profiles:** (Implicit) Users can manage their listings, bookings, and favorite properties.

## Tech Stack

-   **Framework:** Next.js (App Router)
-   **Frontend:** React, TypeScript, Tailwind CSS
-   **State Management:** React Hooks, Zustand (for global state like modals)
-   **Backend:** Next.js API Routes & Server Actions
-   **Database:** MongoDB
-   **ORM:** Prisma
-   **Authentication:** NextAuth.js
-   **Image Management:** Cloudinary
-   **Linting & Formatting:** ESLint, Prettier
-   **UI Components:** (Potentially shadcn/ui or custom components)

## Prerequisites

-   Node.js (v18.x or v20.x recommended)
-   npm, yarn, or pnpm
-   MongoDB (a local instance or a cloud-hosted solution like MongoDB Atlas)

## Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url> TripBooking
    cd TripBooking
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory of the project. Copy the contents of `.env.example` (if you have one) or use the structure below:

    ```env
    # Database
    DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"

    # NextAuth.js
    NEXTAUTH_URL="http://localhost:3000" # Important: Use your actual deployment URL in production
    NEXTAUTH_SECRET="YOUR_STRONG_RANDOM_SECRET_HERE" # Generate with: openssl rand -base64 32

    # GitHub OAuth Provider
    GITHUB_ID="YOUR_GITHUB_CLIENT_ID"
    GITHUB_SECRET="YOUR_GITHUB_CLIENT_SECRET"

    # Google OAuth Provider
    GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
    GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

    # Cloudinary (for image uploads)
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="YOUR_CLOUDINARY_CLOUD_NAME"
    # Optional: If using backend-signed uploads (recommended for security)
    # CLOUDINARY_API_KEY="YOUR_CLOUDINARY_API_KEY"
    # CLOUDINARY_API_SECRET="YOUR_CLOUDINARY_API_SECRET"
    ```
    **Note:** For `NEXTAUTH_URL`, use `http://localhost:3000` for local development. For production, this **must** be the canonical URL of your deployed application.

4.  **Generate Prisma Client:**
    Ensure your database is running and accessible with the `DATABASE_URL` provided.
    ```bash
    npx prisma generate
    ```

5.  **Run Database Migrations (if you have migration files):**
    If you are starting a new database or have defined your schema and want to apply it:
    ```bash
    npx prisma migrate dev --name init
    ```
    (Replace `init` with a descriptive migration name if needed.)

## Running the Application

### 1. Development Mode

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
````

The application will start on `http://localhost:3000` (or the port specified if you've configured it differently).

### 2. Production Mode

First, build the application:

```bash
npm run build
# or
# yarn build
# or
# pnpm build
```

Then, start the production server:

```bash
npm run start
# or
# yarn start
# or
# pnpm start
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server (after building).
- `npm run lint`: Lints the codebase using ESLint.
- `npx prisma generate`: Generates/updates the Prisma Client based on your schema.
- `npx prisma migrate dev`: Creates and applies database migrations during development.
- `npx prisma studio`: Opens Prisma Studio, a GUI for your database.

## API Endpoints & Server Actions Overview

The application utilizes Next.js API Routes and Server Actions for backend logic.

### Key API Routes (under `app/(api)/`):

- **`/api/auth/[...nextauth]`**: Handled by NextAuth.js for all authentication operations (sign-in, sign-out, callbacks, session management).
- **`POST /api/register`**: Handles new user registration (for credentials-based auth).
- **`POST /api/listings`**: Creates a new property listing.
- **`GET /api/listings`**: (Potentially) Fetches listings with filters (though `getListings` Server Action is primary for page loads).
- **`DELETE /api/listings/:listingId`**: Deletes a property listing.
- **`POST /api/reservations`**: Creates a new booking/reservation.
- **`DELETE /api/reservations/:reservationId`**: Cancels/deletes a reservation.
- **`POST /api/favorites/:listingId`**: Adds a listing to the user's favorites.
- **`DELETE /api/favorites/:listingId`**: Removes a listing from the user's favorites.

### Key Server Actions (under `app/actions/`):

These functions are called directly from Server or Client Components for data fetching and mutations.

- `getCurrentUser()`: Fetches the currently authenticated user's data.
- `getListings(params)`: Fetches property listings based on various filter criteria.
- `getListingById(listingId)`: Fetches details for a single property listing.
- `getReservations(params)`: Fetches reservations based on criteria (e.g., for a user's trips, or for a property owner's listings).
- `getFavoriteListings()`: Fetches all listings favorited by the current user.

## Project Structure

```
TripBooking/
├── .vscode/                      # VS Code editor settings (optional, e.g., extensions.json, settings.json)
│   └── settings.json
├── app/
│   ├── (api)/                    # Group for API Routes (not part of URL path)
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts      # NextAuth.js authentication handler
│   │   ├── listings/
│   │   │   ├── [listingId]/      # API routes for specific listings (e.g., reservations, updates)
│   │   │   │   └── route.ts
│   │   │   └── route.ts          # API for creating/fetching all listings
│   │   ├── register/
│   │   │   └── route.ts          # User registration API endpoint
│   │   └── reservations/
│   │       ├── [reservationId]/
│   │       │   └── route.ts      # API for deleting/updating a specific reservation
│   │       └── route.ts          # API for creating/fetching reservations
│   ├── (components)/             # Group for Reusable UI Components
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx
│   │   ├── ClientOnly.tsx        # Utility to ensure component renders only on client
│   │   ├── Container.tsx         # Layout component for consistent padding/width
│   │   ├── EmptyState.tsx        # Component for displaying when no data is available
│   │   ├── Heading.tsx           # Reusable heading component
│   │   ├── HeartButton.tsx       # Favorite/like button component
│   │   ├── inputs/               # Directory for various input field components
│   │   │   ├── Calendar.tsx
│   │   │   ├── CategoryInput.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── CountrySelect.tsx
│   │   │   ├── ImageUpload.tsx
│   │   │   └── Input.tsx         # Generic text input component
│   │   ├── listings/             # Components specific to displaying listing information
│   │   │   ├── ListingCard.tsx   # Card view for a single listing
│   │   │   ├── ListingCategory.tsx
│   │   │   ├── ListingHead.tsx   # Header section for a listing detail page
│   │   │   ├── ListingInfo.tsx   # Informational section for a listing detail page
│   │   │   └── ListingReservation.tsx # Reservation widget for a listing detail page
│   │   ├── Modals/               # Directory for modal dialog components
│   │   │   ├── LoginModal.tsx
│   │   │   ├── Modal.tsx         # Base/generic modal structure
│   │   │   ├── RegisterModal.tsx
│   │   │   ├── RentModal.tsx     # Modal for creating new listings/trips
│   │   │   └── SearchModal.tsx
│   │   └── navbar/               # Components related to the navigation bar
│   │       ├── Categories.tsx    # Component to display listing categories
│   │       ├── Logo.tsx
│   │       ├── MenuItem.tsx      # Individual item in a dropdown menu
│   │       ├── Search.tsx        # Search bar component
│   │       ├── UserMenu.tsx      # User avatar and dropdown menu
│   │       └── index.tsx         # Main Navbar component orchestrating navbar elements
│   ├── (hooks)/                  # Group for Custom React Hooks
│   │   ├── useCountries.ts       # Hook for country data (e.g., for CountrySelect)
│   │   ├── useFavorite.ts        # Hook for managing favorite status of listings
│   │   ├── useLoginModal.ts      # Hook for controlling LoginModal visibility (Zustand store)
│   │   ├── useRegisterModal.ts   # Hook for controlling RegisterModal visibility (Zustand store)
│   │   ├── useRentModal.ts       # Hook for controlling RentModal visibility (Zustand store)
│   │   └── useSearchModal.ts     # Hook for controlling SearchModal visibility (Zustand store)
│   ├── (libs)/                   # Group for Libraries and helper utilities
│   │   └── prismadb.ts           # Prisma client instance and initialization
│   ├── (providers)/              # Group for Global context providers
│   │   ├── ModalProvider.tsx     # Provider to manage and render all modals globally
│   │   └── ToasterProvider.tsx   # Provider for displaying toast notifications
│   ├── (types)/                  # Group for TypeScript type definitions
│   │   └── index.ts              # Aggregated type exports (e.g., SafeUser, SafeListing, SafeReservation)
│   ├── actions/                  # Server Actions / Data fetching logic (server-side functions)
│   │   ├── getCurrentUser.ts
│   │   ├── getFavoriteListings.ts
│   │   ├── getListingById.ts
│   │   ├── getListings.ts        # Action to fetch multiple listings with parameters
│   │   └── getReservations.ts
│   ├── favorites/                # Route for displaying user's favorite listings
│   │   ├── FavoritesClient.tsx   # Client component for the favorites page
│   │   └── page.tsx              # Server component for /favorites route
│   ├── listings/
│   │   └── [listingId]/          # Dynamic route for individual listing details
│   │       ├── ListingClient.tsx # Client component for the listing detail page
│   │       └── page.tsx          # Server component for /listings/[listingId] route
│   ├── properties/               # Route for displaying listings created by the current user
│   │   ├── PropertiesClient.tsx  # Client component for the properties page
│   │   └── page.tsx              # Server component for /properties route
│   ├── reservations/             # Route for displaying reservations made on current user's listings
│   │   ├── ReservationsClient.tsx # Client component for the reservations page
│   │   └── page.tsx              # Server component for /reservations route
│   ├── trips/                    # Route for displaying trips booked by the current user
│   │   ├── TripsClient.tsx       # Client component for the trips page
│   │   └── page.tsx              # Server component for /trips route
│   ├── error.tsx                 # App-level error boundary file for handling runtime errors
│   ├── globals.css               # Global styles, often including Tailwind base styles and custom global CSS
│   ├── layout.tsx                # Root layout for the entire application
│   ├── loading.tsx               # Default loading UI for suspense boundaries
│   └── page.tsx                  # Homepage of the application (root page)
├── node_modules/                 # Directory where project dependencies are installed (managed by npm/yarn/pnpm)
├── prisma/
│   ├── migrations/               # Database migration files generated by Prisma
│   │   └── ... (folders for each migration)
│   └── schema.prisma             # Prisma schema definition file (models, relations, datasource, generator)
├── public/                       # Static assets that are served directly
│   ├── images/
│   │   └── placeholder.jpg       # Example placeholder image
│   └── favicon.ico               # Favicon for the website
├── .env                          # Environment variables (DATABASE_URL, NEXTAUTH_SECRET, etc. - should be in .gitignore)
├── .env.example                  # Example environment variables file for guidance
├── .eslintignore                 # Files/patterns for ESLint to ignore
├── eslint.config.mjs             # ESLint configuration file (as provided by you)
├── .gitignore                    # Specifies intentionally untracked files that Git should ignore (e.g., node_modules, .env, .next)
├── components.json               # Configuration for UI libraries like shadcn/ui if used
├── next-auth.d.ts                # TypeScript declaration file for extending NextAuth.js types
├── next.config.mjs               # Next.js configuration file (e.g., image domains, experimental features)
├── package-lock.json             # Records exact versions of dependencies (if using npm)
├── yarn.lock                     # Records exact versions of dependencies (if using yarn)
├── pnpm-lock.yaml                # Records exact versions of dependencies (if using pnpm)
├── package.json                  # Project metadata, dependencies, and scripts (e.g., "dev", "build", "start", "lint")
├── postcss.config.mjs            # PostCSS configuration (primarily for Tailwind CSS and autoprefixer)
├── README.md                     # Project documentation: setup, overview, features, etc.
└── tsconfig.json                 # TypeScript compiler configuration (paths, strictness, target, etc.)

## Deployment

This Next.js application is well-suited for deployment on platforms like:

- **Vercel:** (Recommended) Offers seamless deployment for Next.js projects.
- **Netlify:** Good support for Next.js.
- Other platforms supporting Node.js applications.

Ensure your environment variables (especially `DATABASE_URL`, `NEXTAUTH_URL`, and `NEXTAUTH_SECRET`) are correctly configured on your deployment platform.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate if they exist.

## License

(Choose a license, e.g., MIT, ISC. If unsure, MIT is a common choice.)

Example:
[MIT](https://opensource.org/licenses/MIT)

```

Remember to replace placeholders like `<your-repository-url>` and choose a license. You can also add more specific details to sections like "Deployment" or "Contributing" as your project evolves.

```

```
