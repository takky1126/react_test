import { LinkButton } from "./components/link";
import { useState } from "react";
import "./App.css"
import { saveToLocalStorage, loadFromLocalStorage } from "./save";

export const App = () => {
  const title: string = "App";

  // ローカルストレージから初期値を取得
  const initialNum = loadFromLocalStorage("num");
  //状態維持関数
  const [num,setNum] = useState(initialNum);

  const increment = () => {
    const newNum = num + 1;
    setNum(newNum);
    saveToLocalStorage("num", newNum);
  }

  const increset = () => {
    setNum(0);
    saveToLocalStorage("num", 0);
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <LinkButton text="Totestボタン" link="/test" />
      {num}回押した。
      <br/>
      <button type="button" onClick={increment}>増加</button>
      <br/>
      <button type="button" onClick={increset}>回数リセット</button>
    </div>
  );
}
