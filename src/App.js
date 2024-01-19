import { useState } from "react";
import CryptoList from "./features/Crypto/CryptoList";
import Weather from "./components/Weather";
import DieselPrice from "./components/DieselPrice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToDoList from "./features/ToDoList/ToDoList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [cryptoQuery, setCryptoQuery] = useState("");
  const [error, setError] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CryptoList query={cryptoQuery} setQuery={setCryptoQuery} />
        <Weather error={error} setError={setError} />
        <DieselPrice error={error} setError={setError} />
        <ToDoList/>
      </div>

    </QueryClientProvider>
  );
}

export default App;
