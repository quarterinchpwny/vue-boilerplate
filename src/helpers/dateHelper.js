function formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    if (format === 'YYYY-MM-DD') {
        return `${year}-${month}-${day}`;
    }
    // Add more formats as needed
    return date;
}

export default formatDate;
