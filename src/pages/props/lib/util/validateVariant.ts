export default (variant:string): boolean | unknown => {
    if (!(['success', 'warning', 'error'].includes(variant))) {
        throw Error(`variant is required and must`
        + ` be either 'success' , 'warning' or 'error'.`
        + ` You passed: ${variant}`)
    }
    return true
}