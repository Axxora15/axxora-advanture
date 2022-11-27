namespace SpriteKind {
    export const flower = SpriteKind.create()
    export const heart = SpriteKind.create()
    export const lisa = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heart, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    tiles.placeOnRandomTile(heart, assets.tile`myTile5`)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Axxora.vy == 0) {
        Axxora.vy = -150
    }
})
function startovaer () {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level5`)
    } else {
    	
    }
    tiles.placeOnRandomTile(Axxora, assets.tile`myTile4`)
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
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
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        heart = sprites.create(img`
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
            `, SpriteKind.heart)
        animation.runImageAnimation(
        heart,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . 2 2 2 2 . . 2 2 2 2 . . . . 
            . 2 2 2 3 2 2 2 2 2 2 2 2 . . . 
            . 2 2 3 2 2 2 2 2 2 2 2 2 . . . 
            . 2 3 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 3 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 3 2 2 2 2 2 2 . . . . . 
            . . . . 2 3 2 2 2 2 . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . . 2 2 2 . . 2 2 2 . . . . . 
            . . . 2 3 2 2 2 2 2 2 . . . . . 
            . . . 3 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . 3 2 2 2 2 2 2 2 . . . . . 
            . . . 2 3 2 2 2 2 2 2 . . . . . 
            . . . . 2 3 2 2 2 2 . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 . . . . 2 . . . . . . 
            . . . . 2 2 . . 2 2 . . . . . . 
            . . . . 3 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 3 2 2 2 2 2 . . . . . . 
            . . . . 2 3 2 2 2 2 . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 3 2 2 2 . . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 3 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . 3 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 . . 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 3 2 2 2 . . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 . . . . 2 . . . . . . 
            . . . . 2 2 . . 2 2 . . . . . . 
            . . . . 3 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 3 2 2 2 2 2 . . . . . . 
            . . . . 2 3 2 2 2 2 . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . . 2 2 2 . . 2 2 2 . . . . . 
            . . . 2 3 2 2 2 2 2 2 . . . . . 
            . . . 3 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . 3 2 2 2 2 2 2 2 . . . . . 
            . . . 2 3 2 2 2 2 2 2 . . . . . 
            . . . . 2 3 2 2 2 2 . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . 2 2 2 2 . . 2 2 2 2 . . . . 
            . . 2 2 3 2 2 2 2 2 2 2 . . . . 
            . . 2 3 2 2 2 2 2 2 2 2 . . . . 
            . . 3 2 2 2 2 2 2 2 2 2 . . . . 
            . . 2 3 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 3 2 2 2 2 2 2 . . . . . 
            . . . . 2 3 2 2 2 2 . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . 2 2 2 2 . . 2 2 2 2 . . . . 
            . 2 2 2 3 2 2 2 2 2 2 2 2 . . . 
            2 2 2 3 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 3 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 3 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 3 2 2 2 2 2 2 . . . . . 
            . . . . 2 3 2 2 2 2 . . . . . . 
            . . . . . 2 3 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(heart, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    lisa = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 f f f f f f f 1 . . . . 
        . . 1 f f f f f f f f f 1 . . . 
        . 1 f f f f f f f f f f f 1 . . 
        . 1 f f f f f f f f f f f 1 . . 
        . 1 f f f f f f f f f f f 1 . . 
        . 1 f f f f f f f f f f f 1 . . 
        . 1 f f f f f f f f f f f 1 . . 
        . 1 f f f f f f f f f f f 1 . . 
        . 1 f f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f 1 . . . 
        . . . 1 f f f f f f f 1 . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.lisa)
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.placeOnTile(lisa, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (Axxora.y < sprite.y) {
        sprite.destroy()
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
        info.changeScoreBy(-3)
        sprite.destroy()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.lisa, function (sprite, otherSprite) {
    level += 1
    startovaer()
})
let bee: Sprite = null
let lisa: Sprite = null
let flower: Sprite = null
let heart: Sprite = null
let Axxora: Sprite = null
let level = 0
game.showLongText("once upon a time there is a kid ,his name is axxora ,axxora is a friend of princess , princess name is jackline ,one day there come some kidnapper from another kingdom and you know what they do", DialogLayout.Full)
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`mountains`)
level = 0
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
startovaer()
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
    } else if (Axxora.x % 1 != 0) {
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
    if ((Axxora.isHittingTile(CollisionDirection.Left) || Axxora.isHittingTile(CollisionDirection.Right)) && Axxora.vy > 0) {
        Axxora.vx = 0
        Axxora.vy = 0
    } else {
        Axxora.ay = 350
    }
})
