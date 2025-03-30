import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import "../global.css"
import App from "./app";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <App />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
