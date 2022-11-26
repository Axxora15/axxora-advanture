namespace SpriteKind {
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.hearts)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Axxora.vy == 0) {
        Axxora.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    if (flower.y > sprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
        info.changeScoreBy(-3)
    }
    if (info.score() == 15) {
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 1 1 f 1 1 f . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . . . . 1 f 1 . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . f f 5 f 5 f f . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . f f 5 f 5 f f . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 1 1 f 1 1 f . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . . . . 1 f 1 . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . f f 5 f 5 f f . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . f f 5 f 5 f f . . . . . . 
        . . . f 5 5 f 5 5 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    bee.setPosition(Axxora.x + 80, Axxora.y - 80)
    bee.follow(Axxora)
})
let bee: Sprite = null
let flower: Sprite = null
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
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        . . . . 3 3 . 3 3 . . . . . . . 
        . . . . 3 3 7 3 3 . . . . . . . 
        . . . . . 3 3 3 . . . . . . . . 
        . . . . . . 7 . . 7 . . . . . . 
        . . . . 7 . 7 . 7 . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . e e e e . . . . . . . . 
        . . . e e 3 7 e e . . . . . . . 
        `, SpriteKind.flower)
    tiles.placeOnTile(flower, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    if (Axxora.vy < 0) {
        Axxora.setImage(img`
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
            . . . . . . 7 f . d 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Axxora.vy > 0) {
        Axxora.setImage(img`
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
            . . . . . . 7 . . . 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        if (Axxora.vx < 0) {
            Axxora.image.flipX()
        }
    } else if (Axxora.x % 2 != 0) {
        Axxora.setImage(img`
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
            . . . . . . 7 f f . 7 . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
})
