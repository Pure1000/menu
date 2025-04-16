input.onButtonPressed(Button.A, function () {
    Opcion = Opcion + 1
    Menu()
})
input.onButtonPressed(Button.AB, function () {
    Opcion = Opcion + 1
    Menu()
})
input.onButtonPressed(Button.B, function () {
    SeleccionMenu()
})
function SeleccionMenu () {
    if (Opcion == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
        basic.showNumber(Opcion)
    } else if (Opcion == 2) {
        basic.showIcon(IconNames.EighthNote)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.showNumber(Opcion)
    } else if (Opcion == 3) {
        while (Opcion == 3) {
            if (input.lightLevel() < 75) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else if (input.lightLevel() > 150) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
            } else {
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    `)
            }
        }
    } else if (Opcion == 4) {
        while (Opcion == 4) {
            basic.showNumber(input.temperature())
        }
    } else {
        basic.showIcon(IconNames.No)
    }
}
function Menu () {
    if (Opcion < 1 || Opcion > 4) {
        Opcion = 1
        basic.showNumber(Opcion)
    } else {
        basic.showNumber(Opcion)
    }
}
let Opcion = 0
basic.showIcon(IconNames.Ghost)
