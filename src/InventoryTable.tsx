function InventoryTable() {
  // Inventory of drugs
  const drugs = [
    ["Drug 1", 50, 10],
    ["Drug 2", 100, 20],
    ["Drug 3", 200, 40],
  ];

  // Creates a table for drug inventory
  return (
    <>
      <h1 className="h1 display-6 text-center">Drug Inventory</h1>
      {drugs.length === 0 && <p>No Drugs Found</p>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Drug</th>
            <th scope="col">Dose</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((item, index) => (
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
