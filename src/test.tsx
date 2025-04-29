// import { LinkButton } from "./components/link";
import "./test.css"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export const Test = () => {
    return (
        <div className="container" style={{ width: '100%' }}>
            <Title/>
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
  const [selectedTroubles, setSelectedTroubles] = useState<number[]>([]);
  const [introText, setIntroText] = useState<string[]>([]); //紹介text君たち 
  
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

  const dropdownOptions: Record<number, string[]> = {
    0: ["詐欺の種類A", "詐欺の種類B"],
    1: ["契約ミス", "支払いトラブル"],
    2: ["DV", "育児の悩み"],
    3: ["就活", "転職", "履歴書"],
    4: ["いじめ", "授業", "先生との関係"],
    5: ["その他項目1", "その他項目2"]
  };
  

  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>(Array(troubles.length).fill(false));
  const toggleDropdown = (index: number) => {
    const newOpenDropdowns = [...openDropdowns];
    if (newOpenDropdowns[index] === false) {
      newOpenDropdowns[index] = true;
    } else newOpenDropdowns[index] = false;
    setOpenDropdowns(newOpenDropdowns);
  };

  const toggleTrouble = (index: number) => {
    if (selectedTroubles.includes(index)) {
      toggleDropdown(index);
      setSelectedTroubles(selectedTroubles.filter((i) => i !== index));
    } else {
      toggleDropdown(index);
      //選択していなかった場合selectedTrouble配列を開いて末端にindexを追加
      setSelectedTroubles([...selectedTroubles, index]);
    }
  };

  const handleDecision = (
    //State変更できるように関数呼び出してる
    setActiveTab: (index: number) => void,
    setIntroText: (text: string[]) => void,
    selectedTroubles: number[],
    ) => {
    const len = troubles.length;
    //配列の中にその要素が入っていたらtrue
    const hasOther = selectedTroubles.includes(len - 1);

    if (hasOther) {
      setActiveTab(1);
      return;
    }
    //index配列を参照してnewText配列を作る（mapちゃん）
    const newText = selectedTroubles.map(index => {
      if (index === 0) return `「${troubles[index]}」に関する機関を紹介させて頂きます。`;
      if (index === 1) return `「${troubles[index]}」に関する機関を紹介致します。`;
      if (index === 2) return `「${troubles[index]}」に関する機関を紹介します。`;
      if (index === 3) return `「${troubles[index]}」に関する機関を紹介するぜ。`;
      if (index === 4) return `「${troubles[index]}」に関する機関を紹介してやってもいいぜ。`;
      return `「${troubles[index]}」に関する機関を紹介します。`; // その他（ここには来ないはず）
    });
    //newText配列で置き換える
    setIntroText(newText);
    setActiveTab(2);
  };

  return (
    <div>
      {/* ul:リストの枠 li:リストの中身 a:リンク生成 tab.link:リンク先 tab.name*/}
      <ul className="nav nav-tabs nav-fill">
        {/* tabs更新/tab:中身の引数/index:順番の引数(?) */}
        {tabs.map((tab, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${activeTab === index ? "active" : ""}`}
              href={tab.link}
              onClick={(e) => {
                setActiveTab(index);
                //ページ遷移妨害（タブ切り替えのため）
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
            <p className="mt-4 fs-4">ご相談内容を以下から選択し、決定ボタンを押してください</p>
          </div>
          <div className="index d-grid gap-2">
            {/* 配列をボタンに */}
            {troubles.map((text, index) => (
              <div>
                <button
                  key={index}
                  className={`btns ${selectedTroubles.includes(index) ? "selected" : ""}`}
                  onClick={() => toggleTrouble(index)}
                >
                  {text}
                </button>
                {openDropdowns[index] && (
                  <div className="mt-3">
                    {dropdownOptions[index]?.map((option,i) =>(
                      <p key={i}>{option}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
          onClick={() => handleDecision(setActiveTab,setIntroText,selectedTroubles)}>決定</button>
      </div>
      )}
      {activeTab === 2 && (
        <div>
          <br />
          <p>選ばれたお悩みに対する機関を以下にご紹介します。</p>
          {introText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
      </div>
      )}
    </div>
  );
};

