interface IPrimaryButtonProps{
    message: string;
    className?:string;
    style?:React.CSSProperties;
    onClick: ()=>void;
}
const PrimaryButton = (props: IPrimaryButtonProps)=>{
    const { message, className, style,onClick} = props;
    return (
       <button onClick={onClick} style={style} className={"primary-button " + (className ? className :"")}>{message}</button>
    )
}

export default PrimaryButton;