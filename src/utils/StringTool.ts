
export const StringTool = 
{
    isValidEmailFormat(text: string)
    {
        const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return patt.test(text)
    },
}