radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("Hello! I heard you!!")
        basic.showIcon(IconNames.TShirt)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(0)
basic.showString("Hi! Can you hear me?")
