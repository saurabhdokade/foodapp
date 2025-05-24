import React from 'react';
import { Link } from 'react-router-dom';
import classes from './tags.module.css';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://food-app-ijkw.vercel.app";

export default function Tags({ tags, forFoodPage }) {
  return (
    <div
      className={classes.container}
      style={{
        justifyContent: forFoodPage ? 'start' : 'center',
      }}
    >
      {tags.map(tag => (
        <Link key={tag.name} to={`${API_BASE_URL}/tag/${tag.name}`}>
          {tag.name}
          {!forFoodPage && `(${tag.count})`}
        </Link>
      ))}
    </div>
  );
}
