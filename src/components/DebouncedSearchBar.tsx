import { useCallback, useState } from "react";
import { debouncedHandler } from "../utils";
import "./DebouncedSearchBar.css";
import { CrossIcon, SearchIcon } from "../icons";

type DEBOUNCED_SEARCH_BAR_PROPS = {
  callback: (val: string) => void;
  delay?: number;
  placeholder?: string;
  OnSearchIcon?: React.FC;
  OnClearIcon?: React.FC;
  iconBgFillColor?: string;
  blurBoxShadow?: string;
  focusBoxShadow?: string;
  iconsNeeded?: boolean;
};

const DebouncedSearchBar = ({
  callback,
  delay = 500,
  placeholder = "Search...",
  OnSearchIcon = SearchIcon,
  OnClearIcon = CrossIcon,
  iconBgFillColor = "#f2f2f2",
  blurBoxShadow = "",
  focusBoxShadow = "",
  iconsNeeded = true,
}: DEBOUNCED_SEARCH_BAR_PROPS) => {
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnChange = useCallback(
    debouncedHandler({
      debouncedCallBack: callback,
      delay: delay,
    }),
    []
  );

  return (
    <div
      className={`react-debounced-search-container ${
        isFocused ? "react-debounced-search-container-focused" : ""
      }`}
      style={{ boxShadow: isFocused ? focusBoxShadow : blurBoxShadow }}
    >
      <input
        type="text"
        className="react-debounced-search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleOnChange(e.target.value);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />

      {iconsNeeded ? (
        <>
          {!value.length ? (
            <div
              className="react-debounced-search-icon"
              style={{ backgroundColor: iconBgFillColor }}
            >
              <OnSearchIcon />
            </div>
          ) : (
            <div
              className="react-debounced-cross-icon"
              style={{ backgroundColor: iconBgFillColor }}
              onClick={() => {
                setValue("");
                handleOnChange("");
              }}
            >
              <OnClearIcon />
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DebouncedSearchBar;
