# 🧱 Dashboard Architecture

## Overview

This project implements a **role-based dashboard architecture** designed for clarity, scalability, and predictable behavior.
Both navigation (menu) and content (panels) are dynamically rendered based on the authenticated user’s role, while routing remains simple and consistent.

---

## Core Principles

* **Role-driven UI rendering**
* **Separation of layout, routing, and business logic**
* **Explicit configuration over dynamic filtering**
* **Stable user experience (no flickers on reload)**

---

## Architecture Breakdown

### 1. Layout Structure

The dashboard uses a shared layout that acts as a UI shell:

```txt
DashboardLayout
 ├── Sidebar (role-based menu)
 ├── Navbar
 └── Outlet (dynamic content)
```

* The layout is responsible only for structure and presentation.
* All dynamic content is rendered via the `Outlet`.

---

### 2. Role-Based Menu System

Menus are explicitly defined per role:

```ts
const menus = {
  admin: [...],
  subAdmin: [...],
  department: [...]
};
```

* The appropriate menu is selected based on the user’s role.
* This avoids runtime filtering and keeps logic predictable and maintainable.

---

### 3. Role-Based Panel Rendering

The `/dashboard` route remains constant for all users.

A dedicated page (`DashboardHome`) determines which panel to render:

```txt
/dashboard
 → DashboardLayout
 → Outlet
 → DashboardHome
 → Role-specific Panel
```

Example:

```ts
if (role === "admin") return <AdminPanel />;
if (role === "subadmin") return <SubAdminPanel />;
```

* This approach centralizes role logic in one place.
* Keeps routing configuration clean and static.

---

### 4. Route Protection

Access control is handled through a protected route layer:

* Ensures the user is authenticated
* Verifies role-based access

```txt
Menu → controls visibility (UI)
Route → enforces access (security)
```

---

### 5. Authentication Hydration & Flicker Prevention

On application load:

* Authentication state is restored from `localStorage`
* A loading state (`isLoading`) prevents premature redirects

```ts
if (!authContext || authContext.isLoading) return null;
```

This ensures:

* No incorrect redirects on refresh
* No UI flickering between login and dashboard

---

## Application Flow

```txt
Login → store token + user

/dashboard
 → ProtectedRoute
 → DashboardLayout
 → Outlet
 → DashboardHome
 → Role-based Panel
```

---

## Benefits

* Clean separation of concerns
* Scalable role-based system
* Minimal routing complexity
* Predictable and stable user experience

---

## Future Enhancements

* Route-driven navigation from sidebar
* Lazy loading of dashboard panels
* Fine-grained permission control (beyond roles)

---

**Summary:**
A structured and scalable dashboard system where **user roles control both navigation and content**, while maintaining a clean and maintainable routing architecture.
