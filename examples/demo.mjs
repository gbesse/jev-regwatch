// Purpose: Demonstrate mandatory wake-up bypass with synthetic artifacts.
import{evaluate,FakeJev}from'../src/index.mjs';const p=new FakeJev([0]);console.log(await evaluate({title:'Emergency prohibition',text:'synthetic',category:'emergency'},{id:'official'},[{id:'policy',owner:'compliance'}],p,{mandatory:{categories:['emergency']}}),{providerCalls:p.calls.length});
