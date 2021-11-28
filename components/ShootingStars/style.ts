import styled from 'styled-components';

export const SkyContainer = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -10;
	.star {
		transform: rotateZ(45deg);
		position: absolute;
		height: 2px;
		background: linear-gradient(-45deg, #ffffff, rgba(0, 0, 255, 0));
		filter: drop-shadow(0 0 6px #ffffff);
		animation: tail 5000ms ease-in-out infinite,
			shooting 5000ms ease-in-out infinite;
	}

	.star::before,
	.star::after {
		position: absolute;
		content: '';
		top: calc(10% - 1px);
		right: 0;
		height: 2px;
		background: linear-gradient(
			-45deg,
			rgba(0, 0, 255, 0),
			#fff,
			rgba(0, 0, 255, 0)
		);
		transform: translateX(50%) rotateZ(45deg);
		animation: shining 5000ms ease-in-out infinite;
	}

	.star::after {
		transform: translateX(50%) rotateZ(-45deg);
	}

	.star:nth-child(1) {
		top: calc(50% - 20px);
		left: calc(0% - 30px);
		animation-delay: 650ms;
	}
	.star:nth-child(1)::before,
	.star:nth-child(1)::after {
		animation-delay: 650ms;
	}

	.star:nth-child(2) {
		top: calc(50% - -50px);
		left: calc(0% - 30px);
		animation-delay: 150ms;
	}
	.star:nth-child(2)::before,
	.star:nth-child(2)::after {
		animation-delay: 150ms;
	}

	.star:nth-child(3) {
		top: calc(50% - -90px);
		left: calc(0% - 30px);
		animation-delay: 1600ms;
	}
	.star:nth-child(3)::before,
	.star:nth-child(3)::after {
		animation-delay: 1600ms;
	}

	.star:nth-child(4) {
		top: calc(50% - 50px);
		left: calc(0% - 30px);
		animation-delay: 4700ms;
	}
	.star:nth-child(4)::before,
	.star:nth-child(4)::after {
		animation-delay: 4700ms;
	}

	.star:nth-child(5) {
		top: calc(50% - -190px);
		left: calc(0% - 30px);
		animation-delay: 2100ms;
	}
	.star:nth-child(5)::before,
	.star:nth-child(5)::after {
		animation-delay: 2100ms;
	}

	/* Animations */
	@keyframes tail {
		0% {
			width: 0;
		}

		30% {
			width: 100px;
		}

		100% {
			width: 0;
		}
	}

	@keyframes shining {
		0% {
			width: 0;
		}
		50% {
			width: 30px;
		}
		100% {
			width: 0;
		}
	}

	@keyframes shooting {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100vw);
		}
	}
`;
