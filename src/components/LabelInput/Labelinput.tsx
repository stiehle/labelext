import { useContext } from "react";
import { useFormInput } from "../../hooks/useFormInput";
import TextInput from "../Textinput/Textinput";
import { useNavigate } from "react-router-dom";

import "./LabeInput.scss";
import { LabelContext } from "../../context/LabelContext";

function LabelInput() {
  const articleNumber = useFormInput("", true);
  const articleText = useFormInput("", false);
  const labelQantity = useFormInput("1", false);

  const { labelDispatch } = useContext(LabelContext);
  const navigate = useNavigate();

  function newLabel() {
    const newLabel = {
      // id: Math.floor(Math.random() * 1000),
      id: Date.now(),
      articleNumber: Number(articleNumber.value),
      articleText: articleText.value,
      labelQantity: Number(labelQantity.value),
    };
    console.log(newLabel);
    labelDispatch({ type: "ADD_LABEL", label: newLabel });
  }

  function printView() {
    console.log("printView");
    navigate("printview");
  }

  return (
    <div className="label-input">
      <h2 className="label-input__title">Etikettendruck</h2>
      <div className="label-input__wrapper-text">
        <TextInput
          value={articleNumber.value}
          onChange={articleNumber.handleInputChangeEvent}
          error={articleNumber.error}
          id={"articleNumber"}
          name={"Artikel"}
          size={"short"}
        />
        <TextInput
          value={articleText.value}
          onChange={articleText.handleInputChangeEvent}
          error={articleText.error}
          id={"articleText"}
          name={"Text"}
          size={"xxl"}
        />
        <TextInput
          value={labelQantity.value}
          onChange={labelQantity.handleInputChangeEvent}
          error={labelQantity.error}
          id={"labelQantity"}
          name={"Menge"}
          size={"short"}
        />
      </div>
      <div className="label-input__wrapper">
        <div className="label-input__button">
          <button onClick={newLabel}>Neues Etikett erstellen</button>
        </div>
        <div className="label-input__button">
          <button onClick={printView}>Druckansicht</button>
        </div>
      </div>
    </div>
  );
}
export default LabelInput;
