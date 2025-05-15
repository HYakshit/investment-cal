export default function Input({id,value,onChange}) {
  return (
    <>
      <div className="form-floating  mb-3">
        {/* <span className="input-group-text" id="basic-addon1">@</span> */}
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={(e)=>onChange(e.target.value,e.target.name)}
          id={id}
          aria-label={id}
          name={id}
          aria-describedby="basic-addon1"
          required
        ></input>
        <label htmlFor={id}>Enter {id}</label>
      </div>
    </>
  );
}
