export function formatDisplayDate(date: string) {
    return new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(`${date}T12:00:00`));
}

export function readTimeLabel(minutes: number) {
    return `${minutes} min de leitura`;
}
