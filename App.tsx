import Navigation from "./Navigation";
import { RentalProvider } from "./src/context/useRental";

export default function App() {
  return (
    <RentalProvider>
      <Navigation/>
    </RentalProvider>
  );
}