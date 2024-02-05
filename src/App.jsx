import { useState } from "react";
import CryptoList from "./features/Crypto/CryptoList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToDoList from "./features/ToDoList/ToDoList";
import GlobalStyles from "./styles/GlobalStyles";
import Modal from "./ui/Modal";
import Weather from "./features/Weather/Weather";
import Diesel from "./features/Diesel/Diesel";
import Dexcom from "./features/Dexcom/Dexcom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [cryptoQuery, setCryptoQuery] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      
        <CryptoList query={cryptoQuery} setQuery={setCryptoQuery} />
        <Diesel/>
        <ToDoList />
        {/* <Modal/> */}
        <Weather />
        <Dexcom/>
    </QueryClientProvider>
  );
}

export default App;
