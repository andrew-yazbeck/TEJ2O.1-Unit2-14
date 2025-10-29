/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Andrew
 * Created on: Oct 2025
 * This program shows while loops in action
*/

// variables
let sprite: game.LedSprite = null
let loopCounterX = 0
let loopCounterY = 0


// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when "A" is pressed, the pixels move down in a diagnol
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounterX = 0
    sprite = game.createSprite(0, 0)

    while (loopCounterY <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY = loopCounterY + 1
        basic.pause(500)
    }
    while (loopCounterX <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX = loopCounterX + 1
        basic.pause(500)
    }
    while (loopCounterY >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY = loopCounterY - 1
        basic.pause(500)
    }
    while (loopCounterX >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX = loopCounterX - 1
        basic.pause(500)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// when "B" is pressed, the pixels move around the outside edge of the LED matrix
input.onButtonPressed(Button.B, function () {
    // setup
    basic.clearScreen()
    loopCounterX = 5
    sprite = game.createSprite(0, 0)

    while (loopCounterX <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX = loopCounterX + 1
        basic.pause(500)
    }
    while (loopCounterY <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY = loopCounterY + 1
        basic.pause(500)
    }
    while (loopCounterX >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX = loopCounterX - 1
        basic.pause(500)
    }
    while (loopCounterY >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY = loopCounterY - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
