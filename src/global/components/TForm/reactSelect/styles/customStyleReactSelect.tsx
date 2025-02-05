// import i18n from "@/i18n";
import { StylesConfig } from "react-select";

type Option = {
  value: any;
  label: any;
};

type Props = (
  readOnly: boolean,
  showChecked?: boolean,
  isError?: boolean,
  placeholderStyle?: React.CSSProperties | any,
  triggerBackground?: string
) => StylesConfig<Option, false>;
export const customStyles: Props = (
  readOnly = false,
  showChecked = true,
  isError = false,
  placeholderStyle = {},
  triggerBackground
) => {
  const objNoCkecked = (isSelected: boolean) => {
    const objStyle =
      !showChecked || !isSelected
        ? {
            "&::after": {
              content: '""', // Prevent rendering checkmark
              display: "none",
            },
          }
        : {
            // "&::after": {
            //   content: '"✓"', // Prevent rendering checkmark
            //   display: "inline-block",
            //   position: "absolute" as any,
            //   left: i18n.language === "ar" ? "auto" : "15px",
            //   right: i18n.language === "en" ? "15px" : "auto",
            // },
          };
    return objStyle;
  };

  return {
    container: (provided) => ({
      ...provided,
      borderColor: `${isError ? "#EF4444" : "#dddddd"} !important`,
      fontFamily: "Alexandria",
      background: triggerBackground,
    }),
    control: (provided, state) => ({
      ...provided,
      transition: "none",
      borderColor: isError ? "#EF4444" : "#ededed !important",
      boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.15) !important",
      outlineColor: state.menuIsOpen ? "Black" : "#dddddd",
      outlineOffset: state.isFocused ? "2px !important" : "",
      outlineWidth: state.isFocused ? "2px !important" : "",
      outlineStyle: state.isFocused ? "solid !important" : "",
      fontSize: "0.875rem",
      borderRadius: "calc(0.5rem - 2px)",
      paddingBlock: "0.15rem",
      fontFamily: "Alexandria",
      background: triggerBackground,
    }),
    // "#F6CDD4"
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? `${!state.isFocused ? "transparent" : "#8b6343"}`
        : state.isFocused || state.isSelected
        ? "#8b6343"
        : "white",
      color: state.isSelected
        ? `${!state.isFocused ? "black" : "#ffffff"}`
        : state.isFocused || state.isSelected
        ? "#ffffff"
        : "black",
      cursor: "pointer",
      width: "calc(100% - 8px)",
      margin: "0 auto",
      padding: "0.5rem 0.5rem",
      borderRadius: "0.5rem",
      fontSize: "14px",
      fontFamily: "Alexandria",
      ...objNoCkecked(state.isSelected),
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      paddingInline: "11px",
      display: readOnly ? "none" : provided.display,
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      fontSize: "14px",
    }),
    menuPortal: (base) => ({
      ...base,
      fontFamily: "Alexandria",
      zIndex: 9999,
      pointerEvents: "auto",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
      pointerEvents: "auto",
      scrollBehavior: "auto",
    }),
    menuList: (base) => ({
      ...base,
      zIndex: 9999,
      maxHeight: "200px",
      pointerEvents: "auto",
      scrollBehavior: "auto",
    }),
    placeholder(base) {
      return {
        ...base,
        ...placeholderStyle,
      };
    },
  };
};
