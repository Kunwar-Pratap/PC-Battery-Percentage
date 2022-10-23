const batteryLevel = document.querySelector('.battery-level');

navigator.getBattery().then(function (battery) {
    const level = battery.level;
    const batteryStatus = level * 100 + "%";
    batteryLevel.innerHTML = batteryStatus;
});