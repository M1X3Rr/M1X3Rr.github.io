function updateLastUpdatedTime() {
    var lastUpdatedElements = document.querySelectorAll('[id^="last-updated-"]');
    var currentTime = new Date();

    for (var i = 0; i < lastUpdatedElements.length; i++) {
        var element = lastUpdatedElements[i];
        var lastUpdatedText = element.textContent;
        var regexResult = lastUpdatedText.match(/(\d{2}:\d{2})/); // Extract time value using regex

        if (regexResult && regexResult.length > 0) {
            var lastUpdatedTimeString = regexResult[0];
            var lastUpdatedTime = new Date(currentTime.toDateString() + ' ' + lastUpdatedTimeString); // Create a Date object from the extracted time

            var timeDifference = Math.floor((currentTime - lastUpdatedTime) / 60000); // Difference in minutes

            element.textContent = (timeDifference === 0) ? "Last updated just now" : "Last updated " + timeDifference + " mins ago";
        }
    }
}

// Call the updateLastUpdatedTime function every minute to keep the time updated
setInterval(updateLastUpdatedTime, 60000);

// Initially update the last updated time
updateLastUpdatedTime();