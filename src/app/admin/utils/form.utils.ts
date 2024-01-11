export function getString(formData: FormData, formName: string): string {
    return formData.get(formName)?.valueOf().toString() || "";
}
