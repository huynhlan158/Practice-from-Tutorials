const OPTION_STORAGE_KEY = 'MUSIC PLAYER OPTIONS'

export default {
    setOption(option) {
        localStorage.setItem(OPTION_STORAGE_KEY, JSON.stringify(option))
    },
    getOption() {
        return JSON.parse(localStorage.getItem(OPTION_STORAGE_KEY)) || []
    }
}