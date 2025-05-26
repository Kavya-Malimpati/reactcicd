// write a method to format the number to us currentency format nd add doller before the number
export const formatCurrency = (value: number | string): string => {
    if (typeof value === "string") {
        value = parseFloat(value);
    }
    return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};
