import React, { useState } from "react";
import "../style.css";

function State(props) {
  const [notes, setnote] = useState([]);
  const [curnote, setcurnote] = useState("");
  function setcnote(event) {
    setcurnote(event.target.value);
  }
  function addnote(text) {
    console.log(text);
    const udonenote = [...notes, text];
    setnote(udonenote);
  }
  function updatenote() {
    if (curnote.trim().length > 0) {
      addnote(curnote);
      setcurnote("");
    }
  }
  function getthedate() {
    let newDate = new Date(),
      date = `${newDate.getFullYear()}/${newDate.getMonth()}/${newDate.getDay()}`;
    return date;
  }
  const [searchvalue, setsearchnote] = useState("");
  ``
  return (
    <>
      <input
      className="search"
        type="text"
        name=""
        id=""
        placeholder="search"
        onChange={(event) => {
          console.log(event.target.value);
          console.log(searchvalue);
          // setsearchnote(searchvalue)
          setsearchnote(
            notes.filter((name) => name.includes(event.target.value))
          );
        }}
      />

      <div className="box">
        {searchvalue === ""
          ? notes.map((note, index) => {
              return (
                <div className="note-box" key={index}>
                  <p className="heading">{note}</p>
                  <div className="bottom">
                    <p className="date">{getthedate()}</p>
                    {searchvalue}
                    <button
                      className="clear"
                      onClick={() => {
                        setnote((products) =>
                          products.filter((_, index) => index !== 0)
                        );
                      }}
                    >
                      clear
                    </button>
                  </div>
                </div>
              );
            })
          : searchvalue.map((note, index) => {
              return (
                <div className="note-box" key={index}>
                  <p>{note}</p>
                  <div className="botton">
                    <p>{getthedate()}</p>
                    <button
                      onClick={() => {
                        setnote((products) =>
                          products.filter((_, index) => index !== 0)
                        );
                      }}
                    >
                      clear
                    </button>
                  </div>
                </div>
              );
            })}

        <div className="input">
          <input
            onChange={setcnote}
            value={curnote}
            type="text"
            name=""
            id=""
            placeholder="enter notes"
            className="inputobx"
          />
          <button onClick={updatenote}>save</button>
        </div>
      </div>
    </>

    // <div>
    //   <p>this is my fevarite {frout}</p>
    //   <button  onClick={()=>{
    //     setfrout("mango")
    //     props.getdata("frout")

    //   }}>mango</button>
    //   <button onClick={()=>{
    //     setfrout("orange")
    //     props.getdata("orange")

    //   }}>orange</button>
    //   <button onClick={()=>{
    //     setfrout("banana")
    //     props.getdata("banana")

    //   }}>banaan</button>
    //   <button onClick={()=>{
    //     setfrout("apple")
    //     props.getdata("apple")

    //   }}>apple</button>

    // </div>
  );
}

export default State;
