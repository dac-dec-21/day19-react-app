export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const id1 = 100;
  const background = "bg-info";

  return (
    <div>
      <h1>Interpolation {id1}</h1>
      <h1>Interpolation {id1 + 100}</h1>

      <h1 id="1" className="bg-primary">
        Interpolation {id1}
      </h1>
      <h1 id={id1} className={background}>
        Interpolation {id1}
      </h1>
    </div>
  );
}
