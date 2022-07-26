import { UserContextProvider } from "./contexts/UserContext";
import { Header } from "./components/Header";
import { View } from "./components/View";

function App() {
  return (
    <UserContextProvider>
      <div className="w-full h-full text-gray-100 bg-gray-900">
        <Header />
        <View />
      </div>
    </UserContextProvider>
  );
}

export default App;
