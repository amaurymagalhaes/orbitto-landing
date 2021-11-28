import { ButtonHTMLAttributes } from 'react';
import { Background } from './style';

type buttonDefaultProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: buttonDefaultProps) => {
	const { children } = props;

	return <Background {...props}>{children}</Background>;
};

export default Button;
