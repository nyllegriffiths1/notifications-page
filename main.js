function readMessages() {
    // Grabbing elements needed with the class name 'unread'
    let readNotifications = document.querySelectorAll('.unread');
    
    // Updating the number of notifications
    let numberOfNotifications = document.getElementById('number-of-notifications');
    numberOfNotifications.textContent = "0";
    numberOfNotifications.style.paddingLeft = "5px";
    
    // You might want to do something with the selected elements with class 'unread'
    // For example, you can iterate over them and perform some action:
    readNotifications.forEach(notification => {
        // Do something with each notification element
        // For example, change its background color
        notification.style.backgroundColor = 'white';
    });
}





