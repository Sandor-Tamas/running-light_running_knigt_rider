let LED_X = 0
let LED_Y = 0
basic.forever(function () {
    led.plot(LED_X, LED_Y)
    led.plot(4 - LED_X, LED_Y)
    basic.pause(500)
    led.unplot(LED_X, LED_Y)
    led.unplot(4 - LED_X, LED_Y)
    if (LED_X == 4) {
        LED_X = 0
    } else {
        LED_X += 1
    }
})
