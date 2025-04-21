import React from 'react'
import { observer } from 'mobx-react-lite'
import { AutoCompModel } from './AutoCompModel'

type AutoCompControlProps = {
	model: AutoCompModel
	placeholder?: string
}

export const AutoCompControl = observer(
	({ model, placeholder }: AutoCompControlProps) => {
		return (
			<div className='container'>
				<input
					type='text'
					className='container__input'
					value={model.value}
					onChange={(e) => model.setValue(e.target.value)}
					placeholder={placeholder}
				/>

				{model.suggestions.length > 0 && (
					<ul className='container__ul'>
						{model.suggestions.map((elem, idx) => (
							<li
								className='container__ul-li'
								key={idx}
								onClick={() => model.selectSuggestion(elem)}
							>
								<div className='container__ul-li__elem'>
									<img src={elem.flag} alt={elem.name} /> {elem.name},{' '}
									{elem.fullName}
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		)
	}
)
