import React, { useState, version } from "react";
import Card from "./Card";

export default function CardList({ threads, onVoteUp, onVoteDown }) {
  return (
    <div className="threads__list">
      {threads.map((thread) => (
        <Card key={thread.id} {...thread} onVoteUp={onVoteUp} onVoteDown={onVoteDown} />
      ))}
    </div>
  );
}
