import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./style/index.css";

if (process.env.NODE_ENV !== 'production') {
  import('react-devtools').then(() => {
    console.log('React DevTools enabled');
  }).catch((err) => {
    console.error('Error loading React DevTools:', err);
  });
}

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);