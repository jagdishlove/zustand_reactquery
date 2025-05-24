import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/getUsers";
import type { User } from "./types/users";
import { usePostStore } from "./store/usePostStore";

function App() {
  const { selectedPostId, setSelectedPostId } = usePostStore();
  const { data = [], isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return (
    <div className="app-layout">
      <nav className="navbar">
        <h2>Zustand + React Query</h2>
      </nav>

      <main className="main-content">
        <h1>Users List</h1>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="user-list">
            {data.map((user) => (
              <div
                className={`user-item ${
                  selectedPostId === user.id ? "selected" : ""
                }`}
                onClick={() => setSelectedPostId(user.id)}
                key={user.id}
              >
                {user.name}
              </div>
            ))}
          </div>
        )}
        <div className="selected-id">
          <strong>Selected ID:</strong> {selectedPostId}
        </div>
      </main>
    </div>
  );
}

export default App;
