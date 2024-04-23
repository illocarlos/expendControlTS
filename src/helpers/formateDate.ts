
export function formateDate(date: string): string {
    const dateObj = new Date(date)

    const option: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Intl.DateTimeFormat('en-EU', option).format(dateObj)
}
