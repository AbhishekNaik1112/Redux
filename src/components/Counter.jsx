import React, { useState } from "react";
import { createStore } from "redux";
import { likeReducer } from "./Reducer";
import { like, dislike } from "./Action";
import { useEffect } from "react";

const store = createStore(likeReducer);

export default function Counter() {
  const [count, setCounter] = useState(store.getState().count); //getState-Returns the current state equal to the last value returned by the store's reducer
  //dispatch-Dispatches an action
  //subscribe-Adds a change listener  unsubscribe-stops the listener from reacting to changes

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCounter(store.getState().count);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h3 className="text-4xl font-bold mb-4">{count}</h3>
      <div className="flex space-x-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => {
            store.dispatch(like());
            console.log("Liked",store.getState().count);
          }}
        >
          Like
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={() => {
            store.dispatch(dislike());
            console.log("Disliked",store.getState().count);
          }}
        >
          Dislike
        </button>
      </div>
    </div>
  );
}
