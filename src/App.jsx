import LaunchKitLanding from "./components/LaunchKitLanding";
import Upsell from "./pages/Upsell";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/upsell") {
    return <Upsell />;
  }

  return <LaunchKitLanding />;
}

export default App;
