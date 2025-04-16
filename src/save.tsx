// save.tsx

// カウントをローカルストレージに保存する関数
export const saveToLocalStorage = (key: string, value: number) => {
    localStorage.setItem(key, value.toString());
  };
  
  // ローカルストレージからカウントを読み込む関数
  export const loadFromLocalStorage = (key: string): number => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? parseInt(storedValue) : 0;
  };
  