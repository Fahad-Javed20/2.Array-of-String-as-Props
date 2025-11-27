import "./App.css";
import FamilyIntro from "./components/FamilyIntro";
import type { BrothersType } from "./types/familyType";

function App() {
  const familyMembers:BrothersType = [
    "Fahad Bin Javed",
    "Usama Bin Javed",
    "Shehroz Javed",
    "Motasim Bin Javed",
  ];

  return (
    <>
      <FamilyIntro familyMembers={familyMembers} />
    </>
  );
}

export default App;
