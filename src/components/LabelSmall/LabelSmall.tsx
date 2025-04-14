import { Label } from "../../types/Label";
import Qrcode from "../Qrcode/Qrcode";
import "./LabelSmall.scss";

function LabelSmall({ articleText, articleNumber }: Label) {
  return (
    <div className="label">
      <div className="label__content">
        <div className="label__article">
          <div className="label__qrcode">
            <div className="label__qrcode-image">
              <Qrcode text={String(articleNumber)} />
            </div>
          </div>
          <div className="label__articlenumber">
            <p className="label__articlenumber-text">{articleNumber}</p>
          </div>
        </div>
        <p className="label__articletext">{articleText}</p>
      </div>
    </div>
  );
}

export default LabelSmall;
