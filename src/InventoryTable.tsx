interface Props {
  items: (string | number | boolean)[][];
  heading: string;
}

function InventoryTable({ items, heading }: Props) {
  // Creates a table for drug inventory
  return (
    <>
      <h1 className="h1 display-6 text-center">{heading}</h1>
      <hr />
      {items.length === 0 && <p>No items Found</p>}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Drug</th>
            <th scope="col">Dose</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default InventoryTable;
