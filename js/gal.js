function updateLastUpdatedTime() {
    var lastUpdatedElements = document.querySelectorAll('[id^="last-updated-"]');
    var currentTime = new Date();

    for (var i = 0; i < lastUpdatedElements.length; i++) {
        var element = lastUpdatedElements[i];
        var lastUpdatedTimeText = element.textContent.split(" ")[2]; // Extract time value from text
        var lastUpdatedTime = new Date(currentTime - lastUpdatedTimeText * 60000); // Calculate corresponding Date object

        var timeDifference = Math.floor((currentTime - lastUpdatedTime) / 60000); // Difference in minutes

        element.textContent = (timeDifference === 0) ? "Last updated just now" : "Last updated " + timeDifference + " mins ago";
    }
}

// Call the updateLastUpdatedTime function every minute to keep the time updated
setInterval(updateLastUpdatedTime, 60000);

// Initially update the last updated time
updateLastUpdatedTime();