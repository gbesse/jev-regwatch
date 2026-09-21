// Purpose: Compile-time public API exercise.
import{parseFeed,evaluate,FakeJev}from'../src/index.mjs';parseFeed('<rss/>');void evaluate({}, {}, [], new FakeJev());
