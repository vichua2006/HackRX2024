export interface Drug {
  brand: string;
  name: string;
  dosage: [number, string][];
  divider: string;
  din: string;
  quantity: [number, string];
}

export function DrugCard({
  brand,
  name,
  dosage,
  divider,
  din,
  quantity,
}: Drug) {
  return (
    <div className="card p-2 m-2" style={{ width: "18rem" }}>
      <h5 className="card-title text-center">{brand + " " + name}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">
        {dosage.map(
          (dose, index) =>
            dose[0] + dose[1] + (index < dosage.length - 1 ? divider : "")
        )}
      </h6>
      <h6 className="card-subtitle mb-2 text-body-secondary">{din}</h6>
      <p className="card-text text-end">{quantity[0] + " " + quantity[1]}</p>
    </div>
  );
}
