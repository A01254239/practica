input.onButtonPressed(Button.A, function () {
    numero1 += 1
    basic.showNumber(numero1)
})
input.onButtonPressed(Button.AB, function () {
    texto = Bye
})
input.onButtonPressed(Button.B, function () {
    numero1 += -1
    basic.showNumber(numero1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
let Bye = ""
let texto = ""
let numero1 = 0
numero1 = 0
texto = "hi"
Bye = "bye"
