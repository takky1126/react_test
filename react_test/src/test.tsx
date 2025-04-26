import { LinkButton } from "./components/link";
import "./App.css"
import { useState } from "react";

export const Test = () => {
    const title: string = "test";

    return (
        <div className="container">
            <h1>{title}</h1>
            <LinkButton text="ToAppボタン" link="/" />
        </div>
    );
}

const Comsumption = () => {
    const[ATab, BTab] = useState<"form" | "result">("form");
    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h1>奈良市 相談支援アプリ</h1>

      {/* タブボタン */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button
          onClick={() => BTab("form")}
          style={{
            backgroundColor: ATab === "form" ? "#ccc" : "#eee",
            padding: "0.5rem 1rem",
          }}
        >
          相談する
        </button>
        <button
          onClick={() => BTab("result")}
          style={{
            backgroundColor: ATab === "result" ? "#ccc" : "#eee",
            padding: "0.5rem 1rem",
          }}
        >
          紹介結果
        </button>
      </div>

      {/* タブの中身 */}
      <div style={{ border: "1px solid #ddd", padding: "1rem" }}>
        {ATab === "form" ? (
          <p>ここに相談フォームが入ります。</p>
        ) : (
          <p>ここに機関の紹介結果が表示されます。</p>
        )}
      </div>
    </div>
    );
};

export default Comsumption;