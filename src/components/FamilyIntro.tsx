import type { BrothersType } from "../types/familyType";

interface FamilyIntroProps {
    familyMembers:BrothersType
}

const FamilyIntro = ({ familyMembers }: FamilyIntroProps) => {
  return (
    <div>
      <h1 className="font-bold my-4">Without Mapping Using Index</h1>
      <h1>We are 4 Brothers, I am the eldest: {familyMembers[0]}</h1>
      {familyMembers.slice(1).map((member, index) => (
        <p key={index}>Next one is {member}</p>
      ))}

      <hr />

      <h1 className="font-bold my-4">With Mapping</h1>
      {familyMembers.map((member, index) => (
        <p key={index}>{member}</p>
      ))}
    </div>
  );
};

export default FamilyIntro