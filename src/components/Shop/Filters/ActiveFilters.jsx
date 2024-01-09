import React from "react";
import { useSelector } from "react-redux";

const ActiveFilters = () => {
  const availableFilters = useSelector((s) => s.filters);

  const activeLetters = availableFilters.letters.map((item, i) => (
    <li key={i}>
      {item}
      {i + 1 != availableFilters.letters.length && <span>, </span>}
    </li>
  ));

  const activeCategories = availableFilters.categories.map((item, i) => (
    <li key={i}>
      {item}
      {i + 1 != availableFilters.categories.length && <span>, </span>}
    </li>
  ));

  const activeAreas = availableFilters.areas.map((item, i) => (
    <li key={i}>
      {item}
      {i + 1 != availableFilters.areas.length && <span>, </span>}
    </li>
  ));

  // Classes
  const unorderedListClasses =
    "flex flex-wrap items-center gap-2 px-2 py-1 bg-white rounded-md";

  return (
    <div className="container flex items-center gap-2 py-4 mt-6 border-t-2">
      <h4 className="text-gray-400">Active Filters:</h4>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {activeLetters.length != 0 && (
          <ul className={unorderedListClasses}>{activeLetters}</ul>
        )}
        {activeCategories.length != 0 && (
          <ul className={unorderedListClasses}>{activeCategories}</ul>
        )}
        {activeAreas.length != 0 && (
          <ul className={unorderedListClasses}>{activeAreas}</ul>
        )}
        <p className="px-2 py-1 bg-white rounded-md">
          Min <span>${availableFilters.priceRange.min}</span> - Max{" "}
          <span>${availableFilters.priceRange.max}</span>
        </p>
      </div>
    </div>
  );
};

export default ActiveFilters;
