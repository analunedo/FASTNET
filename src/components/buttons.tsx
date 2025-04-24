import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    handleFunction: Function;
}

export default function Button({ text, handleFunction, secondary }: IButtonProps) {
    return (
        <button onClick = {() => handleFunction(console.log("Button clicked"))}
        className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}