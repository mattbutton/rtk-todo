import React from 'react'

interface TodoProps {
  completed: boolean,
  text: string,
  onClick: () => any,
}

export default function TodoListItem({ completed, text, onClick }: TodoProps) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )
}