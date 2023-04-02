export const Button = ({ children, variant, onClick, type }) => {
    return (
        <button type={type} className={`button button--${variant}`} onClick={onClick}>
            {children}
        </button>
    );
}