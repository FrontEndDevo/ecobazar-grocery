import { useEffect, useRef, useState } from "react";
import { alphabet } from "../../../pages/Homepage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../redux/slices/filtersSlice";

const Letter = () => {
  const [openLetters, setOpenLetters] = useState(false);

  const dispatch = useDispatch();
  const letters = useSelector((state) => state.filters.letters);

  const chooseLetterHandler = (letter) => {
    // Check if the letter is exist in the redux array or not to add/remove it.
    letters.includes(letter)
      ? dispatch(
          filtersActions.setLetters(letters.filter((item) => item != letter))
        )
      : dispatch(filtersActions.setLetters([...letters, letter]));
  };

  // This block of code to close the list if user clicked anywhere outside of the list.
  const listRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setOpenLetters(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listRef]);

  return (
    <div className="relative z-40">
      <div
        onClick={() => setOpenLetters((prevState) => !prevState)}
        className={`flex items-center hover:text-main-700 justify-between w-48 px-3 py-2 duration-300  border-2 rounded-lg outline-none cursor-pointer bg-white ${
          openLetters ? "text-main-700 border-primary-700" : "text-neutral-500"
        }`}
      >
        <button>Select Letter</button>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={` duration-300 ${openLetters ? "rotate-180" : ""}`}
        />
      </div>
      {openLetters && (
        <ul
          ref={listRef}
          className="absolute w-48 p-1 overflow-hidden overflow-y-auto duration-200 bg-white border rounded-lg h-60 top-12"
        >
          {alphabet.split("").map((letter, i) => (
            <li
              key={i}
              className={`px-2 py-1 my-1 duration-200 cursor-pointer hover:bg-primary-100 text-main-700 ${
                letters.includes(letter) && "bg-primary-100"
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
};

export default Letter;
