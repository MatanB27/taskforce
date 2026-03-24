import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { ROUTES } from "./routes";

function App() {
  const queryClient = new QueryClient();
  const pathname = window.location.pathname;

  const page = (() => {
    switch (pathname) {
      case ROUTES.LOGIN:
        return <Login />;
      case ROUTES.HOME:
      default:
        return <Home />;
    }
  })();

  return (
    <QueryClientProvider client={queryClient}>
      {page}
    </QueryClientProvider>
  );
}

export default App;
