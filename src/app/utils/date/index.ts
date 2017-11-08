
const IsoDateToDate = (iso: string): string => {
    const d = new Date(iso);
    const event = d.toLocaleDateString('en-GB');
    return event.split('/').reverse().join('-');
};

const eventDate = (date: any): any => {

    if (date) {
      const d = date.split('-');
      return new Date( Date.UTC(Number.parseInt(d[0]), Number.parseInt(d[1]) - 1, Number.parseInt(d[2]), 0, 0, 0));
    }

    return '';
};

export {
    IsoDateToDate,
    eventDate
};

