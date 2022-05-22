import './App.css';

function Items({ itemsList, setActiveItem }) {

  if (itemsList.length == 0) {
    return <div />
  }
  const items = itemsList.map((item) => (
    <button
      key={item.id}
      className="item"
      onClick={() => setActiveItem(item)}
    >
      {item.desc}
    </button>
  ))

  return (
    <div className="items-list">
      {items}
    </div>
  );
}

export default Items;
