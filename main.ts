input.onButtonPressed(Button.A, function () {
    Lives += 1
})
input.onButtonPressed(Button.B, function () {
    Lives += -1
})
let Lives = 3
basic.forever(function () {
    basic.showNumber(Lives)
    if (Lives == 0) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.showString("You lose")
    }
})
