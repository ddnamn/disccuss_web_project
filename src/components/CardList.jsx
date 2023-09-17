import React, { useState } from "react";
import Card from "./Card";

export default function CardList({ threads }) {
  return (
    <div className="threads__list">
      {threads.map((thread) => (
        <Card key={thread.id} {...thread} />
      ))}
    </div>
  );
}
