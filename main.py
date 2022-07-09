def on_received_number_deprecated(receivedNumber):
    if receivedNumber == 0:
        basic.show_string("Hello! I heard you!!")
        basic.show_icon(IconNames.TSHIRT)
        basic.show_icon(IconNames.HEART)
    else:
        basic.clear_screen()
radio.on_received_number_deprecated(on_received_number_deprecated)

def on_button_pressed_a():
    radio.send_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_number(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(0)
basic.show_string("Hi! Can you hear me?")