import { BrowserRouter } from "react-router-dom";
import { LoginScreen } from "./pages/LoginScreen";

export default function Root(props) {
  return (
    <BrowserRouter>
      <LoginScreen />
    </BrowserRouter>
  );
}
