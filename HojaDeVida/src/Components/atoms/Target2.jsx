import Caption from "./Caption";
function Target2({item, list, id}) {
    return (  
    <>
    <div className={id}>
      <span id="title">
        {" "}
        <Caption msn={item}></Caption>
      </span>
      <ul>
          {list.map(itemSkill => <li key={item}>{itemSkill}</li>)}
      </ul>
    </div>
  </>
    );
}

export default Target2;