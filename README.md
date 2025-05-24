# 🧠 Zustand + React Query Example

This project demonstrates how to **combine Zustand (for local state management)** with **React Query (for server state management)** — a modern and efficient approach to handling both client-side and server-side state in React applications.

---

## 🔍 Why Use Both?

### 🗂 React Query
Best for managing **server state**, such as:
- Fetching and caching data from APIs
- Background syncing and stale data handling
- Retry logic, loading & error states

### 🧠 Zustand
Great for **client-side state**, such as:
- UI flags, filters, tabs, or toggles
- User selections or settings
- Global app state without context boilerplate

Using both gives you a **clean separation of concerns**:
- ✅ API logic → React Query
- ✅ UI logic → Zustand

---

## ⚙️ What This Project Demonstrates

- 📡 Fetching users using **React Query**
- 🔀 Selecting a user with **Zustand**
- 🎯 Highlighting selected user in the UI
- ⚡ Minimal re-renders and better scalability

---

## 💡 When Should You Use This Pattern?

Use **Zustand + React Query** if:
- Your app needs fresh, cached, and synced server data
- You want lightweight client state handling
- You prefer avoiding prop drilling or complex contexts
- You need a scalable architecture for larger apps

---

## 🚀 Tech Stack

- React (Vite + TypeScript)
- Zustand for local state
- TanStack React Query for server state
- CSS Modules for styling

---


