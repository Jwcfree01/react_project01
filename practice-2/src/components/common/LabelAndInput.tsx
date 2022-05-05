interface CarInfo {
  title: string;
  handleChange: (e: { target: { value: string } }, value: string) => void;
  name: string;
  handleMessageErr: any;
}

export const LabelAndInput = (props: CarInfo) => {
  console.log(props.handleMessageErr);

  return (
    <>
      <label htmlFor="carName">{props.title}</label>
      {/* <span className="error">{props.handleMessageErr}</span> */}
      <input
        type="text"
        className="form-control modal-input"
        id="carName"
        placeholder={props.title}
        name={props.name}
        // value={props.name}
        onChange={(e) => props.handleChange(e, props.name)}
      />
    </>
  );
};
