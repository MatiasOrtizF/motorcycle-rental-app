import Navigation from "./Navigation";
import { RentalProvider } from "./src/context/useRental";
import Rental from "./src/screens/Rental";

export default function App() {
  return (
    <RentalProvider>
      <Rental/>
    </RentalProvider>
  );
}