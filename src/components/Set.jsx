import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import cards from "../data.json";
import { Card } from "./Card";
import "./Set.css";

export function Set() {
  const [step, setStep] = useState(0);
  const location = useLocation();
  const { id } = useParams();

  console.log("id из URL:", id);

  const setName = location.state?.set;
  const filtered = setName ? cards.filter(c => c.setName === setName) : cards;

  if (filtered.length === 0) return <div>Карточки не найдены</div>;

  return (
    <div>
      <h2>{setName || "Название набора"}</h2>
      <Card
        key={filtered[step].id}
        front={filtered[step].front}
        back={filtered[step].back}
      />
      <div className="controls">
        <button onClick={() => setStep(step - 1)} disabled={step === 0}>{"<"}</button>
        <span>{step + 1} / {filtered.length}</span>
        <button onClick={() => setStep(step + 1)} disabled={step === filtered.length - 1}>{">"}</button>
      </div>
    </div>
  );
}