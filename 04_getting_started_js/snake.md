# Snake

## 🔖 Материали: 

- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
- JavaScript Patterns - Stefanov
- https://addyosmani.com/resources/essentialjsdesignpatterns/book/

## _> Create the game *snake*.

The game has the following elements:

    * one board
    * one snake
    * one or more apples

The snake moves into given direction. The user controls the direction with the
keyboard. Game should be painted on Canvas.

When the snake collides with an apple, the snake takes the apple energy.
Energy could be of two types:

    * energy that make the snake bigger/smaller
    * energy that makes the snake move faster/slower

Apples could be added to the game dynamically (like plug-ins).
Every apple should react on the following events:

    * game start (the apple receives the board and could place itself on a empty
      position)
    * colliding with the snake (the apple receives the shake and could change
      its energy)

When the snake collide with the borders, it dies and the game is over.
When the snake length shrink to 0, it dies and the game is over.

Implementation requirements:

- Separate the game in modules with `Revealing Module Pattern`
- Use `Observer Pattern`
