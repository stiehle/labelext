import { useContext } from "react";
import { LabelContext } from "../../context/LabelContext";
import { Label } from "../../types/Label";

import "./PrintView.scss";
import LabelSmall from "../../components/LabelSmall/LabelSmall";

function PrintView() {
  const { label } = useContext(LabelContext);

  return (
    <div className="printview">
      {label.map((item: Label) => {
        return (
          <div key={item.id} className="printview__label">
            {Array.from({ length: item.labelQantity }, (_, i) => (
              <LabelSmall
                key={`${item.id}-${i}`}
                id={item.id}
                articleNumber={item.articleNumber}
                articleText={item.articleText}
                labelQantity={item.labelQantity}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default PrintView;
