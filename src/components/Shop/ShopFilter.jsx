import { useState } from "react";
import { alphabet } from "../../pages/HomePage";

const ShopFilter = () => {
  const [letter, setLetter] = useState(null);

  const selectLetterHandler = (letter) => {
    setLetter(letter.target.value);
  };

  const lettersOptions = (
    <div>
      <select
        name="letters"
        id="letters"
        className="p-2 text-center duration-300 border-2 rounded-lg outline-none cursor-pointer text-main-700 hover:border-primary-700 focus:border-primary-700"
        onChange={selectLetterHandler}
      >
        <option disabled selected value="letter">
          Letter
        </option>
        {alphabet.split("").map((letter, i) => (
          <option key={i} value={letter} className="">
            {letter}
          </option>
        ))}
      </select>
    </div>
  );

  return <section className="container py-10">{lettersOptions}</section>;
};

export default ShopFilter;
