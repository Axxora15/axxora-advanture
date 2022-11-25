scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.hearts)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Axxora.vy == 0) {
        Axxora.vy = -150
    }
})
let Axxora: Sprite = null
scene.setBackgroundColor(9)
Axxora = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . f f 8 f f . . . . . 
    . . . . . d f 8 2 8 f d . . . . 
    . . . . . . f 8 8 8 f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . 7 f . f 7 . . . . . 
    . . . . . . . f . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Axxora, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Axxora.ay = 350
scene.cameraFollowSprite(Axxora)
