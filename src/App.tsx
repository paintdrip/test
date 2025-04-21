import React from 'react'
import './App.css'
import { ButtonControl } from './components/ButtonControl/ButtonControl'
import { ButtonControlModel } from './components/ButtonControl/ButtonControlModel'

import { AutoCompModel } from './components/AutoCompControl/AutoCompModel'
import { AutoCompControl } from './components/AutoCompControl/AutoCompControl'

function App() {
	const m1 = new ButtonControlModel()
	const m2 = new ButtonControlModel()

	const autocompleteVM3 = new AutoCompModel(3)
	const autocompleteVM10 = new AutoCompModel(10)

	return (
		<main>
			<p>Контролы с кнопками</p>
			<ButtonControl
				model={m1}
				rightBtns={[
					{ text: 'очистить', onClick: m1.clear },
					{ text: 'hello world', onClick: () => m1.setValue('Hello world!') },
				]}
			/>
			<ButtonControl
				model={m2}
				leftBtns={[{ text: 'проверить на число', onClick: m2.alertIfNumber }]}
				rightBtns={[{ text: 'вывести alert', onClick: m2.alert }]}
			/>

			<p>Контрол автокомплит</p>

			<AutoCompControl
				model={autocompleteVM3}
				placeholder='Выберите страну (выводим 3)'
			/>

			<AutoCompControl
				model={autocompleteVM10}
				placeholder='Выберите страну (выводим 10)'
			/>
		</main>
	)
}

export default App
