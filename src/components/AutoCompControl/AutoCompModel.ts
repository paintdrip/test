import { makeAutoObservable, runInAction } from 'mobx'
import { getCountryByName, CountryInfo } from '../../api/apiService'

export class AutoCompModel {
	value = ''
	suggestions: CountryInfo[] = []
	isLoading = false
	maxSuggestions: number

	constructor(maxSuggestions: number) {
		makeAutoObservable(this)
		this.maxSuggestions = maxSuggestions
	}

	setValue = (val: string) => {
		this.value = val
		this.fetchSuggestions(val)
	}

	selectSuggestion = (country: CountryInfo) => {
		this.value = country.name
		this.suggestions = []
	}

	fetchSuggestions = async (query: string) => {
		if (!query) {
			this.suggestions = []
			return
		}

		this.isLoading = true

		try {
			const result = await getCountryByName(query)

			const unique = Array.from(
				new Map(result.map((c) => [c.name, c])).values()
			)

			runInAction(() => {
				this.suggestions = unique.slice(0, this.maxSuggestions)
				this.isLoading = false
			})
		} catch (err) {
			console.error('Failed to fetch countries', err)
			runInAction(() => {
				this.suggestions = []
				this.isLoading = false
			})
		}
	}
}
