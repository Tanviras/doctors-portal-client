import React from 'react';

const DateFormatting = ({date}) => {
    

    function formatDate(date) {
        var day = date.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        var year = date.getFullYear();
        return day + "-" + month + "-" + year;
    }


    return (
        <div>
           { formatDate(new Date(date))}
        </div>
    )
    
};

export default DateFormatting;