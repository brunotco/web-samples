const tables = document.querySelectorAll('table');

// This is to fix the accessibility when transformed on smaller screens
tables.forEach(table => {
    table.setAttribute('role', 'table');
    const captions = table.querySelectorAll('caption');
    captions.forEach(caption => {
        caption.setAttribute('role','caption');
    });
    const rowGroups = table.querySelectorAll('thead, tbody, tfoot');
    rowGroups.forEach(rowGroup => {
        rowGroup.setAttribute('role','rowgroup');
        const rows = rowGroup.querySelectorAll('tr');
        rows.forEach(row => {
            row.setAttribute('role', 'row');
            const headers = row.querySelectorAll('th');
            headers.forEach(header => {
                header.setAttribute('role', 'columnheader');
            });
            const cells = row.querySelectorAll('td');
            cells.forEach(cell => {
                cell.setAttribute('role', 'cell');
            });
        });
    });
});