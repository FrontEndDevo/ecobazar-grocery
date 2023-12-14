import { useState } from "react";
import { alphabet } from "../../pages/HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ShopFilter = () => {
  // These states for letters.
  const [openLetters, setOpenLetters] = useState(false);
  const [filterLetters, setFilterLetters] = useState([]);

  const chooseLetterHandler = (letter) => {
    // Check if the letter is exist in the array or not to add/remove it.
    filterLetters.includes(letter)
      ? setFilterLetters(filterLetters.filter((item) => item != letter))
      : setFilterLetters([...filterLetters, letter]);
  };

  const lettersOptions = (
    <div className="relative">
      <div
        onClick={() => setOpenLetters((prevState) => !prevState)}
        className={`flex items-center hover:text-main-700 justify-between w-40 px-3 py-2 duration-300  border-2 rounded-lg outline-none cursor-pointer bg-white ${
          openLetters ? "text-main-700 border-primary-700" : "text-neutral-500"
        }`}
      >
        <button>Select Letter</button>
        <FontAwesomeIcon icon={openLetters ? faChevronUp : faChevronDown} />
      </div>
      {openLetters && (
        <ul className="absolute w-40 p-1 overflow-hidden overflow-y-auto duration-200 bg-white border rounded-lg h-44 top-12">
          {alphabet.split("").map((letter, i) => (
            <li
              key={i}
              className={`px-2 py-1 my-1 duration-200 cursor-pointer hover:bg-primary-100 text-main-700 ${
                filterLetters.includes(letter) && "bg-primary-100 font-bold"
              }`}
              onClick={() => chooseLetterHandler(letter)}
            >
              {letter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="pt-6 pb-24 bg-neutral-100">
      <div className="container">{lettersOptions}</div>
    </section>
  );
};

export default ShopFilter;
