"use client";

import React, { useEffect } from "react";

const Input = () => {
  useEffect(() => {}, []);

  const lista = [1, 2, 3, 4, 5, 6];
  console.log("AAAAAAAAA");

  return (
    <div>
      {lista.map((item, id) => (
        <div key={id}>{item}</div>
      ))}
    </div>
  );
};

export default Input;
