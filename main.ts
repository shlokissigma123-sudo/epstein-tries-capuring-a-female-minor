sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
    game.setGameOverMessage(true, "HAHA THE MINOR ESCAPED")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite20260408T093108242Z.setPosition(randint(10, 120), randint(10, 120))
    info.changeScoreBy(1)
    info.startCountdown(3)
})
info.onScore(20, function () {
    game.gameOver(true)
})
let mySprite20260408T093108242Z: Sprite = null
scene.setBackgroundColor(15)
let mySprite20260408T092338478Z = sprites.create(img`
    .............ddd1............
    ..........dbddbbdddd1........
    .........dbbbdddbbeb.........
    .........dbbdddd3beeb........
    ..........dbbddddbecb........
    ..........bbbbbbeeeeb........
    .........dbeccebccccb........
    .........dbbbbbbccccb........
    .........dbbbbbbeeeeb........
    .........beebeccceec.........
    .........dbbeeeccceb.........
    ........ddbeeeeffcebb........
    .......dddbbbecccccbbb.......
    .......ddbeebbbececcbbb......
    .......ddbbeeccccccccbb......
    `, SpriteKind.Player)
controller.moveSprite(mySprite20260408T092338478Z)
mySprite20260408T093108242Z = sprites.create(img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . e f e 4 d d d d d f f . . 
    . e 4 d d e b b b f f e f . 
    . . e d d e 3 3 b e f 4 e . 
    . . . e e f 6 6 6 6 f . . . 
    . . . . f f f f f f f . . . 
    . . . . . . . . f f f . . . 
    `, SpriteKind.Food)
let myEnemy = sprites.create(img`
    . . . . . e e e e e e e e . . . 
    . . e e e e e e e e e e e e e e 
    . . e e e e e e e e e e e e e e 
    . . e e f f f f f f f f f f e e 
    . . f f f f f f f f f f f f f f 
    . . f f f 1 2 f f f f 1 2 f f f 
    . . f f f 1 1 f f f f 1 1 f f f 
    . . f 1 f f f f e e f f f f 1 f 
    . . f f 1 f f f e e f f f 1 f f 
    . . f f 2 1 f f f f f f 1 2 f f 
    . . . f 2 2 1 1 1 1 1 1 2 2 f . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.setPosition(0, 0)
myEnemy.follow(mySprite20260408T092338478Z, 30)
myEnemy.setVelocity(5, 5)
