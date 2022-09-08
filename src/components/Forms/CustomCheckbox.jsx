
export const CustomCheckbox = (props) => {

    const {placeholder, className, accept,
     disabled, value, onBlur, onChange, name,  text, id, type} = props;
  return (
    <>
      
        <label htmlFor={id}></label>
        <input type={type}
      placeholder={placeholder}
      className={className} accept={accept}   disabled={disabled} 
      value={value} onBlur={onBlur} name={name} id={id} onChange={onChange} />
        <span> {text}</span>

    </>
  );
};
export default CustomCheckbox;
