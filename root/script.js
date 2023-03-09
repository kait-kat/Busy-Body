const moment = require("moment")

$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"))

    $(".time-block").each(function() {
        const currentHour = moment().hours()
        const blockHour = parseInt($(this).attr("id"))

        if (blockHour < currentHour) {
            $(this).children(".row").children(".description").addClass("past")
         } else if (blockHour === currentHour) {
            $(this).children(".row").children(".description").addClass("present")
         } else {
            $(this).children(".row").children(".description").addClass("future")
         }
    })

        $(".saveBtn").on("click", function() {
            const eventText = $(this).siblings(".description").val().trim()
            const eventHour = $(this).siblings(".hour").text().trim()
            const eventTime = moment().format("YYYY-MM-DD") + "-" + eventHour

            localStorage.setItem(eventTime, eventText)

        })

        $(".time-block").each(function() {
            const eventTime = $(this).attr("id")
            const eventText = localStorage.getItem(eventTime)

            $(this).children(".row").children(".description").val(eventText)
        })

})