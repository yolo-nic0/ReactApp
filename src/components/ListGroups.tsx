import { useState } from "react";

interface Props{
    items: string[];
    header: string;
}

function ListGroups({items, header}: Props) {
  let items = ['Abebe', 'hebra', 'kida', 'yeab'];
        // items = [];
        // const [selectedIndex, setSelectedIndex] = useState(-1);
    // const handleClick = (event: MouseEvent) => console.log(event);
  return (
        <><h1>{header}</h1>
              {items.length === 0 && <p>no names yet</p>}
      <ul className="list-group">
          <>             
              {items.map((item, index) => (<li className={ selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => {setSelectedIndex(index); }} >{item}</li>))}
          </>
      </ul>
      </>
  );
}

export default ListGroups;