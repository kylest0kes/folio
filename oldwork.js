  // const [isOpen, setIsOpen] = useState(false);
  // const [clickCount, setClickCount] = useState(0);

  // this needs to be changed, as there is a bug where if a job is clicked and its set to odd num
  // and the user clicks away, clicking back on the job that was at odd, will set it to even, and it
  // wont open
  // maybe set a 'opened' state, and if it is open, when clicked, the hidden style is added, and vice
  // versa

  // const isElOpen = () => {
  //   setClickCount(clickCount + 1);
  //   if (isOpen && clickCount % 2 !== 0) {
  //     setIsOpen(!isOpen);
  //     console.log("fuck");
  //   } else {
  //     setIsOpen(!isOpen);
  //   }
  // };
  // const inputEl = document.getElementsByTagName('input');
  // console.log('here: ',inputEl);

  // let clickedCount = 0;

  // const clickedInput = () => {
  //   clickedCount+=1;
  //   const tabContent = document.getElementsByClassName('tab-content');
  //   if (clickedCount % 2 === 0) {
  //    // need to figure out proper way to add the className 'hidden' to the tabContent element
  //   }
  //   console.log('in func: ',inputEl);
  //   console.log(clickedCount);
  // }

      // <div className="tab-section">
    //   <label htmlFor={props.tabnum} className="tab-header" onClick={isElOpen}>
    //     {props.job}
    //   </label>
    //   <input type="radio" name="header-tab" id={props.tabnum} />
    //   <div className={!isOpen ? 'hidden tab-content' : 'tab-content'}>
    //     <span className="role">{props.role}</span>
    //     <br />
    //     <br />
    //     {props.date}
    //     <br />
    //     <br />
    //     {props.jobdesc}
    //   </div>
    // </div>
    // <div className="tab-section">
    //   <label htmlFor={props.tabnum} className="tab-header" onClick={clickedInput} >
    //     {props.job}
    //   </label>
    //   <input type="radio" name="header-tab" id={props.tabnum}/>
    //   <div className="tab-content">
    //     <span className="role">{props.role}</span>
    //     <br />
    //     <br />
    //     {props.date}
    //     <br />
    //     <br />
    //     {props.jobdesc}
    //   </div>
    // </div>

    /* .tab-area {
  margin-top: 125px;
}

.tab-section {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 6px 8px 4px -4px rgba(0, 0, 0, 0.4);
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
}

.tab-section:last-of-type .tab-content {
  border-radius: 8px;
}

.tab-header {
  text-align: center;
  display: block;
  font-size: 1.6em;
  position: relative;
  z-index: 2;
  background-color: #314d62;
  color: #ff4c29;
  padding: 0.5em;
  border-top: 1px solid #5a809d;
  box-shadow: 0px 6px 4px -4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  border-radius: 8px;
}

.tab-header:hover {
  border: #ff4c29 2px solid;
}

.tab-header:active {
  border: #ff4c29 2px solid;
}

.tab-content {
  max-height: 0;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.6);
  color: #314d62;
  font-size: 16px;
  transition: 0.25s ease;
  padding-left: 1.5em;
  padding-right: 1.5em;
  border-radius: 8px;
}

.role {
  text-decoration: underline;
}

input[type="radio"] {
  position: absolute;
  visibility: hidden;
  left: -99999px;
}

input[type="radio"]:checked + .tab-content {
  height: auto;
  max-height: 1300px;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  border: #ff4c29 2px solid;
} */

