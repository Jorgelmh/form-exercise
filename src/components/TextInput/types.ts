export default interface Types{
    handleUpdate: (event: any) => void,
    value: string,
    name: string,
    submit: boolean,
    handleNext: () => void,
    message?: string,
}