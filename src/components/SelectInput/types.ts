import { Thread } from '../../FormInput'

export default interface Types {
    submit: boolean,
    handleNext: () => void,
    handleUpdate: (event: any) => void
    name: string,
    handlePrevious: () => void,
    value: Thread | null
}