import React, { useState } from "react";

// import components
import TitleSection from "./components/TitleSection";
import DataSection from "./components/DataSection";
import GenerateForm from "./components/GenerateForm";
import Footer from "./components/Footer";

function App() {
  const randomString = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789@#$%^&*()!";
  const generatePassword = (passwordLength) => {
    setRandomPassword(generateNewRandomData(passwordLength));
  }
  const generateNewRandomData = (passwordLength) => {
    let passwordString = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = generateRandomNumber(randomString.length);
      passwordString += randomString.charAt(randomNumber);
    }
    return passwordString;
  }
  const [randomPassword, setRandomPassword] = useState(() => {
    return generateNewRandomData(8);
  });


  return (
    <>
      <TitleSection />
      <DataSection randomPassword={randomPassword} />
      <GenerateForm generate={generatePassword} />
      <Footer />
    </>
  );
}

export default App;

const generateRandomNumber = (size) => {
  return Math.floor((Math.random() * size) + 1);
}