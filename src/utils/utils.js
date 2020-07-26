export const development = process.env.NODE_ENV === "development";
export const production = process.env.NODE_ENV === "production";

export function logDebug(message) {
    // eslint-disable-next-line no-console
    if (development) console.log("%c" + message, "color: blue;");
}

export function combineClassName(defaultClassName, additionalClassName) {
    if (!additionalClassName) return defaultClassName;

    return `${defaultClassName} ${additionalClassName}`
}

