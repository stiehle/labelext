import { useContext } from "react";
import { LabelContext } from "../../context/LabelContext";
import { Label } from "../../types/Label";

import "./LabelList.scss";
import LabelSmall from "../LabelSmall/LabelSmall";

function LabelList() {
  const { label, labelDispatch } = useContext(LabelContext);

  return (
    <div className="labellist">
      <h2>Deine Etiketten</h2>
      {label.map((item: Label) => {
        return (
          <div key={item.id} className="labellist__item">
            <button onClick={() => labelDispatch({ type: "REMOVE_LABEL", label: item })}>Etikett löschen</button>
            <LabelSmall articleText={item.articleText} articleNumber={item.articleNumber} id={item.id} />
          </div>
        );
      })}
    </div>
  );
}

export default LabelList;
