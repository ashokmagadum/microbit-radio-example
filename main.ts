radio.onReceivedNumberDeprecated(function on_received_number_deprecated(receivedNumber: number) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(1)
})
radio.setGroup(0)
