export const Button = ({ children, variant }) => {
    return (
        <button className={`button button--${variant}`}>
            {children}
        </button>
    );
}