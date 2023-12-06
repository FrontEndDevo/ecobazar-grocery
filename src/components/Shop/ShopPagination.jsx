import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const ShopPagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumberRef = useRef();
  // Pagination elements classes to keep JSX lean.
  const pageNumberClasses =
    "relative inline-flex items-center p-2 mx-1 text-sm font-bold text-indigo-600 duration-300 rounded-lg hover:bg-indigo-600 hover:text-white";

  const prevNextBtnsClasses =
    "w-5 h-5 p-2 mx-2 text-xl text-purple-800 rounded-full disabled:text-gray-400";

  // Number of products we want to show per page:
  const productsPerPage = 10;

  // Calculate the total pages (10 products):
  const totalPages = Math.ceil(props.products.length / productsPerPage);

  // Send back the page index to change the products when click a page number:
  const changePageHandler = (pageIndex) => {
    setCurrentPage(pageIndex);

    // Send page number to parent component.
    props.getCurrentPage(pageIndex, productsPerPage);
  };

  const previousPageHandler = () => {
    setCurrentPage(currentPage - 1);
    props.getCurrentPage(currentPage - 1, productsPerPage);
  };

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
    props.getCurrentPage(currentPage + 1, productsPerPage);
  };

  const renderedPagesBeforeDots =
    currentPage <= totalPages / 2 &&
    Array.from({ length: 4 }, (_, i) => currentPage + 1 + i).map((item) => (
      <button
        key={item}
        onClick={() => changePageHandler(item)}
        className={pageNumberClasses}
        page-number={item}
      >
        {item}
      </button>
    ));

  const renderedPagesAfterDots =
    currentPage > totalPages / 2 &&
    Array.from({ length: 4 }, (_, i) => currentPage - 1 - i)
      .reverse()
      .map((item) => (
        <button
          key={item}
          onClick={() => changePageHandler(item)}
          className={pageNumberClasses}
          page-number={item}
        >
          {item}
        </button>
      ));

  const submitPageNumberHandler = (e) => {
    e.preventDefault();
    const pageNumInput = +pageNumberRef.current.value;

    if (pageNumInput >= 1 && pageNumInput <= totalPages) {
      setCurrentPage(pageNumInput);
      props.getCurrentPage(pageNumInput, productsPerPage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between flex-1 gap-4 mx-2 mt-8 md:flex-row">
      <div className="text-sm text-center text-gray-700">
        <p>
          Showing <span>{props.paginationIndices.start}</span> to{" "}
          <span>{props.paginationIndices.end}</span> of{" "}
          <span>{props.products.length}</span> results
        </p>
        <p>
          <span>{currentPage}</span> of <span>{totalPages}</span> pages
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex">
          <button disabled={currentPage == 1} className={prevNextBtnsClasses}>
            <FontAwesomeIcon
              onClick={previousPageHandler}
              icon={faChevronLeft}
            />
          </button>

          <div>
            <button
              onClick={() => changePageHandler(1)}
              className={pageNumberClasses}
              page-number={1}
            >
              1
            </button>
            {currentPage + 1 != 2 && (
              <span className="text-2xl text-main-700">...</span>
            )}
            {renderedPagesBeforeDots}
            {renderedPagesAfterDots}
            {currentPage - 1 != totalPages - 1 && (
              <span className="text-2xl text-main-700">...</span>
            )}
            <button
              onClick={() => changePageHandler(totalPages)}
              className={pageNumberClasses}
              page-number={totalPages}
            >
              {totalPages}
            </button>
          </div>

          <button
            disabled={currentPage == totalPages}
            className={prevNextBtnsClasses}
          >
            <FontAwesomeIcon onClick={nextPageHandler} icon={faChevronRight} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-700">Go to page</p>
          <form onSubmit={submitPageNumberHandler}>
            <input
              type="number"
              name="page-number"
              id="number"
              min={1}
              ref={pageNumberRef}
              max={totalPages}
              defaultValue={currentPage}
              className="h-10 p-2 font-bold text-center border border-indigo-600 rounded w-14 text-main-700 focus:outline-none"
            />
            <button className="px-10 py-2 ml-4 font-bold text-white duration-200 bg-indigo-600 border-none rounded outline-none hover:bg-indigo-800">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopPagination;
