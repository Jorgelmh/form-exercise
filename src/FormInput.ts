/**
 *  ============================
 *        LEVEL OF THREAT
 *  ============================
 */
export enum Thread {Low = 'Low', Medium = 'Medium', High =' High'}

/**
 *  ============================
 *      MODEL FORM DATA
 *  ============================
 */
export default interface FormInput{
    name: string,
    email: string,
    thread: Thread | null
}