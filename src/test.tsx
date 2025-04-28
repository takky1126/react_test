// import { LinkButton } from "./components/link";
import "./test.css"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export const Test = () => {

    return (
        <div className="container" style={{ width: '100%' }}>
            <Title/>
            {/* <LinkButton text="ToAppボタン" link="/" /> */}
            <TabNavigation/>
        </div>
    );
}

const Title = () => {
    return (
        <nav className="navbar bg-white" style={{ justifyContent: "center", height: "180px", border: "none" }}>
            <div className="container custom-container" style={{ justifyContent: "center",backgroundColor: "white" }}>
                <a className="navbar-brand" href="#" style={{ backgroundColor: "white" }}>
                    <img src="/draw/image.png" alt="Logo" width="300" />
                </a>
            </div>
        </nav>
    );
}

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTroubles, setSelectedTroubles] = useState<number[]>([]); // 複数選べるように変更！

  const tabs = [
    { name: 'お悩み（選択式）', link: '#' },
    { name: 'お悩み（入力式）', link: '#' },
    { name: 'ご紹介する機関', link: '#' },
    { name: 'お問い合わせ', link: '#' },
  ];

  const troubles = [
    "詐欺関連",
    "取引関連",
    "家庭問題",
    "就職関連",
    "学校/教育関連",
    "その他",
  ];


  const toggleTrouble = (index: number) => {
    if (selectedTroubles.includes(index)) {
      setSelectedTroubles(selectedTroubles.filter((i) => i !== index));
    } else {
      setSelectedTroubles([...selectedTroubles, index]);
    }
  };

  const handleDecision = (
    selectedTroubles: number[],
    setActiveTab: (index: number) => void,
  ) => {
      const introduceID = -1;
      const len = troubles.length;
      const hasOther = selectedTroubles.some(index => index == len - 1);
      const hasFraud = selectedTroubles.some(index => index == 0);
      if (hasOther) {
        setActiveTab(1);
      } else {
        setActiveTab(2);
        if(hasFraud){
          introduceID = 0;
        }
      }
  };
  
  return (
    <div>
      {/* タブ（ナビゲーション） */}
      <ul className="nav nav-tabs nav-fill">
        {tabs.map((tab, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${activeTab === index ? "active" : ""}`}
              href={tab.link}
              onClick={(e) => {
                setActiveTab(index);
                e.preventDefault();
              }}
              style={{
                color: activeTab === index ? "black" : "gray",
              }}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>

      {/* タブ中身 */}
      {activeTab === 0 && (
        <div>
          <div className="mb-2">
            <p className="mt-4 fs-4">ご相談内容を以下からお選びください</p>
          </div>
          <div className="index d-grid gap-2">
            {troubles.map((text, index) => (
              <button
                key={index}
                className={`btns ${selectedTroubles.includes(index) ? "selected" : ""}`}
                onClick={() => toggleTrouble(index)}
              >
                {text}
              </button>
            ))}
          </div>
          <button
          onClick={() => handleDecision(selectedTroubles, setActiveTab)}>決定</button>
      </div>
      )}
      {activeTab === 2 && (
        <div>
          <br />
          <p>選ばれたお悩みに対する機関を紹介します。</p>
          <p>お悩み内容に応じて適切な機関を選んでください。</p>
        </div>
      )}
    </div>
  );
};

