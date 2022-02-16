import { useReducer } from 'react';
import ItemForm from '../../components/Form/ItemForm';

const initialEntry = [
  { id: 0, text: 'Meat 🍖', done: false },
  { id: 1, text: 'Rice 🍚', done: false },
  { id: 2, text: 'drink 🍶 ', done: false },
];

function itemReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edited': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shop() {
  const [items, dispatch] = useReducer(itemReducer, initialEntry);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  const handleEditItem = (task) => {
    dispatch({
      type: 'edited',
      task,
    });
  };
  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };
  return (
    <div>
      <ItemForm handleAddItem={handleAddItem} />
    </div>
  );
}
