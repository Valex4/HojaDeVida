import Caption from "./Caption";
function Target3(item, text, id) {
    return (  
        <>
        <div className={id}>
        <span id="title">
          {" "}
          <Caption msn={item}></Caption>
        </span>
         <p id="text">{text}</p>
      </div>
        </>
    );
}

export default Target3;