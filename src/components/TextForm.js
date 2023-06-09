import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.displayAlert("Converted To Upper Case!", "success");
  }
  const handledownOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.displayAlert("Converted To LowerCase!", "success");
  }
  const handleOnChange = (event) => {

    setText(event.target.value);
  }
  const handleOnChange1 = (event) => {

    setsearch(event.target.value);
  }

  const handleSearchClick = () => {
    let num = text.indexOf(search);
    num += 1;
    setsearch('');
    if (num > 0) {

      document.getElementById('sear').placeholder = search + " is Present At Index: " + (num - 1);
      props.displayAlert(`${search + " is Present At Index: " + (num - 1)}!`, "success");
    } else {

      document.getElementById('sear').placeholder = search + " Not found!";
      props.displayAlert(`${search + " Not found!"}!`, "success");
    }
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    document.getElementById('copy').innerText = "Copied!";
    props.displayAlert("Copied To Clipboard!", "success");
  }
  function base64Encode() {

    setText(btoa(text));
    props.displayAlert("Base64 EnCoded!", "success");
  }

  function base64Decode() {

    setText(atob(text));
    props.displayAlert("Base64 DeCoded!", "success");
  }

  //   Reverse text Button
  // const reversed = () => {
  //     let splitWord = text.split("");

  //     let reverseWord = splitWord.reverse("");
  //     let joinedWords = reverseWord.join("");
  //     let newText = joinedWords

  //     setText(newText);
  //   };


  // const speak = (a) => {
  //     let msg = new SpeechSynthesisUtterance();
  //     msg.text = text;
  //     if (a === 1) {
  //       window.speechSynthesis.speak(msg);
  //     } else if (a === 2) {
  //       window.speechSynthesis.resume(msg);
  //     } else {
  //       window.speechSynthesis.pause();
  //     }
  // }
  const speak = () => {
    let voice = new SpeechSynthesisUtterance();
    // voice.text = text;
    voice.text = text;
    window.speechSynthesis.speak(voice);
    props.displayAlert("Speaking!", "success");
  }


  const Reverse = () => {
    let spl = text.split(" ");
    let rev = spl.reverse();
    let join = rev.join(" ");
    setText(join);

    props.displayAlert("Texted Reversed!", "success");
  }

  // made 2 functions:
  // 1. Convert to Proper case 2. Convert to Sentence case

  // const textToProperCase = () => {
  // let newText = text.replace(/\b[a-z]/g, (x) => x.toUpperCase());
  // }

  // and

  // const textToSentenceCase = () => {
  // let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  // }
  // function copytoClip() {
  // document.queryselector('textarea').select() ;
  // document. execCommand('copy') ;
  // }

  function removeSpace() {
    let newText = text.replaceAll(' ', '');
    setText(newText);

    props.displayAlert("Spaces Removed!", "success");
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const emailFilter = () => {
    let newText = text.split(" ");
    let clubbedText = "";
    newText.forEach(function (element) {
      if (validateEmail(element)) {
        clubbedText += element + ` | `
      }
    })
    if (clubbedText.length > 1) {
      document.getElementById('email').innerHTML = clubbedText;
      props.displayAlert("Emails Filtered Successfully!\nCheck Details Section to See Email IDs!", "success");
    }
    else {
      document.getElementById('email').innerHTML = 'No Email Present';
      props.displayAlert("Emails No Found!", "warning");
    }

  }

  const handleExtraSpace = () => {
    let nText = text.split(/[ ]+/);
    setText(nText.join(" "));

    props.displayAlert("Extra Spaces Removed!", "success");
  }
  const clearText = () => {
    setText("");

    props.displayAlert("Text Cleared!", "success");
  }
  const [text, setText] = useState("");
  const [search, setsearch] = useState("");
  let radi = {
    borderRadius: "20px",
    justifyContent: "end"
  }

  // used to solve a problem when app is in light mode and background is back in such case use input is white
  let textColor = "";
  if (props.mode === "light" && props.colorBackground === "#000000") {
    textColor = "#000000"
  } else {
    textColor = props.invertColor(props.colorBackground);
  }
  let customModeStyle = {
    backgroundColor: props.mode === "light" ? "white" : props.colorBackground, color: textColor,
    WebkitInputPlaceholder: { color: "white" }
  };
  // let buttonStyle = { backgroundColor: props.invertColor(props.colorBackground), color: props.colorBackground };

  return (
    <>
      <div className='container my-3' style={{ color: props.invertColor(props.colorBackground) }}>
        <h1>{props.heading}</h1>
        {/* <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary mx-1" style={radi} onClick={speak(1)}>Play!</button>
        <button type="button" className="btn btn-secondary mx-1" style={radi} onClick={speak(2)}>Pause!</button>
        <button type="button" className="btn btn-secondary mx-1" style={radi} onClick={speak(3)}>Resume!</button>
        </div> */}

        <div className="mb-3">
          <textarea className="form-control" id="myBox" placeholder='Enter Text Here?' spellCheck="true"
            style={{ ...customModeStyle, borderColor: props.invertColor(props.colorBackground), borderRadius: "13px" }} value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpOnClick}>Conver To UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handledownOnClick}>Conver To LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" id="copy" onClick={handleCopyClick}>Copy!</button>
        <button className="btn btn-primary mx-2 my-2" onClick={speak} id='speech'>Speak!</button>
        <button className="btn btn-primary mx-2 my-2" onClick={removeSpace}>Remove Space</button>
        <button className="btn btn-primary mx-2 my-2" onClick={base64Encode}>EnCode to Base 64</button>
        <button className="btn btn-primary mx-2 my-2" onClick={base64Decode}>DeCode to Base 64</button>
        <button className="btn btn-primary mx-2 my-2" onClick={Reverse}>Reverse Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>

        <h4 className='my-3'>Search Text</h4>
        <div className="input-group mb-3" style={{ color: props.invertColor(props.colorBackground) }}>
          <input className="form-control me-2 w-25 p-3 my-2" value={search} placeholder="Search" id='sear' style={{ ...customModeStyle, borderColor: props.invertColor(props.colorBackground), borderRadius: "13px" }} onChange={handleOnChange1} />
          <button className="btn btn-outline-primary mx-2" onClick={handleSearchClick} style={radi}>Search</button>
        </div>

        <p></p>
        <button className="btn btn-primary mx-2 my-2" onClick={emailFilter}>Email Filter</button>
        <details vocab='Email' id='email'></details>
      </div >


      <div className="container my-3" style={{ color: props.invertColor(props.colorBackground) }}>
        <h1>Your Text Summary</h1>
        <b><p>It contains {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length} characters</p></b>
        <p><b>You can Read it in {0.008 * text.trim().length} Minutes</b></p>
        <b><p>It Contains {text.split(/[.?!]\s/).length - 1} Sentences and {text.split(/\r\n|\r|\n/).length} Paragraphs</p></b>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter SomeThing in the TextBox Above to Preview it Here!"}</p>
      </div>
    </>
  )
}