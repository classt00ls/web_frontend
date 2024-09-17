import React from "react";
import Select from "react-select";

import cat_icon from '../../../assets/AI Icons/cat_icon.svg';
const ReactSelect = ({options,setSelectItem,defaultValue,page,width,radius}) => {
  

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "#4C4B55",
      backgroundColor: state.isFocused ? "#EDF2F7" : "#fff",
      padding: "12px 14px",
      cursor: "pointer", 
      borderLeft: "0",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      width : width ? width : "265px",
      boxShadow: 'none',
      color: "rgba(0, 0, 0, 0.1) !important",
      padding: "8px 14px",
      paddingLeft: "0px",
      // borderRadius : page === "glossary" && window.innerWidth < 680 ? "100px" : "",
      borderRadius : radius ? radius : "10px",
      borderTopLeftRadius : "0",
      borderBottomLeftRadius : "0",
      border: "none",
      borderLeft: "none",
      fontSize: "14px",
    }),
    dropdownIndicator: base => ({
        ...base,
        color: "#898989" // Custom colour
    }),
    menu: provided => ({ ...provided, zIndex: 999,width : width?width:"265px",}),
    input: (baseStyles) => ({
      ...baseStyles,
      color: 'transparent'
      }),
      menuList: (provided) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
        "::-webkit-scrollbar" : {
          width : "0.4vw"
        },
        "::-webkit-scrollbar-thumb" : {
          backgroundColor: "lightgrey",
          // outline: "1px solid slategrey",
        }
     }),
  };

  const handleChange = (selectedOption) => {
    setSelectItem(selectedOption?.id);
    if(page === "glossary"){
      setSelectItem(selectedOption);
    }
    if(page === "eventLocation"){
      setSelectItem(selectedOption?.value)
    }
    console.log(`Option selected:`, selectedOption.value);
  };

  return <div className="flex gap-1 relative border border-[rgba(0, 0, 0, 0.1)] pl-3 rounded-md">
      
                <img src={cat_icon} alt="categroy icon" className="z-10 
                " />
    <Select onChange={handleChange} defaultValue={defaultValue} options={options} styles={customStyles} components={{
    IndicatorSeparator: () => null
  }}/></div>
};

export default ReactSelect;
