import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/getUsers";
import type { User } from "./types/users";
import { usePostStore } from "./store/usePostStore";

function App() {
  const { selectedPostId, setSelectedPostId } = usePostStore();
  const { data = [] } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
  return (
    <div className="container">
      {data.map((user) => {
        const colorFLag = selectedPostId === user.id ? { color: "red" } : null;
        return (
          <div
            style={{ cursor: "pointer", ...colorFLag }}
            onClick={() => setSelectedPostId(user.id)}
            key={user.id}
          >
            {user.name}
          </div>
        );
      })}
      selected Id : {selectedPostId}
    </div>
  );
}
export default App;
