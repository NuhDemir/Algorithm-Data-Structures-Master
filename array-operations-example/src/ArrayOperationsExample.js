import React, { useState } from "react";

const ArrayOperationsExample = () => {
  // Başlangıç dizisi
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  // push() örneği: Diziye bir eleman ekler
  const handlePush = () => {
    const newArray = [...array]; // Eski diziyi kopyalayalım
    newArray.push(6); // 6 elemanını diziye ekle
    setArray(newArray);
  };

  // pop() örneği: Dizinin son elemanını çıkarır
  const handlePop = () => {
    const newArray = [...array];
    newArray.pop(); // Son elemanı çıkar
    setArray(newArray);
  };

  // shift() örneği: Dizinin ilk elemanını çıkarır
  const handleShift = () => {
    const newArray = [...array];
    newArray.shift(); // İlk elemanı çıkar
    setArray(newArray);
  };

  // unshift() örneği: Diziye ilk sıraya eleman ekler
  const handleUnshift = () => {
    const newArray = [...array];
    newArray.unshift(0); // 0 elemanını başa ekle
    setArray(newArray);
  };

  // splice() örneği: Diziye bir eleman ekler veya bir elemanı çıkarır
  const handleSplice = () => {
    const newArray = [...array];
    newArray.splice(2, 1, 10); // 2. indeksten başla, 1 eleman sil ve yerine 10 ekle
    setArray(newArray);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>Current Array: {JSON.stringify(array)}</h3>
      <div style={{ marginBottom: "20px" }}>
        {/* Butonlar */}
        <button onClick={handlePush} style={buttonStyle}>
          Push 6
        </button>
        <button onClick={handlePop} style={buttonStyle}>
          Pop
        </button>
        <button onClick={handleShift} style={buttonStyle}>
          Shift
        </button>
        <button onClick={handleUnshift} style={buttonStyle}>
          Unshift 0
        </button>
        <button onClick={handleSplice} style={buttonStyle}>
          Splice at Index 2
        </button>
      </div>
      <p>Click a button to modify the array.</p>
    </div>
  );
};

// Stil için basit bir obje
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  margin: "10px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

export default ArrayOperationsExample;
