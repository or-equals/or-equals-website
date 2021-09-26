import Link from 'next/link';

const Button = ({ to, theme, text }) => {

    // Space for logic. (if any)

    return (
        <Link href={to}>
            <button className={`button_${theme}`}>
                {text}
            </button>
        </Link>
    );
};

export default Button;