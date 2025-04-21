import React from 'react'
import { observer } from 'mobx-react-lite'
import { ButtonControlModel } from './ButtonControlModel'

type ButtonProps = {
	text: string
	onClick: () => void
}

type ButtonControlProps = {
	model: ButtonControlModel
	leftBtns?: ButtonProps[]
	rightBtns?: ButtonProps[]
	placeholder?: string
}

export const ButtonControl = observer(
	({
		model,
		leftBtns = [],
		rightBtns = [],
		placeholder,
	}: ButtonControlProps) => {
		return (
			<div className='container'>
				{leftBtns.map((btn, idx) => (
					<button
						className='container__btn'
						key={`left-${idx}`}
						onClick={btn.onClick}
					>
						{btn.text}
					</button>
				))}

				<input
					className='container__input'
					type='text'
					value={model.value}
					onChange={(e) => model.setValue(e.target.value)}
					placeholder={placeholder}
				/>

				{rightBtns.map((btn, idx) => (
					<button
						className='container__btn'
						key={`right-${idx}`}
						onClick={btn.onClick}
					>
						{btn.text}
					</button>
				))}
			</div>
		)
	}
)
