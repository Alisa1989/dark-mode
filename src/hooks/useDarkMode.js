import useLocalStorage from "./useLocalStorage"


const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('darkMode', initialValue)
    return [someValue, setSomeValue];
}

export default useDarkMode 