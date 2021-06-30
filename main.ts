scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    info.startCountdown(120)
    tiles.setTilemap(tilemap`niveau0`)
    scene.setBackgroundColor(15)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    game.over(false)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . 5 5 . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . 
    . . . . f f f f f f . . . . . 
    . . . . f 9 f f 9 f . . . . . 
    . . . . f f f f f f . . . . . 
    . . f e 5 5 5 5 5 5 e f . . . 
    . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . 
    . . . . f f f f f f . . . . . 
    . . . . . f . . f . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`niveau4`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
