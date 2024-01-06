import TextField from "@mui/material/TextField";

export default function TextFields(props) {
  const textFieldProps = {
    id:
      props.type === "password" ? "outlined-password-input" : "outlined-basic",
    label: props.label,
  };
  return (
    <TextField
      id={textFieldProps.id}
      label={textFieldProps.label}
      key={props.fieldName}
      variant="outlined"
    />
  );
}

// <div className="flex flex-col justify-around">
//   <label
//     // htmlFor={props.name}
//     htmlFor="mail"
//     className="box-border block text-sm font-medium text-gray-600 text-18 pr-30"
//   >
//     {/* {props.label} */}
//     Email
//   </label>
//   <input
//     // type={props.type}
//     // name={props.name}
//     type="text"
//     name="mail"
//     className="w-404 h-62 rounded-full outline-none bg-gray-400 h-16 p-4 box-border text-sm"
//   />
// </div>
