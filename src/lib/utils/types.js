/**
	 * Enum for languages.
	 * @readonly
	 * @enum {string}
	 */
export const languagesEnum = {
    ESPANISH: "es",
    ENGLISH: "en",
}
/**
 * Enum for themes.
 * @readonly
 * @enum {string}
 */
export const themesEnum = {
    DARK: "dark",
    LIGHT: "light",
}

/**
 * @typedef {Object} DataContext
 * @property {import("svelte/store").Writable<"es"|"en">} lang - El nombre del usuario.
 * @property {import("svelte/store").Writable<"dark"|"light">} theme - La edad del usuario.
 */