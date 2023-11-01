import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ShopPagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination elements classes to keep JSX lean.
  const pageNumberClasses =
    "relative inline-flex items-center p-2 mx-1 text-sm font-bold text-indigo-600 duration-300 rounded-lg hover:bg-indigo-600 hover:text-white";

  const prevNextBtnsClasses =
    "w-5 h-5 p-2 mx-2 text-xl text-purple-800 rounded-full disabled:text-gray-400";

  // Send back the page index to change the products when click a page number:
  const changePageHandler = (pageIndex) => {
    // To color the current page number in JSX below.
    setCurrentPage(pageIndex);
    // Send page number to parent component.
    props.getCurrentPage(pageIndex);
  };

  const previousPageHandler = () => {
    setCurrentPage(currentPage - 1);
    props.getCurrentPage(currentPage - 1);
  };

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
    props.getCurrentPage(currentPage + 1);
  };

  const renderedPagesBeforeDots =
    currentPage <= props.totalPaginationPages / 2 &&
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
    currentPage > props.totalPaginationPages / 2 &&
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

  return (
    <div className="flex flex-col items-center justify-between flex-1 gap-4 mx-2 mt-8 md:flex-row">
      <div className="text-sm text-center text-gray-700">
        <p>
          Showing <span>{props.paginationIndices.start}</span> to{" "}
          <span>{props.paginationIndices.end}</span> of{" "}
          <span>{props.products.length}</span> results
        </p>
        <p>
          <span>{currentPage}</span> of{" "}
          <span>{props.totalPaginationPages}</span> pages
        </p>
      </div>

      <div className="flex">
        <button disabled={currentPage == 1} className={prevNextBtnsClasses}>
          <FontAwesomeIcon onClick={previousPageHandler} icon={faChevronLeft} />
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
          {currentPage - 1 != props.totalPaginationPages - 1 && (
            <span className="text-2xl text-main-700">...</span>
          )}
          <button
            onClick={() => changePageHandler(props.totalPaginationPages)}
            className={pageNumberClasses}
            page-number={props.totalPaginationPages}
          >
            {props.totalPaginationPages}
          </button>
        </div>

        <button
          disabled={currentPage == props.totalPaginationPages}
          className={prevNextBtnsClasses}
        >
          <FontAwesomeIcon onClick={nextPageHandler} icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ShopPagination;
