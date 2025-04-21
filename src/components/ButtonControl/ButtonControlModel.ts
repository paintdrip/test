import { makeAutoObservable } from 'mobx'

export class ButtonControlModel {
	value = ''

	constructor() {
		makeAutoObservable(this)
	}

	alertIfNumber = () => {
		if (this.value.trim() !== '' && !isNaN(Number(this.value))) {
			window.alert(Number(this.value))
		}
	}

	setValue = (newValue: string) => {
		this.value = newValue
	}

	clear = () => {
		this.value = ''
	}

	alert = () => {
		if (this.value) {
			window.alert(this.value)
		}
	}
}
