import "./form.css"
import { useRef, useState } from "react";
import { lang } from "../../lang/lang"


const Form = ({getValue, getSelect, setTil, til}) => {
    const text = useRef() 
function Input (e) {
    e.preventDefault()
    getValue(text.current.value);

}
function selectValue(e) {
    getSelect(e.target.value)
    console.log(e.target.value);
}
    return (
        <div className="container">
            <div className="my-5">
                <form className="d-flex justify-content-between" onSubmit={Input} autoComplete="off">
                <label className="form-label w-25">
                    <input type="search" className="form-control inp" name="searchinput" ref={text} placeholder={lang[til].form.placeholder} />
                </label>
                <label className="form-label label">
                <select onChange={selectValue} className="form-select">
                 <option hidden>{lang[til].form.option} </option>
                 <option value="Africa">Africa</option>
                 <option value="America">America</option>
                 <option value="Asia">Asia</option>
                 <option value="Europe">Europe</option>
                 <option value="Oceania">Oceania</option>
                </select>
                </label>
                </form>
            </div>
        </div>
    );
};

export default Form;